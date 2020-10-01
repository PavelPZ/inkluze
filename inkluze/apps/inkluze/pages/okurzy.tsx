var Okurzy: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <BlockEx>
      <p>
        Nově nabízíme kurzy v online podobě. Pro školení využívám Zoom nebo Teams
      </p>
      <p>
        Termíny nejbližších školení: </p>
      <ul className='fa-ul'>
        <LiHand>9.10 - Inkluze</LiHand>
        <LiHand>16.10 - ICT</LiHand>
      </ul>
      <p>
        V případě zájmu nás prosím kontaktujte
      </p>
    </BlockEx>
  </Page>
</div>;

Okurzy.contextTypes = sitemapRouter.childContextTypes;

