const emailTemplate: React.StatelessComponent<IKuryFormFormStatus> = (props: IKuryFormFormStatus, ctx: sitemapRouter.IContext) => <div>
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

var SSPedagogickaDiagnostika: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesped1" aria-expanded="false" aria-controls="collapsesped1">Sociální klima třídy a pedagogická diagnostika učitele
      </b>(8 hod, akreditováno pro SŠ, VOŠ, MŠ, ZŠ, asistenti)
        <div className="collapse border rounded " id="collapsesped1">
          <div className="m-3">
            <b>Teoretická část  (4 vyučovací hodiny)</b><br />
            •	Objasnění základních pojmů - klima třídy, sociální klima třídy, spolutvůrci třídního klimatu,<br />
            •	Pedagogická diagnostika školní třídy – vymezení základních pojmů a metod pedagogické diagnostiky (diagnóza, prognóza, dispozice, proces – cíl, oblasti, diagnostický postup, chyby při diagnostikování ze strany pedagoga, charakteristické rysy, typy, mechanismy, které toto klima ovlivňují, prevence vztahů, pozice a role žáka ve školní třídě)<br />
            •	Sociální klima třídy a pedagogická diagnostika<br />
            -	Diagnostické kompetence učitele – metody, nástroje<br />
            a)	Pozorování – obecné principy, průběh, zápis<br />
            b)	Rozhovor – princip, vedení rozhovoru, typy, techniky kladení otázek<br />
            c)	Dotazníky – typy, sestavování<br />
            d)	Sociometrické metody<br />
            - sběr dat, vyhodnocování, interpretace a práce s nimi<br />
            - nejčastější chyby v sociální percepci<br />
            <br />
            <b>Praktická část (4 vyučovací hodiny)</b><br />
            •	Nabídka činností zaměřených na podporu utváření pozitivního sociálního klimatu ve třídě a transformace na konkrétní činnosti spojené s nástroji pedagogické diagnostiky (např. účastník si prakticky ověří získané poznatky na základě nabídky konkrétních aktivit průřezového tématu OSV, zacíleného na věk). Nabídky aktivit z vlastního zkušenostního dvouletého výcviku u citovaných osobností a také nabídky jejich publikací - doc. PhDr. Soni Hermochové, CSc., doc. PhDr. Josefa Valenty, CSc., Doc. PhDr. Hany Kasíkové, CSc., Mgr. Petra Kříže a dalších osobností<br />
            •	Poslední část bude věnována i dotazům a řízené diskuzi z vlastní praxe zúčastněných ped. pracovníků.<br />
            •	způsoby vedení poradenského rozhovoru koučovacím způsobem - práce se škálou, kladení otázek, model GROW, atd.<br />
          </div>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesped2" aria-expanded="false" aria-controls="collapsesped2">Sociální klima třídy a pedagogická diagnostika učitele - webinář
</b>(8 hod, akreditováno pro SŠ, VOŠ, MŠ, ZŠ, asistenti)
         <div className="collapse border rounded " id="collapsesped2">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny - 90 minut)</b><br />
            <b>Teoretická část 1 – základní pojmy a pedagogická diagnostika</b><br />
            •	Objasnění základních pojmů - klima třídy, sociální klima třídy, spolutvůrci třídního klimatu,<br />
            •	Pedagogická diagnostika školní třídy – vymezení základních pojmů a metod pedagogické diagnostiky (diagnóza, prognóza, dispozice, proces – cíl, oblasti, diagnostický postup, chyby při diagnostikování ze strany pedagoga, charakteristické rysy, typy, mechanismy, které toto klima ovlivňují, prevence vztahů, pozice a role žáka ve školní třídě)<br />
            <br />
            <b>Blok 2 ( 2 vyučovací hodiny – 90 minut)</b><br />
            <b>Teoretická část 2 - Sociální klima třídy a pedagogická diagnostika</b><br />
            -	Diagnostické kompetence učitele – metody, nástroje<br />
            a)	Pozorování – obecné principy, průběh, zápis<br />
            b)	Rozhovor – princip, vedení rozhovoru, typy, techniky kladení otázek<br />
            c)	Dotazníky – typy, sestavování<br />
            d)	Sociometrické metody<br />
            - sběr dat, vyhodnocování, interpretace<br />
            - nejčastější chyby v sociální percepci<br />
            <br />
            <b>Blok 3 ( 2 vyučovací hodiny – 90 minut)</b><br />
            <b>Praktická část 1</b><br />
            Nabídka činností zaměřených na podporu utváření pozitivního sociálního klimatu ve třídě a transformace na konkrétní činnosti spojené s nástroji pedagogické diagnostiky<br />
            a) Rozhovor – nácvik vedení rozhovoru<br />
            b) Dotazníky – nácvik tvorby<br />
            c) Pozorování – nácvik struktury tvorby předlohy<br />
            <br />
            <b>Blok 4 ( 2 vyučovací hodiny – 90 minut)</b><br />
            <b>Praktická část 2</b><br />
            Nestandardizované nástroje diagnostiky tříd:<br />
            Např:<br />
            a) pohybové hry (např. aktivity – Dotkni se toho, kdo…, Místo vedle mě je prázdné…,Místa si vymění ti, kteří ...,   Sociometrie tělem.. a další)<br />
            b) techniky tužka – papír (např. aktivity Technika deseti situací, Erb, Pyramida, Obláčky..)<br />
            Nabídka námětů aktivit, které budou účastníkům prezentovány na webináři jsou vybrány z vlastního zkušenostního dvouletého výcviku u citovaných osobností a také nabídky jejich publikací - doc. PhDr. Soni Hermochové, CSc., doc. PhDr. Josefa Valenty, CSc., Doc. PhDr. Hany Kasíkové, CSc., Mgr. Petra Kříže a dalších osobností<br />
            Tato část bude věnována i dotazům a řízené diskuzi z vlastní praxe zúčastněných ped. pracovníků.<br />
            <br />
          </div></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesped3" aria-expanded="false" aria-controls="collapsesped3">Kázeňské přestupky a možnosti jejich řešení v rámci třídy
      </b>(8 hod, akreditováno pro MŠ, ZŠ, ŠD, SŠ, DM, asistenti, výchovní poradci, speciální pedagogové, psychologové)
        <div className="collapse " id="collapsesped3">
          <ul className="list-group">
            <li className="list-group-item">•	Pedagogická diagnostika orientovaná na žáka, učitele a edukační proces (1 hod)</li>
            <li className="list-group-item">•	Možnosti diferencovaného vzdělávání jako prevence problémového chování (1 hod)</li>
            <li className="list-group-item">•	Příčiny problémového chování u žáků, Diagnostická kritéria ADHD, Příčiny poruch chování žáků, Formy rizikového chování – zneužívání návykových látek, kriminalita, šikana, hostilita, agrese, agresivita, vrstevnické vztahy, školní problémy, přestupky a ostatní rizikové formy chování (4 hod)</li>
            <li className="list-group-item">•	Praktická část: Ukázka práce s třídním kolektivem, ukázka práce v rámci třídnických hodin, ukázka práce- nabídka metodických materiálů. Diskuze, práce s kazuistikami (2 hod)</li>
          </ul></div>
      </LiFile>
    </ul>
  </BlockEx>
</Panel>

var SSInovace: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesi123" aria-expanded="false" aria-controls="collapsesi123">Změny v RVP a úpravy ŠVP v rámci programu InspIS ŠVP
      </b> (8 hod, doporučeno pro MŠ, ZŠ, ZUŠ, SŠ, VOŠ)
        <div className="collapse " id="collapsesi123">
          <ul className="list-group">
            <li className="list-group-item">
              1. Aktuální legislativní rámec školského zákona, který souvisí s tvorbou, úpravou a efektivním využíváním školních vzdělávacích programů
            </li>
            <li className="list-group-item">
              2.  připravované změny související s revizemi RVP - (1,5h)
            </li>
            <li className="list-group-item">
              3. význam a možnosti využití elektronického systému InspIS ŠVP - (0,5h)
            </li>
            <li className="list-group-item">
              4. Práce v systému InspIS ŠVP (5 hod)
              <ul className="list-group">
                <li className="list-group-item">
                  • přihlášení do systému podání základních informací a založení ŠVP
                </li>
                <li className="list-group-item">
                  • tvorba učebního plánu, poznámek, přehledu týdnů - upřesnění informací
                </li>
                <li className="list-group-item">
                  • forma vzdělávání - vzdělávací obsah, strategie naplňování KK - konkrétní příklady, vazby mezi výstupy RVP, ŠVP, učivem, …..
                </li>
                <li className="list-group-item">
                  • popisné informace k systému InspIS ŠVP – formulář ŠVP – vyplnění, konkrétní informace o změnách ve formuláři
                </li>
                <li className="list-group-item">
                  • kontrola a schválení ŠVP
                  </li>
              </ul>
            </li>
            <li className="list-group-item">
              Diskuse, dořešení konkrétních dotazů účastníků
            </li>
          </ul>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesin1" aria-expanded="false" aria-controls="collapsesin1">Změny v RVP a úpravy ŠVP
      </b>(8 hod, akreditováno pro SŠ, VOŠ, MŠ, ZŠ, ZUŠ)
        <div className="collapse " id="collapsesin1"><ul className="list-group"><li className="list-group-item">•	Aktuální legislativní rámec školského zákona, který souvisí s tvorbou, úpravou a efektivním využíváním školních vzdělávacích programů  – (2 hod)</li>
          <li className="list-group-item">•	Změny vyvolané revizí RVP (MŠMT)  - (2 hod)</li>
          <li className="list-group-item">•	Aktuální úpravy ŠVP související s revizemi a úpravami v RVP  – (1 hod)</li>
          <li className="list-group-item">•	ŠVP a nová strategie vzdělávání, modifikace vzdělávacího obsahu, rozsahu a zaměření výuky, metod práce na základě provedených revizí RVP (2 hod)</li>
          <li className="list-group-item">•	Vzájemná výměna zkušeností, diskuse  – (1 hod)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesin2" aria-expanded="false" aria-controls="collapsesin2">Změny v RVP a úpravy ŠVP - webinář
      </b>(8 hod, akreditováno pro SŠ, VOŠ, MŠ, ZŠ, ZUŠ)
        <div className="collapse border rounded " id="collapsesin2">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            Aktuální legislativní rámec školského zákona, který souvisí s tvorbou, úpravou a efektivním využíváním školních vzdělávacích programů<br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            Změny vyvolané revizí RVP (MŠMT)<br />
            <b>Blok 3 (1 vyučovací hodina – 45 minut)</b><br />
            Aktuální úpravy ŠVP související s revizemi a úpravami v RVP<br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            ŠVP a nová strategie vzdělávání, modifikace vzdělávacího obsahu, rozsahu a zaměření výuky, metod práce na základě provedených revizí RVP<br />
            <b>Blok 5 (1 vyučovací hodina – 45 minut)</b><br />
            Vzájemná výměna zkušeností, diskuse<br />
          </div></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesin3" aria-expanded="false" aria-controls="collapsesin3">Úpravy ŠVP v rámci programu InspIS ŠVP
      </b>(8 hod, akreditováno pro SŠ, VOŠ, MŠ, ZŠ, ZUŠ)
       <div className="collapse border rounded " id="collapsesin3">
          <div className="m-3">
            1.	Aktuální legislativní rámec školského zákona, který souvisí s tvorbou, úpravou a efektivním využíváním školních vzdělávacích programů – (0,5 hod)<br />
            2.	Aktuální úpravy ŠVP související se změnami kapitol jednotlivých typů RVP – (1 hod)<br />
            3.	Význam a možnosti využití elektronického systému InspIS (0,5 hod)<br />
            4.	Práce v systému InspIS ŠVP (6 hod)<br />
            •	přihlášení do systému podání základních informací  a založení ŠVP<br />
            •	tvorba učebního plánu, poznámek, přehledu týdnů<br />
            •	forma vzdělávání - vzdělávací obsah, strategie naplňování KK, vazby mezi výstupy RVP, ŠVP, učivem, …..<br />
            •	popisné informace k systému InspIS ŠVP – formulář ŠVP – vyplnění, konkrétní informace<br />
            •	kontrola a schválení ŠVP<br />
            •	Diskuse, dořešení konkrétních dotazů účastníků<br />
          </div>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesin4" aria-expanded="false" aria-controls="collapsesin4">Úpravy ŠVP v rámci programu InspIS ŠVP - webinář
</b>(8 hod, akreditováno pro SŠ, VOŠ, MŠ, ZŠ, ZUŠ)
         <div className="collapse border rounded " id="collapsesin4">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            <b>Teoretická část</b><br />
            •	Aktuální legislativní rámec školského zákona, který souvisí s tvorbou, úpravou a efektivním využíváním školních vzdělávacích programů<br />
            •	Aktuální úpravy ŠVP související se změnami kapitol jednotlivých typů RVP<br />
            •	Význam a možnosti využití elektronického systému InspIS<br />
            <br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            <b>Práce v systému InspIS ŠVP, 1. část</b><br />
            •	přihlášení do systému, podání základních informací a založení ŠVP<br />
            •	tvorba učebního plánu, poznámek, přehledu týdnů<br />
            <br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            <b>Práce v systému InspIS ŠVP, 2. část</b><br />
            •	forma vzdělávání - vzdělávací obsah, strategie naplňování KK, vazby mezi výstupy RVP, ŠVP, učivem, …..<br />
            <br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            <b>Práce v systému InspIS ŠVP, 3. část</b><br />
            •	popisné informace k systému InspIS ŠVP – formulář ŠVP – vyplnění, konkrétní informace<br />
            •	kontrola a schválení ŠVP<br />
            •	diskuse, dořešení konkrétních dotazů účastníků<br />
          </div>
        </div>
      </LiFile>
    </ul>
  </BlockEx>
</Panel>

var SSSpoluprace: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsessp1" aria-expanded="true" aria-controls="collapsessp1">Zásady efektivní komunikace s rodiči a zákonnými zástupci
      </b>(8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, SŠ, DM, asistenti)
        <div className="collapse.show" id="collapsessp1">
          <ul className="list-group">
            <li className="list-group-item">•	Specifika komunikace v online prostředí, možné chyby v komunikaci /vztahová agrese, nevhodná interpretace požadavků, předvídání budoucnosti, generalizace obtíží žáka, hodnocení rodiny, žáka, dávání nevyžádaných rad atd./ Věcná /obsahová /a vztahová rovina komunikace /teoretická část/ (1 hod)</li>
            <li className="list-group-item">•	Příklady mailové komunikace jejich rozbor, porovnání dopadu mailové komunikace směrem k adresátovi. /praktická část/<br />
              Jak jinak komunikovat<br />
              analýza základních komunikačních chyb<br />
              alternativní možnosti komunikace se žáky<br />
              možnosti, jak vést žáky k odpovědnosti za své prožívání a jednání (1 hod)<br /></li>
            <li className="list-group-item">•	Možnosti komunikace s rodiči a zákonnými zástupci. Typologie rodičů - styly chování, verbální komunikace. Úzkostně agresivní typ rodiče, narcistně agresivní typ rodiče, úzkostní rodiče, rodiče s hysterickými rysy osobnosti aj. Znaky a projevy chování, možnosti volby strategie řešení situací.  (3 hod)</li>
            <li className="list-group-item">•	Řešení emočně vypjatých situací: možnosti řešení, tvorba repertoáru strategií k řešení složitých a neobvyklých sociálních situací. (1 hod)</li>
            <li className="list-group-item">•	Práce s metodickým materiálem, praktická část zaměřená na vlastní strategie, vyvarování se některým chybám v komunikaci. (1 hod)</li>
            <li className="list-group-item">•	Základy a zásady asertivního jednání (1 hod)</li>
          </ul></div>
      </LiFile >
    </ul >
  </BlockEx >
</Panel >

var SSCtenarskaGramotnost: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsescg1" aria-expanded="false" aria-controls="collapsescg1">Čtenářská gramotnost napříč všemi předměty SŠ a VOŠ  – 8 hod
      </b>(8 hod, akreditováno pro SŠ, VOŠ)
        <div className="collapse border rounded " id="collapsescg1">
          <div className="m-3">
            <b>Teoretický obsah kurzu:</b><br />
            1.	Seznámení s principem třífázového učení E-U-R a se základními metodami a formami práce a jejich dělením – (2 hod)<br />
            <b>Praktická část kurzu:</b><br />
            2.	Aplikace jednotlivých základních metod ve výuce – interaktivní část semináře – interaktivní zapojení účastníků – (6 hod)<br />
            •	Brainstorming – princip a různé způsoby využití<br />
            •	Myšlenková mapa - princip a různé způsoby využití<br />
            •	Práce s textem - princip a různé způsoby využití<br />
            •	Škálování - princip a různé způsoby využití<br />
            •	další aktivizující metody a formy výuky<br />
            Diskuse nad konkrétními problémy.<br />
          </div></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsescg2" aria-expanded="false" aria-controls="collapsescg2">Čtenářská gramotnost napříč všemi předměty SŠ a VOŠ – 16
      </b>(16 hod, akreditováno pro SŠ, VOŠ)
         <div className="collapse border rounded " id="collapsescg2">
          <div className="m-3">
            <b>Teoretický obsah kurzu:</b><br />
            1.	Seznámení s principem třífázového učení E-U-R a se základními metodami a formami práce a jejich dělením – (2 hod)<br />
            2.	Seznámení s principem třífázového učení E-U-R a se základními metodami a formami práce a jejich dělením – (2 hod)<br />
            3.	Metody a formy práce, které rozvíjejí nejvíce klíčových kompetencí (vyvození) – (1 hod)<br />
            <b>Praktická část kurzu:</b><br />
            1.	Aplikace jednotlivých základních metod ve výuce – interaktivní část semináře – interaktivní zapojení účastníků – (6 hod)<br />
            a)	Brainstorming – princip a různé způsoby využití<br />
            b)	Myšlenková mapa - princip a různé způsoby využití<br />
            c)	Práce s textem - princip a různé způsoby využití<br />
            •	vyhledávání a zpracovávání informací<br />
            •	metoda I.N.S.E.R.T.<br />
            •	skládankové učení<br />
            •	párové čtení<br />
            •	pětilístek<br />
            •	volné psaní<br />
            •	třífázový rozhovoru…<br />
            d)	Škálování - princip a různé způsoby využití<br />
            e)	další aktivizující metody a formy výuky<br />
            2.	Hodnocení úrovně rozvoje čtenářské gramotnosti (2 hod)<br />
            a.		Vyvození vhodných metod hodnocení<br />
          </div>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsescg3" aria-expanded="false" aria-controls="collapsescg3">Čtenářství napříč výukou SŠ – 8 hodin
</b>(8 hod, akreditováno pro SŠ, VOŠ)
        <div className="collapse " id="collapsescg3"><ul className="list-group">
          <li className="list-group-item">•	Šifrování (1 hod)</li>
          <li className="list-group-item">•	analýza textu: metody RWCT (3 hod)</li>
          <li className="list-group-item">•	rozvoj komunikačních dovedností (kolážování, práce s fotografií a ilustracemi, expertní skupiny) (2 hod)</li>
          <li className="list-group-item">•	náměty pro tvůrčí psaní (1 hod)</li>
          <li className="list-group-item">•	drobné metody podporující soustředění se na danou věc (1 hod)</li>
        </ul></div>
      </LiFile>
    </ul>
  </BlockEx>
</Panel>

var SSMatematickaGramotnost: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesmg1" aria-expanded="false" aria-controls="collapsesmg1">GeoGebra - nástroj rozvoje matematické gramotnosti na SŠ
      </b>(8 hod, akreditováno pro SŠ, VOŠ)
        <div className="collapse border rounded " id="collapsesmg1">
          <div className="m-3">
            <b>Teoretický obsah kurzu (1,5 hodiny):</b><br />
            •	Seznámení s problematikou nasazení programu GeoGebra do hodin matematiky (principy použití, pozitiva, negativa a rizika nasazení programu) (0,5 hodin)<br />
            •	Instalace programu GeoGebra – odlišení jednotlivých instalačních balíčků (0,5 hodin)<br />
            •	Seznámení s webovou podporou programu a úložištěm již hotových materiálů, které je možno rovnou využít ve výuce (bez vlastní tvorby) (0,5 hodin)<br />
            <b>Praktická část kurzu (6,5 hodin):</b><br />
            •	Pracovní prostředí programu GeoGebra (panel nástrojů, algebraické okno, tabulka, nákresny, vstupní panel) (0,5 hodin)<br />
            •	Změny vlastnosti objektů včetně pokročilého nastavení (0,5 hodin)<br />
            •	GeoGebra jako nástroj pro tvorbu vlastního didaktického materiálů (např. ukládání vytvořených souborů, export do různých typů souborů včetně exportu do interaktivní webové stránky) (0,5 hodin)<br />
            •	Aplikace programu do výuky geometrie, algebry a matematické analýzy (1,5 hodiny)<br />
            •	Využití programu jako nástroje rozvoje matematické gramotnosti, propojování geometrických a algebraických interpretací v matematice prostřednictvím programu (1,5 hodiny)<br />
            •	Základní ovládání prostředí 3D (1 hodina)<br />
            •	Diskuse nad konkrétními problémy (1 hodina)<br />
          </div>
        </div>
      </LiFile>
      <LiFile>
        <b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesmg11" aria-expanded="false" aria-controls="collapsesmg11">Moderní technologie při rozvoji matematické gramotnosti 
      </b>(8 hod, doporučeno pro ZŠ, SŠ, VOŠ)
          <div className="collapse " id="collapsesmg11">
          <ul className="list-group">
            <li className="list-group-item">• Vychytávky, které lze využít při výuce s technologiemi jak v matematice, tak i v jiných předmětech (2 hodiny)</li>
            <li className="list-group-item">• Seznámení s úložišti již hotových materiálů, které je možno rovnou využít ve výuce (bez vlastní tvorby) a různými webovými stránkami s videi, texty i jinými materiály, které je možné vhodně využít nejen k podpoře rozvoje matematické gramotnosti (2 hodiny)</li>
            <li className="list-group-item">• Příklady her a prostředí na internetu pro podporu matematické gramotnosti (1 hodina)</li>
            <li className="list-group-item">• Programy a aplikace pro jednoduché vytváření zábavných kvízů (2 hodiny)</li>
            <li className="list-group-item">• Použití programu Formulator Tarsia pro tvorbu domin, triomin a jiných her vhodných k oživení procvičovaného učiva (1 hodina)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesmg2" aria-expanded="false" aria-controls="collapsesmg2">Moderní technologie ve výuce (nejen) matematiky na SŠ a VOŠ
      </b>(16 hod, akreditováno pro SŠ, VOŠ)
        <div className="collapse " id="collapsesmg2"><ul className="list-group"><li className="list-group-item">•	Principy využití moderních technologií; seznámení s problematikou nasazení výukových technologií do výuky (pozitiva, negativa a rizika nasazení) (1 hodina)</li>
          <li className="list-group-item">•	Seznámení s úložišti již hotových materiálů, které je možno rovnou využít ve výuce (bez vlastní tvorby) a různými webovými stránkami s videi, texty i jinými materiály, které je možné vhodně využít nejen k podpoře rozvoje matematické gramotnosti (0, 5 hodin)</li>
          <li className="list-group-item">•	Příklady her a prostředí na internetu pro podporu matematické gramotnosti (0, 5 hodin)</li>
          <li className="list-group-item">•	Seznámení programy a aplikacemi, které oživí každou prezentaci (2 hodiny)</li>
          <li className="list-group-item">•	Využití pojmových map, sdílených poznámek a dokumentů ve výuce (1 hodina)</li>
          <li className="list-group-item">•	Využití programů a aplikací pro komunikaci mezi žáky, studenty, učiteli a rodiči (1 hodina)</li>
          <li className="list-group-item">•	Rozšířená realita jako nástroj motivace i rozvoje nejen matematické gramotnosti (1 hodina)</li>
          <li className="list-group-item">•	Programy a aplikace pro jednoduché vytváření zábavných kvízů (1 hodina)</li>
          <li className="list-group-item">•	Použití programu Formulator Tarsia pro tvorbu domin, triomin a jiných her vhodných k oživení procvičovaného učiva (1 hodina)</li>
          <li className="list-group-item">•	Seznámení s problematikou nasazení programu GeoGebra do hodin matematiky (principy použití, pozitiva, negativa a rizika nasazení programu) (0,5 hodin)</li>
          <li className="list-group-item">•	Instalace programu GeoGebra  – odlišení jednotlivých instalačních balíčků (0,5 hodin)</li>
          <li className="list-group-item">•	Seznámení s webovou podporou programu a úložištěm již hotových materiálů, které je možno rovnou využít ve výuce (bez vlastní tvorby) (0,5 hodin)</li>
          <li className="list-group-item">•	Pracovní prostředí programu GeoGebra (panel nástrojů, algebraické okno, tabulka, nákresny, vstupní panel) (0,5 hodin)</li>
          <li className="list-group-item">•	Změny vlastnosti objektů včetně pokročilého nastavení (0,5 hodin)</li>
          <li className="list-group-item">•	Aplikace programu do výuky geometrie, algebry a matematické analýzy (1,5 hodin)</li>
          <li className="list-group-item">•	Využití programu jako nástroje rozvoje matematické gramotnosti, propojování geometrických a algebraických interpretací v matematice prostřednictvím programu (1 hodina)</li>
          <li className="list-group-item">•	Základní ovládání prostředí 3D (1 hodina)</li>
          <li className="list-group-item">•	Diskuse nad konkrétními problémy v nasazení technologií na SŠ (1 hodina)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesmg3" aria-expanded="false" aria-controls="collapsesmg3">Jak na distanční výuku matematiky?
</b>(8 hod, akreditováno pro SŠ, VOŠ, ZŠ)
          <div className="collapse " id="collapsesmg3"><ul className="list-group"><li className="list-group-item">•	Software využitelný při on-line výuce (2 hodiny)</li>
          <li className="list-group-item">•	Využití webových stránek sloužící k výuce on-line (1 hodina)</li>
          <li className="list-group-item">•	GeoGebra  – tvorba materiálů online, využívání již vytvořených dostupných materiálů, tvorba vlastních materiálů a jejich sdílení (2 hodiny)</li>
          <li className="list-group-item">•	Jak komunikovat s žáky on-line (1 hodina)</li>
          <li className="list-group-item">•	Praktická cvičení  – praktické využití jednotlivých nástrojů k distančnímu učení matematiky (2 hodiny)</li>
        </ul></div>
      </LiFile>
    </ul>
  </BlockEx>
</Panel>

var SSPodporaUcitelu: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsespu1" aria-expanded="false" aria-controls="collapsespu1">Mentorské dovednosti–úvod do problematiky principů mentoringu
      </b>(8 hod, akreditováno pro SŠ, MŠ, ZŠ, ZUŠ, ředitelé, zástupci, management)
        <div className="collapse border rounded " id="collapsespu1">
          <div className="m-3">
            <b>1.	část: vysvětlení principů mentoringu (3 hodiny)</b><br />
            •	mentoring a definování role mentora<br />
            •	interní mentoring a externí mentoring<br />
            •	potřebné předpoklady pro roli mentora - poradce<br />
            •	mentor jako „kritický přítel“ – co je a co není součásti práce mentora<br />
            •	oblasti, v nichž mentor spolupracuje se svým svěřencem – institucionální, oblast vlastní výuky a oblast osobnostní podpory<br />
            •	náměty pro reflexní činnost ve škole<br />
            <b>2.	část (4 hodiny)</b><br />
            •	praktický nácvik – modelové situace, hry v rolích, sebereflexe pro roli mentora<br />
            <b>3.	část: (1 hodina)</b><br />
            •	obavy – rady a doporučení pro učitele připravující se pro pozici poradce<br />
            •	diskuse, rady a doporučení, příklady z praxe<br />
            Na základě získaných informaci a po absolvování praktického bloku semináře, který je zaměřen na sebereflexi účastníka, se budou moci absolventi rozhodnout, zda se pro práci poradce = mentora cítí. Současně získají zpětnou vazbu pro oblasti, ve kterých by se měli, v rámci přípravy pro tuto pozici vzdělávat.<br />
          </div>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsespu2" aria-expanded="false" aria-controls="collapsespu2">Mentorské dovednosti učitele
      </b>(16 hod, akreditováno pro SŠ, MŠ, ZŠ, ZUŠ, ředitelé, zástupci, management)
        <div className="collapse border rounded " id="collapsespu2">
          <div className="m-3">
            <b>1.	část -teoretická: (2 hodiny)</b><br />
            •	mentoring a definování role mentora<br />
            •	potřebné předpoklady (kompetence) pro roli mentora – poradce<br />
            •	interní a externí mentoring<br />
            •	oblasti – institucionální, vlastní výuky a osobnostní podpory – v nichž mentor spolupracuje se svým svěřencem<br />
            <b>2.	část -teoretická (6 hodin)</b><br />
            •	náměty pro reflexní činnost ve škole<br />
            •	seznámení s jednotlivými fázemi mentoringu<br />
            •	kompetenční rámec<br />
            •	vytýčení cílů a nastavení strategií k dosažení cílů<br />
            •	zásady mentorského rozhovoru před pozorováním<br />
            •	pozorování ve výuce a zápis<br />
            •	zásady mentorského rozhovoru nad výstupy z pozorování<br />
            •	porovnávání výsledků a vzájemná zpětná vazba<br />
            <br />
            <b>3.	část - praktická: (6 hodin)</b><br />
            praktický nácvik – modelové situace, hry v rolích, sebereflexe pro roli mentora<br />
            •	nastavení základních pravidel pro úspěšný začátek rozhovoru<br />
            •	navázání vztahu na principu mentoringu<br />
            •	vedení rozhovoru na principu mentorského rozhovoru ke kompetenčnímu rámci<br />
            •	mentorský rozhovor nad výstupy z pozorování<br />
            •	zpracování výsledků<br />
            •	nácvik podávání zpětné vazby<br />
            <b>4.	část - praktická (2 hodiny)</b><br />
            •	vyhodnocení procesu mentorské pomoci a stanovení dalších kroků v profesním rozvoji<br />
            •	obavy – rady a doporučení pro učitele připravující se pro pozici poradce<br />
            diskuse, rady a doporučení, příklady z praxe<br />
            Na základě získaných informaci a po absolvování praktických bloků semináře, které jsou zaměřeny na sebereflexi účastníka v roli mentora, se budou moci absolventi rozhodnout, zda se pro práci poradce = mentora hodí. Současně získají zpětnou vazbu pro oblasti, ve kterých by se měli, v rámci přípravy pro tuto pozici dále vzdělávat.<br />
          </div></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsespu3" aria-expanded="false" aria-controls="collapsespu3">Moderní trendy ve vedení lidí – Mentoring
</b>(24 hod, akreditováno pro SŠ, MŠ, ZŠ, ZUŠ, ředitelé, zástupci, management)
         <div className="collapse border rounded " id="collapsespu3">
          <div className="m-3">
            <b>I. SETKÁNÍ (8hod)</b><br />
            <br />
            <b>1. MODUL  - Úvod do mentoringu – (3 hod.)</b><br />
            Obsahem modulu je vymezení pojmů mentoring, proces, cíl, zásady mentoringu; mentorování v prostředí školy, cíle, principy, přínos; typy mentoringu, stručný popis jednotlivých fází mentoringu<br />
            <br />
            <b>2. MODUL  - Osobnost mentora, poradce, experta,… – (5 hod.)</b><br />
            Obsahem modulu je pozitivní hodnocení sebe i druhých<br />
            Hodnocení sebe: - úcta k lidské osobnosti – sebepojetí - sebepoznání, sebehodnocení, sebepřijetí, sebeprezentace, sebeovládání, sebeoceňování;<br />
            Hodnocení druhých – vyjádření uznání, ocenění, pochvala a její účinnost, připisování pozitivních vlastností druhým, přijetí pochvaly a akceptace druhého, konstruktivní kritika, řešení konfliktu<br />
            <br />
            Součástí semináře je praktický nácvik – práce jednotlivců i ve skupinách – modelové situace, hry v rolích<br />
            <br />
            <b>II. SETKÁNÍ (8hod)</b><br />
            <br />
            <b>3. MODUL – Role mentora, poradce, experta,… – ( 5 hod.)</b><br />
            Obsahem modulu je definování role mentora, jeho poradenské schopnosti projevujející se ve verbálních a neverbálních formách komunikace.<br />
            Verbální komunikace – tj. principy a zásady verbální komunikace, komunikační chyby; dialog, komunikace ve ztížených podmínkách; aktivní naslouchání – cíle, výhody, zásady, způsob a nácvik, poskytování zpětné vazby, … .<br />
            Neverbální komunikace - řeč těla - porozumění druhým podle gest rukou, postoje nohou, obličejové mimiky, výrazu očí, …. .<br />
            Obrana před manipulací - asertivní techniky – manipulace, vysvětlení a nácvik jednotlivých asertivních technik<br />
            <br />
            <b>4. MODUL – Fáze poradenského procesu  - I. II.– (3 hod.)</b><br />
            Obsahem modulu je seznámit s jednotlivými kroky poradenského procesu:<br />
            Přípravná fáze mentoringu: - zajištění potřebných informací k zahájení mentoringu<br />
            Zahájení mentoringu: struktura úvodního setkání mentora a mentee; popis jednotlivých kroků úvodního setkání; základní pravidla pro navázání vztahu s mentorovaným a pro úspěšný začátek mentoringu; nastavení cílů podle kritéria SMART, nastavení strategie k dosažení cílů<br />
            <br />
            Součástí semináře je praktický nácvik – práce jednotlivců i ve skupinách – modelové situace, hry v rolích<br />
            <br />
            <b>III. SETKÁNÍ (8hod)</b><br />
            <br />
            <b>5. MODUL – Fáze poradenského procesu  - III. IV.– (4 hod.)</b><br />
            Obsahem modulu je seznámit s jednotlivými kroky poradenského procesu:<br />
            Realizace strategie k cíli - Zásady vedení poradenského rozhovoru, pravidla kladení otázek, typy otázek; základní teorie motivace, tipy pro překonání pasivity mentorovaného: negativní naladění, námitky, konflikt a dalších obtíže<br />
            Ukončení mentoringu - Ověření úspěšnosti dosažení cílů, nastavení akčního plánu pro další rozvoj mentorovaného, motivace mentorovaného k dalšímu rozvoji,<br />
            Zpětná vazba - umět podat závěrečnou zpětnou vazbu, respektovat etiku ve zpětné vazbě, zásady poradenských dovedností, schopnost reagovat na negativní zpětnou vazbu;<br />
            Organizace mentorské schůzky společný rozbor situace<br />
            <br />
            <b>6. MODUL – Praktický nácvik– (4 hod.)</b><br />
            Obsahem modulu je praktický nácvik – práce jednotlivců i ve skupinách – modelové situace - navázání pracovního vztahu, plánování společné schůzky, analýza vzdělávacích potřeb, plánování cílů a ověřování pokroku, evaluace, rozbor, porovnávání výsledků a vzájemná zpětná vazba<br />
          </div>
        </div>
      </LiFile>
    </ul>
  </BlockEx>
</Panel>

var SSMedGramotnost: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsessm1" aria-expanded="false" aria-controls="collapsessm1">Funkce a nástrahy internetu, kyberšikana a sociální sítě</b> (8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ZUŠ, asistenti)
        <div className="collapse.show" id="collapsessm1">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Vznik a funkce internetu</b> – vznik internetu, fungování internetu, vyhledávání na internetu, rozdíl mezi internetovým vyhledavačem a prohlížečem, nástrahy internetu a bezpečné chování na internetu (2,5 hod)</li>
            <li className="list-group-item">•	<b>Kyberšikana</b> – identifikace problémů, řešení problémů, rozdíl mezi klasickou šikanou a kyberšikanou (2 hod)</li>
            <li className="list-group-item">•	<b>Sociální sítě a práce s nimi</b> – obecné informace o sociálních sítích, funkce sociálních sítí, bezpečné chování na sociální síti, klady a zápory využití sociálních sítí, vybrané sociální sítě a informace k nim (2 hod)</li>
            <li className="list-group-item">•	<b>Autorství a kopírování obrázků a informací</b> (0,5 hod)</li>
            <li className="list-group-item">•	<b>E-mail</b> – práce v prostředí MS Outlook a v některých e-mailových schránkách (1 hod)</li>
          </ul>
        </div>

      </LiFile>
    </ul>
  </BlockEx>
</Panel>

var SSNoveTechnologie: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>
    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt0010" aria-expanded="false" aria-controls="collapseznt0010">Umělá inteligence ve škole
      </b> (doporučeno pro ZŠ,SŠ, VOŠ)
        <div className="collapse " id="collapseznt0010">
          <p>Obsah semináře je zaměřen na konkrétní aplikace umělé inteligence, které jsou použitelné zdarma a mohou okamžitě přinést praktický užitek ve školním prostředí. Účastníci se naučí, jak pomocí AI vytvořit materiály pro výuku, jak AI začlenit do výuky nebo jak si s AI zjednodušit administrativní procesy.</p>
          <ul className="list-group">
            <li className="list-group-item">•	přehled dostupných AI nástrojů pro učitele, které lze využít zdarma (např. ChatGPT, ScioBot);</li>
            <li className="list-group-item">•	vytváření vlastních didaktických materiálů s využitím AI (např. generování interaktivních úloh pomocí aplikací Wizer.me, Quizlet, Kahoot, Nearpod);</li>
            <li className="list-group-item">•	AI ve výuce různých předmětů – klady, zápory a omezení vzhledem konkrétním předmětům;</li>
            <li className="list-group-item">•	AI pro tvorbu vizuálních materiálů: generování výukových obrázků zdarma (např. Ideogram, Leonardo AL);</li>
            <li className="list-group-item">•	AI pro tvorbu hudebního a multimediálního obsahu: generování hudby a zvuků pro výuku (např. Suno, Soundraw a Mubert pro automatickou tvorbu hudebních podkladů);,</li>
            <li className="list-group-item">•	AI pro tvorbu prezentací a videí;</li>
            <li className="list-group-item">•	automatizace hodnocení a zpětné vazby pomocí AI.</li>
          </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt1" aria-expanded="false" aria-controls="collapsesnt1">Efektivní využití MS Office pro pedagogy – 8 hodin</b>        (8 hod, akreditováno pro SŠ, VOŠ, ZŠ)
        <div className="collapse " id="collapsesnt1">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Seznámení s programem – demonstrace úpravy prostředí Windows</b> - přizpůsobení pracovní plochy, nastavení hlavního panelu, možnosti zobrazení ikon a představení prostřední MS Office z pohledu zefektivnění práce s jednotlivými programy, využití panelu rychlých nástrojů, přizpůsobení pásu karet, nastavení stavového řádku, karta zobrazení (0, 5 hod)</li>
            <li className="list-group-item">•	<b>MS Office Word</b> – formátování písma, odstavců, textu, vícestránkové dokumenty, vkládání a úprava textů z internetu, záhlaví, zápatí, styly, vkládání a úprava obrázků do textu, práce s obrazci, symboly, rozšíření znalostí klávesových zkratek (2,5 hod)</li>
            <li className="list-group-item">•	<b>MS Office Excel</b> – seznámení s prostředím Microsoft Excel, formátování buněk, tabulek, vytváření vlastních řad, vzorce a funkce v Excelu se zaměřením na praktické využití při používání Excelu při evidenci dat i při výuce (2,5 hod)</li>
            <li className="list-group-item">•	<b>MS Office PowerPoint</b> – pravidla prezentace, práce se snímky, textovými poli, vkládání obrázků, objektů, využití šablon, motivů, možnosti efektů, příprava pro tisk (2,5 hod)</li>
          </ul>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt2" aria-expanded="false" aria-controls="collapsesnt2">Různé metody pro využití ICT technologií ve škole
      </b>        (8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ZUŠ, asistenti)
        <div className="collapse " id="collapsesnt2">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Vliv ICT na žáka</b> v každodenním životě (1 hod)</li>
            <li className="list-group-item">•	<b>Počítačová gramotnost</b> – Čeho se týká, jaká by měla být role učitele/vychovatele, co je funkční a informační gramotnost, jaká je pozice žáka… (1 hod)</li>
            <li className="list-group-item">•	<b>Moderní technologie a jejich implementace do edukačního procesu</b> – učitel, vychovatel, žák, škola, PC a dataprojektor, interaktivní tabule, laptopové třídy, LMS a e-learning, mezinárodní kooperace, e- Twinning (2,5 hod)</li>
            <li className="list-group-item">•	<b>Ukázka možností využití některých programů a internetových stránek k podpoře výuky</b> (týmová výuka – Toglic, různé webové portály, se kterými může pedagog výuku oživit). (1,5 hod)</li>
            <li className="list-group-item">•	<b>Ukázka práce s dotykovým zařízením.</b> Práce s on – line aplikacemi, využití vhodných aplikací na dotykových zařízeních (2 hod)</li>
          </ul>
        </div>

      </LiFile>
      <LiFile>
        <b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt3" aria-expanded="false" aria-controls="collapsesnt3">Inspirace pro využití interaktivních tabulí ve škole</b> (8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ZUŠ, asistenti)
         <div className="collapse " id="collapsesnt3">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Interaktivní tabule a její využití</b>  - využití interaktivních učebnic, on-line cvičení, webové portály vhodné k práci na interaktivní tabuli (1 hod)</li>
            <li className="list-group-item">•	<b>Program Active Inspire</b> a jeho využití (1,5 hod)</li>
            <li className="list-group-item">•	<b>MS PowerPoint</b> - pravidla prezentace, práce se snímky, textovými poli, vkládání obrázků, objektů, využití šablon, motivů, možnosti efektů, příprava pro tisk, dodržování autorství – obrázky s volnou licencí (2 hod)</li>
            <li className="list-group-item">•	<b>Základy dodržování správného prezentování</b> (1 hod)</li>
            <li className="list-group-item">•	<b>Praktická cvičení</b> – tvorba prezentací účastníků s jednotlivými prvky prezentace a samotné prezentování připravených materiálů; následná diskuse a rozbor prezentací (2,5 hod)</li>
          </ul>
        </div>

      </LiFile>
      <LiFile>
        <b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt4" aria-expanded="false" aria-controls="collapsesnt4">Práce s dotykovými zařízeními ve škole </b>(8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ZUŠ, asistenti)
         <div className="collapse " id="collapsesnt4">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Seznámení s dotykovými zařízeními</b> – obecné prvky práce s dotykovými zařízeními, rozdělení dotykových zařízení, různé platformy dotykových zařízení (android, Windows, iOS…) (2 hod)</li>
            <li className="list-group-item">•	<b>Vhodné aplikace do škol - představení vhodných aplikací k práci na školách; online prostředí</b> – vyhledávání informací, práce s online aplikacemi (2 hod)</li>
            <li className="list-group-item">•	<b>Praktické využití dotykových zařízení</b> – týmová práce v aplikaci Toglic ; program OneNote (2 hod)</li>
            <li className="list-group-item">•	<b>Ukázka práce s dotykovými zařízeními</b> - uchazeč se v posledním bloku aktivně zapojí do práce s dotykovým zařízením. Využije získané teoretické poznatky k sestavení ukázkové hodiny, ve které využije dotyková zařízení (2 hod)</li>
          </ul></div>

      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt50" aria-expanded="false" aria-controls="collapsesnt50">Využití ICT ve výuce - náměty a inspirace pro praxi
      </b> (8 hod, doporučeno pro ZŠ, SŠ, VOŠ)
        <div className="collapse " id="collapsesnt50">  
        <p>Vzdělávací program je zaměřen na využití moderních technologií ve výuce. Semináře je zaměřen jak na obecnější principy využití moderních technologií, tak na využití konkrétních programů, webových stránek a aplikací vhodných pro podporu výuky.Účastníci se seznámí s metodami a postupy, které zdokonalují výklad učiva a zároveň žáky motivují. Pracovat se bude v duchu konstruktivistické pedagogiky.Programy, aplikace a webové stránky jsou voleny tak, aby jejich užití bylo pro školu zdarma (bez kupování licencí).</p>
        <p>Příklady probíraných témat</p>
         <ul className="list-group"><li className="list-group-item">•	Seznámení s problematikou nasazení výukových technologií školního prostředí (pozitiva, negativa a rizika nasazení se kterými je třeba počítat) (1 hodina)</li>
          <li className="list-group-item">•	Seznámení programy a aplikacemi, které oživí každou prezentaci</li>
          <li className="list-group-item">•	Využití pojmových map, sdílených poznámek a dokumentů ve výuce</li>
          <li className="list-group-item">•	Programy a aplikace pro jednoduché vytváření zábavných kvízů</li>
          <li className="list-group-item">•	Použití programu Formulator Tarsia pro tvorbu domin, triomin a jiných her vhodných k oživení procvičovaného učiva</li>
          <li className="list-group-item">•	Příklady různých aplikací, programů či webových stránek s hrami, videi, texty i jinými materiály, které je možné vhodně využít při výuce</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt5" aria-expanded="false" aria-controls="collapsesnt5">Využití ICT ve škole
      </b>(8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ZUŠ, asistenti)
         <div className="collapse " id="collapsesnt5"><ul className="list-group"><li className="list-group-item">•	Seznámení s problematikou nasazení výukových technologií školního prostředí (pozitiva, negativa a rizika nasazení se kterými je třeba počítat) (1 hodina)</li>
          <li className="list-group-item">•	Rozbor dosavadně používaných programů a aplikací účastníků (1 hodina)</li>
          <li className="list-group-item">•	Vybrané nástroje Microsoft Office, které usnadňují práci pedagoga (např. hromadná korespondence, fonty psacích písem) (2 hodiny)</li>
          <li className="list-group-item">•	Google Apps EDU - speciální balík aplikací Google pro školy a jak jej efektivně využít (2 hodiny)</li>
          <li className="list-group-item">•	Vybrané předinstalované aplikace operačního systému Windows vhodné pro práci pedagoga (např. Výstřižky, Panel pro matematický zápis) (1 hodina)</li>
          <li className="list-group-item">•	Typy pro vyhledávání materiálů na internetu (1 hodina)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt6" aria-expanded="false" aria-controls="collapsesnt6">Efektivní využití LibreOffice ve škole
      </b>(8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ZUŠ, asistenti)
        <div className="collapse " id="collapsesnt6">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Writer </b> – formátování písma, odstavců, textu, vícestránkové dokumenty, vkládání a úprava textů z internetu, záhlaví, zápatí, styly, vkládání a úprava obrázků do textu, práce s obrazci, symboly, rozšíření znalostí klávesových zkratek (3 hodiny)</li>
            <li className="list-group-item">•	<b>Calc </b> – seznámení s prostředím Calc, formátování buněk, tabulek, vytváření vlastních řad, vzorce a funkce v Calcu se zaměřením na praktické využití při používání Calcu při evidenci dat i při výuce (2 hodiny)</li>
            <li className="list-group-item">•	<b>Impress </b> – pravidla prezentace, práce se snímky, vkládání obrázků, objektů, využití šablon, motivů, příprava pro tisk (2 hodiny)</li>
            <li className="list-group-item">•	<b>Draw </b> – seznámení s prostředím pro tvorbu náčrtů, plakátů a mnoha dalších typů dokumentu, manipulace s objekty, ořezávání objektů, seskupování objektů (1 hodina)</li>
          </ul></div>

      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt7" aria-expanded="false" aria-controls="collapsesnt7">Efektivní využití Google dokumentů ve škole
      </b>(8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ZUŠ, asistenti)
           <div className="collapse " id="collapsesnt7"><ul className="list-group"><li className="list-group-item">•	<b>Dokumenty </b> – formátování písma, odstavců, textu, vícestránkové dokumenty, vkládání a úprava textů z internetu, záhlaví, zápatí, styly, vkládání obrázků a nákresů do textu, práce s tabulkou, speciálními znaky, hlasové zadávání, rozšíření znalostí klávesových zkratek (3 hodiny)</li>
          <li className="list-group-item">•	<b>Tabulky </b> – seznámení s prostředím tabulek, formátování buněk, tabulek, vytváření vlastních řad, vzorce a funkce se zaměřením na praktické využití při evidenci dat i při výuce (2 hodiny)</li>
          <li className="list-group-item">•	<b>Prezentace </b> – pravidla prezentace, práce se snímky, vkládání různých typů objektů (obrázky, diagramy aj.), využití motivů, příprava pro tisk (2 hodiny)</li>
          <li className="list-group-item">•	<b>Formuláře </b> – vytváření online formulářů a kvízů (1 hodina)</li>
        </ul></div>

      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt8" aria-expanded="false" aria-controls="collapsesnt8">Distanční výuka – formy a metody práce s žáky on-line
      </b>(8 hod, akreditováno pro SŠ, VOŠ, ZŠ, ZUŠ)
         <div className="collapse " id="collapsesnt8"><ul className="list-group">
          <li className="list-group-item">•	<b>Programy využitelné při on-line výuce </b> - Skype, Jitsi Meet, Zoom, MS Teams a další (2 hod)</li>
          <li className="list-group-item">•	<b>Využití webových stránek sloužící k výuce on-line</b> (1 hod)</li>
          <li className="list-group-item">•	<b>MS PowerPoint </b> - pravidla prezentace, práce se snímky, textovými poli, vkládání obrázků, objektů, využití šablon, motivů, možnosti efektů, příprava pro tisk, dodržování autorství – obrázky s volnou licencí (2 hod)</li>
          <li className="list-group-item">•	<b>Jak komunikovat s žáky on-line</b> (1 hod)</li>
          <li className="list-group-item">•	<b>Praktická cvičení </b> – tvorba prezentací účastníků s jednotlivými prvky prezentace a praktické využití jednotlivých nástrojů k distančnímu učení (2 hod)</li>
        </ul></div>

      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt9" aria-expanded="false" aria-controls="collapsesnt9">Jak na distanční výuku?
      </b>(8 hod, akreditováno pro SŠ, VOŠ, ZŠ, ZUŠ)
        <div className="collapse " id="collapsesnt9"><ul className="list-group"><li className="list-group-item">•	Software využitelný při on-line výuce (2 hodiny)</li>
          <li className="list-group-item">•	Využití webových stránek sloužící k výuce on-line (1 hodina)</li>
          <li className="list-group-item">•	Prezi - pravidla prezentace, práce se snímky, textovými poli, vkládání obrázků, objektů, využití šablon, motivů, možnosti efektů, sdílení (2 hodiny)</li>
          <li className="list-group-item">•	Jak komunikovat s žáky on-line (1 hodina)</li>
          <li className="list-group-item">•	Praktická cvičení  – tvorba prezentací účastníků s jednotlivými prvky prezentace, praktické využití jednotlivých nástrojů k distančnímu učení (2 hodiny)</li>
        </ul></div>

      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt10" aria-expanded="false" aria-controls="collapsesnt10">Základy práce s MS Office a jejich využití na školách
      </b>(8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
        <div className="collapse " id="collapsesnt10">
          <ul className="list-group"><li className="list-group-item">•	<b>MS Office 365 </b> – představení prostřední MS Office 365 z pohledu zefektivnění práce (1,5 hod)</li>
            <li className="list-group-item">•	<b>MS Office Word </b> – formátování písma, odstavců, textu, vícestránkové dokumenty, vkládání a úprava textů z internetu, záhlaví, zápatí, styly, vkládání a úprava obrázků do textu, práce s obrazci, symboly, rozšíření znalostí klávesových zkratek, úprava dlouhých strukturovaných textů, správná citace textů podle normy ISO (2,5 hod)</li>
            <li className="list-group-item">•	<b>MS Office Excel </b> – seznámení s prostředím Microsoft Excel, formátování buněk, tabulek, vytváření vlastních řad, vzorce a funkce v Excelu se zaměřením na praktické využití při používání Excelu při evidenci dat i při výuce (1,5 hod)</li>
            <li className="list-group-item">•	<b>MS Office PowerPoint </b> – pravidla prezentace, práce se snímky, textovými poli, vkládání obrázků, objektů, využití šablon, motivů, možnosti efektů, příprava pro tisk, základy správné prezentace, dodržování autorství – obrázky s volnou licencí (2,5 hod)</li>
          </ul>
        </div>
      </LiFile>
    </ul>
  </BlockEx>
</Panel >;

var SSRozvojPodnikavosti: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile>
        <b type="button" data-bs-toggle="collapse" data-bs-target="#collapsessrp1" aria-expanded="false" aria-controls="collapsessrp1">Rozvoj podnikavosti a zásady soukromého podnikání
        </b> (8 hod, akreditováno pro SŠ, VOŠ, v rámci Šablon JAK i pro ZŠ)
        <div className="collapse " id="collapsessrp1"><ul className="list-group"><li className="list-group-item">•	<b>Seznámení se se smyslem a obsahem podnikavosti a soukromého podnikání.</b> Osobnostní předpoklady, schopnosti a dovednosti. Etika. Pozitiva i rizika podnikání. (1 hodina)</li>
          <li className="list-group-item">•	<b>Cesta od vize k dosažení cíle (prakticá cvičení)</b>: motivace k podnikavosti, stanovení reálných cílů, plánování, podnikatelský záměr, navržení produktu, kreativita, kritické myšlení, SMART technika, změny jako součást podnikání, analýza situace, organizace, hodnocení situace, udržení podnikání, konkurenční prostředí, zpětná vazba (3 hodiny)</li>
          <li className="list-group-item">•	<b>Finanční gramotnost</b>: základní terminologie, účetnictví, cash flow, finanční produkty, marketingové nástrahy (1 hodina)</li>
          <li className="list-group-item">•	<b>Práce s časem</b>: sebeřízení, třídění informací dle matice důležité/naléhavé, plánování z pohledu časových možností  (1 hodina)</li>
          <li className="list-group-item">•	<b>Manažerské dovednosti</b>: navazování kontaktů a spolupráce, komunikační dovednosti, organizace práce a vedení týmu, leadership, prezentace firmy, projektu  (1 hodina)</li>
          <li className="list-group-item">•	Fiktivní firmy a projektové vyučování, tvorba projektů  (1 hodina)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsessrp2" aria-expanded="false" aria-controls="collapsessrp2">Výchova k podnikavosti a manažerské dovednosti – 8 hod
</b>(8 hod, akreditováno pro SŠ, VOŠ)
        <div className="collapse " id="collapsessrp2"><ul className="list-group"><li className="list-group-item">•	<b>Úvod do tématu podnikavosti a výchově v podnikání.</b> Etika v podnikání. Fiktivní firma jako projekt. (provázáno celým seminářem) (2 hodiny)</li>
          <li className="list-group-item">•	<b>Stanovení si cíle, oblast podnikání</b>: dobrá vize jako základ, stanovení si reálných cílů a plánování, podnikatelský záměr, SMART technika, změny jako součást podnikání, konkurenční prostředí a udržení podnikání (3 hodiny)</li>
          <li className="list-group-item">•	<b>Manažerské dovednosti</b>: osobnost manažera, navazování kontaktů a spolupráce, komunikační dovednosti, organizace práce a vedení týmu, leadership, týmové role nejen zaměstnanců prezentace firmy, projektu (3 hodiny)</li>
        </ul></div>
      </LiFile>
    </ul>
  </BlockEx>
</Panel>;

var SSKarierovePoradenstvi: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile>
        <b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesskp1" aria-expanded="false" aria-controls="collapsesskp1">Role pedagoga v karierovém poradenství – 8 hodin</b>(8 hod, akreditováno pro SŠ, VOŠ, ZŠ)
        <div className="collapse border rounded" id="collapsesskp1">
          <div className="m-3">
            <b>Teoretická část</b>   (2 vyučovací hodiny)<br />
            a)	Základní principy a postupy karierního poradenství<br />
            b)	Přehled moderních technik vedení rozhovorů  <br />
            <b>Praktická část</b> (6 vyučovacích hodin)<br />
            Komunikační dovednosti pedagoga potřebné k vedení koučovacího rozhovoru s možností následné aplikace ve výuce či poradenském rozhovoru.<br />
            Jedná se o aktivity zaměřené na:<br />
            •	sebepoznávací techniky pro ujasnění silných stránek a prostoru pro rozvoj žáka/studenta;<br />
            •	rozvoj individuálních komunikačních dovedností pedagoga s důrazem na využití vnitřní motivace v praxi;<br />
            •	vedení motivačních rozhovorů, aktivního naslouchání, poskytování a přijímání pozitivní zpětné vazby i konstruktivní kritiky;<br />
          </div>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesskp2" aria-expanded="false" aria-controls="collapsesskp2">Žák nadaný a mimořádně nadaný, možnosti jeho rozvoje na SŠ
      </b>(8 hod, akreditováno pro SŠ, VOŠ)
         <div className="collapse border rounded " id="collapsesskp2">
          <div className="m-3">
            <b>LEGISLATIVNÍ RÁMEC</b><br />
            •	Nová legislativa - Školský zákon a Vyhláška 27/2016 k rozvoji nadaných a mimořádně nadaných žáků. Vymezení základních pojmů nadání. RVP pro gymnázia a daný typ střední školy v kontextu s rozvoje nadání. (1 hodina)<br />
            <b>ZÁKLADNÍ POJMY</b><br />
            •	Základní pojmy z hlediska psychologické diagnostiky. Typologie nadání z hlediska psychologie. Typologie nadaných z hlediska projevů chování (1 hodina)<br />
            •	Možnosti a význam pedagogické diagnostiky, ukázka diagnostických metod. (1 hodina)<br />
            <b>PRINCIPY PRÁCE S NADANÝM A MIMOŘÁDNĚ NADANÝM ŽÁKEM</b><br />
            •	Charakteristické znaky osobitosti nadaných a mimořádně nadaných žáků. Odlišnosti ve vnímání a zpracování podnětů, v myšlení a prožívání.  Seznámení s různými přístupy k rozvoji nadání (1 hodina)<br />
            •	Základní principy v práci s nadanými a mimořádně nadanými žáky, případně s žáky s dvojí výjimečností. Možnosti jejich dalšího rozvoje rozumových schopností jako i jejich sociálně emočních kompetencí v rámci daného stupně vzdělávání. (1 hodina)<br />
            •	IVP, úpravy vzdělávacích obsahů a výstupů. Možnosti hodnocení žáků nadaných a mimořádně nadaných. Seznámení s terminologií, její aplikace v praxi. Sumativní, formativní hodnocení, autonomní, heteronomní hodnocení (2 hodiny)<br />
            <b>Téma –  UKÁZKA INPIRATIVNÍCH ÚLOH</b><br />
            •	Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání. (1 hodina)<br />
          </div>
        </div>

      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesskp3" aria-expanded="false" aria-controls="collapsesskp3">Žák nadaný a mimořádně nadaný, možnosti jeho rozvoje-webinář
      </b>(8 hod, akreditováno pro SŠ, VOŠ, ZŠ)
        <div className="collapse  border rounded" id="collapsesskp3">
          <div className="m-3">
            <b>Blok 1 (1 vyučovací hodina – 45 minut)</b><br />
            Téma – Legislativní rámec <br />
            Nová legislativa - Školský zákon a Vyhláška 27/2016 k rozvoji nadaných a mimořádně nadaných žáků. Vymezení základních pojmů nadání.<br />
            RVP pro daný typ školy v kontextu s rozvoje nadání.<br />

            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Základní pojmy<br />
            Základní pojmy z hlediska psychologické diagnostiky. <br />
            Typologie nadání z hlediska psychologie. Typologie nadaných z hlediska projevů chování.<br />
            Možnosti a význam pedagogické diagnostiky, ukázka diagnostických metod.<br />

            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Principy práce s nadaným a mimořádně nadaným žákem 1. část<br />
            -	Charakteristické znaky osobitosti nadaných a mimořádně nadaných žáků. Odlišnosti ve vnímání a zpracování podnětů, v myšlení a prožívání. <br />
            -	Seznámení s různými přístupy k rozvoji nadání <br />
            -	Základní principy v práci s nadanými a mimořádně nadanými žáky, případně s žáky s dvojí výjimečností. Možnosti jejich dalšího rozvoje rozumových schopností jako i jejich sociálně emočních kompetencí v rámci daného stupně vzdělávání.<br />

            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Principy práce s nadaným a mimořádně nadaným žákem 2. část<br />
            IVP, úpravy vzdělávacích obsahů a výstupů. <br />
            Možnosti hodnocení žáků nadaných a mimořádně nadaných. Seznámení s terminologií, její aplikace v praxi. <br />
            Sumativní, formativní hodnocení, autonomní, heteronomní hodnocení.<br />

            <b>Blok 5 (1 vyučovací hodina – 45 minut)</b><br />
            Téma – Ukázka inspirativních úloh<br />
            Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání. (1 hodina)<br />
          </div>
        </div>
      </LiFile>
    </ul>
  </BlockEx>
</Panel >;

var SSWellBeing: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>

  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb1" aria-expanded="false" aria-controls="collapseswb1">Wellbeing, cesta k harmonizaci vztahů ve škole
      </b>(8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
        <div className="collapse " id="collapseswb1"><ul className="list-group"><li className="list-group-item">•	<b>Co je wellbeing </b> – klíčové aspekty tvoření „zdravé školy“ (0,5 hod)</li>
          <li className="list-group-item">•	<b>Jaká je situace v naší škole? </b> – analýza současného prostředí a klíčové očekávané změny – projektivní technika, týmový workshop - analýza výstupů – návrhy změn (1,5 hod)</li>
          <li className="list-group-item">•	<b>Kognitivní zkreslení </b> – kognitivně behaviorální model člověka v pedagogické praxi – realita vs. její vidění (1 hod)</li>
          <li className="list-group-item">•	<b>Osobnostní diagnostika </b> – Jak zacházím se svými emocemi – sebepoznávací dotazník, vyhodnocení – souvislosti do reality mé role ve škole (1 hod)</li>
          <li className="list-group-item">•	<b>Aspekty vytváření wellbeingu v prostředí školy</b> a role jednotlivých typů pedagogických pracovníků (1 hod)</li>
          <li className="list-group-item">•	<b>7 zdravých vstupů do našeho těla a mysli </b> – osobní analýza a mapování – diskuse (1 hod)</li>
          <li className="list-group-item">•	<b>Náš pedagogický sbor a společné vytváření „Wellbeing prostředí“ </b> – osobní zodpovědnost vs. iluze týmové (ne)zodpovědnosti – od představ k realitě, jak to udělat v naší škole (1, 5 hod)</li >
          <li className="list-group-item">•	<b>Závěr programu </b> – diskuse, sdílení, otázky a odpovědi (0,5 hod)</li>
        </ul ></div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb1111" aria-expanded="false" aria-controls="collapseswb1111">Třídní učitel a jeho působení na vytváření třídního kolektivu  </b> (8 hod, doporučeno pro ZŠ, SŠ, VOŠ, asistenti)
         <div className="collapse " id="collapseswb1111">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Téma – třídní učitel v souvislosti</b> s aktuálním znění zákona č. 563/2004 Sb. Zákon o pedagogických pracovnících ve znění účinném od 1. 1. 2024. Vysvětlení pojmů §24d organizační, administrativní činnosti a podpora zdravých, funkčních vztahů mezi žáky aj. (1 hod.)</li>
            <li className="list-group-item">•	<b>Možnosti práce s třídním kolektivem  pro vytváření bezpečného a podnětného prostředí pro vývoj, výchovu a vzdělávání.</b> třídy. (1 hodina)</li>
            <li className="list-group-item">•	<b>Téma - Autenticita pedagoga, sebereflexe pedagoga, sebehodnocení. Kategorie a formy diagnostiky ve školním prostředí</b> - souvislost s úpravou právních předpisů - jak v souvislosti s využitím podpůrného opatření . Pozorování žáků a jeho zaznamenání: analýza získaných poznatků, další nástroje pedagogické diagnostiky, východiska pro nastavení práce s třídním kolektivem, možnosti nastavení podmínek v rámci třídního kolektivu (2 hodiny)</li>
            <li className="list-group-item">•	<b>Téma - Třídní kolektiv, možnosti vedení třídního kolektivu.</b> Základní pravidla pro fungující třídní kolektiv: Cíle práce se třídou, jak najít a nastavit cíl třídnické hodiny /  nastavení struktury třídnické hodiny, co je a není vhodné/, Práce s tvarem třídy /skupiny, dvojice, jednotlivci/, Témata na třídnické hodiny / komunikace, empatie, úcta, respekt…/, Regulace chování ve skupině (2 hodiny)</li>
            <li className="list-group-item">•	<b>Téma – supervize, její význam a cíl.</b> Východiska pro hodnocení : kultura vysokých očekávání, Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky, Sebezkušenostní část vzdělávacího programu. / zaměření na jednotlivé situace, problémy, kauzistiky/ (2 hodiny)</li>
          </ul >
        </div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb1133" aria-expanded="false" aria-controls="collapseswb1133">Třídní učitel a wellbeing </b> (8 hod, doporučeno pro ZŠ, SŠ, VOŠ, asistenti)
         <div className="collapse " id="collapseswb1133">
          <ul className="list-group">
            <li className="list-group-item">•	Praktický vzdělávací program je zaměřen na současně velmi aktuální téma wellbeingu pedagogů a jeho následnou možnou aplikaci při práci se žáky. Zejména v práci třídního učitele by měla být věnována maximální pozornost práci s emocemi a jejich pojmenováváním a vytvoření podnětného prostředí, ve kterém bude žákům přirozené své emoce sdílet. Cílem semináře je zdokonalit kompetence třídních učitelů pedagogů v oblasti wellbeingu.</li>
            <li className="list-group-item">•	Obsah semináře je rozdělen na dvě části. </li>
            <li className="list-group-item">•	První část se věnuje pojmu fyzický wellbeing, který zahrnuje péče o fyzické tělo. Zaměříme se na zdravý životní styl – pohyb, spánek a na psychohygienická preventivní doporučení – jak správně relaxovat, odpočívat včetně nácviku jednoduchých relaxačních technik. </li>
            <li className="list-group-item">•	Druhá část se bude věnovat  emocionálnímu a psychickému wellbeingu. Naučíme se řídit efektivně svůj čas, plánovat své úkoly, či zbavit se stresu z nedostatku času.</li>
            <li className="list-group-item">•	Závěr programu bude vyhrazen na diskuzi o problematice wellbeingu.</li>
          </ul >
        </div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb101" aria-expanded="false" aria-controls="collapseswb101">Základy krizové intervence pro pedagogy 
      </b>(8 hod, doporučeno pro ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
        <div className="collapse " id="collapseswb101">
          <ul className="list-group">
            <li className="list-group-item">Krizová intervence - krizová intervence (KI) jako forma pomoci nejen pro žáky a studenty, cíle KI (0,5 hod) </li>
            <li className="list-group-item">Situace podpory ve vaší škole - mapování a analýza současného stavu - týmová aktivita, diskuse (0,5 hod) </li>
            <li className="list-group-item">Stabilizace osoby v krizové situaci, techniky - techniky pro práci s akutní krizí např. úzkostný stav - rozpoznání a nácvik technik pedagogy (1,5 hod) </li>
            <li className="list-group-item">Zásady vedení hovoru v rámci KI - struktura hovoru, smysluplná návaznost 6. fází v hovoru - skupinový nácvik pedagogy, simulace (1,5 hod) </li>
            <li className="list-group-item">Poskytování zpětné vazby a práce s emocemi - seznámení se s vyjadřováním emocí a jejich bezpečnou ventilací (1 hod) </li>
            <li className="list-group-item">Práce se třetí osobou - vyžádaná versus nevyžádaná podpora, možnosti pomoci (0,5 hod) </li>
            <li className="list-group-item">Navazující podpora a mapa pomoci - představení odkazů na další podpůrné služby, zdroje pomoci (1 hod) </li>
            <li className="list-group-item">Hranice a kompetence pedagoga v KI, psychohygiena - odpovědnost, prevence vyhoření - sebepoznávací dotazník a vyhodnocení (1 hod) </li>
            <li className="list-group-item">Závěr - sdílení, diskuse (0,5 hod)</li>
        </ul ></div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb123" aria-expanded="false" aria-controls="collapseswb123">Sebepoškozování (příčiny – řešení – péče o žáka) 
      </b>(8 hod, doporučeno pro ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
        <div className="collapse " id="collapseswb123">
          <p>Kurz Vás seznámí s tím, co vše se může skrývat pod pojmem sebepoškozování dětí. Jaké mohou být rizikové faktory sebepoškozování. Upozorníme Vás na signály, které mohou vést k sebepoškozování. Co musíte a můžete udělat? Jak se k nemocnému chovat, kde hledáme pomoc? Dále Vás seznámíme s pojmem CAN (syndrom týraného, zneužívaného a zanedbávaného dítěte), deprivace u dětí v souvislosti se sebepoškozováním.</p>
          <p>Obsah kurzu v bodech</p>
          <ul className="list-group">
              <li className="list-group-item">•	deprivace, psychika deprimovaných dětí, následky deprivace a prevence, deprivace 2 hod.</li>
              <li className="list-group-item">•	syndrom týraného, zneužívaného a zanedbávaného dítěte (CAN) 1 hodina</li>
              <li className="list-group-item">•	sebepoškozování – popis, rozdělení, prevence, rizikové faktory záměrného sebepoškozování a jejich dopady na školní výkon dítěte a na jeho vztahy s vrstevníky i pedagogy 5 hod.</li>
            </ul >
          </div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb11" aria-expanded="false" aria-controls="collapseswb11">Wellbeing, cesta k harmonizaci vztahů ve škole - webinář
</b>(8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
        <div className="collapse border rounded " id="collapseswb11">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Co je wellbeing – klíčové aspekty tvoření „zdravé školy“ (0,5 hod)<br />
            •	Jaká je situace v naší škole? – analýza současného prostředí a klíčové očekávané změny – projektivní technika, týmový workshop - analýza výstupů – návrhy změn (1,5 hod)<br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Kognitivní zkreslení – kognitivně behaviorální model člověka v pedagogické praxi – realita vs. její vidění (1 hod)<br />
            •	Osobnostní diagnostika – Jak zacházím se svými emocemi – sebepoznávací dotazník, vyhodnocení – souvislosti do reality mé role ve škole (1 hod)<br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Aspekty vytváření wellbeingu v prostředí školy a role jednotlivých typů pedagogických pracovníků (1 hod)<br />
            •	7 zdravých vstupů do našeho těla a mysli – osobní analýza a mapování – diskuse (1 hod)<br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Náš pedagogický sbor a společné vytváření „Wellbeing prostředí“ – osobní zodpovědnost vs. iluze týmové (ne)zodpovědnosti – od představ k realitě, jak to udělat v naší škole (1,5 hod)<br />
            •	Závěr programu – diskuse, sdílení, otázky a odpovědi (0,5 hod)<br />
          </div >
        </div >
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb0" aria-expanded="false" aria-controls="collapseswb0">Prevence k zátěžovým situacím ve škole </b> (8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ZUŠ, ŠD, asistenti)
        <div className="collapse " id="collapseswb0"><ul className="list-group"><li className="list-group-item">•	<b>Teoretický úvod do oblasti psychohygieny učitele </b> – zmapování zátěžových situací u pedagogických pracovníků, které vedou k jejich přepracovanosti – teorie + práce skupin (1 hod.)</li>
          <li className="list-group-item">•	<b>Preventivní doporučení </b> - úprava životního stylu, efektivní organizace času, stanovení priorit, schopnost delegování úkolů (komunikace), spánková hygiena, (3 hod.) </li>
          <li className="list-group-item">•	<b>Preventivní doporučení </b> – důležitost aktivního pohybu, relaxace, odpočinku, včetně nácviku jednoduchých relaxačních technik (jednoduché relaxace k uvolnění stresu: a) cviky k uvolnění svalového napětí, b) cviky k uvolnění po práci u počítače, c) cviky uvolňující při napětí v zádech a bolestech hlavy a zad. (3 hod.)</li>
          <li className="list-group-item">•	<b>Regulace dalších zátěžových situací</b> přímo při výkonu práce (1hod) </li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb2" aria-expanded="false" aria-controls="collapseswb2">Jak zvládat stresové situace a nedospět k vyhoření </b> (8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ZUŠ, ŠD, asistenti)
        <div className="collapse " id="collapseswb2"><ul className="list-group"><li className="list-group-item">•	Jak psychický stres ovlivňuje náš výkon, Bournout podle Maslachové, Stres management jako pojem (2 hodiny)</li>
          <li className="list-group-item">•	Vytváření mapy zvládání každodenního stresu (1 hodina)</li>
          <li className="list-group-item">•	Zjištění vlastního přístupu k práci, k sobě i k druhým (praktické cvičení) – (1 hodina)</li>
          <li className="list-group-item">•	Strategie snížení hladiny stresu: zvědomění hodnotového žebříčku, přerámování, změna v plánování, afirmace , relaxace aj. (praktické cvičení ve skupinách) – (2 hodiny)</li>
          <li className="list-group-item">•	Představení asertivního chování jako dobrého způsobu zvládání každodenních stresů (1 hodina)</li>
          <li className="list-group-item">•	Jak nastavit změny, které podporují nevyhoření, sdílení, závěrečné shrnutí (1 hodina)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb3" aria-expanded="false" aria-controls="collapseswb3">Vybrané aspekty emoční a sociální inteligence pedagoga_8 </b> (8 hod, akreditováno pro SŠ, VOŠ, ZŠ)
        <div className="collapse " id="collapseswb3"><ul className="list-group"><li className="list-group-item">•	Teoretické ukotvení tématu emoční inteligence. Vysvětlení jednotlivých aspektů emoční inteligence, EI z pohledu klasicky pojímané inteligence a její role v uplatnění rozumových schopností, Objasnění možností rozvíjet emoční inteligenci: práce a rozhodování pod časových stresem, zvládání negativních emocí, získávání větší odolnosti, resilience vůči zátěži (2 hodiny)</li>
          <li className="list-group-item">•	Teoretické ukotvení tématu sociální inteligence a jejich jednotlivých aspektů. Praktické procvičení vybraných sociálních dovedností, trénink organizačních dovedností, možnosti řešení konfliktních situací, jak rozvíjet sociální inteligenci žáků (1 hodina)</li>
          <li className="list-group-item">•	Teoretické ukotvení tématu sebepoznání, obeznámení s různými přístupy k sebepoznání, vysvětlení opodstatnění a role sebepoznání v každodenním životě a praxi, vysvětlení pojmů a podstaty uvědomování si vlastních předpokladů, pohnutek, myšlenek a následně schopnosti jejich verbalizace a manipulace s nimi. ( 1 hodina)</li>
          <li className="list-group-item">•	Probrání jednotlivých technik sebepoznání a možnosti jejich využití, odhalení užívaní stereotypů ve vlastním prožívání, myšlení a možnosti jejich nahrazení funkčními a efektivnějšími způsoby. Sebehodnocení, sebevědomí, asertivní jednání vůči vlastní osobě, zaměření na cíl a monitorování vlastních sil, energie a motivace ke stanoveným cílům, využití poznatků pozitivní psychologie a práce s vlastním nastavením k hodnocení sebe a jiných, práce s kritikou, zhodnocení jejich negativ a pozitiv (1 hodina)</li>
          <li className="list-group-item">•	Sebekoučink, sebemotivace, analýza vlastních strategií k dosahování cílů, nové možnosti k překonávání překážek, včetně zvládání negativních emocí,  technika GROW (1 hodina)</li>
          <li className="list-group-item">•	Efektivní komunikace se sebou, v rámci rodiny a posléze také v kontextu pedagogické praxe, Jak jinak komunikovat, analýza základních komunikačních chyb, alternativní možnosti komunikace se žáky, možnosti, jak vést žáky k odpovědnosti za své prožívání a jednání (1 hodina)</li>
          <li className="list-group-item">•	Nové možnosti komunikace ve třídě. Řešení emočně vypjatých situací, tvorba repertoáru strategií k řešení složitých a neobvyklých sociálních situací (1 hodina)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb4" aria-expanded="false" aria-controls="collapseswb4">Rozvoj osobnosti pedagoga a zásady efektivní komunikace </b> (8 hod, akreditováno pro SŠ, VOŠ, DM, ZŠ, ŠD, ŠK)
        <div className="collapse " id="collapseswb4"><ul className="list-group"><li className="list-group-item">•	Efektivní komunikace se sebou, v rámci rodiny a posléze také v kontextu pedagogické praxe (3 hodiny)</li>
          <li className="list-group-item">•	Jak jinak komunikovat, analýza základních komunikačních chyb, alternativní možnosti komunikace se žáky, možnosti, jak vést žáky k odpovědnosti za své prožívání a jednání (1 hodina)</li>
          <li className="list-group-item">•	Nové možnosti komunikace ve třídě (1 hodina)</li>
          <li className="list-group-item">•	Řešení emočně vypjatých situací, možnosti řešení, tvorba repertoáru strategií k řešení složitých a neobvyklých sociálních situací. (1 hodina)</li>
          <li className="list-group-item">•	Principy komunikace v souladu s nejnovějšími poznatky psychologie o fungování mozku ( 1 hodina)</li>
          <li className="list-group-item">•	Základy asertivního jednání (1 hodina)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb5" aria-expanded="false" aria-controls="collapseswb5">Osobnostně sociální rozvoj učitele v sebepoznání </b> (8 hod, akreditováno pro SŠ, VOŠ, ZŠ)
        <div className="collapse " id="collapseswb5"><ul className="list-group"><li className="list-group-item">•	Seznámení s principem OSR  – (0,5 hod)</li>
          <li className="list-group-item">•	Rozvoj schopností poznávání . Aktivity zaměřené na sebepoznání vlastního já (já v pohledu pozitivity, negativity…). Já z pohledu vlastností pozitivních i negativních (pohled empatie ve vyjádření 10ti odpovědí - jak se vnímám já, a jak mě vidí ostatní), mé silné a slabé stránky, vlastní způsob jednání a chování, přetvářka, sebereflexe (2 hodiny)</li>
          <li className="list-group-item">•	Sebepoznání a sebepojetí. Aktivity zaměřené na sebepoznání, moje přednosti, představy, schopnosti  - prostor pro hlubší seznámení nejenom se sebou samým v rámci sebepozorování, ale i s ostatními účastníky, a to při vzájemném sdílení tématu (sestavování žebříčku osobního rozvoje) a dovednosti poskytovat druhým konstruktivním způsobem zpětnou vazbu, naslouchat jim a vcítit se do potřeb druhého/druhých. (2 hodiny)</li>
          <li className="list-group-item">•	Seberegulace a sebeorganizace. Aktivity zaměřené na sebepoznání odvíjející se od představ, schopností  - schopností  – kontrola a regulace vlastního chování v situacích „tady a teď“ (cvičení sebekontroly, sebeovládání, rychlého rozhodování – regulace vlastního jednání i prožívání, vůle), schopnosti vlastní seberealizace – uvědomění si vlastní hierarchie hodnot. (2 hodiny)</li >
          <li className="list-group-item">•	Psychohygiena. Aktivity zaměřené na jednoduché relaxační techniky  – a) cviky k uvolnění svalového napětí, b) cviky k uvolnění po práci u počítače, c) cviky uvolňující při napětí v zádech a bolestech hlavy a zad(1, 5 hodiny).</li >
        </ul ></div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb6" aria-expanded="false" aria-controls="collapseswb6">Osobnostní a sociální rozvoj učitele ve zvládání konfliktů </b> (8 hod, akreditováno pro SŠ, VOŠ, ZŠ)
        <div className="collapse " id="collapseswb6"><ul className="list-group"><li className="list-group-item">•	Seznámení s principem OSR (0,5 hodiny)</li>
          <li className="list-group-item">•	Poznávání lidí, mezilidské vztahy. Metody zaměřené na vhodné způsoby komunikace v různých životních situacích, případné řešení neshod či konfliktů s druhými lidmi nenásilným způsobem. Tj. na reakce na základě postojů již získaných; na očekávání, která jsou formována na základě životních zkušeností; na zvládání dovednosti přijímat a poskytovat konstruktivní kritiku, na poznávání typu osobnosti pro úspěšné řešení konfliktu (2 hodiny)</li>
          <li className="list-group-item">•	Řešení problémů a rozhodovací dovednosti. Aktivity zaměřené na mapování vlastních postojů v rámci schématu konfliktu, na způsoby jednání v zátěžových situacích a přístupy ke zvládání konfliktu (kooperace, konfrontace, řešitelský přístup atd.), dovednosti pro řešení problémů a rozhodování z hlediska různých typů konfliktních situací, včetně zvládání krizové komunikace při jednání se žáky i s rodiči/zákonnými zástupci. (5,5 hodiny)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseswb7" aria-expanded="false" aria-controls="collapseswb7">Zásady asertivní a efektivní komunikace – 8 hodin </b> (8 hod, akreditováno pro SŠ, VOŠ, DM, ZŠ, ŠD, ŠK)
        <div className="collapse " id="collapseswb7"><ul className="list-group"><li className="list-group-item">•	Seznámení se s pravidly a technikami komunikace osobní i profesní: cíl, základní stanovisko, kladení otázek a jejich typologie, aktivní naslouchání, změkčovadla, sdělování názoru (2 hodiny)</li>
          <li className="list-group-item">•	Praktická typologie v komunikaci podle D. Forbese Leye (možné cvičení). Námitky a jak na ně vhodně reagovat. (1 hodina)</li>
          <li className="list-group-item">•	Asertivita jako dovednost prosazovat své názory a požadavky při zachování respektu k okolí, možnosti vedení žákům k asertivnímu nenásilnému chování. Asertivní práva a techniky -možný nácvik. (1 hodina)</li>
          <li className="list-group-item">•	Zvládání emocí, zvládání vlastních emocí v komunikaci při emočně náročných situacích nejen ve školním prostředí. (1 hodina)</li>
          <li className="list-group-item">•	Jak rozpoznat manipulaci, druhy manipulací, techniky na zvládání manipulací  - možný nácvik (1 hodina)</li>
          <li className="list-group-item">•	Vedení rozhovoru  – příprava a struktura (1 hodina)</li>
          <li className="list-group-item">•	Neverbální komunikace  – gesta a výrazy s jejich významem. Základy psycholingvistiky a rizikové výrazy. (1 hodina)</li>
        </ul></div>
      </LiFile>
    </ul >
  </BlockEx >
</Panel >;

var SSVyukaCestiny: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesvc1" aria-expanded="false" aria-controls="collapsesvc1">Specifika výuky češtiny jako druhého jazyka
</b>(8 hod, akreditováno pro SŠ, ZŠ, asistenti, výchovní poradci)
        <div className="collapse " id="collapsesvc1"><ul className="list-group">
          <li className="list-group-item">•	<b>vymezení teoretických východisek a terminologického rámce ČJDJ</b>, shod, rozdílů a specifik procesu výuky českého jazyka, českého jazyka jako cizího jazyka a ČJDJ, přesah do výuky všeobecně vzdělávacích a ostatních předmětů ve vyučovacím procesu, provázanost s oblastí mimoškolních aktivit a zájmových činností (nejen) pro žáky cizince (1 hodina);</li>
          <li className="list-group-item">•	<b>uplatňování postkomunikačního přístupu ve výuce ČJDJ</b>, využívání vhodných strategií a didaktických postupů, rozvoj základních řečových dovedností a jazykových kompetencí žáka cizince v procesu jeho přijímání, začleňování a vzdělávání, tj. v prvních dnech a týdnech po zahájení školní docházky v běžné české škole (1,5 hodiny); </li>
          <li className="list-group-item">•	<b>diagnostika jazykové úrovně jedince</b>, postupy pro určení jazykové úrovně žáka cizince (1 hodina);</li>
          <li className="list-group-item">•	<b>komunikace se žákem cizincem</b>, tj. role zvukového plánu jazyka, význam osvojení si správné zvukové podoby češtiny a výslovnosti jako nezbytné podmínky úspěšné komunikace; základní instrukce, fráze a kolokace „pro přežití“ a jejich následné rozšiřování a posilování, rozvoj slovní zásoby; zásady komunikace a vedení výuky bez zprostředkovacího jazyka, vhodné didaktické postupy a pomůcky a postupy (1 hodina);</li>
          <li className="list-group-item">•	<b>práce s kurikulem ČJDJ, tj. jak a co učit </b> – témata vhodná pro začátečníky a mírně pokročilé, konkrétní situace, rozvoj základní slovní zásoby v kontextu interakce, osvojování jazykových dovedností a posilování jazykových kompetencí, stanovení základního cíle a efektivní realizace triády téma – cíl – dovednost; příklady vhodných aktivit (1 hodina)</li>
          <li className="list-group-item">•	<b>význam osvojování si vhodných kompetencí a jazykových prostředků</b>, význam procvičování a správné fixace osvojených jazykových dovedností a kompetencí jako např. osvojování čtení a nácvik psaní u žáků, kteří přicházejí bez dovednosti číst latinku a psát latinkou, spolu s fixací správných pracovních návyků pro čtení a psaní, osvojování a procvičování lexika, gramatiky, pravopisu a komunikačních modelů  v ČJDJ (1 hodina);</li>
          <li className="list-group-item">•	<b>role ČJDJ a její význam ve škole i mimo ni a spolupráce s pedagogickými pracovníky školy</b>, tj. spolupráce s učiteli ostatních předmětů u žáků s na začátku nulovou a v průběhu adaptačního období – prvních týdnů školní docházky s počáteční úrovní znalosti jazyka; doporučení vhodných výukových materiálů v klasické i online podobě se zohledněním věku, konkrétní jazykové úrovně ČJDJ u žáka cizince, zohledňování dalších faktorů; možnosti podpory stran státních institucí, krajských úřadů a zřizovatelů, nestátních neziskových organizací; diskuse a sdílení vlastní praxe lektora a účastníků vzdělávacího programu (1,5 hodiny). </li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesvc2" aria-expanded="false" aria-controls="collapsesvc2">Specifika výuky češtiny jako druhého jazyka - webinář
</b>(8 hod, akreditováno pro SŠ, ZŠ, asistenti, výchovní poradci)
                   <div className="collapse border rounded " id="collapsesvc2">
          <div className="m-3">
            <b>Blok 1 (1 vyučovací hodina)</b><br />
            •	vymezení teoretických východisek a terminologického rámce ČJDJ, shod, rozdílů a specifik procesu výuky českého jazyka, českého jazyka jako cizího jazyka a ČJDJ, přesah do výuky všeobecně vzdělávacích a ostatních předmětů ve vyučovacím procesu, provázanost s oblastí mimoškolních aktivit a zájmových činností (nejen) pro žáky cizince – (1 hodina)<br />
            <b>Blok 2 (1,5 vyučovací hodiny)</b><br />
            •	uplatňování postkomunikačního přístupu ve výuce ČJDJ, využívání vhodných strategií a didaktických postupů, rozvoj základních řečových dovedností a jazykových kompetencí žáka cizince v procesu jeho přijímání, začleňování a vzdělávání, tj. v prvních dnech a týdnech po zahájení školní docházky v běžné české škole – (1,5 hodiny)<br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            •	diagnostika jazykové úrovně jedince, postupy pro určení jazykové úrovně žáka cizince – (1 hodina)<br />
            •	komunikace se žákem cizincem, tj. role zvukového plánu jazyka, význam osvojení si správné zvukové podoby češtiny a výslovnosti jako nezbytné podmínky úspěšné komunikace; základní instrukce, fráze a kolokace „pro přežití“ a jejich následné rozšiřování a posilování, rozvoj slovní zásoby; zásady komunikace a vedení výuky bez zprostředkovacího jazyka, vhodné didaktické postupy a pomůcky a postupy (1 hodina)<br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            •	práce s kurikulem ČJDJ, tj. jak a co učit – témata vhodná pro začátečníky a mírně pokročilé, konkrétní situace, rozvoj základní slovní zásoby v kontextu interakce, osvojování jazykových dovedností a posilování jazykových kompetencí, stanovení základního cíle a efektivní realizace triády téma – cíl – dovednost; příklady vhodných aktivit –( 1hodina)<br />
            •	význam osvojování si vhodných kompetencí a jazykových prostředků, význam procvičování a správné fixace osvojených jazykových dovedností a kompetencí jako např. osvojování čtení a nácvik psaní u žáků, kteří přicházejí bez dovednosti číst latinku a psát latinkou, spolu s fixací správných pracovních návyků pro čtení a psaní, osvojování a procvičování lexika, gramatiky, pravopisu a komunikačních modelů  v ČJDJ – (1 hodina)<br />
            <b>Blok 5 (1,5 vyučovací hodiny)</b><br />
            •	role ČJDJ a její význam ve škole i mimo ni – spolupráce s pedagogickými pracovníky školy, tj. spolupráce s učiteli ostatních předmětů u žáků s na začátku nulovou a v průběhu adaptačního období – prvních týdnů školní docházky s počáteční úrovní znalosti jazyka; doporučení vhodných výukových materiálů v klasické i online podobě se zohledněním věku, konkrétní jazykové úrovně ČJDJ u žáka cizince, zohledňování dalších faktorů; možnosti podpory stran státních institucí, krajských úřadů a zřizovatelů, nestátních neziskových organizací; diskuse a sdílení vlastní praxe lektora a účastníků vzdělávacího programu – (1,5 hodiny)
</div></div>

      </LiFile>

    </ul >
  </BlockEx >
</Panel >;

var SSInkluzeCizinci: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>

  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesic0" aria-expanded="false" aria-controls="collapsesic0">Jak pracovat se žáky s odlišným mateřským jazykem  </b> (8 hod, akreditováno pro SŠ, VOŠ, ZŠ, asistenti)
                                <div className="collapse " id="collapsesic0"><ul className="list-group">
          <li className="list-group-item">•	Téma: Společné vzdělávání na základních a středních školách a možnosti vzdělávání žáků s OMJ na těchto školách v souladu s platnými přepisy-Vyhláška 27/2016 Sb., ve znění pozdějších předpisů.
Vymezení pojmů: odlišné kulturní a jiných životní podmínky: vymezení pojetí „kultura“ a „životní“, hledání terminologických ekvivalentů.
Struktura podpůrných opatření, možnosti podpůrných opatření se zaměřením na žáky s OMJ.(2 hodiny)
</li>
          <li className="list-group-item">•	Téma: Možnosti pedagogické diagnostiky
- terminologie „vzdělání“ a „vzdělávání „
- kompetence pedagogického pracovníka v procesu vzdělávání.
- sociální a společenské otázky v procesu školního vzdělávání žáků s OMJ
- charakteristika žáka, vývoj základních schopností a dovedností
- specifika daného věku, principy a příčiny chování žáků v závislosti na prostředí.
- základní možnosti pedagogické diagnostiky, vhodnost pro stanovení cílů, metod a forem práce v rámci prvního stupně podpůrného opatření.
- stanovení cílů, způsob konkretizace cílů s dopadem na využití potenciálů žáka s OMJ.
- komunikace a porozumění žáku s OMJ
/ respekt k nedokonalé znalosti českého jazyka,  komunikace, možnosti monitorování a  hodnocení plnění výstupů jednotlivých předmětů daného ročníku (2 hodiny)
</li>
          <li className="list-group-item">•	Téma: Práce s PLPP, případně IVP, hodnocení žáka, metody a formy práce.
Využití pedagogické diagnostiky ve školním prostředí, úprava právních předpisů - v souvislosti s využitím podpůrného opatření.
analýza získaných poznatků
východiska pro nastavení práce se žákem s OMJ
tvoření výchovného plánu, PLPP , možnosti individualizace v rámci PO1
Posílení podpůrných opatření, jestliže se PO 1 jeví jako nedostačující, možnosti ŠPZ /PPP, SPC/.
práce s doporučením ŠPZ pro vzdělávání žáka se speciálně vzdělávacími potřebami a OMJ
Metodická východiska v práci učitele: zásady v edukačním procesu- stereotyp, rutinní činnosti, opakování, rozvoj paměti, přiměřenost, od konkretizace po abstrakci, zpětná vazba atd  (2 hodiny)
</li>
          <li className="list-group-item">•	Téma: Práce s metodickým materiálem
Příklady dobré praxe – kazuistiky. Spolupráce pedagogických pracovníků a členů školního poradenského pracoviště.
Metodický materiál pro zjištění porozumění českému jazyku (aktivní a pasivní znalosti jazyka).
Ukázka metodického materiálu, pomůcek, odkazy na doporučenou literaturu. (2 hodiny)
</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesic01" aria-expanded="false" aria-controls="collapsesic01">Jak pracovat se žákem s odlišnými kulturními podmínkami
      </b>(8 hod, akreditováno pro SŠ, VOŠ, DM, ZŠ, ŠD, asistenti)
        <div className="collapse " id="collapsesic01"><ul className="list-group">
          <li className="list-group-item">•	Téma - teoretická část. Společné vzdělávání na základních a středních školách a možnosti vzdělávání žáků s OMJ na těchto školách v souladu s platnými přepisy-Vyhláška 27/2016 Sb., ve znění pozdějších předpisů. Vymezení pojmů: odlišné kulturní a jiných životní podmínky: vymezení pojetí „kultura“ a „životní“, hledání terminologických ekvivalentů. Struktura podpůrných opatření, možnosti podpůrných opatření se zaměřením na žáky s OMJ a jinými životními a kulturními podmínkami. (2 hodiny)</li>
          <li className="list-group-item">•	Téma - možnosti pedagogické diagnostiky. terminologie „vzdělání“ a „vzdělávání „ kompetence pedagogického pracovníka v procesu vzdělávání.  sociální a společenské otázky v procesu školního vzdělávání žáků s OMJ, charakteristika žáka, vývoj základních schopností a dovedností, specifika daného věku, principy a příčiny chování žáků v závislosti na prostředí, ve kterém žák vyrůstal a ovlivnilo jeho chování ve školním prostředí, základní možnosti pedagogické diagnostiky, vhodnost pro stanovení cílů, metod a forem práce v rámci prvního stupně podpůrného opatření, stanovení cílů, způsob konkretizace cílů s dopadem na využití potenciálů žáka s OMJ, komunikace a porozumění žáku s OMJ, / respekt, komunikace, hodnotový systém, individualita, empatie, stres a reakce na něj, úcta, budování pravidel osobních i skupinových a jejich dodržování, …/ (2 hodiny).</li>
          <li className="list-group-item">•	Téma - práce s PLPP, případně IVP, hodnocení žáka, metody a formy práce. Využití pedagogické diagnostiky ve školním prostředí, úprava právních předpisů - v souvislosti s využitím podpůrného opatření, analýza získaných poznatků, východiska pro nastavení práce se žákem s OMJ, tvoření výchovného plánu, PLPP, IVP, práce s doporučením pro žáka se speciálně vzdělávacími potřebami a OMJ. Metodická východiska v práci učitele: zásady v edukačním procesu- stereotyp, rutinní činnosti, opakování, rozvoj paměti, přiměřenost, od konkretizace po abstrakci, zpětná vazba atd. (2 hodiny)</li>
          <li className="list-group-item">•	Téma- práce s metodickým materiálem. Příklady dobré praxe – kazuistiky. Metodický materiál pro zjištění porozumění českému jazyku (aktivní a pasivní znalosti jazyka). Ukázka metodického materiálu, pomůcek, odkazy na doporučenou literaturu. (2 hodiny)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesic1" aria-expanded="false" aria-controls="collapsesic1">Klima třídy se žáky s odlišným mateřským jazykem
      </b>(8 hod, akreditováno pro SŠ, VOŠ, ZŠ, asistenti)
        <div className="collapse " id="collapsesic1"><ul className="list-group">
          <li className="list-group-item">•	<b>Téma – Základní sociální potřeby žáků s OMJ, jinými životními a kulturními potřebami</b>  Základní sociální potřeby: Potřeba místa, bezpečí, podnětu, potřeba péče, výživy, dále potřeby podpory a sociálních limitů. Důsledky nenaplňování potřeb a jejich vliv na chování žáků v rámci dané třídy, školy. Dopady procesu psychického a fyzického vývoje a spojené se změnou životních podmínek a jejich vliv na chování žáka v podmínkách školy, přístup k pravidlům, normám a jejich respektování. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – žák s OMJ a jinými životními a kulturními podmínkami, vliv na klima třídy.</b>  Pravidla a zásady vedení třídního kolektivu. Práce s tvarem třídy – konformita a normy konkrétního třídního kolektivu – příprava, hranice, rizika a zdroje. Role žáka ve třídě, zapojení žáka s OMJ do třídního kolektivu. Posilování pozitivních vazeb. Regulace chování ve skupině. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – Práce s pocity žáků s OMJ a jako prevence kázeňských problémů.</b>  Možnosti diferencovaného vzdělávání. Školní prostředí a střídání rolí. Možnosti chování, projevy žáků, zapojení do školního kolektivu, řešení projevu „odlišnosti“ s respektováním odlišných projevů, norem, postojů s cílem adaptace na nové podmínky školy. (2 hodiny).</li>
          <li className="list-group-item">•	<b>Téma – praktické ukázky, práce s třídním kolektivem, kaziustikami.</b>  Komunikace se žákem s OMJ. Pro praktické ukázky bude využita metoda hraní rolí, vedení rozhovoru a další interaktivní techniky a zásady práce v rámci třídního kolektivu za účelem zapojení žáků s OMJ a jinými životními a kulturními podmínkami. Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky, zaměření na jednotlivé situace, problémy, vlastní kazuistiky. (2 hodiny)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesic2" aria-expanded="false" aria-controls="collapsesic2">Klima třídy se žáky s odlišným mateřským jazykem -webinář
      </b>(8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
        <div className="collapse border rounded " id="collapsesic2">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Základní sociální potřeby žáků s OMJ, jinými životními a kulturními potřebami<br />
            Základní sociální potřeby:<br />
            Potřeba místa, bezpečí, podnětu,<br />
            potřeba péče, výživy, dále potřeby podpory a sociálních limitů.<br />
            Důsledky nenaplňování potřeb a jejich vliv na chování žáků v rámci dané třídy, školy.<br />
            Dopady procesu psychického a fyzického vývoje a spojené se změnou životních podmínek a jejich vliv na chování žáka v podmínkách školy, přístup k pravidlům, normám a jejich respektování.<br />
            <br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – žák s OMJ a jinými životními a kulturními podmínkami, vliv na klima třídy.<br />
            Pravidla a zásady vedení třídního kolektivu.<br />
            Práce s tvarem třídy – konformita a normy konkrétního třídního kolektivu – příprava, hranice, rizika a zdroje.<br />
            Role žáka ve třídě, zapojení žáka s OMJ do třídního kolektivu. Posilování pozitivních vazeb.<br />
            Regulace chování ve skupině.<br />
            <br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Práce s pocity žáků s OMJ a jako prevence kázeňských problémů.<br />
            Možnosti diferencovaného vzdělávání<br />
            Školní prostředí a střídání rolí.<br />
            Možnosti chování, projevy žáků, zapojení do školního kolektivu, řešení projevu „odlišnosti“ s respektováním odlišných projevů, norem, postojů s cílem adaptace na nové podmínky školy.<br />
            <br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – praktické ukázky, práce s třídním kolektivem, kaziustikami<br />
            Komunikace se žákem s OMJ.<br />
            Pro praktické ukázky bude využita metoda hraní rolí, vedení rozhovoru a další interaktivní techniky a zásady práce v rámci třídního kolektivu za účelem zapojení žáků s OMJ a jinými životními a kulturními podmínkami.<br />
            Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky, zaměření na jednotlivé situace, problémy, vlastní kazuistiky.<br />
          </div>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesic3" aria-expanded="false" aria-controls="collapsesic3">Jak pracovat se žákem s odlišnými kulturními podmínkami–SŠ 8
      </b>(8 hod, akreditováno pro SŠ, VOŠ, asistenti)
        <div className="collapse " id="collapsesic3"><ul className="list-group">
          <li className="list-group-item">•	Téma - teoretická část. Společné vzdělávání na středních školách a možnosti vzdělávání žáků s OMJ na těchto školách v souladu s platnými přepisy-Vyhláška 27/2016 Sb., ve znění pozdějších předpisů. Vymezení pojmů: odlišné kulturní a jiných životní podmínky: vymezení pojetí „kultura“ a „životní“, hledání terminologických ekvivalentů. Struktura podpůrných opatření, možnosti podpůrných opatření se zaměřením na žáky s OMJ a jinými životními a kulturními podmínkami. (2 hodiny)</li>
          <li className="list-group-item">•	Téma - možnosti pedagogické diagnostiky. terminologie „vzdělání“ a „vzdělávání „ kompetence pedagogického pracovníka v procesu vzdělávání.  sociální a společenské otázky v procesu školního vzdělávání žáků s OMJ, charakteristika žáka, vývoj základních schopností a dovedností, specifika daného věku, principy a příčiny chování žáků v závislosti na prostředí, ve kterém žák vyrůstal a ovlivnilo jeho chování ve školním prostředí, základní možnosti pedagogické diagnostiky, vhodnost pro stanovení cílů, metod a forem práce v rámci prvního stupně podpůrného opatření, stanovení cílů, způsob konkretizace cílů s dopadem na využití potenciálů žáka s OMJ, komunikace a porozumění žáku s OMJ, / respekt, komunikace, hodnotový systém, individualita, empatie, stres a reakce na něj, úcta, budování pravidel osobních i skupinových a jejich dodržování, …/ (2 hodiny).</li>
          <li className="list-group-item">•	Téma - práce s PLPP, případně IVP, hodnocení žáka, metody a formy práce. Využití pedagogické diagnostiky ve školním prostředí, úprava právních předpisů  - v souvislosti s využitím podpůrného opatření, analýza získaných poznatků, východiska pro nastavení práce se žákem s OMJ, tvoření výchovného plánu, PLPP, IVP, práce s doporučením pro žáka se speciálně vzdělávacími potřebami a OMJ. Metodická východiska v práci učitele: zásady v edukačním procesu - stereotyp, rutinní činnosti, opakování, rozvoj paměti, přiměřenost, od konkretizace po abstrakci, zpětná vazba atd. (2 hodiny)</li>
          <li className="list-group-item">•	Téma - práce s metodickým materiálem. Příklady dobré praxe  – kazuistiky. Metodický materiál pro zjištění porozumění českému jazyku (aktivní a pasivní znalosti jazyka). Ukázka metodického materiálu, pomůcek, odkazy na doporučenou literaturu. (2 hodiny)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesic4" aria-expanded="false" aria-controls="collapsesic4">Jak ve škole asertivně pracovat se žáky cizinci
      </b>(8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
        <div className="collapse border rounded " id="collapsesic4">
          <div className="m-3">
            <b>1.	část – Asertivní chování – 3 hodiny</b><br />
            a)	asertivní techniky–vysvětlení a nácvik jednotlivých asertivních technik v rámci komunikace s rodičem cizincem, způsoby jednání, zvládání  emocí<br />
            b)	obrana před manipulací ze strany rodičů cizinců, přijatelný kompromis mezi oběma stranami, přijetí a poskytování konstruktivní kritiky, přijetí a poskytování pochvaly a vyjádření uznání, účinnost pochvaly<br />
            <br />
            <b>2.	část – Žák cizinec – 5 hod</b><br />
            a)	úvod do problematiky vzdělávání žáků s OMJ – typy žáků, vzorce chování, obtíže při osvojování českého jazyka, …<br />
            b)	vzdělávání cizinců z pohledu právního rámce – Školský zákon, Vyhláška č.27/2016 Sb, Metodické doporučení MŠMT, ..<br />
            c)	metodická podpora při vzdělávání žáků cizinců - zaměření na inkluzi žáka cizince do školního prostředí<br />
          </div></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesic5" aria-expanded="false" aria-controls="collapsesic5">Jak ve škole asertivně pracovat se žáky cizinci - webinář
      </b>  (8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
        <div className="collapse border rounded " id="collapsesic5">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Asertivní chování, 1. část<br />
            Asertivní techniky–vysvětlení a nácvik jednotlivých asertivních technik v rámci komunikace s rodičem cizincem, způsoby jednání, zvládání  emocí<br />
            <br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Asertivní chování, 2. část<br />
            Obrana před manipulací ze strany rodičů cizinců, přijatelný kompromis mezi oběma stranami, přijetí a poskytování konstruktivní kritiky, přijetí a poskytování pochvaly a vyjádření uznání, účinnost pochvaly.<br />
            <br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Žák cizinec, 1. část<br />
            Úvod do problematiky vzdělávání žáků s OMJ – typy žáků, vzorce chování, obtíže při osvojování českého jazyka, … <br />
            Vzdělávání cizinců z pohledu právního rámce – Školský zákon, Vyhláška č.27/2016 Sb, Metodické doporučení MŠMT, ..<br />
            <br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Žák cizinec, 2. část<br />
            Metodická podpora při vzdělávání žáků cizinců - zaměření na inkluzi žáka cizince do školního prostředí<br />
          </div></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesic6" aria-expanded="false" aria-controls="collapsesic6">Začlenění žáka cizince do třídního kolektivu
      </b>  (8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
        <div className="collapse border rounded " id="collapsesic6">
          <div className="m-3">
            <b>Teoretická část</b>   (3 vyučovací hodiny)<br />
            a)  Principy práce třídního učitele (TU) se třídou (2h) –<br />
            •	klima třídy, její sociální struktura, vztah atmosféry a klimatu školní třídy<br />
            •	pedagogická diagnostika pro utváření pozitivního klimatu třídy, mapování vztahů<br />
            b)  Třídnické práce(1h)<br />
            •	struktura a obsah třídnických hodin (TH)<br />
            •	význam skupinové a týmové spolupráce<br />
            <b>Praktická část</b> (5 vyučovacíh hodin)<br />
            Metody osobností a sociální výchovy k rozvoji etických a sociálních dovedností žáků, které jsou cíleně zaměřené na začleňování žáků cizinců do třídního kolektivu<br />
            Nabídka aktivit je z vlastního zkušenostního dvouletého výcviku či z doporučených publikací - doc. PhDr. Soni Hermochové, CSc., doc. PhDr. Josefa Valenty, CSc., Doc. PhDr. Hany Kasíkové, CSc., Mgr. Petra Kříže a dalších):<br />
            •	aktivity seznamovací a "rozehřívací" (ledolamky)<br />
            •	aktivity pro rozvoj vzájemné důvěry, podpory a pomoci, empatie a návazně vytváření bezpečného prostředí<br />
            •	aktivity vedoucí k sebepoznání, hodnocení a sebehodnocení<br />
            •	aktivity rozvíjející komunikaci (verbální i neverbální)<br />
            •	interaktivní hry založené na spolupráci ve skupině<br />
            •	techniky při řešení interpersonálních konfliktů – rolové hry, dramatika<br />
          </div></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesic7" aria-expanded="false" aria-controls="collapsesic7">Začlenění žáka cizince do třídního kolektivu – webinář
      </b>  (8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
        <div className="collapse border rounded " id="collapsesic7">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma: Principy práce třídního učitele (TU) se třídou<br />
            •	klima třídy, její sociální struktura, vztah atmosféry a klimatu školní třídy<br />
            •	pedagogická diagnostika pro utváření pozitivního klimatu třídy, mapování vztahů<br />
            <br />
            <b>Blok 2 (1 vyučovací hodina – 45 minut)</b><br />
            Téma:   Třídnické práce<br />
            •	struktura a obsah třídnických hodin (TH)<br />
            •	význam skupinové a týmové spolupráce<br />
            <br />
            Následují metody osobností a sociální výchovy k rozvoji etických a sociálních dovedností žáků, které jsou cíleně zaměřené na začleňování žáků cizinců do třídního kolektivu<br />
            Nabídka námětů aktivit, které budou účastníkům prezentovány na webináři jsou vybrány z vlastního zkušenostního dvouletého výcviku či z doporučených publikací - doc. PhDr. Soni Hermochové, CSc., doc. PhDr. Josefa Valenty, CSc., Doc. PhDr. Hany Kasíkové, CSc., Mgr. Petra Kříže a dalších):<br />
            Všechny aktivity jsou volené a zaměřené pro vytvoření pozitivní atmosféry ve třídě.<br />
            U každé aktivity proběhne nejen podrobné vysvětlení cíle, obsahu, reflexe, ale důraz bude kladen i na reflexi s účastníky.<br />
            <br />
            <b>Blok 3 (1 vyučovací hodina – 45 minut)</b><br />
            Téma:   praktická část 1<br />
            •	aktivity seznamovací a "rozehřívací" (ledolamky)<br />
            •	aktivity pro rozvoj vzájemné důvěry, podpory a pomoci, empatie a návazně vytváření bezpečného prostředí<br />
            <br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma:   praktická část 2<br />
            •	aktivity vedoucí k sebepoznání, hodnocení a sebehodnocení<br />
            •	aktivity rozvíjející komunikaci (verbální i neverbální)<br />
            <br />
            <b>Blok 5 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma:   praktická část 3<br />
            •	interaktivní hry založené na spolupráci ve skupině<br />
            •	techniky při řešení interpersonálních konfliktů – rolové hry, dramatika<br />

          </div></div>
      </LiFile >

    </ul>
  </BlockEx>
</Panel >;

var SSOstatniInkluze: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt001" aria-expanded="false" aria-controls="collapsesnt001">Asistent pedagoga - účelné nastavení podpůrného opatření </b> (8 hod, akreditováno pro MŠ, ZŠ, SŠ, ŠD a asistenty pedagoga)
        <div className="collapse " id="collapsesnt001"><ul className="list-group"><li className="list-group-item"></li>
          <li className="list-group-item">  •	Legislativní ukotvení podpůrného opatření „asistent pedagoga“, nové  informace v pojetí práce asistenta pedagoga, definice pojmu asistent pedagoga  (asistent pedagoga, školní asistent, osobní asistent) (2 hodiny)</li>
          <li className="list-group-item">•	Legislativní rámec pracovní pozice asistenta pedagoga, kvalifikační  předpoklady asistenta pedagoga, výběrové řízení, motivační pohovor, ekonomické  zajištění pozice asistenta pedagoga, zařazení asistenta pedagoga do platové  třídy dle katalogu prací (1 hodina)</li>
          <li className="list-group-item">•	Pracovní náplň asistenta pedagoga, kompetence ve vztahu k pedagogům,  chyby v práci asistentů, chyby ze strany učitele, osobnost asistenta pedagoga,  vztah asistenta pedagoga k žákovi, pracovníkům školy a zákonným zástupcům,  zaměření na rozvržení přímé a nepřímé pedagogické činnosti (3 hodiny)</li>
          <li className="list-group-item">•	Metodické vedení asistenta pedagoga, další vzdělávání asistenta pedagoga,  základní metodika práce asistenta pedagoga (2 hodiny)</li>
        </ul>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt002" aria-expanded="false" aria-controls="collapsesnt002">Strukturované učení u žáků s poruchami autistického spektra  </b> (8 hod, doporučeno pro MŠ, ZŠ, asistenty pedagoga, vychovatele ŠD, DM)
          <div className="collapse " id="collapsesnt002">
          <ul className="list-group">
            <li className="list-group-item">•	Seznámení s problematikou poruch autistického spektra, symptomatické projevy. Zvláštnosti autistického myšlení a rizika problémového chování.  ( 2 hodiny)</li>
            <li className="list-group-item">•	Strukturované učení – metodika vzdělávání žáků s PAS. TEACCH program. Představení základních principů strukturovaného učení (individualizace, strukturalizace, vizualizace), aplikace v procesu výchovy a vzdělávání. (3 hodiny)</li>
            <li className="list-group-item">•	Specifika vzdělávání žáků s PAS v mateřské a základní škole. ( 1 hodina)</li>
            <li className="list-group-item">•	Speciálně pedagogická podpora a spolupráce mezi školou, rodinou a ŠPZ. (1 hodina)</li>
            <li className="list-group-item">•	Legislativní ukotvení inkluzivního vzdělávání žáka s poruchami autistického spektra. Možnosti a realizace podpůrných opatření. Práce s Doporučením. (1 hodina)</li>
          </ul>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt123" aria-expanded="false" aria-controls="collapsesnt123">Strategie předcházení školní neúspěšnosti  </b> (8 hod, doporučeno pro ZŠ, SŠ, VOŠ a asistenty pedagoga)
        <div className="collapse " id="collapsesnt123">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Téma</b> – Strategie předcházení školní neúspěšnosti. Legislativní rámec, strategie jako součást povinné dokumentace školy. Vyhláška 72/2005 Sb., ve znění pozdějších předpisů O poradenských službách ve školách a školských zařízeních.  Vymezení základních pojmů. (1 hodina)</li>
            <li className="list-group-item">• <b>Téma Základní pojmy 1. část.</b> Vymezení základních pojmů, možnosti pedagogické diagnostiky pro nastavení strategie  prevence školní neúspěšnosti.  metody a formy práce pedagogických pracovníků, standardní činností členů školního  poradneského pracoviště v rámci strategie prevence školní neúspěšnosti. dání. (1 hodina)</li>
            <li className="list-group-item">•	<b>Téma Základní pojmy 2. část.</b>  Principy práce ve vyučovací hodině v rámci strategie prevence školní neúspěšnosti,  pedagogická diagnostika jako nástroj pro volbu vhodných metod a forem práce s diferencovanou skupinou.(1.hodina)</li>
            <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, Možnosti diferencovaného vyučování, Ukázka diagnostických metod. nastavení diferenciace časem v rámci celé třídy. Ukázka pracovních listů a práce s diferencovanou skupinou od žáků mimořádně nadaných, přes žáky se speciálně vzdělávacími potřebami /dále jen SVP v rámci prevence školní neúspěšnosti/ (1 hodina)</li>
            <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, ukázka dalších možností nastavení prevence školní neúspěšnosti.  Možnosti diferenciace rozsahem práce a obtížností úkolů s nastavením podpůrných opatření.  Ukázka možností procvičování podle individuálních možností a schopností jednotlivých žáků, způsob ověřování tematických celků, úrovně, rozsahu, četnosti úkolů stejného typu. Ukázka možntostí práce v rámci strategie prevence školní neúspěšnosti, nabídka metodických a pracovních materiálů. Možnosti zařazování obtížnější úrovně základního učiva. (1 hodina)</li>
            <li className="list-group-item">•	<b>Téma – Možnosti školního poradenského pracoviště</b>, standardní činností členů ŠPP v rámci strategie předcházení školní neúspěšnosti a možnosti kooperace pedagogických pracovníků na této strategii.   Hodnocení žáků a motivace žáků k diferencované práci. Sumativní a formativní hodnocení, autonomní, heteronomní hodnocení. (2 hodiny)</li>
            <li className="list-group-item">•	<b>Téma – Ukázka inspirativních úloh</b>. Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání.Práce s kazuistikami, diskuze. (1 hodina)</li>
          </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt1" aria-expanded="false" aria-controls="collapsesnt1">Práce s diferencovanou třídou a náměty na vzdělávání 8 hod
      </b>(8 hod, akreditováno pro SŠ, VOŠ, ZŠ, asistenti)
        <div className="collapse " id="collapsesnt1"><ul className="list-group"><li className="list-group-item">•	<b>Téma </b> – Legislativní rámec. Školský zákon a Vyhláška 27/2016. Podpůrné opatření, možnosti úpravy obsahu a výstupů v souladu s legislativou.  Vymezení základních pojmů nadání. RVP pro základní školy, kompetence, výstupy, učivo v kontextu s prací s žáka s potřebou podpůrných opatření. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma Základní pojmy 1. část.</b> Základní pojmy: Heterogenní skupina, diverzita. Diferencované vzdělávání podle kritérii a možností žáka. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma Základní pojmy 2. část.</b> Možnosti diferencovaného vyučování, pedagogická diagnostika jako součást volby vhodných metod a forem práce s diferencovanou skupinou.  Ukázka diagnostických metod. (1 hodina) </li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 1. část. Teoretické ukotvení tématu. Možnosti diferenciace - navýšení času.  Ukázka možností efektivního času. Ukázka pracovních listů a práce s diferencovanou skupinou od žáků mimořádně nadaných, přes žáky se speciálně vzdělávacími potřebami /dále jen SVP/ (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 2. část. Možnosti diferenciace - rozsah práce, obtížnost úkolů. Ukázka možností procvičování podle možností a schopností žáků, možnosti ověřování učiva a úrovně, rozsahu, četnosti úkolů stejného typu. Ukázka práce, nabídka metodických materiálů. Práce s pracovním materiálem. Možnosti zařazování obtížnější úrovně základního učiva. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 3. část. Další způsoby práce s diferencovanou skupinou. Ukázka diferencovaných pracovních listů např. diferencované čtení, ukázka pracovních listů z matematiky - základní a zkrácená verze, diferencovaný diktát, upravené texty, bonusové a prémiové úkoly pro žáky nadané, mimořádně nadané. Skupinová práce s homogenní a heterogenní skupinou. Organizace diferencovaného vyučování ve vyučovací hodině. Hodnocení žáků a motivace žáků k diferencované práci. Sumativní a formativní hodnocení, autonomní, heteronomní hodnocení. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – Ukázka inspirativních úloh</b>.  Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání. (1 hodina)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesskp2" aria-expanded="false" aria-controls="collapsesskp2">Žák nadaný a mimořádně nadaný, možnosti jeho rozvoje na SŠ
      </b>(8 hod, akreditováno pro SŠ, VOŠ)
                        <div className="collapse border rounded " id="collapsesskp2">
          <div className="m-3">
            <b>LEGISLATIVNÍ RÁMEC</b><br />
            •	Nová legislativa - Školský zákon a Vyhláška 27/2016 k rozvoji nadaných a mimořádně nadaných žáků. Vymezení základních pojmů nadání. RVP pro gymnázia a daný typ střední školy v kontextu s rozvoje nadání. (1 hodina)<br />
            <b>ZÁKLADNÍ POJMY</b><br />
            •	Základní pojmy z hlediska psychologické diagnostiky. Typologie nadání z hlediska psychologie. Typologie nadaných z hlediska projevů chování (1 hodina)<br />
            •	Možnosti a význam pedagogické diagnostiky, ukázka diagnostických metod. (1 hodina)<br />
            <b>PRINCIPY PRÁCE S NADANÝM A MIMOŘÁDNĚ NADANÝM ŽÁKEM</b><br />
            •	Charakteristické znaky osobitosti nadaných a mimořádně nadaných žáků. Odlišnosti ve vnímání a zpracování podnětů, v myšlení a prožívání.  Seznámení s různými přístupy k rozvoji nadání (1 hodina)<br />
            •	Základní principy v práci s nadanými a mimořádně nadanými žáky, případně s žáky s dvojí výjimečností. Možnosti jejich dalšího rozvoje rozumových schopností jako i jejich sociálně emočních kompetencí v rámci daného stupně vzdělávání. (1 hodina)<br />
            •	IVP, úpravy vzdělávacích obsahů a výstupů. Možnosti hodnocení žáků nadaných a mimořádně nadaných. Seznámení s terminologií, její aplikace v praxi. Sumativní, formativní hodnocení, autonomní, heteronomní hodnocení (2 hodiny)<br />
            <b>Téma –  UKÁZKA INPIRATIVNÍCH ÚLOH</b><br />
            •	Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání. (1 hodina)<br />
          </div></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesskp3" aria-expanded="false" aria-controls="collapsesskp3">Žák nadaný a mimořádně nadaný, možnosti jeho rozvoje-webinář
      </b>(8 hod, akreditováno pro SŠ, VOŠ, ZŠ)
        <div className="collapse border rounded " id="collapsesskp3">
          <div className="m-3">
            <b>Blok 1 (1 vyučovací hodina – 45 minut)</b><br />
            Téma – Legislativní rámec <br />
            Nová legislativa - Školský zákon a Vyhláška 27/2016 k rozvoji nadaných a mimořádně nadaných žáků. Vymezení základních pojmů nadání.<br />
            RVP pro daný typ školy v kontextu s rozvoje nadání.<br />

            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Základní pojmy<br />
            Základní pojmy z hlediska psychologické diagnostiky. <br />
            Typologie nadání z hlediska psychologie. Typologie nadaných z hlediska projevů chování.<br />
            Možnosti a význam pedagogické diagnostiky, ukázka diagnostických metod.<br />

            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Principy práce s nadaným a mimořádně nadaným žákem 1. část<br />
            -	Charakteristické znaky osobitosti nadaných a mimořádně nadaných žáků. Odlišnosti ve vnímání a zpracování podnětů, v myšlení a prožívání. <br />
            -	Seznámení s různými přístupy k rozvoji nadání <br />
            -	Základní principy v práci s nadanými a mimořádně nadanými žáky, případně s žáky s dvojí výjimečností. Možnosti jejich dalšího rozvoje rozumových schopností jako i jejich sociálně emočních kompetencí v rámci daného stupně vzdělávání.<br />

            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Principy práce s nadaným a mimořádně nadaným žákem 2. část<br />
            IVP, úpravy vzdělávacích obsahů a výstupů. <br />
            Možnosti hodnocení žáků nadaných a mimořádně nadaných. Seznámení s terminologií, její aplikace v praxi. <br />
            Sumativní, formativní hodnocení, autonomní, heteronomní hodnocení.<br />

            <b>Blok 5 (1 vyučovací hodina – 45 minut)</b><br />
            Téma – Ukázka inspirativních úloh<br />
            Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání. (1 hodina)<br />

          </div></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesskp31" aria-expanded="false" aria-controls="collapsesskp31">Kázeňské přestupky a možnosti jejich řešení v rámci třídy
      </b>(8 hod, akreditováno pro MŠ, ZŠ, ŠD, SŠ, DM, asistenti, výchovní poradci, speciální pedagogové, psychologové)
        <div className="collapse " id="collapsesskp31">
          <ul className="list-group">
            <li className="list-group-item">•	Pedagogická diagnostika orientovaná na žáka, učitele a edukační proces (1 hod)</li>
            <li className="list-group-item">•	Možnosti diferencovaného vzdělávání jako prevence problémového chování (1 hod)</li>
            <li className="list-group-item">•	Příčiny problémového chování u žáků, Diagnostická kritéria ADHD, Příčiny poruch chování žáků, Formy rizikového chování – zneužívání návykových látek, kriminalita, šikana, hostilita, agrese, agresivita, vrstevnické vztahy, školní problémy, přestupky a ostatní rizikové formy chování (4 hod)</li>
            <li className="list-group-item">•	Praktická část: Ukázka práce s třídním kolektivem, ukázka práce v rámci třídnických hodin, ukázka práce- nabídka metodických materiálů. Diskuze, práce s kazuistikami (2 hod)</li>
          </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt01" aria-expanded="false" aria-controls="collapsesnt01">Klima třídy a vedení třídnické hodiny v rámci inkluze - SŠ
      </b>(8 hod, akreditováno pro SŠ, VOŠ)
        <div className="collapse " id="collapsesnt01"><ul className="list-group"><li className="list-group-item">•	<b>Téma – Vedení třídního kolektivu v souladu s podpůrným opatřením a doporučením ke vzdělávání žáků</b> . Společné vzdělávání na středních školách, typy středních škol a odborných učilišť a možnosti vzdělávání žáků na těchto školách v souladu s platnými přepisy-Vyhláška 27/2016 Sb. - Struktura podpůrných opatření a jejich členění do pěti stupňů se zaměřením na podporu klimatu třídy. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma - Třídní kolektiv, možnosti vedení třídního kolektivu</b> . Základní pravidla pro fungující třídní kolektiv: Cíle práce se třídou, jak najít cíl a proč?, Třídnické hodiny / jejich nastavení, struktura, co je a není vhodné/, Práce s tvarem třídy /skupiny, dvojice, jednotlivci/, Témata na třídnické hodiny / komunikace, empatie, úcta, respekt…/, Regulace chování ve skupině (3 hodiny)</li>
          <li className="list-group-item">•	<b>Téma - Autenticita pedagoga, sebereflexe pedagoga, sebehodnocení. Kategorie a formy diagnostiky ve školním prostředí </b> - souvislost s úpravou právních předpisů - jak v souvislosti s využitím podpůrného opatření . Pozorování žáků a jeho zaznamenání: analýza získaných poznatků, další nástroje pedagogické diagnostiky, východiska pro nastavení práce s třídním kolektivem, možnosti nastavení podmínek v rámci třídního kolektivu (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – supervize, její význam a cíl</b> . Východiska pro hodnocení : kultura vysokých očekávání, Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky, Sebezkušenostní část vzdělávacího programu. / zaměření na jednotlivé situace, problémy, kauzistiky/ (2 hodiny)</li>
        </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt11" aria-expanded="false" aria-controls="collapsesnt11">Podpora žáků SŠ v rámci inkluze
      </b>  (8 hod, akreditováno pro SŠ, VOŠ, DM, asistenti)
         <div className="collapse " id="collapsesnt11"><ul className="list-group">
          <li className="list-group-item">•	<b>Téma - Struktura podpůrných opatření a práce se zaměřením na PO 1. stupně /individualizace - PLPP/</b>. Společné vzdělávání na středních školách, typy středních škol, odborných učilišť a možnosti vzdělávání žáků na těchto školách v souladu s platnými přepisy, vyhláška 27/2016 Sb. o vzdělávání žáků se speciálními vzdělávacími potřebami a žáků nadaných, školský zákon, RVP pro daný typ střední školy, Struktura podpůrných opatření a jejich členění do pěti stupňů, podpůrná opatření prvního stupně (příloha č. 1 vyhlášky č. 27/2016 Sb.), úpravy ŠVP a jeho charakteristika v souvislosti s vytvářením, realizací a vyhodnocováním PLPP (1 hodina)</li>
          <li className="list-group-item">•	<b>PO 1. stupně  - individualizace x  PLPP: možnosti  PO 1. stupně na ŠŠ, charakteristika PO 1. stupně, </b> - prostředky PO 1.stupně, příklady individualizace výuky, příklady diferenciace výuky, účel PLPP, struktura daná právními předpisy a porozumění jednotlivým částem v souvislostech, jak pracovat s formulářem při tvorbě PLPP, jak získávat podklady pro vytváření PLPP a pro jeho vyhodnocování , interaktivní formuláře jako pomoc pedagogům a jejich využití (2 hodiny)</li>
          <li className="list-group-item">•	<b>Pedagogická diagnostika jako prostředek pro nastavení PLPP, příp. IVP</b>: kategorie a formy diagnostiky ve školním prostředí, souvislosti s úpravou právních předpisů - jak v souvislosti s využitím podpůrného opatření PLPP, příp. IVP. Pozorování žáků a jeho zaznamenání: analýza získaných poznatků, další nástroje pedagogické diagnostiky, východiska pro nastavení PO, možnosti nastavení podmínek v rámci vyučovací hodiny (2 hodiny)</li>
          <li className="list-group-item">•	<b>Tvorba IVP, PLPP</b>. Formulář podle přílohy vyhlášky č. 27/2016 Sb. Stanovení cílů, možné úpravy obsahů a výstupů vzdělávání, využití PLPP při spolupráci se školským poradenským zařízením v případě nutnosti využít vyšších stupňů podpory. Zpětná vazba, vyhodnocení (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma  - hodnocení žáků ve společném vzdělávání.</b> Východiska pro hodnocení: kultura vysokých očekávání, modifikace obsahů, výstupů vzdělávání a dopad do hodnocení, hodnocení a jeho dopad na žáka, hodnocení jako zpětná vazba pro učitele, sumativní a formativní způsoby hodnocení, Autonomní a heteronomní hodnocení, Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky. Úprava forem a způsobů hodnocení jako podpůrné opatření a jeho uplatňování v různých stupních podpory. (2 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt12" aria-expanded="false" aria-controls="collapsesnt12">Práce se žákem SŠ s problémovým chováním
      </b>  (8 hod, akreditováno pro SŠ, DM, asistenti)
        <div className="collapse " id="collapsesnt12"><ul className="list-group">
          <li className="list-group-item">•	<b>Téma – Základní sociální potřeby žáků střední školy.</b> Základní sociální potřeby: Potřeba místa, bezpečí, podnětu, potřeba péče, výživy, dále potřeby podpory a sociálních limitů. Důsledky nenaplňování potřeb a jejich vliv na chování žáků střední školy. Dopady procesu psychického a fyzického vývoje na chování žáka v podmínkách střední školy (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – žák s problémovým chováním ve třídě, projevy chování žáků s poruchami chování, vliv na klima třídy</b>. Etické vedení dialogu se žákem. Pravidla a zásady vedení třídniho kolektivu Práce s tvarem třídy - konformita a normy konkrétního třídního kolektivu - příprava, hranice, rizika a zdroje. Výhody a nevýhody nepsaných norem třídního kolektivu. Role žáka ve třídě. Posilování pozitivních vazeb. Regulace chování ve skupině. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – Práce s pocity žáků jako prevence kázeňských problémů</b>. Školní prostředí a střídání rolí. Typy kázeňských přestupů a možnosti řešení kázeňských přestupků ve školní třídě v součinnosti se školním řádem a platnou legislativou. Komunikace s problémovým rodičem a jeho specifika - vhodné a nevhodné komunikační kanály. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – praktické ukázky řešení přestupků. Komunikace s verbálně agresivním žákem</b>. Zákonité fáze, postupy, změny. Šikana, její vyhledávání a řešení. Konkrétní práce se žákem s problémovým chováním, ukázka možných řešení. Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky. Sebezkušenostní část vzdělávacího programu. / zaměření na jednotlivé situace, problémy, vlastní kazuistiky/ (2 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt13" aria-expanded="false" aria-controls="collapsesnt13">Sociální klima třídy a role učitele – 8 hodin
      </b>  (8 hod, akreditováno pro SŠ, VOŠ, ZŠ, asistenti)
        <div className="collapse border rounded " id="collapsesnt13">
          <div className="m-3">
            <b>Teoretická část  (4 vyučovací hodiny)</b><br />
            •	Objasnění základních pojmů - klima třídy, sociální klima třídy, spolutvůrci třídního klimatu,<br />
            •	Pedagogická diagnostika školní třídy – mechanismy, které toto klima ovlivňují, prevence vztahů, sociálně-psychologické aspekty vedení třídy, pozice a role žáka ve školní třídě<br />
            •	Sociální klima třídy a pedagogická diagnostika<br />
            - sběr dat, vyhodnocování, interpretace a práce s nimi<br />
            - nejčastější chyby v sociální percepci<br />
            <b>Praktická část (4 vyučovací hodiny)</b><br />
            •	Nabídka činností zaměřených na podporu utváření pozitivního sociálního klimatu ve třídě<br />
            -	účastník si prakticky ověří získané poznatky<br />
            •	Poslední část bude věnována i dotazům a řízené diskuzi z vlastní praxe zúčastněných ped. pracovníků.<br />
          </div></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt14" aria-expanded="false" aria-controls="collapsesnt14">Práce s pedagogickým sborem-jak předejít syndromu vyhoření
      </b>  (8 hod, akreditováno pro SŠ, VOŠ, ZŠ)
        <div className="collapse " id="collapsesnt14"><ul className="list-group">
          <li className="list-group-item">•	<b>Téma – Práce s pedagogickým sborem - jak předejít syndromu vyhoření</b> . Klima ve škole a sborovně: Klima z hlediska - emocionálního, sociálního, pracovního. Faktory ovlivňující klima školy - přístup učitele, komunikace, metody a strategie. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – Pravidla ve sborovně, pravidla ve třídě, komunikace</b> : Pravidla a zásady fungujícího kolektivu ve sborovně, vedení a zásady třídnického kolektivu. Práce se sborovnou - příprava, hranice, rizika a zdroje. Výhody a nevýhody nepsaných norem pedagogického sboru a třídního kolektivu. Role učitele ve sborovně. Posilování pozitivních vazeb. Regulace chování ve skupině. Komunikace ve sborovně. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – Jak na syndrom vyhoření, antistresové a relaxační techniky</b> : Antistresové techniky využitelné pro jednotlivce i pro skupinu. Relaxační metody různých druhů. Uvědomění si sám sebe, práce na pozitivním myšlení u jednotlivce i skupiny. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma – praktické ukázky práce se skupinou a antistresové relaxační metody</b> . Sebezkušenostní část vzdělávacího programu. Využití relaxačních metod v praxi. Ukázky jak pracovat v pedagogickém sboru či v jiném kolektivu, případně ve třídě žáků. Zapojení sebereflexe a reflexe od skupiny. (3 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesnt15" aria-expanded="false" aria-controls="collapsesnt15">Základní kurz společného vzdělávání pro střední školy
      </b>  (8 hod, akreditováno pro SŠ, VOŠ)
     <div className="collapse " id="collapsesnt15"><ul className="list-group">
          <li className="list-group-item">•	Úvod do společného vzdělávání, filozofie společného vzdělávání, anglický model P. Farrella, porovnání integrace a inkluze (1 hodina )</li>
          <li className="list-group-item">•	Seznámení s § 16, 17, 18, 19 novely Školského zákona č. 82/2015 Sb., podrobný rozbor § 16, definice žáků se speciálními vzdělávacími potřebami,  vymezení pojmu nadaný žák a mimořádně nadaný žák (1 hodina)</li>
          <li className="list-group-item">•	Podrobný rozbor textové části vyhlášky 27/2016 Sb. o vzdělávání žáků se speciálními vzdělávacími potřebami a žáků nadaných, odlišnosti pro střední školy  – (2 hodiny)</li>
          <li className="list-group-item">•	Úprava v pojetí žáka se speciálními vzdělávacími potřebami, struktura a přehled podpůrných opatření, specifika pro střední školy (2 hodiny)</li>
          <li className="list-group-item">•	Vzdělávání žáků podle § 16, odst. 9, možnosti vzdělávání žáků s LMP (1 hodina)</li>
          <li className="list-group-item">•	Závěrečné shrnutí a diskuze (1 hodina)</li>
        </ul></div>
      </LiFile >
    </ul >
  </BlockEx >
</Panel >;

var SSInovativniFormy: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    
    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesif1" aria-expanded="false" aria-controls="collapsesif1">Nové metody práce učitele – aktivizující formy výuky na ZŠ a SŠ
      </b>(8 hod, akreditováno pro ZŠ, SŠ a asistenty pedagoga)
        <div className="coll1apse " id="collapsesif1">
          <ol className="list-group">
            <li className="list-group-item">1. Seznámení se základními metodami, formami práce a jejich dělením (1 hod)</li>
            <li className="list-group-item">2. Aplikace jednotlivých základních metod ve výuce, princip a různé způsoby využití: (6 hod)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;•	brainstorming<br />
                &nbsp;&nbsp;&nbsp;&nbsp;•	myšlenková mapa<br />
                &nbsp;&nbsp;&nbsp;&nbsp;•	práce s textem- škálování<br />
                &nbsp;&nbsp;&nbsp;&nbsp;•	princip a různé způsoby využití diskusní metody  -  rozhovor, diskuse, beseda<br />
                &nbsp;&nbsp;&nbsp;&nbsp;•	princip a různé způsoby využití metody pro rozvoj kritického myšlení - EUR, volné psaní, pětilístek…<br />
                &nbsp;&nbsp;&nbsp;&nbsp;•	projekty a projektové vyučování (stručné představení)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;•	pedagogické aktivity pro skupinovou práci a kooperaci<br />
            </li>
            <li className="list-group-item">3.	Další aktivizující metody a formy výuky (stručné představení) - Snowballing, Kolečka, Kolotoč, Návštěvníci, Akvárium (1 hod)</li>
          </ol>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesif2" aria-expanded="false" aria-controls="collapsesif2">Tandemová výuka – nový prvek ve výuce
      </b>(8 hod, doporučeno pro ZŠ, SŠ, MŠ)
        <div className="collapse border rounded " id="collapsesif2">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Smysl a princip tandemové výuky</b> : kooperativní a tandemová/párová výuka x výuka s AP, formy tandemové výuky, výhody a nevýhody tandemové výuky, šest typů tandemové výuky (2 hod)</li>
            <li className="list-group-item">•	<b>Podmínky spolupráce</b> : osobnostní charakteristiky pedagogických pracovníků, vzájemná komunikace, komunikační techniky, předcházení konfliktům, efektivní využití přítomnosti a dovedností kolegy při výuce (2 hod)</li>
            <li className="list-group-item">•	<b>Princip 3 S</b> (3 hod): <br />
              společné plánování výuky - vytváření ročních, měsíčních, týdenní plánů, příprava konkrétních hodin, přehled aktivit, rozdělení úkolů v hodině <br />
              společná výuka - stanovení cíle hodiny, volby metod pro realizaci cíle výuky<br />
              společná reflexe výuky - formativní a sumativní hodnocení žáků, vzájemná sebereflexe spolupráce
</li>
            <li className="list-group-item">•	<b>Zpracování konkrétní vyučovací hodiny</b> (1 hod)</li>
          </ul>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesif3" aria-expanded="false" aria-controls="collapsesif3">Práce s diferencovanou třídou a náměty na vzdělávání 8 hod </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ, asistenti)
        <div className="collapse " id="collapsesif3"><ul className="list-group"><li className="list-group-item">•	<b>Téma </b> – Legislativní rámec. Školský zákon a Vyhláška 27/2016. Podpůrné opatření, možnosti úpravy obsahu a výstupů v souladu s legislativou.  Vymezení základních pojmů nadání. RVP pro základní školy, kompetence, výstupy, učivo v kontextu s prací s žáka s potřebou podpůrných opatření. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma Základní pojmy 1. část.</b> Základní pojmy: Heterogenní skupina, diverzita. Diferencované vzdělávání podle kritérii a možností žáka. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma Základní pojmy 2. část.</b> Možnosti diferencovaného vyučování, pedagogická diagnostika jako součást volby vhodných metod a forem práce s diferencovanou skupinou.  Ukázka diagnostických metod. (1 hodina) </li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 1. část. Teoretické ukotvení tématu. Možnosti diferenciace - navýšení času.  Ukázka možností efektivního času. Ukázka pracovních listů a práce s diferencovanou skupinou od žáků mimořádně nadaných, přes žáky se speciálně vzdělávacími potřebami /dále jen SVP/ (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 2. část. Možnosti diferenciace - rozsah práce, obtížnost úkolů. Ukázka možností procvičování podle možností a schopností žáků, možnosti ověřování učiva a úrovně, rozsahu, četnosti úkolů stejného typu. Ukázka práce, nabídka metodických materiálů. Práce s pracovním materiálem. Možnosti zařazování obtížnější úrovně základního učiva. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 3. část. Další způsoby práce s diferencovanou skupinou. Ukázka diferencovaných pracovních listů např. diferencované čtení, ukázka pracovních listů z matematiky - základní a zkrácená verze, diferencovaný diktát, upravené texty, bonusové a prémiové úkoly pro žáky nadané, mimořádně nadané. Skupinová práce s homogenní a heterogenní skupinou. Organizace diferencovaného vyučování ve vyučovací hodině. Hodnocení žáků a motivace žáků k diferencované práci. Sumativní a formativní hodnocení, autonomní, heteronomní hodnocení. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – Ukázka inspirativních úloh</b>.  Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání. (1 hodina)</li>
        </ul></div>
      </LiFile >
    </ul>
  </BlockEx >
</Panel >;

var SSFormativniHodnoceni: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>

  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesfh1" aria-expanded="false" aria-controls="collapsesfh1">Formativní hodnocení a role učitele
      </b>(8 hod, akreditováno pro SŠ, VOŠ, DM, ZŠ, ŠD, asistenti)
         <div className="collapse " id="collapsesfh1"><ul className="list-group"><li className="list-group-item">•	Hodnocení, význam a jeho specifika (0,5 hod)</li>
          <li className="list-group-item">•	Pět klíčových strategií formativního hodnocení, pravidla a podmínky poskytování formativního hodnocení (0,5 hod)</li>
          <li className="list-group-item">•	Metody formativního hodnocení (respektující komunikace, zpětná vazba, vrstevnické hodnocení, sebehodnocení, cíle, kritéria)  – obecné vysvětlení pojmů (1 hod)</li>
          <li className="list-group-item">•	Pravidla a podmínky poskytování zpětné vazby  - pozitivní a negativní zpětná vazba, chyby v podávání zpětné vazby (1 hod)</li>
          <li className="list-group-item">•	Slovní hodnocení, sebehodnocení, vrstevnické hodnocení (2 hod)</li>
          <li className="list-group-item">•	Praktický nácvik tvorby kritérií k formativnímu hodnocení (3 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesfh2" aria-expanded="false" aria-controls="collapsesfh2">Formativní hodnocení v praxi
      </b>(8 hod, akreditováno pro SŠ, ZŠ,, asistenti)
        <div className="collapse " id="collapsesfh2"><ul className="list-group"><li className="list-group-item">•	Formativní hodnocení a jeho principy (1 hod)</li>
          <li className="list-group-item">•	Strategie formativního hodnocení, pravidla a podmínky pro poskytování formativního hodnocení (1 hod)</li>
          <li className="list-group-item">•	Cíle učení a kritéria úspěchu a jejich tvorba (1 hod)</li>
          <li className="list-group-item">•	Moderování třídní diskuse, komunikace, klíčové otázky, porozumění třídou (1 hod)</li>
          <li className="list-group-item">•	Vrstevnické hodnocení a sebehodnocení, přijetí hodnocení (2 hod)</li>
          <li className="list-group-item">•	Zásady podávání zpětné vazby ústní a písemné (1 hod)</li>
          <li className="list-group-item">•	Přesah formativního hodnocení do osobnostního rozvoje žáka (0,5 hod)</li>
          <li className="list-group-item">•	Diskuse účastníků, sdílení typů z praxe (0,5 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesfh3" aria-expanded="false" aria-controls="collapsesfh3">Formativní hodnocení v praxi - webinář
      </b>(8 hod, akreditováno pro SŠ, ZŠ, asistenti)
         <div className="collapse border rounded " id="collapsesfh3">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Formativní hodnocení a jeho principy (1 hod)<br />
            •	Strategie formativního hodnocení, pravidla a podmínky pro poskytování formativního hodnocení (1 hod)<br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Cíle učení a kritéria úspěchu a jejich tvorba (1 hod)<br />
            •	Moderování třídní diskuse, komunikace, klíčové otázky, porozumění třídou (1 hod)<br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Vrstevnické hodnocení a sebehodnocení, přijetí hodnocení (2 hod)<br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Zásady podávání zpětné vazby ústní a písemné (1 hod)<br />
            •	Přesah formativního hodnocení do osobnostního rozvoje žáka (0,5 hod)<br />
            •	Diskuse účastníků, sdílení typů z praxe (0,5 hod)<br />
          </div></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesfh4" aria-expanded="false" aria-controls="collapsesfh4">Vedení portfolia žáka jako nástroj formativního hodnocení
      </b>(8 hod, akreditováno pro ZŠ, ŠD, SŠ, DM, asistenti, výchovní poradci, speciální pedagogové, psychologové)
        <div className="collapse " id="collapsesfh4"><ul className="list-group"><li className="list-group-item">•	LEGISLATIVNÍ RÁMEC: Školský zákon a Vyhláška 27/2016. Hodnocení žáka jako podpůrné opatření, možnosti úpravy obsahu a výstupů v souladu s legislativou.  Vymezení základních pojmů nadání. Sumativní a formativní hodnocení  – vymezení teoretických pojmů. (1 hod)  </li>
          <li className="list-group-item">•	Základní pojmy : Sumativní hodnocení, Formativní hodnocení, Prostředky formativního hodnocení (2 hod)</li>
          <li className="list-group-item">•	Teoretická východiska - portfolio žáka - cíl, forma a funkce portfolia (1 hod)</li>
          <li className="list-group-item">•	PRINCIPY PRÁCE S portfoliem žáka: Teoretické ukotvení tématu, Ukázka sebehodnocení žáka (1 hod)</li>
          <li className="list-group-item">•	PRINCIPY PRÁCE S portfoliem žáka: Možnosti motivace žáka, Ukázka možností procvičování podle možností a schopností žáků, možnosti ověřování učiva a úrovně, rozsahu, četnosti úkolů stejného typu, Ukázka práce, nabídka metodických materiálů. Práce s pracovním materiálem. (2 hod)</li>
          <li className="list-group-item">•	Cíl a smysl portfolia je především  důraz na osobní posun v učení každého dítěte - žáka. Možnosti využívat průběžné rozvíjející hodnocení včetně slovního a rozvíjí sebereflexi učitele. Ukázka metod formativní hodnocení, slovní hodnocení Ukázka možností posilování pozitivní motivace k aktivnímu a samostatnému učení (1 hod)</li>
        </ul></div>
      </LiFile >
    </ul>
  </BlockEx>
</Panel>;

var SSIndividualizace: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>

  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesin1" aria-expanded="false" aria-controls="collapsesin1">Vedení portfolia žáka jako nástroj formativního hodnocení
      </b>(8 hod, akreditováno pro ZŠ, ŠD, SŠ, DM, asistenti, výchovní poradci, speciální pedagogové, psychologové)
        <div className="collapse.show" id="collapsesin1"><ul className="list-group"><li className="list-group-item">•	LEGISLATIVNÍ RÁMEC: Školský zákon a Vyhláška 27/2016. Hodnocení žáka jako podpůrné opatření, možnosti úpravy obsahu a výstupů v souladu s legislativou.  Vymezení základních pojmů nadání. Sumativní a formativní hodnocení  – vymezení teoretických pojmů. (1 hod)  </li>
          <li className="list-group-item">•	Základní pojmy : Sumativní hodnocení, Formativní hodnocení, Prostředky formativního hodnocení (2 hod)</li>
          <li className="list-group-item">•	Teoretická východiska - portfolio žáka - cíl, forma a funkce portfolia (1 hod)</li>
          <li className="list-group-item">•	PRINCIPY PRÁCE S portfoliem žáka: Teoretické ukotvení tématu, Ukázka sebehodnocení žáka (1 hod)</li>
          <li className="list-group-item">•	PRINCIPY PRÁCE S portfoliem žáka: Možnosti motivace žáka, Ukázka možností procvičování podle možností a schopností žáků, možnosti ověřování učiva a úrovně, rozsahu, četnosti úkolů stejného typu, Ukázka práce, nabídka metodických materiálů. Práce s pracovním materiálem. (2 hod)</li>
          <li className="list-group-item">•	Cíl a smysl portfolia je především  důraz na osobní posun v učení každého dítěte - žáka. Možnosti využívat průběžné rozvíjející hodnocení včetně slovního a rozvíjí sebereflexi učitele. Ukázka metod formativní hodnocení, slovní hodnocení Ukázka možností posilování pozitivní motivace k aktivnímu a samostatnému učení (1 hod)</li>
        </ul></div>
      </LiFile >

    </ul>
  </BlockEx>
</Panel>;

var SSGenderovaTematika: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>

  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesgt1" aria-expanded="false" aria-controls="collapsesgt1">Gender a genderová tematika na školách
      </b>(8 hod, akreditováno pro SŠ, VOŠ, DM, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
         <div className="collapse.show" id="collapsesgt1">
          <ul className="list-group">
            <li className="list-group-item">•	Co je gender – klíčové pojmy a definice (0,5 hod).</li>
            <li className="list-group-item">•	Gender a výzkum – seznámení se s výzkumy a nejnovějšími poznatky (0,5 hod).</li>
            <li className="list-group-item">•	Genderová identita/skupiny – fyziologické a sociologické aspekty pohlaví – „co to jsou za novoty?“ Transgender, cisgender, fluid/nebinární aj. (1 hod).</li>
            <li className="list-group-item">•	Genderové stereotypy v našem školství – jaká je situace v naší škole, mapování a návrhy možných změn – týmový workshop (2 hod).</li>
            <li className="list-group-item">•	Kde se vzala a proč genderová ideologie (0,5 hod).</li>
            <li className="list-group-item">•	Mikroagrese ve školním prostředí – dopady na vzdělávání a osobnost žáka – sebezkušenostní cvičení, sdílení prožitků, kroky pro změny v naší škole (1,5 hod).</li>
            <li className="list-group-item">•	Síť podpory v ČR – jak můžeme být oporou studentům v řešení náročných situacích, využití podpory pro pedagogy (1 hod).</li>
            <li className="list-group-item">•	Průběžné diskuse a sdílení, průběžná zpětná vazba, otázky a odpovědi (1 hod).</li>
            <li className="list-group-item">•	Závěr programu.</li>
          </ul></div>
      </LiFile >

    </ul>
  </BlockEx>
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
              <FormControl value={this.state.email} placeholder="Napište váš email" onChange={(e: any) => { this.state.email = e.target.value; this.forceUpdate(); }} />
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
              <FormControl value={this.state.phone} placeholder="Napište vaše telefonní číslo" onChange={(e: any) => { this.state.phone = e.target.value; this.forceUpdate(); }} />
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
              <FormControl value={this.state.teachers} placeholder="Napište počet učitelů" onChange={(e: any) => { this.state.teachers = e.target.value; this.forceUpdate(); }} />
            </FormGroup>
          </Col>
          <Col md={9}>
            <FormGroup controlId="teachers" validationState={this.getValidationState()} >
              <ControlLabel>Upřesnění poptávky nebo dotaz</ControlLabel>
              <FormControl componentClass="textarea" rows={3} value={this.state.poznamka} placeholder="Napište upřesnění poptávky nebo dotaz" onChange={(e: any) => { this.state.poznamka = e.target.value; this.forceUpdate(); }} />
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
    Pro více informací klikněte na vybrané téma nahoře na stránce.
  </p>
  <p>
    Pro získání podrobnějších informací o našich akreditovaných kurzech vyplňte a odešlete nezávazný poptávkový formulář nebo napište email na projekt@langmaster.cz.
  </p>
</div>;

var KurzySSAlert: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div className='alert alert-warning' style={{ fontSize: '18px' }}>
  <p style={{ marginTop: '0' }}><i className='fa fa-lightbulb-o'></i> Tip: &nbsp;</p>
  <p>
    Pro více informací klikněte na vybrané téma nahoře na stránce.
  </p>
  <p>
    Pro získání podrobnějších informací o našich akreditovaných kurzech vyplňte a odešlete nezávazný poptávkový formulář nebo napište email na projekt@langmaster.cz.
  </p>
</div>;

var KurzyIIAlert: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div className='alert alert-warning' style={{ fontSize: '18px' }}>
  <p style={{ marginTop: '0' }}><i className='fa fa-lightbulb-o'></i> Tip: &nbsp;</p>
  <p>
    Pro více informací klikněte na vybrané téma nahoře na stránce.
  </p>
  <p>
    Pro získání podrobnějších informací o našich akreditovaných kurzech vyplňte a odešlete nezávazný poptávkový formulář nebo napište email na projekt@langmaster.cz.
  </p>
</div>;

var KurzySSList: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <h2 className='text-right'>SŠ a VOŠ akreditované kurzy DVPP MŠMT - Výzva: 02_22_003</h2>
  <h3>Nabízíme akreditované kurzy pokrývající následující témata </h3>
  <Row>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSMedGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSNoveTechnologie)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSRozvojPodnikavosti)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSKarierovePoradenstvi)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSWellBeing)}
        </LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSGenderovaTematika)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSVyukaCestiny)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSInkluzeCizinci)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSOstatniInkluze)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSFormativniHodnoceni)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSIndividualizace)}
        </LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSPedagogickaDiagnostika)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSInovace)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSSpoluprace)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSCtenarskaGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSMatematickaGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSPodporaUcitelu)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyss.SSInovativniFormy)}
        </LiFile>

      </ul>
    </Col>
  </Row>
</div>;

var KurzyIIList: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <h2 className='text-right'>ZŠ, MŠ, ZUŠ, ŠD akreditované kurzy DVPP MŠMT - Výzva 02_22_002</h2>
  <h3>Nabízíme akreditované kurzy pokrývající následující témata </h3>
  <Row>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSInkluzeCizinci)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSVyukaCestiny)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSMedialniGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSNoveTechnologie)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSWellBeing)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSGenderova)}
        </LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSCtenarskaGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSMatematickaGramotnost)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSKarierovePoradenstvi)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSRozvojPodnikavosti)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSFormativniHodnoceni)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSInovativniFormy)}
        </LiFile>
      </ul>
    </Col>
    <Col md={4}>
      <ul className='fa-ul'>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSIndividualizace)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSDiagnostika)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSInovace)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSSpoluprace)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSInkluze)}
        </LiFile>
        <LiFile>{sitemapRouter.doNavigateTag(inkluze.root.kurzyii.ZSPodpora)}
        </LiFile>
      </ul>
    </Col>
  </Row>
</div>;


var ZSFormativniHodnoceni: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>

  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>

      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezff1" aria-expanded="false" aria-controls="collapsezff1">Formativní hodnocení a role učitele </b> (8 hod, akreditováno pro ZŠ, ŠD, SŠ, VOŠ, DM, asistenti)
        <div className="collapse " id="collapsezff1"><ul className="list-group"><li className="list-group-item">•	Hodnocení, význam a jeho specifika (0,5 hod)</li>
          <li className="list-group-item">•	Pět klíčových strategií formativního hodnocení, pravidla a podmínky poskytování formativního hodnocení (0,5 hod)</li>
          <li className="list-group-item">•	Metody formativního hodnocení (respektující komunikace, zpětná vazba, vrstevnické hodnocení, sebehodnocení, cíle, kritéria)  – obecné vysvětlení pojmů (1 hod)</li>
          <li className="list-group-item">•	Pravidla a podmínky poskytování zpětné vazby  - pozitivní a negativní zpětná vazba, chyby v podávání zpětné vazby (1 hod)</li>
          <li className="list-group-item">•	Slovní hodnocení, sebehodnocení, vrstevnické hodnocení (2 hod)</li>
          <li className="list-group-item">•	Praktický nácvik tvorby kritérií k formativnímu hodnocení (3 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezff2" aria-expanded="false" aria-controls="collapsezff2">Formativní hodnocení v praxi </b> (8 hod, akreditováno pro ZŠ, SŠ, asistenti)
                <div className="collapse " id="collapsezff2"><ul className="list-group"><li className="list-group-item">•	Formativní hodnocení a jeho principy (1 hod)</li>
          <li className="list-group-item">•	Strategie formativního hodnocení, pravidla a podmínky pro poskytování formativního hodnocení (1 hod)</li>
          <li className="list-group-item">•	Cíle učení a kritéria úspěchu a jejich tvorba (1 hod)</li>
          <li className="list-group-item">•	Moderování třídní diskuse, komunikace, klíčové otázky, porozumění třídou (1 hod)</li>
          <li className="list-group-item">•	Vrstevnické hodnocení a sebehodnocení, přijetí hodnocení (2 hod)</li>
          <li className="list-group-item">•	Zásady podávání zpětné vazby ústní a písemné (1 hod)</li>
          <li className="list-group-item">•	Přesah formativního hodnocení do osobnostního rozvoje žáka (0,5 hod)</li>
          <li className="list-group-item">•	Diskuse účastníků, sdílení typů z praxe (0,5 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezff3" aria-expanded="false" aria-controls="collapsezff3">Formativní hodnocení v praxi – webinář </b> (8 hod, akreditováno pro ZŠ, SŠ, asistenti)
                 <div className="collapse border rounded " id="collapsezff3">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Formativní hodnocení a jeho principy (1 hod)<br />
            •	Strategie formativního hodnocení, pravidla a podmínky pro poskytování formativního hodnocení (1 hod)<br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Cíle učení a kritéria úspěchu a jejich tvorba (1 hod)<br />
            •	Moderování třídní diskuse, komunikace, klíčové otázky, porozumění třídou (1 hod)<br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Vrstevnické hodnocení a sebehodnocení, přijetí hodnocení (2 hod)<br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Zásady podávání zpětné vazby ústní a písemné (1 hod)<br />
            •	Přesah formativního hodnocení do osobnostního rozvoje žáka (0,5 hod)<br />
            •	Diskuse účastníků, sdílení typů z praxe (0,5 hod)<br />
          </div></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezff4" aria-expanded="false" aria-controls="collapsezff4">Vedení portfolia žáka jako nástroj formativního hodnocení
      </b>(8 hod, akreditováno pro ZŠ, ŠD, SŠ, DM, asistenti, výchovní poradci, speciální pedagogové, psychologové)
        <div className="collapse " id="collapsezff4"><ul className="list-group"><li className="list-group-item">•	LEGISLATIVNÍ RÁMEC: Školský zákon a Vyhláška 27/2016. Hodnocení žáka jako podpůrné opatření, možnosti úpravy obsahu a výstupů v souladu s legislativou.  Vymezení základních pojmů nadání. Sumativní a formativní hodnocení  – vymezení teoretických pojmů. (1 hod)  </li>
          <li className="list-group-item">•	Základní pojmy : Sumativní hodnocení, Formativní hodnocení, Prostředky formativního hodnocení (2 hod)</li>
          <li className="list-group-item">•	Teoretická východiska - portfolio žáka - cíl, forma a funkce portfolia (1 hod)</li>
          <li className="list-group-item">•	PRINCIPY PRÁCE S portfoliem žáka: Teoretické ukotvení tématu, Ukázka sebehodnocení žáka (1 hod)</li>
          <li className="list-group-item">•	PRINCIPY PRÁCE S portfoliem žáka: Možnosti motivace žáka, Ukázka možností procvičování podle možností a schopností žáků, možnosti ověřování učiva a úrovně, rozsahu, četnosti úkolů stejného typu, Ukázka práce, nabídka metodických materiálů. Práce s pracovním materiálem. (2 hod)</li>
          <li className="list-group-item">•	Cíl a smysl portfolia je především  důraz na osobní posun v učení každého dítěte - žáka. Možnosti využívat průběžné rozvíjející hodnocení včetně slovního a rozvíjí sebereflexi učitele. Ukázka metod formativní hodnocení, slovní hodnocení Ukázka možností posilování pozitivní motivace k aktivnímu a samostatnému učení (1 hod)</li>
        </ul></div>
      </LiFile >
    </ul>
  </BlockEx>
</Panel>;

var ZSIndividualizace: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>

  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezin1" aria-expanded="true" aria-controls="collapsezin1">Vedení portfolia žáka jako nástroj formativního hodnocení
      </b>(8 hod, akreditováno pro ZŠ, ŠD, SŠ, DM, asistenti, výchovní poradci, speciální pedagogové, psychologové)
        <div className="collapse.show" id="collapsezin1"><ul className="list-group"><li className="list-group-item">•	LEGISLATIVNÍ RÁMEC: Školský zákon a Vyhláška 27/2016. Hodnocení žáka jako podpůrné opatření, možnosti úpravy obsahu a výstupů v souladu s legislativou.  Vymezení základních pojmů nadání. Sumativní a formativní hodnocení  – vymezení teoretických pojmů. (1 hod)  </li>
          <li className="list-group-item">•	Základní pojmy : Sumativní hodnocení, Formativní hodnocení, Prostředky formativního hodnocení (2 hod)</li>
          <li className="list-group-item">•	Teoretická východiska - portfolio žáka - cíl, forma a funkce portfolia (1 hod)</li>
          <li className="list-group-item">•	PRINCIPY PRÁCE S portfoliem žáka: Teoretické ukotvení tématu, Ukázka sebehodnocení žáka (1 hod)</li>
          <li className="list-group-item">•	PRINCIPY PRÁCE S portfoliem žáka: Možnosti motivace žáka, Ukázka možností procvičování podle možností a schopností žáků, možnosti ověřování učiva a úrovně, rozsahu, četnosti úkolů stejného typu, Ukázka práce, nabídka metodických materiálů. Práce s pracovním materiálem. (2 hod)</li>
          <li className="list-group-item">•	Cíl a smysl portfolia je především  důraz na osobní posun v učení každého dítěte - žáka. Možnosti využívat průběžné rozvíjející hodnocení včetně slovního a rozvíjí sebereflexi učitele. Ukázka metod formativní hodnocení, slovní hodnocení Ukázka možností posilování pozitivní motivace k aktivnímu a samostatnému učení (1 hod)</li>
        </ul></div>
      </LiFile >

    </ul>
  </BlockEx>
</Panel>;

var ZSKarierovePoradenstvi: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezkp1" aria-expanded="false" aria-controls="collapsezkp1">Role pedagoga v karierovém poradenství – 8 hodin </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ)
        <div className="collapse border rounded" id="collapsezkp1">
          <div className="m-3">
            <b>Teoretická část</b>   (2 vyučovací hodiny)<br />
            a)	Základní principy a postupy karierního poradenství<br />
            b)	Přehled moderních technik vedení rozhovorů  <br />
            <b>Praktická část</b> (6 vyučovacích hodin)<br />
            Komunikační dovednosti pedagoga potřebné k vedení koučovacího rozhovoru s možností následné aplikace ve výuce či poradenském rozhovoru.<br />
            Jedná se o aktivity zaměřené na:<br />
            •	sebepoznávací techniky pro ujasnění silných stránek a prostoru pro rozvoj žáka/studenta;<br />
            •	rozvoj individuálních komunikačních dovedností pedagoga s důrazem na využití vnitřní motivace v praxi;<br />
            •	vedení motivačních rozhovorů, aktivního naslouchání, poskytování a přijímání pozitivní zpětné vazby i konstruktivní kritiky;<br />
          </div>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezkp2" aria-expanded="false" aria-controls="collapsezkp2">Žák nadaný a mimořádně nadaný, možnosti jeho rozvoje – webinář </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ)
        <div className="collapse border rounded " id="collapsezkp2">
          <div className="m-3">
            <b>LEGISLATIVNÍ RÁMEC</b><br />
            •	Nová legislativa - Školský zákon a Vyhláška 27/2016 k rozvoji nadaných a mimořádně nadaných žáků. Vymezení základních pojmů nadání. RVP pro gymnázia a daný typ střední školy v kontextu s rozvoje nadání. (1 hodina)<br />
            <b>ZÁKLADNÍ POJMY</b><br />
            •	Základní pojmy z hlediska psychologické diagnostiky. Typologie nadání z hlediska psychologie. Typologie nadaných z hlediska projevů chování (1 hodina)<br />
            •	Možnosti a význam pedagogické diagnostiky, ukázka diagnostických metod. (1 hodina)<br />
            <b>PRINCIPY PRÁCE S NADANÝM A MIMOŘÁDNĚ NADANÝM ŽÁKEM</b><br />
            •	Charakteristické znaky osobitosti nadaných a mimořádně nadaných žáků. Odlišnosti ve vnímání a zpracování podnětů, v myšlení a prožívání.  Seznámení s různými přístupy k rozvoji nadání (1 hodina)<br />
            •	Základní principy v práci s nadanými a mimořádně nadanými žáky, případně s žáky s dvojí výjimečností. Možnosti jejich dalšího rozvoje rozumových schopností jako i jejich sociálně emočních kompetencí v rámci daného stupně vzdělávání. (1 hodina)<br />
            •	IVP, úpravy vzdělávacích obsahů a výstupů. Možnosti hodnocení žáků nadaných a mimořádně nadaných. Seznámení s terminologií, její aplikace v praxi. Sumativní, formativní hodnocení, autonomní, heteronomní hodnocení (2 hodiny)<br />
            <b>Téma –  UKÁZKA INPIRATIVNÍCH ÚLOH</b><br />
            •	Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání. (1 hodina)<br />
          </div>
        </div>
      </LiFile >

    </ul>
  </BlockEx>
</Panel>;

var ZSGenderova: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsesgt1" aria-expanded="false" aria-controls="collapsesgt1">Gender a genderová tematika na školách </b>
        (8 hod, akreditováno pro ZŠ, ŠD, ŠK, SVČ, ZUŠ, SŠ, VOŠ, DM, asistenti)
        <div className="collapse.show" id="collapsesgt1"><ul className="list-group"><li className="list-group-item">•	Co je gender  – klíčové pojmy a definice (0,5 hod).</li>
          <li className="list-group-item">•	Gender a výzkum  – seznámení se s výzkumy a nejnovějšími poznatky (0,5 hod).</li>
          <li className="list-group-item">•	Genderová identita/skupiny  – fyziologické a sociologické aspekty pohlaví  – „co to jsou za novoty?“ Transgender, cisgender, fluid/nebinární aj. (1 hod).</li>
          <li className="list-group-item">•	Genderové stereotypy v našem školství  – jaká je situace v naší škole, mapování a návrhy možných změn  – týmový workshop (2 hod).</li>
          <li className="list-group-item">•	Kde se vzala a proč genderová ideologie (0,5 hod).</li>
          <li className="list-group-item">•	Mikroagrese ve školním prostředí  – dopady na vzdělávání a osobnost žáka  – sebezkušenostní cvičení, sdílení prožitků, kroky pro změny v naší škole (1,5 hod).</li>
          <li className="list-group-item">•	Síť podpory v ČR  – jak můžeme být oporou studentům v řešení náročných situacích, využití podpory pro pedagogy (1 hod).</li>
          <li className="list-group-item">•	Průběžné diskuse a sdílení, průběžná zpětná vazba, otázky a odpovědi (1 hod).</li>
          <li className="list-group-item">•	Závěr programu.</li>
        </ul></div>
      </LiFile >
    </ul>
  </BlockEx>
</Panel>

var ZSCtenarskaGramotnost: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <Label bsStyle="warning">16</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseszcg1" aria-expanded="false" aria-controls="collapseszcg1">Čtenářská a informační gramotnost na ZŠ – 8 hodin </b> (8 hod, akreditováno pro ZŠ)
        <div className="collapse  border rounded" id="collapseszcg1">
          <div className="m-3">
            Teoretický obsah kurzu:<br />
            1.	Seznámení s principem třífázového učení E-U-R a se základními metodami a formami práce a jejich dělením – (2 hod)<br />
            Praktická část kurzu:<br />
            2.	Aplikace jednotlivých základních metod ve výuce – interaktivní část semináře – interaktivní zapojení účastníků – (6 hod)<br />
            •	Brainstorming – princip metody a různé způsoby jeho využití<br />
            •	Myšlenková mapa – princip metody a různé způsoby využití v jednotlivých částech hodiny<br />
            •	Práce s textem  – princip metody a různé způsoby využití (I.N.S.E.R.T., skládankové učení, .<br />
            •	Škálování - princip metody a různé způsoby využití ve výuce<br />
            •	další aktivizující metody a formy výuky vedoucí k rozvoji čtenářské gramotnosti<br />
            Diskuse nad konkrétními problémy.<br />
          </div>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseszcg2" aria-expanded="false" aria-controls="collapseszcg2">Rozvoj čtenářské gramotnosti u žáků ZŠ – 8 hodin </b> (8 hod, akreditováno pro ZŠ, ŠD, asistenti)
        <div className="collapse " id="collapseszcg2"><ul className="list-group">
          <li className="list-group-item">•	Čtenářská gramotnost  – charakteristika a základní aspekty (1 hod)</li>
          <li className="list-group-item">•	Čtenářské dílny (2 hod)</li>
          <li className="list-group-item">•	Jak budovat kladný vztah ke čtení  - Předpokladem pro rozvíjení čtenářské gramotnosti je potěšení z četby a vnitřní potřeba číst. (1 hod)</li>
          <li className="list-group-item">•	Doslovné porozumění textu ve všech předmětech, čtení s porozuměním  - Čtenářská gramotnost staví na dovednosti dekódovat psané texty a budovat porozumění na doslovné úrovni se zapojením dosavadních znalostí a zkušeností. (2 hod)</li>
          <li className="list-group-item">•	Kritické myšlení, metakognice, vysuzování, hodnocení (2 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseszcg3" aria-expanded="false" aria-controls="collapseszcg3">Čtenářství-průvodce každodenním životem, cesta je vzdělání_8 </b> (8 hod, akreditováno pro ZŠ)
        <div className="collapse " id="collapseszcg3"><ul className="list-group"><li className="list-group-item">•	seznámení, očekávání, ledolamka  – funkční proces (0,5 hod)</li>
          <li className="list-group-item">•	pojem čtenářská gramotnost, třífázový model učení:  - dílna čtení a čtenářská lekce,  - metody vedoucí k reflexi čtenáře  - grafické organizéry, záznamy (2 hod)</li>
          <li className="list-group-item">•	čtenářské strategie:  - předvídání, vyjasňování, shrnování, kladení otázek (1,5 hod)</li>
          <li className="list-group-item">•	oborové čtení  - vlastivěda / dějepis  - práce s populárně naučným textem mimo učebnice (2 hod)</li>
          <li className="list-group-item">•	prožitkové čtení  - jak na beletristický text (1,5 hod)</li>
          <li className="list-group-item">•	reflexe dne (0,5 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseszcg4" aria-expanded="false" aria-controls="collapseszcg4">Čtenářství a čtenářská gramotnost v současné škole </b> (8 hod, akreditováno pro ZŠ)
        <div className="collapse " id="collapseszcg4"><ul className="list-group"><li className="list-group-item">•	Seznámení se základními pojmy: čtenářská gramotnost, čtenářství, čtenářské kontinuum, metakognice, různé přístupy k rozvoji ČG (1 hodina)</li>
          <li className="list-group-item">•	Čtenářství  - rozvoj čtenářského klimatu ve škole, metody a možnosti (2 hodiny)</li>
          <li className="list-group-item">•	Dílna čtení : její varianty, organizace dílny, otázky a úkoly, organizéry, minilekce se čtenářskými strategiemi (2 hodiny)</li>
          <li className="list-group-item">•	Čtenářské strategie  - metody a postupy pro rozvíjení jednotlivých dovedností, ukázky práce s textem beletristickým a naučným, skládačkové varianty metod, vliv technologií na změnu pohledu na čtenářství (3 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseszcg5" aria-expanded="false" aria-controls="collapseszcg5">Rozvoj předčtenářské gramotnosti – 8 hodin  </b> (8 hod, akreditováno pro MŠ)
        <div className="collapse " id="collapseszcg5"><ul className="list-group"><li className="list-group-item">•	Vymezení pojmu čtenářská gramotnost a pregramotnost, Předškolní období a vnitřní motivace ke čtení, budování si vztahu ke knihám a porozumění čtenému textu (1 hodina)</li>
          <li className="list-group-item">•	Percepční a motorická oslabení a jejich náprava v předškolním věku jako prevence školní neúspěšnosti. Rozvoj smyslového vnímání  – zrakové vnímání, Činnosti a hry pro rozvoj zrakového vnímání, Rozvoj fonematického sluchu jako základ pro čtení a psaní. (2 hodiny)</li>
          <li className="list-group-item">•	Rozvoj grafomotoritky jako základ pro správný rozvoj písemného projevu., Fáze a metodický postup v nácviku grafomotoriky, Nácvik grafomotoriky, využití ergonomických pomůcek pro správný rozvoj grafomotoriky. (2 hodiny)</li>
          <li className="list-group-item">•	Orientace v prostoru a vnímání času, Činnosti a hry rozvíjející orientaci v prostoru  – pohybové hry, Problémy způsobující oslabené prostorové vnímání a vnímání času (1 hodina)</li>
          <li className="list-group-item">•	Rozvoj představivosti a fantazie z hlediska důležitosti pro rozvoj předčtenářské gramotnosti, Rozvoj sluchové a zrakové paměti jako základ pro čtení s porozuměním (1 hodina)</li>
          <li className="list-group-item">•	Úrovně myšlení  – názorně činnostní, názorně obrazné, slovně-logické, Hry a činnosti pro rozvoj myšlení dětí předškolního věku, Úloha rodiny v souvislosti se čtením a ve vztahu k předčtenářské gramotnosti, Vývoj a rozvoj řeči a komunikačních schopností, slovní zásoba, znalost významu slov, Činnosti a hry pro rozvoj řeči, slovní zásoby a komunikace z hlediska rozvoje čtenářské gramotnosti (1 hodina)</li>

        </ul>
          Součástí školení je i ukázka pracovních listů, ukázky jednotlivých činností a metod pro rozvoj předčtenářské gramotnosti
      </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseszcg6" aria-expanded="false" aria-controls="collapseszcg6">Rozvoj čtenářské pregramotnosti u dětí v MŠ – 16 hodin  </b> (16 hod, akreditováno pro MŠ)
  <div className="collapse " id="collapseszcg6"><ul className="list-group"><li className="list-group-item">•	Čtenářská pregramotnost  – charakteristika a základní aspekty, orientace v knize, klíčové kompetence dítěte vztahující se k rozvoji čtenářské pregramotnosti, motivace dětí ke kladnému vztahu ke knize, jak spolupracovat s rodinou, kde všude je čtenářšká pregramotnost potřebná.    (2 hod)</li>
          <li className="list-group-item">•	Orientace při čtení  – orientace dítěte v prostoru, čase, vztazích, (2 hod)</li>
          <li className="list-group-item">•	Obrázkové osnovy, obrázkové čtení  – jak vytvářet obrázkové osnovy, vhodné knihy a autoři pro rozvoj gramotnosti, vlastní vytváření obrázkových osnov, jak správně pracovat s osnovou.  (4 hod)</li>
          <li className="list-group-item">•	Kritické myšlení, metakognice, vysuzování, hodnocení  – poznávání věcí z okolí v širším kontextu, důležitost rozvoje obsahu slov, které děti používají, což jim usnadňuje lepší myšlení, hodnocení a analyzování situací. Kritický pohled dítěte na to, co poslouchá a jak to vyhodnocuje, které informace jsou pro něj důležité.  (2 hod) </li>
          <li className="list-group-item">•	Zkušenost zprostředkovaného učení a instrumentální obohacování R. Feuersteina  – seznámení se základními principy metody FIE a zkušenosti zprostředkovaného učení R. Feuersteina, která je vhodná pro rozvoj předčtenářské gramotnosti.  (4 hod) </li>
          <li className="list-group-item">•	Příklady dobré praxe, analýza vlastní práce  – pedagogové samy přinesou vlastní příklady dobé praxe, které používají. A seznámí s klady i zápory metod.  (2 hod) </li>
        </ul></div>
      </LiFile >
    </ul>
  </BlockEx>
</Panel >

var ZSMatematickaGramotnost: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <Label bsStyle="warning">16</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezmg1" aria-expanded="false" aria-controls="collapsezmg1">GeoGebra jako nástroj rozvoje matematické gramotnosti na ZŠ </b> (8 hod, akreditováno pro ZŠ)
        <div className="collapse " id="collapsezmg1">
          Teoretický obsah kurzu (1,5 hodiny):<br />
          <ul className="list-group">
            <li className="list-group-item">•	Seznámení s problematikou nasazení programu GeoGebra do hodin matematiky na základní škole (principy použití, pozitiva, negativa a rizika nasazení programu) (0,5 hodin)</li>
            <li className="list-group-item">•	Instalace programu GeoGebra  – odlišení jednotlivých instalačních balíčků (0,5 hodin)</li>
            <li className="list-group-item">•	Seznámení s webovou podporou programu a úložištěm již hotových materiálů, které je možno rovnou využít ve výuce (bez vlastní tvorby) (0,5 hodin)</li>
          </ul>
          Praktická část kurzu (6,5 hodin):<br />
          <ul className="list-group">
            <li className="list-group-item">•	Pracovní prostředí programu GeoGebra (panel nástrojů, algebraické okno, tabulka, nákresny, vstupní panel), možnosti zjednodušení panelu pro výuku na ZŠ (0,5 hodin)</li>
            <li className="list-group-item">•	Změny vlastnosti objektů včetně pokročilého nastavení (0,5 hodin)</li>
            <li className="list-group-item">•	GeoGebra jako nástroj pro tvorbu vlastního didaktického materiálů (např. ukládání vytvořených souborů, export do různých typů souborů včetně exportu do interaktivní webové stránky) (0,5 hodin)</li>
            <li className="list-group-item">•	Aplikace programu do výuky planimetrie, stereometrie, aritmetiky, algebry, statistiky a funkcí (včetně aplikace v rámci propedeutik v těchto oblastech) (1,5 hodiny)</li>
            <li className="list-group-item">•	Využití programu jako nástroje rozvoje matematické gramotnosti, propojování geometrických a algebraických interpretací v matematice prostřednictvím programu (1,5 hodiny)</li>
            <li className="list-group-item">•	Základní ovládání prostředí 3D (1 hodina)</li>
            <li className="list-group-item">•	Diskuse nad konkrétními problémy a specifiky u žáků na základní škole (1 hodina)</li>
          </ul>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezmg2" aria-expanded="false" aria-controls="collapsezmg2">Moderní technologie při rozvoji matematické gramotnosti na ZŠ </b> (8 hod, akreditováno pro ZŠ, ŠD, ŠK, asistenti)
        <div className="collapse " id="collapsezmg2"><ul className="list-group"><li className="list-group-item">•	Principy využití moderních technologií (1 hodina)</li>
          <li className="list-group-item">•	Seznámení s problematikou nasazení výukových technologií do výuky (pozitiva, negativa a rizika nasazení) (1 hodina)</li>
          <li className="list-group-item">•	Seznámení s úložišti již hotových materiálů, které je možno rovnou využít ve výuce (bez vlastní tvorby) a různými webovými stránkami s videi, texty i jinými materiály, které je možné vhodně využít nejen k podpoře rozvoje matematické gramotnosti (1 hodin)</li>
          <li className="list-group-item">•	Příklady her a prostředí na internetu pro podporu matematické gramotnosti (1 hodina)</li>
          <li className="list-group-item">•	Využití pojmových map, sdílených poznámek a dokumentů ve výuce (1 hodina)</li>
          <li className="list-group-item">•	Rozšířená realita jako nástroj motivace i rozvoje nejen matematické gramotnosti (1 hodina)</li>
          <li className="list-group-item">•	Programy a aplikace pro jednoduché vytváření zábavných kvízů (1 hodina)</li>
          <li className="list-group-item">•	Použití programu Formulator Tarsia pro tvorbu domin, triomin a jiných her vhodných k oživení procvičovaného učiva (2 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezmg3" aria-expanded="false" aria-controls="collapsezmg3">Deskové a karetní hry pro rozvoj matematické gramotnosti </b> (8 hod, akreditováno pro ZŠ, ŠD, ŠK, asistenti)
        <div className="collapse " id="collapsezmg3"><ul className="list-group"><li className="list-group-item">•	Rozdělení her dle jejich typu (1 hodina)</li>
          <li className="list-group-item">•	Didaktická hra jako zvnějšku řízená motivovaná činnost, při které si žáci procvičují, upevňují vědomosti, dovednosti a návyky a rozvíjejí psychické funkce (paměť, představivost, postřeh atd.) (1 hodina)</li>
          <li className="list-group-item">•	Didaktická hra jako nástroj rozvoje spolupráce mezi žáky (např. The Game) (1 hodina)</li>
          <li className="list-group-item">•	Hry pro rozvoj rovinné a prostorové představivosti (např. Digit, Klotz, Imagination, Blokus 3D, Penta, Cuts) (2 hodiny)</li>
          <li className="list-group-item">•	Hry pro rozvoj početních dovedností (např. Lobo 77, Cink, Math Fluxx) (1,5 hodiny)</li>
          <li className="list-group-item">•	Hry k procvičení aritmetických operací (např. Mix Match, Speedy) (1,5 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezmg4" aria-expanded="false" aria-controls="collapsezmg4">Rozvoj matematické gramotnosti u žáků ZŠ – 8 hodin </b> (8 hod, akreditováno pro ZŠ, ŠD, asistenti)
        <div className="collapse " id="collapsezmg4"><ul className="list-group"><li className="list-group-item">•	Matematická gramotnost  – charakteristika (1 hod)</li>
          <li className="list-group-item">•	Správné kladení otázek a vytváření matematických představ (2 hod)</li>
          <li className="list-group-item">•	FIE v matematice a práce s chybou (2 hod)</li>
          <li className="list-group-item">•	Slovní úlohy  – instrukce (1 hod)</li>
          <li className="list-group-item">•	Problémové vyučování (1 hod)</li>
          <li className="list-group-item">•	Matematické hry (1 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezmg5" aria-expanded="false" aria-controls="collapsezmg5">Jak na distanční výuku matematiky? </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ)
        <div className="collapse " id="collapsezmg5"><ul className="list-group"><li className="list-group-item">•	Software využitelný při on-line výuce (2 hodiny)</li>
          <li className="list-group-item">•	Využití webových stránek sloužící k výuce on-line (1 hodina)</li>
          <li className="list-group-item">•	GeoGebra  – tvorba materiálů online, využívání již vytvořených dostupných materiálů, tvorba vlastních materiálů a jejich sdílení (2 hodiny)</li>
          <li className="list-group-item">•	Jak komunikovat s žáky on-line (1 hodina)</li>
          <li className="list-group-item">•	Praktická cvičení  – praktické využití jednotlivých nástrojů k distančnímu učení matematiky (2 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezmg6" aria-expanded="false" aria-controls="collapsezmg6">Rozvoj předmatematické gramotnosti – 8 hodin  </b> (8 hod, akreditováno pro MŠ)
        <div className="collapse " id="collapsezmg6"><ul className="list-group"><li className="list-group-item">•	Cíle předmatematické výchovy, příprava na matematiku, důležitost předškolní přípravy a pozdější úspěšnost ve školní matematice. (1 hodina) </li>
          <li className="list-group-item">•	Příprava dítěte na zpracování informací v zadání slovní úlohy, rozvoj řeči, komunikace, paměti, představ, prostorového vnímání, Obrázek jako zdroj informací při formulaci slovní úlohy, Rozvoj komunikace, zaměřenost na vybraná slova v textu a v poslechu, Praktické činnosti zaměření na rozvoj komunikačních schopností, zaměřenost na vybrané objekty a slova ( 2 hodiny)</li>
          <li className="list-group-item">•	Percepční a motorická oslabení a jejich náprava v předškolním věku jako prevence školní neúspěšnosti. Porovnávání  – charakter porovnávaných objektů, Zapojení smyslového vnímání - hmat, sluch, zrak, Aktivity k přiřazování, hry, orientace v prostoru, rozvoj hrubé i jemné motoriky, Struktura čísla, třídění podle daného kritéria, Aktivity vztahující se k třídění (3 hodiny)</li>
          <li className="list-group-item">•	Číslo a číslice, představa čísla, Počet  – určování počtu, počítání po jedné, určování počtu objektů na první pohled, Aktivity k rozvoji předmatematické gramotnosti (2 hodiny)</li>
        </ul>
          Součástí školení je i ukázka pracovních listů, ukázky jednotlivých činností a metod pro rozvoj předčtenářské gramotnosti
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezmg7" aria-expanded="false" aria-controls="collapsezmg7">Rozvoj matematické pregramotnosti u dětí v MŠ – 16 hodin  </b> (16 hod, akreditováno pro MŠ)
        <div className="collapse " id="collapsezmg7"><ul className="list-group"><li className="list-group-item">•	Zkušenost zprostředkovaného učení a instrumentální obohacování R. Feuersteina, seznámení se se základními principy metody FIE, jako jedné z metod, která je vhodná pro rozvoj matematické pregramotnosti.  (2 hod) </li>
          <li className="list-group-item">•	Vyvozování obsahu čísla  – vytváření obsahu čísla, manipulační hry, využití přirozeného prostředí, používání karet s různým počtem. Hry, které rozvíjejí matematické představy. (2 hod)</li>
          <li className="list-group-item">•	Správné kladení otázek  – efektivní kladení otázek, učitelé budou seznámeni s principy efektivní komunikace, jak mají postupovat. Jak utvořit otázku tak, aby jim dítě rozumělo. Vhodné používání slov. Dostatek času při kladení otázek.  (2 hod)</li>
          <li className="list-group-item">•	Práce s chybou  – učitelé se seznámí s chybou z teoretického i praktického hlediska, společně si prožijí zážitek z chyby.  (2 hod)</li>
          <li className="list-group-item">•	Instrukce  – jak správně pracovat s instrukcí, druhy instrukcí použitelných v MŠ, ilustrace, hra, nápodoba, piktogram. (1 hod)</li>
          <li className="list-group-item">•	Problémové vyučování  – základní principy problémové výuky v MŠ, jak správně vybrat problém, jak s ním pracovat.  (2 hod)</li>
          <li className="list-group-item">•	Matematické hry  – hry na rozvoj posloupnosti, pořadí, porovnávání. (1 hod)</li>
          <li className="list-group-item">•	Matematické operace v běžném životě  – které běžné situace potřebují matematickou pregramotnost ( prostírání, oblékání, cesta do školky…) (1 hod)</li>
          <li className="list-group-item">•	Příklady dobré praxe  – pedagogové si připraví vlastní příklady dobré praxe, které společně analyzují s ostatními pedagogy, seznámí s klady i zápory používaných metod. (3 hod)</li>
          <li className="list-group-item">•	Zkušenost zprostředkovaného učení  – R. Feuerstein  – seznámení</li>
        </ul></div>
      </LiFile >
    </ul>
  </BlockEx>
</Panel>

var ZSRozvojPodnikavosti: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezrp1" aria-expanded="false" aria-controls="collapsezrp1">Rozvoj podnikavosti a zásady soukromého podnikání – 8 hodin </b> (8 hod, akreditováno pro SŠ, VOŠ, pro ZŠ od listopadu, v rámci Šablon JAK i pro ZŠ))
                <div className="collapse " id="collapsezrp1"><ul className="list-group"><li className="list-group-item">•	<b>Seznámení se se smyslem a obsahem podnikavosti a soukromého podnikání.</b> Osobnostní předpoklady, schopnosti a dovednosti. Etika. Pozitiva i rizika podnikání. (1 hodina)</li>
          <li className="list-group-item">•	<b>Cesta od vize k dosažení cíle (prakticá cvičení)</b>: motivace k podnikavosti, stanovení reálných cílů, plánování, podnikatelský záměr, navržení produktu, kreativita, kritické myšlení, SMART technika, změny jako součást podnikání, analýza situace, organizace, hodnocení situace, udržení podnikání, konkurenční prostředí, zpětná vazba (3 hodiny)</li>
          <li className="list-group-item">•	<b>Finanční gramotnost</b>: základní terminologie, účetnictví, cash flow, finanční produkty, marketingové nástrahy (1 hodina)</li>
          <li className="list-group-item">•	<b>Práce s časem</b>: sebeřízení, třídění informací dle matice důležité/naléhavé, plánování z pohledu časových možností  (1 hodina)</li>
          <li className="list-group-item">•	<b>Manažerské dovednosti</b>: navazování kontaktů a spolupráce, komunikační dovednosti, organizace práce a vedení týmu, leadership, prezentace firmy, projektu  (1 hodina)</li>
          <li className="list-group-item">•	Fiktivní firmy a projektové vyučování, tvorba projektů  (1 hodina)</li>
        </ul></div>
      </LiFile >
      <LiFile>
        <b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezrp3" aria-expanded="false" aria-controls="collapsezrp3">Výchova k podnikavosti a manažerské dovednosti–8 hod</b> (8 hod, akreditováno pro SŠ, VOŠ, pro ZŠ od listopadu, v rámci Šablon JAK i pro ZŠ)
        <div className="collapse " id="collapsezrp3"><ul className="list-group"><li className="list-group-item">•	Úvod do tématu podnikavosti a výchově v podnikání. Etika v podnikání. Fiktivní firma jako projekt. (provázáno celým seminářem) (2 hodiny)</li>
          <li className="list-group-item">•	Stanovení si cíle, oblast podnikání: dobrá vize jako základ, stanovení si reálných cílů a plánování, podnikatelský záměr, SMART technika, změny jako součást podnikání, konkurenční prostředí a udržení podnikání (3 hodiny)</li>
          <li className="list-group-item">•	Manažerské dovednosti: osobnost manažera, navazování kontaktů a spolupráce, komunikační dovednosti, organizace práce a vedení týmu, leadership, týmové role nejen zaměstnanců prezentace firmy, projektu (3 hodiny)</li>
        </ul></div>
      </LiFile >


    </ul>
  </BlockEx>
</Panel>

var ZSDiagnostika: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezd01" aria-expanded="false" aria-controls="collapsezd01">Pedagogická diagnostika dítěte v MŠ </b>(8 hod, akreditováno pro MŠ a asistenty pedagoga)
        <div className="collapse border rounded " id="collapsezd01">
          <div className="m-3">
            <ul className="list-group">
              <li className="list-group-item">•	Základní pojmy a metody pedagogické diagnostiky. Etické principy v diagnostice. (1 hod)</li>
              <li className="list-group-item">•	Komplexní přístup k diagnostice (respektování vnějších i vnitřních činitelů ovlivňujících vývoj dítěte).   Vliv rodiny, společnosti, mateřské školy na aktuální stav dítěte. (1 hod)</li>
              <li className="list-group-item">•	Diagnostika základních psychických funkcí, které ovlivňují osvojování vědomostí a dovedností. Zraková a sluchová percepce (fonematický sluch), vizuomotorická koordinace. (1 hod)</li>
              <li className="list-group-item">•	Diagnostika vývoje řeči. Porozumění řeči a vyjadřování. Zvuková a obsahová stránka řeči. Jazyková kompetence. (1 hod)</li>
              <li className="list-group-item">•	Komplexní diagnostika motoriky. Jemná a hrubá motorika, lateralita, grafomotorika. (1 hod)</li>
              <li className="list-group-item">•	Grafomotorika. Sezení při psaní, úchop psacího náčiní při provádění uvolňovacích cviků a při výtvarných technikách. Některé poznatky z diagnostiky kresby. (1 hod)</li>
              <li className="list-group-item">•	Chování dítěte. Negativní projevy v chování dítěte, diagnostika možných příčin. (1 hod)</li>
              <li className="list-group-item">•	Využití poznatků diagnostiky při volbě metod práce, přístupu k dítěti. Důsledky vývojových deficitů na další vývoj dítěte. (1 hod)</li>
            </ul>
          </div>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezd001" aria-expanded="false" aria-controls="collapsezd001">Školní zralost – příprava předškoláka </b>(8 hod, doporučeno pro MŠ, 1.st. ZŠ a asistenty pedagoga)
        <div className="collapse border rounded " id="collapsezd001">
          <div className="m-3">
            <ul className="list-group">
              <li className="list-group-item">•	pojem školní zralost a školní připravenost – vysvětlení pojmu, vývoj školní zralosti, propojení jednotlivých oblastí školní zralosti (2 hod)</li>
              <li className="list-group-item">•	hrubá motorika, jemná motorika (1 hod)</li>
              <li className="list-group-item">•	grafomotorika (1 hod)</li>
              <li className="list-group-item">•	řeč a vyjadřovací schopnosti (0,5 hod)</li>
              <li className="list-group-item">•	zrakové vnímání, sluchové vnímání (1 hod)</li>
              <li className="list-group-item">•	matematická a čtenářská pregramotnost (1 hod)</li>
              <li className="list-group-item">•	sociální a pracovní zralost (0,5 hod)</li>
              <li className="list-group-item">•	legislativa OŠD, vyšetření v pedagogicko-psychologické poradně, spolupráce s rodiči (0,5 hod)</li>
              <li className="list-group-item">•	diskuse (0,5 hod)</li>
            </ul>
          </div>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezd1" aria-expanded="false" aria-controls="collapsezd1">Sociální klima třídy a pedagogická diagnostika učitele </b> (8 hod, akreditováno pro MŠ, ZŠ, SŠ, VOŠ, asistenti)
                <div className="collapse border rounded " id="collapsezd1">
          <div className="m-3">
            <b>Teoretická část  (4 vyučovací hodiny)</b><br />
            •	Objasnění základních pojmů - klima třídy, sociální klima třídy, spolutvůrci třídního klimatu,<br />
            •	Pedagogická diagnostika školní třídy – vymezení základních pojmů a metod pedagogické diagnostiky (diagnóza, prognóza, dispozice, proces – cíl, oblasti, diagnostický postup, chyby při diagnostikování ze strany pedagoga, charakteristické rysy, typy, mechanismy, které toto klima ovlivňují, prevence vztahů, pozice a role žáka ve školní třídě)<br />
            •	Sociální klima třídy a pedagogická diagnostika<br />
            -	Diagnostické kompetence učitele – metody, nástroje<br />
            a)	Pozorování – obecné principy, průběh, zápis<br />
            b)	Rozhovor – princip, vedení rozhovoru, typy, techniky kladení otázek<br />
            c)	Dotazníky – typy, sestavování<br />
            d)	Sociometrické metody<br />
            - sběr dat, vyhodnocování, interpretace a práce s nimi<br />
            - nejčastější chyby v sociální percepci<br />
            <br />
            <b>Praktická část (4 vyučovací hodiny)</b><br />
            •	Nabídka činností zaměřených na podporu utváření pozitivního sociálního klimatu ve třídě a transformace na konkrétní činnosti spojené s nástroji pedagogické diagnostiky (např. účastník si prakticky ověří získané poznatky na základě nabídky konkrétních aktivit průřezového tématu OSV, zacíleného na věk). Nabídky aktivit z vlastního zkušenostního dvouletého výcviku u citovaných osobností a také nabídky jejich publikací - doc. PhDr. Soni Hermochové, CSc., doc. PhDr. Josefa Valenty, CSc., Doc. PhDr. Hany Kasíkové, CSc., Mgr. Petra Kříže a dalších osobností<br />
            •	Poslední část bude věnována i dotazům a řízené diskuzi z vlastní praxe zúčastněných ped. pracovníků.<br />
            •	způsoby vedení poradenského rozhovoru koučovacím způsobem - práce se škálou, kladení otázek, model GROW, atd.<br />
          </div>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezd2" aria-expanded="false" aria-controls="collapsezd2">Sociální klima třídy a pedagogická diagnostika učitele – webinář </b> (8 hod, akreditováno pro MŠ, ZŠ, SŠ, VOŠ, asistenti)
                 <div className="collapse border rounded " id="collapsezd2">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny - 90 minut)</b><br />
            <b>Teoretická část 1 – základní pojmy a pedagogická diagnostika</b><br />
            •	Objasnění základních pojmů - klima třídy, sociální klima třídy, spolutvůrci třídního klimatu,<br />
            •	Pedagogická diagnostika školní třídy – vymezení základních pojmů a metod pedagogické diagnostiky (diagnóza, prognóza, dispozice, proces – cíl, oblasti, diagnostický postup, chyby při diagnostikování ze strany pedagoga, charakteristické rysy, typy, mechanismy, které toto klima ovlivňují, prevence vztahů, pozice a role žáka ve školní třídě)<br />
            <br />
            <b>Blok 2 ( 2 vyučovací hodiny – 90 minut)</b><br />
            <b>Teoretická část 2 - Sociální klima třídy a pedagogická diagnostika</b><br />
            -	Diagnostické kompetence učitele – metody, nástroje<br />
            a)	Pozorování – obecné principy, průběh, zápis<br />
            b)	Rozhovor – princip, vedení rozhovoru, typy, techniky kladení otázek<br />
            c)	Dotazníky – typy, sestavování<br />
            d)	Sociometrické metody<br />
            - sběr dat, vyhodnocování, interpretace<br />
            - nejčastější chyby v sociální percepci<br />
            <br />
            <b>Blok 3 ( 2 vyučovací hodiny – 90 minut)</b><br />
            <b>Praktická část 1</b><br />
            Nabídka činností zaměřených na podporu utváření pozitivního sociálního klimatu ve třídě a transformace na konkrétní činnosti spojené s nástroji pedagogické diagnostiky<br />
            a) Rozhovor – nácvik vedení rozhovoru<br />
            b) Dotazníky – nácvik tvorby<br />
            c) Pozorování – nácvik struktury tvorby předlohy<br />
            <br />
            <b>Blok 4 ( 2 vyučovací hodiny – 90 minut)</b><br />
            <b>Praktická část 2</b><br />
            Nestandardizované nástroje diagnostiky tříd:<br />
            Např:<br />
            a) pohybové hry (např. aktivity – Dotkni se toho, kdo…, Místo vedle mě je prázdné…,Místa si vymění ti, kteří ...,   Sociometrie tělem.. a další)<br />
            b) techniky tužka – papír (např. aktivity Technika deseti situací, Erb, Pyramida, Obláčky..)<br />
            Nabídka námětů aktivit, které budou účastníkům prezentovány na webináři jsou vybrány z vlastního zkušenostního dvouletého výcviku u citovaných osobností a také nabídky jejich publikací - doc. PhDr. Soni Hermochové, CSc., doc. PhDr. Josefa Valenty, CSc., Doc. PhDr. Hany Kasíkové, CSc., Mgr. Petra Kříže a dalších osobností<br />
            Tato část bude věnována i dotazům a řízené diskuzi z vlastní praxe zúčastněných ped. pracovníků.<br />
            <br />
          </div></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezd3" aria-expanded="false" aria-controls="collapsezd3">Kázeňské přestupky a možnosti jejich řešení v rámci třídy  </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, SŠ, DM, asistenti, výchovní poradci, speciální pedagogové, psychologové)
        <div className="collapse " id="collapsezd3"><ul className="list-group"><li className="list-group-item">•	Pedagogická diagnostika orientovaná na žáka, učitele a edukační proces (1 hod)</li>
          <li className="list-group-item">•	Možnosti diferencovaného vzdělávání jako prevence problémového chování (1 hod)</li>
          <li className="list-group-item">•	Příčiny problémového chování u žáků, Diagnostická kritéria ADHD, Příčiny poruch chování žáků, Formy rizikového chování  – zneužívání návykových látek, kriminalita, šikana, hostilita, agrese, agresivita, vrstevnické vztahy, školní problémy, přestupky a ostatní rizikové formy chování (4 hod)</li>
          <li className="list-group-item">•	Praktická část: Ukázka práce s třídním kolektivem, ukázka práce v rámci třídnických hodin, ukázka práce - nabídka metodických materiálů. Diskuze, práce s kazuistikami (2 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezd4" aria-expanded="false" aria-controls="collapsezd4">Pedagogická diagnostika, zrání dítěte a kázeňské přestupky v MŠ  </b> (8 hod, v procesu akreditace)
        <div className="collapse " id="collapsezd4">
          <ul className="list-group">
            <li className="list-group-item">•	Specifika dětského věku, emoční a sociální rozvoj dětí. Normativní vývoj, dítě intaktní a dítě se speciálně vzdělávacími potřebami. Vysvětlení základních pojmů (2 hodiny)</li>
            <li className="list-group-item">•	<b>Základní sociální potřeby</b> dítěte a možné důsledky nesycené potřeby na chování dítěte, negativní projevy chování dítěte.<br/>  
              <b>Kázeňské problémy</b> a možnosti jejich řešení v dětském věku, důsledky v rámci sociální skupiny.  (2 hodiny)
</li>
            <li className="list-group-item">•	Pedagogická diagnostika orientovaná na výchovně vzdělávací proces. Pedagogická diagnostika orientovaná na dítě. Pedagogická diagnostika orientovaná na samotného pedagogického pracovníka. <br />  
              <b>Možnosti pedagogické diagnostiky</b> - vhodnost pro stanovení cílů, metod a forem práce v rámci prvního stupně podpůrného opatření s respektování potenciálu dítěte.<br />  
              <b>Diagnostika základních psychických funkcí</b>, které ovlivňují osvojování vědomostí a dovedností. Zraková a sluchová percepce (fonematický sluch), vizuomotorická koordinace. Vývoj řeči. Porozumění řeči a vyjadřování. Zvuková a obsahová stránka řeči. Jazyková kompetence. Jemná a hrubá motorika, lateralita. Grafomotorika. Sezení při psaní, úchop psacího náčiní při provádění uvolňovacích cviků a při výtvarných technikách. Některé poznatky z diagnostiky kresby.<br/> 
              <b>Specifické poruchy chování v předškolním věku.</b> Základní pojmy, specifické poruchy chování, ADHD, ADD. Vztah mezi specifickými poruchami chování a specifickými poruchami učení na bázi ADHD. Postavení dítěte s ADHD v mateřské škole Prevence vzniku poruch chování u dětí s ADHD. Vliv rodiny, vrstevnické skupiny, učitele mateřské školy a širšího okolí  na aktuální vývoj dítěte. (2 hodiny)</li>
            <li className="list-group-item">•	<b>Využití poznatků diagnostiky</b> při volbě metod práce, přístupu k dítěti. Důsledky vývojových deficitů na další vývoj dítěte. Práce s metodickým materiálem, ukázka diagnostických materiálů, možnosti získání odborného osvědčení pro použití standardizovaných testů a práci s odborným diagnostickým materiálem /Diagnostika čtenářských, matematických schopností a dovedností předškolního věku /Diagnostika Brno/ MaTeRS, Test rizika, Posuzovací škála AHDH aj/ Etické principy v diagnostice. Příklady dobré praxe, kazuistiky. Vyhláška 27/2016 Sb., ve znění pozdějších předpisů. (2 hodiny)</li>

        </ul></div>
      </LiFile >

    </ul>
  </BlockEx>
</Panel>

var ZSInovace: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi100" aria-expanded="false" aria-controls="collapsezi100">Digitální kompetence na základní škole
      </b> (doporučeno pro ZŠ a asistenty pedagoga)
        <div className="collapse " id="collapsezi100">
          <p>Kurz je zaměřen na rozvoj vybraných digitálních kompetencí ve výuce na základní škole, které učitelé využijí ve své praxi v souladu s novými cíli v RVP. Účastníci získají znalosti a dovednosti v oblasti metodiky, které jim umožní v rámci své výuky u žáků rozvíjet vybrané kompetence vedoucí k orientaci v digitálním světě a k účelnému a bezpečnému využívání digitálních technologií.</p>
          <p>Vybraná témata:</p>
          <ul className="list-group">
            <li className="list-group-item">•	výběr vhodných zdrojů dat, jejich citace a bezpečné uložení dat,</li>
            <li className="list-group-item">•	tvorba digitálního materiálu pro prezentaci dat,</li>
            <li className="list-group-item">•	náhled do využití umělé inteligence,</li>
            <li className="list-group-item">•	online aplikace pro zpestření a procvičení učiva,</li>
            <li className="list-group-item">•	online nástroje pro skupinovou práci,</li>
            <li className="list-group-item">•	praktické mobilní aplikace do školy i života</li>
          </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi110" aria-expanded="false" aria-controls="collapsezi110">Digitální kompetence na ZŠ - matematika
      </b> (doporučeno pro ZŠ a asistenty pedagoga)
        <div className="collapse " id="collapsezi110">
          <p>Kurz je zaměřen na rozvoj digitálních kompetencí ve výuce matematiky, které učitelé využijí ve své praxi v souladu s novými cíli v RVP. Účastníci získají znalosti a dovednosti v oblasti metodiky, které jim umožní v rámci své výuky u žáků rozvíjet kompetence vedoucí k orientaci v digitálním světě a k účelnému a bezpečnému využívání digitálních technologií v matematice.</p>
          <p>Kurz ukáže, jak využívat digitálních pomůcek při modelování matematických situací a řešení matematických úloh i problémů a volit efektivní postupy v následujících oblastech:</p>
          <ul className="list-group">
            <li className="list-group-item">•	algoritmické myšlení a procedurální zběhlost,</li>
            <li className="list-group-item">•	číslo a proměnná,</li>
            <li className="list-group-item">•	závislosti, vztahy a práce s daty,</li>
            <li className="list-group-item">•	geometrie v rovině a prostoru.</li>
          </ul>
          <p>V rámci semináře se pro tyto účely účastníci naučí využívat dynamický geometrický, tabulkový procesor a vybrané webové stránky, které umožňují dynamické interpretace čísel a proměnných.</p>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi123" aria-expanded="false" aria-controls="collapsezi123">Změny v RVP a úpravy ŠVP v rámci programu InspIS ŠVP 
      </b> (8 hod, doporučeno pro MŠ, ZŠ, ZUŠ, SŠ, VOŠ)
        <div className="collapse " id="collapsezi123">
          <ul className="list-group">
            <li className="list-group-item">
              1. Aktuální legislativní rámec školského zákona, který souvisí s tvorbou, úpravou a efektivním využíváním školních vzdělávacích programů
            </li>    
            <li className="list-group-item">    
              2.  připravované změny související s revizemi RVP - (1,5h)
            </li>          
            <li className="list-group-item">            
              3. význam a možnosti využití elektronického systému InspIS ŠVP - (0,5h)
            </li>
            <li className="list-group-item">  
                  4. Práce v systému InspIS ŠVP (5 hod)
              <ul className="list-group">
                <li className="list-group-item">  
                  • přihlášení do systému podání základních informací a založení ŠVP
                </li>
                <li className="list-group-item">  
                  • tvorba učebního plánu, poznámek, přehledu týdnů - upřesnění informací
                </li>
                <li className="list-group-item">  
                  • forma vzdělávání - vzdělávací obsah, strategie naplňování KK - konkrétní příklady, vazby mezi výstupy RVP, ŠVP, učivem, …..
                </li>
                <li className="list-group-item">  
                  • popisné informace k systému InspIS ŠVP – formulář ŠVP – vyplnění, konkrétní informace o změnách ve formuláři
                </li>
                <li className="list-group-item">  
                  • kontrola a schválení ŠVP
                  </li>
              </ul>
            </li>
            <li className="list-group-item">  
              Diskuse, dořešení konkrétních dotazů účastníků
            </li>  
          </ul>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi1" aria-expanded="false" aria-controls="collapsezi1">Změny v RVP a úpravy ŠVP </b> (8 hod, akreditováno pro MŠ, ZŠ, ZUŠ, SŠ, VOŠ)
                <div className="collapse " id="collapsezi1">
          <ul className="list-group"><li className="list-group-item">•	Aktuální legislativní rámec školského zákona, který souvisí s tvorbou, úpravou a efektivním využíváním školních vzdělávacích programů  – (2 hod)</li>
          <li className="list-group-item">•	Změny vyvolané revizí RVP (MŠMT)  - (2 hod)</li>
          <li className="list-group-item">•	Aktuální úpravy ŠVP související s revizemi a úpravami v RVP  – (1 hod)</li>
          <li className="list-group-item">•	ŠVP a nová strategie vzdělávání, modifikace vzdělávacího obsahu, rozsahu a zaměření výuky, metod práce na základě provedených revizí RVP (2 hod)</li>
          <li className="list-group-item">•	Vzájemná výměna zkušeností, diskuse  – (1 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi2" aria-expanded="false" aria-controls="collapsezi2">Změny v RVP a úpravy ŠVP – webinář </b> (8 hod, akreditováno pro MŠ, ZŠ, ZUŠ, SŠ, VOŠ)
                <div className="collapse border rounded " id="collapsezi2">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            Aktuální legislativní rámec školského zákona, který souvisí s tvorbou, úpravou a efektivním využíváním školních vzdělávacích programů<br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            Změny vyvolané revizí RVP (MŠMT)<br />
            <b>Blok 3 (1 vyučovací hodina – 45 minut)</b><br />
            Aktuální úpravy ŠVP související s revizemi a úpravami v RVP<br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            ŠVP a nová strategie vzdělávání, modifikace vzdělávacího obsahu, rozsahu a zaměření výuky, metod práce na základě provedených revizí RVP<br />
            <b>Blok 5 (1 vyučovací hodina – 45 minut)</b><br />
            Vzájemná výměna zkušeností, diskuse<br />
          </div></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi3" aria-expanded="false" aria-controls="collapsezi3">Úpravy ŠVP v rámci programu InspIS ŠVP </b> (8 hod, akreditováno pro MŠ, ZŠ, ZUŠ, SŠ, VOŠ)
               <div className="collapse border rounded " id="collapsezi3">
          <div className="m-3">
            1.	Aktuální legislativní rámec školského zákona, který souvisí s tvorbou, úpravou a efektivním využíváním školních vzdělávacích programů – (0,5 hod)<br />
            2.	Aktuální úpravy ŠVP související se změnami kapitol jednotlivých typů RVP – (1 hod)<br />
            3.	Význam a možnosti využití elektronického systému InspIS (0,5 hod)<br />
            4.	Práce v systému InspIS ŠVP (6 hod)<br />
            •	přihlášení do systému podání základních informací  a založení ŠVP<br />
            •	tvorba učebního plánu, poznámek, přehledu týdnů<br />
            •	forma vzdělávání - vzdělávací obsah, strategie naplňování KK, vazby mezi výstupy RVP, ŠVP, učivem, …..<br />
            •	popisné informace k systému InspIS ŠVP – formulář ŠVP – vyplnění, konkrétní informace<br />
            •	kontrola a schválení ŠVP<br />
            •	Diskuse, dořešení konkrétních dotazů účastníků<br />
          </div>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi4" aria-expanded="false" aria-controls="collapsezi4">Úpravy ŠVP v rámci programu InspIS ŠVP – webinář </b> (8 hod, akreditováno pro MŠ, ZŠ, ZUŠ, SŠ, VOŠ)
                 <div className="collapse border rounded " id="collapsezi4">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            <b>Teoretická část</b><br />
            •	Aktuální legislativní rámec školského zákona, který souvisí s tvorbou, úpravou a efektivním využíváním školních vzdělávacích programů<br />
            •	Aktuální úpravy ŠVP související se změnami kapitol jednotlivých typů RVP<br />
            •	Význam a možnosti využití elektronického systému InspIS<br />
            <br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            <b>Práce v systému InspIS ŠVP, 1. část</b><br />
            •	přihlášení do systému, podání základních informací a založení ŠVP<br />
            •	tvorba učebního plánu, poznámek, přehledu týdnů<br />
            <br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            <b>Práce v systému InspIS ŠVP, 2. část</b><br />
            •	forma vzdělávání - vzdělávací obsah, strategie naplňování KK, vazby mezi výstupy RVP, ŠVP, učivem, …..<br />
            <br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            <b>Práce v systému InspIS ŠVP, 3. část</b><br />
            •	popisné informace k systému InspIS ŠVP – formulář ŠVP – vyplnění, konkrétní informace<br />
            •	kontrola a schválení ŠVP<br />
            •	diskuse, dořešení konkrétních dotazů účastníků<br />
          </div>
        </div>
      </LiFile >

    </ul>
  </BlockEx>
</Panel>;

var ZSSpoluprace: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezsp1" aria-expanded="true" aria-controls="collapsezsp1">Zásady efektivní komunikace s rodiči a zákonnými zástupci
      </b>(8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, SŠ, DM, asistenti)
        <div className="collapse.show" id="collapsezsp1">
          <ul className="list-group">
            <li className="list-group-item">•	Specifika komunikace v online prostředí, možné chyby v komunikaci /vztahová agrese, nevhodná interpretace požadavků, předvídání budoucnosti, generalizace obtíží žáka, hodnocení rodiny, žáka, dávání nevyžádaných rad atd./ Věcná /obsahová /a vztahová rovina komunikace /teoretická část/ (1 hod)</li>
            <li className="list-group-item">•	Příklady mailové komunikace jejich rozbor, porovnání dopadu mailové komunikace směrem k adresátovi. /praktická část/<br />
              Jak jinak komunikovat<br />
              analýza základních komunikačních chyb<br />
              alternativní možnosti komunikace se žáky<br />
              možnosti, jak vést žáky k odpovědnosti za své prožívání a jednání (1 hod)<br />
            </li>
            <li className="list-group-item">•	Možnosti komunikace s rodiči a zákonnými zástupci. Typologie rodičů - styly chování, verbální komunikace. Úzkostně agresivní typ rodiče, narcistně agresivní typ rodiče, úzkostní rodiče, rodiče s hysterickými rysy osobnosti aj. Znaky a projevy chování, možnosti volby strategie řešení situací.  (3 hod)</li>
            <li className="list-group-item">•	Řešení emočně vypjatých situací: možnosti řešení, tvorba repertoáru strategií k řešení složitých a neobvyklých sociálních situací. (1 hod)</li>
            <li className="list-group-item">•	Práce s metodickým materiálem, praktická část zaměřená na vlastní strategie, vyvarování se některým chybám v komunikaci. (1 hod)</li>
            <li className="list-group-item">•	Základy a zásady asertivního jednání (1 hod)</li>
          </ul></div>
      </LiFile >
    </ul >
  </BlockEx >
</Panel >

var ZSInkluze: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <Label bsStyle="warning">16</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>
    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi00145" aria-expanded="false" aria-controls="collapsezi00145">Asistent pedagoga ve školní praxi (konkrétní příklady spolupráce s učitelem) </b> (8 hod, doporučeno pro MŠ, ZŠ a asistenty pedagoga)
        <div className="collapse " id="collapsezi00145">
          <ul className="list-group"><li className="list-group-item"></li>
            <li className="list-group-item">•	Legislativní ukotvení personální podpory „asistent pedagoga“, nové pojetí práce asistenta pedagoga, rozdílnost pozic asistent pedagoga x školní asistent x osobní asistent (2 hodiny)</li>
            <li className="list-group-item">•	Kvalifikační předpoklady asistenta pedagoga, požadavky na výběrové řízení, motivační pohovor, ekonomické zajištění pozice asistenta pedagoga, zařazení asistenta pedagoga do platové třídy dle katalogu prací (1 hodina)</li>
            <li className="list-group-item">•	Pracovní náplň asistenta pedagoga, rozvržení přímé a nepřímé pedagogické činnosti, kompetence ve vztahu k pedagogům, chyby v práci asistentů, chyby ze strany učitele, osobnost asistenta pedagoga, vztah asistenta pedagoga k žákovi, pracovníkům školy a zákonným zástupcům (3 hodiny)</li>
            <li className="list-group-item">•	Spolupráce asistenta pedagoga s odbornými pracovníky školního poradenského pracoviště (ŠPP), metodické vedení asistenta pedagoga, základní metodika práce asistenta pedagoga, další vzdělávání asistenta pedagoga,  (2 hodiny)</li>
          </ul>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi001" aria-expanded="false" aria-controls="collapsezi001">Asistent pedagoga - účelné nastavení podpůrného opatření </b> (8 hod, akreditováno pro MŠ, ZŠ, SŠ, ŠD a asistenty pedagoga)
        <div className="collapse " id="collapsezi001">
          <ul className="list-group"><li className="list-group-item"></li>
            <li className="list-group-item">  •	Legislativní ukotvení podpůrného opatření „asistent pedagoga“, nové  informace v pojetí práce asistenta pedagoga, definice pojmu asistent pedagoga  (asistent pedagoga, školní asistent, osobní asistent) (2 hodiny)</li>
            <li className="list-group-item">•	Legislativní rámec pracovní pozice asistenta pedagoga, kvalifikační  předpoklady asistenta pedagoga, výběrové řízení, motivační pohovor, ekonomické  zajištění pozice asistenta pedagoga, zařazení asistenta pedagoga do platové  třídy dle katalogu prací (1 hodina)</li>
            <li className="list-group-item">•	Pracovní náplň asistenta pedagoga, kompetence ve vztahu k pedagogům,  chyby v práci asistentů, chyby ze strany učitele, osobnost asistenta pedagoga,  vztah asistenta pedagoga k žákovi, pracovníkům školy a zákonným zástupcům,  zaměření na rozvržení přímé a nepřímé pedagogické činnosti (3 hodiny)</li>
            <li className="list-group-item">•	Metodické vedení asistenta pedagoga, další vzdělávání asistenta pedagoga,  základní metodika práce asistenta pedagoga (2 hodiny)</li>
          </ul>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi0011" aria-expanded="false" aria-controls="collapsezi0011">Asistent pedagoga - u žáka se zdravotním postižením - MP, PAS  </b> (8 hod, doporučeno pro učitele MŠ, ZŠ a asistenty pedagoga)
        <div className="collapse " id="collapsezi0011">
          <ul className="list-group"><li className="list-group-item"></li>
            <li className="list-group-item">•	teoretická východiska mentálního postižení  (1 hod)</li>
            <li className="list-group-item">•	AP u dítěte/žáka s mentálním postižením (2 hod)</li>
            <li className="list-group-item">•	podmínky inkluzivního prostředí (spolupráce se ŠPP/ŠPZ, pomůcky, učebnice, třídní kolektiv, personální podpora) (1 hod) </li>
            <li className="list-group-item">•	teoretická východiska poruch autistického spektra (PAS) ( 1 hod)</li>
            <li className="list-group-item">•	AP u dítěte/žáka s poruchami autistického spektra (2 hod)</li>
            <li className="list-group-item">•	podmínky inkluzivního prostředí (spolupráce se ŠPZ/ŠPP, pomůcky, učebnice, třídní kolektiv, personální podpora) (1 hod)</li>
          </ul>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi002" aria-expanded="false" aria-controls="collapsezi002">Strukturované učení u žáků s poruchami autistického spektra  </b> (8 hod, doporučeno pro MŠ, ZŠ, asistenty pedagoga, vychovatele ŠD,DM)
          <div className="collapse " id="collapsezi002">
          <ul className="list-group">
            <li className="list-group-item">•	Seznámení s problematikou poruch autistického spektra, symptomatické projevy. Zvláštnosti autistického myšlení a rizika problémového chování.  ( 2 hodiny)</li>
            <li className="list-group-item">•	Strukturované učení – metodika vzdělávání žáků s PAS. TEACCH program. Představení základních principů strukturovaného učení (individualizace, strukturalizace, vizualizace), aplikace v procesu výchovy a vzdělávání. (3 hodiny)</li>
            <li className="list-group-item">•	Specifika vzdělávání žáků s PAS v mateřské a základní škole. ( 1 hodina)</li>
            <li className="list-group-item">•	Speciálně pedagogická podpora a spolupráce mezi školou, rodinou a ŠPZ. (1 hodina)</li>
            <li className="list-group-item">•	Legislativní ukotvení inkluzivního vzdělávání žáka s poruchami autistického spektra. Možnosti a realizace podpůrných opatření. Práce s Doporučením. (1 hodina)</li>
        </ul>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi01" aria-expanded="false" aria-controls="collapsezi01">Specifické poruchy chování v předškolním věku  </b> (8 hod, akreditováno pro MŠ a asistenty pedagoga)
        <div className="collapse " id="collapsezi01"><ul className="list-group">
          <li className="list-group-item">•	Včasná diagnostika a včasná intervence jako východiska pro práci s dítětem a s rodiči, na jejichž základě lze s dítětem účinně pracovat (1 hod)</li>
          <li className="list-group-item">•	Základní pojmy, specifické poruchy chování, ADHD, ADD. (1 hod)</li>
          <li className="list-group-item">•	Vztah mezi specifickými poruchami chování a specifickými poruchami učení na bázi ADHD se zaměřením na specifika pro práci učitele (1 hod)</li>
          <li className="list-group-item">•	Objasnění symptomatologie těchto poruch, kritéria pro diagnostiku SPCH, platná legislativa, metody práce u dětí se SPCH v předškolním zařízení, spolupráce rodiny (1 hod)</li>
          <li className="list-group-item">•	Postavení dítěte s ADHD v mateřské škole a vztah učitele k takovémuto dítěti (1 hod)</li>
          <li className="list-group-item">•	Pedagogická diagnostika a depistáž dětí v mateřské škole učitelem, tvorba individuálních vzdělávacích plánů (1 hod)</li>
          <li className="list-group-item">•	Prevence vzniku poruch chování u dětí s ADHD (1 hod)</li>
          <li className="list-group-item">•	Diskuse a rozbor příkladů z praxe (1 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi013" aria-expanded="false" aria-controls="collapsezi013">Specifické poruchy chování –pro ŠD a asistenty pedagoga   </b> (8 hod, doporučeno pro ŠD a asistenty pedagoga)
        <div className="collapse " id="collapsezi013"><ul className="list-group">
          <li className="list-group-item">•	Kurz Vám poskytne přehled péče o žáky s ADHD a poruchami chování s akcentem na uplatnění kognitivně behaviorálních přístupů. Součástí kurzu je i vysvětlení možnosti výchovného působení a přístupu k žákům s ADHD. </li>
          <li className="list-group-item">•	Včasná diagnostika a intervence jako východiska pro práci s žákem a rodiči (1 hod)</li>
          <li className="list-group-item">•	Základní pojmy, specifické poruchy chování, ADHD, ADD. (1 hod)</li>
          <li className="list-group-item">•	Vztah mezi specifickými poruchami chování a specifickými poruchami učení na bázi ADHD se zaměřením na specifika pro práci pedagoga (1 hod)</li>
          <li className="list-group-item">•	Objasnění symptomatologie těchto poruch, kritéria pro diagnostiku SPCH, platná legislativa, metody práce u žáků se SPCH, spolupráce rodiny (1 hod)</li>
          <li className="list-group-item">•	Postavení žáka s ADHD ve škole a úskalí realizace činností ve školní družině (1 hod)</li>
          <li className="list-group-item">•	Teoretická východiska kognitivně behaviorální terapie (1 hodina)</li>
          <li className="list-group-item">•	Efektivní kognitivně behaviorální postupy uplatňované ve školním i mimoškolním prostředí – edukace, režimová opatření, monitoring, pozitivní posilování  žádoucího chování, plán činnosti, nácvik chování podle vzoru, formování, expoziční terapie, behaviorální smlouvy, žetonové hospodaření (1 hodina)</li>
          <li className="list-group-item">•	Možnosti a limity pedagogů, psychologů, terapeutů a dalších odborníků při řešení uvedených poruch (1 hodina)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi011" aria-expanded="false" aria-controls="collapsezi011">Neklidné dítě – problematika ADHD, ADD </b> (8 hod, doporučeno pro učitele MŠ, ZŠ a asistenty pedagoga)
        <div className="collapse " id="collapsezi011"><ul className="list-group">
          <li className="list-group-item">•	Projevy chování dítěte s ADHD, ADD, související se začleněním dítěte do kolektivu MŠ a ZŠ a na ně navazující možná další úskalí. Vznik ADHD, ADD – příčiny vzniku. Kritéria dle MKN – konkrétní popis projevů. Jednotlivé příznaky ADHD, ADD. (3 hod)</li>
          <li className="list-group-item">•	Korekce nežádoucího chování - zásady práce s dítětem s ADHD (ADD), předcházení konfliktním situacím. Chování dětí s ADHD a ADD ve škole i doma, informace o typických projevech chování (příklady z praxe) Zásady práce s dítětem s ADHD/ADD ve škole i doma, pravidla jednoznačné komunikace. (3 hod)</li>
          <li className="list-group-item">•	Efektivní způsoby ovlivňování chování a jednání dětí s ADHD,ADD: vytváření přehledného a strukturovaného prostředí. Promyšlené reakce rodičů, učitelů a okolí na určité projevy jejich chování, uspořádání pomůcek, uspořádání pracovního prostoru, zapojení do skupiny, přecházení od jedné činnosti k druhé. (2 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi123" aria-expanded="false" aria-controls="collapsezi123">Strategie předcházení školní neúspěšnosti  </b> (8 hod, doporučeno pro ZŠ, SŠ, VOŠ a asistenty pedagoga)
        <div className="collapse " id="collapsezi123">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Téma</b> – Strategie předcházení školní neúspěšnosti. Legislativní rámec, strategie jako součást povinné dokumentace školy. Vyhláška 72/2005 Sb., ve znění pozdějších předpisů O poradenských službách ve školách a školských zařízeních.  Vymezení základních pojmů. (1 hodina)</li>
            <li className="list-group-item">• <b>Téma Základní pojmy 1. část.</b> Vymezení základních pojmů, možnosti pedagogické diagnostiky pro nastavení strategie  prevence školní neúspěšnosti.  metody a formy práce pedagogických pracovníků, standardní činností členů školního  poradneského pracoviště v rámci strategie prevence školní neúspěšnosti. dání. (1 hodina)</li>
            <li className="list-group-item">•	<b>Téma Základní pojmy 2. část.</b>  Principy práce ve vyučovací hodině v rámci strategie prevence školní neúspěšnosti,  pedagogická diagnostika jako nástroj pro volbu vhodných metod a forem práce s diferencovanou skupinou.(1.hodina)</li>
            <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, Možnosti diferencovaného vyučování, Ukázka diagnostických metod. nastavení diferenciace časem v rámci celé třídy. Ukázka pracovních listů a práce s diferencovanou skupinou od žáků mimořádně nadaných, přes žáky se speciálně vzdělávacími potřebami /dále jen SVP v rámci prevence školní neúspěšnosti/ (1 hodina)</li>
            <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, ukázka dalších možností nastavení prevence školní neúspěšnosti.  Možnosti diferenciace rozsahem práce a obtížností úkolů s nastavením podpůrných opatření.  Ukázka možností procvičování podle individuálních možností a schopností jednotlivých žáků, způsob ověřování tematických celků, úrovně, rozsahu, četnosti úkolů stejného typu. Ukázka možntostí práce v rámci strategie prevence školní neúspěšnosti, nabídka metodických a pracovních materiálů. Možnosti zařazování obtížnější úrovně základního učiva. (1 hodina)</li>
            <li className="list-group-item">•	<b>Téma – Možnosti školního poradenského pracoviště</b>, standardní činností členů ŠPP v rámci strategie předcházení školní neúspěšnosti a možnosti kooperace pedagogických pracovníků na této strategii.   Hodnocení žáků a motivace žáků k diferencované práci. Sumativní a formativní hodnocení, autonomní, heteronomní hodnocení. (2 hodiny)</li>
            <li className="list-group-item">•	<b>Téma – Ukázka inspirativních úloh</b>. Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání.Práce s kazuistikami, diskuze. (1 hodina)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi1" aria-expanded="false" aria-controls="collapsezi1">Práce s diferencovanou třídou a náměty na vzdělávání 8 hod </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ, asistenti)
        <div className="collapse " id="collapsezi1"><ul className="list-group"><li className="list-group-item">•	<b>Téma </b> – Legislativní rámec. Školský zákon a Vyhláška 27/2016. Podpůrné opatření, možnosti úpravy obsahu a výstupů v souladu s legislativou.  Vymezení základních pojmů nadání. RVP pro základní školy, kompetence, výstupy, učivo v kontextu s prací s žáka s potřebou podpůrných opatření. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma Základní pojmy 1. část.</b> Základní pojmy: Heterogenní skupina, diverzita. Diferencované vzdělávání podle kritérii a možností žáka. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma Základní pojmy 2. část.</b> Možnosti diferencovaného vyučování, pedagogická diagnostika jako součást volby vhodných metod a forem práce s diferencovanou skupinou.  Ukázka diagnostických metod. (1 hodina) </li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 1. část. Teoretické ukotvení tématu. Možnosti diferenciace - navýšení času.  Ukázka možností efektivního času. Ukázka pracovních listů a práce s diferencovanou skupinou od žáků mimořádně nadaných, přes žáky se speciálně vzdělávacími potřebami /dále jen SVP/ (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 2. část. Možnosti diferenciace - rozsah práce, obtížnost úkolů. Ukázka možností procvičování podle možností a schopností žáků, možnosti ověřování učiva a úrovně, rozsahu, četnosti úkolů stejného typu. Ukázka práce, nabídka metodických materiálů. Práce s pracovním materiálem. Možnosti zařazování obtížnější úrovně základního učiva. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 3. část. Další způsoby práce s diferencovanou skupinou. Ukázka diferencovaných pracovních listů např. diferencované čtení, ukázka pracovních listů z matematiky - základní a zkrácená verze, diferencovaný diktát, upravené texty, bonusové a prémiové úkoly pro žáky nadané, mimořádně nadané. Skupinová práce s homogenní a heterogenní skupinou. Organizace diferencovaného vyučování ve vyučovací hodině. Hodnocení žáků a motivace žáků k diferencované práci. Sumativní a formativní hodnocení, autonomní, heteronomní hodnocení. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – Ukázka inspirativních úloh</b>.  Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání. (1 hodina)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi2" aria-expanded="false" aria-controls="collapsezi2">Žák nadaný a mimořádně nadaný, možnosti jeho rozvoje – webinář  </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ)
        <div className="collapse  border rounded" id="collapsezi2">
          <div className="m-3">
            <b>Blok 1 (1 vyučovací hodina – 45 minut)</b><br />
            Téma – Legislativní rámec <br />
            Nová legislativa - Školský zákon a Vyhláška 27/2016 k rozvoji nadaných a mimořádně nadaných žáků. Vymezení základních pojmů nadání.<br />
            RVP pro daný typ školy v kontextu s rozvoje nadání.<br />

            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Základní pojmy<br />
            Základní pojmy z hlediska psychologické diagnostiky. <br />
            Typologie nadání z hlediska psychologie. Typologie nadaných z hlediska projevů chování.<br />
            Možnosti a význam pedagogické diagnostiky, ukázka diagnostických metod.<br />

            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Principy práce s nadaným a mimořádně nadaným žákem 1. část<br />
            -	Charakteristické znaky osobitosti nadaných a mimořádně nadaných žáků. Odlišnosti ve vnímání a zpracování podnětů, v myšlení a prožívání. <br />
            -	Seznámení s různými přístupy k rozvoji nadání <br />
            -	Základní principy v práci s nadanými a mimořádně nadanými žáky, případně s žáky s dvojí výjimečností. Možnosti jejich dalšího rozvoje rozumových schopností jako i jejich sociálně emočních kompetencí v rámci daného stupně vzdělávání.<br />

            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Principy práce s nadaným a mimořádně nadaným žákem 2. část<br />
            IVP, úpravy vzdělávacích obsahů a výstupů. <br />
            Možnosti hodnocení žáků nadaných a mimořádně nadaných. Seznámení s terminologií, její aplikace v praxi. <br />
            Sumativní, formativní hodnocení, autonomní, heteronomní hodnocení.<br />

            <b>Blok 5 (1 vyučovací hodina – 45 minut)</b><br />
            Téma – Ukázka inspirativních úloh<br />
            Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání. (1 hodina)<br />
          </div>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi3" aria-expanded="false" aria-controls="collapsezi3">Kázeňské přestupky a možnosti jejich řešení v rámci třídy
      </b>(8 hod, akreditováno pro MŠ, ZŠ, ŠD, SŠ, DM, asistenti, výchovní poradci, speciální pedagogové, psychologové)
        <div className="collapse " id="collapsezi3">
          <ul className="list-group">
            <li className="list-group-item">•	Pedagogická diagnostika orientovaná na žáka, učitele a edukační proces (1 hod)</li>
            <li className="list-group-item">•	Možnosti diferencovaného vzdělávání jako prevence problémového chování (1 hod)</li>
            <li className="list-group-item">•	Příčiny problémového chování u žáků, Diagnostická kritéria ADHD, Příčiny poruch chování žáků, Formy rizikového chování – zneužívání návykových látek, kriminalita, šikana, hostilita, agrese, agresivita, vrstevnické vztahy, školní problémy, přestupky a ostatní rizikové formy chování (4 hod)</li>
            <li className="list-group-item">•	Praktická část: Ukázka práce s třídním kolektivem, ukázka práce v rámci třídnických hodin, ukázka práce- nabídka metodických materiálů. Diskuze, práce s kazuistikami (2 hod)</li>
          </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi4" aria-expanded="false" aria-controls="collapsezi4">Klima třídy a vedení třídnické hodiny v rámci inkluze-8 hod </b> (8 hod, akreditováno pro ZŠ, asistenti)
        <div className="collapse " id="collapsezi4"><ul className="list-group"><li className="list-group-item">•	<b>Téma – Vedení třídního kolektivu v souladu s podpůrným opatřením a doporučením ke vzdělávání žáků</b> . Společné vzdělávání na středních školách, typy středních škol a odborných učilišť a možnosti vzdělávání žáků na těchto školách v souladu s platnými přepisy-Vyhláška 27/2016 Sb. - Struktura podpůrných opatření a jejich členění do pěti stupňů se zaměřením na podporu klimatu třídy. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma - Třídní kolektiv, možnosti vedení třídního kolektivu</b> . Základní pravidla pro fungující třídní kolektiv: Cíle práce se třídou, jak najít cíl a proč?, Třídnické hodiny / jejich nastavení, struktura, co je a není vhodné/, Práce s tvarem třídy /skupiny, dvojice, jednotlivci/, Témata na třídnické hodiny / komunikace, empatie, úcta, respekt…/, Regulace chování ve skupině (3 hodiny)</li>
          <li className="list-group-item">•	<b>Téma - Autenticita pedagoga, sebereflexe pedagoga, sebehodnocení. Kategorie a formy diagnostiky ve školním prostředí </b> - souvislost s úpravou právních předpisů - jak v souvislosti s využitím podpůrného opatření . Pozorování žáků a jeho zaznamenání: analýza získaných poznatků, další nástroje pedagogické diagnostiky, východiska pro nastavení práce s třídním kolektivem, možnosti nastavení podmínek v rámci třídního kolektivu (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – supervize, její význam a cíl</b> . Východiska pro hodnocení : kultura vysokých očekávání, Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky, Sebezkušenostní část vzdělávacího programu. / zaměření na jednotlivé situace, problémy, kauzistiky/ (2 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi5" aria-expanded="false" aria-controls="collapsezi5">Podpora žáků ZŠ v rámci inkluzivního vzdělávání 8 hodin </b> (8 hod, akreditováno pro ZŠ, ŠD, ŠK, asistenti)
        <div className="collapse " id="collapsezi5"><ul className="list-group"><li className="list-group-item">•	Téma  – Struktura podpůrných opatření a práce se zaměřením na PO 1. stupně /individualizace - PLPP/. Společné vzdělávání na základních školách a možnosti vzdělávání žáků na těchto školách v souladu s platnými přepisy  , vyhláška 27/2016 Sb. o vzdělávání žáků se speciálními vzdělávacími potřebami a žáků nadaných, školský zákon, RVP pro základní školy, Struktura podpůrných opatření a jejich členění do pěti stupňů, podpůrná opatření prvního stupně (příloha č. 1 vyhlášky č. 27/2016 Sb.), úpravy ŠVP a jeho charakteristika v souvislosti s vytvářením, realizací a vyhodnocováním PLPP (1 hodina)</li>
          <li className="list-group-item">•	PO 1. stupně - individualizace x  PLPP: možnosti  PO 1. stupně na ZŠ, charakteristika PO 1. stupně,  - prostředky PO 1.stupně, příklady individualizace výuky, příklady diferenciace výuky, účel PLPP, struktura daná právními předpisy a porozumění jednotlivým částem v souvislostech, jak pracovat s formulářem při tvorbě PLPP, jak získávat podklady pro vytváření PLPP a pro jeho vyhodnocování , interaktivní formuláře jako pomoc pedagogům a jejich využití (2 hodiny)</li>
          <li className="list-group-item">•	Pedagogická diagnostika jako prostředek pro nastavení PLPP, příp. IVP: kategorie a formy diagnostiky ve školním prostředí, souvislosti s úpravou právních předpisů - jak v souvislosti s využitím podpůrného opatření PLPP, příp. IVP. Pozorování žáků a jeho zaznamenání: analýza získaných poznatků, další nástroje pedagogické diagnostiky, východiska pro nastavení PO, možnosti nastavení podmínek v rámci vyučovací hodiny (2 hodiny)</li>
          <li className="list-group-item">•	Tvorba IVP, PLPP. Formulář podle přílohy vyhlášky č. 27/2016 Sb. Stanovení cílů, možné úpravy obsahů a výstupů vzdělávání, využití PLPP při spolupráci se školským poradenským zařízením v případě nutnosti využít vyšších stupňů podpory. Zpětná vazba, vyhodnocení (1 hodina)</li>
          <li className="list-group-item">•	Téma  – hodnocení žáků ve společném vzdělávání. Východiska pro hodnocení: kultura vysokých očekávání, modifikace obsahů, výstupů vzdělávání a dopad do hodnocení, hodnocení a jeho dopad na žáka, hodnocení jako zpětná vazba pro učitele, sumativní a formativní způsoby hodnocení, Autonomní a heteronomní hodnocení, Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky. Úprava forem a způsobů hodnocení jako podpůrné opatření a jeho uplatňování v různých stupních podpory. (2 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi6" aria-expanded="false" aria-controls="collapsezi6">Práce se žákem s problémovým chováním – 8 hodin  </b> (8 hod, akreditováno pro ZŠ, ŠD, ŠK, asistenti)
        <div className="collapse " id="collapsezi6"><ul className="list-group"><li className="list-group-item">•	Téma  – Základní sociální potřeby žáků základní školy. Základní sociální potřeby: Potřeba místa, bezpečí, podnětu, potřeba péče, výživy, dále potřeby podpory a sociálních limitů. Důsledky nenaplňování potřeb a jejich vliv na chování žáků základní školy. Dopady procesu psychického a fyzického vývoje na chování žáka v podmínkách základní školy (2 hodiny)</li>
          <li className="list-group-item">•	Téma  – žák s problémovým chováním ve třídě, projevy chování žáků s poruchami chování, vliv na klima třídy. Etické vedení dialogu se žákem. Pravidla a zásady vedení třídniho kolektivu Práce s tvarem třídy  – konformita a normy konkrétního třídního kolektivu  – příprava, hranice, rizika a zdroje. Výhody a nevýhody nepsaných norem třídního kolektivu. Role žáka ve třídě. Posilování pozitivních vazeb. Regulace chování ve skupině. (2 hodiny)</li>
          <li className="list-group-item">•	Téma  – Práce s pocity žáků jako prevence kázeňských problémů. Školní prostředí a střídání rolí. Typy kázeňských přestupků a možnosti řešení kázeňských přestupků ve školní třídě v součinnosti se školním řádem a platnou legislativou. Komunikace s problémovým rodičem a jeho specifika  – vhodné a nevhodné komunikační kanály. (2 hodiny)</li>
          <li className="list-group-item">•	Téma  – praktické ukázky řešení přestupků. Komunikace s verbálně agresivním žákem. Zákonité fáze, postupy, změny. Šikana, její vyhledávání a řešení. Konkrétní práce se žákem s problémovým chováním, ukázka možných řešení. Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky. Sebezkušenostní část vzdělávacího programu. / zaměření na jednotlivé situace, problémy, vlastní kazuistiky/ (2 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi7" aria-expanded="false" aria-controls="collapsezi7">Sociální klima třídy a role učitele – 8 hodin </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ, asistenti)
        <div className="collapse border rounded " id="collapsezi7">
          <div className="m-3">
            <b>Teoretická část  (4 vyučovací hodiny)</b><br />
            •	Objasnění základních pojmů - klima třídy, sociální klima třídy, spolutvůrci třídního klimatu,<br />
            •	Pedagogická diagnostika školní třídy – mechanismy, které toto klima ovlivňují, prevence vztahů, sociálně-psychologické aspekty vedení třídy, pozice a role žáka ve školní třídě<br />
            •	Sociální klima třídy a pedagogická diagnostika<br />
            - sběr dat, vyhodnocování, interpretace a práce s nimi<br />
            - nejčastější chyby v sociální percepci<br />
            <b>Praktická část (4 vyučovací hodiny)</b><br />
            •	Nabídka činností zaměřených na podporu utváření pozitivního sociálního klimatu ve třídě<br />
            -	účastník si prakticky ověří získané poznatky<br />
            •	Poslední část bude věnována i dotazům a řízené diskuzi z vlastní praxe zúčastněných ped. pracovníků.<br />
          </div></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi8" aria-expanded="false" aria-controls="collapsezi8">Práce s pedagogickým sborem-jak předejít syndromu vyhoření  </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ, asistenti)
        <div className="collapse " id="collapsezi8"><ul className="list-group">
          <li className="list-group-item">•	<b>Téma – Práce s pedagogickým sborem - jak předejít syndromu vyhoření</b> . Klima ve škole a sborovně: Klima z hlediska - emocionálního, sociálního, pracovního. Faktory ovlivňující klima školy - přístup učitele, komunikace, metody a strategie. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – Pravidla ve sborovně, pravidla ve třídě, komunikace</b> : Pravidla a zásady fungujícího kolektivu ve sborovně, vedení a zásady třídnického kolektivu. Práce se sborovnou - příprava, hranice, rizika a zdroje. Výhody a nevýhody nepsaných norem pedagogického sboru a třídního kolektivu. Role učitele ve sborovně. Posilování pozitivních vazeb. Regulace chování ve skupině. Komunikace ve sborovně. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – Jak na syndrom vyhoření, antistresové a relaxační techniky</b> : Antistresové techniky využitelné pro jednotlivce i pro skupinu. Relaxační metody různých druhů. Uvědomění si sám sebe, práce na pozitivním myšlení u jednotlivce i skupiny. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma – praktické ukázky práce se skupinou a antistresové relaxační metody</b> . Sebezkušenostní část vzdělávacího programu. Využití relaxačních metod v praxi. Ukázky jak pracovat v pedagogickém sboru či v jiném kolektivu, případně ve třídě žáků. Zapojení sebereflexe a reflexe od skupiny. (3 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi9" aria-expanded="false" aria-controls="collapsezi9">Společné vzdělávání dětí v MŠ – 8 hodin </b> (8 hod, akreditováno pro MŠ)
        <div className="collapse " id="collapsezi9"><ul className="list-group"><li className="list-group-item">•	Dítě se speciálními vzdělávacími potřebami  – seznámení se základní charakteristikou dětí se speciálními vzdělávacími potřebami (1 hod) </li>
          <li className="list-group-item">•	Metody práce a didaktické zásady při práci s dětmi se SVP (2 hod) </li>
          <li className="list-group-item">•	Podpůrná opatření  – druhy a stupně, charakteristika pěti stupňů podpůrných opatření v mateřské škole, možnosti práce a podpory dětí se SVP (2 hod) </li>
          <li className="list-group-item">•	Asistent pedagoga  - spolupráce s asistentem pedagoga, základní požadavky, kompetence (1 hod) </li>
          <li className="list-group-item">•	Spolupráce s rodiči v rámci rozvoje rozumových schopností dětí, podíl rodičů a mateřské školy na školní připravenosti dětí předškolního věku na vstup do základní školy. Komunikace s rodiči  – druhy komunikace, zásady efektivní komunikace s rodiči, zásady správného kladení otázek, poskytování efektivní zpětné vazby o dítěti rodičům (2 hod) </li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi10" aria-expanded="false" aria-controls="collapsezi10">Inkluze v MŠ v teorii a praxi – 16 hodin </b> (16 hod, akreditováno pro MŠ)
        <div className="collapse " id="collapsezi10"><ul className="list-group"><li className="list-group-item">•	Dítě se speciálními vzdělávacími potřebami  – seznámení se základní charakteristikou dětí se speciálními vzdělávacími potřebami,  (2 hod) </li>
          <li className="list-group-item">•	Podpůrná opatření  – druhy a stupně, charakteristika pěti stupňů podpůrných opatření v mateřské škole, možnosti práce a podpory dětí se SVP (2 hod) </li>
          <li className="list-group-item">•	Plán pedagogické podpory  – charakteristika a tvorba  – na základě kazuistik budou pedagogové vytvářet vlastní PLPP, který budou moci konzultovat s lektorkou (2 hod) </li>
          <li className="list-group-item">•	Individuální vzdělávací plán  – charakteristika a tvorba  – metodika pro vytváření IVP v MŠ, vytváření vlastního IVP  (2 hod) </li>
          <li className="list-group-item">•	Hodnocení  - sumativní, formativní, heteronomní, autonomní  – základní charakteristika hodnocení, rozdíly mezi jednotlivými druhy hodnocení, výhody a nevýhody jednotlivých druhů  (2 hod) </li>
          <li className="list-group-item">•	Asistent pedagoga   - kompetence, spolupráce osoba asistenta pedagoga, vzdělání, základní požadavky, kompetence (1 hod) </li>
          <li className="list-group-item">•	Komunikace s rodiči  – druhy komunikace, zásady efektivní komunikace s rodiči, zásady správného kladení otázek, poskytování efektivní zpětné vazby o dítěti k rodičům  (2 hod) </li>
          <li className="list-group-item">•	Spolupráce s poradenskými zařízeními  – druhy poradenských zařízení zásady a možnosti spolupráce s poradenskými zařízeními (2 hod) </li>
          <li className="list-group-item">•	Legislativní změny  -zásadní změny v odstavci 16  (1 hod) </li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezi11" aria-expanded="false" aria-controls="collapsezi11">Připravme se na inkluzivní vzdělávání </b> 8 hodin – (8 hod, akreditováno pro ZUŠ)
        <div className="collapse " id="collapsezi11"><ul className="list-group"><li className="list-group-item">•	Žák se speciálními vzdělávacími potřebami (1 hod)</li>
          <li className="list-group-item">•	Podpůrná opatření, jejich stupně a druhy (2 hod)</li>
          <li className="list-group-item">•	Plán pedagogické podpory  – charakteristika, diagnostika a realizace (2 hod)</li>
          <li className="list-group-item">•	Třída jako sociální skupina (1 hod) </li>
          <li className="list-group-item">•	Heterogenní  – homogenní skupina (1 hod)</li>
          <li className="list-group-item">•	Metody práce ve skupině (1 hod)</li>
        </ul></div>
      </LiFile >

    </ul>
  </BlockEx>
</Panel>

var ZSInovativniFormy: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezif1" aria-expanded="false" aria-controls="collapsezif1">Nové metody práce učitele – aktivizující formy výuky na ZŠ a SŠ
      </b>(8 hod, akreditováno pro ZŠ, SŠ a asistenty pedagoga)
        <div className="collapse border rounded " id="collapsezif1">
          <ol className="list-group">
            <li className="list-group-item">1. Seznámení se základními metodami, formami práce a jejich dělením (1 hod)</li>
            <li className="list-group-item">2. Aplikace jednotliých základních metod ve výuce, princip a různé způsoby využití: (6 hod)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;•	brainstorming<br />
              &nbsp;&nbsp;&nbsp;&nbsp;•	myšlenková mapa<br />
              &nbsp;&nbsp;&nbsp;&nbsp;•	práce s textem- škálování<br />
              &nbsp;&nbsp;&nbsp;&nbsp;•	princip a různé způsoby využití diskusní metody  -  rozhovor, diskuse, beseda<br />
              &nbsp;&nbsp;&nbsp;&nbsp;•	princip a různé způsoby využití metody pro rozvoj kritického myšlení - EUR, volné psaní, pětilístek…<br />
              &nbsp;&nbsp;&nbsp;&nbsp;•	projekty a projektové vyučování (stručné představení)<br />
              &nbsp;&nbsp;&nbsp;&nbsp;•	pedagogické aktivity pro skupinovou práci a kooperaci<br />
            </li>
            <li className="list-group-item">3.	Další aktivizující metody a formy výuky (stručné představení) - Snowballing, Kolečka, Kolotoč, Návštěvníci, Akvárium (1 hod)</li>
          </ol>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezif2" aria-expanded="false" aria-controls="collapsezif2">Tandemová výuka – nový prvek ve výuce 
      </b>(8 hod, doporučeno pro ZŠ, SŠ, MŠ)
        <div className="collapse border rounded " id="collapsezif2">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Smysl a princip tandemové výuky</b> : kooperativní a tandemová/párová výuka x výuka s AP, formy tandemové výuky, výhody a nevýhody tandemové výuky, šest typů tandemové výuky (2 hod)</li>
              <li className="list-group-item">•	<b>Podmínky spolupráce</b> : osobnostní charakteristiky pedagogických pracovníků, vzájemná komunikace, komunikační techniky, předcházení konfliktům, efektivní využití přítomnosti a dovedností kolegy při výuce (2 hod)</li>
                <li className="list-group-item">•	<b>Princip 3 S</b> (3 hod): <br/>
              společné plánování výuky - vytváření ročních, měsíčních, týdenní plánů, příprava konkrétních hodin, přehled aktivit, rozdělení úkolů v hodině <br />
              společná výuka - stanovení cíle hodiny, volby metod pro realizaci cíle výuky<br />
společná reflexe výuky - formativní a sumativní hodnocení žáků, vzájemná sebereflexe spolupráce 
</li>
                  <li className="list-group-item">•	<b>Zpracování konkrétní vyučovací hodiny</b> (1 hod)</li>
          </ul>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezif3" aria-expanded="false" aria-controls="collapsezif3">Práce s diferencovanou třídou a náměty na vzdělávání 8 hod </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ, asistenti)
        <div className="collapse " id="collapsezif3"><ul className="list-group"><li className="list-group-item">•	<b>Téma </b> – Legislativní rámec. Školský zákon a Vyhláška 27/2016. Podpůrné opatření, možnosti úpravy obsahu a výstupů v souladu s legislativou.  Vymezení základních pojmů nadání. RVP pro základní školy, kompetence, výstupy, učivo v kontextu s prací s žáka s potřebou podpůrných opatření. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma Základní pojmy 1. část.</b> Základní pojmy: Heterogenní skupina, diverzita. Diferencované vzdělávání podle kritérii a možností žáka. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma Základní pojmy 2. část.</b> Možnosti diferencovaného vyučování, pedagogická diagnostika jako součást volby vhodných metod a forem práce s diferencovanou skupinou.  Ukázka diagnostických metod. (1 hodina) </li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 1. část. Teoretické ukotvení tématu. Možnosti diferenciace - navýšení času.  Ukázka možností efektivního času. Ukázka pracovních listů a práce s diferencovanou skupinou od žáků mimořádně nadaných, přes žáky se speciálně vzdělávacími potřebami /dále jen SVP/ (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 2. část. Možnosti diferenciace - rozsah práce, obtížnost úkolů. Ukázka možností procvičování podle možností a schopností žáků, možnosti ověřování učiva a úrovně, rozsahu, četnosti úkolů stejného typu. Ukázka práce, nabídka metodických materiálů. Práce s pracovním materiálem. Možnosti zařazování obtížnější úrovně základního učiva. (1 hodina)</li>
          <li className="list-group-item">•	<b>Téma – Principy práce s diferencovanou třídou</b>, 3. část. Další způsoby práce s diferencovanou skupinou. Ukázka diferencovaných pracovních listů např. diferencované čtení, ukázka pracovních listů z matematiky - základní a zkrácená verze, diferencovaný diktát, upravené texty, bonusové a prémiové úkoly pro žáky nadané, mimořádně nadané. Skupinová práce s homogenní a heterogenní skupinou. Organizace diferencovaného vyučování ve vyučovací hodině. Hodnocení žáků a motivace žáků k diferencované práci. Sumativní a formativní hodnocení, autonomní, heteronomní hodnocení. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – Ukázka inspirativních úloh</b>.  Možnosti obohacení učiva, inspirativní úlohy vhodné pro rozvoj rozumového nadání. (1 hodina)</li>
        </ul></div>
      </LiFile >
    </ul>
  </BlockEx >
</Panel >;

var ZSPodpora: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <Label bsStyle="warning">16</Label> <Label bsStyle="warning">24</Label>   <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>

      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezp1" aria-expanded="false" aria-controls="collapsezp1">Mentorské dovednosti–úvod do problematiky principů mentoringu </b> (8 hod, akreditováno pro MŠ, ZŠ, ZUŠ, SŠ, ředitelé, zástupci, management)
                <div className="collapse border rounded " id="collapsezp1">
          <div className="m-3">
            <b>1.	část: vysvětlení principů mentoringu (3 hodiny)</b><br />
            •	mentoring a definování role mentora<br />
            •	interní mentoring a externí mentoring<br />
            •	potřebné předpoklady pro roli mentora - poradce<br />
            •	mentor jako „kritický přítel“ – co je a co není součásti práce mentora<br />
            •	oblasti, v nichž mentor spolupracuje se svým svěřencem – institucionální, oblast vlastní výuky a oblast osobnostní podpory<br />
            •	náměty pro reflexní činnost ve škole<br />
            <b>2.	část (4 hodiny)</b><br />
            •	praktický nácvik – modelové situace, hry v rolích, sebereflexe pro roli mentora<br />
            <b>3.	část: (1 hodina)</b><br />
            •	obavy – rady a doporučení pro učitele připravující se pro pozici poradce<br />
            •	diskuse, rady a doporučení, příklady z praxe<br />
            Na základě získaných informaci a po absolvování praktického bloku semináře, který je zaměřen na sebereflexi účastníka, se budou moci absolventi rozhodnout, zda se pro práci poradce = mentora cítí. Současně získají zpětnou vazbu pro oblasti, ve kterých by se měli, v rámci přípravy pro tuto pozici vzdělávat.<br />
          </div>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezp2" aria-expanded="false" aria-controls="collapsezp2">Mentorské dovednosti učitele </b> (16 hod, akreditováno pro MŠ, ZŠ, ZUŠ, SŠ, ředitelé, zástupci, management)
                <div className="collapse border rounded " id="collapsezp2">
          <div className="m-3">
            <b>1.	část -teoretická: (2 hodiny)</b><br />
            •	mentoring a definování role mentora<br />
            •	potřebné předpoklady (kompetence) pro roli mentora – poradce<br />
            •	interní a externí mentoring<br />
            •	oblasti – institucionální, vlastní výuky a osobnostní podpory – v nichž mentor spolupracuje se svým svěřencem<br />
            <b>2.	část -teoretická (6 hodin)</b><br />
            •	náměty pro reflexní činnost ve škole<br />
            •	seznámení s jednotlivými fázemi mentoringu<br />
            •	kompetenční rámec<br />
            •	vytýčení cílů a nastavení strategií k dosažení cílů<br />
            •	zásady mentorského rozhovoru před pozorováním<br />
            •	pozorování ve výuce a zápis<br />
            •	zásady mentorského rozhovoru nad výstupy z pozorování<br />
            •	porovnávání výsledků a vzájemná zpětná vazba<br />
            <br />
            <b>3.	část - praktická: (6 hodin)</b><br />
            praktický nácvik – modelové situace, hry v rolích, sebereflexe pro roli mentora<br />
            •	nastavení základních pravidel pro úspěšný začátek rozhovoru<br />
            •	navázání vztahu na principu mentoringu<br />
            •	vedení rozhovoru na principu mentorského rozhovoru ke kompetenčnímu rámci<br />
            •	mentorský rozhovor nad výstupy z pozorování<br />
            •	zpracování výsledků<br />
            •	nácvik podávání zpětné vazby<br />
            <b>4.	část - praktická (2 hodiny)</b><br />
            •	vyhodnocení procesu mentorské pomoci a stanovení dalších kroků v profesním rozvoji<br />
            •	obavy – rady a doporučení pro učitele připravující se pro pozici poradce<br />
            diskuse, rady a doporučení, příklady z praxe<br />
            Na základě získaných informaci a po absolvování praktických bloků semináře, které jsou zaměřeny na sebereflexi účastníka v roli mentora, se budou moci absolventi rozhodnout, zda se pro práci poradce = mentora hodí. Současně získají zpětnou vazbu pro oblasti, ve kterých by se měli, v rámci přípravy pro tuto pozici dále vzdělávat.<br />
          </div></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezp3" aria-expanded="false" aria-controls="collapsezp3">Moderní trendy ve vedení lidí – Mentoring </b> (24 hod, akreditováno pro MŠ, ZŠ, ZUŠ, SŠ, ředitelé, zástupci, management)
                 <div className="collapse border rounded " id="collapsezp3">
          <div className="m-3">
            <b>I. SETKÁNÍ (8hod)</b><br />
            <br />
            <b>1. MODUL  - Úvod do mentoringu – (3 hod.)</b><br />
            Obsahem modulu je vymezení pojmů mentoring, proces, cíl, zásady mentoringu; mentorování v prostředí školy, cíle, principy, přínos; typy mentoringu, stručný popis jednotlivých fází mentoringu<br />
            <br />
            <b>2. MODUL  - Osobnost mentora, poradce, experta,… – (5 hod.)</b><br />
            Obsahem modulu je pozitivní hodnocení sebe i druhých<br />
            Hodnocení sebe: - úcta k lidské osobnosti – sebepojetí - sebepoznání, sebehodnocení, sebepřijetí, sebeprezentace, sebeovládání, sebeoceňování;<br />
            Hodnocení druhých – vyjádření uznání, ocenění, pochvala a její účinnost, připisování pozitivních vlastností druhým, přijetí pochvaly a akceptace druhého, konstruktivní kritika, řešení konfliktu<br />
            <br />
            Součástí semináře je praktický nácvik – práce jednotlivců i ve skupinách – modelové situace, hry v rolích<br />
            <br />
            <b>II. SETKÁNÍ (8hod)</b><br />
            <br />
            <b>3. MODUL – Role mentora, poradce, experta,… – ( 5 hod.)</b><br />
            Obsahem modulu je definování role mentora, jeho poradenské schopnosti projevujející se ve verbálních a neverbálních formách komunikace.<br />
            Verbální komunikace – tj. principy a zásady verbální komunikace, komunikační chyby; dialog, komunikace ve ztížených podmínkách; aktivní naslouchání – cíle, výhody, zásady, způsob a nácvik, poskytování zpětné vazby, … .<br />
            Neverbální komunikace - řeč těla - porozumění druhým podle gest rukou, postoje nohou, obličejové mimiky, výrazu očí, …. .<br />
            Obrana před manipulací - asertivní techniky – manipulace, vysvětlení a nácvik jednotlivých asertivních technik<br />
            <br />
            <b>4. MODUL – Fáze poradenského procesu  - I. II.– (3 hod.)</b><br />
            Obsahem modulu je seznámit s jednotlivými kroky poradenského procesu:<br />
            Přípravná fáze mentoringu: - zajištění potřebných informací k zahájení mentoringu<br />
            Zahájení mentoringu: struktura úvodního setkání mentora a mentee; popis jednotlivých kroků úvodního setkání; základní pravidla pro navázání vztahu s mentorovaným a pro úspěšný začátek mentoringu; nastavení cílů podle kritéria SMART, nastavení strategie k dosažení cílů<br />
            <br />
            Součástí semináře je praktický nácvik – práce jednotlivců i ve skupinách – modelové situace, hry v rolích<br />
            <br />
            <b>III. SETKÁNÍ (8hod)</b><br />
            <br />
            <b>5. MODUL – Fáze poradenského procesu  - III. IV.– (4 hod.)</b><br />
            Obsahem modulu je seznámit s jednotlivými kroky poradenského procesu:<br />
            Realizace strategie k cíli - Zásady vedení poradenského rozhovoru, pravidla kladení otázek, typy otázek; základní teorie motivace, tipy pro překonání pasivity mentorovaného: negativní naladění, námitky, konflikt a dalších obtíže<br />
            Ukončení mentoringu - Ověření úspěšnosti dosažení cílů, nastavení akčního plánu pro další rozvoj mentorovaného, motivace mentorovaného k dalšímu rozvoji,<br />
            Zpětná vazba - umět podat závěrečnou zpětnou vazbu, respektovat etiku ve zpětné vazbě, zásady poradenských dovedností, schopnost reagovat na negativní zpětnou vazbu;<br />
            Organizace mentorské schůzky společný rozbor situace<br />
            <br />
            <b>6. MODUL – Praktický nácvik– (4 hod.)</b><br />
            Obsahem modulu je praktický nácvik – práce jednotlivců i ve skupinách – modelové situace - navázání pracovního vztahu, plánování společné schůzky, analýza vzdělávacích potřeb, plánování cílů a ověřování pokroku, evaluace, rozbor, porovnávání výsledků a vzájemná zpětná vazba<br />
          </div>
        </div>
      </LiFile >
    </ul>
  </BlockEx>
</Panel>


var ZSNoveTechnologie: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>
    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt0010" aria-expanded="false" aria-controls="collapseznt0010">Umělá inteligence ve škole 
      </b> (doporučeno pro ZŠ,SŠ, VOŠ)
        <div className="collapse " id="collapseznt0010">
          <p>Obsah semináře je zaměřen na konkrétní aplikace umělé inteligence, které jsou použitelné zdarma a mohou okamžitě přinést praktický užitek ve školním prostředí. Účastníci se naučí, jak pomocí AI vytvořit materiály pro výuku, jak AI začlenit do výuky nebo jak si s AI zjednodušit administrativní procesy.</p>
          <ul className="list-group">
            <li className="list-group-item">•	přehled dostupných AI nástrojů pro učitele, které lze využít zdarma (např. ChatGPT, ScioBot);</li>
            <li className="list-group-item">•	vytváření vlastních didaktických materiálů s využitím AI (např. generování interaktivních úloh pomocí aplikací Wizer.me, Quizlet, Kahoot, Nearpod);</li>
            <li className="list-group-item">•	AI ve výuce různých předmětů – klady, zápory a omezení vzhledem konkrétním předmětům;</li>
            <li className="list-group-item">•	AI pro tvorbu vizuálních materiálů: generování výukových obrázků zdarma (např. Ideogram, Leonardo AL);</li>
            <li className="list-group-item">•	AI pro tvorbu hudebního a multimediálního obsahu: generování hudby a zvuků pro výuku (např. Suno, Soundraw a Mubert pro automatickou tvorbu hudebních podkladů);,</li>
            <li className="list-group-item">•	AI pro tvorbu prezentací a videí;</li>
            <li className="list-group-item">•	automatizace hodnocení a zpětné vazby pomocí AI.</li>
          </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt010" aria-expanded="false" aria-controls="collapseznt010">Digitální kompetence na základní škole
      </b> (doporučeno pro ZŠ a asistenty pedagoga)
        <div className="collapse " id="collapseznt010">
          <p>Kurz je zaměřen na rozvoj vybraných digitálních kompetencí ve výuce na základní škole, které učitelé využijí ve své praxi v souladu s novými cíli v RVP. Účastníci získají znalosti a dovednosti v oblasti metodiky, které jim umožní v rámci své výuky u žáků rozvíjet vybrané kompetence vedoucí k orientaci v digitálním světě a k účelnému a bezpečnému využívání digitálních technologií.</p>
          <p>Vybraná témata:</p>
          <ul className="list-group">
            <li className="list-group-item">•	výběr vhodných zdrojů dat, jejich citace a bezpečné uložení dat,</li>
            <li className="list-group-item">•	tvorba digitálního materiálu pro prezentaci dat,</li>
            <li className="list-group-item">•	náhled do využití umělé inteligence,</li>
            <li className="list-group-item">•	online aplikace pro zpestření a procvičení učiva,</li>
            <li className="list-group-item">•	online nástroje pro skupinovou práci,</li>
            <li className="list-group-item">•	praktické mobilní aplikace do školy i života</li>
          </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt020" aria-expanded="false" aria-controls="collapseznt020">Digitální kompetence na ZŠ - matematika
      </b> (doporučeno pro ZŠ a asistenty pedagoga)
        <div className="collapse " id="collapseznt020">
          <p>Kurz je zaměřen na rozvoj digitálních kompetencí ve výuce matematiky, které učitelé využijí ve své praxi v souladu s novými cíli v RVP. Účastníci získají znalosti a dovednosti v oblasti metodiky, které jim umožní v rámci své výuky u žáků rozvíjet kompetence vedoucí k orientaci v digitálním světě a k účelnému a bezpečnému využívání digitálních technologií v matematice.</p>
          <p>Kurz ukáže, jak využívat digitálních pomůcek při modelování matematických situací a řešení matematických úloh i problémů a volit efektivní postupy v následujících oblastech:</p>
          <ul className="list-group">
            <li className="list-group-item">•	algoritmické myšlení a procedurální zběhlost,</li>
            <li className="list-group-item">•	číslo a proměnná,</li>
            <li className="list-group-item">•	závislosti, vztahy a práce s daty,</li>
            <li className="list-group-item">•	geometrie v rovině a prostoru.</li>
          </ul>
          <p>V rámci semináře se pro tyto účely účastníci naučí využívat dynamický geometrický, tabulkový procesor a vybrané webové stránky, které umožňují dynamické interpretace čísel a proměnných.</p>
        </div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt0" aria-expanded="false" aria-controls="collapseznt0">Nová informatika na základní škole </b> (8 hod, akreditováno pro ZŠ, asistenti)
                <div className="collapse " id="collapseznt0">
          <ul className="list-group">
            <li className="list-group-item">•	Jak na novou informatiku dle revidovaného ŠVP. Praktické a teoretické možnosti, jakým způsobem vyučovat novou informatiku na základní škole. Krokování, myšlenková mapa, šifry apod. (2 hod.)</li>
            <li className="list-group-item">•	Rozvoj informatického myšlení žáků pomocí různých výukových metod a forem práce. Práce ve skupinách, samostatná práce s dotykovým zařízením, práce s počítačem, brainstorming…  (1,5 hod.)</li>
            <li className="list-group-item">•	Jednotlivé postupy ve výuce nové informatiky, práce v různých aplikacích a programech, práce s informacemi. Ukázka možnosti práce s robotickými stavebnicemi a jejich virtuálního prostředí.např. Mindmup, VR VEX, scratch, QR generation, Minecraft Education, apod  (3 hod.)</li>
            <li className="list-group-item">•	Ukázka robotických stavebnic a programovatelných stanic a práce s nimi. Práce s virtuální a rozšířenou realitou a možnosti zavedení technologií do výuky. LEGO Edudation, VEX GO, VEX 123 (1,5 hod)</li>
          </ul>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt1" aria-expanded="false" aria-controls="collapseznt1">Efektivní využití MS Office pro pedagogy – 8 hodin </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ)
                <div className="collapse " id="collapseznt1">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Seznámení s programem – demonstrace úpravy prostředí Windows</b> - přizpůsobení pracovní plochy, nastavení hlavního panelu, možnosti zobrazení ikon a představení prostřední MS Office z pohledu zefektivnění práce s jednotlivými programy, využití panelu rychlých nástrojů, přizpůsobení pásu karet, nastavení stavového řádku, karta zobrazení (0, 5 hod)</li>
            <li className="list-group-item">•	<b>MS Office Word</b> – formátování písma, odstavců, textu, vícestránkové dokumenty, vkládání a úprava textů z internetu, záhlaví, zápatí, styly, vkládání a úprava obrázků do textu, práce s obrazci, symboly, rozšíření znalostí klávesových zkratek (2,5 hod)</li>
            <li className="list-group-item">•	<b>MS Office Excel</b> – seznámení s prostředím Microsoft Excel, formátování buněk, tabulek, vytváření vlastních řad, vzorce a funkce v Excelu se zaměřením na praktické využití při používání Excelu při evidenci dat i při výuce (2,5 hod)</li>
            <li className="list-group-item">•	<b>MS Office PowerPoint</b> – pravidla prezentace, práce se snímky, textovými poli, vkládání obrázků, objektů, využití šablon, motivů, možnosti efektů, příprava pro tisk (2,5 hod)</li>
          </ul>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt2" aria-expanded="false" aria-controls="collapseznt2">Různé metody pro využití ICT technologií ve škole </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
                <div className="collapse " id="collapseznt2">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Vliv ICT na žáka</b> v každodenním životě (1 hod)</li>
            <li className="list-group-item">•	<b>Počítačová gramotnost</b> – Čeho se týká, jaká by měla být role učitele/vychovatele, co je funkční a informační gramotnost, jaká je pozice žáka… (1 hod)</li>
            <li className="list-group-item">•	<b>Moderní technologie a jejich implementace do edukačního procesu</b> – učitel, vychovatel, žák, škola, PC a dataprojektor, interaktivní tabule, laptopové třídy, LMS a e-learning, mezinárodní kooperace, e- Twinning (2,5 hod)</li>
            <li className="list-group-item">•	<b>Ukázka možností využití některých programů a internetových stránek k podpoře výuky</b> (týmová výuka – Toglic, různé webové portály, se kterými může pedagog výuku oživit). (1,5 hod)</li>
            <li className="list-group-item">•	<b>Ukázka práce s dotykovým zařízením.</b> Práce s on – line aplikacemi, využití vhodných aplikací na dotykových zařízeních (2 hod)</li>
          </ul>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt3" aria-expanded="false" aria-controls="collapseznt3">Inspirace pro využití interaktivních tabulí ve škole </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
                 <div className="collapse " id="collapseznt3">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Interaktivní tabule a její využití</b>  - využití interaktivních učebnic, on-line cvičení, webové portály vhodné k práci na interaktivní tabuli (1 hod)</li>
            <li className="list-group-item">•	<b>Program Active Inspire</b> a jeho využití (1,5 hod)</li>
            <li className="list-group-item">•	<b>MS PowerPoint</b> - pravidla prezentace, práce se snímky, textovými poli, vkládání obrázků, objektů, využití šablon, motivů, možnosti efektů, příprava pro tisk, dodržování autorství – obrázky s volnou licencí (2 hod)</li>
            <li className="list-group-item">•	<b>Základy dodržování správného prezentování</b> (1 hod)</li>
            <li className="list-group-item">•	<b>Praktická cvičení</b> – tvorba prezentací účastníků s jednotlivými prvky prezentace a samotné prezentování připravených materiálů; následná diskuse a rozbor prezentací (2,5 hod)</li>
          </ul>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt4" aria-expanded="false" aria-controls="collapseznt4">Práce s dotykovými zařízeními ve škole </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
                 <div className="collapse " id="collapseznt4">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Seznámení s dotykovými zařízeními</b> – obecné prvky práce s dotykovými zařízeními, rozdělení dotykových zařízení, různé platformy dotykových zařízení (android, Windows, iOS…) (2 hod)</li>
            <li className="list-group-item">•	<b>Vhodné aplikace do škol - představení vhodných aplikací k práci na školách; online prostředí</b> – vyhledávání informací, práce s online aplikacemi (2 hod)</li>
            <li className="list-group-item">•	<b>Praktické využití dotykových zařízení</b> – týmová práce v aplikaci Toglic ; program OneNote (2 hod)</li>
            <li className="list-group-item">•	<b>Ukázka práce s dotykovými zařízeními</b> - uchazeč se v posledním bloku aktivně zapojí do práce s dotykovým zařízením. Využije získané teoretické poznatky k sestavení ukázkové hodiny, ve které využije dotyková zařízení (2 hod)</li>
          </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt50" aria-expanded="false" aria-controls="collapseznt50">Využití ICT ve výuce - náměty a inspirace pro praxi
      </b> (8 hod, doporučeno pro ZŠ, SŠ, VOŠ)
        <div className="collapse " id="collapseznt50">
          <p>Vzdělávací program je zaměřen na využití moderních technologií ve výuce. Semináře je zaměřen jak na obecnější principy využití moderních technologií, tak na využití konkrétních programů, webových stránek a aplikací vhodných pro podporu výuky.Účastníci se seznámí s metodami a postupy, které zdokonalují výklad učiva a zároveň žáky motivují. Pracovat se bude v duchu konstruktivistické pedagogiky.Programy, aplikace a webové stránky jsou voleny tak, aby jejich užití bylo pro školu zdarma (bez kupování licencí).</p>
          <p>Příklady probíraných témat</p>
          <ul className="list-group"><li className="list-group-item">•	Seznámení s problematikou nasazení výukových technologií školního prostředí (pozitiva, negativa a rizika nasazení se kterými je třeba počítat) (1 hodina)</li>
            <li className="list-group-item">•	Seznámení programy a aplikacemi, které oživí každou prezentaci</li>
            <li className="list-group-item">•	Využití pojmových map, sdílených poznámek a dokumentů ve výuce</li>
            <li className="list-group-item">•	Programy a aplikace pro jednoduché vytváření zábavných kvízů</li>
            <li className="list-group-item">•	Použití programu Formulator Tarsia pro tvorbu domin, triomin a jiných her vhodných k oživení procvičovaného učiva</li>
            <li className="list-group-item">•	Příklady různých aplikací, programů či webových stránek s hrami, videi, texty i jinými materiály, které je možné vhodně využít při výuce</li>
          </ul></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt5" aria-expanded="false" aria-controls="collapseznt5">Využití ICT ve škole </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
                 <div className="collapse " id="collapseznt5"><ul className="list-group"><li className="list-group-item">•	Seznámení s problematikou nasazení výukových technologií školního prostředí (pozitiva, negativa a rizika nasazení se kterými je třeba počítat) (1 hodina)</li>
          <li className="list-group-item">•	Rozbor dosavadně používaných programů a aplikací účastníků (1 hodina)</li>
          <li className="list-group-item">•	Vybrané nástroje Microsoft Office, které usnadňují práci pedagoga (např. hromadná korespondence, fonty psacích písem) (2 hodiny)</li>
          <li className="list-group-item">•	Google Apps EDU - speciální balík aplikací Google pro školy a jak jej efektivně využít (2 hodiny)</li>
          <li className="list-group-item">•	Vybrané předinstalované aplikace operačního systému Windows vhodné pro práci pedagoga (např. Výstřižky, Panel pro matematický zápis) (1 hodina)</li>
          <li className="list-group-item">•	Typy pro vyhledávání materiálů na internetu (1 hodina)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt6" aria-expanded="false" aria-controls="collapseznt6">Efektivní využití LibreOffice ve škole </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
                <div className="collapse " id="collapseznt6">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Writer </b> – formátování písma, odstavců, textu, vícestránkové dokumenty, vkládání a úprava textů z internetu, záhlaví, zápatí, styly, vkládání a úprava obrázků do textu, práce s obrazci, symboly, rozšíření znalostí klávesových zkratek (3 hodiny)</li>
            <li className="list-group-item">•	<b>Calc </b> – seznámení s prostředím Calc, formátování buněk, tabulek, vytváření vlastních řad, vzorce a funkce v Calcu se zaměřením na praktické využití při používání Calcu při evidenci dat i při výuce (2 hodiny)</li>
            <li className="list-group-item">•	<b>Impress </b> – pravidla prezentace, práce se snímky, vkládání obrázků, objektů, využití šablon, motivů, příprava pro tisk (2 hodiny)</li>
            <li className="list-group-item">•	<b>Draw </b> – seznámení s prostředím pro tvorbu náčrtů, plakátů a mnoha dalších typů dokumentu, manipulace s objekty, ořezávání objektů, seskupování objektů (1 hodina)</li>
          </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt7" aria-expanded="false" aria-controls="collapseznt7">Efektivní využití Google dokumentů ve škole </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
                   <div className="collapse " id="collapseznt7"><ul className="list-group"><li className="list-group-item">•	<b>Dokumenty </b> – formátování písma, odstavců, textu, vícestránkové dokumenty, vkládání a úprava textů z internetu, záhlaví, zápatí, styly, vkládání obrázků a nákresů do textu, práce s tabulkou, speciálními znaky, hlasové zadávání, rozšíření znalostí klávesových zkratek (3 hodiny)</li>
          <li className="list-group-item">•	<b>Tabulky </b> – seznámení s prostředím tabulek, formátování buněk, tabulek, vytváření vlastních řad, vzorce a funkce se zaměřením na praktické využití při evidenci dat i při výuce (2 hodiny)</li>
          <li className="list-group-item">•	<b>Prezentace </b> – pravidla prezentace, práce se snímky, vkládání různých typů objektů (obrázky, diagramy aj.), využití motivů, příprava pro tisk (2 hodiny)</li>
          <li className="list-group-item">•	<b>Formuláře </b> – vytváření online formulářů a kvízů (1 hodina)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt8" aria-expanded="false" aria-controls="collapseznt8">Distanční výuka – formy a metody práce s žáky on-line </b> (8 hod, akreditováno pro ZŠ, ZUŠ, SŠ, VOŠ)
                 <div className="collapse " id="collapseznt8"><ul className="list-group">
          <li className="list-group-item">•	<b>Programy využitelné při on-line výuce </b> - Skype, Jitsi Meet, Zoom, MS Teams a další (2 hod)</li>
          <li className="list-group-item">•	<b>Využití webových stránek sloužící k výuce on-line</b> (1 hod)</li>
          <li className="list-group-item">•	<b>MS PowerPoint </b> - pravidla prezentace, práce se snímky, textovými poli, vkládání obrázků, objektů, využití šablon, motivů, možnosti efektů, příprava pro tisk, dodržování autorství – obrázky s volnou licencí (2 hod)</li>
          <li className="list-group-item">•	<b>Jak komunikovat s žáky on-line</b> (1 hod)</li>
          <li className="list-group-item">•	<b>Praktická cvičení </b> – tvorba prezentací účastníků s jednotlivými prvky prezentace a praktické využití jednotlivých nástrojů k distančnímu učení (2 hod)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt9" aria-expanded="false" aria-controls="collapseznt9">Jak na distanční výuku? </b> (8 hod, akreditováno pro ZŠ, ZUŠ, SŠ, VOŠ)
                <div className="collapse " id="collapseznt9"><ul className="list-group"><li className="list-group-item">•	Software využitelný při on-line výuce (2 hodiny)</li>
          <li className="list-group-item">•	Využití webových stránek sloužící k výuce on-line (1 hodina)</li>
          <li className="list-group-item">•	Prezi - pravidla prezentace, práce se snímky, textovými poli, vkládání obrázků, objektů, využití šablon, motivů, možnosti efektů, sdílení (2 hodiny)</li>
          <li className="list-group-item">•	Jak komunikovat s žáky on-line (1 hodina)</li>
          <li className="list-group-item">•	Praktická cvičení  – tvorba prezentací účastníků s jednotlivými prvky prezentace, praktické využití jednotlivých nástrojů k distančnímu učení (2 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapseznt10" aria-expanded="false" aria-controls="collapseznt10">Základy práce s MS Office a jejich využití na školách
      </b>(8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
        <div className="collapse " id="collapseznt10">
          <ul className="list-group"><li className="list-group-item">•	<b>MS Office 365 </b> – představení prostřední MS Office 365 z pohledu zefektivnění práce (1,5 hod)</li>
            <li className="list-group-item">•	<b>MS Office Word </b> – formátování písma, odstavců, textu, vícestránkové dokumenty, vkládání a úprava textů z internetu, záhlaví, zápatí, styly, vkládání a úprava obrázků do textu, práce s obrazci, symboly, rozšíření znalostí klávesových zkratek, úprava dlouhých strukturovaných textů, správná citace textů podle normy ISO (2,5 hod)</li>
            <li className="list-group-item">•	<b>MS Office Excel </b> – seznámení s prostředím Microsoft Excel, formátování buněk, tabulek, vytváření vlastních řad, vzorce a funkce v Excelu se zaměřením na praktické využití při používání Excelu při evidenci dat i při výuce (1,5 hod)</li>
            <li className="list-group-item">•	<b>MS Office PowerPoint </b> – pravidla prezentace, práce se snímky, textovými poli, vkládání obrázků, objektů, využití šablon, motivů, možnosti efektů, příprava pro tisk, základy správné prezentace, dodržování autorství – obrázky s volnou licencí (2,5 hod)</li>
          </ul>
        </div>
      </LiFile>
    </ul>
  </BlockEx>
</Panel>;

var ZSInkluzeCizinci: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={1}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezic0" aria-expanded="false" aria-controls="collapsezic0">Jak pracovat se žáky s odlišným mateřským jazykem  </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ, asistenti)
                                <div className="collapse " id="collapsezic0"><ul className="list-group">
          <li className="list-group-item">•	Téma: Společné vzdělávání na základních a středních školách a možnosti vzdělávání žáků s OMJ na těchto školách v souladu s platnými přepisy-Vyhláška 27/2016 Sb., ve znění pozdějších předpisů.
Vymezení pojmů: odlišné kulturní a jiných životní podmínky: vymezení pojetí „kultura“ a „životní“, hledání terminologických ekvivalentů.
Struktura podpůrných opatření, možnosti podpůrných opatření se zaměřením na žáky s OMJ.(2 hodiny)
</li>
          <li className="list-group-item">•	Téma: Možnosti pedagogické diagnostiky
- terminologie „vzdělání“ a „vzdělávání „
- kompetence pedagogického pracovníka v procesu vzdělávání.
- sociální a společenské otázky v procesu školního vzdělávání žáků s OMJ
- charakteristika žáka, vývoj základních schopností a dovedností
- specifika daného věku, principy a příčiny chování žáků v závislosti na prostředí.
- základní možnosti pedagogické diagnostiky, vhodnost pro stanovení cílů, metod a forem práce v rámci prvního stupně podpůrného opatření.
- stanovení cílů, způsob konkretizace cílů s dopadem na využití potenciálů žáka s OMJ.
- komunikace a porozumění žáku s OMJ
/ respekt k nedokonalé znalosti českého jazyka,  komunikace, možnosti monitorování a  hodnocení plnění výstupů jednotlivých předmětů daného ročníku (2 hodiny)
</li>
          <li className="list-group-item">•	Téma: Práce s PLPP, případně IVP, hodnocení žáka, metody a formy práce.
Využití pedagogické diagnostiky ve školním prostředí, úprava právních předpisů - v souvislosti s využitím podpůrného opatření.
analýza získaných poznatků
východiska pro nastavení práce se žákem s OMJ
tvoření výchovného plánu, PLPP , možnosti individualizace v rámci PO1
Posílení podpůrných opatření, jestliže se PO 1 jeví jako nedostačující, možnosti ŠPZ /PPP, SPC/.
práce s doporučením ŠPZ pro vzdělávání žáka se speciálně vzdělávacími potřebami a OMJ
Metodická východiska v práci učitele: zásady v edukačním procesu- stereotyp, rutinní činnosti, opakování, rozvoj paměti, přiměřenost, od konkretizace po abstrakci, zpětná vazba atd  (2 hodiny)
</li>
          <li className="list-group-item">•	Téma: Práce s metodickým materiálem
Příklady dobré praxe – kazuistiky. Spolupráce pedagogických pracovníků a členů školního poradenského pracoviště.
Metodický materiál pro zjištění porozumění českému jazyku (aktivní a pasivní znalosti jazyka).
Ukázka metodického materiálu, pomůcek, odkazy na doporučenou literaturu. (2 hodiny)
</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezic01" aria-expanded="false" aria-controls="collapsezic01">Jak pracovat se žákem s odlišnými kulturními podmínkami </b> (8 hod, akreditováno pro ZŠ, ŠD, SŠ, VOŠ, DM, asistenti)
                                <div className="collapse " id="collapsezic01"><ul className="list-group">
          <li className="list-group-item">•	Téma - teoretická část. Společné vzdělávání na základních a středních školách a možnosti vzdělávání žáků s OMJ na těchto školách v souladu s platnými přepisy-Vyhláška 27/2016 Sb., ve znění pozdějších předpisů. Vymezení pojmů: odlišné kulturní a jiných životní podmínky: vymezení pojetí „kultura“ a „životní“, hledání terminologických ekvivalentů. Struktura podpůrných opatření, možnosti podpůrných opatření se zaměřením na žáky s OMJ a jinými životními a kulturními podmínkami. (2 hodiny)
</li>
          <li className="list-group-item">•	Téma - možnosti pedagogické diagnostiky. terminologie „vzdělání“ a „vzdělávání „ kompetence pedagogického pracovníka v procesu vzdělávání.  sociální a společenské otázky v procesu školního vzdělávání žáků s OMJ, charakteristika žáka, vývoj základních schopností a dovedností, specifika daného věku, principy a příčiny chování žáků v závislosti na prostředí, ve kterém žák vyrůstal a ovlivnilo jeho chování ve školním prostředí, základní možnosti pedagogické diagnostiky, vhodnost pro stanovení cílů, metod a forem práce v rámci prvního stupně podpůrného opatření, stanovení cílů, způsob konkretizace cílů s dopadem na využití potenciálů žáka s OMJ, komunikace a porozumění žáku s OMJ, / respekt, komunikace, hodnotový systém, individualita, empatie, stres a reakce na něj, úcta, budování pravidel osobních i skupinových a jejich dodržování, …/ (2 hodiny).
</li>
          <li className="list-group-item">•	Téma - práce s PLPP, případně IVP, hodnocení žáka, metody a formy práce. Využití pedagogické diagnostiky ve školním prostředí, úprava právních předpisů - v souvislosti s využitím podpůrného opatření, analýza získaných poznatků, východiska pro nastavení práce se žákem s OMJ, tvoření výchovného plánu, PLPP, IVP, práce s doporučením pro žáka se speciálně vzdělávacími potřebami a OMJ. Metodická východiska v práci učitele: zásady v edukačním procesu- stereotyp, rutinní činnosti, opakování, rozvoj paměti, přiměřenost, od konkretizace po abstrakci, zpětná vazba atd. (2 hodiny)
</li>
          <li className="list-group-item">•	Téma - práce s metodickým materiálem. Příklady dobré praxe – kazuistiky.
Metodický materiál pro zjištění porozumění českému jazyku (aktivní a pasivní znalosti jazyka). Ukázka metodického materiálu, pomůcek, odkazy na doporučenou literaturu. (2 hodiny)
</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezic1" aria-expanded="false" aria-controls="collapsezic1">Klima třídy se žáky s odlišným mateřským jazykem </b> (8 hod, akreditováno pro ZŠ, SŠ, VOŠ, asistenti)
        <div className="collapse " id="collapsezic1"><ul className="list-group">
          <li className="list-group-item">•	<b>Téma – Základní sociální potřeby žáků s OMJ, jinými životními a kulturními potřebami</b>  Základní sociální potřeby: Potřeba místa, bezpečí, podnětu, potřeba péče, výživy, dále potřeby podpory a sociálních limitů. Důsledky nenaplňování potřeb a jejich vliv na chování žáků v rámci dané třídy, školy. Dopady procesu psychického a fyzického vývoje a spojené se změnou životních podmínek a jejich vliv na chování žáka v podmínkách školy, přístup k pravidlům, normám a jejich respektování. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – žák s OMJ a jinými životními a kulturními podmínkami, vliv na klima třídy.</b>  Pravidla a zásady vedení třídního kolektivu. Práce s tvarem třídy – konformita a normy konkrétního třídního kolektivu – příprava, hranice, rizika a zdroje. Role žáka ve třídě, zapojení žáka s OMJ do třídního kolektivu. Posilování pozitivních vazeb. Regulace chování ve skupině. (2 hodiny)</li>
          <li className="list-group-item">•	<b>Téma – Práce s pocity žáků s OMJ a jako prevence kázeňských problémů.</b>  Možnosti diferencovaného vzdělávání. Školní prostředí a střídání rolí. Možnosti chování, projevy žáků, zapojení do školního kolektivu, řešení projevu „odlišnosti“ s respektováním odlišných projevů, norem, postojů s cílem adaptace na nové podmínky školy. (2 hodiny).</li>
          <li className="list-group-item">•	<b>Téma – praktické ukázky, práce s třídním kolektivem, kaziustikami.</b>  Komunikace se žákem s OMJ. Pro praktické ukázky bude využita metoda hraní rolí, vedení rozhovoru a další interaktivní techniky a zásady práce v rámci třídního kolektivu za účelem zapojení žáků s OMJ a jinými životními a kulturními podmínkami. Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky, zaměření na jednotlivé situace, problémy, vlastní kazuistiky. (2 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezic2" aria-expanded="false" aria-controls="collapsezic2">Klima třídy se žáky s odlišným mateřským jazykem -webinář </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, SŠ, VOŠ, DM, asistenti)
                <div className="collapse border rounded " id="collapsezic2">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Základní sociální potřeby žáků s OMJ, jinými životními a kulturními potřebami<br />
            Základní sociální potřeby:<br />
            Potřeba místa, bezpečí, podnětu,<br />
            potřeba péče, výživy, dále potřeby podpory a sociálních limitů.<br />
            Důsledky nenaplňování potřeb a jejich vliv na chování žáků v rámci dané třídy, školy.<br />
            Dopady procesu psychického a fyzického vývoje a spojené se změnou životních podmínek a jejich vliv na chování žáka v podmínkách školy, přístup k pravidlům, normám a jejich respektování.<br />
            <br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – žák s OMJ a jinými životními a kulturními podmínkami, vliv na klima třídy.<br />
            Pravidla a zásady vedení třídního kolektivu.<br />
            Práce s tvarem třídy – konformita a normy konkrétního třídního kolektivu – příprava, hranice, rizika a zdroje.<br />
            Role žáka ve třídě, zapojení žáka s OMJ do třídního kolektivu. Posilování pozitivních vazeb.<br />
            Regulace chování ve skupině.<br />
            <br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Práce s pocity žáků s OMJ a jako prevence kázeňských problémů.<br />
            Možnosti diferencovaného vzdělávání<br />
            Školní prostředí a střídání rolí.<br />
            Možnosti chování, projevy žáků, zapojení do školního kolektivu, řešení projevu „odlišnosti“ s respektováním odlišných projevů, norem, postojů s cílem adaptace na nové podmínky školy.<br />
            <br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – praktické ukázky, práce s třídním kolektivem, kaziustikami<br />
            Komunikace se žákem s OMJ.<br />
            Pro praktické ukázky bude využita metoda hraní rolí, vedení rozhovoru a další interaktivní techniky a zásady práce v rámci třídního kolektivu za účelem zapojení žáků s OMJ a jinými životními a kulturními podmínkami.<br />
            Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky, zaměření na jednotlivé situace, problémy, vlastní kazuistiky.<br />
          </div>
        </div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezic3" aria-expanded="false" aria-controls="collapsezic3">Jak ve škole asertivně pracovat se žáky cizinci
      </b>(8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
        <div className="collapse border rounded " id="collapsezic3">
          <div className="m-3">
            <b>1.	část – Asertivní chování – 3 hodiny</b><br />
            a)	asertivní techniky–vysvětlení a nácvik jednotlivých asertivních technik v rámci komunikace s rodičem cizincem, způsoby jednání, zvládání  emocí<br />
            b)	obrana před manipulací ze strany rodičů cizinců, přijatelný kompromis mezi oběma stranami, přijetí a poskytování konstruktivní kritiky, přijetí a poskytování pochvaly a vyjádření uznání, účinnost pochvaly<br />
            <br />
            <b>2.	část – Žák cizinec – 5 hod</b><br />
            a)	úvod do problematiky vzdělávání žáků s OMJ – typy žáků, vzorce chování, obtíže při osvojování českého jazyka, …<br />
            b)	vzdělávání cizinců z pohledu právního rámce – Školský zákon, Vyhláška č.27/2016 Sb, Metodické doporučení MŠMT, ..<br />
            c)	metodická podpora při vzdělávání žáků cizinců - zaměření na inkluzi žáka cizince do školního prostředí<br />
          </div></div>
      </LiFile>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezic31" aria-expanded="false" aria-controls="collapsezic31">Jak ve škole asertivně pracovat se žáky cizinci - webinář
      </b>  (8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
        <div className="collapse border rounded " id="collapsezic31">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Asertivní chování, 1. část<br />
            Asertivní techniky–vysvětlení a nácvik jednotlivých asertivních technik v rámci komunikace s rodičem cizincem, způsoby jednání, zvládání  emocí<br />
            <br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Asertivní chování, 2. část<br />
            Obrana před manipulací ze strany rodičů cizinců, přijatelný kompromis mezi oběma stranami, přijetí a poskytování konstruktivní kritiky, přijetí a poskytování pochvaly a vyjádření uznání, účinnost pochvaly.<br />
            <br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Žák cizinec, 1. část<br />
            Úvod do problematiky vzdělávání žáků s OMJ – typy žáků, vzorce chování, obtíže při osvojování českého jazyka, … <br />
            Vzdělávání cizinců z pohledu právního rámce – Školský zákon, Vyhláška č.27/2016 Sb, Metodické doporučení MŠMT, ..<br />
            <br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma – Žák cizinec, 2. část<br />
            Metodická podpora při vzdělávání žáků cizinců - zaměření na inkluzi žáka cizince do školního prostředí<br />
          </div></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezic4" aria-expanded="false" aria-controls="collapsezic4">Začlenění žáka cizince do třídního kolektivu
      </b>  (8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
        <div className="collapse border rounded " id="collapsezic4">
          <div className="m-3">
            <b>Teoretická část</b>   (3 vyučovací hodiny)<br />
            a)  Principy práce třídního učitele (TU) se třídou (2h) –<br />
            •	klima třídy, její sociální struktura, vztah atmosféry a klimatu školní třídy<br />
            •	pedagogická diagnostika pro utváření pozitivního klimatu třídy, mapování vztahů<br />
            b)  Třídnické práce(1h)<br />
            •	struktura a obsah třídnických hodin (TH)<br />
            •	význam skupinové a týmové spolupráce<br />
            <b>Praktická část</b> (5 vyučovacíh hodin)<br />
            Metody osobností a sociální výchovy k rozvoji etických a sociálních dovedností žáků, které jsou cíleně zaměřené na začleňování žáků cizinců do třídního kolektivu<br />
            Nabídka aktivit je z vlastního zkušenostního dvouletého výcviku či z doporučených publikací - doc. PhDr. Soni Hermochové, CSc., doc. PhDr. Josefa Valenty, CSc., Doc. PhDr. Hany Kasíkové, CSc., Mgr. Petra Kříže a dalších):<br />
            •	aktivity seznamovací a "rozehřívací" (ledolamky)<br />
            •	aktivity pro rozvoj vzájemné důvěry, podpory a pomoci, empatie a návazně vytváření bezpečného prostředí<br />
            •	aktivity vedoucí k sebepoznání, hodnocení a sebehodnocení<br />
            •	aktivity rozvíjející komunikaci (verbální i neverbální)<br />
            •	interaktivní hry založené na spolupráci ve skupině<br />
            •	techniky při řešení interpersonálních konfliktů – rolové hry, dramatika<br />
          </div></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezic5" aria-expanded="false" aria-controls="collapsezic5">Začlenění žáka cizince do třídního kolektivu – webinář
      </b>  (8 hod, akreditováno pro SŠ, VOŠ, DM, MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, asistenti)
        <div className="collapse border rounded " id="collapsezic5">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma: Principy práce třídního učitele (TU) se třídou<br />
            •	klima třídy, její sociální struktura, vztah atmosféry a klimatu školní třídy<br />
            •	pedagogická diagnostika pro utváření pozitivního klimatu třídy, mapování vztahů<br />
            <br />
            <b>Blok 2 (1 vyučovací hodina – 45 minut)</b><br />
            Téma:   Třídnické práce<br />
            •	struktura a obsah třídnických hodin (TH)<br />
            •	význam skupinové a týmové spolupráce<br />
            <br />
            Následují metody osobností a sociální výchovy k rozvoji etických a sociálních dovedností žáků, které jsou cíleně zaměřené na začleňování žáků cizinců do třídního kolektivu<br />
            Nabídka námětů aktivit, které budou účastníkům prezentovány na webináři jsou vybrány z vlastního zkušenostního dvouletého výcviku či z doporučených publikací - doc. PhDr. Soni Hermochové, CSc., doc. PhDr. Josefa Valenty, CSc., Doc. PhDr. Hany Kasíkové, CSc., Mgr. Petra Kříže a dalších):<br />
            Všechny aktivity jsou volené a zaměřené pro vytvoření pozitivní atmosféry ve třídě.<br />
            U každé aktivity proběhne nejen podrobné vysvětlení cíle, obsahu, reflexe, ale důraz bude kladen i na reflexi s účastníky.<br />
            <br />
            <b>Blok 3 (1 vyučovací hodina – 45 minut)</b><br />
            Téma:   praktická část 1<br />
            •	aktivity seznamovací a "rozehřívací" (ledolamky)<br />
            •	aktivity pro rozvoj vzájemné důvěry, podpory a pomoci, empatie a návazně vytváření bezpečného prostředí<br />
            <br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma:   praktická část 2<br />
            •	aktivity vedoucí k sebepoznání, hodnocení a sebehodnocení<br />
            •	aktivity rozvíjející komunikaci (verbální i neverbální)<br />
            <br />
            <b>Blok 5 (2 vyučovací hodiny – 90 minut)</b><br />
            Téma:   praktická část 3<br />
            •	interaktivní hry založené na spolupráci ve skupině<br />
            •	techniky při řešení interpersonálních konfliktů – rolové hry, dramatika<br />

          </div></div>
      </LiFile >
    </ul>
  </BlockEx>
</Panel>


var ZSMedialniGramotnost: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>

      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezmg1" aria-expanded="false" aria-controls="collapsezmg1">Funkce a nástrahy internetu, kyberšikana a sociální sítě </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
                <div className="collapse.show" id="collapsezmg1">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Vznik a funkce internetu</b> – vznik internetu, fungování internetu, vyhledávání na internetu, rozdíl mezi internetovým vyhledavačem a prohlížečem, nástrahy internetu a bezpečné chování na internetu (2,5 hod)</li>
            <li className="list-group-item">•	<b>Kyberšikana</b> – identifikace problémů, řešení problémů, rozdíl mezi klasickou šikanou a kyberšikanou (2 hod)</li>
            <li className="list-group-item">•	<b>Sociální sítě a práce s nimi</b> – obecné informace o sociálních sítích, funkce sociálních sítí, bezpečné chování na sociální síti, klady a zápory využití sociálních sítí, vybrané sociální sítě a informace k nim (2 hod)</li>
            <li className="list-group-item">•	<b>Autorství a kopírování obrázků a informací</b> (0,5 hod)</li>
            <li className="list-group-item">•	<b>E-mail</b> – práce v prostředí MS Outlook a v některých e-mailových schránkách (1 hod)</li>
          </ul>
        </div>
      </LiFile >

    </ul>
  </BlockEx>
</Panel>;

var ZSVyukaCestiny: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label> <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <ul className='fa-ul'>
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezvc1" aria-expanded="false" aria-controls="collapsezvc1">Specifika výuky češtiny jako druhého jazyka </b> (8 hod, akreditováno pro ZŠ, SŠ, asistenti, výchovní poradci)
                <div className="collapse " id="collapsezvc1"><ul className="list-group">
          <li className="list-group-item">•	<b>vymezení teoretických východisek a terminologického rámce ČJDJ</b>, shod, rozdílů a specifik procesu výuky českého jazyka, českého jazyka jako cizího jazyka a ČJDJ, přesah do výuky všeobecně vzdělávacích a ostatních předmětů ve vyučovacím procesu, provázanost s oblastí mimoškolních aktivit a zájmových činností (nejen) pro žáky cizince (1 hodina);</li>
          <li className="list-group-item">•	<b>uplatňování postkomunikačního přístupu ve výuce ČJDJ</b>, využívání vhodných strategií a didaktických postupů, rozvoj základních řečových dovedností a jazykových kompetencí žáka cizince v procesu jeho přijímání, začleňování a vzdělávání, tj. v prvních dnech a týdnech po zahájení školní docházky v běžné české škole (1,5 hodiny); </li>
          <li className="list-group-item">•	<b>diagnostika jazykové úrovně jedince</b>, postupy pro určení jazykové úrovně žáka cizince (1 hodina);</li>
          <li className="list-group-item">•	<b>komunikace se žákem cizincem</b>, tj. role zvukového plánu jazyka, význam osvojení si správné zvukové podoby češtiny a výslovnosti jako nezbytné podmínky úspěšné komunikace; základní instrukce, fráze a kolokace „pro přežití“ a jejich následné rozšiřování a posilování, rozvoj slovní zásoby; zásady komunikace a vedení výuky bez zprostředkovacího jazyka, vhodné didaktické postupy a pomůcky a postupy (1 hodina);</li>
          <li className="list-group-item">•	<b>práce s kurikulem ČJDJ, tj. jak a co učit </b> – témata vhodná pro začátečníky a mírně pokročilé, konkrétní situace, rozvoj základní slovní zásoby v kontextu interakce, osvojování jazykových dovedností a posilování jazykových kompetencí, stanovení základního cíle a efektivní realizace triády téma – cíl – dovednost; příklady vhodných aktivit (1 hodina)</li>
          <li className="list-group-item">•	<b>význam osvojování si vhodných kompetencí a jazykových prostředků</b>, význam procvičování a správné fixace osvojených jazykových dovedností a kompetencí jako např. osvojování čtení a nácvik psaní u žáků, kteří přicházejí bez dovednosti číst latinku a psát latinkou, spolu s fixací správných pracovních návyků pro čtení a psaní, osvojování a procvičování lexika, gramatiky, pravopisu a komunikačních modelů  v ČJDJ (1 hodina);</li>
          <li className="list-group-item">•	<b>role ČJDJ a její význam ve škole i mimo ni a spolupráce s pedagogickými pracovníky školy</b>, tj. spolupráce s učiteli ostatních předmětů u žáků s na začátku nulovou a v průběhu adaptačního období – prvních týdnů školní docházky s počáteční úrovní znalosti jazyka; doporučení vhodných výukových materiálů v klasické i online podobě se zohledněním věku, konkrétní jazykové úrovně ČJDJ u žáka cizince, zohledňování dalších faktorů; možnosti podpory stran státních institucí, krajských úřadů a zřizovatelů, nestátních neziskových organizací; diskuse a sdílení vlastní praxe lektora a účastníků vzdělávacího programu (1,5 hodiny). </li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezvc2" aria-expanded="false" aria-controls="collapsezvc2">Specifika výuky češtiny jako druhého jazyka - webinář </b> (8 hod, akreditováno pro ZŠ, SŠ, asistenti, výchovní poradci)
                           <div className="collapse border rounded " id="collapsezvc2">
          <div className="m-3">
            <b>Blok 1 (1 vyučovací hodina)</b><br />
            •	vymezení teoretických východisek a terminologického rámce ČJDJ, shod, rozdílů a specifik procesu výuky českého jazyka, českého jazyka jako cizího jazyka a ČJDJ, přesah do výuky všeobecně vzdělávacích a ostatních předmětů ve vyučovacím procesu, provázanost s oblastí mimoškolních aktivit a zájmových činností (nejen) pro žáky cizince – (1 hodina)<br />
            <b>Blok 2 (1,5 vyučovací hodiny)</b><br />
            •	uplatňování postkomunikačního přístupu ve výuce ČJDJ, využívání vhodných strategií a didaktických postupů, rozvoj základních řečových dovedností a jazykových kompetencí žáka cizince v procesu jeho přijímání, začleňování a vzdělávání, tj. v prvních dnech a týdnech po zahájení školní docházky v běžné české škole – (1,5 hodiny)<br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            •	diagnostika jazykové úrovně jedince, postupy pro určení jazykové úrovně žáka cizince – (1 hodina)<br />
            •	komunikace se žákem cizincem, tj. role zvukového plánu jazyka, význam osvojení si správné zvukové podoby češtiny a výslovnosti jako nezbytné podmínky úspěšné komunikace; základní instrukce, fráze a kolokace „pro přežití“ a jejich následné rozšiřování a posilování, rozvoj slovní zásoby; zásady komunikace a vedení výuky bez zprostředkovacího jazyka, vhodné didaktické postupy a pomůcky a postupy (1 hodina)<br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            •	práce s kurikulem ČJDJ, tj. jak a co učit – témata vhodná pro začátečníky a mírně pokročilé, konkrétní situace, rozvoj základní slovní zásoby v kontextu interakce, osvojování jazykových dovedností a posilování jazykových kompetencí, stanovení základního cíle a efektivní realizace triády téma – cíl – dovednost; příklady vhodných aktivit –( 1hodina)<br />
            •	význam osvojování si vhodných kompetencí a jazykových prostředků, význam procvičování a správné fixace osvojených jazykových dovedností a kompetencí jako např. osvojování čtení a nácvik psaní u žáků, kteří přicházejí bez dovednosti číst latinku a psát latinkou, spolu s fixací správných pracovních návyků pro čtení a psaní, osvojování a procvičování lexika, gramatiky, pravopisu a komunikačních modelů  v ČJDJ – (1 hodina)<br />
            <b>Blok 5 (1,5 vyučovací hodiny)</b><br />
            •	role ČJDJ a její význam ve škole i mimo ni – spolupráce s pedagogickými pracovníky školy, tj. spolupráce s učiteli ostatních předmětů u žáků s na začátku nulovou a v průběhu adaptačního období – prvních týdnů školní docházky s počáteční úrovní znalosti jazyka; doporučení vhodných výukových materiálů v klasické i online podobě se zohledněním věku, konkrétní jazykové úrovně ČJDJ u žáka cizince, zohledňování dalších faktorů; možnosti podpory stran státních institucí, krajských úřadů a zřizovatelů, nestátních neziskových organizací; diskuse a sdílení vlastní praxe lektora a účastníků vzdělávacího programu – (1,5 hodiny)
</div></div>
      </LiFile >
    </ul>
  </BlockEx>
</Panel>;

var ZSWellBeing: React.StatelessComponent<IKurzProps> = (props: IKurzProps, ctx: sitemapRouter.IContext) => <Panel defaultExpanded={props.defaultExpanded} collapsible bsStyle="success" header={<div className='course-header'>
  <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>{props.title}</span></h3>
</div>} eventKey={2}>
  <BlockEx header="Nabízíme následující kurzy:">
    <h4><span className="badge bg-warning text-reset">Pro zobrazení obsahu kurzu klikněte na jeho název</span></h4>    <ul className='fa-ul'>

      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb1" aria-expanded="false" aria-controls="collapsezwb1">Wellbeing, cesta k harmonizaci vztahů ve škole </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, SŠ, VOŠ, DM, asistenti)
                <div className="collapse " id="collapsezwb1"><ul className="list-group"><li className="list-group-item">•	<b>Co je wellbeing </b> – klíčové aspekty tvoření „zdravé školy“ (0,5 hod)</li>
          <li className="list-group-item">•	<b>Jaká je situace v naší škole? </b> – analýza současného prostředí a klíčové očekávané změny – projektivní technika, týmový workshop - analýza výstupů – návrhy změn (1,5 hod)</li>
          <li className="list-group-item">•	<b>Kognitivní zkreslení </b> – kognitivně behaviorální model člověka v pedagogické praxi – realita vs. její vidění (1 hod)</li>
          <li className="list-group-item">•	<b>Osobnostní diagnostika </b> – Jak zacházím se svými emocemi – sebepoznávací dotazník, vyhodnocení – souvislosti do reality mé role ve škole (1 hod)</li>
          <li className="list-group-item">•	<b>Aspekty vytváření wellbeingu v prostředí školy</b> a role jednotlivých typů pedagogických pracovníků (1 hod)</li>
          <li className="list-group-item">•	<b>7 zdravých vstupů do našeho těla a mysli </b> – osobní analýza a mapování – diskuse (1 hod)</li>
          <li className="list-group-item">•	<b>Náš pedagogický sbor a společné vytváření „Wellbeing prostředí“ </b> – osobní zodpovědnost vs. iluze týmové (ne)zodpovědnosti – od představ k realitě, jak to udělat v naší škole (1, 5 hod)</li >
          <li className="list-group-item">•	<b>Závěr programu </b> – diskuse, sdílení, otázky a odpovědi (0,5 hod)</li>
        </ul ></div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb1111" aria-expanded="false" aria-controls="collapsezwb1111">Třídní učitel a jeho působení na vytváření třídního kolektivu  </b> (8 hod, doporučeno pro ZŠ, SŠ, VOŠ, asistenti)
         <div className="collapse " id="collapsezwb1111">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Téma – třídní učitel v souvislosti</b> s aktuálním znění zákona č. 563/2004 Sb. Zákon o pedagogických pracovnících ve znění účinném od 1. 1. 2024. Vysvětlení pojmů §24d organizační, administrativní činnosti a podpora zdravých, funkčních vztahů mezi žáky aj. (1 hod.)</li>
            <li className="list-group-item">•	<b>Možnosti práce s třídním kolektivem  pro vytváření bezpečného a podnětného prostředí pro vývoj, výchovu a vzdělávání.</b> třídy. (1 hodina)</li>
            <li className="list-group-item">•	<b>Téma - Autenticita pedagoga, sebereflexe pedagoga, sebehodnocení. Kategorie a formy diagnostiky ve školním prostředí</b> - souvislost s úpravou právních předpisů - jak v souvislosti s využitím podpůrného opatření . Pozorování žáků a jeho zaznamenání: analýza získaných poznatků, další nástroje pedagogické diagnostiky, východiska pro nastavení práce s třídním kolektivem, možnosti nastavení podmínek v rámci třídního kolektivu (2 hodiny)</li>
            <li className="list-group-item">•	<b>Téma - Třídní kolektiv, možnosti vedení třídního kolektivu.</b> Základní pravidla pro fungující třídní kolektiv: Cíle práce se třídou, jak najít a nastavit cíl třídnické hodiny /  nastavení struktury třídnické hodiny, co je a není vhodné/, Práce s tvarem třídy /skupiny, dvojice, jednotlivci/, Témata na třídnické hodiny / komunikace, empatie, úcta, respekt…/, Regulace chování ve skupině (2 hodiny)</li>
            <li className="list-group-item">•	<b>Téma – supervize, její význam a cíl.</b> Východiska pro hodnocení : kultura vysokých očekávání, Osvědčené strategie pro vytvoření prostředí podporujícího všechny žáky, Sebezkušenostní část vzdělávacího programu. / zaměření na jednotlivé situace, problémy, kauzistiky/ (2 hodiny)</li>
          </ul >
        </div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb1133" aria-expanded="false" aria-controls="collapsezwb1133">Třídní učitel a wellbeing </b> (8 hod, doporučeno pro ZŠ, SŠ, VOŠ, asistenti)
         <div className="collapse " id="collapsezwb1133">
          <ul className="list-group">
            <li className="list-group-item">•	Praktický vzdělávací program je zaměřen na současně velmi aktuální téma wellbeingu pedagogů a jeho následnou možnou aplikaci při práci se žáky. Zejména v práci třídního učitele by měla být věnována maximální pozornost práci s emocemi a jejich pojmenováváním a vytvoření podnětného prostředí, ve kterém bude žákům přirozené své emoce sdílet. Cílem semináře je zdokonalit kompetence třídních učitelů pedagogů v oblasti wellbeingu.</li>
            <li className="list-group-item">•	Obsah semináře je rozdělen na dvě části. </li>
            <li className="list-group-item">•	První část se věnuje pojmu fyzický wellbeing, který zahrnuje péče o fyzické tělo. Zaměříme se na zdravý životní styl – pohyb, spánek a na psychohygienická preventivní doporučení – jak správně relaxovat, odpočívat včetně nácviku jednoduchých relaxačních technik. </li>
            <li className="list-group-item">•	Druhá část se bude věnovat  emocionálnímu a psychickému wellbeingu. Naučíme se řídit efektivně svůj čas, plánovat své úkoly, či zbavit se stresu z nedostatku času.</li> 
            <li className="list-group-item">•	Závěr programu bude vyhrazen na diskuzi o problematice wellbeingu.</li>
          </ul >
        </div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb101" aria-expanded="false" aria-controls="collapsezwb101">Základy krizové intervence pro pedagogy
      </b>(8 hod, doporučeno pro ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
        <div className="collapse " id="collapsezwb101">
          <ul className="list-group">
            <li className="list-group-item">Krizová intervence - krizová intervence (KI) jako forma pomoci nejen pro žáky a studenty, cíle KI (0,5 hod) </li>
            <li className="list-group-item">Situace podpory ve vaší škole - mapování a analýza současného stavu - týmová aktivita, diskuse (0,5 hod) </li>
            <li className="list-group-item">Stabilizace osoby v krizové situaci, techniky - techniky pro práci s akutní krizí např. úzkostný stav - rozpoznání a nácvik technik pedagogy (1,5 hod) </li>
            <li className="list-group-item">Zásady vedení hovoru v rámci KI - struktura hovoru, smysluplná návaznost 6. fází v hovoru - skupinový nácvik pedagogy, simulace (1,5 hod) </li>
            <li className="list-group-item">Poskytování zpětné vazby a práce s emocemi - seznámení se s vyjadřováním emocí a jejich bezpečnou ventilací (1 hod) </li>
            <li className="list-group-item">Práce se třetí osobou - vyžádaná versus nevyžádaná podpora, možnosti pomoci (0,5 hod) </li>
            <li className="list-group-item">Navazující podpora a mapa pomoci - představení odkazů na další podpůrné služby, zdroje pomoci (1 hod) </li>
            <li className="list-group-item">Hranice a kompetence pedagoga v KI, psychohygiena - odpovědnost, prevence vyhoření - sebepoznávací dotazník a vyhodnocení (1 hod) </li>
            <li className="list-group-item">Závěr - sdílení, diskuse (0,5 hod)</li>
          </ul ></div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb123" aria-expanded="false" aria-controls="collapsezwb123">Sebepoškozování (příčiny – řešení – péče o žáka)
      </b>(8 hod, doporučeno pro ZŠ, ŠD, ZUŠ, SŠ, VOŠ, DM, asistenti)
        <div className="collapse " id="collapsezwb123">
          <p>Kurz Vás seznámí s tím, co vše se může skrývat pod pojmem sebepoškozování dětí. Jaké mohou být rizikové faktory sebepoškozování. Upozorníme Vás na signály, které mohou vést k sebepoškozování. Co musíte a můžete udělat? Jak se k nemocnému chovat, kde hledáme pomoc? Dále Vás seznámíme s pojmem CAN (syndrom týraného, zneužívaného a zanedbávaného dítěte), deprivace u dětí v souvislosti se sebepoškozováním.</p>
          <p>Obsah kurzu v bodech</p>
          <ul className="list-group">
            <li className="list-group-item">•	deprivace, psychika deprimovaných dětí, následky deprivace a prevence, deprivace 2 hod.</li>
            <li className="list-group-item">•	syndrom týraného, zneužívaného a zanedbávaného dítěte (CAN) 1 hodina</li>
            <li className="list-group-item">•	sebepoškozování – popis, rozdělení, prevence, rizikové faktory záměrného sebepoškozování a jejich dopady na školní výkon dítěte a na jeho vztahy s vrstevníky i pedagogy 5 hod.</li>
          </ul >
        </div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb01" aria-expanded="false" aria-controls="collapsezwb01">Rozvoj sociálních dovedností žáků v ŠD/ŠK  </b> (8 hod, doporučeno pro vychovatele ŠD/ŠK a asistenty pedagoga)
        <div className="collapse " id="collapsezwb01">
          <ul className="list-group">
            <li className="list-group-item">•	<b>Skupinová dynamika</b> ( 2 hodiny)<br/>
cíl: - seznámit se s tématem, se zákonitostmi skupinové dynamiky pro práci se skupinou, Reflexe - cíl: - důležitost reflexe a porozumění procesům při diagnostice, Účastník si seznámí s technikami vedení reflexe, pochopí princip správně vedené reflexe.
</li>
            <li className="list-group-item">•	<b>Komunikace</b> (2 hodiny)<br />
  cíl: - diagnostika vztahů ve skupině na základě komunikačně zaměřených aktivit, které lze zařadit jako nástroje komunikačních dovedností a vybrané metody, které lze při pedagogické diagnostice používat - řešení konfliktů, vyjednávání, řeč těla, Účastník si uvědomí, jak důležitým prvkem, je postoj žáka při řešení, zvládání konfliktů, vyjednávání a dosahování konsenzu v rámci jeho zařazení do daného kolektivu
</li>
            <li className="list-group-item">•	<b>Kooperace, skupinová práce</b> (2 hodiny)<br />
  cíl: soutěž, kooperace, postoje k vlastnímu názoru diagnostika skupiny v rámci kooperativního učení, Účastník si uvědomí, zda a jakým způsobem je skupina schopna spolupracovat a komunikovat. 
</li>
            <li className="list-group-item">•	<b>Sebepoznání, sebepojetí</b> (2 hodiny)<br />
  cíl: - diagnostika vztahů ve skupině zacílená na komunikačně zaměřené aktivity: řešení konfliktů, vyjednávání, řeč těla, Účastník si nabídnutými technikami sebereflexe (převážně výtvarnou formou) dojde k hlubšímu poznání, jak důležité je v pedagogické diagnostice formování žákovy osobnosti a zároveň, jak zpětná vazba v rámci vrstevnického hodnocení přispívá k dotváření vlastní osobnosti.
</li>
        </ul ></div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb0165" aria-expanded="false" aria-controls="collapsezwb0165">Sociální a etický rozvoj – nový předmět na ZŠ</b>
        <div className="collapse " id="collapsezwb0165">
          <div className="m-3">
            <b>Obsah:</b><br />
            <p>
              Základním cílem semináře/webináře je připravit učitele na problematiku závazné části připravované revize RVP ZV Člověk, jeho osobnost a svět práce, konkrétně na obor Osobnostní a sociální výchova. Obor bude rozdělen do tří tematických okruhů (osobnostní rozvoj, sociální a etický rozvoj, karierový rozvoj). Seminář/webinář se zaměří na okruh Sociální a etický rozvoj. Cílem programu je ukázat, jak vést žáky k prosociálnímu způsobu chování. Program je sestaven tak, aby naplňoval uzlové body 1. a 2. stupně a všech vzdělávacích výsledků (revize RVP ZV).
            </p>
            <b>Témata:</b>
            <ul className="list-group">
              <li className="list-group-item">•	Mezilidské vztahy a komunikace      (2 hod)</li>
              <li className="list-group-item">•	Asertivní chování                                 (2 hod)</li>
              <li className="list-group-item">•	Důstojnost a identita lidské osoby   (2 hod)</li>
              <li className="list-group-item">•	Tvořivost a základy spolupráce        (2 hod)</li>
            </ul>
          </div >
        </div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb2" aria-expanded="false" aria-controls="collapsezwb2">Wellbeing, cesta k harmonizaci vztahů ve škole – webinář </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ŠK, SVČ, ZUŠ, SŠ, VOŠ, DM, asistenti)
                <div className="collapse border rounded " id="collapsezwb2">
          <div className="m-3">
            <b>Blok 1 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Co je wellbeing – klíčové aspekty tvoření „zdravé školy“ (0,5 hod)<br />
            •	Jaká je situace v naší škole? – analýza současného prostředí a klíčové očekávané změny – projektivní technika, týmový workshop - analýza výstupů – návrhy změn (1,5 hod)<br />
            <b>Blok 2 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Kognitivní zkreslení – kognitivně behaviorální model člověka v pedagogické praxi – realita vs. její vidění (1 hod)<br />
            •	Osobnostní diagnostika – Jak zacházím se svými emocemi – sebepoznávací dotazník, vyhodnocení – souvislosti do reality mé role ve škole (1 hod)<br />
            <b>Blok 3 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Aspekty vytváření wellbeingu v prostředí školy a role jednotlivých typů pedagogických pracovníků (1 hod)<br />
            •	7 zdravých vstupů do našeho těla a mysli – osobní analýza a mapování – diskuse (1 hod)<br />
            <b>Blok 4 (2 vyučovací hodiny – 90 minut)</b><br />
            •	Náš pedagogický sbor a společné vytváření „Wellbeing prostředí“ – osobní zodpovědnost vs. iluze týmové (ne)zodpovědnosti – od představ k realitě, jak to udělat v naší škole (1,5 hod)<br />
            •	Závěr programu – diskuse, sdílení, otázky a odpovědi (0,5 hod)<br />
          </div >
        </div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb3" aria-expanded="false" aria-controls="collapsezwb3">Prevence k zátěžovým situacím ve škole </b> (8 hod, akreditováno pro MŠ, ZŠ, ZUŠ, ŠD, SŠ, VOŠ, DM, asistenti)
                <div className="collapse " id="collapsezwb3"><ul className="list-group"><li className="list-group-item">•	<b>Teoretický úvod do oblasti psychohygieny učitele </b> – zmapování zátěžových situací u pedagogických pracovníků, které vedou k jejich přepracovanosti – teorie + práce skupin (1 hod.)</li>
          <li className="list-group-item">•	<b>Preventivní doporučení </b> - úprava životního stylu, efektivní organizace času, stanovení priorit, schopnost delegování úkolů (komunikace), spánková hygiena, (3 hod.) </li>
          <li className="list-group-item">•	<b>Preventivní doporučení </b> – důležitost aktivního pohybu, relaxace, odpočinku, včetně nácviku jednoduchých relaxačních technik (jednoduché relaxace k uvolnění stresu: a) cviky k uvolnění svalového napětí, b) cviky k uvolnění po práci u počítače, c) cviky uvolňující při napětí v zádech a bolestech hlavy a zad. (3 hod.)</li>
          <li className="list-group-item">•	<b>Regulace dalších zátěžových situací</b> přímo při výkonu práce (1hod) </li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb4" aria-expanded="false" aria-controls="collapsezwb4">Jak zvládat stresové situace a nedospět k vyhoření </b> (8 hod, akreditováno pro MŠ, ZŠ, ZUŠ, ŠD, SŠ, VOŠ, DM, asistenti)
                <div className="collapse " id="collapsezwb4"><ul className="list-group"><li className="list-group-item">•	Jak psychický stres ovlivňuje náš výkon, Bournout podle Maslachové, Stres management jako pojem (2 hodiny)</li>
          <li className="list-group-item">•	Vytváření mapy zvládání každodenního stresu (1 hodina)</li>
          <li className="list-group-item">•	Zjištění vlastního přístupu k práci, k sobě i k druhým (praktické cvičení) – (1 hodina)</li>
          <li className="list-group-item">•	Strategie snížení hladiny stresu: zvědomění hodnotového žebříčku, přerámování, změna v plánování, afirmace , relaxace aj. (praktické cvičení ve skupinách) – (2 hodiny)</li>
          <li className="list-group-item">•	Představení asertivního chování jako dobrého způsobu zvládání každodenních stresů (1 hodina)</li>
          <li className="list-group-item">•	Jak nastavit změny, které podporují nevyhoření, sdílení, závěrečné shrnutí (1 hodina)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb5" aria-expanded="false" aria-controls="collapsezwb5">Aspekty emoční a sociální inteligence pedagoga 8 hodin </b> (8 hod, akreditováno pro ZŠ, ZUŠ, ŠD, ŠK)
                <div className="collapse " id="collapsezwb5"><ul className="list-group"><li className="list-group-item">•	Teoretické ukotvení tématu emoční inteligence. Vysvětlení jednotlivých aspektů emoční inteligence, EI z pohledu klasicky pojímané inteligence a její role v uplatnění rozumových schopností, Objasnění možností rozvíjet emoční inteligenci: práce a rozhodování pod časových stresem, zvládání negativních emocí, získávání větší odolnosti, resilience vůči zátěži (2 hodiny)</li>
          <li className="list-group-item">•	Teoretické ukotvení tématu sociální inteligence a jejich jednotlivých aspektů. Praktické procvičení vybraných sociálních dovedností, trénink organizačních dovedností, možnosti řešení konfliktních situací, jak rozvíjet sociální inteligenci žáků (1 hodina)</li>
          <li className="list-group-item">•	Teoretické ukotvení tématu sebepoznání, obeznámení s různými přístupy k sebepoznání, vysvětlení opodstatnění a role sebepoznání v každodenním životě a praxi, vysvětlení pojmů a podstaty uvědomování si vlastních předpokladů, pohnutek, myšlenek a následně schopnosti jejich verbalizace a manipulace s nimi. ( 1 hodina)</li>
          <li className="list-group-item">•	Probrání jednotlivých technik sebepoznání a možnosti jejich využití, odhalení užívaní stereotypů ve vlastním prožívání, myšlení a možnosti jejich nahrazení funkčními a efektivnějšími způsoby. Sebehodnocení, sebevědomí, asertivní jednání vůči vlastní osobě, zaměření na cíl a monitorování vlastních sil, energie a motivace ke stanoveným cílům, využití poznatků pozitivní psychologie a práce s vlastním nastavením k hodnocení sebe a jiných, práce s kritikou, zhodnocení jejich negativ a pozitiv (1 hodina)</li>
          <li className="list-group-item">•	Sebekoučink, sebemotivace, analýza vlastních strategií k dosahování cílů, nové možnosti k překonávání překážek, včetně zvládání negativních emocí,  technika GROW (1 hodina)</li>
          <li className="list-group-item">•	Efektivní komunikace se sebou, v rámci rodiny a posléze také v kontextu pedagogické praxe, Jak jinak komunikovat, analýza základních komunikačních chyb, alternativní možnosti komunikace se žáky, možnosti, jak vést žáky k odpovědnosti za své prožívání a jednání (1 hodina)</li>
          <li className="list-group-item">•	Nové možnosti komunikace ve třídě. Řešení emočně vypjatých situací, tvorba repertoáru strategií k řešení složitých a neobvyklých sociálních situací (1 hodina)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb6" aria-expanded="false" aria-controls="collapsezwb6">Aspekty emoční a sociální inteligence pedagoga v MŠ </b> (8 hod, akreditováno pro MŠ)
                <div className="collapse " id="collapsezwb6"><ul className="list-group"><li className="list-group-item">•	Teoretické ukotvení tématu emoční inteligence. Vysvětlení jednotlivých aspektů emoční inteligence, EI z pohledu klasicky pojímané inteligence a její role v uplatnění rozumových schopností, Objasnění možností rozvíjet emoční inteligenci: práce a rozhodování pod časových stresem, zvládání negativních emocí, získávání větší odolnosti, resilience vůči zátěži (2 hodiny)</li>
          <li className="list-group-item">•	Teoretické ukotvení tématu sociální inteligence a jejich jednotlivých aspektů. Praktické procvičení vybraných sociálních dovedností, trénink organizačních dovedností, možnosti řešení konfliktních situací, jak rozvíjet sociální inteligenci žáků (1 hodina)</li>
          <li className="list-group-item">•	Teoretické ukotvení tématu sebepoznání, obeznámení s různými přístupy k sebepoznání, vysvětlení opodstatnění a role sebepoznání v každodenním životě a praxi, vysvětlení pojmů a podstaty uvědomování si vlastních předpokladů, pohnutek, myšlenek a následně schopnosti jejich verbalizace a manipulace s nimi. ( 1 hodina)</li>
          <li className="list-group-item">•	Probrání jednotlivých technik sebepoznání a možnosti jejich využití, odhalení užívaní stereotypů ve vlastním prožívání, myšlení a možnosti jejich nahrazení funkčními a efektivnějšími způsoby. Sebehodnocení, sebevědomí, asertivní jednání vůči vlastní osobě, zaměření na cíl a monitorování vlastních sil, energie a motivace ke stanoveným cílům, využití poznatků pozitivní psychologie a práce s vlastním nastavením k hodnocení sebe a jiných, práce s kritikou, zhodnocení jejich negativ a pozitiv (1 hodina)</li>
          <li className="list-group-item">•	Sebekoučink, sebemotivace, analýza vlastních strategií k dosahování cílů, nové možnosti k překonávání překážek, včetně zvládání negativních emocí,  technika GROW (1 hodina)</li>
          <li className="list-group-item">•	Efektivní komunikace se sebou, v rámci rodiny a posléze také v kontextu pedagogické praxe, Jak jinak komunikovat, analýza základních komunikačních chyb, alternativní možnosti komunikace se žáky, možnosti, jak vést žáky k odpovědnosti za své prožívání a jednání (1 hodina)</li>
          <li className="list-group-item">•	Nové možnosti komunikace ve třídě. Řešení emočně vypjatých situací, tvorba repertoáru strategií k řešení složitých a neobvyklých sociálních situací (1 hodina)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb7" aria-expanded="false" aria-controls="collapsezwb7">Rozvoj osobnosti pedagoga v oblasti komunikace </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, asistenti)
        <div className="collapse " id="collapsezwb7"><ul className="list-group"><li className="list-group-item">•	Efektivní komunikace se sebou, v rámci rodiny a posléze také v kontextu pedagogické praxe (3 hodiny)</li>
          <li className="list-group-item">•	Jak jinak komunikovat, analýza základních komunikačních chyb, alternativní možnosti komunikace se žáky, možnosti, jak vést žáky k odpovědnosti za své prožívání a jednání (1 hodina)</li>
          <li className="list-group-item">•	Nové možnosti komunikace ve třídě (1 hodina)</li>
          <li className="list-group-item">•	Řešení emočně vypjatých situací, možnosti řešení, tvorba repertoáru strategií k řešení složitých a neobvyklých sociálních situací. (1 hodina)</li>
          <li className="list-group-item">•	Principy komunikace v souladu s nejnovějšími poznatky psychologie o fungování mozku ( 1 hodina)</li>
          <li className="list-group-item">•	Základy asertivního jednání (1 hodina)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb8" aria-expanded="false" aria-controls="collapsezwb8">Rozvoj osobnosti pedagoga v oblasti sebepoznání </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, asistenti)
                <div className="collapse " id="collapsezwb8"><ul className="list-group"><li className="list-group-item">•	Seznámení s principem OSR  – (0,5 hod)</li>
          <li className="list-group-item">•	Rozvoj schopností poznávání . Aktivity zaměřené na sebepoznání vlastního já (já v pohledu pozitivity, negativity…). Já z pohledu vlastností pozitivních i negativních (pohled empatie ve vyjádření 10ti odpovědí - jak se vnímám já, a jak mě vidí ostatní), mé silné a slabé stránky, vlastní způsob jednání a chování, přetvářka, sebereflexe (2 hodiny)</li>
          <li className="list-group-item">•	Sebepoznání a sebepojetí. Aktivity zaměřené na sebepoznání, moje přednosti, představy, schopnosti  - prostor pro hlubší seznámení nejenom se sebou samým v rámci sebepozorování, ale i s ostatními účastníky, a to při vzájemném sdílení tématu (sestavování žebříčku osobního rozvoje) a dovednosti poskytovat druhým konstruktivním způsobem zpětnou vazbu, naslouchat jim a vcítit se do potřeb druhého/druhých. (2 hodiny)</li>
          <li className="list-group-item">•	Seberegulace a sebeorganizace. Aktivity zaměřené na sebepoznání odvíjející se od představ, schopností  - schopností  – kontrola a regulace vlastního chování v situacích „tady a teď“ (cvičení sebekontroly, sebeovládání, rychlého rozhodování – regulace vlastního jednání i prožívání, vůle), schopnosti vlastní seberealizace – uvědomění si vlastní hierarchie hodnot. (2 hodiny)</li >
          <li className="list-group-item">•	Psychohygiena. Aktivity zaměřené na jednoduché relaxační techniky  – a) cviky k uvolnění svalového napětí, b) cviky k uvolnění po práci u počítače, c) cviky uvolňující při napětí v zádech a bolestech hlavy a zad(1, 5 hodiny).</li >
        </ul ></div >
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb9" aria-expanded="false" aria-controls="collapsezwb9">Rozvoj osobnosti pedagoga ve zvládání konfliktů  </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, asistenti)
                <div className="collapse " id="collapsezwb9"><ul className="list-group"><li className="list-group-item">•	Seznámení s principem OSR (0,5 hodiny)</li>
          <li className="list-group-item">•	Poznávání lidí, mezilidské vztahy. Metody zaměřené na vhodné způsoby komunikace v různých životních situacích, případné řešení neshod či konfliktů s druhými lidmi nenásilným způsobem. Tj. na reakce na základě postojů již získaných; na očekávání, která jsou formována na základě životních zkušeností; na zvládání dovednosti přijímat a poskytovat konstruktivní kritiku, na poznávání typu osobnosti pro úspěšné řešení konfliktu (2 hodiny)</li>
          <li className="list-group-item">•	Řešení problémů a rozhodovací dovednosti. Aktivity zaměřené na mapování vlastních postojů v rámci schématu konfliktu, na způsoby jednání v zátěžových situacích a přístupy ke zvládání konfliktu (kooperace, konfrontace, řešitelský přístup atd.), dovednosti pro řešení problémů a rozhodování z hlediska různých typů konfliktních situací, včetně zvládání krizové komunikace při jednání se žáky i s rodiči/zákonnými zástupci. (5,5 hodiny)</li>
        </ul></div>
      </LiFile >
      <LiFile><b type="button" data-bs-toggle="collapse" data-bs-target="#collapsezwb10" aria-expanded="false" aria-controls="collapsezwb10">Zásady asertivní a efektivní komunikace pro MŠ, ZŠ, ZUŠ </b> (8 hod, akreditováno pro MŠ, ZŠ, ŠD, ZUŠ, asistenti)
               <div className="collapse " id="collapsezwb10"><ul className="list-group"><li className="list-group-item">•	Seznámení se s pravidly a technikami komunikace osobní i profesní: cíl, základní stanovisko, kladení otázek a jejich typologie, aktivní naslouchání, změkčovadla, sdělování názoru (2 hodiny)</li>
          <li className="list-group-item">•	Praktická typologie v komunikaci podle D. Forbese Leye (možné cvičení). Námitky a jak na ně vhodně reagovat. (1 hodina)</li>
          <li className="list-group-item">•	Asertivita jako dovednost prosazovat své názory a požadavky při zachování respektu k okolí, možnosti vedení žákům k asertivnímu nenásilnému chování. Asertivní práva a techniky -možný nácvik. (1 hodina)</li>
          <li className="list-group-item">•	Zvládání emocí, zvládání vlastních emocí v komunikaci při emočně náročných situacích nejen ve školním prostředí. (1 hodina)</li>
          <li className="list-group-item">•	Jak rozpoznat manipulaci, druhy manipulací, techniky na zvládání manipulací  - možný nácvik (1 hodina)</li>
          <li className="list-group-item">•	Vedení rozhovoru  – příprava a struktura (1 hodina)</li>
          <li className="list-group-item">•	Neverbální komunikace  – gesta a výrazy s jejich významem. Základy psycholingvistiky a rizikové výrazy. (1 hodina)</li>
        </ul></div>

      </LiFile >

    </ul>
  </BlockEx>
</Panel>;