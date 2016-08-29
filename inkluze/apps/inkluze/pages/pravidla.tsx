var Pravidla: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
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
      XXXX
    </BlockEx>
    <BlockEx title="XXXX" >
      XXXX
    </BlockEx>
  </Page>
</div >;

Pravidla.contextTypes = sitemapRouter.childContextTypes;

