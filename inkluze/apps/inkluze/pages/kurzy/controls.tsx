﻿const emailTemplate: React.StatelessComponent<IKuryFormFormStatus> = (props: IKuryFormFormStatus, ctx: sitemapRouter.IContext) => <div>
  <p><b>EMail: </b> {props.email}</p>
  <p><b>Phone: </b> {props.phone}</p>
  <p><b>Teachers: </b> {props.teachers}</p>
  {/*<p><b>Course: </b> {props.course}</p>
  <p><b>ICO: </b> {props.ICO}</p>
  <p><b>RED_IZO: </b> {props.RED_IZO}</p>*/}
  <p><b>Upřesnění poptávky: </b> {props.poznamka}</p>
  <p><b>URL: </b> {location.href}</p>
</div>;

const headerCss: React.CSSProperties = { textDecoration: 'underline', cursor: 'pointer' };

interface IKurzProps { defaultExpanded: boolean; title: string; }

var ZSInkluze8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Klima třídy a vedení třídnické hodiny v rámci inkluze</li>
          <li>Práce se žákem s problémovým chováním – 8 hodin</li>
          <li>Práce s pedagogickým sborem-jak předejít syndromu vyhoření</li>
          <li>Práce s diferencovanou třídou a náměty na vzdělávání 8 hod</li>
          <li>Sociální klima třídy a role učitele – 8 hodin</li>
          <li>Specifika práce učitele v heterogenní třídě – 8 hodin</li>
          <li>Třídní učitel a jeho působení v běžné i inkluzivní třídě</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <ObsahInkluzeZS />
  <BlockEx>
    Nabízíme řadu 8 hodinových akreditovaných kurzů. Každý kurz obsahuje část z těchto témat.
    Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
  </BlockEx>
  <BlockEx>
    <div className='alert alert-danger' style={{ fontWeight: 'bold' }}>
      Každý účastník tohoto kurzu se musí účastnit ještě další vzdělávací akce v rozsahu minimálně 16 hodin.
            Viz {popups.bagatelni_podpora}.
          </div>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_sbor_8_hodin}</p>
  </BlockEx>
  <BonusAlert />
</Panel>

var ZSInkluze16: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinka:
        <ul>
          <li>
            Klima třídy a vedení třídnické hodiny v rámci inkluze</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <ObsahInkluzeZS />
  <BlockEx>
    Nabízíme řadu 16 hodinových akreditovaných kurzů. Každý kurz obsahuje část z těchto témat.
    Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
  </BlockEx>
  <BlockEx>
    <div className='alert alert-danger' style={{ fontWeight: 'bold' }}>
      Každý účastník tohoto kurzu se musí účastnit ještě další vzdělávací akce v rozsahu minimálně 8 hodin.
      Viz {popups.bagatelni_podpora}.
    </div>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_16_hodin}&nbsp;varianta <b>e.
              inkluze</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var ZSInkluze24: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">24</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <ObsahInkluzeZS />
  <BlockEx>
    <div className='alert alert-danger' style={{ fontWeight: 'bold' }}>
      Tento kurz použijte v případě, že jeden den školení navíc (který je vyžadován u 32 hodinového kurzu) je pro vaši školu kritický.
      24 hodinová délka kurzu je minimální délka, povolená v podmínkách výzvy, viz {popups.bagatelni_podpora}.
    </div>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      Pro každého učitele je potřeba objednat tyto šablony:
            <ul className='fa-ul'>
        <LiHand><b>1x</b> šablonu {popups.zs_sbor_8_hodin} </LiHand>
        <LiHand><b>1x</b> šablonu {popups.zs_DVPP_16_hodin}&nbsp;varianta <b>e.
                inkluze</b>
        </LiHand>
      </ul>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var ZSInkluze32: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">32</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <ObsahInkluzeZS />
  <BlockEx>
    <div className='alert alert-danger' style={{ fontWeight: 'bold' }}>
      Tento akreditovaný kurz poskytuje optimální variantu pro seznámení se s problematikou společného vzdělávání.
      U tohoto kurzu je (oproti 24 hodinové verzi) více prostoru na:
      <ul className='fa-ul'>
        <LiHand>diskusi s učiteli</LiHand>
        <LiHand>možnost řešení konkrétních problémů, týkajících se dané školy</LiHand>
        <LiHand>praktické procvičování získaných znalostí</LiHand>
        <LiHand>...a další</LiHand>
      </ul>
    </div>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>
        Pro každého učitele je potřeba objednat šablonu  {popups.zs_DVPP_inkluze_32_hodin}
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var ZSCtenarska16: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Ukázky z témat: ">
    <ul className='fa-ul'>
      <LiFile>seznámení s problematikou čtenářské gramotnosti, </LiFile>
      <LiFile>metody a formy práce, rozvíjející čtenářskou gramotnost </LiFile>
      <LiFile>vyvození sedmi základních strategií čtenářské gramotnosti </LiFile>
      <LiFile>správné kladení otázek jak pro učitele, tak pro žáky</LiFile>
      <LiFile>princip třífázového učení E-U-R </LiFile>
      <LiFile>brainstorming, myšlenkové mapy</LiFile>
      <LiFile>práce s textem (metoda I.N.S.E.R.T., skládankové učení, pětilístek, …)</LiFile>
      <LiFile>čtení s porozuměním, rozvoj kritického myšlení </LiFile>
      <LiFile>čtenářská dílna </LiFile>
      <LiFile>práce s různými informačními zdroji – médii, časopisy, internetem, populárně naučnou literaturou,  autentickými materiály a reklamou atd.</LiFile>
      <LiFile>čtenářské strategie (kladení otázek, předvídání, sledování porozumění a vyjasňování, vysuzování, shrnování, vytváření představ, hledání souvislostí, hodnocení – metody a postupy pro rozvíjení jednotlivých dovedností) </LiFile>
      <LiFile>odborný text (fungování mozku, rychlé vyhledávání informací, vlastnosti odborného textu, myšlenková mapa, základní metody VCHD a INSERT, značkování textu, anotace odborného textu) </LiFile>
      <LiFile>pojem kritické myšlení, třífázový model učení</LiFile>
    </ul>
  </BlockEx>
  <BlockEx>
    Nabízíme řadu 16 hodinových akreditovaných kurzů.
    Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_16_hodin}&nbsp;varianta <b>a.
              čtenářská gramotnost</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var ZSCtenarska32: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">32</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Ukázky z témat:  ">
    <ul className='fa-ul'>
      <LiFile>sedm základních strategií čtenářské gramotnosti</LiFile>
      <LiFile>princip třífázového učení E-U-R</LiFile>
      <LiFile>metody a formy práce, rozvíjející čtenářskou gramotnost </LiFile>
      <LiFile>práce s textem - princip a různé způsoby využití</LiFile>
      <LiFile>brainstorming – princip a různé způsoby využití</LiFile>
      <LiFile>myšlenková mapa - princip a různé způsoby využití</LiFile>
      <LiFile>škálování - princip a různé způsoby využití</LiFile>
      <LiFile>práce s textem - princip a různé způsoby využití</LiFile>
      <LiFile>metoda I.N.S.E.R.T.</LiFile>
      <LiFile>skládankové učení, párové čtení, pětilístek</LiFile>
      <LiFile>čtenářská dílna (rozhovory o četbě, třífázový rozhovor)</LiFile>
      <LiFile>vyhledávání a zpracovávání informací</LiFile>
      <LiFile>volné resp. tvůrčí psaní </LiFile>
      <LiFile>tvorba vlastního projektu čtenářské gramotnosti</LiFile>
      <LiFile>a mnoho dalších …</LiFile>
    </ul>
  </BlockEx>
  <BlockEx>
    Nabízíme řadu 32 hodinových akreditovaných kurzů.
    Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_32_hodin}&nbsp;varianta <b>a.
              čtenářská gramotnost</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var ZSMatematicka16: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Ukázky z témat: ">
    <ul className='fa-ul'>
      <LiFile>Charakteristika matematické gramotnosti. Situace a kontexty ( kde člověk aplikuje znalosti a dovednosti, řeší problémy).</LiFile>
      <LiFile>Rozvíjení schopnosti řešit problémy. Správné kladení otázek.  Analýza   informací. Rozbor slovních úloh. Práce s chybou. Matematizování reálných situací. Používání správné terminologie a symboliky. Praktické využití poznatků z matematiky. Budování vztahu k matematice. </LiFile>
      <LiFile>Využití matematického jazyka a symbolů ke konkrétním výstupům  podle věkové kategorie, s využitím množinového pojetí rozborů textů a Vennových diagramů</LiFile>
      <LiFile>Video: Fantastický výlet do makrosvěta a mikrosvěta ve světě čísel a přírodních věd.</LiFile >
      <LiFile>Jak řešit matematickou úlohu – čtyři základní fáze.
        Rozdíl mezi tzv.„trychtýřováním“  a správným kladením otázek učitelem.Postupy pozpátku.
        Příklady.</LiFile >
      <LiFile>Metoda Prof.
        Hejného – Pět zásad výuky a desatero pro učitele a desatero pro rodiče.
        Příklady a názorné video.</LiFile >
      <LiFile>Konkrétní příklady využívání matematické gramotnosti ve výuce v jednotlivých předmětech</LiFile >
      <LiFile>Tvorba pohyblivých objektů 2D a 3D objektů s programem GeoGebra (využití programu jako nástroje podpory matematické gramotnosti formou propojování geometrických a algebraických interpretací v matematice a dalších nejen přírodovědných předmětech)</LiFile >
      <LiFile>Příklady her a prostředí na internetu pro podporu matematické gramotnosti</LiFile >
      <LiFile>Programy a aplikace pro jednoduché vytváření zábavných kvízů</LiFile >
      <LiFile>… a mnoho dalších</LiFile >
    </ul>
  </BlockEx>
  <BlockEx>
    Nabízíme více 16 hodinových akreditovaných kurzů. Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
  </BlockEx >
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_16_hodin}&nbsp;varianta <b>b.
              matematická gramotnost</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var ZSMatematicka32: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">32</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Ukázky z témat:  ">
    <ul className='fa-ul'>
      <LiFile>Charakteristika matematické gramotnosti. Situace a kontexty ( kde člověk aplikuje znalosti a dovednosti, řeší problémy). </LiFile>
      <LiFile> Rozvíjení schopnosti řešit problémy. Správné kladení otázek.  Analýza   informací. Rozbor slovních úloh. Práce s chybou. Matematizování reálných situací. Používání správné terminologie a symboliky. Praktické využití poznatků z matematiky. Budování vztahu k matematice. </LiFile>
      <LiFile> Využití matematického jazyka a symbolů ke konkrétním výstupům  podle věkové kategorie, s využitím množinového pojetí rozborů textů a Vennových diagramů</LiFile>
      <LiFile> Video : Fantastický výlet do makrosvěta a mikrosvěta ve světě čísel a přírodních věd.</LiFile>
      <LiFile> Jak řešit matematickou úlohu – čtyři základní fáze.Rozdíl mezi tzv. „trychtýřováním“  a správným kladením otázek učitelem. Postupy pozpátku. Příklady.</LiFile>
      <LiFile> Metoda Prof. Hejného – Pět zásad výuky a desatero pro učitele a desatero pro rodiče. Příklady a názorné video.</LiFile>
      <LiFile> Využití číselné osy, časové přímky. Trojí pohled na zlomky.</LiFile>
      <LiFile> Využití výroků, složených výroků, jejich pravdivosti i negace (logická stavba vět a komunikace).</LiFile>
      <LiFile> Geometrie v rovině a v prostoru – představivost, odvozování vztahů, množiny určitých vlastností. </LiFile>
      <LiFile> Využití kombinatorických pojmů ve výuce podle věkové úrovně žáků. </LiFile>
      <LiFile> … a mnoho dalších </LiFile>
    </ul>
  </BlockEx>

  <BlockEx header="Moderní technologie jako pomocník při rozvoji matematické gramotnosti">
    <ul className="fa-ul">
      <LiFile>Seznámení s úložišti již hotových materiálů, které je možno rovnou využít ve výuce (bez vlastní tvorby) a různými webovými stránkami s videi, texty i jinými materiály, které je možné vhodně využít nejen k podpoře rozvoje matematické gramotnosti</LiFile>
      <LiFile>Příklady her a prostředí na internetu pro podporu matematické gramotnosti</LiFile>
      <LiFile>Seznámení programy a aplikacemi, které oživí každou prezentaci</LiFile>
      <LiFile>Využití programů a aplikací pro komunikaci mezi žáky, studenty, učiteli a rodiči</LiFile>
      <LiFile>Rozšířená realita jako nástroj motivace i rozvoje nejen matematické gramotnosti</LiFile>
      <LiFile>Programy a aplikace pro jednoduché vytváření zábavných kvízů</LiFile>
      <LiFile>Použití programu Formulator Tarsia pro tvorbu domin, triomin a jiných her vhodných k oživení procvičovaného učiva (1 hodina)</LiFile>
    </ul>
  </BlockEx>

  <BlockEx header="GeoGebra">
    <ul className='fa-ul'>
      <LiFile>Pracovní prostředí programu GeoGebra (panel nástrojů, algebraické okno, tabulka, nákresny, vstupní panel) </LiFile>
      <LiFile>GeoGebra jako nástroj pro tvorbu vlastního didaktického materiálů (např. ukládání vytvořených souborů, export do různých typů souborů včetně exportu do interaktivní webové stránky) </LiFile>
      <LiFile>Aplikace programu do výuky geometrie, algebry a funkcí </LiFile>
      <LiFile>Využití programu jako nástroje rozvoje matematické gramotnosti, propojování geometrických a algebraických interpretací v matematice prostřednictvím programu</LiFile>
      <LiFile>Základní ovládání prostředí 3D (1 hodina)</LiFile>
    </ul>
  </BlockEx>

  <BlockEx header="Hravě k matematické gramotnosti (14 hodin)">
    <ul className='fa-ul'>
      <LiFile>Principy přípravy úloh a žákovských projektů</LiFile>
      <LiFile>Didaktická hra jako zvnějšku řízená motivovaná činnost, při které si žáci procvičují, upevňují vědomosti, dovednosti a návyky a rozvíjejí psychické funkce (paměť, představivost, postřeh atd.) </LiFile>
      <LiFile>Didaktická hra jako nástroj rozvoje spolupráce mezi žáky </LiFile>
      <LiFile>Hry pro rozvoj matematické gramotnosti dostupné na trhu (např. Digit, Klotz, Imagination, Blokus, Penta, Cuts) </LiFile>
      <LiFile>Hry na procvičování (např. skládačky, domino, bingo, matematické omalovánky, matematický diktát) </LiFile>
      <LiFile>Aktivity k oživení učiva geometrie (osová souměrnost – práce v mřížce, se zrcátky; vlastním objevem k Pythagorově větě, vyprávění příběhů, hrajeme si s kruhy aj.) </LiFile>
      <LiFile>projektem k rozvoji prostorové představivosti a finanční gramotnosti v programu Sweet Home 3D </LiFile>
      <LiFile>Kouzelné účty – aktivita pro rozvoj matematické a finanční gramotnosti ze světa Harryho Pottera </LiFile>
    </ul>
  </BlockEx>

  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_32_hodin}&nbsp;varianta <b>b.
              matematická gramotnost</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var ZSMentoring32: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">32</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Ukázky z témat:  ">
    <ul className='fa-ul'>
      <LiFile>Mapování dosavadních zkušeností s danou tématikou.</LiFile>
      <LiFile>Charakteristiky kvality pedagogické práce – kompetenční model.</LiFile>
      <LiFile>Kritéria dobré školy (ČŠI) ve vztahu k nárokům na pedagogické kompetence. </LiFile>
      <LiFile>Kritéria dobré učitelské práce. </LiFile>
      <LiFile>Indikátory dobrého pedagogického výkonu. </LiFile>
      <LiFile>Východiska pro zavádění mentoringu v ČR. </LiFile>
      <LiFile>Profesní organizace a závazek seberozvoji mentorů. </LiFile>
      <LiFile>Etické kodexy při práci mentora (EMCC a ICF). </LiFile>
      <LiFile>Úloha a odpovědnost mentora, kompetence a mentorské dovednosti. </LiFile>
      <LiFile>Vyhodnocení vlastních předpokladů účastníků pro budování role mentora. </LiFile>
      <LiFile>Vztah mentora a mentorovaného. </LiFile>
      <LiFile>Role mentora. </LiFile>
      <LiFile>Principy individuální práce s lidmi – mentorig, koučing, poradenství, terapie. Co je spojuje, co je odlišuje. </LiFile>
      <LiFile>Model GROW, aktivní naslouchání. </LiFile>
      <LiFile>Praktický nácvik aktivního naslouchání a modelu GROW. </LiFile>
      <LiFile>Průběh jednání pro nastavení kontraktu s klientem – co slíbit, co nikoliv. </LiFile>
      <LiFile>Smlouva. </LiFile>
      <LiFile>Úvodní mentorská schůzka – délka, průběh, rizika. </LiFile>
      <LiFile>Evaluace průběhu a výsledků spolupráce. </LiFile>
      <LiFile>Mentorská sebereflexe, plánování osobního růstu. </LiFile>
      <LiFile>Prezentace mentoringu – jeho výhod, limitů. </LiFile>
      <LiFile>Uvědomění si rizik – vědět, jak s nimi pracovat.</LiFile>
    </ul>
    Součástí semináře jsou ukázky vedení rozhovorů s klientem v jednotlivých fázích mentorského procesu.
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_32_hodin}&nbsp;varianta <b>d.
              mentoring</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var ZSMentoring56: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">56</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Ukázky z témat:  ">
    <ul className='fa-ul'>
      <LiFile>Mapování dosavadních zkušeností s danou tématikou. </LiFile>
      <LiFile>Charakteristiky kvality pedagogické práce – kompetenční model. </LiFile>
      <LiFile>Kritéria dobré školy (ČŠI) ve vztahu k nárokům na pedagogické kompetence. </LiFile>
      <LiFile>Kritéria dobré učitelské práce. </LiFile>
      <LiFile>Indikátory dobrého pedagogického výkonu. </LiFile>
      <LiFile>Východiska pro zavádění mentoringu v ČR. </LiFile>
      <LiFile>Profesní organizace a závazek seberozvoji mentorů. </LiFile>
      <LiFile>Etické kodexy při práci mentora (EMCC a ICF). </LiFile>
      <LiFile>Úloha a odpovědnost mentora, kompetence a mentorské dovednosti. </LiFile>
      <LiFile>Vyhodnocení vlastních předpokladů účastníků pro budování role mentora. </LiFile>
      <LiFile>Vztah mentora a mentorovaného. </LiFile>
      <LiFile>Role mentora. </LiFile>
      <LiFile>Principy individuální práce s lidmi mentorig, koučing, poradenství, terapie. Co je spojuje, co je odlišuje. </LiFile>
      <LiFile>Model GROW, aktivní naslouchání. </LiFile>
      <LiFile>Praktický nácvik aktivního naslouchání a modelu GROW. </LiFile>
      <LiFile>Průběh jednání pro nastavení kontraktu s klientem co slíbit, co nikoliv. </LiFile>
      <LiFile>Smlouva. </LiFile>
      <LiFile>Úvodní mentorská schůzka délka, průběh, rizika. </LiFile>
      <LiFile>Evaluace průběhu a výsledků spolupráce. </LiFile>
      <LiFile>Mentorská sebereflexe, plánování osobního růstu. </LiFile>
      <LiFile>Prezentace mentoringu – jeho výhod, limitů. </LiFile>
      <LiFile>Uvědomění si rizik – vědět, jak s nimi pracovat.</LiFile>
      <LiFile>Ve výcvikovém kurzu je věnováno více času cvičení mentorských dovedností a možnostem nechat se vést lektory mentory. </LiFile>
      <LiFile>Účastníkům bude nabídnut mentor – mentorink, reflektování jejich vlastní praxe.</LiFile>
    </ul>
    Součástí semináře jsou základní nácviky vedení rozhovorů s klientem v jednotlivých fázích mentorského procesu, rozbory pozorování, výcvik v poskytování zpětné vazby.
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_56_hodin}&nbsp;varianta <b>d.
              mentoring</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var ZSMentoring80: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">80</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx>
    Seminář je určen budoucím interním mentorům, kteří budou působit v rámci své školy.
    Účastníci získají základní znalosti a dovednosti potřebné k tomu, aby úspěšně zahájili a zvládali svoje mentorské působení.
    Rozsah semináře umožňuje poskytnout budoucím mentorům základní výcvik v jednotlivých mentorských dovednostech.
    Předpokládá se, že v průběhu výcviku již pracuje mentor s několika klienty.
    Supervize jeho mentorských aktivit je součástí tohoto výcvikového semináře.
    Předpokládá se, že po absolvování semináře bude pokračovat praktická činnost mentora s kolegy a další vzdělávání v oblasti mentoringu.
  </BlockEx>
  <BlockEx header="Ukázky z témat:  ">
    <ul className='fa-ul'>
      <LiFile> vymezení mentoringu ve vzdělávání</LiFile>
      <LiFile> etika v práci mentora, etické kodexy ACF a EMCC</LiFile>
      <LiFile> základní principy práce interního mentora</LiFile>
      <LiFile> základy práce s klientem</LiFile>
      <LiFile> hlavní kompetence mentora</LiFile>
      <LiFile> mentorské portfolio – jeho vedení</LiFile>
      <LiFile> stanovování potřeb klienta plánování mentorského procesu</LiFile>
      <LiFile> osobnostní typy z hlediska mentora a z hlediska klienta</LiFile>
      <LiFile> kontraktování</LiFile>
      <LiFile> stanovování cílů mentoringu</LiFile>
      <LiFile> škola jako systém – nastavování mentorské podpory jako součást systému</LiFile>
      <LiFile> práce s kompetenčním modelem pedagoga</LiFile>
      <LiFile> stanovení kritérií kvality v práci pedagoga</LiFile>
      <LiFile> poskytování zpětné vazy klientovi</LiFile>
      <LiFile> techniky pozorování</LiFile>
      <LiFile> techniky vedení rozhovorů</LiFile>
      <LiFile>další techniky v práci mentora</LiFile>
      <LiFile>hranice mentora</LiFile>
      <LiFile>poskytování zpětné vazy klientovi</LiFile>
      <LiFile>problematické situace v mentoringu</LiFile>
      <LiFile>uzavírání a vyhodnocování mentoringu</LiFile>
      <LiFile>seberozvoj mentora a jeho další vzdělávání</LiFile>
      <LiFile>základní informační zdroje</LiFile>
      <LiFile>profesní organizace mentorů a koučů</LiFile>
    </ul>
    Součástí semináře jsou nácviky vedení rozhovorů s klientem v jednotlivých fázích mentorského procesu, rozbory pozorování, výcvik v poskytování zpětné vazby.
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_80_hodin}&nbsp;varianta <b>d.
              mentoring</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var MSInkluze816: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <ObsahInkluzeMS />
  <BlockEx>
    Nabízíme více 16 hodinových akreditovaných kurzů.
          Každý kurz obsahuje část témat ze seznamu <i>Obsah kurzů</i> na této stránce.
          Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
        </BlockEx>
  <BlockEx>
    <div className='alert alert-danger' style={{ fontWeight: 'bold' }}>
      Každý účastník tohoto kurzu se musí účastnit ještě další vzdělávací akce v rozsahu minimálně 8 hodin.
            Viz {popups.bagatelni_podpora}.
          </div>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu {popups.ms_DVPP_16_hodin}&nbsp;varianta <b>e.
              inkluze</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var MSRozvoj16: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
          <LiFile>Vybrané aspekty emoční a sociální inteligence pedagoga</LiFile>
          <LiFile>Osobnostní a sociální rozvoj učitele</LiFile>
        </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <p>Pro každého učitele je potřeba objednat šablonu {popups.ms_osobnostni_rozvoj_16_hodin}</p>
  </BlockEx>
  <BonusAlert />
</Panel>


var MSCtenarska: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Ukázka z témat:  ">
    <ul className='fa-ul'>
      <LiFile>předškolní období a vnitřní motivace ke čtení, budování si vztahu ke knihám a porozumění čteného textu</LiFile>
      <LiFile>předpoklady pro čtení – genetické předpoklady, percepčně-kognitivní zralost, zralost nervové soustavy, podnětné prostředí </LiFile>
      <LiFile>činnosti a hry pro rozvoj zrakového a sluchového vnímání</LiFile>
      <LiFile>rozvoj představivosti a fantazie z hlediska důležitosti pro rozvoj předčtenářské gramotnosti</LiFile>
      <LiFile>rozvoj myšlení – vývoj a úrovně myšlení – předřečové myšlení, předpojmové myšlení, pojmové myšlení, analýza, syntéza, srovnávání, zobecňování</LiFile>
      <LiFile>vývoj a rozvoj řeči a komunikačních schopností, slovní zásoba, znalost významu slov</LiFile>
      <LiFile>obrázkové osnovy, obrázkové čtení</LiFile>
    </ul>
  </BlockEx>
  <BlockEx>
    <p>
      Nabízíme několik různých 16 hodinových akreditovaných kurzů.
      Kurzy obsahují část z témat výše + spoustu dalších.
      Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
    </p>
  </BlockEx>

  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu {popups.ms_DVPP_16_hodin}&nbsp;varianta <b>a.
              čtenářská pregramotnost</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var MSMatematicka: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Ukázka z témat:  ">
    <ul className='fa-ul'>
      <LiFile>cíle předmatematické výchovy, příprava na matematiku</LiFile>
      <LiFile>příprava dítěte na zpracování informací v zadání slovní úlohy, rozvoj řeči, komunikace,  paměti,  představ, prostorového vnímání</LiFile>
      <LiFile>aktivity spojené s porovnáváním (porovnávání hmatem, sluchem, zrakem)</LiFile>
      <LiFile>aktivity spojené s přiřazováním, hry, orientace v prostoru</LiFile>
      <LiFile>typy třídění – podle druhu, barvy, velikosti, tvaru</LiFile>
      <LiFile>řazení a uspořádání, vzájemné postavení objektů</LiFile>
      <LiFile>počet – určování počtu, počítání po jedné, určování počtu objektů na první pohled</LiFile>
      <LiFile>nezávislost počtu objektů na velikosti, barvě, vzájemného postavení, vzdálenosti</LiFile>
      <LiFile>o skřítku Početníčkovi – rozvoj řeči, počítání předmětů, jednoduché slovní úlohy</LiFile>
      <LiFile>matematika v přírodě, využití školní zahrady</LiFile>
    </ul>
  </BlockEx>
  <BlockEx>
    <p>
      Nabízíme několik různých 16 hodinových akreditovaných kurzů.
      Kurzy obsahují část z témat výše + spoustu dalších.
      Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu {popups.ms_DVPP_16_hodin}&nbsp;varianta <b>b.
              matematická pregramotnost</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var SSRozvoj8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Prevence k zátěžovým situacím ve škole </li>
          <li>Jak zvládat stresové situace a nedospět k vyhoření</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Vybrané aspekty emoční a sociální inteligence pedagoga</LiFile>
      <LiFile>Osobnostně sociální rozvoj učitele v sebepoznání</LiFile>
      <LiFile>Osobnostně sociální rozvoj učitele v komunikaci</LiFile>
      <LiFile>Osobnostní a sociální rozvoj učitele ve zvládání konfliktů</LiFile>
      <LiFile>Rozvoj osobnosti pedagoga a zásady efektivní komunikace (i pro vychovatele v DM a internátech)</LiFile>
      <LiFile>Zásady asertivní a efektivní komunikace – 8 hodin (i pro vychovatele v DM a internátech)</LiFile>
      <LiFile>Nauč se mluvit sám se sebou, lépe porozumíš svým žákům (i pro vychovatele v DM a internátech)</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel>

var SSRozvoj1624: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label> <Label bsStyle="warning">24</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
          <LiFile>Vybrané aspekty emoční a sociální inteligence pedagoga_16</LiFile>
          <LiFile>Osobnostní a sociální rozvoj učitele (16 hod)</LiFile>
          <LiFile>Zásady asertivní a efektivní komunikace – 16 hodin</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel>

var SSICT1624: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label> <Label bsStyle="warning">24</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Efektivní využití MS Office pro pedagogy – 16 hodin</LiFile>
      <LiFile>Efektivní využití MS Office a výukových technologií – 24 hodin</LiFile>
      <LiFile>Začlenění ICT technologií do výuky a využití internetu - 16 hodin</LiFile>
      <LiFile>Začlenění ICT technologií a dotykových zařízení do výuky - 24 hodin</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel>

var SSICT8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Distanční výuka – formy a metody práce s žáky on-line</li>
          <li>Jak na distanční výuku?</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
          <LiFile>Využití ICT ve výuce – praktická inspirace – 8 hodin</LiFile>
          <LiFile>Efektivní využití MS Office pro pedagogy – 8 hodin</LiFile>
          <LiFile>Různé metody pro začlenění ICT technologií do výuky </LiFile>
          <LiFile>Inspirace pro využití interaktivních tabulí při výuce </LiFile>
          <LiFile>Funkce a nástrahy internetu, kyberšikana, sociální sítě </LiFile>
          <LiFile>Práce s dotykovými zařízeními ve výuce </LiFile>
        </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel>


var SSInkluze8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Formativní hodnocení a role učitele</li>
          <li>Jak pracovat se žákem s odlišnými kulturními podmínkami-SŠ 8</li>
          <li>Klima třídy se žáky s odlišným mateřským jazykem</li>
          <li>Podpora žáků SŠ v rámci inkluze (i pro vychovatele v DM a internátech)</li>
          <li>Klima třídy a vedení třídnické hodiny v rámci inkluze</li>
          <li>Práce se žákem SŠ s problémovým chováním (i pro vychovatele v DM a internátech)</li>
          <li>Práce s pedagogickým sborem-jak předejít syndromu vyhoření</li>
          <li>Žák nadaný a mimořádně nadaný, možnosti jeho rozvoje na SŠ</li>
          <li>Práce s diferencovanou třídou a náměty na vzdělávání 8 hod</li>
          <li>Sociální klima třídy a role učitele – 8 hodin</li>
          <li>Specifika práce učitele v heterogenní třídě – 8 hodin</li>
          <li>Třídní učitel a jeho působení v běžné i inkluzivní třídě</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <ObsahInkluzeSS />
  <BlockEx>
    Nabízíme řadu 8 hodinových akreditovaných kurzů. Každý kurz obsahuje část z těchto témat.
    Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel>

var SSInkluze16: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinka: Klima třídy a vedení třídnické hodiny v rámci inkluze
      </p>
    </div>
  </BlockEx>
  <ObsahInkluzeSS />
  <BlockEx>
    Nabízíme řadu 16 hodinových akreditovaných kurzů. Každý kurz obsahuje část z těchto témat.
    Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel>;

var SSMentoring80: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">80</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx>
    Seminář je určen budoucím interním mentorům, kteří budou působit v rámci své školy.
    Účastníci získají základní znalosti a dovednosti potřebné k tomu, aby úspěšně zahájili a zvládali svoje mentorské působení.
    Rozsah semináře umožňuje poskytnout budoucím mentorům základní výcvik v jednotlivých mentorských dovednostech.
    Předpokládá se, že v průběhu výcviku již pracuje mentor s několika klienty.
    Supervize jeho mentorských aktivit je součástí tohoto výcvikového semináře.
    Předpokládá se, že po absolvování semináře bude pokračovat praktická činnost mentora s kolegy a další vzdělávání v oblasti mentoringu.
  </BlockEx>
  <BlockEx header="Ukázky z témat:  ">
    <ul className='fa-ul'>
      <LiFile> vymezení mentoringu ve vzdělávání</LiFile>
      <LiFile> etika v práci mentora, etické kodexy ACF a EMCC</LiFile>
      <LiFile> základní principy práce interního mentora</LiFile>
      <LiFile> základy práce s klientem</LiFile>
      <LiFile> hlavní kompetence mentora</LiFile>
      <LiFile> mentorské portfolio – jeho vedení</LiFile>
      <LiFile> stanovování potřeb klienta plánování mentorského procesu</LiFile>
      <LiFile> osobnostní typy z hlediska mentora a z hlediska klienta</LiFile>
      <LiFile> kontraktování</LiFile>
      <LiFile> stanovování cílů mentoringu</LiFile>
      <LiFile> škola jako systém – nastavování mentorské podpory jako součást systému</LiFile>
      <LiFile> práce s kompetenčním modelem pedagoga</LiFile>
      <LiFile> stanovení kritérií kvality v práci pedagoga</LiFile>
      <LiFile> poskytování zpětné vazy klientovi</LiFile>
      <LiFile> techniky pozorování</LiFile>
      <LiFile> techniky vedení rozhovorů</LiFile>
      <LiFile>další techniky v práci mentora</LiFile>
      <LiFile>hranice mentora</LiFile>
      <LiFile>poskytování zpětné vazy klientovi</LiFile>
      <LiFile>problematické situace v mentoringu</LiFile>
      <LiFile>uzavírání a vyhodnocování mentoringu</LiFile>
      <LiFile>seberozvoj mentora a jeho další vzdělávání</LiFile>
      <LiFile>základní informační zdroje</LiFile>
      <LiFile>profesní organizace mentorů a koučů</LiFile>
    </ul>
    Součástí semináře jsou nácviky vedení rozhovorů s klientem v jednotlivých fázích mentorského procesu, rozbory pozorování, výcvik v poskytování zpětné vazby.
  </BlockEx>
  <BonusAlert />
</Panel>;

var SSCtenarska8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Čtenářská gramotnost napříč všemi předměty SŠ a VOŠ – 8</LiFile>
      <LiFile>Čtenářství napříč výukou SŠ – 8 hodin</LiFile>
    </ul>
  </BlockEx>

  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel>;

var SSCtenarska16: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label> <Label bsStyle="warning">24</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>

  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Čtenářská gramotnost napříč všemi předměty SŠ a VOŠ – 16</LiFile>
    </ul>
  </BlockEx>

  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel >;

var SSMatematicka8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Jak na distanční výuku matematiky?</li>
        </ul>
      </p>
    </div>
  </BlockEx>

  <BlockEx header="GeoGebra jako nástroj rozvoje matematické gramotnosti na SŠ">
    <ul className='fa-ul'>
      <LiFile> 	Pracovní prostředí programu GeoGebra (panel nástrojů, algebraické okno, tabulka, nákresny, vstupní panel) </LiFile>
      <LiFile> 	GeoGebra jako nástroj pro tvorbu vlastního didaktického materiálů </LiFile>
      <LiFile> 	Aplikace programu do výuky geometrie, algebry a matematické analýzy </LiFile>
      <LiFile> 	Využití programu jako nástroje rozvoje matematické gramotnosti, propojování geometrických a algebraických interpretací v matematice prostřednictvím programu </LiFile>
      <LiFile> 	Základní ovládání prostředí 3D </LiFile>
    </ul>
  </BlockEx>

  <BlockEx>
    <p>
      Nabízíme více 8 hodinových akreditovaných kurzů. Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
    </p>
  </BlockEx>

  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel >;

var SSMatematicka16: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label> <Label bsStyle="warning">24</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>

  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Moderní technologie ve výuce (nejen) matematiky na SŠ a VOŠ</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel >;

var SSKariera8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Role pedagoga v karierovém poradenství – 8 hodin</LiFile>
    </ul>
  </BlockEx>

  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel>;

var SSVychova8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>

  <BlockEx header="Nabízíme následující kurzy:">
      <ul className='fa-ul'>
        <LiFile>Rozvoj podnikavosti a zásady soukromého podnikání – 8 hodin</LiFile>
        <LiFile>Podnikání, finanční gramotnost a manažerské dovednosti – 8 hodin</LiFile>
      </ul>
    </BlockEx>

  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel>;


interface IKuryFormFormStatus {
  email: string;
  phone: string;
  teachers: string;
  //ICO: string; //e.g. 49625918
  //RED_IZO: string; //e.g. 600000206
  poznamka: string; //e.g. 600000206
  //course: string;
}

class KurzyForm extends React.Component<{}, IKuryFormFormStatus> {
  constructor(p, c) {
    super(p, c);
    this.state = { email: '', phone: '', teachers: '', poznamka: '' };//ICO: '', RED_IZO: '',  , course: undefined };
  }
  getValidationState(): any {
    return (this.state.email || this.state.phone) && !Number.isNaN(parseInt(this.state.teachers)) /*&& this.state.course !== undefined && (!Number.isNaN(parseInt(this.state.ICO)) || !Number.isNaN(parseInt(this.state.RED_IZO))*/ ? 'success' : 'error';
  }
  render(): JSX.Element {
    var th = this;
    return <div>
      <Panel collapsible style={{ marginTop: '15px' }} bsStyle='info' header={<div className='course-header'>
        <h2 style={{ marginTop: '0' }}><i className='fa fa-bars'></i> <span style={headerCss}>Nezávazný poptávkový formulář</span></h2>
      </div>}>
        <Row>
          <Col md={6}>
            <FormGroup controlId="email" validationState={this.getValidationState()} >

              <ControlLabel>Vyplňte buďto váš email...</ControlLabel>
              <FormControl value={this.state.email} placeholder="Napište váš email" onChange={(e: any) => { this.state.email = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr />
            {/*
            <FormGroup controlId="teachers" validationState={this.getValidationState() } >
              <ControlLabel>Vyplňte buďto vaše IČO...</ControlLabel>
              <FormControl value={this.state.ICO} placeholder="Napište IČO" onChange={(e: any) => { this.state.ICO = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr/>*/}
          </Col>
          <Col md={6}>
            <FormGroup controlId="tel" validationState={this.getValidationState()} >
              <ControlLabel>...nebo vaše telefonní číslo</ControlLabel>
              <FormControl value={this.state.phone} placeholder="Napište vaše telefonní číslo" onChange={(e: any) => { this.state.phone = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr />
            {/*
            <FormGroup controlId="teachers" validationState={this.getValidationState() } >
              <ControlLabel>...nebo vaše RED-IZO</ControlLabel>
              <FormControl value={this.state.RED_IZO} placeholder="Napište RED-IZO" onChange={(e: any) => { this.state.RED_IZO = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr/>*/}
            {/*<FormGroup controlId="kurz" validationState={this.getValidationState() }>
              <ControlLabel>Typ kurzu: </ControlLabel><br/>
              <Radio inline name="kurz" value="32" checked={this.state.course == '32'} onChange={() => { this.state.course = '32'; this.forceUpdate(); } }>
                <b>Kurz 32 hodin</b>
              </Radio>
              <Radio inline name="kurz" value="24" checked={this.state.course == '24'} onChange={() => { this.state.course = '24'; this.forceUpdate(); } }>
                <b>Kurz 24 hodin</b>
              </Radio>
              <Radio inline name="kurz" value="8" checked={this.state.course == '8'} onChange={() => { this.state.course = '8'; this.forceUpdate(); } }>
                Kurz 8 hodin
              </Radio>
              <Radio inline name="kurz" value="24" checked={this.state.course == '16'} onChange={() => { this.state.course = '16'; this.forceUpdate(); } }>
                Kurz 16 hodin
              </Radio>
            </FormGroup>*/}
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <FormGroup controlId="teachers" validationState={this.getValidationState()} >
              <ControlLabel>Počet učitelů v kurzu: </ControlLabel>
              <FormControl value={this.state.teachers} placeholder="Napište počet učitelů" onChange={(e: any) => { this.state.teachers = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
          </Col>
          <Col md={9}>
            <FormGroup controlId="teachers" validationState={this.getValidationState()} >
              <ControlLabel>Upřesnění poptávky nebo dotaz</ControlLabel>
              <FormControl componentClass="textarea" rows={3} value={this.state.poznamka} placeholder="Napište upřesnění poptávky nebo dotaz" onChange={(e: any) => { this.state.poznamka = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
          </Col>
        </Row>
        <hr />
        <Button bsStyle='success' onClick={() => services.emailer.sendEMail({ from: '"DVPP poptávka"<poptavka@langmaster.cz>', to: 'projekt@langmaster.cz', subject: 'DVPP poptávka', body: React.createElement<IKuryFormFormStatus>(emailTemplate, this.state) }, () => alert('Děkujeme za zaslání poptávky'))}>Poslat poptávku</Button>
      </Panel>
    </div>;
  }
}


var KurzyAlert: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div className='alert alert-warning' style={{ fontSize: '18px' }}>
  <p style={{ marginTop: '0' }}><i className='fa fa-lightbulb-o'></i> Tip: &nbsp;</p>
  <p>
    Pro více informací klikněte na název kurzu dole na stránce.
  </p>
  <p>
    Pro získání podrobnějších informací o našich akreditovaných kurzech vyplňte a odešlete nezávazný poptávkový formulář.
  </p>
</div>;

var BonusAlert: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div className='alert alert-warning' style={{ fontSize: '18px' }}>
  <p style={{ marginTop: '0' }}><i className='fa fa-lightbulb-o'></i> Bonus - jazykové kurzy zdarma:</p>
  <p>
    Pro každého učitele je připraven bonus v podobě interaktivního jazykového kurzu zdarma.
    V případě zájmu Vám rádi poskytneme podrobnější informace.
  </p>
</div>;

var KurzySSAlert: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div className='alert alert-warning' style={{ fontSize: '18px' }}>
  <p style={{ marginTop: '0' }}><i className='fa fa-lightbulb-o'></i> Tip: &nbsp;</p>
  <p>
    Pro více informací klikněte na název kurzu dole na stránce.
  </p>
  <p>
    Pro získání podrobnějších informací o našich akreditovaných kurzech vyplňte a odešlete nezávazný poptávkový formulář.
  </p>
</div>;

var KurzyIIAlert: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div className='alert alert-warning' style={{ fontSize: '18px' }}>
  <p style={{ marginTop: '0' }}><i className='fa fa-lightbulb-o'></i> Tip: &nbsp;</p>
  <p>
    Pro více informací klikněte na název kurzu dole na stránce.
  </p>
  <p>
    Pro získání podrobnějších informací o našich akreditovaných kurzech vyplňte a odešlete nezávazný poptávkový formulář.
  </p>
</div>;

var BonusAlert: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div className='alert alert-warning' style={{ fontSize: '18px' }}>
  <p style={{ marginTop: '0' }}><i className='fa fa-lightbulb-o'></i> Bonus - jazykové kurzy zdarma:</p>
  <p>
    Pro každého učitele je připraven bonus v podobě interaktivního jazykového kurzu zdarma.
    V případě zájmu Vám rádi poskytneme podrobnější informace.
  </p>
</div>;

var KurzyList: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <h2 className='text-right'>ZŠ a MŠ akreditované kurzy DVPP MŠMT - Výzva 02_16_022 / 023</h2>
  <Row>
    <Col md={4}>
      <h4>ZŠ Inkluze/společné vzdělávání</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.ZSInkluze8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.ZSInkluze16)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.ZSInkluze32)}</LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <h4>ZŠ Ostatní</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.ZSCtenarska16)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.ZSCtenarska32)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.ZSMatematicka16)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.ZSMatematicka32)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.ZSMentoring32)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.ZSMentoring56)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.ZSMentoring80)}</LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <h4>MŠ Kurzy</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.MSInkluze816)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.MSCtenarska)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.MSMatematicka)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzy.MSRozvoj16)}</LiFile>
      </ul>
    </Col>
  </Row>
</div>;

var KurzySSList: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <h2 className='text-right'>SŠ a VOŠ akreditované kurzy DVPP MŠMT - Výzvy: 02_16_035/042, 02_18_065/066</h2>
  <Row>
    <Col md={4}>
      <h4>SŠ a VOŠ Inkluze/společné vzdělávání</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSInkluze8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSInkluze16)}</LiFile>
      </ul>
      <h4>SŠ a VOŠ Mentoring</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSMentoring80)}</LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <h4>SŠ a VOŠ Osobnostně sociální rozvoj</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSRozvoj8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSRozvoj1624)}</LiFile>
      </ul>
      <h4>SŠ a VOŠ ICT</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSICT8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSICT1624)}</LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <h4>SŠ a VOŠ Ostatní</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSCtenarska8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSCtenarska16)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSMatematicka8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSMatematicka16)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSKariera8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSVychova8)}</LiFile>
      </ul>
    </Col>
  </Row>
</div>;

var KurzyIIList: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <h2 className='text-right'>ZŠ, MŠ, ZUŠ, ŠD akreditované kurzy DVPP MŠMT - Výzva 02_18_063/ 064</h2>
  <Row>
    <Col md={4}>
      <h4>ZŠ, ŠD, ŠK – Kurzy</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIZSCtenarska8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIZSMatematicka8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIZSRozvoj81624)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIZSICT81624)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIZSKariera8)}</LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <h4>ZŠ, ŠD, ŠK – Inkluze</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIZSInkluze8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIZSInkluze1632)}</LiFile>
      </ul>
      <h4>ZUŠ – Kurzy</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIZUSInkluze8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIZUSRozvoj8)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIZUSICT8)}</LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <h4>MŠ Kurzy</h4>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIMSInkluze816)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIMSCtenarska816)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIMSMatematicka816)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIMSRozvoj816)}</LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.IIMSIct8)}</LiFile>
      </ul>
    </Col>
  </Row>
</div>;

var ObsahInkluzeMS: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <BlockEx header="Ukázky z témat:">
  <Row>
    <Col md={6}>
      <ul className='fa-ul'>
        <LiFile>Základní právní předpisy, legislativní změny</LiFile>
        <LiFile>Dítě se speciálními vzdělávacími potřebami </LiFile>
        <LiFile>Struktura podpůrných opatření a jejich členění do pěti stupňů</LiFile>
        <LiFile>Podpůrná opatření prvního stupně </LiFile>
        <LiFile>Podpůrná opatření 2. - 5. stupně </LiFile>
        <LiFile>Struktura a obsah Plánu pedagogické podpory</LiFile>
        <LiFile>Zpracování ukázkového Plánu pedagogické podpory</LiFile>
        <LiFile>Výukové metody a jejich role při motivaci k učení</LiFile>
        <LiFile>Individuální vzdělávací plán a pedagogická diagnostika</LiFile>
      </ul>
    </Col>
    <Col md={6}>
      <ul className='fa-ul'>

        <LiFile>Hodnocení dětí ve společném vzdělávání</LiFile>
        <LiFile>Spolupráce pedagoga s asistentem pedagoga</LiFile>
        <LiFile>Komunikace s rodiči </LiFile>
        <LiFile>Spolupráce s poradenskými zařízeními </LiFile>
        <LiFile>Plán pedagogické podpory a Individuální vzdělávací plán</LiFile>
        <LiFile>Efektivní hodnocení dětí a specifičnost hodnocení dětí se SVP</LiFile>
        <LiFile>Pedagogická diagnostika dítěte na základní škole</LiFile>
        <LiFile>Vzdělávání dětí nadaných a mimořádně nadaných</LiFile>
      </ul>
    </Col>
  </Row>
</BlockEx>;

var ObsahInkluzeZS: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <BlockEx header="Ukázky z dalších témat:">
  <Row>
    <Col md={6}>
      <ul className='fa-ul'>
        <LiFile>Základní právní předpisy, legislativní změny</LiFile>
        <LiFile>Žák se speciálními vzdělávacími potřebami </LiFile>
        <LiFile>Struktura podpůrných opatření a jejich členění do pěti stupňů</LiFile>
        <LiFile>Podpůrná opatření prvního stupně </LiFile>
        <LiFile>Podpůrná opatření 2. - 5. stupně </LiFile>
        <LiFile>Struktura a obsah Plánu pedagogické podpory</LiFile>
        <LiFile>Zpracování ukázkového Plánu pedagogické podpory</LiFile>
        <LiFile>Výukové metody a jejich role při motivaci k učení</LiFile>
        <LiFile>Individuální vzdělávací plán a pedagogická diagnostika</LiFile>
      </ul>
    </Col>
    <Col md={6}>
      <ul className='fa-ul'>

        <LiFile>Hodnocení žáků ve společném vzdělávání</LiFile>
        <LiFile>Spolupráce pedagoga s asistentem pedagoga</LiFile>
        <LiFile>Komunikace s rodiči </LiFile>
        <LiFile>Spolupráce s poradenskými zařízeními </LiFile>
        <LiFile>Plán pedagogické podpory a Individuální vzdělávací plán</LiFile>
        <LiFile>Efektivní hodnocení žáků a specifičnost hodnocení žáků se SVP</LiFile>
        <LiFile>Pedagogická diagnostika žáka na základní škole</LiFile>
        <LiFile>Vzdělávání žáků nadaných a mimořádně nadaných</LiFile>
      </ul>
    </Col>
  </Row>
</BlockEx>;

var ObsahInkluzeZUS7: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <BlockEx header="Kromě výše uvedených novinek nabízíme pro ZŠ ještě dalších 7 kurzů inkluze v délce 8 hodin. Kurzy jsou seskládané z následujících témat:">
  <Row>
    <Col md={6}>
      <ul className='fa-ul'>
        <LiFile>Základní právní předpisy, legislativní změny</LiFile>
        <LiFile>Žák se speciálními vzdělávacími potřebami </LiFile>
        <LiFile>Struktura podpůrných opatření a jejich členění do pěti stupňů</LiFile>
        <LiFile>Podpůrná opatření prvního stupně </LiFile>
        <LiFile>Podpůrná opatření 2. - 5. stupně </LiFile>
        <LiFile>Struktura a obsah Plánu pedagogické podpory</LiFile>
        <LiFile>Zpracování ukázkového Plánu pedagogické podpory</LiFile>
        <LiFile>Výukové metody a jejich role při motivaci k učení</LiFile>
        <LiFile>Individuální vzdělávací plán a pedagogická diagnostika</LiFile>
      </ul>
    </Col>
    <Col md={6}>
      <ul className='fa-ul'>

        <LiFile>Hodnocení žáků ve společném vzdělávání</LiFile>
        <LiFile>Spolupráce pedagoga s asistentem pedagoga</LiFile>
        <LiFile>Komunikace s rodiči </LiFile>
        <LiFile>Spolupráce s poradenskými zařízeními </LiFile>
        <LiFile>Plán pedagogické podpory a Individuální vzdělávací plán</LiFile>
        <LiFile>Efektivní hodnocení žáků a specifičnost hodnocení žáků se SVP</LiFile>
        <LiFile>Pedagogická diagnostika žáka na základní škole</LiFile>
        <LiFile>Vzdělávání žáků nadaných a mimořádně nadaných</LiFile>
      </ul>
    </Col>
  </Row>
</BlockEx>;

var ObsahInkluzeZUS8: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <BlockEx header="Kromě výše uvedených novinek nabízíme ještě dalších 8 kurzů inkluze v délce 16 hodin a 2 kurzy inkluze pro ZŠ v délce 32 hodin. Kurzy jsou seskládané z následujících témat:">
  <Row>
    <Col md={6}>
      <ul className='fa-ul'>
        <LiFile>Základní právní předpisy, legislativní změny</LiFile>
        <LiFile>Žák se speciálními vzdělávacími potřebami </LiFile>
        <LiFile>Struktura podpůrných opatření a jejich členění do pěti stupňů</LiFile>
        <LiFile>Podpůrná opatření prvního stupně </LiFile>
        <LiFile>Podpůrná opatření 2. - 5. stupně </LiFile>
        <LiFile>Struktura a obsah Plánu pedagogické podpory</LiFile>
        <LiFile>Zpracování ukázkového Plánu pedagogické podpory</LiFile>
        <LiFile>Výukové metody a jejich role při motivaci k učení</LiFile>
        <LiFile>Individuální vzdělávací plán a pedagogická diagnostika</LiFile>
      </ul>
    </Col>
    <Col md={6}>
      <ul className='fa-ul'>

        <LiFile>Hodnocení žáků ve společném vzdělávání</LiFile>
        <LiFile>Spolupráce pedagoga s asistentem pedagoga</LiFile>
        <LiFile>Komunikace s rodiči </LiFile>
        <LiFile>Spolupráce s poradenskými zařízeními </LiFile>
        <LiFile>Plán pedagogické podpory a Individuální vzdělávací plán</LiFile>
        <LiFile>Efektivní hodnocení žáků a specifičnost hodnocení žáků se SVP</LiFile>
        <LiFile>Pedagogická diagnostika žáka na základní škole</LiFile>
        <LiFile>Vzdělávání žáků nadaných a mimořádně nadaných</LiFile>
      </ul>
    </Col>
  </Row>
</BlockEx>;

var ObsahInkluzeSS: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <BlockEx header="Ukázky z dalších témat:">
  <Row>
    <Col md={6}>
      <ul className='fa-ul'>
        <LiFile>Základní právní předpisy, legislativní změny</LiFile>
        <LiFile>Student se speciálními vzdělávacími potřebami </LiFile>
        <LiFile>Struktura podpůrných opatření a jejich členění do pěti stupňů</LiFile>
        <LiFile>Podpůrná opatření prvního stupně </LiFile>
        <LiFile>Podpůrná opatření 2. - 5. stupně </LiFile>
        <LiFile>Struktura a obsah Plánu pedagogické podpory</LiFile>
        <LiFile>Zpracování ukázkového Plánu pedagogické podpory</LiFile>
        <LiFile>Výukové metody a jejich role při motivaci k učení</LiFile>
        <LiFile>Individuální vzdělávací plán a pedagogická diagnostika</LiFile>
      </ul>
    </Col>
    <Col md={6}>
      <ul className='fa-ul'>

        <LiFile>Hodnocení studentů ve společném vzdělávání</LiFile>
        <LiFile>Spolupráce pedagoga s asistentem pedagoga</LiFile>
        <LiFile>Komunikace s rodiči </LiFile>
        <LiFile>Spolupráce s poradenskými zařízeními </LiFile>
        <LiFile>Plán pedagogické podpory a Individuální vzdělávací plán</LiFile>
        <LiFile>Efektivní hodnocení studentů a specifičnost hodnocení studenta se SVP</LiFile>
        <LiFile>Pedagogická diagnostika studenta na základní škole</LiFile>
        <LiFile>Vzdělávání studentů nadaných a mimořádně nadaných</LiFile>
      </ul>
    </Col>
  </Row>
</BlockEx>;

var IIZSCtenarska8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy (jen pro ZŠ):">
    <ul className='fa-ul'>
      <LiFile>Čtenářství-průvodce každodenním životem, cesta je vzdělání_8 (jen pro ZŠ)</LiFile>
      <LiFile>Čtenářství a čtenářská gramotnost v současné škole (jen pro ZŠ)</LiFile>
      <LiFile>Inspirace pro rozvíjení čtenářské gramotnosti v  ČJL na ZŠ (jen pro ZŠ)</LiFile>
      <LiFile>Čtenářská a informační gramotnost na ZŠ – 8 hodin (jen pro ZŠ)</LiFile>
      <LiFile>Rozvoj čtenářské gramotnosti u žáků ZŠ – 8 hodin (pro ZŠ, ŠD)</LiFile>
    </ul>
  </BlockEx>

  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu 2.II/6 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 8 hodin nebo 2.V/4 Vzdělávání pedagogických pracovníků ŠD/ŠK – DVPP v rozsahu 8 hodin varianta a.čtenářská gramotnost
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var IIZSMatematicka8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Jak na distanční výuku matematiky?</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>GeoGebra jako nástroj rozvoje matematické gramotnosti na ZŠ (jen pro ZŠ)</LiFile>
      <LiFile>Deskové a karetní hry pro rozvoj matematické gramotnosti (pro ZŠ, ŠD, ŠK)</LiFile>
      <LiFile>Moderní technologie při rozvoji matematické gramotnosti na ZŠ (pro ZŠ, ŠD, ŠK, SVČ)</LiFile>
      <LiFile>Rozvoj matematické gramotnosti u žáků ZŠ – 8 hodin (pro ZŠ, ŠD)</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat šablonu 2.II/6 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 8 hodin nebo 2.V/4 Vzdělávání pedagogických pracovníků ŠD/ŠK – DVPP v rozsahu 8 hodin varianta b. matematická gramotnost
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var IIZSKariera8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Role pedagoga v karierovém poradenství – 8 hodin</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <p>Pro každého učitele je potřeba objednat šablonu 2.II/6 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 8 hodin varianta f.
      kariérové vzdělávání</p>
  </BlockEx>
  <BonusAlert />
</Panel>

var IIZSRozvoj81624: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>&nbsp;<Label bsStyle="warning">16</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Prevence k zátěžovým situacím ve škole </li>
          <li>Jak zvládat stresové situace a nedospět k vyhoření</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Osobnostně sociální rozvoj v oblasti komunikace (8 hodin, ZŠ, ŠD, ŠK)</LiFile>
      <LiFile>Aspekty emoční a sociální inteligence pedagoga (8 hodin, ZŠ, ŠD, ŠK)</LiFile>
      <LiFile>Rozvoj osobnosti pedagoga v oblasti sebepoznání (8 hodin, ZŠ, ŠD, ŠK, MŠ)</LiFile>
      <LiFile>Rozvoj osobnosti pedagoga ve zvládání konfliktů (8 hodin, ZŠ, ŠD, ŠK, MŠ)</LiFile>
      <LiFile>Rozvoj osobnosti pedagoga v oblasti komunikace (8 hodin, ZŠ, ŠD, ŠK, MŠ)</LiFile>
      <LiFile>Zásady asertivní a efektivní komunikace pro MŠ, ZŠ, ZUŠ (8 hodin, ZŠ, ŠD, ŠK, MŠ)</LiFile>
      <LiFile>Nauč se mluvit sám se sebou, lépe porozumíš svým žákům (8 hodin, ZŠ, ŠD)</LiFile>
      <LiFile>Zásady asertivní a efektivní komunikace - 16 hodin (ZŠ, ŠD, ŠK, MŠ)</LiFile> 
      <LiFile>Vybrané aspekty emoční a sociální inteligence pedagoga (16 hodin) </LiFile>
      <LiFile>Osobnostní a sociální rozvoj učitele (16 hodin)</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <p>Pro každého učitele je potřeba objednat 1x-3x šablonu 2.II/6 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 8 hodin nebo 2.V/4 Vzdělávání pedagogických pracovníků ŠD/ŠK – DVPP v rozsahu 8 hodin varianta d.osobnostně sociální rozvoj.</p>
  </BlockEx>
  <BonusAlert />
</Panel>

var IIZSICT81624: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <Label bsStyle="warning">16</Label> <Label bsStyle="warning">24</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Distanční výuka – formy a metody práce s žáky on-line</li>
          <li>Jak na distanční výuku?</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Využití ICT ve výuce – praktická inspirace - 8 hodin</LiFile>
      <LiFile>Efektivní využití MS Office pro pedagogy – 8 hodin</LiFile>
      <LiFile>Různé metody pro začlenění ICT technologií do výuky (8 hod)</LiFile>
      <LiFile>Základy práce s MS Office a jejich využití na školách  (8 hod – i pro ŠD, ŠK)</LiFile>
      <LiFile>Inspirace pro využití interaktivních tabulí při výuce  (8 hod)</LiFile>
      <LiFile>Funkce a nástrahy internetu, kyberšikana, sociální sítě  (8 hod)</LiFile>
      <LiFile>Práce s dotykovými zařízeními ve výuce  (8 hod)</LiFile>
      <LiFile>Efektivní využití MS Office pro pedagogy – 16 hodin</LiFile>
      <LiFile>Začlenění ICT technologií do výuky a využití internetu  (16 hod)</LiFile>
      <LiFile>Efektivní využití MS Office a výukových technologií – 24 hodin</LiFile>
      <LiFile>Začlenění ICT technologií a dotykových zařízení do výuky  (24 hod)</LiFile>
      <LiFile>Rozvíjení digitální gramotnosti v českém jazyce (8 hod)</LiFile>
      <LiFile>Rozvoj digitálních kompetencí učitelů a digitální gramotnosti žáků (8 hod)</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <p>Pro každého učitele je potřeba objednat 1-3x šablonu 2.II/6 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 8 hodin  varianta h. ICT</p>
  </BlockEx>
  <BonusAlert />
</Panel>

var IIZSInkluze8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Formativní hodnocení a role učitele</li>
          <li>Klima třídy se žáky s odlišným mateřským jazykem</li>
          <li>Klima třídy a vedení třídnické hodiny v rámci inkluze-8 hod (jen pro ZŠ) </li>
          <li>Práce s pedagogickým sborem-jak předejít syndromu vyhoření (jen pro ZŠ)</li>
          <li>Práce se žákem s problémovým chováním – 8 hodin (pro ZŠ, ŠD, ŠK)</li>
          <li>Podpora žáků ZŠ v rámci inkluzivního vzdělávání 8 hodin (pro ZŠ, ŠD, ŠK)</li>
          <li>Připravme se na inkluzivní vzdělávání – 8 hodin (pro ŠD, ŠK)</li>
          <li>Práce s diferencovanou třídou a náměty na vzdělávání 8 hod</li>
          <li>Sociální klima třídy a role učitele – 8 hodin</li>
          <li>Specifika práce učitele v heterogenní třídě – 8 hodin</li>
          <li>Třídní učitel a jeho působení v běžné i inkluzivní třídě</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <ObsahInkluzeZUS7 />
  <BlockEx header="Potřebné šablony: ">
    <p>Pro každého učitele je potřeba objednat některou z následujících šablon:
      <ul>
        <li>2.II/6 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 8 hodin  varianta e. inkluze</li>
        <li>2.II/7 Vzdělávání pedagogického sboru ZŠ zaměřené na inkluzi – vzdělávací akce v rozsahu 8 hodin</li>
        <li>2.V/4 Vzdělávání pedagogických pracovníků ŠD/ŠK – DVPP v rozsahu 8 hodin  varianta e. inkluze   </li>
      </ul>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel>

var IIZSInkluze1632: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">16</Label>&nbsp;<Label bsStyle="warning">32</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Klima třídy a vedení třídnické hodiny v rámci inkluze-16 hod (jen pro ZŠ) </li>
          <li>Společné vzdělávání v teorii a praxi – 16 hodin (pro ZŠ, ŠD, ŠK)</li>
        </ul>
      </p>
    </div>
  </BlockEx>

  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <p>Pro každého učitele je potřeba objednat 2x některou z následujících šablon:
      <ul>
        <li>2.II/6 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 8 hodin  varianta e. inkluze  </li>
        <li>2.V/4 Vzdělávání pedagogických pracovníků ŠD/ŠK – DVPP v rozsahu 8 hodin  varianta e. inkluze</li>
      </ul>
    </p>
  </BlockEx>
  <BonusAlert />
</Panel>;

var IIZUSInkluze8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Nabízíme kurz:  Připravme se na inkluzivní vzdělávání
      </p>
    </div>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <p>Pro každého učitele je potřeba objednat šablonu 2.VII/4 Vzdělávání pedagogických pracovníků ZUŠ v rozsahu 8 hodin varianta e.inkluze nebo 2.VII/5 Vzdělávání pedagogického sboru ZUŠ zaměřené na inkluzi – vzdělávací akce v rozsahu 8 hodin</p>
  </BlockEx>
  <BonusAlert />
</Panel>

var IIZUSRozvoj8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Prevence k zátěžovým situacím ve škole </li>
          <li>Jak zvládat stresové situace a nedospět k vyhoření</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Osobnostně sociální rozvoj v oblasti komunikace</LiFile>
      <LiFile>Aspekty emoční a sociální inteligence pedagoga 8 hodin</LiFile>
      <LiFile>Rozvoj osobnosti pedagoga v oblasti komunikace</LiFile>
      <LiFile>Rozvoj osobnosti pedagoga v oblasti sebepoznání</LiFile>
      <LiFile>Rozvoj osobnosti pedagoga ve zvládání konfliktů </LiFile>
      <LiFile>Zásady asertivní a efektivní komunikace pro MŠ, ZŠ, ZUŠ </LiFile>
      <LiFile>Nauč se mluvit sám se sebou, lépe porozumíš svým žákům</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <p>Pro každého učitele je potřeba objednat šablonu 2.VII/4 Vzdělávání pedagogických pracovníků ZUŠ v rozsahu 8 hodin varianta d. osobnostně sociální rozvoj</p>
  </BlockEx>
  <BonusAlert />
</Panel>

var IIZUSICT8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Distanční výuka – formy a metody práce s žáky on-line</li>
          <li>Jak na distanční výuku?</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Využití ICT ve výuce – praktická inspirace</LiFile>
      <LiFile>Kreativní využití MS Office pro pedagogy – 8 hodin</LiFile>
      <LiFile>Základy práce s MS Office a jejich využití na školách </LiFile>
      <LiFile>Různé metody pro začlenění ICT technologií do výuky </LiFile>
      <LiFile>Začlenění interaktivních tabulí do výuky</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <p>Pro každého učitele je potřeba objednat šablonu 2.VII/4 Vzdělávání pedagogických pracovníků ZUŠ v rozsahu 8 hodin varianta h. ICT</p>
  </BlockEx>
  <BonusAlert />
</Panel>

var IIMSInkluze816: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Společné vzdělávání dětí v MŠ – 8 hodin</LiFile>
      <LiFile>Inkluze v MŠ v teorii a praxi – 16 hodin</LiFile>
    </ul>
  </BlockEx>

  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>

  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat 1-2x šablonu 2.I/6 Vzdělávání pedagogických pracovníků MŠ – DVPP v rozsahu 8 hodin  varianta <b>e.
              inkluze</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var IIMSRozvoj816: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx>
    <div className='alert alert-info' style={{ fontSize: '18px' }}>
      <p>
        Novinky:
        <ul>
          <li>Prevence k zátěžovým situacím ve škole </li>
          <li>Jak zvládat stresové situace a nedospět k vyhoření</li>
        </ul>
      </p>
    </div>
  </BlockEx>
  <BlockEx header="Nabízíme následující kurzy">
    <ul className='fa-ul'>
      <LiFile>Aspekty emoční a sociální inteligence pedagoga v MŠ (8 hod)</LiFile>
      <LiFile>Rozvoj osobnosti pedagoga v oblasti komunikace </LiFile>
      <LiFile>Rozvoj osobnosti pedagoga v oblasti sebepoznání </LiFile>
      <LiFile>Rozvoj osobnosti pedagoga ve zvládání konfliktů  </LiFile>
      <LiFile>Zásady asertivní a efektivní komunikace pro MŠ, ZŠ, ZUŠ </LiFile>
      <LiFile>Zásady asertivní a efektivní komunikace - 16 hodin </LiFile>
      <LiFile>Vybrané aspekty emoční a sociální inteligence pedagoga (16 hod)</LiFile>
      <LiFile>Osobnostní a sociální rozvoj učitele (16 hod)</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <p>Pro každého učitele je potřeba objednat 1-2x šablonu 2.I/6 Vzdělávání pedagogických pracovníků MŠ – DVPP v rozsahu 8 hodin  varianta d. osobnostně sociální rozvoj</p>
  </BlockEx>
  <BonusAlert />
</Panel>


var IIMSCtenarska816: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy">
    <ul className='fa-ul'>
      <LiFile>Rozvoj předčt enářské gramotnosti – 8 hodin</LiFile>
      <LiFile>Rozvoj čtenářské pregramotnosti u dětí v MŠ – 16 hodin</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat 1-2x šablonu 2.I/6 Vzdělávání pedagogických pracovníků MŠ – DVPP v rozsahu 8 hodin  varianta <b>a.
              čtenářská pregramotnost</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var IIMSMatematicka816: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile>Rozvoj předmatematické gramotnosti – 8 hodin</LiFile>
      <LiFile>Rozvoj matematické pregramotnosti u dětí v MŠ – 16 hodin</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat 1-2x šablonu 2.I/6 Vzdělávání pedagogických pracovníků MŠ – DVPP v rozsahu 8 hodin varianta <b>b.
              matematická pregramotnost</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;

var IIMSIct8: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurz:">
    <ul className='fa-ul'>
      <LiFile>Kreativní využití MS Office pro pedagogy – 8 hodin</LiFile>
      <LiFile>Základy práce s MS Office a jejich využití na školách </LiFile>
      <LiFile>Začlenění interaktivních tabulí do výuky</LiFile>
    </ul>
  </BlockEx>
  <BlockEx header="Výuka ve sborovně:">
    <p>
      <b>Pokud přihlásíte dostatečný počet pedagogů, rádi přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně ve vámi zvoleném termínu.</b>
    </p>
  </BlockEx>
  <BlockEx header="Potřebné šablony: ">
    <div>
      <p>Pro každého učitele je potřeba objednat 1x šablonu 2.I/6 Vzdělávání pedagogických pracovníků MŠ – DVPP v rozsahu 8 hodin varianta <b>h.
              ICT</b>
      </p>
    </div>
  </BlockEx>
  <BonusAlert />
</Panel>;