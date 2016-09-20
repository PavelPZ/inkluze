var Home: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <div>
      <Block blue style={{ paddingBottom: '10px' }}>
        <h1 className='text-center'><a href={sitemapRouter.navigateUrl(inkluze.root.kurzy) } >Kurzy podle šablon z Výzvy 02_16_022/023</a><br/>od <a href={sitemapRouter.navigateUrl(inkluze.root.lektori) }>zkušených lektorů</a></h1>
        <div className="text-center">Napište nám na <a href={'mailto:' + infoEmail}>{infoEmail}</a> nebo zavolejte +420 244 460 807</div>
        <Grid style={{ marginTop: '15px' }}>
          <Row>
            <Col md={1}>
              <i className="fa fa-exclamation text-info" style={{ fontSize: '100px' }}></i>
            </Col>
            <Col md={4}>
              <h4>Příklad obsahu kurzu - Inkluze: </h4>
              <ul className='fa-ul'>
                <LiFile>Základní právní předpisy legislativní změny</LiFile>
                <LiFile>Žák se speciálními vzdělávacími potřebami </LiFile>
                <LiFile>Struktura podpůrných opatření a jejich členění do pěti stupňů</LiFile>
                <LiFile>Podpůrná opatření prvního stupně </LiFile>
                <LiFile>Podpůrná opatření 2. - 5. stupně </LiFile>
                <LiFile>Struktura a obsah Plánu pedagogické podpory</LiFile>
                <LiFile>Zpracování ukázkového Plánu pedagogické podpory</LiFile>
              </ul>
            </Col>
            <Col md={1} style={{ paddingTop: '110px' }}>
              <i className="fa fa-ellipsis-v text-info" style={{ fontSize: '60px' }}></i>
            </Col>
            <Col md={5}>
              <h4>&nbsp; </h4>
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
    
    <BlockEx header={<div>"Výzva" = dotace EU pro ZŠ a MŠ</div>} gray>
      <ul className='fa-ul'>
        <LiHand>EU nyní poskytuje českým základním a mateřským školám dotaci v ohromující výši Kč 4.5 mld.
          Dotace je z velké části určena na podporu inkluze (společného vzdělávání) a na další vzdělávání pedagogických pracovníků (DVPP).</LiHand>
        <LiHand>Dotace je určena zejména na:
          <ul>
            <li><b>Platy speciálních pracovníků</b> (asistent pedagoga, speciální pedagog, školní psycholog, sociální pedagog), které musí školy zaměstnat v souvislosti s inkluzí.
              Dotace na platy se nazývá <b>Personální podpora</b></li>
            <li><b>Vzdělávání učitelů</b> (kurzy <b>DVPP</b> = <b>D</b>alšího <b>V</b>zdělávání <b>P</b>edagogických <b>P</b>racovníků)
              zaměřené na inkluzi, čtenářskou a matematickou gramotnost, cizíj jazyky a mentoring.
            </li> 
          </ul>
        </LiHand>
        <LiHand>
          Dotační výzvy jsou dvě: <b>Výzva č.02_16_022</b> (pro mimopražské školy) a <b>Výzva č.02_16_023</b> (pro pražské školy).
          Obsahem jsou tyto výzvy identické, budeme je dále nazývat zkráceně {popups.vyzva}.</LiHand>
        {/*
        <HomeLi2>
          V rámci Výzvy je možno získat dotace i na další kurzy a aktivity, které se nezabývají inkluzí.
          O těch se ale budeme zmiňovat méně podrobně.</HomeLi2>*/}
      </ul>
    </BlockEx>
    <BlockEx header="Nabízíme DVPP kurzy zaměřené na inkluzi, mentoring, čtenářskou a matematickou gramotnost">
      <p>
        Pro učitele jsme <b>ve spolupráci se zkušenými akreditovanými lektory</b> připravili v rámci DVPP řadu kurzů.
        Cílem kurzů je, aby pokud možno celý pedagogický sbor získal orientaci v problematice inkluze resp.
        ve speciálních dovednostech: <b>mentoring, čtenářská a matematická gramotnost</b>.
      </p>
      <p>
        Naši lektoři mají s DVPP mnohaleté zkušenosti.
        Více viz stránka  {sitemapRouter.navigateTag(inkluze.root.lektori) }.
      </p>
      <p>
        V podmínkách pro využití dotace je stanoveno, že každý učitel, který se v rámci projektu účastní nějakého vzdělávacího kurzu, <b>musí v souhrnu absolvovat alespoň 24 hodin vzdělávání</b>.
        Této podmínce se říká {popups.bagatelni_podpora}.
      </p>
      {/*<p>
        Mimo základních kurzů zaměřených na inkluzi (<b>8</b> hodin a <b>16</b> hodin) jsme proto připravili kurzy v celkové délce <b>24</b>, resp.
        <b> 32</b> hodin a kurzy mentoringu a čtenářské a matematické gramotnosti.
        Naše kurzy splňují všechny podmínky tak, aby na ně bylo možno použít peníze z dotace.
      </p>
      <p>
        Cílem kurzů je, aby se pokud možno celý pedagogický sbor dokázal orientovat v problematice inkluze.
        U kurzu v délce 32 hodin zbude více prostoru na diskusi s učiteli, řešení konkrétních problémů týkajících se dané školy a praktické procvičování získaných znalostí.
      </p>*/}
      <p>
        Více viz stránka {sitemapRouter.navigateTag(inkluze.root.kurzy) }.
      </p>
    </BlockEx>
    {/*<BlockEx header="Inkluze se týká většiny učitelů" gray>
      S malou nadsázkou se dá se říci, že v českých školách nenajdete učitele, který by se během své praxe nesetkal s problémy souvisejícími s inkluzí.
      V tom případě se mu jistě budou hodit znalosti z našich kurzů, které řeší otázky typu:
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
        <LiCheck>A mnoho dalších…</LiCheck>
      </ul>
    </BlockEx>*/}
    {/*<BlockEx header="Nabídka kurzů">
      <p>
        V podmínkách pro využití dotace je stanoveno, že každý učitel, který se v rámci projektu účastní nějakého vzdělávacího kurzu, <b>musí v souhrnu absolvovat alespoň 24 hodin vzdělávání</b>.
        Této podmínce se říká {popups.bagatelni_podpora}.
      </p>
      <p>
        Mimo základních kurzů zaměřených na inkluzi (<b>8</b> hodin a <b>16</b> hodin) jsme proto připravili kurzy v celkové délce <b>24</b>, resp.
        <b> 32</b> hodin a kurzy mentoringu a čtenářské a matematické gramotnosti.
        Naše kurzy splňují všechny podmínky tak, aby na ně bylo možno použít peníze z dotace.
      </p>
      <p>
        Cílem kurzů je, aby se pokud možno celý pedagogický sbor dokázal orientovat v problematice inkluze.
        U kurzu v délce 32 hodin zbude více prostoru na diskusi s učiteli, řešení konkrétních problémů týkajících se dané školy a praktické procvičování získaných znalostí.
      </p>
      <p>
        Více viz stránka {sitemapRouter.navigateTag(inkluze.root.kurzy) }.
      </p>
    </BlockEx>*/}
    <BlockEx header="Další informace a služby týkající se dotace">
      <p>
        Získat dotaci a využít ji není tak složité, jak se může při prvním čtení stovek stran oficiálních dokumentů zdát.
        Rádi vám poskytneme další informace a služby, které vám čerpání dotace výrazně zjednoduší:
      </p>
      <h4>Seznámení s pravidly Výzvy</h4>
      <p>
        Pro vaši rychlou orientaci jsme popsali důležité aspekty Výzvy tak, abyste byli schopni o dotaci zažádat a využít ji dle pravidel EU (viz stránka {sitemapRouter.navigateTag(inkluze.root.pravidla) }).
      </p>
      <p>
        V případě nejasností rádi zodpovíme vaše otázky na stránce {sitemapRouter.navigateTag(inkluze.root.q_and_a) }.
      </p>
      <h4>Další služby</h4>
      Pokud budete potřebovat, pomůžeme vám s vyplněním žádosti nebo s kompletním projektovým řízením (zasílání průběžných zpráv, závěrečné zprávy apod.), viz stránka {sitemapRouter.navigateTag(inkluze.root.dalsi) }.
    </BlockEx>
  </Page>
</div >;

Home.contextTypes = sitemapRouter.childContextTypes;

