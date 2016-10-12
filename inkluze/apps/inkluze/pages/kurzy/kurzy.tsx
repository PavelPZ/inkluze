var Kurzy: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => {
  var allLoaders = getLoaders(); var actId = (ctx.site.id as string).toLowerCase();
  return <div>
    <Page>
      <Block >
        {ctx.site.id == 'kurzy' ? <KurzyList /> : null}
        <KurzyAlert />
        <KurzyForm />
        
      </Block>

      {coursesLoader(() => [
        { create: gray => <KurzyInkluze loaders={allLoaders[0]} actId={actId} gray={gray} key={0} /> },
        { create: gray => <KurzyOstatni loaders={allLoaders[1]} actId={actId} gray={gray} key={1}/> },
        { create: gray => <KurzyMS loaders={allLoaders[2]} actId={actId} gray={gray} key={2}/> },
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
    <div className='alert alert-success'>
      <h3>Obsah kurzů: </h3>
      <Row>
        <Col mdOffset={1} md={5}>
          <ul className='fa-ul'>
            <LiFile>Základní právní předpisy, legislativní změny</LiFile>
            <LiFile>Žák se speciálními vzdělávacími potřebami </LiFile>
            <LiFile>Struktura podpůrných opatření a jejich členění do pěti stupňů</LiFile>
            <LiFile>Podpůrná opatření prvního stupně </LiFile>
            <LiFile>Podpůrná opatření 2. - 5. stupně </LiFile>
            <LiFile>Struktura a obsah Plánu pedagogické podpory</LiFile>
            <LiFile>Zpracování ukázkového Plánu pedagogické podpory</LiFile>
            <LiFile>Výukové metody a jejich role při motivaci k učení</LiFile>
          </ul>
        </Col>
        <Col mdOffset={1} md={5}>
          <ul className='fa-ul'>
            <LiFile>Individuální vzdělávací plán a pedagogická diagnostika</LiFile>
            <LiFile>Hodnocení žáků ve společném vzdělávání</LiFile>
            <LiFile>Spolupráce pedagoga s asistentem pedagoga</LiFile>
            <LiFile>Komunikace s rodiči </LiFile>
            <LiFile>Spolupráce s poradenskými zařízeními </LiFile>
            <LiFile>Plán pedagogické podpory a Individuální vzdělávací plán</LiFile>
            <LiFile>Efektivní hodnocení žáků a specifičnost hodnocení žáků se SVP</LiFile>
            <LiFile>Pedagogická diagnostika žáka na základní škole</LiFile>
          </ul>
        </Col>
      </Row>
    </div>
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
  create: (gray:boolean) => JSX.Element;
}

function coursesLoader(getLoaders: () => Array<ICoursesLoader>, allLoaders: Array<Array<ICourseLoader>>, actId: string): Array<JSX.Element> {
  var loaders = getLoaders();
  for (var i = 0; i < loaders.length; i++) {
    var block = allLoaders[i];
    loaders[i].containsId = !!block.find(l => l.id == actId);
  }
  loaders.sort((a, b) => a.containsId ? -1 : (b.containsId ? 1 : 0));
  var gray = false;
  return loaders.map(l => { gray = !gray; return l.create(gray); } );
}

function getLoaders(): Array<Array<ICourseLoader>> {
  var res = [
    [
      { id: 'ZSInkluze8', create: expanded => <ZSInkluze8 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.ZSInkluze8.title} /> },
      { id: 'ZSInkluze16', create: expanded => <ZSInkluze16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.ZSInkluze16.title} /> },
      { id: 'ZSInkluze24', create: expanded => <ZSInkluze24 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.ZSInkluze24.title} /> },
      { id: 'ZSInkluze32', create: expanded => <ZSInkluze32 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.ZSInkluze32.title} /> },
    ],
    [
      { id: 'ZSCtenarska16', create: expanded => <ZSCtenarska16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.ZSCtenarska16.title} /> },
      { id: 'ZSCtenarska32', create: expanded => <ZSCtenarska32 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.ZSCtenarska32.title} /> },
      { id: 'ZSMatematicka', create: expanded => <ZSMatematicka defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.ZSMatematicka.title} /> },
      { id: 'ZSMentoring32', create: expanded => <ZSMentoring32 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.ZSMentoring32.title} /> },
      { id: 'ZSMentoring56', create: expanded => <ZSMentoring56 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.ZSMentoring56.title} /> },
      { id: 'ZSMentoring80', create: expanded => <ZSMentoring80 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.ZSMentoring80.title} /> },
    ],
    [
      { id: 'MSInkluze16', create: expanded => <MSInkluze16 defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.MSInkluze16.title} /> },
      { id: 'MSCtenarska', create: expanded => <MSCtenarska defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.MSCtenarska.title} /> },
      { id: 'MSMatematicka', create: expanded => <MSMatematicka defaultExpanded={expanded} key={courseKey++} title={inkluze.root.kurzy.MSMatematicka.title} /> },
    ]
  ];
  res.forEach(l => l.forEach(ll => ll.id = ll.id.toLowerCase()));
  return res;
}