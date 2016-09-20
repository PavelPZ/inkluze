var Lektori: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <BlockEx>
      <p>
        Všichni naši lektoři jsou akreditovaní a lektoři přednášející o inkluzi mají osvědčení lektora implementátora (lektora pro společné vzdělávání) od MŠMT.
        Se vzděláváním učitelů a s tématy, které přednášejí (inkluze, čtenářská gramotnost, matematická gramotnost, mentoring), mají lektoři dlouholeté zkušenosti.
      </p>
      <p>
        Lektoři jsou schopni: </p>
      <ul className='fa-ul'>
        <LiHand>obohatit přednášená témata o spoustu příkladů z praxe</LiHand>
        <LiHand>diskutovat s učiteli o konkrétních problémech, které je zajímají</LiHand>
        <LiHand>pomoci učitelům nalézt řešení pro konkrétní situace z praxe</LiHand>
        <LiHand>zodpovědět i nestandardní a detailní dotazy</LiHand>
      </ul>
      <p>
        Pokud objednáte kurzy pro větší počet učitelů, naši lektoři za vámi přijedou, a školení bude moci proběhnout ve sborovně vaší školy.
        V případě, že učitelé z vaší školy naplní celý kurz, může se lektor flexibilně více zaměřit na témata, která jsou nejaktuálnější přímo pro vaši školu.
      </p>
    </BlockEx>
  </Page>
</div>;

Lektori.contextTypes = sitemapRouter.childContextTypes;

