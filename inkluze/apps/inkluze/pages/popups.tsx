const popups = {
  vyzva: <Popup document='vyzva' page= {1} header='Výzva'>
    <div>
      <p>
        Výzva podpoří osobnostně profesní rozvoj pedagogů prostřednictvím dalšího vzdělávání pedagogických pracovníků, vzájemného setkávání a sdílení zkušeností pedagogů a pomůže školám při společném vzdělávání dětí/žáků, a to možností personálního posílení o školního asistenta, školního psychologa, speciálního pedagoga, sociálního pedagoga, příp.
        chůvu v mateřské škole.Důležitou oblastí podpory je také usnadnění přechodu dětí z mateřské školy do základní školy a spolupráce s rodiči dětí a žáků.
        Zařazení žáků se speciálními vzdělávacími potřebami (SVP) do hlavního vzdělávacího proudu pomohou extrakurikulární aktivity (čtenářské kluby, kluby zábavné logiky a deskových her a doučování žáků základní školy ohrožených školním neúspěchem).
      </p>
    </div>
  </Popup>,

  MAP: <Popup document='priloha3' page={4} header='Jak identifikovat oblasti pro rozvoj školy?'>
    <div>
      <p>
        V listopadu roku 2015 byl školám v rámci šetření realizovaného pro potřeby výzvy Místní akční plány rozvoje vzdělávání (MAP) rozeslán dotazník, jehož vyplnění je podmínkou možnosti čerpání finančních prostředků prostřednictvím projektů zjednodušeného vykazování (šablon).
        Při zpracovávání dotazníků si školy ujasnily, ve kterých oblastech by se měly a chtěly rozvíjet.
        Školám pomohou v identifikaci jejich potřeb výsledky a vyhodnocení Výstupu z dotazníkového šetření MAP, které budou školám zaslány ze strany MŠMT a zpřístupněny {lib.navigateExt('https://sberdat.uiv.cz/login', 've webovém rozhraní', true) }.
        Součástí tohoto vyhodnocení je také seznam šablon, ze kterých mohou školy volit, aby alespoň část jejich potřeb rozvoje byla naplněna.
        Výstup z dotazníkového šetření MAP2 bude povinnou přílohou Žádosti o podporu.
      </p>
      <div className="well well-sm">
        Škola si povinně volí minimálně jednu šablonu z oblasti, která bude vyhodnocena jako nejslabší vzhledem k celorepublikovému průměru.
        Vzhledem k tomu, že dotazník byl koncipován šířeji pro programové období, je možné, že škola nenalezne odpovídající šablonu (např.
        oblast digitálních technologií v případě mateřské školy), pak bude volit ze šablon zaměřených na druhou nejslaběji vyhodnocenou oblast, pro kterou jsou k dispozici šablony.
        Volba minimálně jedné šablony dle uvedeného bude předmětem kontroly přijatelnosti projektu.
        Pokud škola tuto šablonu nezvolí, bude žádost vyřazena.
      </div>
      <p>
        Příklad: Mateřská škola má nejslabší hodnocení v oblasti digitálních technologií.
        Pro tuto oblast nejsou v 1.
        vlně šablon připraveny žádné šablony.
        Jako druhou nejslabší má vyhodnocenou oblast matematické pregramotnosti.
        Bude tedy volit alespoň jednu šablonu zaměřenou na podporu matematické pregramotnosti.
      </p>
      <p>
        Po splnění této podmínky může škola volit další šablony podle svého rozhodnutí do výše maximální částky na projekt.
        Výběr šablon musí být uvážlivý.
        Každá škola by měla před sestavením projektu nejen vyhodnotit oblasti z Výstupu dotazníkového šetření MAP, ve kterých se chce/potřebuje zlepšovat, ale také např.
        zhodnotit své časové a administrativní kapacity, případně také nabídku dalšího vzdělávání pedagogických pracovníků (dále jen „DVPP“) nebo dostatečných kapacit pro obsazení pozic personální podpory mateřský škol (MŠ) a základních škol (ZŠ).
        Pro rozhodování je také klíčové omezení výzvy v podobě minimální a maximální výše rozpočtu.
      </p>
      <p>
        Na závěr projektu školy vyplní dotazník znovu, aby zjistily, k jakému posunu došlo.
        Tento posun bude součástí doložení indikátoru Počet organizací, ve kterých se zvýšila kvalita výchovy a vzdělávání a proinkluzivnost.
        Odkaz na dotazník k vyplnění v závěru projektu bude zveřejněn na webových stránkách Ministerstva školství, mládeže a tělovýchovy (dále jen „MŠMT“).
        Školy vyplní dotazník před koncem projektu v době, kdy budou mít co nejvíce aktivit (šablon) realizovaných.
        Výstup s vyhodnocením znovu vyplněného dotazníku bude přílohou závěrečné zprávy o realizaci (ZZoR).
      </p>
      <p>
        Pokud škola výstup z dotazníku nedoloží, nebude moci vykázat indikátor výsledku.
        Při nedoložení indikátoru výsledku budou ze strany poskytovatele dotace uplatněny sankce dle kap.11.3.
        Pravidel pro žadatele a příjemce zjednodušených projektů.
      </p>
    </div>
  </Popup>,

  zadavatel: <Popup document='vyzva' page= {4} header='Oprávnění žadatelé'>
    <div>
      <p>
        Mateřské  a  základní  školy  nezřizované  organizačními  složkami  státu (tj.
        právnická osoba vykonávající činnost školy, zapsaná ve školském
        rejstříku), které  mají  veškolním roce, v němž  žádost  o  podporu podávají, minimálně jedno dítě/žáka.
      </p>
      <p>
        Mateřské a základní školy zřizované Ministerstvem školství, mládeže a tělovýchovy dle školského zákona (tj.
        právnická osoba vykonávající
        činnost  školy, zapsaná  ve  školském  rejstříku), které  mají ve školním roce, v němž žádost o podporu podávají, minimálně jedno
        dítě/žáka.
      </p>
    </div>
  </Popup>,

  rozpocet: <Popup document='priloha3' page={6} header='Jak sestavit rozpočet projektu?'>
    <div>
      <div className="well well-sm">
        <p>
          Řídicí orgán upozorňuje, že jednotlivé šablony je nutné vybírat tak, aby byla dodržena podmínka výzvy pro minimální a maximální výši finanční podpory na jeden projekt:
        </p>
        <p>
          Minimální výše: 200 000 Kč
        </p>
        <p>
          Maximální výše: maximální výše finanční podpory na jeden projekt se stanoví dle tohoto vzorce: 200 000 Kč + (počet dětí/žáků školy x 2 200 Kč) = maximální částka na školu.
          V případě, že součástí právnické osoby je mateřská a základní škola, se částka 200 000 Kč počít á jeden krát za mateřskou školu a jeden krát za základní školu, celkem tedy 400 000 Kč.
        </p>
        <p>
          Počet dětí/ žáků školy k 30.9.2015 bude zveřejněn u vyhlášené výzvy na webových stránkách MŠMT.
          Počet dětí/žáků školy pro další školní roky bude vždy aktualizován v prosinci daného školního roku na webových stránkách MŠMT.
        </p>
        <p>
          Maximální výši podpory na jeden projekt žadatel vypočítá v „Kalkulačce indikátorů“, která je povinnou přílohou Žádosti o podporu.
        </p>
      </div>
      <p>
        <b>Příklad č.1: </b> Škola má ve školním roce, ve kterém podává žádost, 100 dětí/žáků.
        Škola může čerpat maximálně 200 000 + (100 x 2 200 Kč) = 420 000 Kč.
      </p>
      <p>
        <b>Příklad č.2: </b> Škola má celkem pět odloučených pracovišť.
        Ve školním roce, ve kterém podává žádost, má celkem 320 dětí/žáků.
        Škola může čerpat maximálně 200 000 + (320 x 2 200 Kč) = 904 000 Kč.
      </p>
      <p>
        <b>Příklad č.3: </b> Součástí právnické osoby je základní škola se 120 žáky a mateřská škola s 28 dětmi.
        Škola jako celá právnická osoba může čerpat maximálně 200 000 + 200 000 + (148 x 2 200 Kč) = 725 600 Kč.
      </p>
      <p>
        V tomto případě je třeba, aby ředitel školy volil šablony jak pro mateřskou školu, tak pro základní školu, a to poměrně podle počtu dětí/žáků.
        Tzn., z celkové maximální částky na projekt budou na základní školu využity prostředky v max.
        výši 200 000 + (120 x 2 200 Kč) = 464 000 Kč, pro mateřskou školu prostředky v max.
        výši: 200 000 + (28 x 2 200 Kč) = 261 600 Kč.
      </p>
    </div>
  </Popup>,

  zadost_o_dotaci: <Popup document='vyzva' page={7} header='Žádost o dotaci'>
    <div>
      <p>
        Přehled relevantních příloh žádosti o podporu je uveden v {lib.navigateExt('http://www.msmt.cz/uploads/OP_VVV/Vyzva_zjednodusene_projekty_22_a23/Priloha_c_4_Seznam_priloh_k_zadosti_o_podporu.pdf', 'příloze č.4 Seznam příloh k žádosti o podporu', true) }.
        Řídicí orgán Operačního programu Výzkum, vývoj a vzdělávání je oprávněn aktualizovat vzory příloh žádosti o podporu v průběhu této výzvy.
        Aktualizace vzorů příloh žádosti o podporu není změnou této výzvy.
      </p>
      <p>
        Podání žádosti o podporu probíhá pouze elektronicky, prostřednictvím IS KP14+, {lib.navigateExt('https://mseu.mssf.cz/', 'v systému IS KP14+', true) }.
        Listinná verze žádosti se nezasílá.Žádost o podporu je podávána v českém jazyce.
      </p>
      <p>
        <b>
          Žádost o podporu musí být opatřena certifikovaným elektronickým podpisem statutárního orgánu žadatele nebo osoby oprávněné podepisovat na základě pověření.
        </b>
      </p>
    </div>
  </Popup>,

  bagatelni_podpora: <Popup document='priloha3' page={14} header='Bagatelní podpora'>
    <div>
      <p>
        Bagatelní podpora je ve výzvě Podpora škol formou projektů zjednodušeného vykazování – Šablony pro MŠ a ZŠ I stanovena na 24 hodin.
      </p>
      <p>
        Do bagatelní podpory se u šablon DVPP započítává délka vzdělávání uvedená na příslušném dokladu o absolvovaném vzdělání, u ostatních šablon hodinová dotace uvedená ve výstupu šablony.
      </p>
      <p>
        Projekt musí být koncipován tak, aby vzdělávací aktivity každé podpořené osoby v souhrnu dosahovaly minimální hranice bagatelní podpory.
        To znamená, že pokud bude konkrétní osoba vzdělávána v rámci šablony, kde časová dotace nedosahuje hranice bagatelní podpory, měla by tato konkrétní osoba být vzdělána ještě v rámci další šablony.
      </p>
    </div>
  </Popup>,

  /*ms_skolni_asistent: <Popup document='priloha3' page={18} header='I/1.1 Školní asistent – personální podpora MŠ'>
    <div>
      <p>Školní asistent poskytuje základní nepedagogickou podporu přímo v rodině při spolupráci s rodiči, zprostředkovává komunikaci s komunitou, rodinou a školou spočívající např.
        v aktivitách vedoucích k zajištění pravidelné docházky dětí, porozumění rodinnému prostředí dětí a zajištění přenosu informací mezi mateřskou školou a rodinou, poskytuje přímou nepedagogickou podporu dětí v předškolním vzdělávání spočívající např.
        v nácviku jednoduchých činností při příchodu a pobytu ve škole nebo školském zařízení nebo při akcích školy nebo školského zařízení, pomoci při oblékání, poskytuje podporu pedagogovi při administrativní a organizační činnosti pedagoga ve vyučování i mimo vyučování.
      </p>
    </div>
  </Popup>,*/

  /*ms_specialni_pedagog: <Popup document= 'priloha3' page= {23} header= 'I/1.2 Školní speciální pedagog – personální podpora MŠ' >
    <div>
      <p>Speciální pedagog diagnostikuje speciální vzdělávací potřeby dětí a pomáhá vytvářet a zlepšit podmínky pro úspěšnou integraci dětí se speciálními vzdělávacími potřebami.
        Součástí práce je spolupráce na tvorbě plánu pedagogické podpory nebo individuálního vzdělávacího plánu pro každé dítě s potřebou podpůrných opatření/se speciálními vzdělávacími potřebami.
      </p>
    </div>
  </Popup >,*/

  /*ms_psycholog: <Popup document='priloha3' page= {26} header='I/1.3 Školní psycholog – personální podpora MŠ'>
    <div>
      <p>
        Školní psycholog zkoumá klima ve třídách, chování dětí, vytváří diagnostiku a poskytuje konzultace pro pedagogy a rodiče ve škole nebo mimo školu.
        Školní psycholog spolupracuje také se zdravotnickými a jinými organizacemi mimo školní zařízení.
      </p>
    </div>
  </Popup>,*/

  /*ms_socialni_pedagog: <Popup document='priloha3' page= {29} header='I/1.4 Sociální pedagog – personální podpora MŠ'>
    <div>
      <p>
        Sociální pedagog není pedagogický pracovník, jeho náplní práce je vytvářet propojení mezi školou a jinými subjekty, např.
        obcí, policií, státním zástupcem a zdravotnickým zařízením.
        Součástí práce je poskytování mediace mezi školou, rodiči a uvedenými institucemi a pomoc s právními a sociálními otázkami.
      </p>
      <p>
        Sociální pedagog bude působit jako prostředník mezi mateřskou školou a rodinou.
        Účinně pomůže dětem, jejichž rodiny nemají dostatečnou kapacitu pomoci dětem při vzdělávání v mateřských školách.
        Poskytne pedagogům informace týkající se zázemí dětí a problémů, což následně pedagogům pomůže zvolit vhodný přístup k dítěti.
      </p>
    </div>
  </Popup>,*/

  /*ms_chuva: <Popup document='priloha3' page= {32} header='I/1.5 Chůva – personální podpora MŠ'>
    <div>
      <p>
        Chůva v mateřské škole bude pomáhat pedagogickému pracovníkovi s péčí o dvouleté děti, a to zejména v oblasti sebeobsluhy dítěte, zajištění bezpečnosti a individuálních potřeb dítěte.
        Mateřská škola může šablonu využít za podmínky, že v ní budou integrovány alespoň dvě dvouleté děti, které dovrší věku tří let nejdříve ve 2.
        pololetí školního roku, během kterého děti do mateřské školy nastoupí.
        Dvě dvouleté děti musí být v mateřské škole zapsány po celou dobu realizace aktivity.
        Podmínka dvou dvouletých dětí platí až do výše úvazku 1, 0.
      </p>
    </div>
  </Popup>,*/

  ms_rozvoj_pedagogu: <Popup document='priloha3' page= {35} header='Vzdělávací aktivity pro rozvoj pedagogů MŠ'>
    <div>
      <h4>Osobnostně sociální a profesní rozvoj pedagogů MŠ </h4>
      <ul>
        <li>
          I/2.1 Osobnostně sociální rozvoj předškolních pedagogů MŠ v rozsahu 40 hodin
        </li>
        <li>
          I/2.2 Osobnostně sociální rozvoj předškolních pedagogů MŠ v rozsahu 16 hodin
        </li>
        <li>
          I/2.3 Vzdělávání pedagogických pracovníků MŠ – DVPP v rozsahu 16 hodin
        </li>
        <li>
          I/2.4 Specifika práce pedagoga s dvouletými dětmi v MŠ
        </li>
        <li>
          I/2.5 Profesní rozvoj předškolních pedagogů prostřednictvím supervize
        </li>
        <li>
          I/2.6 Sdílení zkušeností pedagogů z různých škol prostřednictvím vzájemných návštěv (pro MŠ)
        </li>
      </ul>
      <h4>Usnadňování přechodu dětí z MŠ do ZŠ </h4>
      <ul>
        <li>
          I/3.1 Prevence logopedických vad a problémů komunikačních schopností u dětí v MŠ
        </li>
        <li>
          I/3.2 Individualizace vzdělávání v MŠ
        </li>
        <li>
          I/3.3 Odborně zaměřená tematická setkávání a spolupráce s rodiči dětí v MŠ
        </li>
      </ul>
    </div>
  </Popup >,

  /*ms_osobnostni_rozvoj_40_hodin: <Popup document='priloha3' page= {35} header='I/2.1 Osobnostně sociální rozvoj předškolních pedagogů MŠ v rozsahu 40 hodin'>
    <div>
      <p>
        Pedagog absolvuje v rámci šablony akreditovaný vzdělávací program DVPP v celkovém minimálním časovém rozsahu 40 hodin.
        Program DVPP bude zaměřen na rozvoj sebepoznání, osobních kvalit, prohloubení zejména komunikativních a kooperativních dovedností, kompetencí pro vzdělávání bez předsudků a rozvoj profesionální sebereflexe pedagogů.
      </p>
    </div>
  </Popup>,*/

  /*ms_osobnostni_rozvoj_16_hodin: <Popup document='priloha3' page= {37} header='I/2.2 Osobnostně sociální rozvoj předškolních pedagogů MŠ v rozsahu 16 hodin'>
    <div>
      <p>
        Pedagog absolvuje v rámci šablony akreditovaný vzdělávací program DVPP v celkovém minimálním časovém rozsahu 16 hodin.
        Program DVPP bude zaměřen na rozvoj sebepoznání, osobních kvalit, prohloubení zejména komunikativních a kooperativních dovedností, kompetencí pro vzdělávání bez předsudků a rozvoj profesionální sebereflexe pedagogů.
      </p>
    </div>
  </Popup>,*/

  /*ms_DVPP_16_hodin: <Popup document='priloha3' page= {39} header='I/2.3 Vzdělávání pedagogických pracovníků MŠ – DVPP v rozsahu 16 hodin'>
    <div>
      <p>
        Vzdělávání bude probíhat formou absolvování vzdělávacího programu DVPP akreditovaného v systému DVPP.
      </p>
      <p>
        Pedagogičtí pracovníci budou podpořeni v získávání dovedností, znalostí a kompetencí v jedné z následujících oblastí:
        <ol type="a">
          <li>
            čtenářská pregramotnost;
          </li>
          <li>
            matematická pregramotnost;
          </li>
          <li value="5">
            inkluze.
          </li>
        </ol>
      </p>
    </div>
  </Popup>,*/

  /*ms_specifika_prace_pedagoga: <Popup document='priloha3' page= {41} header='I/2.4 Specifika práce pedagoga s dvouletými dětmi v MŠ '>
    <div>
      <p>
        Pedagog absolvuje v rámci šablony vzdělávací program DVPP v celkovém minimálním časovém rozsahu 24 hodin.
      </p>
    </div>
  </Popup>,*/

  /*ms_profesni_rozvoj_pedagogu: <Popup document='priloha3' page= {43} header='I/2.5 Profesní rozvoj předškolních pedagogů prostřednictvím supervize'>
    <div>
      <p>
        Mateřská škola využije službu skupinové supervize v celkovém rozsahu 20 hodin za školní rok doplněnou o individuální supervizi v celkovém rozsahu 10 hodin za školní rok.
      </p>
    </div>
  </Popup>,*/

  /*ms_sdileni_zkusenosti_pedagogu: <Popup document='priloha3' page= {46} header='I/2.6 Sdílení zkušeností pedagogů z různých škol prostřednictvím vzájemných návštěv (pro MŠ)'>
    <div>
      <p>
        Pedagogický pracovník ve spolupráci s vedením „vysílající“ mateřské školy identifikuje oblasti/oblast, ve které chce rozvíjet své znalosti a dovednosti.
        Na základě toho vyberou „hostitelskou“ školu (může si vybrat jinou mateřskou školu, ale také základní školu) a tu osloví s žádostí o spolupráci.
        Na hostitelské škole bude s pedagogem z vysílající školy spolupracovat pedagog-průvodce.
      </p>
    </div>
  </Popup>,*/

  /*ms_prevence_logopedickych_vad: <Popup document='priloha3' page= {49} header='I/3.1 Prevence logopedických vad a problémů komunikačních schopností u dětí v MŠ'>
    <div>
      <p>
        Vzdělávací program DVPP je určen pro pedagogy mateřských škol a je zaměřen na podporu znalostí a praktických dovedností pedagogů v oblasti logopedické prevence u dětí předškolního věku.
      </p>
    </div>
  </Popup>,*/

  /*ms_individualizace_vzdelavani: <Popup document='priloha3' page= {51} header='I/3.2 Individualizace vzdělávání v MŠ'>
    <div>
      <p>
        DVPP umožní naplňovat požadavky Rámcového vzdělávacího programu pro předškolní vzdělávání, zejména při vzdělávání dětí se specifickými vzdělávacími potřebami.
      </p>
    </div>
  </Popup>,*/

  /*ms_odborne_zamerena_setkavani: <Popup document='priloha3' page= {53} header='I/3.3 Odborně zaměřená tematická setkávání a spolupráce s rodiči dětí v MŠ'>
    <div>
      <p>
        Mateřská škola zorganizuje odborně zaměřená tematická setkávání rodičů za účasti externího odborníka na téma týkající se usnadnění přechodu dětí do základní školy.
        Externím odborníkem může být např.
        pedagog základní školy, pracovník pedagogicko-psychologické poradny, psycholog, apod.
        V případě, že se jedná o příspěvkovou organizaci, kde je součástí mateřská i základní škola, může být odborníkem i pedagog této základní školy.
      </p>
    </div>
  </Popup>,*/

  zs_ms_personalni_podpora: <Popup document='priloha3' page={56} header='Šablony pro personální podporu'>
    <div>
      <h4>{lib.navigateExt('http://www.msmt.cz/uploads/OP_VVV/Vyzva_zjednodusene_projekty_22_a23/Priloha_c_3_Prehled_sablon_k_1_8_2016.pdf#page18', 'Personální podpora MŠ', true) }</h4>
      <ul>
        <li>
          I/1.1 Školní asistent – personální podpora MŠ
        </li>
        <li>
          I/1.2 Školní speciální pedagog – personální podpora MŠ
        </li>
        <li>
          I/1.3 Školní psycholog – personální podpora MŠ
        </li>
        <li>
          I/1.4 Sociální pedagog – personální podpora MŠ
        </li>
        <li>
          I/1.5 Chůva – personální podpora MŠ
        </li>
      </ul>

      <h4>{lib.navigateExt('http://www.msmt.cz/uploads/OP_VVV/Vyzva_zjednodusene_projekty_22_a23/Priloha_c_3_Prehled_sablon_k_1_8_2016.pdf#page56', 'Personální podpora ZŠ', true) }</h4>
      <ul>
        <li>
          II/1.1 Školní asistent – personální podpora ZŠ
        </li>
        <li>
          II/1.2 Školní speciální pedagog – personální podpora ZŠ
        </li>
        <li>
          II/1.3 Školní psycholog – personální podpora ZŠ
        </li>
        <li>
          II/1.4 Sociální pedagog – personální podpora ZŠ
        </li>
      </ul>
    </div>
  </Popup>,

  /*zs_skolni_asistent: <Popup document='priloha3' page={56} header='II/1.1 Školní asistent – personální podpora ZŠ'>
    <div>
      <p>Školní asistent poskytuje základní nepedagogickou podporu přímo v rodině při spolupráci s rodiči, zprostředkovává komunikaci s komunitou, rodinou a školou spočívající např.
        v aktivitách vedoucích k zajištění pravidelné školní docházky žáků, porozumění rodinnému prostředí žáků a zajištění přenosu informací mezi školou a rodinou, pomáhá při rozvoji mimoškolních a volnočasových aktivit, poskytuje podporu pedagogovi při administrativní a organizační činnosti pedagoga ve vyučování i mimo vyučování.
      </p>
    </div>
  </Popup>,*/

  /*zs_specialni_pedagog: <Popup document= 'priloha3' page= {61} header= 'II/1.2 Školní speciální pedagog – personální podpora ZŠ' >
    <div>
      <p>Speciální pedagog diagnostikuje speciální vzdělávací potřeby žáků a pomáhá vytvářet a zlepšit podmínky pro úspěšnou integraci žáků se speciálními vzdělávacími potřebami.
        Součástí práce je spolupráce na tvorbě plánu pedagogické podpory nebo individuálního vzdělávacího plánu pro každého žáka s potřebou podpůrných opatření/se speciálními vzdělávacími potřebami.
      </p>
    </div>
  </Popup >,*/

  /*zs_psycholog: <Popup document='priloha3' page= {63} header='II/1.3 Školní psycholog – personální podpora ZŠ'>
    <div>
      <p>
        Školní psycholog zkoumá klima ve třídách, chování žáků, vytváří diagnostiku a poskytuje konzultace pro žáky, pedagogy a rodiče ve škole nebo mimo školu.
        Školní psycholog spolupracuje také se zdravotnickými a jinými organizacemi mimo školní zařízení.
      </p>
    </div>
  </Popup>,*/

  /*zs_socialni_pedagog: <Popup document='priloha3' page= {67} header='II/1.4 Sociální pedagog – personální podpora ZŠ'>
    <div>
      <p>
        Sociální pedagog není pedagogický pracovník, jeho náplní práce je vytvářet propojení mezi školou a jinými subjekty, např.
        obcí, policií, státním zástupcem a zdravotnickým zařízení.
        Součástí práce je poskytování mediace mezi školou, rodiči a uvedenými institucemi a pomoc s právními a sociálními otázkami.
      </p>
      <p>
        Sociální pedagog bude působit jako prostředník mezi základní školou a rodinou.
        Účinně pomůže žákům, jejichž rodiny nemají dostatečnou kapacitu pomoci s přípravou do školy a s motivací ke studiu.
        Poskytne pedagogům informace týkající se zázemí žáků a problémů, což následně pedagogům pomůže zvolit vhodný přístup k žákovi.
      </p>
    </div>
  </Popup>,*/

  zs_rozvoj_pedagogu: <Popup document='priloha3' page= {71} header='Vzdělávací aktivity pro rozvoj pedagogů ZŠ'>
    <div>
      <h4>Osobnostně sociální a profesní rozvoj pedagogů ZŠ </h4>
      <ul>
        <li>
          II/2.1 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 16 hodin
        </li>
        <li>
          II/2.2 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 32 hodin
        </li>
        <li>
          II/2.3 Vzdělávání pedagogických pracovníků ZŠ zaměřené na inkluzi – DVPP v rozsahu 32 hodin
        </li>
        <li>
          II/2.4 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 56 hodin
        </li>
        <li>
          II/2.5 Vzdělávání pedagogických pracovníků ZŠ zaměřené na inkluzi – DVPP v rozsahu 56 hodin
        </li>
        <li>
          II/2.6 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 80 hodin
        </li>
        <li>
          II/2.7 Vzdělávání pedagogických pracovníků ZŠ zaměřené na inkluzi – DVPP v rozsahu 80 hodin
        </li>
        <li>
          II/2.8 Vzdělávání pedagogického sboru ZŠ zaměřené na inkluzi – vzdělávací akce v rozsahu 8 hodin
        </li>
        <li>
          II/2.9 Vzájemná spolupráce pedagogů ZŠ
        </li>
        <li>
          II/2.10 Sdílení zkušeností pedagogů z různých škol prostřednictvím vzájemných návštěv (pro ZŠ)
        </li>
        <li>
          II/2.11 Tandemová výuka na ZŠ
        </li>
        <li>
          II/2.12 CLIL ve výuce na ZŠ
        </li>
        <li>
          II/2.13 Nové metody ve výuce na ZŠ
        </li>
      </ul>
      <h4>Extrakurikulární rozvojové aktivity ZŠ </h4>
      <ul>
        <li>
          II/3.1 Čtenářský klub pro žáky ZŠ
        </li>
        <li>
          II/3.2 Klub zábavné logiky a deskových her pro žáky ZŠ
        </li>
        <li>
          II/3.3 Doučování žáků ZŠ ohrožených školním neúspěchem
        </li>
        <li>
          II/3.4 Příprava na vyučování žáků ZŠ ohrožených školním neúspěchem
        </li>
      </ul>
      <h4>Spolupráce s rodiči žáků ZŠ </h4>
      <ul>
        <li>
          II/4.1 Odborně zaměřená tematická setkávání a spolupráce s rodiči žáků ZŠ
        </li>
      </ul>
    </div>
  </Popup >,


  zs_DVPP_16_hodin: <Popup document='priloha3' page= {71} header='II/2.1 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 16 hodin'>
    <div>
      <p>
        Pedagogičtí pracovníci základních škol budou podporováni ve svém profesním a odborném růstu účastí na odborných seminářích, workshopech a dalších vzdělávacích akcích zaměřených na rozvoj dovedností, znalostí a kompetencí a na využívání efektivních vyučovacích metod.
        Vzdělávání bude probíhat formou absolvování vzdělávacího programu DVPP akreditovaného v systému DVPP.
      </p>
      <p>
        Pedagogičtí pracovníci budou podpořeni v jedné z následujících oblastí:
        <ol type="a">
          <li>
            čtenářská pregramotnost;
          </li>
          <li>
            matematická pregramotnost;
          </li>
          <li>
            cizí jazyky;
          </li>
          <li value="5">
            inkluze.
          </li>
        </ol>
      </p>
    </div>
  </Popup>,

  zs_DVPP_32_hodin: <Popup document='priloha3' page= {73} header='II/2.2 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 32 hodin'>
    <div>
      <p>
        Pedagogičtí pracovníci základních škol budou podporováni ve svém profesním a odborném růstu účastí na odborných seminářích, workshopech a dalších vzdělávacích akcích zaměřených na rozvoj dovedností, znalostí a kompetencí a na využívání efektivních vyučovacích metod.
        Vzdělávání bude probíhat formou absolvování vzdělávacího programu DVPP akreditovaného v systému DVPP.
      </p>
      <p>
        Pedagogičtí pracovníci budou podpořeni v jedné z následujících oblastí:
        <ol type="a">
          <li>
            čtenářská gramotnost;
          </li>
          <li>
            matematická gramotnost;
          </li>
          <li>
            cizí jazyky;
          </li>
          <li>
            mentoring.
          </li>
        </ol>
      </p>
    </div>
  </Popup>,

  zs_DVPP_inkluze_32_hodin: <Popup document='priloha3' page= {75} header='II/2.3 Vzdělávání pedagogických pracovníků ZŠ zaměřené na inkluzi – DVPP v rozsahu 32 hodin'>
    <div>
      <p>
        Pedagogičtí pracovníci základních škol budou podporováni ve svém profesním a odborném růstu účastí na odborných seminářích, workshopech a dalších vzdělávacích akcích zaměřených na rozvoj dovedností, znalostí a kompetencí v oblasti inkluze a na využívání efektivních vyučovacích metod.
      </p>
    </div>
  </Popup>,

  zs_DVPP_56_hodin: <Popup document='priloha3' page= {77} header='II/2.4 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 56 hodin'>
    <div>
      <p>
        Pedagogičtí pracovníci základních škol budou podporováni ve svém profesním a odborném růstu účastí na odborných seminářích, workshopech a dalších vzdělávacích akcích zaměřených na rozvoj dovedností, znalostí a kompetencí a na využívání efektivních vyučovacích metod.
        Vzdělávání bude probíhat formou absolvování vzdělávacího programu DVPP akreditovaného v systému DVPP.
      </p>
      <p>
        Pedagogičtí pracovníci budou podpořeni v jedné z následujících oblastí:
        <ol type="a">
          <li>
            čtenářská pregramotnost;
          </li>
          <li>
            matematická gramotnost;
          </li>
          <li>
            cizí jazyky;
          </li>
          <li>
            mentoring.
          </li>
        </ol>
      </p>
    </div>
  </Popup>,

  /*zs_DVPP_inkluze_56_hodin: <Popup document='priloha3' page= {79} header='II/2.5 Vzdělávání pedagogických pracovníků ZŠ zaměřené na inkluzi – DVPP v rozsahu 56 hodin'>
     <div>
       <p>
         Pedagogičtí pracovníci základních škol budou podporováni ve svém profesním a odborném růstu účastí na odborných seminářích, workshopech a dalších vzdělávacích akcích zaměřených na rozvoj dovedností, znalostí a kompetencí v oblasti inkluze a na využívání efektivních vyučovacích metod.
       </p>
     </div>
   </Popup>,*/

  /*zs_DVPP_80_hodin: <Popup document='priloha3' page= {81} header='II/2.6 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 80 hodin'>
    <div>
      <p>
        Pedagogičtí pracovníci základních škol budou podporováni ve svém profesním a odborném růstu účastí na odborných seminářích, workshopech a dalších vzdělávacích akcích zaměřených na rozvoj dovedností, znalostí a kompetencí a na využívání efektivních vyučovacích metod.
        Vzdělávání bude probíhat formou absolvování vzdělávacího programu DVPP akreditovaného v systému DVPP.
      </p>
      <p>
        Pedagogičtí pracovníci budou podpořeni v jedné z následujících oblastí:
        <ol type="a">
          <li>
            čtenářská pregramotnost;
          </li>
          <li>
            matematická gramotnost;
          </li>
          <li>
            cizí jazyky;
          </li>
          <li>
            mentoring.
          </li>
        </ol>
      </p>
    </div>
  </Popup>,*/

  /*zs_DVPP_inkluze_80_hodin: <Popup document='priloha3' page= {83} header='II/2.7 Vzdělávání pedagogických pracovníků ZŠ zaměřené na inkluzi – DVPP v rozsahu 80 hodin'>
     <div>
       <p>
         Pedagogičtí pracovníci základních škol budou podporováni ve svém profesním a odborném růstu účastí na odborných seminářích, workshopech a dalších vzdělávacích akcích zaměřených na rozvoj dovedností, znalostí a kompetencí v oblasti inkluze a na využívání efektivních vyučovacích metod.
       </p>
     </div>
   </Popup>,*/

  zs_sbor_8_hodin: <Popup document='priloha3' page= {85} header='II/2.8 Vzdělávání pedagogického sboru ZŠ zaměřené na inkluzi – vzdělávací akce v rozsahu 8 hodin'>
    <div>
      <p>
        Aktivita je koncipována tak, že umožňuje zajistit vzdělávání pro celý pedagogický sbor či jeho podstatnou část tak, aby bylo možné z podpořené skupiny pedagogů vytvořit tým s inovačním potenciálem schopným působit na kompetence, ale i hodnoty a postoje ostatních pedagogů ve škole.
        Jedná se o jeden vzdělávací program DVPP o rozsahu minimálně 8 hodin, který podpoří v dané škole koncept společného vzdělávání.
        Kurz přispěje k rozvoji kompetencí pedagogů pro práci s heterogenní skupinou žáků, ve které jsou vzdělávání i žáci s potřebou podpůrných opatření (včetně těch v prvním stupni podpory).
        Vzdělávání může být zaměřeno také na podporu bezpečného klimatu ve škole/třídách, budování týmu školy a podporu spolupráce, práci s nastavováním cílů a vyhodnocováním výsledků učení žáků (se zvláštním zřetelem na žáky s potřebou podpory).
      </p>
    </div>
  </Popup>,

  /*zs_vzajemna_spoluprace: <Popup document='priloha3' page= {87} header='II/2.9 Vzájemná spolupráce pedagogů ZŠ'>
    <div>
      <p>
        Podmínkou je vytvoření minitýmu ve spolupráci tří pedagogických pracovníků.
        Pedagogové se v průběhu 10 po sobě jdoucích měsíců, ve kterých probíhá výuka, budou scházet s cílem:
      </p>
      <p>
        V rámci varianty a) Čtenářská gramotnost nebo b) Matematická gramotnost plánovat, realizovat (pozorovat) a reflektovat aktivity na podporu ČG/MG v běžné výuce předmětů mimo Český jazyk a literatura/Matematika.
      </p>
      <p>
        V rámci varianty e) Inkluze plánovat, realizovat a reflektovat aktivity, které naplňují principy společného vzdělávání žáků a podporují zejména žáky s potřebou podpůrných opatření.
      </p>
    </div>
  </Popup>,*/

  /*zs_sdileni_zkusenosti: <Popup document='priloha3' page= {91} header='II/2.10 Sdílení zkušeností pedagogů z různých škol prostřednictvím vzájemných návštěv (pro ZŠ)'>
    <div>
      <p>
        Pedagogický pracovník ve spolupráci s vedením „vysílající“ základní školy identifikuje oblasti/oblast, ve které chce rozvíjet své znalosti a dovednosti.
        Na základě toho vybere „hostitelskou“ školu (může si vybrat jinou základní školu, ale také mateřskou školu) a tu osloví s žádostí o spolupráci.
        Na hostitelské škole bude s pedagogem z vysílající školy spolupracovat pedagog-průvodce.
      </p>
    </div>
  </Popup>,*/

  /*zs_tandemova_vyuka: <Popup document='priloha3' page= {94} header='II/2.11 Tandemová výuka na ZŠ '>
     <div>
       <p>
         Aktivita je určena pro dva pedagogy, kteří společně naplánují a zrealizují 10 vyučovacích hodin v průběhu pěti po sobě jdoucích měsíců, ve kterých probíhá výuka.
         Po každé vyučovací hodině proběhne reflexe včetně zhodnocení využitých metod a vlivu na vzdělávací procesy a výsledky žáků.
       </p>
     </div>
   </Popup>,*/

  /*zs_clil_ve_vyuce: <Popup document='priloha3' page= {97} header='II/2.12 CLIL ve výuce na ZŠ '>
    <div>
      <p>
        Pedagog, který vyučuje cizí jazyk (dále jen „pedagog-lektor“), povede své dva kolegy-pedagogy, kteří nevyučují vzdělávací obor Cizí jazyk (dále jen „pedagog-nejazykář“); toto omezení neplatí pro pedagogy 1. stupně).
      </p>
      <p>
        Pedagog-lektor připraví a zrealizuje pro své kolegy v průběhu pěti po sobě jdoucích měsíců, ve kterých probíhá výuka, minimálně 25 výukových lekcí cizího jazyka v délce trvání minimálně 60 minut.
        Cílem lekcí je získání větší jistoty v komunikačních dovednostech a příprava na zavedení metody CLIL do výuky.
      </p>
    </div>
  </Popup>,*/

  /*zs_nove_metody_ve_vyuce: <Popup document='priloha3' page= {101} header='II/2.13 Nové metody ve výuce na ZŠ'>
    <div>
      <p>
        Obsahem šablony je spolupráce pedagogického pracovníka, který má zkušenosti a potřebné znalosti v konkrétní oblasti forem a metod práce (dále jen „pedagog-expert“) s dalšími dvěma kolegy (dále jen „pedagog-začátečník“).
      </p>
      <p>
        Šablonou budou podpořeny takové formy a metody práce pedagoga, které představují ucelené přístupy (např.
        Hejného metoda, Čtením a psaním ke kritickému myšlení a další) nebo které je možné navázat na konkrétní položky z dotazníkového šetření MAP (ČG, MG, Inkluze) nebo položky z Metodik pro hodnocení rozvoje gramotností (připravených ČŠI).
      </p>
      <p>
        Spolupráce v oblasti inkluze může být zaměřena i na obecnější témata, která zvyšují kompetence pedagogů z hlediska společného vzdělávání a osobnostního rozvoje, tedy například na reflexi a sebereflexi, plánování výuky (z hlediska cílů, obsahu, metod a individualizace), podporu učení (motivace žáků, diferenciace, klima, atd.), apod.
      </p>
    </div>
  </Popup>,*/

  /*zs_ctenarsky_klub: <Popup document='priloha3' page= {104} header='II/3.1 Čtenářský klub pro žáky ZŠ'>
    <div>
      <p>
        Čtenářský klub je možno zřídit pro nejméně šest žáků základní školy.
        Podmínkou zřízení klubu je zařazení nejméně dvou žáků ohrožených školním neúspěchem.
      </p>
      <p>
        Aktivita umožňuje vedle rozvoje žáků i profesní rozvoj pedagogických pracovníků.
      </p>
    </div>
  </Popup>,*/

  /*zs_klub_zabavne_logiky: <Popup document='priloha3' page= {108} header='II/3.2 Klub zábavné logiky a deskových her pro žáky ZŠ '>
    <div>
      <p>
        Aktivita vede k rozvoji logického (ale i informatického) a strategického myšlení žáků.
        Takto získané znalosti, dovednosti a kompetence se také promítají i do povinné složky vzdělávání žáka.
        Aktivita umožňuje vedle rozvoje žáků i profesní rozvoj pedagogických pracovníků.
        Klub je možno zřídit pro nejméně šest žáků základní školy.
        Podmínkou zřízení klubu je zařazení nejméně dvou žáků ohrožených školním neúspěchem.
      </p>
    </div>
  </Popup>,*/

  /*zs_doucovani_zaku: <Popup document='priloha3' page= {112} header='II/3.3 Doučování žáků ZŠ ohrožených školním neúspěchem'>
     <div>
       <p>
         Aktivita bude realizována prostřednictvím doučování tří žáků ohrožených školním neúspěchem vedeného pedagogem, asistentem pedagoga či jinou osobou, která bude vedením školy určena pro vedení doučování (nemusí se jednat o pedagogického pracovníka, doučujícím může být i např.
         student 4.
         nebo 5.
         ročníku fakult připravujících budoucí pedagogické pracovníky).
       </p>
     </div>
   </Popup>,*/

  /*zs_priprava_na_vyucovani: <Popup document='priloha3' page= {115} header='II/3.4 Příprava na vyučování žáků ZŠ ohrožených školním neúspěchem'>
     <div>
       <p>
         Aktivita bude realizována prostřednictvím „odpolední školy“ (přípravy na vyučování) vedené pedagogem, asistentem pedagoga či jinou osobou, která bude vedením školy určena pro vedení přípravy na vyučování (nemusí se jednat o pedagogického pracovníka, doučujícím může být i např.
         student 4.
         nebo 5.
         ročníku fakult připravujících budoucí pedagogické pracovníky).
       </p>
       <p>
         Příprava na vyučování probíhá pro skupinu minimálně tří žáků ohrožených školním neúspěchem.
       </p>
     </div>
   </Popup>,*/

  /*zs_odborne_zamerena_setkavani: <Popup document='priloha3' page= {118} header='II/4.1 Odborně zaměřená tematická setkávání a spolupráce s rodiči žáků ZŠ'>
     <div>
       <p>
         Základní škola zajistí realizaci odborně zaměřených tematických setkávání rodičů za účasti externího odborníka na téma související s modernizací škol a vzdělávacího systému.
         Externím odborníkem může být např.
         pracovník pedagogicko-psychologické poradny, vysokoškolský pedagog, metodik, apod.
       </p>
     </div>
   </Popup>,*/


}

const DumpPopups: React.StatelessComponent<{}> = prop => {
  var pops: Array<JSX.Element> = [];
  for (var p in popups) {
    pops.push(<p key={p}>{popups[p]}</p>);
  }

  return <Page><Block>{pops}</Block></Page >
}