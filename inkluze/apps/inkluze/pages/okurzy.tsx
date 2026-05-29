interface IRenderedCourse {
  date: string;
  dateLabel: string;
  detailNote?: string;
  title: string;
  courseLink: string;
  area: string;
  price: string;
  lecturer: string;
  location: string;
  note?: string;
  signupMailto: string;
}

interface IOkurzyState {
  courses: IRenderedCourse[];
  allCourses: IRenderedCourse[];
  areas: string[];
  loading: boolean;
  error?: string;
  query: string;
  area: string;
}

class OkurzyPage extends React.Component<{}, IOkurzyState> {
  constructor(props: {}, ctx: sitemapRouter.IContext) {
    super(props, ctx);
    this.state = {
      courses: [],
      allCourses: [],
      areas: [],
      loading: true,
      query: '',
      area: '',
    };
  }

  componentDidMount() {
    kurzyLoadData(payload => {
      var courses = this.createRenderedCourses(payload);
      this.setState({
        courses: courses,
        allCourses: courses,
        areas: kurzyCollectAreas(courses),
        loading: false,
      } as any);
    }, msg => this.setState({ loading: false, error: msg } as any));
  }

  private createRenderedCourses(payload: IKurzyPayload): IRenderedCourse[] {
    if (!payload || !payload.courseTemplates || !payload.courseRuns) return [];
    var templatesById: { [id: string]: IKurzyTemplate } = {};
    payload.courseTemplates.forEach(t => templatesById[t.id] = t);
    var mailBody = "Vaše emailová adresa: \nNázev školy: \nPočet přihlášených pedagogů: \nPoznámka:";
    var rendered = payload.courseRuns
      .filter(r => r && r.isPublished)
      .map(r => {
        var t = templatesById[r.templateId];
        if (!t) return null;
        var dateLabel = r.dateLabel || kurzyFormatDate(r.date);
        var subject = dateLabel + " " + t.title;
        return {
          date: r.date,
          dateLabel: dateLabel,
          detailNote: r.detailNote,
          title: t.title,
          courseLink: t.courseLink,
          area: t.area,
          price: r.priceOverride || t.defaultPrice,
          lecturer: r.lecturerOverride || t.lecturer,
          location: t.location,
          note: r.noteOverride || t.defaultNote,
          signupMailto: r.signupEnabled === false ? "" : "mailto:projekt@langmaster.cz?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(mailBody),
        } as IRenderedCourse;
      })
      .filter(x => !!x);
    rendered.sort((a, b) => a.date.localeCompare(b.date));
    return rendered;
  }

  private getFilteredCourses(): IRenderedCourse[] {
    return this.state.allCourses.filter(c => {
      if (this.state.area && kurzyNormalizeText(c.area).indexOf(kurzyNormalizeText(this.state.area)) < 0) return false;
      if (!this.state.query) return true;
      var haystack = c.title + ' ' + c.area + ' ' + c.lecturer + ' ' + c.dateLabel + ' ' + (c.detailNote || '');
      return kurzyMatchesQuery(haystack, this.state.query);
    });
  }

  render(): JSX.Element {
    var filtered = this.getFilteredCourses();
    return <div>
      <Page>
        <BlockEx header="Termíny kurzů pro Šablony I a II OP JAK">
          <p>Kurzy pro jednotlivce budou probíhat formou videokoference v prostředí ZOOM.</p>
          <p>Po kliknutí na název kurzu se Vám zobrazí jeho obsah. Pokud se chcete na některý z kurzů přihlásit nebo máte ke kurzu nějaký upřesňující dotaz, kontaktujte nás prosím na emailu projekt@langmaster.cz nebo na telefonech 244 460 807, 728 234 285.</p>
          <p>
            Podle předběžného zájmu pedagogů budeme průběžně vypisovat další kurzy a termíny.
            Kompletní seznam všech kurzů v nabídce najdete v{' '}
            {sitemapRouter.doNavigateTag(inkluze.root.prehledkurzu)}.
          </p>
        </BlockEx>
        <BlockEx>
          {this.state.loading ? <p>Načítám seznam kurzů...</p> : null}
          {this.state.error ? <div className='alert alert-danger'>{this.state.error}</div> : null}
          {!this.state.loading && !this.state.error ? <div>
            <KurzyFilterBar
              query={this.state.query}
              area={this.state.area}
              areas={this.state.areas}
              onQueryChange={q => this.setState({ query: q } as any)}
              onAreaChange={a => this.setState({ area: a } as any)}
            />
            <p><strong>Zobrazeno {filtered.length} z {this.state.allCourses.length} termínů.</strong></p>
            {filtered.length ? this.renderCourses(filtered) : (
              this.state.allCourses.length
                ? <p>Žádný termín neodpovídá zadaným filtrům.</p>
                : <p>Aktuálně nejsou vypsány žádné termíny. Podívejte se do{' '}
                  {sitemapRouter.doNavigateTag(inkluze.root.prehledkurzu)}, jaké kurzy nabízíme.</p>
            )}
          </div> : null}
        </BlockEx>
      </Page>
    </div>;
  }

  private renderCourses(courses: IRenderedCourse[]): JSX.Element {
    return <ul className='fa-ul'>
      {courses.map((c, i) => <LiHand key={i}>
        <h4><b>{c.dateLabel} <a href={c.courseLink}>{c.title}</a>{c.detailNote ? " " + c.detailNote : null}</b></h4>
        <h4><Label bsStyle="warning">Oblast: {c.area}</Label></h4>
        <p>Cena: {c.price}, Lektor: {c.lecturer}</p>
        <p>Místo konání: {c.location}</p>
        {c.signupMailto ? <p>Pro přihlášení <a href={c.signupMailto}>klikněte</a> nebo napište email na projekt@langmaster.cz</p> : <p>Přihlášení k tomuto termínu je aktuálně uzavřeno.</p>}
        <p>{c.note || 'v rámci Šablon OP JAK se mohou účastnit všechny cílové skupiny'}</p>
      </LiHand>)}
    </ul>;
  }
}

(OkurzyPage as any).contextTypes = sitemapRouter.childContextTypes;
