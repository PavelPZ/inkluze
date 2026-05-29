interface ICatalogItem {
  template: IKurzyTemplate;
  upcomingDates: string[];
}

interface IPrehledKurzuState {
  items: ICatalogItem[];
  areas: string[];
  loading: boolean;
  error?: string;
  query: string;
  area: string;
  onlyScheduled: boolean;
}

class PrehledKurzuPage extends React.Component<{}, IPrehledKurzuState> {
  constructor(props: {}, ctx: sitemapRouter.IContext) {
    super(props, ctx);
    this.state = {
      items: [],
      areas: [],
      loading: true,
      query: '',
      area: '',
      onlyScheduled: false,
    };
  }

  componentDidMount() {
    kurzyLoadData(payload => {
      var items = this.buildCatalog(payload);
      this.setState({
        items: items,
        areas: kurzyCollectAreas(payload.courseTemplates || []),
        loading: false,
      } as any);
    }, msg => this.setState({ loading: false, error: msg } as any));
  }

  private buildCatalog(payload: IKurzyPayload): ICatalogItem[] {
    var runsByTemplate: { [id: string]: string[] } = {};
    (payload.courseRuns || [])
      .filter(r => r && r.isPublished)
      .sort((a, b) => a.date.localeCompare(b.date))
      .forEach(r => {
        if (!runsByTemplate[r.templateId]) runsByTemplate[r.templateId] = [];
        var label = r.dateLabel || kurzyFormatDate(r.date);
        runsByTemplate[r.templateId].push(label);
      });
    var items = (payload.courseTemplates || []).map(t => ({
      template: t,
      upcomingDates: runsByTemplate[t.id] || [],
    } as ICatalogItem));
    items.sort((a, b) => a.template.title.localeCompare(b.template.title, 'cs'));
    return items;
  }

  private getFilteredItems(): ICatalogItem[] {
    return this.state.items.filter(item => {
      var t = item.template;
      if (this.state.onlyScheduled && !item.upcomingDates.length) return false;
      if (!kurzyTemplateMatchesArea(t, this.state.area)) return false;
      if (!this.state.query) return true;
      var haystack = t.title + ' ' + t.area + ' ' + t.lecturer + ' ' + t.location;
      return kurzyMatchesQuery(haystack, this.state.query);
    });
  }

  render(): JSX.Element {
    var filtered = this.getFilteredItems();
    return <div>
      <Page>
        <BlockEx header='Katalog kurzů DVPP'>
          <p>
            Prohledávejte všechny kurzy v naší nabídce pro šablony OP JAK I a II.
            U každého kurzu uvidíte obsah, oblast a informaci, zda je právě vypsán termín.
          </p>
          <p>
            Aktuálně vypsané termíny s možností přihlášení najdete na stránce{' '}
            {sitemapRouter.doNavigateTag(inkluze.root.okurzy)}.
            Podrobné popisy akreditovaných kurzů dle témat jsou v sekcích{' '}
            {sitemapRouter.doNavigateTag(inkluze.root.kurzyss)} a{' '}
            {sitemapRouter.doNavigateTag(inkluze.root.kurzyii)}.
          </p>
        </BlockEx>
        <BlockEx>
          {this.state.loading ? <p>Načítám katalog kurzů…</p> : null}
          {this.state.error ? <div className='alert alert-danger'>{this.state.error}</div> : null}
          {!this.state.loading && !this.state.error ? <div>
            <KurzyFilterBar
              query={this.state.query}
              area={this.state.area}
              areas={this.state.areas}
              onQueryChange={q => this.setState({ query: q } as any)}
              onAreaChange={a => this.setState({ area: a } as any)}
              extra={<FormGroup>
                <ControlLabel>&nbsp;</ControlLabel>
                <label style={{ display: 'block', fontWeight: 'normal', marginTop: '7px' }}>
                  <input
                    type='checkbox'
                    checked={this.state.onlyScheduled}
                    onChange={(e: any) => this.setState({ onlyScheduled: e.target.checked } as any)}
                  />{' '}Jen s termínem
                </label>
              </FormGroup>}
            />
            <p><strong>Zobrazeno {filtered.length} z {this.state.items.length} kurzů.</strong></p>
            {filtered.length ? this.renderTable(filtered) : <p>Žádný kurz neodpovídá zadaným filtrům.</p>}
          </div> : null}
        </BlockEx>
      </Page>
    </div>;
  }

  private renderTable(items: ICatalogItem[]): JSX.Element {
    return <div className='table-responsive'>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>Název kurzu</th>
            <th>Oblast</th>
            <th>Lektor</th>
            <th>Cena</th>
            <th>Termín</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            var t = item.template;
            return <tr key={t.id}>
              <td><a href={t.courseLink}>{t.title}</a></td>
              <td>{t.area}</td>
              <td>{t.lecturer}</td>
              <td>{t.defaultPrice}</td>
              <td>
                {item.upcomingDates.length
                  ? <span>{item.upcomingDates.join(', ')}{' '}
                    <a href='#' onClick={ev => sitemapRouter.doNavigate(inkluze.root.okurzy, ev)}>(termíny)</a>
                  </span>
                  : <span className='text-muted'>bez vypsaného termínu</span>}
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>;
  }
}

(PrehledKurzuPage as any).contextTypes = sitemapRouter.childContextTypes;
