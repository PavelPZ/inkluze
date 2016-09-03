var Ostatni: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <BlockEx header='Pomoc s online systémem IS KP14+'>
      <p>
        Pokud budete potřebovat, pomůžeme vám s vyplněním žádosti dle následujících pravidel:
      </p>
      <ul className='fa-ul'>
        <LiHand>{popups.zadost_o_dotaci}</LiHand>
        <LiHand>{lib.navigateExt('https://mseu.mssf.cz/', 'online systém IS KP14+', true) }</LiHand>
        <LiHand>{lib.navigateExt('http://www.msmt.cz/strukturalni-fondy-1/zadost-o-podporu', 'žádost o podporu', true) }</LiHand>
      </ul>
      <p>
        K vyplnění je nutné mít elektronický podpis.
      </p>
    </BlockEx>
    <BlockEx gray header='Kompletní projektové řízení'>
      Jsme schopni pomoci s kompletním projektovým řízením (zasílání průběžných zpráv a závěrečné zprávy apod.).
    </BlockEx>
    {/*
    <BlockEx header='Další kurzy a školení, které je možné financovat z Výzvy'>
      ...připravujeme ...
    </BlockEx>*/}
  </Page>
</div>;

Ostatni.contextTypes = sitemapRouter.childContextTypes;

