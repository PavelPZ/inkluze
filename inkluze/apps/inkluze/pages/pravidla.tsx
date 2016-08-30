﻿var Pravidla: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page isSmall={false}>
    <BlockEx title="Princip využití dotace">
      Text s odkazem na {popups.MAP} popup.
      Text s odkazem na jinou stránku: {sitemapRouter.navigateTag(inkluze.root.kurzy) }.
      Text s odkazem {lib.navigateExt('http://www.langmaster.cz', 'jinam') } nebo {lib.navigateExt('http://www.langmaster.cz', 'jinam', true) }.
    </BlockEx>
    <BlockEx title="Princip využití dotace" gray>
      <p>
        Pro využití peněz z dotační Výzvy musí škola připravit Projekt.
        Projekt si škola nemusí sama vymýšlet.
        Ve Výzvě je stanoven soubor tzv.
        Šablon (neboli Aktivit), ze kterých si škola projekt sestaví.
        Příprava Projektu tedy spočívá ve výběru vhodných Šablon se specifikací jejich počtu.
      </p>
      <p>
        Každá Šablona je ve Výzvě podrobně popsána a je u ní stanovena výše dotace.
        Škola tedy na základě celkové výše dotace, na kterou má nárok, a na základě svých potřeb, rozhodne, které šablony a v jakém počtu objedná.
      </p>
    </BlockEx>
    <BlockEx title="Kdo je oprávněný žadatel o dotaci?">
      <p>
        Oprávněným žadatelem o dotaci jsou ZŠ a MŠ z celé ČR {popups.zadavatel}, tedy i z Prahy (pražským školám byly doposud dotace EU odepřeny).
      </p>
    </BlockEx>
    <BlockEx title="Jaká je výše dotace?" gray>
      <p>
        Výše školou požadované dotace je určena skladbou a počtem vybraných šablon.Tato výše však musí splňovat následující minimální a maximální podmínky:
        <ul>
          <li>
            Minimální výše dotace na vámi připravený projekt je stanovena na 200 tis.
            Kč.
          </li>
          <li>
            Maximální výše dotace na vámi připravený projekt se spočítá podle vzorce: <br/>
            200 000 Kč + počet dětí/žáků školy x 2 200 Kč.
            Tato maximální částka ale nesmí  přesáhnout 5 mil.
            Kč.<br/>
            Viz {popups.rozpocet}
          </li>
        </ul>
      </p>
      <p>
        Pro optimální výběr skladby a počtu šablon použijte {lib.navigateExt('http://www.msmt.cz/uploads/OP_VVV/Vyzva_zjednodusene_projekty_22_a23/Kalkulacka_indikatoru_final.xlsx', 'speciální kalkulačku') }.
      </p>

      <h4>Jak určit „počet žáků školy“?</h4>
      <ol>
        <li>U žádosti o dotaci podané do 31.12.2016, budete vycházet z počtu žáků k 30.9.2015. Tento {lib.navigateExt('http://www.msmt.cz/uploads/OP_VVV/Vyzva_zjednodusene_projekty_22_a23/Seznamy_MS_ZS_k_30_09_2015.xlsx', ' počet musí odpovídat oficiálním údajům na stránce MŠMT') }.</li>
        <li>U žádosti o dotaci podané po 1.1.2017, budete vycházet z  počtu žáků k 30.9.2016, který bude na webových stránkách MŠMT aktualizován v prosinci 2016.</li>
      </ol>
      <p>
        Poznámka: Pokud se Vám tedy v novém roce zvýší počet žáků, a chcete toho využít, požádejte o dotaci až v lednu 2017.
      </p>
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
    <BlockEx title="Jak zažádat o dotaci" >
      <p>
        Škola si vybere, o které šablony má zájem, a elektronicky vyplní žádost o dotaci {lib.navigateExt('https://mseu.mssf.cz/', 'v systému IS KP14+') }, více informací viz {lib.navigateExt('http://www.msmt.cz/strukturalni-fondy-1/zadost-o-podporu', 'žádost o podporu') }.
        K vyplnění je nutné mít elektronický podpis.
      </p>
      <p>
        Žádost je potřeba vyplnit nejpozději do 30.6.2017.
      </p>

      <h4>Jedna žádost na školu</h4>
      <p>
        Každá škola může podat jenom jednu žádost.
        Přesněji, pokud má například ZŠ a MŠ společné IČO, může být podána jenom jedna žádost pro jedno IČO.
      </p>
      <p>
        Výjimkou je případ, kdy bude vaše žádost o dotaci zamítnuta (z formálních či obsahových důvodů).
        Pak je možné podat novou, opravnou žádost.
      </p>
      <h4>Pomoc s vyplněním žádosti</h4>
      <p>
        Tuto pomoc nabízíme na této stránce {sitemapRouter.navigateTag(inkluze.root.zadost) }
      </p>
    </BlockEx>
    <BlockEx title="Povinná šablona, související s vyplněním dotazníku MAP" gray>
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
        Školy, které dotazník nevyplnily, mohou požádat o dodatečné vyplnění dotazníku emailem na {lib.navigateExt('mailto:vyzkum-opvvv@msmt.cz', 'vyzkum-opvvv@msmt.cz') }.
        Nově zřízené školy mohou o vyplnění dotazníku zažádat na stejné emailové adrese nejdříve v prosinci roku 2016.
      </p>
      <h4>Povinná šablona</h4>
      <p>
        Na začátku června 2016 zaslalo MŠMT podrobné vyhodnocení výše zmíněného dotazníkového šetření všem školám, které dotazník vyplnily.
        Na základě tohoto vyhodnocení je určena nejslabší oblast vzdělávání (v průměru k ČR).
        V této oblasti by se škola měla rozvíjet, a má povinnost zvolit do projektu alespoň jednu šablonu, rozvíjející tuto oblast.{popups.MAP}
      </p>
      <p>
        Pozn.
        Nemůžete-li nalézt podrobné vyhodnocení co vám MŠMT poslalo tak tyto výsledky jsou také zpřístupněny na této adrese  {lib.navigateExt('https://sberdat.uiv.cz/login', 'https://sberdat.uiv.cz/login') }.
      </p>
      <p>
        Na závěr projektu školy vyplní dotazník ještě jednou, aby se dalo zjistit, jaký vliv projekt na školu měl.
      </p>
    </BlockEx>
    <BlockEx title="Dotace na personální podporu" >
      <p>
        Šablony pro personální podporu jsou vypsány na jednoho pracovníka ve výši 0, 5 úvazku na jeden měsíc.
        Výjimkou je šablona Sociální pedagog, která je vypsána na 0, 1 úvazku.
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
      <p>
        Příklad:
        Pokud škola potřebuje jednoho školního asistenta na půl úvazku na 1 školní rok a druhého školního asistenta na půl úvazku na 2 školní roky, tak šablonu Školní asistent objedná celkem 36x.
      </p>
    </BlockEx>
    <BlockEx title="Dotace na školení učitelů" gray>
      <p>
        Všechny kurzy musí být akreditované MŠMT.
        Kurzy zamřené na inkluzi mohou přednášet pouze akreditovaní lektoři.
      </p>
      <p>
        Každý učitel, který se v rámci projektu účastní nějakého školení, musí v souhrnu absolvovat alespoň 24 hodin školení.
      </p>
      <p>
        Příklad:
        Pokud se učitel rozhodne účastnit například školení „Vzdělávání pedagogického sboru ZŠ zaměřené na inkluzi – vzdělávací akce v rozsahu 8 hodin“, pak se musí účastnit ještě jiného školení v rozsahu minimálně 16 hodin.
      </p>
      <p>
        Pro učitele jsme připravili 24 hodinové DVPP školení zaměřené na inkluzi.
      </p>
      <p>
        Školení zahrnuje:
        akreditovaný 8 hod.
        kurz zaměřený na inkluzi + akreditovaný 16 hod.
        kurz zaměřený na inkluzi
      </p>
      <p>
        Pro každého účastníka tohoto školení je nutné objednat:
        <ul>
          <li>
            1x šablonu II/2.1 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 16 hodin</li>
          <li>
            1x šablonu II/2.8 Vzdělávání pedagogického sboru ZŠ zaměřené na inkluzi – vzdělávací akce v rozsahu 8 hodin</li>
        </ul>
      </p>
      <p>
        Více viz Kurzy na inkluzi {sitemapRouter.navigateTag(inkluze.root.kurzy) }
      </p>
      <p>
        Je potřeba splnit minimální hranici bagatelní podpory, která je stanovena na 24 hodin.
        To znamená, že každý pedagogický pracovník, který se účastní projektu, musí v souhrnu absolvovat alespoň 24 hodin školení.
      </p>
    </BlockEx>
  </Page>
</div >;

Pravidla.contextTypes = sitemapRouter.childContextTypes;

