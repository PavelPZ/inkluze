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
        { create: gray => <KurzyIIInkluze iiloaders={allIILoaders[0]} actId={actId} gray={gray} key={0} /> },
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

var KurzyIIInkluze: React.StatelessComponent<IKurzyIIBlockProps> = (props: IKurzyIIBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    <h2 className='text-right'>II Inkluze</h2>
    {courseIILoader(props.iiloaders, props.actId)}
  </Block>
};
KurzyIIInkluze.contextTypes = sitemapRouter.childContextTypes;

var KurzyIIOstatni: React.StatelessComponent<IKurzyIIBlockProps> = (props: IKurzyIIBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    <h2 className='text-right'>II Ostatní</h2>
    {courseIILoader(props.iiloaders, props.actId)}
  </Block>;
}
KurzyIIOstatni.contextTypes = sitemapRouter.childContextTypes;

var KurzyIIDalsi: React.StatelessComponent<IKurzyIIBlockProps> = (props: IKurzyIIBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    <h2 className='text-right'>II Kurzy</h2>
    {courseIILoader(props.iiloaders, props.actId)}
  </Block>;
}
KurzyIIDalsi.contextTypes = sitemapRouter.childContextTypes;

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
      { id: 'IIRozvoj8', create: expanded => <IIRozvoj8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIRozvoj8.title} /> },
    ],
  ];
  res.forEach(l => l.forEach(ll => ll.id = ll.id.toLowerCase()));
  return res;
}