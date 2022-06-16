var KurzyII: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => {
  var allIILoaders = getIILoaders();
  var actId = (ctx.site.id as string).toLowerCase();
  return <div>
    <Page>
      <Block >
        {ctx.site.id == 'kurzyii' ? <KurzyIIList /> : null}
        <KurzyIIAlert />
        <KurzyForm />

      </Block>

      {coursesIILoader(() => [
        { create: gray => <KurzyIIZSKurzy iiloaders={allIILoaders[0]} actId={actId} gray={gray} key={0} /> },
        { create: gray => <KurzyIIInkluzeZUS iiloaders={allIILoaders[1]} actId={actId} gray={gray} key={1} /> },
        { create: gray => <KurzyIIMSKurzy iiloaders={allIILoaders[2]} actId={actId} gray={gray} key={2} /> },
      ], allIILoaders, actId)}

    </Page >
  </div >
};

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
  var res = [
    [
      { id: 'ZSInkluzeCizinci', create: expanded => <ZSInkluzeCizinci defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSInkluzeCizinci.title} /> },
      { id: 'ZSVyukaCestiny', create: expanded => <ZSVyukaCestiny defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSVyukaCestiny.title} /> },
      { id: 'ZSMedialniGramotnost', create: expanded => <ZSMedialniGramotnost defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSMedialniGramotnost.title} /> },
      { id: 'ZSNoveTechnologie', create: expanded => <ZSNoveTechnologie defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSNoveTechnologie.title} /> },
      { id: 'ZSWellBeing', create: expanded => <ZSWellBeing defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSWellBeing.title} /> },
    ],
    [
      { id: 'ZSGenderova', create: expanded => <ZSGenderova defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSGenderova.title} /> },
      { id: 'ZSCtenarskaGramotnost', create: expanded => <ZSCtenarskaGramotnost defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSCtenarskaGramotnost.title} /> },
      { id: 'ZSMatematickaGramotnost', create: expanded => <ZSMatematickaGramotnost defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSMatematickaGramotnost.title} /> },
      { id: 'ZSKarierovePoradenstvi', create: expanded => <ZSKarierovePoradenstvi defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSKarierovePoradenstvi.title} /> },
      { id: 'ZSRozvojPodnikavosti', create: expanded => <ZSRozvojPodnikavosti defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSRozvojPodnikavosti.title} /> },
    ],
    [
      { id: 'ZSFormativniHodnoceni', create: expanded => <ZSFormativniHodnoceni defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSFormativniHodnoceni.title} /> },
      { id: 'ZSDiagnostika', create: expanded => <ZSDiagnostika defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSDiagnostika.title} /> },
      { id: 'ZSInovace', create: expanded => <ZSInovace defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSInovace.title} /> },
      { id: 'ZSInkluze', create: expanded => <ZSInkluze defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSInkluze.title} /> },
      { id: 'ZSPodpora', create: expanded => <ZSPodpora defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.ZSPodpora.title} /> },
    ]
  ];
  res.forEach(l => l.forEach(ll => ll.id = ll.id.toLowerCase()));
  return res;
}