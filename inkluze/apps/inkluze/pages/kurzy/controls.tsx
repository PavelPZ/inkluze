var KurzyTipAlert: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div className='alert alert-warning' style={{ fontSize: '18px' }}>
  <p style={{ marginTop: '0' }}><i className='fa fa-lightbulb-o'></i> Tip: &nbsp;</p>
  <p>
    Pro více informací klikněte na vybrané téma nahoře na stránce.
  </p>
  <p>
    Vypsané termíny kurzů: {sitemapRouter.doNavigateTag(inkluze.root.okurzy)}.
    Kompletní prohledávatelný seznam kurzů: {sitemapRouter.doNavigateTag(inkluze.root.prehledkurzu)}.
  </p>
  <p>
    Pro získání podrobnějších informací o našich akreditovaných kurzech napište email na projekt@langmaster.cz.
  </p>
</div>;

var KurzySSList: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <h2 className='text-right'>Kompletní nabídka kurzů DVPP pro SŠ a VOŠ</h2>
  <h3>Nabízíme kurzy pokrývající následující témata</h3>
  <Row>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSInovativniFormy)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSFormativniHodnoceni)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSNoveTechnologie)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSWellBeing)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSSpoluprace)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSPedagogickaDiagnostika)}
        </LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSOstatniInkluze)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSIndividualizace)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSKarierovePoradenstvi)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSRozvojPodnikavosti)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSMedGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSGenderovaTematika)}
        </LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSMatematickaGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSCtenarskaGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSInovace)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSPodporaUcitelu)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSInkluzeCizinci)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSVyukaCestiny)}
        </LiFile>
      </ul>
    </Col>
  </Row>
</div>;

var KurzyIIList: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <h2 className='text-right'>Kompletní nabídka kurzů DVPP pro ZŠ, MŠ, ZUŠ a ŠD</h2>
  <h3>Nabízíme kurzy pokrývající následující témata</h3>
  <Row>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSInkluze)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSWellBeing)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSFormativniHodnoceni)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSIndividualizace)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSSpoluprace)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSDiagnostika)}
        </LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSInovativniFormy)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSNoveTechnologie)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSMedialniGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSKarierovePoradenstvi)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSRozvojPodnikavosti)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSGenderova)}
        </LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSMatematickaGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSCtenarskaGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSInovace)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSPodpora)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSInkluzeCizinci)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSVyukaCestiny)}
        </LiFile>
      </ul>
    </Col>
  </Row>
</div>;
