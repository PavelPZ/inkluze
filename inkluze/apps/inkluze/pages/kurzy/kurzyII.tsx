class KurzyIIPage extends React.Component<{}, { ready: boolean }> {
  static contextTypes = sitemapRouter.childContextTypes;

  constructor(props: {}, ctx: sitemapRouter.IContext) {
    super(props, ctx);
    this.state = { ready: !!katalogCache };
  }
  componentDidMount() {
    katalogLoadData(
      () => this.setState({ ready: true } as any),
      () => this.setState({ ready: true } as any)
    );
  }
  render(): JSX.Element {
    var ctx = this.context as sitemapRouter.IContext;
    var allIILoaders = getIILoaders();
    var actId = (ctx.site.id as string).toLowerCase();
    return <div>
      <Page>
        <Block >
          {ctx.site.id == 'kurzyii' ? <KurzyIIList /> : null}
          <KurzyTipAlert />
        </Block>
        {coursesIILoader(() => [
          { create: gray => <KurzyIIZSKurzy iiloaders={allIILoaders[0]} actId={actId} gray={gray} key={0} /> },
          { create: gray => <KurzyIIInkluzeZUS iiloaders={allIILoaders[1]} actId={actId} gray={gray} key={1} /> },
          { create: gray => <KurzyIIMSKurzy iiloaders={allIILoaders[2]} actId={actId} gray={gray} key={2} /> },
        ], allIILoaders, actId)}
      </Page >
    </div >;
  }
}
var KurzyII: React.StatelessComponent<{}> = () => <KurzyIIPage />;
KurzyII.contextTypes = sitemapRouter.childContextTypes;

interface IKurzyIIBlockProps {
  iiloaders: Array<ICourseIILoader>;
  actId: string;
  gray: boolean;
}

var KurzyIIZSKurzy: React.StatelessComponent<IKurzyIIBlockProps> = (props: IKurzyIIBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    {courseIILoader(props.iiloaders, props.actId)}
  </Block>
};
KurzyIIZSKurzy.contextTypes = sitemapRouter.childContextTypes;

var KurzyIIInkluzeZUS: React.StatelessComponent<IKurzyIIBlockProps> = (props: IKurzyIIBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    {courseIILoader(props.iiloaders, props.actId)}
  </Block>;
}
KurzyIIInkluzeZUS.contextTypes = sitemapRouter.childContextTypes;

var KurzyIIMSKurzy: React.StatelessComponent<IKurzyIIBlockProps> = (props: IKurzyIIBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    {courseIILoader(props.iiloaders, props.actId)}
  </Block>;
}
KurzyIIMSKurzy.contextTypes = sitemapRouter.childContextTypes;

var courseKey = 0;
interface ICourseIILoader {
  id: string;
  create: (expanded: boolean) => JSX.Element;
}
function courseIILoader(iiloaders: Array<ICourseIILoader>, actId: string): Array<JSX.Element> {
  iiloaders.sort((a, b) => a.id == actId ? -1 : (b.id == actId ? 1 : 0));
  return iiloaders.map(l => l.create(l.id == actId));
}

interface ICoursesIILoader {
  containsId?: boolean;
  create: (gray: boolean) => JSX.Element;
}

function coursesIILoader(getIILoaders: () => Array<ICoursesIILoader>, allLoaders: Array<Array<ICourseIILoader>>, actId: string): Array<JSX.Element> {
  var iiloaders = getIILoaders();
  for (var i = 0; i < iiloaders.length; i++) {
    var block = allLoaders[i];
    iiloaders[i].containsId = !!block.find(l => l.id == actId);
  }
  iiloaders.sort((a, b) => a.containsId ? -1 : (b.containsId ? 1 : 0));
  var gray = false;
  return iiloaders.map(l => { gray = !gray; return l.create(gray); });
}

function getIILoaders(): Array<Array<ICourseIILoader>> {
  var zs = inkluze.root.kurzyii;
  var panel = (areaId: string, title: string) =>
    (expanded: boolean) => <CourseAreaPanel areaId={areaId} defaultExpanded={expanded} key={courseKey++} title={title} />;
  var res = [
    [
      { id: 'ZSInkluzeCizinci', create: panel('ZSInkluzeCizinci', zs.ZSInkluzeCizinci.title) },
      { id: 'ZSVyukaCestiny', create: panel('ZSVyukaCestiny', zs.ZSVyukaCestiny.title) },
      { id: 'ZSMedialniGramotnost', create: panel('ZSMedialniGramotnost', zs.ZSMedialniGramotnost.title) },
      { id: 'ZSNoveTechnologie', create: panel('ZSNoveTechnologie', zs.ZSNoveTechnologie.title) },
      { id: 'ZSWellBeing', create: panel('ZSWellBeing', zs.ZSWellBeing.title) },
      { id: 'ZSInovativniFormy', create: panel('ZSInovativniFormy', zs.ZSInovativniFormy.title) },
    ],
    [
      { id: 'ZSGenderova', create: panel('ZSGenderova', zs.ZSGenderova.title) },
      { id: 'ZSCtenarskaGramotnost', create: panel('ZSCtenarskaGramotnost', zs.ZSCtenarskaGramotnost.title) },
      { id: 'ZSMatematickaGramotnost', create: panel('ZSMatematickaGramotnost', zs.ZSMatematickaGramotnost.title) },
      { id: 'ZSKarierovePoradenstvi', create: panel('ZSKarierovePoradenstvi', zs.ZSKarierovePoradenstvi.title) },
      { id: 'ZSRozvojPodnikavosti', create: panel('ZSRozvojPodnikavosti', zs.ZSRozvojPodnikavosti.title) },
    ],
    [
      { id: 'ZSFormativniHodnoceni', create: panel('ZSFormativniHodnoceni', zs.ZSFormativniHodnoceni.title) },
      { id: 'ZSIndividualizace', create: panel('ZSIndividualizace', zs.ZSIndividualizace.title) },
      { id: 'ZSDiagnostika', create: panel('ZSDiagnostika', zs.ZSDiagnostika.title) },
      { id: 'ZSInovace', create: panel('ZSInovace', zs.ZSInovace.title) },
      { id: 'ZSSpoluprace', create: panel('ZSSpoluprace', zs.ZSSpoluprace.title) },
      { id: 'ZSInkluze', create: panel('ZSInkluze', zs.ZSInkluze.title) },
      { id: 'ZSPodpora', create: panel('ZSPodpora', zs.ZSPodpora.title) },
    ]
  ];
  res.forEach(l => l.forEach(ll => ll.id = ll.id.toLowerCase()));
  return res;
}