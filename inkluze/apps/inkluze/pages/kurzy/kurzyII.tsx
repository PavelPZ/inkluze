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
    <h2 className='text-right'>ZŠ Kurzy</h2>
    {courseIILoader(props.iiloaders, props.actId)}
  </Block>
};
KurzyIIZSKurzy.contextTypes = sitemapRouter.childContextTypes;

var KurzyIIInkluzeZUS: React.StatelessComponent<IKurzyIIBlockProps> = (props: IKurzyIIBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    <h2 className='text-right'>ZŠ Inkluze a ZUŠ</h2>
    {courseIILoader(props.iiloaders, props.actId)}
  </Block>;
}
KurzyIIInkluzeZUS.contextTypes = sitemapRouter.childContextTypes;

var KurzyIIMSKurzy: React.StatelessComponent<IKurzyIIBlockProps> = (props: IKurzyIIBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray={props.gray}>
    <h2 className='text-right'>MŠ Kurzy</h2>
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
      { id: 'IIZSCtenarska8', create: expanded => <IIZSCtenarska8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZSCtenarska8.title} /> },
      { id: 'IIZSCtenarska1632', create: expanded => <IIZSCtenarska1632 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZSCtenarska1632.title} /> },
      { id: 'IIZSMatematicka8', create: expanded => <IIZSMatematicka8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZSMatematicka8.title} /> },
      { id: 'IIZSMatematicka1632', create: expanded => <IIZSMatematicka1632 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZSMatematicka1632.title} /> },
      { id: 'IIZSRozvoj8', create: expanded => <IIZSRozvoj8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZSRozvoj8.title} /> },
      { id: 'IIZSRozvoj1624', create: expanded => <IIZSRozvoj1624 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZSRozvoj1624.title} /> },
      { id: 'IIZSICT8', create: expanded => <IIZSICT8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZSICT8.title} /> },
    ],
    [
      { id: 'IIZSInkluze8', create: expanded => <IIZSInkluze8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZSInkluze8.title} /> },
      { id: 'IIZSInkluze1632', create: expanded => <IIZSInkluze1632 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZSInkluze1632.title} /> },
      { id: 'IIZUSInkluze8', create: expanded => <IIZUSInkluze8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZUSInkluze8.title} /> },
      { id: 'IIZUSRozvoj8', create: expanded => <IIZUSRozvoj8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZUSRozvoj8.title} /> },
      { id: 'IIZUSICT8', create: expanded => <IIZUSICT8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIZUSICT8.title} /> },
    ],
    [
      { id: 'IIMSInkluze16', create: expanded => <IIMSInkluze16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIMSInkluze16.title} /> },
      { id: 'IIMSCtenarska16', create: expanded => <IIMSCtenarska16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIMSCtenarska16.title} /> },
      { id: 'IIMSMatematicka16', create: expanded => <IIMSMatematicka16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIMSMatematicka16.title} /> },
      { id: 'IIMSRozvoj16', create: expanded => <IIMSRozvoj16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIMSRozvoj16.title} /> },
      { id: 'IIMSPripravujeme', create: expanded => <IIMSPripravujeme defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzyii.IIMSPripravujeme.title} /> },
    ]
  ];
  res.forEach(l => l.forEach(ll => ll.id = ll.id.toLowerCase()));
  return res;
}