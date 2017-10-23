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
      { id: 'SSInkluze8', create: expanded => <SSInkluze8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSInkluze8.title} /> },
      { id: 'SSInkluze16', create: expanded => <SSInkluze16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSInkluze16.title} /> },
      { id: 'SSInkluze24', create: expanded => <SSInkluze24 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSInkluze24.title} /> },
      { id: 'SSMentoring80', create: expanded => <SSMentoring80 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSMentoring80.title} /> },
    ],
    [
      { id: 'SSRozvoj8', create: expanded => <SSRozvoj8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSRozvoj8.title} /> },
      { id: 'SSRozvoj16', create: expanded => <SSRozvoj16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSRozvoj16.title} /> },
      { id: 'SSRozvoj24', create: expanded => <SSRozvoj24 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSRozvoj24.title} /> },
    ],
    [
      { id: 'SSCtenarska8', create: expanded => <SSCtenarska8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSCtenarska8.title} /> },
      { id: 'SSCtenarska16', create: expanded => <SSCtenarska16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSCtenarska16.title} /> },
      { id: 'SSCtenarska24', create: expanded => <SSCtenarska24 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSCtenarska24.title} /> },
      { id: 'SSMatematicka8', create: expanded => <SSMatematicka8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSMatematicka8.title} /> },
      { id: 'SSMatematicka16', create: expanded => <SSMatematicka16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSMatematicka16.title} /> },
      { id: 'SSMatematicka24', create: expanded => <SSMatematicka24 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyss.SSMatematicka24.title} /> },
    ]
  ];
  res.forEach(l => l.forEach(ll => ll.id = ll.id.toLowerCase()));
  return res;
}