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

  zs_skolni_asistent: <Popup document='priloha3' page={56} title='Školní asistent – personální podpora ZŠ'>
    <div>
      <p>Školní asistent poskytuje základní nepedagogickou podporu přímo v rodině při spolupráci s rodiči, zprostředkovává komunikaci s komunitou, rodinou a školou spočívající např.v aktivitách vedoucích k zajištění pravidelné školní docházky žáků, porozumění rodinnému prostředí žáků a zajištění přenosu informací mezi školou a rodinou, pomáhá při rozvoji mimoškolních a volnočasových aktivit, poskytuje podporu pedagogovi při administrativní a organizační činnosti pedagoga ve vyučování i mimo vyučování.</p>
    </div>
  </Popup>,

  ms_skolni_asistent: <Popup document='priloha3' page={56} title='Školní asistent – personální podpora ZŠ'>
    <div>
      <p>Školní asistent poskytuje základní nepedagogickou podporu přímo v rodině při spolupráci s rodiči, zprostředkovává komunikaci s komunitou, rodinou a školou spočívající např.v aktivitách vedoucích k zajištění pravidelné školní docházky žáků, porozumění rodinnému prostředí žáků a zajištění přenosu informací mezi školou a rodinou, pomáhá při rozvoji mimoškolních a volnočasových aktivit, poskytuje podporu pedagogovi při administrativní a organizační činnosti pedagoga ve vyučování i mimo vyučování.</p>
    </div>
  </Popup>,

  zs_specialni_pedagog: <Popup document= 'priloha3' page= {61} title= 'Školní speciální pedagog – personální podpora ZŠ' >
    <div>
      <p>Speciální pedagog diagnostikuje speciální vzdělávací potřeby žáků a pomáhá vytvářet a zlepšit podmínky pro úspěšnou integraci žáků se speciálními vzdělávacími potřebami.Součástí práce je spolupráce na tvorbě plánu pedagogické podpory nebo individuálního vzdělávacího plánu pro každého žáka s potřebou podpůrných opatření/se speciálními vzdělávacími potřebami.</p>
    </div>
  </Popup >,

  ms_specialni_pedagog: <Popup document= 'priloha3' page= {61} title= 'Školní speciální pedagog – personální podpora ZŠ' >
    <div>
      <p>Speciální pedagog diagnostikuje speciální vzdělávací potřeby žáků a pomáhá vytvářet a zlepšit podmínky pro úspěšnou integraci žáků se speciálními vzdělávacími potřebami.Součástí práce je spolupráce na tvorbě plánu pedagogické podpory nebo individuálního vzdělávacího plánu pro každého žáka s potřebou podpůrných opatření/se speciálními vzdělávacími potřebami.</p>
    </div>
  </Popup >,

  zs_psycholog: <Popup document='priloha3' page= {63} title='Školní psycholog – personální podpora ZŠ'>
    <div>
      <p>
        Školní psycholog zkoumá klima ve třídách, chování žáků, vytváří diagnostiku a poskytuje konzultace pro žáky, pedagogy a rodiče ve škole nebo mimo školu.Školní psycholog spolupracuje také se zdravotnickými a jinými organizacemi mimo školní zařízení.
      </p>
    </div>
  </Popup>,

  ms_psycholog: <Popup document='priloha3' page= {63} title='Školní psycholog – personální podpora ZŠ'>
    <div>
      <p>
        Školní psycholog zkoumá klima ve třídách, chování žáků, vytváří diagnostiku a poskytuje konzultace pro žáky, pedagogy a rodiče ve škole nebo mimo školu.Školní psycholog spolupracuje také se zdravotnickými a jinými organizacemi mimo školní zařízení.
      </p>
    </div>
  </Popup>,

  zs_socialni_pedagog: <Popup document='priloha3' page= {67} title='Sociální pedagog – personální podpora ZŠ'>
    <div>
      <p>
        Sociální pedagog není pedagogický pracovník, jeho náplní práce je vytvářet propojení mezi školou a jinými subjekty, např.obcí, policií, státním zástupcem a zdravotnickým zařízení.Součástí práce je poskytování mediace mezi školou, rodiči a uvedenými institucemi a pomoc s právními a sociálními otázkami.
      </p>
      <p>
        Sociální pedagog bude působit jako prostředník mezi základní školou a rodinou.Účinně pomůže žákům, jejichž rodiny nemají dostatečnou kapacitu pomoci s přípravou do školy a s motivací ke studiu.Poskytne pedagogům informace týkající se zázemí žáků a problémů, což následně pedagogům pomůže zvolit vhodný přístup k žákovi.
      </p>
    </div>
  </Popup>,

  ms_socialni_pedagog: <Popup document='priloha3' page= {67} title='Sociální pedagog – personální podpora ZŠ'>
    <div>
      <p>
        Sociální pedagog není pedagogický pracovník, jeho náplní práce je vytvářet propojení mezi školou a jinými subjekty, např.obcí, policií, státním zástupcem a zdravotnickým zařízení.Součástí práce je poskytování mediace mezi školou, rodiči a uvedenými institucemi a pomoc s právními a sociálními otázkami.
      </p>
      <p>
        Sociální pedagog bude působit jako prostředník mezi základní školou a rodinou.Účinně pomůže žákům, jejichž rodiny nemají dostatečnou kapacitu pomoci s přípravou do školy a s motivací ke studiu.Poskytne pedagogům informace týkající se zázemí žáků a problémů, což následně pedagogům pomůže zvolit vhodný přístup k žákovi.
      </p>
    </div>
  </Popup>,

  xxx4: <Popup document='vyzva' page= {5} title='Oprávnění žadatelé'>
    <div>
      yyy
    </div>
  </Popup>,

  xxx5: <Popup document='vyzva' page= {5} title='Oprávnění žadatelé'>
    <div>
      yyy
    </div>
  </Popup>,

  xxx6: <Popup document='vyzva' page= {5} title='Oprávnění žadatelé'>
    <div>
      yyy
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