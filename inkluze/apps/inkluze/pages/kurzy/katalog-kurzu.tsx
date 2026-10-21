// Katalog osnov kurzů (ne termínů): typy, load, renderer.

interface IKatalogContentNodeLine {
  kind: 'line';
  html: string;
}

interface IKatalogContentNodeGroup {
  kind: 'group';
  html?: string;
  children: IKatalogContentNode[];
}

type IKatalogContentNode = IKatalogContentNodeLine | IKatalogContentNodeGroup;

interface IKatalogCourse {
  id: string;
  title: string;
  hours: number;
  layout: 'list' | 'flow';
  /** Optional HTML paragraphs shown above list/flow body (as in original JSX). */
  intro?: string;
  nodes: IKatalogContentNode[];
}

interface IKatalogAreaCourseRef {
  courseId: string;
  /** Text after hours, e.g. "doporučeno pro SŠ, VOŠ" or "v procesu akreditace". */
  recommendedFor?: string;
  /** When true, render only "(recommendedFor)" without hours. */
  hideHours?: boolean;
  /** Rare free-form meta (legacy oddities); shown as-is with a leading space. */
  metaText?: string;
  defaultOpen?: boolean;
}

interface IKatalogArea {
  id: string;
  track: 'ss' | 'zs';
  headerHours: number[];
  courses: IKatalogAreaCourseRef[];
}

interface IKatalogPayload {
  courses: IKatalogCourse[];
  areas: IKatalogArea[];
}

var katalogCache: IKatalogPayload = null;
var katalogLoading = false;
var katalogError: string = null;
var katalogWaiters: Array<(err: string, data: IKatalogPayload) => void> = [];

function katalogLoadData(onDone: (payload: IKatalogPayload) => void, onError: (msg: string) => void) {
  if (katalogCache) {
    onDone(katalogCache);
    return;
  }
  katalogWaiters.push((err, data) => {
    if (err) onError(err);
    else onDone(data);
  });
  if (katalogLoading) return;
  katalogLoading = true;
  var req = new XMLHttpRequest();
  req.open('GET', '/libs/service-katalog-kurzu/katalog-kurzu.ashx', true);
  req.onreadystatechange = () => {
    if (req.readyState !== 4) return;
    katalogLoading = false;
    var waiters = katalogWaiters;
    katalogWaiters = [];
    if (req.status >= 200 && req.status < 300) {
      try {
        katalogCache = JSON.parse(req.responseText) as IKatalogPayload;
        katalogError = null;
        waiters.forEach(w => w(null, katalogCache));
      } catch (e) {
        katalogError = 'Nepodařilo se zpracovat katalog kurzů.';
        waiters.forEach(w => w(katalogError, null));
      }
    } else {
      katalogError = 'Nepodařilo se načíst katalog kurzů.';
      waiters.forEach(w => w(katalogError, null));
    }
  };
  req.send();
}

function katalogFindCourse(payload: IKatalogPayload, courseId: string): IKatalogCourse {
  if (!payload || !payload.courses) return null;
  for (var i = 0; i < payload.courses.length; i++) {
    if (payload.courses[i].id === courseId) return payload.courses[i];
  }
  return null;
}

function katalogFindArea(payload: IKatalogPayload, areaId: string): IKatalogArea {
  if (!payload || !payload.areas) return null;
  for (var i = 0; i < payload.areas.length; i++) {
    if (payload.areas[i].id === areaId) return payload.areas[i];
  }
  return null;
}

/** Compose display meta from structured fields; always leading space when non-empty. */
function katalogFormatMeta(course: IKatalogCourse, ref: IKatalogAreaCourseRef): string {
  if (ref.metaText) {
    var t = ref.metaText;
    return t.charAt(0) === ' ' ? t : (' ' + t);
  }
  var rf = ref.recommendedFor;
  if (ref.hideHours) {
    return rf ? (' (' + rf + ')') : '';
  }
  if (rf) {
    return ' (' + course.hours + ' hod, ' + rf + ')';
  }
  return '';
}

function katalogHtmlSpan(html: string): JSX.Element {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function katalogRenderNodesList(nodes: IKatalogContentNode[]): JSX.Element {
  return <ul className="list-group">
    {nodes.map((n, idx) => {
      if (n.kind === 'group') {
        return <li className="list-group-item" key={idx}>
          {n.html ? katalogHtmlSpan(n.html) : null}
          {n.children && n.children.length ? katalogRenderNodesList(n.children) : null}
        </li>;
      }
      return <li className="list-group-item" key={idx}>{katalogHtmlSpan(n.html)}</li>;
    })}
  </ul>;
}

function katalogRenderNodesFlow(nodes: IKatalogContentNode[]): JSX.Element {
  var parts: any[] = [];
  nodes.forEach((n, idx) => {
    if (idx > 0) parts.push(<br key={'br' + idx} />);
    if (n.kind === 'group') {
      parts.push(<span key={idx}>{n.html ? katalogHtmlSpan(n.html) : null}{n.children && n.children.length ? katalogRenderNodesFlow(n.children) : null}</span>);
    } else {
      parts.push(<span key={idx}>{katalogHtmlSpan(n.html)}</span>);
    }
  });
  return <div className="m-3">{parts}</div>;
}

interface ICourseAreaPanelProps {
  areaId: string;
  defaultExpanded: boolean;
  title: string;
}

interface ICourseAreaPanelState {
  loading: boolean;
  error?: string;
  payload?: IKatalogPayload;
}

class CourseAreaPanel extends React.Component<ICourseAreaPanelProps, ICourseAreaPanelState> {
  static contextTypes = sitemapRouter.childContextTypes;

  constructor(props: ICourseAreaPanelProps, ctx: sitemapRouter.IContext) {
    super(props, ctx);
    this.state = {
      loading: !katalogCache,
      error: katalogError || undefined,
      payload: katalogCache || undefined,
    };
  }

  componentDidMount() {
    if (katalogCache) {
      this.setState({ loading: false, payload: katalogCache } as any);
      return;
    }
    katalogLoadData(
      payload => this.setState({ loading: false, payload: payload, error: undefined } as any),
      msg => this.setState({ loading: false, error: msg } as any)
    );
  }

  render(): JSX.Element {
    var headerCssLocal: React.CSSProperties = { textDecoration: 'underline', cursor: 'pointer' };
    if (this.state.loading) {
      return <Panel defaultExpanded={this.props.defaultExpanded} collapsible bsStyle="success" header={<div className="course-header">
        <h3><span style={headerCssLocal}>{this.props.title}</span></h3>
      </div>} eventKey={1}>
        <p>Načítám obsah kurzů…</p>
      </Panel>;
    }
    if (this.state.error || !this.state.payload) {
      return <Panel defaultExpanded={this.props.defaultExpanded} collapsible bsStyle="success" header={<div className="course-header">
        <h3><span style={headerCssLocal}>{this.props.title}</span></h3>
      </div>} eventKey={1}>
        <p className="text-danger">{this.state.error || 'Katalog kurzů není k dispozici.'}</p>
      </Panel>;
    }

    var area = katalogFindArea(this.state.payload, this.props.areaId);
    if (!area) {
      return <Panel defaultExpanded={this.props.defaultExpanded} collapsible bsStyle="success" header={<div className="course-header">
        <h3><span style={headerCssLocal}>{this.props.title}</span></h3>
      </div>} eventKey={1}>
        <p className="text-danger">Oblast {this.props.areaId} v katalogu chybí.</p>
      </Panel>;
    }

    var labels = (area.headerHours || []).map((h, i) => <span key={i}><Label bsStyle="warning">{h}</Label> </span>);

    return <Panel defaultExpanded={this.props.defaultExpanded} collapsible bsStyle="success" header={<div className="course-header">
      <h3>{labels}<span style={headerCssLocal}>{this.props.title}</span></h3>
    </div>} eventKey={1}>
      <BlockEx header="Nabízíme následující kurzy:">
        <h4><span className="label label-warning">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>
        <ul className="fa-ul">
          {area.courses.map((ref, slot) => {
            var course = katalogFindCourse(this.state.payload, ref.courseId);
            if (!course) {
              return <LiFile key={slot}><span className="text-danger">Chybí kurz {ref.courseId}</span></LiFile>;
            }
            var collapseId = this.props.areaId + '-' + course.id + '-' + slot;
            var meta = katalogFormatMeta(course, ref);
            var openClass = ref.defaultOpen ? 'collapse in border rounded' : 'collapse border rounded';
            var body = course.layout === 'flow'
              ? katalogRenderNodesFlow(course.nodes)
              : katalogRenderNodesList(course.nodes);
            return <LiFile key={slot}>
              <b type="button" data-toggle="collapse" data-target={'#' + collapseId} aria-expanded={ref.defaultOpen ? 'true' : 'false'} aria-controls={collapseId}>{course.title}</b>
              {meta ? meta : null}
              <div className={openClass} id={collapseId}>
                {course.intro ? katalogHtmlSpan(course.intro) : null}
                {body}
              </div>
            </LiFile>;
          })}
        </ul>
      </BlockEx>
    </Panel>;
  }
}
