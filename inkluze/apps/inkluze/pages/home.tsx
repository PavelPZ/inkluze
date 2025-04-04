var Home: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <div>
      <Block blue style={{ paddingBottom: '10px' }}>
        <h1 className='text-center'><a href="#" onClick={ev => sitemapRouter.doNavigate(inkluze.root.kurzyii, ev)} >Kurzy pro šablony OP JAK I a OP JAK II </a></h1>
        <div className="text-center">Napište nám na <a href={'mailto:' + infoEmail}>{infoEmail}</a> nebo zavolejte +420 244 460 807</div>
        <Grid style={{ marginTop: '15px' }}>
          <Row>
            <Col md={1}>
              <i className="fa fa-exclamation text-info" style={{ fontSize: '100px' }}></i>
            </Col>
            <Col md={10}>
              <h4>Nabízíme kurzy následujícího zaměření:</h4>
              <ul className='fa-ul'>
                <LiFile>Well-being a psychohygiena (21 akreditovaných kurzů)</LiFile>
                <LiFile>Inkluze (24 kurzů)</LiFile>
                <LiFile>Alternativní/inovativní formy výuky, aktivizační metody ve výuce (3 kurzy)</LiFile>
                <LiFile>Vzděláváni s využitím nových technologií (15 kurzů)</LiFile>
                <LiFile>Formativní hodnocení (3 kurzy)</LiFile>
                <LiFile>Individualizace vzdělávání a vedení portfolia dítěte/žáka (1 kurz)</LiFile>
                <LiFile>Pedagogická diagnostika (5 kurzů)</LiFile>
                <LiFile>Spolupráce s rodiči a zákonnými zástupci dětí a žáků (1 kurz)</LiFile>
                <LiFile>Inovace ŠVP/koncepce rozvoje školy/školského zařízení (5 kurzů)</LiFile>
                <LiFile>Kariérové poradenství včetně identifikace a rozvoje nadání (3 kurzy)</LiFile>
                <LiFile>Rozvoj podnikavosti a kreativity (2 kurzy)</LiFile>
                <LiFile>Genderová tematika v obsahu vzdělávání (1 kurz)</LiFile>
                <LiFile>Mediální gramotnost, prevence kyberšikany, chování na sociálních sítích (1 kurz)</LiFile>
                <LiFile>Čtenářská gramotnost (9 kurzů)</LiFile>
                <LiFile>Matematická gramotnost (10 kurzů)</LiFile>
                <LiFile>Inkluze zaměřená na cizince (9 kurzů)</LiFile>
                <LiFile>Výuka češtiny jako druhého jazyka (2 kurzy)</LiFile>
                <LiFile>Podpora uvádějících/provázejících učitelů (3 kurzy)</LiFile>
                <LiFile>Obsah jednotlivých kurzů naleznete na stránkách <a href="#" onClick={ev => sitemapRouter.doNavigate(inkluze.root.kurzyss, ev)}>Šablony pro SŠ a VOŠ I a II - OP JAK</a> a <a href="#" onClick={ev => sitemapRouter.doNavigate(inkluze.root.kurzyii, ev)}>Šablony pro ZŠ a MŠ I a II - OP JAK</a></LiFile>
              </ul>
            </Col>
            <Col md={1}>
              <i className="fa fa-exclamation text-info" style={{ fontSize: '100px' }}></i>
            </Col>
          </Row>
        </Grid>
      </Block>
    </div>

    {/*<BlockEx header={"\"Výzva\" = dotace EU pro ZŠ a MŠ"} gray>
      <ul className='fa-ul'>
        <LiHand>EU nyní poskytuje českým základním a mateřským školám dotaci v ohromující výši Kč 4.5 mld.
          Dotace je z velké části určena na podporu inkluze (společného vzdělávání) a na další vzdělávání pedagogických pracovníků (DVPP).</LiHand>
        <LiHand>Dotace je určena zejména na:
          <ul>
            <li><b>Platy speciálních pracovníků</b> (asistent pedagoga, speciální pedagog, školní psycholog, sociální pedagog), které musí školy zaměstnat v souvislosti s inkluzí.
              Dotace na platy se nazývá <b>Personální podpora</b></li>
            <li><b>Vzdělávání učitelů</b> (kurzy <b>DVPP</b> = <b>D</b>alšího <b>V</b>zdělávání <b>P</b>edagogických <b>P</b>racovníků)
              zaměřené na inkluzi, čtenářskou a matematickou gramotnost, cizí jazyky a mentoring.
            </li> 
          </ul>
        </LiHand>
        <LiHand>
          Dotační výzvy jsou dvě: <b>Výzva č.02_16_022</b> (pro mimopražské školy) a <b>Výzva č.02_16_023</b> (pro pražské školy).
          Obsahem jsou tyto výzvy identické, budeme je dále nazývat zkráceně {popups.vyzva}.</LiHand>*/}
    {/*
        <HomeLi2>
          V rámci Výzvy je možno získat dotace i na další kurzy a aktivity, které se nezabývají inkluzí.
          O těch se ale budeme zmiňovat méně podrobně.</HomeLi2>*/}
    {/*</ul>
    </BlockEx>*/}
    {/*<BlockEx header="Přehled akreditovaných kurzů zaměřených na inkluzi, mentoring, čtenářskou a matematickou gramotnost">
      <ul className='fa-ul'>
        <LiHand>
          Inkluze: 5 kurzů pro výzvu 02_16_022 / 023 a 3 kurzy pro výzvu 02_16_035 / 042 
        </LiHand>
        <LiHand>
          Čtenářská gramotnost: …
        </LiHand>
        <LiHand>
          Matematická gramotnost: …
        </LiHand>
        <LiHand>
          Mentoring: …
        </LiHand>
        <LiHand>
          V současné době máme k akreditaci podaných dalších XX kurzů. Vzhledem k našim zkušenostem z předchozích akreditací očekáváme jejich bezproblémové schválení.
        </LiHand>
      </ul>

      <p>
        Bližší informace naleznete ma stránkách {sitemapRouter.doNavigateTag(inkluze.root.kurzy)}
        a {sitemapRouter.doNavigateTag(inkluze.root.kurzyss)}.
      </p>
    </BlockEx>*/}
    <BlockEx header="Termíny a místo kurzů">
      <p>
        Naší strategií je vycházet maximálně vstříc potřebám jednotlivých škol.
        Zaměřujeme se tedy především na výuku <b>ve sborovnách</b>, s tím, že výuka může probíhat <b>i o víkendech nebo v odpoledních hodinách</b>.
        Pokud máte zájem o nějaký konkrétní termín, napište nám na projekt@langmaster.cz nebo zavolejte +420 244 460 807.
      </p>
    </BlockEx>

    {/*<BlockEx header="Nabízíme DVPP kurzy zaměřené na inkluzi, mentoring, čtenářskou a matematickou gramotnost">
      <p>
        Pro učitele jsme <b>ve spolupráci se zkušenými akreditovanými lektory</b> připravili v rámci DVPP řadu kurzů.
        Cílem kurzů je, aby pokud možno celý pedagogický sbor získal orientaci v problematice inkluze resp.
        ve speciálních dovednostech: <b>mentoring, čtenářská a matematická gramotnost</b>.
      </p>
      <p>
        Naši lektoři mají s DVPP mnohaleté zkušenosti.
        Více viz stránka  {sitemapRouter.doNavigateTag(inkluze.root.okurzy) }.
      </p>
      <p>
        V podmínkách pro využití dotace je stanoveno, že každý učitel, který se v rámci projektu účastní nějakého vzdělávacího kurzu, <b>musí v souhrnu absolvovat alespoň 24 hodin vzdělávání</b>.
        Této podmínce se říká <b>bagetelní podpora</b> pro {popups.bagatelni_podpora} respektive {popups.bagatelni_podpora_ss} .
      </p>*/}
    {/*<p>
        Mimo základních kurzů zaměřených na inkluzi (<b>8</b> hodin a <b>16</b> hodin) jsme proto připravili kurzy v celkové délce <b>24</b>, resp.
        <b> 32</b> hodin a kurzy mentoringu a čtenářské a matematické gramotnosti.
        Naše kurzy splňují všechny podmínky tak, aby na ně bylo možno použít peníze z dotace.
      </p>
      <p>
        Cílem kurzů je, aby se pokud možno celý pedagogický sbor dokázal orientovat v problematice inkluze.
        U kurzu v délce 32 hodin zbude více prostoru na diskusi s učiteli, řešení konkrétních problémů týkajících se dané školy a praktické procvičování získaných znalostí.
      </p>*/}

    {/*</BlockEx>*/}
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
    {/*<BlockEx header="Další informace a služby týkající se dotace" gray>
      <p>
        Získat dotaci a využít ji není tak složité, jak se může při prvním čtení stovek stran oficiálních dokumentů zdát.
        Rádi vám poskytneme další informace a služby, které vám čerpání dotace výrazně zjednoduší:
      </p>
      <h4>Seznámení s pravidly Výzvy</h4>
      <p>
        Pro vaši rychlou orientaci jsme popsali důležité aspekty Výzvy tak, abyste byli schopni o dotaci zažádat a využít ji dle pravidel EU (viz stránka {sitemapRouter.doNavigateTag(inkluze.root.pravidla) }).
      </p>
      <p>
        V případě nejasností rádi zodpovíme vaše otázky na stránce {sitemapRouter.doNavigateTag(inkluze.root.q_and_a) }.
      </p>
      <h4>Další služby</h4>
      Pokud budete potřebovat, pomůžeme vám s vyplněním žádosti nebo s kompletním projektovým řízením (zasílání průběžných zpráv, závěrečné zprávy apod.), viz stránka {sitemapRouter.doNavigateTag(inkluze.root.dalsi) }.
    </BlockEx>*/}
  </Page>
</div >;

Home.contextTypes = sitemapRouter.childContextTypes;

