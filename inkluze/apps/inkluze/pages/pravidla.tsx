﻿var Pravidla: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <BlockEx header="Sestavte si Projekt ze Šablon" gray>
      <p>
        Pro využití finančních prostředků dotace z Výzvy musí škola připravit <b>Projekt</b>.
        Projekt si škola nemusí sama vymýšlet.
        Výzva se totiž skládá ze <b>Šablon</b> (neboli Aktivit), ze kterých si škola projekt sestaví.
        Příprava Projektu tedy spočívá ve výběru vhodných Šablon se specifikací jejich počtu.
      </p>
      <p>
        Každá Šablona je ve Výzvě podrobně popsána a je u ní stanovena výše dotace na tuto šablonu.
        Škola tedy na základě celkové výše dotace, na kterou má nárok, a na základě svých potřeb, rozhodne, které šablony a v jakém počtu je zahrne do rozpočtu projektu.
      </p>
    </BlockEx>
    <BlockEx header="Kdo je oprávněný žadatel o dotaci?">
      <p>
        Oprávněný zadavatel o dotaci je {popups.zadavatel}&nbsp;nebo {popups.zadavatelss} z celé ČR, tedy i z Prahy (pražským školám byly doposud dotace EU odepřeny).
      </p>
    </BlockEx>
    <BlockEx header="Jaká je výše dotace?" gray>
      Výše školou požadované dotace je určena skladbou a počtem vybraných šablon.
        Tato výše však musí splňovat následující minimální a maximální podmínky:
        <ul>
        <li>
          Minimální výše dotace na vámi připravený projekt je stanovena na 200 000 Kč.
          </li>
        <li>
          Maximální výše dotace na vámi připravený projekt se spočítá podle vzorce: <br />
          <ul>
            <li><b>MŠ a ZŠ</b> - 200 000 Kč + počet dětí/žáků školy x 2 200 Kč.
            Tato maximální částka ale nesmí  přesáhnout 5&nbsp;mil. Kč.<br />
            Více viz {popups.rozpocet}
            </li>
            <li><b>SŠ a VOŠ</b> - 
              200 000 Kč + (počet žáků školy v denním studiu x 2 000 Kč a/nebo počet žáků školy v ostatních formách  studia  x  500  Kč).
            Tato maximální částka ale nesmí  přesáhnout 5 mil.
            Kč.<br />
            Více viz {popups.rozpocetss}
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Pro optimální výběr skladby a počtu šablon použijte {lib.navigateExt('http://www.msmt.cz/uploads/OP_VVV/Vyzva_zjednodusene_projekty_22_a23/Kalkulacka_indikatoru_final.xlsx', 'kalkulačku pro MŠ a ZŠ', true)} nebo {lib.navigateExt('http://www.msmt.cz/uploads/OP_VVV/vyzva_sablony_ss_a_vos_I/Kalkulacka_indikatoru_SS_VOS_verze_2.xlsx', 'kalkulačku pro SŠ a VOŠ', true)}.
      </p>

      <h4>Jak určit „počet žáků školy“?</h4>
      <ol>
        <li>U žádosti o dotaci podané do 31.12.2016, budete vycházet z počtu žáků k 30.9.2015.
          Tento počet musí odpovídat oficiálním údajům na stránce MŠMT - {lib.navigateExt('http://www.msmt.cz/uploads/OP_VVV/Vyzva_zjednodusene_projekty_22_a23/Seznamy_MS_ZS_k_30_09_2015.xlsx', 'ZŠ a MŠ', true)} a {lib.navigateExt('http://www.msmt.cz/uploads/OP_VVV/vyzva_sablony_ss_a_vos_I/Seznamy_SS_k_30_09_2016_VOS_k_31_10_2016_.xlsx', 'SŠ a SOŠ', true)}.</li>
        <li>U žádosti o dotaci podané po 1.1.2017, budete vycházet z  počtu žáků k 30.9.2016, který bude na webových stránkách MŠMT aktualizován v prosinci 2016.</li>
      </ol>
      <Alert type="Poznámka">
        Pokud se vám tedy ve školním roce 2016 / 2017 zvýší počet žáků, a chcete toho využít, požádejte o dotaci až v lednu 2017.
      </Alert>
      <h4>Dotace bude poskytnuta ve dvou zálohových platbách</h4>
      <ol>
        <li>
          zálohová platba ve výši 60% bude poskytnuta do 30 pracovních dnů od vydání rozhodnutí o poskytnutí dotace.
        </li>
        <li>
          zálohová platba ve výši 40% bude poskytnuta po schválení první průběžné zprávy o realizaci projektu
        </li>
      </ol>
    </BlockEx>
    <BlockEx header="Jak zažádat o dotaci" >
      <p>
        Škola si vybere, o které šablony má zájem, a elektronicky vyplní žádost o dotaci pro {popups.zadost_o_dotaci} nebo {popups.zadost_o_dotaci_ss}  {lib.navigateExt('https://mseu.mssf.cz/', 'v systému IS KP14+', true)}, více informací viz {lib.navigateExt('http://www.msmt.cz/strukturalni-fondy-1/zadost-o-podporu', 'žádost o podporu', true)}.
        K vyplnění je nutné mít elektronický podpis anebo nahrát do systému oskenovanou plnou moc.
      </p>
      <p>
        Žádost je potřeba vyplnit nejpozději do 30.6.2017 u MŠ a ZŠ resp. do 30.9.2017 u SŠ a VOŠ.
      </p>

      <h4>Jedna žádost na školu</h4>
      <p>
        Každá škola může podat jenom jednu žádost.
        V případě, že součástí právnické osoby je více škol (mají společné IČO), podává se za ně jen jedna žádost dohromady.
      </p>
      <Alert type="Poznámka">
        Výjimkou je případ, kdy bude vaše žádost o dotaci zamítnuta (z formálních či obsahových důvodů).
        Pak je možné podat novou, opravnou žádost.
      </Alert>
    </BlockEx>
    <BlockEx header="Povinná šablona, související s vyplněním dotazníku MAP" gray>
      <p>
        Kromě doposud uvedených pravidel přípravy projektu je třeba splnit ještě další podmínku.
        Projekt musí povinně obsahovat šablonu, která rozvíjí nejslabší oblast v rámci celorepublikového šetření MAP.
        Bez této šablony bude projekt zamítnut.
        Jak zjistit, která šablona to pro vaši školu je?
        O tom je následující vysvětlení.
      </p>
      <h4>Dotazník MAP</h4>
      <p>
        Na konci roku 2015 byl školám v rámci šetření realizovaného pro potřeby výzvy MAP (Místní akční plány rozvoje vzdělávání) rozeslán dotazník, ve kterém školy vyhodnocovaly svou úroveň v několika oblastech vzdělávání.
        Vyplnění tohoto dotazníku je podmínkou možnosti čerpání dotace ze stávající Výzvy.
      </p>
      <p>
        Školy, které dotazník nevyplnily, mohou požádat o dodatečné vyplnění dotazníku emailem na {lib.navigateExt('mailto:vyzkum-opvvv@msmt.cz', 'vyzkum-opvvv@msmt.cz')}.
        Nově zřízené školy mohou o vyplnění dotazníku zažádat na stejné emailové adrese nejdříve v prosinci roku 2016.
      </p>
      <h4>Povinná šablona</h4>
      <p>
        Na začátku června 2016 zaslalo MŠMT podrobné vyhodnocení výše zmíněného dotazníkového šetření všem školám, které dotazník vyplnily.
        Na základě tohoto vyhodnocení je určena nejslabší oblast vzdělávání (v průměru k ČR).
        V této oblasti by se škola měla rozvíjet, a má povinnost zvolit do projektu alespoň jednu šablonu, rozvíjející tuto oblast.
        Více viz {popups.MAP}
      </p>
      <Alert type="Poznámka">
        Nemůžete-li nalézt podrobné vyhodnocení, které vám MŠMT zaslalo, podívejte se na výsledky na této adrese: {lib.navigateExt('https://sberdat.uiv.cz/login', 'https://sberdat.uiv.cz/login', true)}.
      </Alert>
      <p>
        Na závěr projektu školy vyplní dotazník ještě jednou, aby se dalo zjistit, jaký vliv projekt na školu měl.
      </p>
    </BlockEx>
    <BlockEx header="Dotace na personální podporu" >
      <p>
        Šablony pro personální podporu {popups.zs_ms_personalni_podpora} i {popups.ss_personalni_podpora} jsou vypsány na jednoho pracovníka ve výši 0,5 úvazku na jeden měsíc.
        Výjimkou je šablona Sociální pedagog, která je vypsána na 0,1 úvazku.
        Úvazek nelze dělit mezi více osob.
      </p>
      <p>
        Šablony pro personální podporu lze realizovat po dobu minimálně 12 a maximálně 24 po sobě jdoucích měsíců.
        Výjimkou je šablona Chůva pro MŠ, kde tato podmínka neplatí.
        Specifikace „po sobě jdoucích měsíců“ znamená, že peníze musí být v rámci projektu na danou šablonu a pracovníka vypláceny nepřetržitě, po dobu alespoň 12 měsíců v kuse, tj.
        včetně školních prázdnin.
      </p>
      <p>
        Pokud bude pracovník z nějakého důvodu v průběhu projektu nahrazen jiným, tak úvazek nového pracovníka musí na úvazek předchozího pracovníka bezprostředně navazovat.
      </p>
      <Alert type="Příklad">
        Pokud škola potřebuje jednoho školního asistenta na půl úvazku na 1 školní rok a druhého školního asistenta na půl úvazku na 2 školní roky, tak šablonu Školní asistent objedná celkem 36x.
      </Alert>
    </BlockEx>
    <BlockEx header="Dotace na vzdělávání učitelů" gray>
      <p>
        V rámci dalšího vzdělávání si učitelé mohou vybrat z následujících aktivit: <br /> {popups.ms_rozvoj_pedagogu}<br />{popups.zs_rozvoj_pedagogu}<br />{popups.ss_rozvoj_pedagogu}
      </p>
      <p>
        Všechny kurzy musí být akreditované MŠMT.
        Kurzy zaměřené na inkluzi mohou přednášet pouze akreditovaní lektoři.
      </p>
      <p>
        Každý učitel, který se v rámci projektu účastní nějakého vzdělávacího kurzu, musí v souhrnu absolvovat alespoň 24 hodin vzdělávání, viz bagatelní podpora pro {popups.bagatelni_podpora} nebo {popups.bagatelni_podpora_ss}.
      </p>
      <Alert type="Příklad">
        Pokud se učitel rozhodne účastnit například kurzu „Vzdělávání pedagogického sboru ZŠ zaměřené na inkluzi – vzdělávací akce v rozsahu 8 hodin“, pak se musí účastnit ještě další vzdělávací akce v rozsahu minimálně 16 hodin.
      </Alert>
      <p>
        Nabízíme kurzy zaměřené na inkluzi, čtenářskou gramotnost, matematickou gramotnost a mentoring.
      </p>
      <p>
        Více viz {sitemapRouter.doNavigateTag(inkluze.root.kurzyii)} a {sitemapRouter.doNavigateTag(inkluze.root.kurzyss)}
      </p>
    </BlockEx>
  </Page>
</div >;

Pravidla.contextTypes = sitemapRouter.childContextTypes;

