var Home: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page isSmall={false}>
    <div>
      <Block blue style={{ paddingBottom: '10px' }}>
        <h1 className='text-center'>{ctx.site.title}</h1>
        <h3 className='text-center'><a href={sitemapRouter.navigateUrl(inkluze.root.kurzy) } >Kurzy na inkluzi od zkušených lektorů</a></h3>
        <div className="text-center">Napiště nám na <a href="mailto:info@langmaster.cz" >info @langmaster.cz</a> nebo zavolejte +420 244 460 807</div>
        <Grid style={{ marginTop: '15px' }}>
          <Row>
            <Col md={1}>
              <i className="fa fa-exclamation text-info" style={{ fontSize: '100px' }}></i>
            </Col>
            <h4>Příklad obsahu kurzu: </h4>
            <Col md={4}>
              <div>
                <ul className='fa-ul'>
                  <HomeLi>Základní právní předpisy legislativní změny</HomeLi>
                  <HomeLi>Žák se speciálními vzdělávacími potřebami </HomeLi>
                  <HomeLi>Struktura podpůrných opatření a jejich členění do pěti stupňů</HomeLi>
                  <HomeLi>Podpůrná opatření prvního stupně </HomeLi>
                  <HomeLi>Podpůrná opatření 2. - 5. stupně </HomeLi>
                  <HomeLi>Struktura a obsah Plánu pedagogické podpory</HomeLi>
                  <HomeLi>Zpracování ukázkového Plánu pedagogické podpory</HomeLi>
                </ul>
              </div>
            </Col>
            <Col md={1} style={{ paddingTop: '20px' }}>
              <i className="fa fa-ellipsis-v text-info" style={{ fontSize: '60px' }}></i>
            </Col>
            <Col md={5}>
              <ul className='fa-ul'>
                <HomeLi>Výukové metody a jejich role při motivaci k učení</HomeLi>
                <HomeLi>Individuální vzdělávací plán a pedagogická diagnostika</HomeLi>
                <HomeLi>Hodnocení žáků ve společném vzdělávání</HomeLi>
                <HomeLi>Spolupráce pedagoga s asistentem pedagoga</HomeLi>
                <HomeLi>Komunikace s rodiči </HomeLi>
                <HomeLi>Spolupráce s poradenskými zařízeními </HomeLi>
                <HomeLi>Plán pedagogické podpory a Individuální vzdělávací plán</HomeLi>
                <HomeLi>Efektivní hodnocení žáků a specifičnost hodnocení žáků se SVP</HomeLi>
                <HomeLi>Pedagogická diagnostika žáka na základní škole</HomeLi>
              </ul>
            </Col>
            <Col md={1}>
              <i className="fa fa-exclamation text-info" style={{ fontSize: '100px' }}></i>
            </Col>
          </Row>
        </Grid>
      </Block>
    </div>
    <Block>
      <h2>O inkluzi</h2>
      <Row>
        <Col mdOffset={2} md={8}>
          <p>
            Problematika inkluze neboli začleňování děti se speciálními vzdělávacími potřebami do běžných škol není žádnou letošní novinkou.
            S malou nadsázkou se dá se říci, že v českých školách nenajdete učitele, který by se s touto problematikou v předchozích letech v některé ze svých tříd již nesetkal.
          </p>
          <p>
            Co je však nového je, že se inkluze konečně začíná efektivně řešit.
            Ať už právními úpravami, tak také velkými finančními dotacemi, které by měly školám významně pomoci problematiku inkluze v celé šíři zvládnout.
          </p>
          <br/>
          <div className='alert alert-warning'>
            Poznámka: <b>Inkluze</b> se nově nazývá <b>Společné vzdělávání</b>.
            My budeme ale používat doposud rozšířenější termín Inkluze.
          </div>
        </Col>
      </Row>
    </Block>
    <Block gray>
      <h2>Dotace EU na inkluzi pro ZŠ a MŠ</h2>
      <Row>
        <Col mdOffset={2} md={8}>
          <ul className='fa-ul'>
            <HomeLi2>EU nyní poskytuje České republice dotaci v celkové výši 4.5 mld.na podporu inkluze, o kterou si mohou požádat české základní a mateřské školy</HomeLi2>
            <HomeLi2>Dotace je určena zejména:
              <ul>
                <li>na tzv.&nbsp; <b>Personální podporu</b> (tj.platy specializovaných pracovníků, které musí školy v souvislosti s inkluzí zaměstnat, např.školní asistent, školní speciální pedagog apod.) </li>
                <li>na <b>vzdělávání učitelů</b> v oblasti inkluze (tj.Vzdělávací kurzy v rámci „DVPP“ – Další Vzdělávání Pedagogických Pracovníků) </li>
              </ul>
            </HomeLi2>
            <HomeLi2>
              Dotační výzvy jsou dvě: <b>Výzva č.02_16_022</b> (pro mimopražské školy) a <b>Výzva č.02_16_023</b> (pro pražské školy).
              Obsahem jsou tyto výzvy identické, budeme je dále nazývat zkráceně <b>Výzva</b>.</HomeLi2>
            <HomeLi2>
              V rámci Výzvy je možno získat dotace i na další kurzy a aktivity, které se nezabývají inkluzí.
              O těch se ale budeme zmiňovat méně podrobně.</HomeLi2>
          </ul>
        </Col>
      </Row>
    </Block>
    <Block>
      <h2>Postup pro získání a využití dotace</h2>
      <Row>
        <Col mdOffset={2} md={8}>
          <ol>
            <li><b>Seznámíte se s možnostmi a pravidly Výzvy.</b><br/>
              Získat dotaci a využít ji není tak složité, jak se může při prvním čtení stovek stran oficiálních dokumentů zdát.
              Pro vaši rychlou orientaci jsme popsali důležité aspekty Výzvy tak, abyste byli schopni o dotaci zažádat a využít ji dle pravidel EU<br/>
              Viz {sitemapRouter.navigateTag(inkluze.root.pravidla) }.<br/>
              V případě nejasností rádi zodpovíme vaše otázky v {sitemapRouter.navigateTag(inkluze.root.q_and_a) }.</li>
            <li><b>Zažádáte si o dotaci</b> (v souladu s pravidly EU) <br/>
              Pokud budete potřebovat, s vyplněním vám pomůžeme.<br/>
              Viz {sitemapRouter.navigateTag(inkluze.root.zadost) }</li>
            <li><b>Objednáte si Vzdělávací kurzy</b>, kterými vyškolíte vaše učitele.<br/>
              Spolupracujeme s renomovanými lektory s mnohaletou praxí.
              Jak naši lektoři, tak i naše kurzy na inkluzi splňují podmínky Výzvy (vše je akreditováno MŠMT).<br/>
              Viz {sitemapRouter.navigateTag(inkluze.root.kurzy) }</li>
            <li><b>Budete průběžně plnit další formální požadavky EU</b> (zasílání průběžných zpráv o realizaci projektu apod.) <br/>
              Pomůžeme s kompletním projektovým na {sitemapRouter.navigateTag(inkluze.root.project) }</li>
          </ol>
        </Col>
      </Row>
    </Block>
  </Page>
</div>;

Home.contextTypes = sitemapRouter.childContextTypes;

var HomeLi: React.StatelessComponent<lib.IComponentProps> = (props: lib.IComponentProps, ctx: sitemapRouter.IContext) => <li><i className='fa-li fa fa-file-o'></i>{props.children}</li>;
var HomeLi2: React.StatelessComponent<lib.IComponentProps> = (props: lib.IComponentProps, ctx: sitemapRouter.IContext) => <li style={{ paddingBottom: '5px' }}><i className='fa-li fa fa-circle-o xtext-warning'></i>{props.children}</li>;