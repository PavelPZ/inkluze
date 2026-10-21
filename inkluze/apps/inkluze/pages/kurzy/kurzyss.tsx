class KurzySSPage extends React.Component<{}, { ready: boolean }> {
  static contextTypes = sitemapRouter.childContextTypes;

  constructor(props: {}, ctx: sitemapRouter.IContext) {
    super(props, ctx);
    this.state = { ready: !!katalogCache };
  }
  componentDidMount() {
    // Page-level prefetch so migrated panels do not each start their own XHR.
    katalogLoadData(
      () => this.setState({ ready: true } as any),
      () => this.setState({ ready: true } as any)
    );
  }
  render(): JSX.Element {
    var ctx = this.context as sitemapRouter.IContext;
    var allSSLoaders = getSSLoaders();
    var actId = (ctx.site.id as string).toLowerCase();
    return <div>
      <Page>
        <Block >
          {ctx.site.id == 'kurzyss' ? <KurzySSList /> : null}
          <KurzyTipAlert />
        </Block>
        {coursesSSLoader(() => [
          { create: gray => <KurzySSInkluze ssloaders={allSSLoaders[0]} actId={actId} gray={gray} key={0} /> },
          { create: gray => <KurzySSOstatni ssloaders={allSSLoaders[1]} actId={actId} gray={gray} key={1} /> },
          { create: gray => <KurzySSDalsi ssloaders={allSSLoaders[2]} actId={actId} gray={gray} key={2} /> },
        ], allSSLoaders, actId)}
      </Page >
    </div >;
  }
}
var KurzySS: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <KurzySSPage />;
KurzySS.contextTypes = sitemapRouter.childContextTypes;

interface IKurzySSBlockProps {
  ssloaders: Array<ICourseSSLoader>;
  actId: string;
  gray: boolean;
}

var KurzySSInkluze: React.StatelessComponent<IKurzySSBlockProps> = (props: IKurzySSBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    {courseSSLoader(props.ssloaders, props.actId)}
  </Block>
};
KurzySSInkluze.contextTypes = sitemapRouter.childContextTypes;

var KurzySSOstatni: React.StatelessComponent<IKurzySSBlockProps> = (props: IKurzySSBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    {courseSSLoader(props.ssloaders, props.actId)}
  </Block>;
}
KurzySSOstatni.contextTypes = sitemapRouter.childContextTypes;

var KurzySSDalsi: React.StatelessComponent<IKurzySSBlockProps> = (props: IKurzySSBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    {courseSSLoader(props.ssloaders, props.actId)}
  </Block>;
}
KurzySSDalsi.contextTypes = sitemapRouter.childContextTypes;

var courseKey = 0;
interface ICourseSSLoader {
  id: string;
  create: (expanded: boolean) => JSX.Element;
}
function courseSSLoader(ssloaders: Array<ICourseSSLoader>, actId: string): Array<JSX.Element> {
  ssloaders.sort((a, b) => a.id == actId ? -1 : (b.id == actId ? 1 : 0));
  return ssloaders.map(l => l.create(l.id == actId));
}

interface ICoursesSSLoader {
  containsId?: boolean;
  create: (gray: boolean) => JSX.Element;
}

function coursesSSLoader(getSSLoaders: () => Array<ICoursesSSLoader>, allLoaders: Array<Array<ICourseSSLoader>>, actId: string): Array<JSX.Element> {
  var ssloaders = getSSLoaders();
  for (var i = 0; i < ssloaders.length; i++) {
    var block = allLoaders[i];
    ssloaders[i].containsId = !!block.find(l => l.id == actId);
  }
  ssloaders.sort((a, b) => a.containsId ? -1 : (b.containsId ? 1 : 0));
  var gray = false;
  return ssloaders.map(l => { gray = !gray; return l.create(gray); });
}

function getSSLoaders(): Array<Array<ICourseSSLoader>> {
  var ss = inkluze.root.kurzyss;
  var panel = (areaId: string, title: string) =>
    (expanded: boolean) => <CourseAreaPanel areaId={areaId} defaultExpanded={expanded} key={courseKey++} title={title} />;
  var res = [
    [
      { id: 'SSMedGramotnost', create: panel('SSMedGramotnost', ss.SSMedGramotnost.title) },
      { id: 'SSNoveTechnologie', create: panel('SSNoveTechnologie', ss.SSNoveTechnologie.title) },
      { id: 'SSRozvojPodnikavosti', create: panel('SSRozvojPodnikavosti', ss.SSRozvojPodnikavosti.title) },
      { id: 'SSKarierovePoradenstvi', create: panel('SSKarierovePoradenstvi', ss.SSKarierovePoradenstvi.title) },
      { id: 'SSWellBeing', create: panel('SSWellBeing', ss.SSWellBeing.title) },
    ],
    [
      { id: 'SSGenderovaTematika', create: panel('SSGenderovaTematika', ss.SSGenderovaTematika.title) },
      { id: 'SSVyukaCestiny', create: panel('SSVyukaCestiny', ss.SSVyukaCestiny.title) },
      { id: 'SSInkluzeCizinci', create: panel('SSInkluzeCizinci', ss.SSInkluzeCizinci.title) },
      { id: 'SSOstatniInkluze', create: panel('SSOstatniInkluze', ss.SSOstatniInkluze.title) },
      { id: 'SSFormativniHodnoceni', create: panel('SSFormativniHodnoceni', ss.SSFormativniHodnoceni.title) },
      { id: 'SSIndividualizace', create: panel('SSIndividualizace', ss.SSIndividualizace.title) },
      { id: 'SSInovativniFormy', create: panel('SSInovativniFormy', ss.SSInovativniFormy.title) },
    ],
    [
      { id: 'SSPedagogickaDiagnostika', create: panel('SSPedagogickaDiagnostika', ss.SSPedagogickaDiagnostika.title) },
      { id: 'SSInovace', create: panel('SSInovace', ss.SSInovace.title) },
      { id: 'SSSpoluprace', create: panel('SSSpoluprace', ss.SSSpoluprace.title) },
      { id: 'SSCtenarskaGramotnost', create: panel('SSCtenarskaGramotnost', ss.SSCtenarskaGramotnost.title) },
      { id: 'SSMatematickaGramotnost', create: panel('SSMatematickaGramotnost', ss.SSMatematickaGramotnost.title) },
      { id: 'SSPodporaUcitelu', create: panel('SSPodporaUcitelu', ss.SSPodporaUcitelu.title) },
    ]
  ];
  res.forEach(l => l.forEach(ll => ll.id = ll.id.toLowerCase()));
  return res;
}