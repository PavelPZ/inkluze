var Onas: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <BlockEx header='Akreditace vzdělávací instituce'>
      <div className='alert alert-warning' style={{ fontSize: '18px' }}>
        <p style={{ marginTop: '0' }}>
        Rozhodnutím akreditační komise Č.j.
        MSMT- 25237/2016-1-706 je LANGMaster.com, s.r.o. akreditována jako vzdělávací instituce s oprávněním provádění vzdělávacích programů a vydávání osvědčení o jejich absolvování.
        </p>
      </div>
    </BlockEx>
    <BlockEx header='Spolehlivost a tradice'>
      <p>
        Česká společnost LANGMaster.com vznikla v roce 1992.
        Zpočátku jsme se soustředili na vytváření programů pro výuku jazyků (angličtina, němčina, francouzština, španělština, italština a ruština), později jsme přidali mnoho dalších, převážně výukových, aplikací (přírodovědné encyklopedie, práce s počítačem atd.).
        Při vytváření jazykových titulů jsme spolupracovali se světově proslulými vydavateli Collins COBUILD, Heinemann a Hueber.
        Naše kurzy doposud využilo přes 2 miliony zákazníků ve 22 zemích celého světa.
        Online verze našich jazykových kurzů je možné studovat na našem webu {lib.navigateExt('http://www.langmaster.com', 'LANGMaster.com', true) }. 
      </p>
      <p>
        Pro výuku žáků na základních i středních školách jsme vytvořili edici výukových titulů eduROM.
        Tato edice pokrývá významnou část učiva matematiky, fyziky, chemie, biologie, dějepisu a zeměpisu.
        Při vytváření jednotlivých titulů jsme úzce spolupracovali s řadou pedagogů z několika základních i středních škol. 
      </p>
      <p>
        V minulém roce jsme se úspěšně zúčastnili výzvy 57.
        Naše jazykové kurzy pro výuku angličtiny, němčiny a francouzštiny si vybralo přes 230 škol a proškolili jsme zhruba 15.000 žáků a 800 učitelů.
        Řada škol tyto kurzy používá i po skončení projektu a některé ji zařadily jako stálý doplněk běžné výuky jazyků.
      </p>
      <p>
        V současnosti spolupracujeme s nejzkušenějšími českými lektory – implementátory, zabývající se DVPP v oblasti Společného vzdělávání.
        Cílem spolupráce je poskytnout učitelům českých škol kvalitní vzdělání v této oblasti. 
      </p>
    </BlockEx>
    <BlockEx header='Obraťte se na nás'>
      <p>
        emailem: {lib.navigateExt('mailto:projekt@langmaster.cz', 'projekt@langmaster.cz') }<br/>
        telefonicky: 244 460 807
      </p>
    </BlockEx>
    <BlockEx header='Provozovatel'>
      <p>
        LANGMaster.com, s.r.o.
        <br/>
        Branická 659/107
        <br/>
        147 00 Praha 4
        <br/>
        DIČ: CZ 27338606
        <br/>
        IČ: 27338606
        <br/>
        zapsaná v obchodním rejstříku vedeném
        <br/>
        Městským soudem v Praze oddíl C, vložka 173235
        <br/>
        Bankovní spojení: Komerční banka
        <br/>
        Číslo účtu: 43 -575730207/0100 
      </p>
    </BlockEx>
  </Page>
</div>;

Onas.contextTypes = sitemapRouter.childContextTypes;

