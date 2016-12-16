var KurzySS: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => {
  var allSSLoaders = getSSLoaders();
  var actId = (ctx.site.id as string).toLowerCase();
  return <div>
    <Page>
      <Block >
        {ctx.site.id == 'kurzyss' ? <KurzySSList /> : null}
        <KurzySSAlert />
        <KurzyForm />

      </Block>

      {coursesSSLoader(() => [
        { create: gray => <KurzySSInkluze ssloaders={allSSLoaders[0]} actId={actId} gray={gray} key={0} /> },
        { create: gray => <KurzySSOstatni ssloaders={allSSLoaders[1]} actId={actId} gray={gray} key={1} /> },
        { create: gray => <KurzySSDalsi ssloaders={allSSLoaders[2]} actId={actId} gray={gray} key={2} /> },
      ], allSSLoaders, actId)}

    </Page >
  </div >
};

KurzySS.contextTypes = sitemapRouter.childContextTypes;

interface IKurzySSBlockProps {
  ssloaders: Array<ICourseSSLoader>;
  actId: string;
  gray: boolean;
}

var KurzySSInkluze: React.StatelessComponent<IKurzySSBlockProps> = (props: IKurzySSBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    <h2 className='text-right'>SŠ Inkluze</h2>
    {courseSSLoader(props.ssloaders, props.actId)}
  </Block>
};
KurzySSInkluze.contextTypes = sitemapRouter.childContextTypes;

var KurzySSOstatni: React.StatelessComponent<IKurzySSBlockProps> = (props: IKurzySSBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    <h2 className='text-right'>SŠ Ostatní</h2>
    {courseSSLoader(props.ssloaders, props.actId)}
  </Block>;
}
KurzySSOstatni.contextTypes = sitemapRouter.childContextTypes;

var KurzySSDalsi: React.StatelessComponent<IKurzySSBlockProps> = (props: IKurzySSBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    <h2 className='text-right'>SŠ Kurzy</h2>
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
  var res = [
    [
      { id: 'SSInkluze16', create: expanded => <SSInkluze16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSInkluze16.title} /> },
    ],
    [
      { id: 'SSMentoring32', create: expanded => <SSMentoring32 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSMentoring32.title} /> },
    ],
    [
      { id: 'SSCtenarska', create: expanded => <SSCtenarska defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSCtenarska.title} /> },
    ]
  ];
  res.forEach(l => l.forEach(ll => ll.id = ll.id.toLowerCase()));
  return res;
}