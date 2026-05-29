interface ICourseTemplate {
  id: string;
  title: string;
  courseLink: string;
  area: string;
  defaultPrice: string;
  lecturer: string;
  location: string;
  defaultNote?: string;
}

interface ICourseRun {
  id: string;
  templateId: string;
  date: string;
  dateLabel?: string;
  detailNote?: string;
  isPublished: boolean;
  priceOverride?: string;
  lecturerOverride?: string;
  noteOverride?: string;
  signupEnabled?: boolean;
}

interface ICourseData {
  courseTemplates: ICourseTemplate[];
  courseRuns: ICourseRun[];
}

interface IAdminKurzyState {
  authenticated: boolean;
  loginPassword: string;
  loading: boolean;
  saving: boolean;
  message?: string;
  error?: string;
  data: ICourseData;
  activeTab: string;
  selectedTemplateId?: string;
  selectedRunId?: string;
}

var adminSessionKey = 'inkluzeAdminPwd';

class AdminKurzyPage extends React.Component<{}, IAdminKurzyState> {
  constructor(props: {}, ctx: sitemapRouter.IContext) {
    super(props, ctx);
    this.state = {
      authenticated: false,
      loginPassword: '',
      loading: false,
      saving: false,
      activeTab: 'runs',
      data: { courseTemplates: [], courseRuns: [] }
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem(adminSessionKey)) {
      this.setState({ authenticated: true, loading: true } as any, () => this.loadData());
    }
  }

  render(): JSX.Element {
    if (!this.state.authenticated) {
      return <div>
        <Page>
          <BlockEx header="Přihlášení">
            <p><a href="/index.html?home|okurzy">Zpět na termíny kurzů</a></p>
            {this.state.error ? <div className='alert alert-danger'>{this.state.error}</div> : null}
            <FormGroup>
              <ControlLabel>Heslo</ControlLabel>
              <FormControl
                type="password"
                value={this.state.loginPassword}
                onChange={(e: any) => this.setState({ loginPassword: e.target.value, error: null } as any)}
                onKeyDown={(e: any) => { if (e.keyCode === 13) this.login(); }}
              />
            </FormGroup>
            <Button bsStyle="primary" onClick={() => this.login()} disabled={this.state.loading}>
              {this.state.loading ? 'Ověřuji...' : 'Přihlásit'}
            </Button>
          </BlockEx>
        </Page>
      </div>;
    }

    return <div>
      <Page>
        <BlockEx header="Administrace termínů kurzů">
          <p>Šablony kurzů a jejich termíny. Na webu se zobrazí jen termíny s přepínačem <strong>Publikováno</strong>.</p>
          <p>
            <a href="/index.html?home|okurzy">Zpět na veřejný přehled termínů</a>
            {' · '}
            <a href="#" onClick={ev => { ev.preventDefault(); this.logout(); }}>Odhlásit</a>
          </p>
          {this.state.loading ? <p>Načítám data...</p> : null}
          {this.state.error ? <div className='alert alert-danger'>{this.state.error}</div> : null}
          {this.state.message ? <div className='alert alert-success'>{this.state.message}</div> : null}
          {this.state.loading ? null : <div>
            <Nav bsStyle="tabs" activeKey={this.state.activeTab}>
              <NavItem eventKey="templates" href="#" onClick={ev => { ev.preventDefault(); this.setState({ activeTab: 'templates' } as any); }}>Šablony kurzů</NavItem>
              <NavItem eventKey="runs" href="#" onClick={ev => { ev.preventDefault(); this.switchToRunsTab(); }}>Termíny</NavItem>
            </Nav>
            <div style={{ marginTop: '15px' }}>
              {this.state.activeTab === 'templates' ? this.renderTemplatesTab() : this.renderRunsTab()}
            </div>
            <hr />
            <Button bsStyle="primary" onClick={() => this.saveData()} disabled={this.state.saving}>
              {this.state.saving ? 'Ukládám...' : 'Uložit vše'}
            </Button>
          </div>}
        </BlockEx>
      </Page>
    </div>;
  }

  private renderTemplatesTab(): JSX.Element {
    var templates = this.sortedTemplates();
    return <Row>
      <Col md={5}>
        <div className="form-group">
          <Button bsStyle="default" onClick={() => this.createTemplate()}>+ Nová šablona</Button>
        </div>
        <div className="form-group">
          <label>Vyberte šablonu (abecedně)</label>
          <select className="form-control" value={this.state.selectedTemplateId || ''} onChange={e => this.selectTemplate((e.target as HTMLSelectElement).value)}>
            <option value="">-- vyberte šablonu --</option>
            {templates.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
          </select>
        </div>
      </Col>
      <Col md={7}>
        {this.renderTemplateEditor()}
      </Col>
    </Row>;
  }

  private renderRunsTab(): JSX.Element {
    var templates = this.sortedTemplates();
    var runs = this.sortedRunsForSelectedTemplate();
    return <Row>
      <Col md={6}>
        <div className="form-group">
          <label>Šablona kurzu</label>
          <select className="form-control" value={this.state.selectedTemplateId || ''} onChange={e => this.selectTemplate((e.target as HTMLSelectElement).value)}>
            <option value="">-- vyberte šablonu --</option>
            {templates.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
          </select>
        </div>
        <div className="form-group">
          <Button bsStyle="default" onClick={() => this.createRun()} disabled={!this.state.selectedTemplateId}>+ Nový termín</Button>
        </div>
        <div className="form-group">
          <label>Termín</label>
          <select className="form-control" value={this.state.selectedRunId || ''} onChange={e => this.setState({ selectedRunId: (e.target as HTMLSelectElement).value } as any)}>
            <option value="">-- vyberte termín --</option>
            {runs.map(r => <option key={r.id} value={r.id}>{r.date}{r.dateLabel ? ' (' + r.dateLabel + ')' : ''} — {r.isPublished ? 'publikováno' : 'skryto'}</option>)}
          </select>
        </div>
        {this.renderRunEditor()}
      </Col>
      <Col md={6}>
        <h4>Náhled na webu</h4>
        {this.renderRunPreview()}
      </Col>
    </Row>;
  }

  private renderTemplateEditor(): JSX.Element {
    var t = this.currentTemplate();
    if (!t) return <p className="text-muted">Vyberte šablonu kurzu v seznamu vlevo.</p>;
    return <div className="panel panel-default">
      <div className="panel-heading"><strong>Upravit šablonu</strong></div>
      <div className="panel-body">
        {this.input("Interní ID", t.id, v => this.updateTemplate({ id: v }))}
        {this.input("Název kurzu", t.title, v => this.updateTemplate({ title: v }))}
        {this.input("Odkaz na obsah kurzu", t.courseLink, v => this.updateTemplate({ courseLink: v }))}
        {this.input("Oblast", t.area, v => this.updateTemplate({ area: v }))}
        {this.input("Výchozí cena", t.defaultPrice, v => this.updateTemplate({ defaultPrice: v }))}
        {this.input("Výchozí lektor", t.lecturer, v => this.updateTemplate({ lecturer: v }))}
        {this.input("Místo konání", t.location, v => this.updateTemplate({ location: v }))}
        {this.input("Výchozí poznámka", t.defaultNote || '', v => this.updateTemplate({ defaultNote: v }))}
        <Button bsStyle="danger" onClick={() => this.deleteTemplate()}>Smazat šablonu</Button>
      </div>
    </div>;
  }

  private renderRunEditor(): JSX.Element {
    var r = this.currentRun();
    if (!r) return <p className="text-muted">Vyberte termín nebo vytvořte nový.</p>;
    return <div className="panel panel-default">
      <div className="panel-heading"><strong>Upravit termín</strong></div>
      <div className="panel-body">
        {this.input("Interní ID termínu", r.id, v => this.updateRun({ id: v }))}
        {this.input("Datum (YYYY-MM-DD)", r.date, v => this.updateRun({ date: v }))}
        {this.input("Datum – text na webu (volitelné)", r.dateLabel || '', v => this.updateRun({ dateLabel: v }))}
        {this.input("Poznámka u termínu (např. zrušeno, přesunuto)", r.detailNote || '', v => this.updateRun({ detailNote: v }))}
        {this.input("Cena pro tento termín (prázdné = výchozí ze šablony)", r.priceOverride || '', v => this.updateRun({ priceOverride: v }))}
        {this.input("Lektor pro tento termín (prázdné = výchozí)", r.lecturerOverride || '', v => this.updateRun({ lecturerOverride: v }))}
        {this.input("Poznámka pro tento termín (prázdné = výchozí)", r.noteOverride || '', v => this.updateRun({ noteOverride: v }))}
        <div className='checkbox'>
          <label>
            <input type="checkbox" checked={!!r.isPublished} onChange={e => this.updateRun({ isPublished: (e.target as HTMLInputElement).checked })} />
            {' '}<strong>Publikováno</strong> (zobrazit na veřejné stránce termínů)
          </label>
        </div>
        <div className='checkbox'>
          <label>
            <input type="checkbox" checked={r.signupEnabled !== false} onChange={e => this.updateRun({ signupEnabled: (e.target as HTMLInputElement).checked })} />
            {' '}Umožnit přihlášení e-mailem
          </label>
        </div>
        <Button bsStyle="danger" onClick={() => this.deleteRun()}>Smazat termín</Button>
      </div>
    </div>;
  }

  private renderRunPreview(): JSX.Element {
    var r = this.currentRun();
    var t = r ? this.templateById(r.templateId) : null;
    if (!r || !t) return <p className="text-muted">Náhled se zobrazí po výběru termínu.</p>;
    if (!r.isPublished) {
      return <div className="alert alert-warning">
        Tento termín není publikován — na webu se nezobrazí.
      </div>;
    }
    var dateLabel = r.dateLabel || this.formatDate(r.date);
    var price = r.priceOverride || t.defaultPrice;
    var lecturer = r.lecturerOverride || t.lecturer;
    var note = r.noteOverride || t.defaultNote || 'v rámci Šablon OP JAK se mohou účastnit všechny cílové skupiny';
    var subject = dateLabel + ' ' + t.title;
    var mailBody = "Vaše emailová adresa: \nNázev školy: \nPočet přihlášených pedagogů: \nPoznámka:";
    var mailto = r.signupEnabled === false ? '' : 'mailto:projekt@langmaster.cz?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(mailBody);
    return <div className="panel panel-info">
      <div className="panel-body">
        <ul className='fa-ul' style={{ listStyle: 'none', paddingLeft: 0 }}>
          <LiHand>
            <h4><b>{dateLabel} <a href={t.courseLink}>{t.title}</a>{r.detailNote ? ' ' + r.detailNote : null}</b></h4>
            <h4><Label bsStyle="warning">Oblast: {t.area}</Label></h4>
            <p>Cena: {price}, Lektor: {lecturer}</p>
            <p>Místo konání: {t.location}</p>
            {mailto
              ? <p>Pro přihlášení <a href={mailto}>klikněte</a> nebo napište email na projekt@langmaster.cz</p>
              : <p>Přihlášení k tomuto termínu je uzavřeno.</p>}
            <p>{note}</p>
          </LiHand>
        </ul>
      </div>
    </div>;
  }

  private input(label: string, value: string, onChange: (v: string) => void): JSX.Element {
    return <div className='form-group'>
      <label>{label}</label>
      <input className='form-control' value={value || ''} onChange={e => onChange((e.target as HTMLInputElement).value)} />
    </div>;
  }

  private sortedTemplates(): ICourseTemplate[] {
    return this.state.data.courseTemplates.slice().sort((a, b) => a.title.localeCompare(b.title, 'cs'));
  }

  private sortedRunsForTemplate(templateId: string): ICourseRun[] {
    if (!templateId) return [];
    return this.state.data.courseRuns
      .filter(r => r.templateId === templateId)
      .slice()
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  private sortedRunsForSelectedTemplate(): ICourseRun[] {
    return this.sortedRunsForTemplate(this.state.selectedTemplateId || '');
  }

  private firstRunIdForTemplate(templateId: string): string {
    var runs = this.sortedRunsForTemplate(templateId);
    return runs.length ? runs[0].id : '';
  }

  private selectTemplate(templateId: string) {
    var runId = templateId ? this.firstRunIdForTemplate(templateId) : '';
    this.setState({ selectedTemplateId: templateId, selectedRunId: runId, message: null, error: null } as any);
  }

  private switchToRunsTab() {
    var templateId = this.state.selectedTemplateId;
    var runId = this.state.selectedRunId;
    if (templateId) {
      var runs = this.sortedRunsForTemplate(templateId);
      if (runs.length && (!runId || !runs.some(r => r.id === runId))) {
        runId = runs[0].id;
      }
      this.setState({ activeTab: 'runs', selectedRunId: runId } as any);
    } else {
      this.setState({ activeTab: 'runs' } as any);
    }
  }

  private templateById(id: string): ICourseTemplate {
    return this.state.data.courseTemplates.filter(t => t.id === id)[0];
  }

  private currentTemplate(): ICourseTemplate {
    var id = this.state.selectedTemplateId;
    if (!id) return null;
    return this.templateById(id);
  }

  private currentRun(): ICourseRun {
    var id = this.state.selectedRunId;
    if (!id) return null;
    return this.state.data.courseRuns.filter(r => r.id === id)[0];
  }

  private formatDate(isoDate: string): string {
    if (!isoDate || isoDate.length < 10) return isoDate;
    var p = isoDate.split('-');
    if (p.length !== 3) return isoDate;
    return parseInt(p[2], 10) + '.' + parseInt(p[1], 10) + '. ' + p[0];
  }

  private createTemplate() {
    var id = 'kurz-' + (new Date().getTime());
    var newTemplate: ICourseTemplate = {
      id: id,
      title: 'Nový kurz',
      courseLink: '/index.html?home|kurzyii|zsinkluze',
      area: 'Inkluze',
      defaultPrice: '1790 Kč/os',
      lecturer: '',
      location: 'online',
      defaultNote: 'v rámci Šablon OP JAK se mohou účastnit všechny cílové skupiny'
    };
    var data = this.state.data;
    data.courseTemplates.push(newTemplate);
    this.setState({ data: data, selectedTemplateId: id, activeTab: 'templates', message: null, error: null } as any);
  }

  private createRun() {
    var templateId = this.state.selectedTemplateId;
    if (!templateId) return;
    var id = 'run-' + (new Date().getTime());
    var newRun: ICourseRun = {
      id: id,
      templateId: templateId,
      date: new Date().toISOString().slice(0, 10),
      isPublished: false,
      signupEnabled: true
    };
    var data = this.state.data;
    data.courseRuns.push(newRun);
    this.setState({ data: data, selectedRunId: id, activeTab: 'runs', message: null, error: null } as any);
  }

  private updateTemplate(patch: Partial<ICourseTemplate>) {
    var t = this.currentTemplate();
    if (!t) return;
    var oldId = t.id;
    Object.assign(t, patch);
    if (patch.id && patch.id !== oldId) {
      this.state.data.courseRuns.forEach(r => {
        if (r.templateId === oldId) r.templateId = patch.id;
      });
      this.setState({ selectedTemplateId: patch.id } as any);
    }
    this.setState({ data: this.state.data, message: null, error: null } as any);
  }

  private updateRun(patch: Partial<ICourseRun>) {
    var r = this.currentRun();
    if (!r) return;
    var oldId = r.id;
    Object.assign(r, patch);
    if (patch.id && patch.id !== oldId) {
      this.setState({ selectedRunId: patch.id } as any);
    }
    this.setState({ data: this.state.data, message: null, error: null } as any);
  }

  private deleteTemplate() {
    var id = this.state.selectedTemplateId;
    if (!id || !confirm('Opravdu smazat šablonu a všechny její termíny?')) return;
    var data = this.state.data;
    data.courseTemplates = data.courseTemplates.filter(t => t.id !== id);
    data.courseRuns = data.courseRuns.filter(r => r.templateId !== id);
    this.setState({ data: data, selectedTemplateId: '', selectedRunId: '', message: null } as any);
  }

  private deleteRun() {
    var id = this.state.selectedRunId;
    if (!id || !confirm('Opravdu smazat tento termín?')) return;
    var data = this.state.data;
    data.courseRuns = data.courseRuns.filter(r => r.id !== id);
    var runId = this.firstRunIdForTemplate(this.state.selectedTemplateId || '');
    this.setState({ data: data, selectedRunId: runId, message: null } as any);
  }

  private getAdminPassword(): string {
    return sessionStorage.getItem(adminSessionKey) || '';
  }

  private login() {
    this.setState({ loading: true, error: null } as any);
    var req = new XMLHttpRequest();
    req.open('POST', '/libs/service-kurzy/kurzy.ashx?action=login', true);
    req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    req.onreadystatechange = () => {
      if (req.readyState !== 4) return;
      if (req.status >= 200 && req.status < 300) {
        sessionStorage.setItem(adminSessionKey, this.state.loginPassword);
        this.setState({ authenticated: true, loading: true, error: null } as any, () => this.loadData());
      } else {
        this.setState({ loading: false, error: 'Neplatné heslo.' } as any);
      }
    };
    req.send(JSON.stringify({ password: this.state.loginPassword }));
  }

  private logout() {
    sessionStorage.removeItem(adminSessionKey);
    this.setState({
      authenticated: false,
      loginPassword: '',
      loading: false,
      saving: false,
      message: null,
      error: null,
      data: { courseTemplates: [], courseRuns: [] },
      selectedTemplateId: '',
      selectedRunId: ''
    } as any);
  }

  private loadData() {
    var req = new XMLHttpRequest();
    req.open('GET', '/libs/service-kurzy/kurzy.ashx', true);
    req.onreadystatechange = () => {
      if (req.readyState !== 4) return;
      if (req.status >= 200 && req.status < 300) {
        try {
          var payload = JSON.parse(req.responseText);
          this.setState({ data: this.normalizeData(payload), loading: false, error: null, message: null } as any);
        } catch (e) {
          this.setState({ loading: false, error: 'Nepodařilo se načíst data.' } as any);
        }
      } else {
        this.setState({ loading: false, error: 'Nepodařilo se načíst data.' } as any);
      }
    };
    req.send();
  }

  private normalizeData(raw: any): ICourseData {
    if (raw && raw.courseTemplates && raw.courseRuns) {
      return {
        courseTemplates: raw.courseTemplates,
        courseRuns: raw.courseRuns
      };
    }
    var templates: ICourseTemplate[] = [];
    var runs: ICourseRun[] = [];
    var templateMap: { [key: string]: ICourseTemplate } = {};
    var legacy = raw && raw.courses ? raw.courses : [];
    legacy.forEach((c: any, idx: number) => {
      var key = (c.courseTitle || 'kurz') + '|' + (c.courseLink || '') + '|' + (c.area || '');
      var tpl = templateMap[key];
      if (!tpl) {
        tpl = {
          id: 'legacy-' + (Object.keys(templateMap).length + 1),
          title: c.courseTitle || 'Kurz',
          courseLink: c.courseLink || '',
          area: c.area || '',
          defaultPrice: c.price || '',
          lecturer: c.lecturer || '',
          location: c.location || 'online',
          defaultNote: c.note || 'v rámci Šablon OP JAK se mohou účastnit všechny cílové skupiny'
        };
        templateMap[key] = tpl;
        templates.push(tpl);
      }
      runs.push({
        id: 'legacy-run-' + (idx + 1),
        templateId: tpl.id,
        date: this.tryParseLegacyDate(c.dateLabel),
        dateLabel: c.dateLabel || '',
        detailNote: c.detailNote,
        isPublished: true,
        signupEnabled: true
      });
    });
    return { courseTemplates: templates, courseRuns: runs };
  }

  private tryParseLegacyDate(dateLabel: string): string {
    if (!dateLabel) return '2099-12-31';
    var match = /(\d{1,2})\.(\d{1,2})\.\s*(\d{4})/.exec(dateLabel);
    if (!match) return '2099-12-31';
    var day = ('0' + match[1]).slice(-2);
    var month = ('0' + match[2]).slice(-2);
    return match[3] + '-' + month + '-' + day;
  }

  private saveData() {
    this.setState({ saving: true, error: null, message: null } as any);
    var req = new XMLHttpRequest();
    req.open('POST', '/libs/service-kurzy/kurzy.ashx', true);
    req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    req.setRequestHeader('X-Admin-Password', this.getAdminPassword());
    req.onreadystatechange = () => {
      if (req.readyState !== 4) return;
      if (req.status >= 200 && req.status < 300) {
        this.setState({ saving: false, message: 'Změny byly uloženy.' } as any);
      } else if (req.status === 401) {
        this.logout();
      } else {
        this.setState({ saving: false, error: 'Uložení se nezdařilo.' } as any);
      }
    };
    req.send(JSON.stringify(this.state.data, null, 2));
  }
}

(AdminKurzyPage as any).contextTypes = sitemapRouter.childContextTypes;
