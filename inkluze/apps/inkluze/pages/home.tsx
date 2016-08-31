﻿var Home: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page isSmall={false}>
    <div>
      <Block blue style={{ paddingBottom: '10px' }}>
        <h1 className='text-center'>{ctx.site.title}</h1>
        <h3 className='text-center'><a href={sitemapRouter.navigateUrl(inkluze.root.kurzy) } >Kurzy od zkušených akreditovaných lektorů</a></h3>
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
                  <LiFile>Základní právní předpisy legislativní změny</LiFile>
                  <LiFile>Žák se speciálními vzdělávacími potřebami </LiFile>
                  <LiFile>Struktura podpůrných opatření a jejich členění do pěti stupňů</LiFile>
                  <LiFile>Podpůrná opatření prvního stupně </LiFile>
                  <LiFile>Podpůrná opatření 2. - 5. stupně </LiFile>
                  <LiFile>Struktura a obsah Plánu pedagogické podpory</LiFile>
                  <LiFile>Zpracování ukázkového Plánu pedagogické podpory</LiFile>
                </ul>
              </div>
            </Col>
            <Col md={1} style={{ paddingTop: '20px' }}>
              <i className="fa fa-ellipsis-v text-info" style={{ fontSize: '60px' }}></i>
            </Col>
            <Col md={5}>
              <ul className='fa-ul'>
                <LiFile>Výukové metody a jejich role při motivaci k učení</LiFile>
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
            <Col md={1}>
              <i className="fa fa-exclamation text-info" style={{ fontSize: '100px' }}></i>
            </Col>
          </Row>
        </Grid>
      </Block>
    </div>
    <BlockEx header="O Inkluzi">
      <p>
        Problematika inkluze, neboli začleňování děti se speciálními vzdělávacími potřebami do základních a mateřských škol, není žádnou letošní novinkou.
        Novinkou je, že se inkluze konečně začíná efektivně řešit.
        Ať už právními úpravami (nová vyhláška školského zákona) nebo velkými finančními dotacemi (které by měly školám významně pomoci inkluzi zvládnout).
      </p>
      {/*
      <p>
        S malou nadsázkou se dá se říci, že v českých školách nenajdete učitele, který by se s touto problematikou v předchozích letech v některé ze svých tříd již nesetkal.
      </p>
      <br/>
      <div className='alert alert-warning'>
        Poznámka: <b>Inkluze</b> se nově nazývá <b>Společné vzdělávání</b>.
        My budeme ale používat doposud rozšířenější termín Inkluze.
      </div>
      */}
    </BlockEx>
    <BlockEx header={<div>"Výzva" = dotace EU na inkluzi pro ZŠ a MŠ</div>} gray>
      <ul className='fa-ul'>
        <LiHand>EU nyní poskytuje českým základním a mateřským školám dotaci v ohromující výši Kč 4.5 mld.
          Dotace je z velké části určena na podporu inkluze.</LiHand>
        <LiHand>Dotace pro inkluzi je určena zejména na:
          <ul>
            <li><b>Platy speciálních pracovníků</b> (asistent pedagoga, speciální pedagog, školní psycholog, sociální pedagog), které musí školy v souvislosti s inkluzí zaměstnat.Dotace na platy se nazývá <b>Personální podpora</b></li>
            <li><b>Vzdělávání učitelů</b> (školení v rámci <b>DVPP</b> = <b>D</b>alšího <b>V</b>zdělávání <b>P</b>edagogických <b>P</b>racovníků) </li>
          </ul>
        </LiHand>
        <LiHand>
          Dotační výzvy jsou dvě: <b>Výzva č.02_16_022</b> (pro mimopražské školy) a <b>Výzva č.02_16_023</b> (pro pražské školy).
          Obsahem jsou tyto výzvy identické, budeme je dále nazývat zkráceně <b>Výzva</b>.</LiHand>
        {/*
        <HomeLi2>
          V rámci Výzvy je možno získat dotace i na další kurzy a aktivity, které se nezabývají inkluzí.
          O těch se ale budeme zmiňovat méně podrobně.</HomeLi2>*/}
      </ul>
    </BlockEx>
    <BlockEx header="Školení na inkluzi pod vedením renomovaných lektorů">
      Pro učitele jsme ve spolupráci se zkušenými akreditovanými lektory připravili řadu školení.
      Cílem školení je, aby pokud možno celý pedagogický sbor získal orientaci v problematice inkluze.
      Naši lektoři mají mnohaletou praxi jak s vzděláváním učitelů tak s inkluzí, o čemž se můžete přesvědčit <i>TODO: zde.</i>
    </BlockEx>
    <BlockEx header="Inkluze se týká většiny učitelů" gray>
      S malou nadsázkou se dá se říci, že v českých školách nenajdete učitele, který by se v některé ze svých tříd nesetkal s problematikou inkluze.
      V tomto případě se mu jistě budou hodit znalosti z našich školení, jako například:
      <ul className='fa-ul' style={{ marginTop: "8px" }}>
        <LiCheck>Existují nějaké speciální pomůcky nebo metody, které by mohly žákovi ve výuce pomoci?</LiCheck>
        <LiCheck>Kdo mu může poradit jak k žákovi přistupovat a řešit s ním problematické situace?</LiCheck>
        <LiCheck>Jak žáka hodnotit a jak ho motivovat?</LiCheck>
        <LiCheck>
          Může mít žák individuální vzdělávací plán?
          Jak a s čí pomocí ho může učitel sestavit?</LiCheck>
        <LiCheck>Za jakých podmínek může učiteli při výuce pomáhat školní asistent?</LiCheck>
        <LiCheck>Jak rozdělit pravomoc mezi učitele a asistenta a jak vůbec s asistentem spolupracovat?</LiCheck>
        <LiCheck>Jak efektivně komunikovat s rodiči žáka?
          Kdo s tím učiteli může pomoci?</LiCheck>
        <LiCheck>A mnoho dalšího…</LiCheck>
      </ul>
    </BlockEx>
    <BlockEx header="Alespoň 24 hodin školení nebo nic">
      <p>
        V podmínkách pro využití dotace je stanoveno, že každý učitel, který se v rámci projektu účastní nějakého školení, <b>musí v souhrnu absolvovat alespoň 24 hodin školení</b>.
        Připravili jsme proto 24-hodinové a 32-hodinové školení.
        Obě školení splňují všechny podmínky, aby na ně bylo možno použit peníze z dotace.
      </p>
      <p>
        Cílem obou školení je, aby učitelé získali základní orientaci v problematice inkluzivního vzdělávání.
        U 32-hodinového školení zbude více prostoru na diskusi s učiteli, řešení konkrétních problémů, týkajících se dané školy a praktické procvičování získaných znalostí.
      </p>
    </BlockEx>
    {/*<BlockEx header="Postup pro získání a využití dotace">
      <ol>
        <li><b>Seznámíte se s možnostmi a pravidly Výzvy.</b><br/>
          Získat dotaci a využít ji není tak složité, jak se může při prvním čtení stovek stran oficiálních dokumentů zdát.
          Pro vaši rychlou orientaci jsme popsali důležité aspekty Výzvy tak, abyste byli schopni o dotaci zažádat a využít ji dle pravidel EU<br/>
          Viz stránka {sitemapRouter.navigateTag(inkluze.root.pravidla) }.<br/>
          V případě nejasností rádi zodpovíme vaše otázky na stránce  {sitemapRouter.navigateTag(inkluze.root.q_and_a) }.</li>
        <li><b>Zažádáte si o dotaci</b> (v souladu s pravidly EU) <br/>
          Pokud budete potřebovat, s vyplněním vám pomůžeme.<br/>
          Viz stránka {sitemapRouter.navigateTag(inkluze.root.zadost) }</li>
        <li><b>Objednáte si Vzdělávací kurzy</b>, kterými vyškolíte vaše učitele.<br/>
          Spolupracujeme s renomovanými lektory s mnohaletou praxí.
          Jak naši lektoři, tak i naše kurzy na inkluzi splňují podmínky Výzvy (vše je akreditováno MŠMT).<br/>
          Viz stránka {sitemapRouter.navigateTag(inkluze.root.kurzy) }</li>
        <li><b>Budete průběžně plnit další formální požadavky EU</b> (zasílání průběžných zpráv o realizaci projektu apod.) <br/>
          Pomůžeme Vám s kompletním projektovým řízením.Viz stránka {sitemapRouter.navigateTag(inkluze.root.project) }</li>
      </ol>
    </BlockEx>*/}
  </Page>
</div>;

Home.contextTypes = sitemapRouter.childContextTypes;

var LiFile: React.StatelessComponent<lib.IComponentProps> = (props: lib.IComponentProps, ctx: sitemapRouter.IContext) => <li style={{ paddingBottom: '5px' }}><i className='fa-li fa fa-file-o'></i>{props.children}</li>;
var LiHand: React.StatelessComponent<lib.IComponentProps> = (props: lib.IComponentProps, ctx: sitemapRouter.IContext) => <li style={{ paddingBottom: '5px' }}><i className='fa-li fa fa-hand-o-right'></i>{props.children}</li>;
var LiCheck: React.StatelessComponent<lib.IComponentProps> = (props: lib.IComponentProps, ctx: sitemapRouter.IContext) => <li style={{ paddingBottom: '5px' }}><i className='fa-li fa fa-check'></i>{props.children}</li>;