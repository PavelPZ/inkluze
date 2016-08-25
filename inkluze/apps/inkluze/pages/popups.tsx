const popups = {
  zadavatel: <Popup document='vyzva' page= {5} title='Oprávnění žadatelé'>
    <div>
      <p>
        Mateřské  a  základní  školy  nezřizované  organizačními  složkami  státu (tj.právnická osoba vykonávající činnost školy, zapsaná ve školském
        rejstříku), které  mají  veškolním roce, v němž  žádost  o  podporu podávají, minimálně jedno dítě/žáka.
      </p>
      <p>
        Mateřské a základní školy zřizované Ministerstvem školství, mládeže a tělovýchovy dle školského zákona (tj.právnická osoba vykonávající
        činnost  školy, zapsaná  ve  školském  rejstříku), které  mají ve školním roce, v němž žádost o podporu podávají, minimálně jedno
        dítě/žáka.
      </p>
      <p>
        Každý  žadatel  může  v rámci této výzvy, nebo výzvy  č.02_16_023 podat pouze jednu žádost o podporu.
      </p>
    </div>
  </Popup>,

  rozpocet: <Popup document='priloha3' page={6} title='Jak sestavit rozpočet projektu?'>
    <div>
      <div className="well well-sm">
        <p>
          Řídicí orgán upozorňuje, že jednotlivé šablony je nutné vybírat tak, aby byla dodržena podmínka výzvy pro minimální a maximální výši finanční podpory na jeden projekt:
        </p>
        <p>
          Minimální výše: 200 000 Kč
        </p>
        <p>
          Maximální výše: maximální výše finanční podpory na jeden projekt se stanoví dle tohoto vzorce: 200 000 Kč + (počet dětí/žáků školy x 2 200 Kč) = maximální částka na školu.V případě, že součástí právnické osoby je mateřská a základní škola, se částka 200 000 Kč počítá jedenkrát za mateřskou školu a jedenkrát za základní školu, celkem tedy 400 000 Kč3.Počet dětí/žáků školy k 30. 9. 2015 bude zveřejněn u vyhlášené výzvy na webových stránkách MŠMT.4 Počet dětí/žáků školy pro další školní roky bude vždy aktualizován v prosinci daného školního roku na webových stránkách MŠMT.5 Maximální výši podpory na jeden projekt žadatel vypočítá v „Kalkulačce indikátorů“, která je povinnou přílohou Žádosti o podporu.
        </p>
        <p>
          Maximální výše: maximální výše finanční podpory na jeden projekt se stanoví dle tohoto vzorce: 200 000 Kč + (počet dětí/žáků školy x 2 200 Kč) = maximální částka na školu.V případě, že součástí právnické osoby je mateřská a základní škola, se částka 200 000 Kč počít á jeden krát za mateřskou školu a jeden krát za základní školu, celkem tedy 400 000 Kč.
        </p>
        <p>
          Počet dětí/ žáků školy k 30.9.2015 bude zveřejněn u vyhlášené výzvy na webových stránkách MŠMT.Počet dětí/žáků školy pro další školní roky bude vždy aktualizován v prosinci daného školního roku na webových stránkách MŠMT.
        </p>
        <p>
          Maximální výši podpory na jeden projekt žadatel vypočítá v „Kalkulačce indikátorů“, která je povinnou přílohou Žádosti o podporu.
        </p>
      </div>
      <p>
        <b>Příklad č.1: </b> Škola má ve školním roce, ve kterém podává žádost, 100 dětí/žáků.Škola může čerpat maximálně 200 000 + (100 x 2 200 Kč) = 420 000 Kč.
      </p>
      <p>
        <b>Příklad č.2: </b> Škola má celkem pět odloučených pracovišť.Ve školním roce, ve kterém podává žádost, má celkem 320 dětí/žáků.Škola může čerpat maximálně 200 000 + (320 x 2 200 Kč) = 904 000 Kč.
      </p>
      <p>
        <b>Příklad č.3: </b> Součástí právnické osoby je základní škola se 120 žáky a mateřská škola s 28 dětmi.Škola jako celá právnická osoba může čerpat maximálně 200 000 + 200 000 + (148 x 2 200 Kč) = 725 600 Kč.
      </p>
      <p>
        V tomto případě je třeba, aby ředitel školy volil šablony jak pro mateřskou školu, tak pro základní školu, a to poměrně podle počtu dětí/žáků.Tzn., z celkové maximální částky na projekt budou na základní školu využity prostředky v max.výši 200 000 + (120 x 2 200 Kč) = 464 000 Kč, pro mateřskou školu prostředky v max.výši: 200 000 + (28 x 2 200 Kč) = 261 600 Kč.
      </p>
      <p>
        Ke každé šabloně se automaticky a pevně váže jednotková cena, ze které vychází celková hodnota šablony.Jednotková cena je stanovena na základě průzkumů cen materiálů, mezd/platů, atd., ve vazbě na danou šablonu.Stanovené jednotky a jejich hodnoty jsou závazné pro všechny žadatele a příjemce a nelze je měnit.
      </p>
      <p>
        Rozpočet projektu se naplňuje výběrem šablon až do maximální možné výše podpory stanovené pro danou školu výpočtem dle výše uvedeného vzorce.Minimální částka, kterou škola musí naplnit výběrem jednotlivých šablon, je 200 000 Kč.
      </p>
      <p>
        Jakým způsobem budou příjemci poskytovány finanční prostředky, tzn.systém proplácení plateb, je uvedeno podrobně ve výzvě, kapitola č.3.
      </p>
    </div>
  </Popup>,

  MAP: <Popup document='priloha3' page={3} title='Jak identifikovat oblasti pro rozvoj školy?'>
    <div>
      <p>
        V listopadu roku 2015 byl školám v rámci šetření realizovaného pro potřeby výzvy Místní akční plány rozvoje vzdělávání (MAP) rozeslán dotazník, jehož vyplnění je podmínkou možnosti čerpání finančních prostředků prostřednictvím projektů zjednodušeného vykazování (šablon).Při zpracovávání dotazníků si školy ujasnily, ve kterých oblastech by se měly a chtěly rozvíjet.Školám pomohou v identifikaci jejich potřeb výsledky a vyhodnocení Výstupu z dotazníkového šetření MAP, které budou školám zaslány ze strany MŠMT a zpřístupněny ve webovém rozhraní https://sberdat.uiv.cz/login. Součástí tohoto vyhodnocení je také seznam šablon, ze kterých mohou školy volit, aby alespoň část jejich potřeb rozvoje byla naplněna. Výstup z dotazníkového šetření MAP2 bude povinnou přílohou Žádosti o podporu.
      </p>
      <div className="well well-sm">
        Škola si povinně volí minimálně jednu šablonu z oblasti, která bude vyhodnocena jako nejslabší vzhledem k celorepublikovému průměru.Vzhledem k tomu, že dotazník byl koncipován šířeji pro programové období, je možné, že škola nenalezne odpovídající šablonu (např.oblast digitálních technologií v případě mateřské školy), pak bude volit ze šablon zaměřených na druhou nejslaběji vyhodnocenou oblast, pro kterou jsou k dispozici šablony.Volba minimálně jedné šablony dle uvedeného bude předmětem kontroly přijatelnosti projektu.Pokud škola tuto šablonu nezvolí, bude žádost vyřazena.
      </div>
      <p>
        Příklad: Mateřská škola má nejslabší hodnocení v oblasti digitálních technologií.Pro tuto oblast nejsou v 1. vlně šablon připraveny žádné šablony.Jako druhou nejslabší má vyhodnocenou oblast matematické pregramotnosti.Bude tedy volit alespoň jednu šablonu zaměřenou na podporu matematické pregramotnosti.
      </p>
      <p>
        Po splnění této podmínky může škola volit další šablony podle svého rozhodnutí do výše maximální částky na projekt.Výběr šablon musí být uvážlivý.Každá škola by měla před sestavením projektu nejen vyhodnotit oblasti z Výstupu dotazníkového šetření MAP, ve kterých se chce/potřebuje zlepšovat, ale také např.zhodnotit své časové a administrativní kapacity, případně také nabídku dalšího vzdělávání pedagogických pracovníků (dále jen „DVPP“) nebo dostatečných kapacit pro obsazení pozic personální podpory mateřský škol (MŠ) a základních škol (ZŠ).Pro rozhodování je také klíčové omezení výzvy v podobě minimální a maximální výše rozpočtu.
      </p>
      <p>
        Na závěr projektu školy vyplní dotazník znovu, aby zjistily, k jakému posunu došlo.Tento posun bude součástí doložení indikátoru Počet organizací, ve kterých se zvýšila kvalita výchovy a vzdělávání a proinkluzivnost.Odkaz na dotazník k vyplnění v závěru projektu bude zveřejněn na webových stránkách Ministerstva školství, mládeže a tělovýchovy (dále jen „MŠMT“).Školy vyplní dotazník před koncem projektu v době, kdy budou mít co nejvíce aktivit (šablon) realizovaných.Výstup s vyhodnocením znovu vyplněného dotazníku bude přílohou závěrečné zprávy o realizaci (ZZoR).
      </p>
      <p>
        Pokud škola výstup z dotazníku nedoloží, nebude moci vykázat indikátor výsledku.Při nedoložení indikátoru výsledku budou ze strany poskytovatele dotace uplatněny sankce dle kap.11.3.Pravidel pro žadatele a příjemce zjednodušených projektů.
      </p>
      <div className="well well-sm">
        Školy, které budou nově zařazeny do školského rejstříku, mohou podat projektovou žádost až po vyplnění dotazníku a jeho následném vyhodnocení.Dotazníky budou pro nové školy přístupné od prosince 2016. Školy se musí samy přihlásit na adresu vyzkum-opvvv @msmt.cz.Pokud dojde ke sloučení škol a školy již předtím vyplnily dotazník, bude se vycházet z vyhodnocení již vyplněných dotazníků.
      </div>
    </div>
  </Popup>,

  asistent: <Popup document='priloha3' page={56} title='Školní asistent – personální podpora ZŠ'>
    <div>
      <table>
        <tr>
          <td>Číslo a název aktivity
          </td>
          <td>II/1.1 Školní asistent – personální podpora ZŠ
          </td>
        </tr>
        <tr>
          <td>Investiční priorita
          </td>
          <td>IP 1
          </td>
        </tr>
        <tr>
          <td>Specifický cíl
          </td>
          <td>SC 2 (02.3.68.2)
          </td>
        </tr>
        <tr>
          <td>
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>Cíle a popis realizace aktivity
          </td>
          <td>
            <p>Cílem této aktivity je poskytnout dočasnou personální podporu – školního asistenta základním školám.Aktivita umožňuje vyzkoušet a na určité období poskytnout větší podporu zejména žákům ohroženým školním neúspěchem.Škola musí identifikovat alespoň tři žáky ohrožené školním neúspěchem.Při identifikaci žáků ohrožených školním neúspěchem je možné sledovat následující oblasti: </p>
            <ul>
              <li>nízká motivace ke vzdělávání; </li>
              <li>dlouhodobá a opakovaná prospěchová neúspěšnost; </li>
              <li>nedůslednost ve školní přípravě; </li>
              <li>kázeňské přestupky; </li>
              <li>nedůsledné rodičovské vedení; </li>
              <li>sociokulturně znevýhodněné prostředí.</li>
            </ul>
            <p>Výběr žáků je zcela v kompetenci ředitele školy.Žáky vybírá ředitel školy ve spolupráci s pedagogy na základě prospěchu v uplynulém období (školní rok/pololetí).Minimálně tři žáci ohrožení školním neúspěchem musí být ve škole identifikovány po celou dobu realizace aktivity.Podmínka tří žáků ohrožených školním neúspěchem platí vždy až do výše úvazku 1, 0.</p>
            <p>Školní asistent poskytuje základní nepedagogickou podporu přímo v rodině při spolupráci s rodiči, zprostředkovává komunikaci s komunitou, rodinou a školou spočívající např.v aktivitách vedoucích k zajištění pravidelné školní docházky žáků, porozumění rodinnému prostředí žáků a zajištění přenosu informací mezi školou a rodinou, pomáhá při rozvoji mimoškolních a volnočasových aktivit, poskytuje podporu pedagogovi při administrativní a organizační činnosti pedagoga ve vyučování i mimo vyučování.</p>
            <p>Podmínkou výkonu činnosti školního asistenta je splnění stejných kvalifikačních předpokladů, jako je u pozice asistent pedagoga v zákoně o pedagogických pracovnících.</p>
            <p>Aktivita bude realizována minimálně 12 a maximálně 24 po sobě jdoucích měsíců.</p>
            <p>Úvazek 0, 5 na jeden měsíc nelze dělit mezi více osob.</p>
          </td>
        </tr>
        <tr>
          <td>Cílová skupina
          </td>
          <td>Žáci základních škol
          </td>
        </tr>
        <tr>
          <td>Výstup aktivity
          </td>
          <td>Práce školního asistenta ve škole ve výši úvazku 0, 5 na jeden měsíc
          </td>
        </tr>
        <tr>
          <td>Dokládání výstupů ve zprávě o realizaci projektu
          </td>
          <td>
            <ol>
              <li>sken pracovněprávního dokumentu (smlouva, DPČ); </li>
              <li>sken reportu o činnosti školního asistenta ve škole; </li>
              <li>sken doložení splnění kvalifikačních požadavků školního asistenta (doklad o dosaženém vzdělání nebo doklad o absolvování kvalifikačního kurzu pro asistenta pedagoga); </li>
              <li>čestné prohlášení statutárního orgánu o přítomnosti alespoň tří žáků ohrožených školním neúspěchem.</li>
            </ol>
          </td>
        </tr>
        <tr>
          <td>Dokládání výstupů pro kontrolu na místě
          </td>
          <td>
            <ol>
              <li>
                originál pracovněprávního dokumentu (smlouva, DPČ);
              </li>
              <li>
                originál reportu o činnosti školního asistenta ve škole;
              </li>
              <li>
                identifikace dětí ohrožených školním neúspěchem pro minimálně tři žáky;
              </li>
              <li>
                kontrola prezence pracovníka ve škole dle evidence docházky.
              </li>
            </ol>
          </td>
        </tr>
        <tr>
          <td>Indikátor výstupu
          </td>
          <td>5 05 01 Počet podpůrných personálních opatření ve školách
          </td>
        </tr>
        <tr>
          <td>Celkové náklady na aktivitu v Kč
          </td>
          <td>17 510
          </td>
        </tr>
      </table>
    </div>
  </Popup>

}

const DumpPopups: React.StatelessComponent<{}> = prop => {
  var pops: Array<JSX.Element> = [];
  for (var p in popups) {
    pops.push(popups[p]);
    pops.push(<hr/>);
  }
  return <div>{pops}</div>
}