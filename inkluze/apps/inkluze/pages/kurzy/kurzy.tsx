var Kurzy: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => {
  var allLoaders = getLoaders(); var actId = (ctx.site.id as string).toLowerCase();
  return <div>
    <Page>
      <Block >
        {ctx.site.id == 'kurzy' ? <KurzySSList /> : null}
        <KurzyAlert />
        <KurzyForm />

      </Block>

      {coursesLoader(() => [
        { create: gray => <KurzyInkluze loaders={allLoaders[0]} actId={actId} gray={gray} key={0} /> },
        { create: gray => <KurzyOstatni loaders={allLoaders[1]} actId={actId} gray={gray} key={1} /> },
        { create: gray => <KurzyMS loaders={allLoaders[2]} actId={actId} gray={gray} key={2} /> },
      ], allLoaders, actId)}

    </Page >
  </div >
};

Kurzy.contextTypes = sitemapRouter.childContextTypes;

interface IKurzyBlockProps {
  loaders: Array<ICourseLoader>;
  actId: string;
  gray: boolean;
}

var KurzyInkluze: React.StatelessComponent<IKurzyBlockProps> = (props: IKurzyBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    <h2 className='text-right'>ZŠ Inkluze</h2>
    {courseLoader(props.loaders, props.actId)}
  </Block>
};
KurzyInkluze.contextTypes = sitemapRouter.childContextTypes;

var KurzyOstatni: React.StatelessComponent<IKurzyBlockProps> = (props: IKurzyBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    <h2 className='text-right'>ZŠ Ostatní</h2>
    {courseLoader(props.loaders, props.actId)}
  </Block>;
}
KurzyOstatni.contextTypes = sitemapRouter.childContextTypes;

var KurzyMS: React.StatelessComponent<IKurzyBlockProps> = (props: IKurzyBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    <h2 className='text-right'>MŠ Kurzy</h2>
    {courseLoader(props.loaders, props.actId)}
  </Block>;
}
KurzyMS.contextTypes = sitemapRouter.childContextTypes;

var courseKey = 0;
interface ICourseLoader {
  id: string;
  create: (expanded: boolean) => JSX.Element;
}
function courseLoader(loaders: Array<ICourseLoader>, actId: string): Array<JSX.Element> {
  loaders.sort((a, b) => a.id == actId ? -1 : (b.id == actId ? 1 : 0));
  return loaders.map(l => l.create(l.id == actId));
}

interface ICoursesLoader {
  containsId?: boolean;
  create: (gray: boolean) => JSX.Element;
}

function coursesLoader(getLoaders: () => Array<ICoursesLoader>, allLoaders: Array<Array<ICourseLoader>>, actId: string): Array<JSX.Element> {
  var loaders = getLoaders();
  for (var i = 0; i < loaders.length; i++) {
    var block = allLoaders[i];
    loaders[i].containsId = !!block.find(l => l.id == actId);
  }
  loaders.sort((a, b) => a.containsId ? -1 : (b.containsId ? 1 : 0));
  var gray = false;
  return loaders.map(l => { gray = !gray; return l.create(gray); });
}

function getLoaders(): Array<Array<ICourseLoader>> {
  var res = [
    [

    ]
  ];
  res.forEach(l => l.forEach(ll => ll.id = ll.id.toLowerCase()));
  return res;
}