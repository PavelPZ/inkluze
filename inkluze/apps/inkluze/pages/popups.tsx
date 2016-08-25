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
        <b>Příklad č.1:</b> Škola má ve školním roce, ve kterém podává žádost, 100 dětí/žáků.Škola může čerpat maximálně 200 000 + (100 x 2 200 Kč) = 420 000 Kč.
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
}

const DumpPopups: React.StatelessComponent<{}> = prop => {
  var pops: Array<JSX.Element> = [];
  for (var p in popups) {
    pops.push(popups[p]);
    pops.push(<hr/>);
  }
  return <div>{pops}</div>
}