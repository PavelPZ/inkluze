var Okurzy: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <BlockEx header="Termíny akreditovaných kurzů pro Šablony I OP JAK budeme vypisovat v září 2022">
      <p>
        Kurzy pro jednotlivce budou probíhat formou videokoference v prostředí ZOOM.
      </p>

      <p>
        Pokud se chcete na některý z kurzů přihlásit nebo máte ke kurzu nějaký upřesňující dotaz, kontaktujte nás prosím na emailu projekt@langmaster.cz nebo na telefonech 244 460 807, 728 234 285
      </p>
      <p>
        Podle předběžného zájmu pedagogů budeme průběžně vypisovat další kurzy a termíny. Kontaktujte nás, pokud sháníte nějaký kurz, který v seznamu nevidíte.
      </p>
    </BlockEx>
    <BlockEx>
      <ul className='fa-ul'>
        <LiHand><h4><b>27.9. 2022 <a href="/index.html?home|kurzyss|ssmedgramotnost">Funkce a nástrahy internetu, kyberšikana a sociální sítě</a></b></h4>
          <h4><Label bsStyle="warning">Oblast: Mediální gramotnostCT, prevence kyberšikany, chování na sociálních sítích</Label></h4>
          <p>Akreditace: MSMT- 13854/2021-2-500</p>
          <p>Cena: 1590 Kč/os, Lektor: Mgr. Bc. Jan Šindelář</p>
          <p>Pro přihlášení <a href="mailto:projekt@langmaster.cz?subject=9.3.%202022%20GeoGebra%20-%20n%C3%A1stroj%20rozvoje%20matematick%C3%A9%20gramotnosti%20na%20S%C5%A0%20(8%20hodin)&body=Va%C5%A1e%20emailov%C3%A1%20adresa%3A%20%0AN%C3%A1zev%20%C5%A1koly%3A%20%0APo%C4%8Det%20p%C5%99ihl%C3%A1%C5%A1en%C3%BDch%20pedagog%C5%AF%3A%20%0APozn%C3%A1mka%3A%20%0A%20%20%0APokud%20do%20jednoho%20pracovn%C3%ADho%20dne%20nedostanete%20potvrzen%C3%AD%20o%20p%C5%99ihl%C3%A1%C5%A1en%C3%AD%20na%20kurz%2C%20volejte%20pros%C3%ADm%20na%20%C4%8D%C3%ADslo%20244%20460%20807.">klikněte</a> nebo napište email na projekt@langmaster.cz</p>
          <p>v rámci Šablon OP JAK se mohou účastnit všechny cílové skupiny</p>
        </LiHand>
      </ul>
    </BlockEx>

  </Page>
</div>;

Okurzy.contextTypes = sitemapRouter.childContextTypes;

