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

interface IOnlineKurzyResponse {
  courseTemplates: ICourseTemplate[];
  courseRuns: ICourseRun[];
}

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
  loading: boolean;
  error?: string;
}

class OkurzyPage extends React.Component<{}, IOkurzyState> {
  constructor(props: {}, ctx: sitemapRouter.IContext) {
    super(props, ctx);
    this.state = { courses: [], loading: true };
  }

  componentDidMount() {
    this.loadCourses();
  }

  private loadCourses() {
    var req = new XMLHttpRequest();
    req.open('GET', '/libs/service-kurzy/kurzy.ashx', true);
    req.onreadystatechange = () => {
      if (req.readyState !== 4) return;
      if (req.status >= 200 && req.status < 300) {
        try {
          var payload = JSON.parse(req.responseText) as IOnlineKurzyResponse;
          this.setState({ courses: this.createRenderedCourses(payload), loading: false } as any);
        } catch (e) {
          this.setState({ loading: false, error: 'Nepodařilo se zpracovat data kurzů.' } as any);
        }
      } else {
        this.setState({ loading: false, error: 'Nepodařilo se načíst seznam kurzů.' } as any);
      }
    };
    req.send();
  }

  private createRenderedCourses(payload: IOnlineKurzyResponse): IRenderedCourse[] {
    if (!payload || !payload.courseTemplates || !payload.courseRuns) return [];
    var templatesById: { [id: string]: ICourseTemplate } = {};
    payload.courseTemplates.forEach(t => templatesById[t.id] = t);
    var mailBody = "Vaše emailová adresa: \nNázev školy: \nPočet přihlášených pedagogů: \nPoznámka:";
    var rendered = payload.courseRuns
      .filter(r => r && r.isPublished)
      .map(r => {
        var t = templatesById[r.templateId];
        if (!t) return null;
        var dateLabel = r.dateLabel || this.formatDate(r.date);
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

  private formatDate(isoDate: string): string {
    if (!isoDate || isoDate.length < 10) return isoDate;
    var p = isoDate.split('-');
    if (p.length !== 3) return isoDate;
    return parseInt(p[2], 10) + "." + parseInt(p[1], 10) + ". " + p[0];
  }

  render(): JSX.Element {
    return <div>
      <Page>
        <BlockEx header="Termíny kurzů pro Šablony I a II OP JAK">
          <p>Kurzy pro jednotlivce budou probíhat formou videokoference v prostředí ZOOM.</p>
          <p>Po kliknutí na název kurzu se Vám zobrazí jeho obsah. Pokud se chcete na některý z kurzů přihlásit nebo máte ke kurzu nějaký upřesňující dotaz, kontaktujte nás prosím na emailu projekt@langmaster.cz nebo na telefonech 244 460 807, 728 234 285.</p>
          <p>Podle předběžného zájmu pedagogů budeme průběžně vypisovat další kurzy a termíny. Kontaktujte nás, pokud sháníte nějaký kurz, který v seznamu nevidíte.</p>
        </BlockEx>
        <BlockEx>
          <p><a href="/index.html?home|adminkurzy">Administrace termínů kurzů</a></p>
          {this.state.loading ? <p>Načítám seznam kurzů...</p> : null}
          {this.state.error ? <div className='alert alert-danger'>{this.state.error}</div> : null}
          {!this.state.loading && !this.state.error ? this.renderCourses() : null}
        </BlockEx>
      </Page>
    </div>;
  }

  private renderCourses(): JSX.Element {
    if (!this.state.courses.length) return <p>Aktuálně nejsou vypsány žádné termíny.</p>;
    return <ul className='fa-ul'>
      {this.state.courses.map((c, i) => <LiHand key={i}>
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
