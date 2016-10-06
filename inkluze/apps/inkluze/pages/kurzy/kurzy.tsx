var Kurzy: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => {
  var allLoaders = getLoaders();
  return <div>
    <Page>
      {ctx.site.id == 'kurzy' ? <Block >
        <KurzyList />
        <KurzyAlert />
        <KurzyForm />
      </Block> : null}

      {coursesLoader(() => [
        { create: () => <KurzyInkluze loaders={allLoaders[0]} /> },
        { create: () => <KurzyOstatni loaders={allLoaders[1]} /> },
        { create: () => <KurzyMS loaders={allLoaders[2]} /> },
      ], allLoaders, ctx.site.id as string)}

    </Page >
  </div >
};

Kurzy.contextTypes = sitemapRouter.childContextTypes;

interface IKuryBlockProps {
  loaders: Array<ICourseLoader>;
}

var KurzyInkluze: React.StatelessComponent<IKuryBlockProps> = (props: IKuryBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray>
    <h2 className='text-right'>ZŠ Inkluze</h2>
    {courseLoader(props.loaders, ctx.site.id as string)}
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

var KurzyOstatni: React.StatelessComponent<IKuryBlockProps> = (props: IKuryBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block >
    <h2 className='text-right'>ZŠ Ostatní</h2>
    {courseLoader(props.loaders, ctx.site.id as string)}
  </Block>;
}
KurzyOstatni.contextTypes = sitemapRouter.childContextTypes;

var KurzyMS: React.StatelessComponent<IKuryBlockProps> = (props: IKuryBlockProps, ctx: sitemapRouter.IContext) => {
  return <Block gray>
    <h2 className='text-right'>MŠ Kurzy</h2>
    {courseLoader(props.loaders, ctx.site.id as string)}
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
  create: () => JSX.Element;
}

function coursesLoader(getLoaders: () => Array<ICoursesLoader>, allLoaders: Array<Array<ICourseLoader>>, actId: string): Array<JSX.Element> {
  var loaders = getLoaders();
  for (var i = 0; i < loaders.length; i++) {
    var block = allLoaders[i];
    loaders[i].containsId = !!block.find(l => l.id == actId);
  }
  loaders.sort((a, b) => a.containsId ? -1 : (b.containsId ? 1 : 0));
  return loaders.map(l => l.create());
}

function getLoaders(): Array<Array<ICourseLoader>> {
  return [
    [
      { id: 'ZSInkluze8', create: expanded => <ZSInkluze8 defaultExpanded={expanded} key={courseKey++} /> },
      { id: 'ZSInkluze16', create: expanded => <ZSInkluze16 defaultExpanded={expanded} key={courseKey++} /> },
      { id: 'ZSInkluze24', create: expanded => <ZSInkluze24 defaultExpanded={expanded} key={courseKey++} /> },
      { id: 'ZSInkluze32', create: expanded => <ZSInkluze32 defaultExpanded={expanded} key={courseKey++} /> },
    ],
    [
      { id: 'ZSCtenarska', create: expanded => <ZSCtenarska defaultExpanded={expanded} key={courseKey++} /> },
      { id: 'ZSMatematicka', create: expanded => <ZSMatematicka defaultExpanded={expanded} key={courseKey++} /> },
      { id: 'ZSMentoring32', create: expanded => <ZSMentoring32 defaultExpanded={expanded} key={courseKey++} /> },
      { id: 'ZSMentoring56', create: expanded => <ZSMentoring56 defaultExpanded={expanded} key={courseKey++} /> },
    ],
    [
      { id: 'MSInkluze16', create: expanded => <MSInkluze16 defaultExpanded={expanded} key={courseKey++} /> },
      { id: 'MSCtenarska', create: expanded => <MSCtenarska defaultExpanded={expanded} key={courseKey++} /> },
      { id: 'MSMatematicka', create: expanded => <MSMatematicka defaultExpanded={expanded} key={courseKey++} /> },
    ]
  ]
}