var Home: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page isSmall={false}>
    <div>
      <Block blue style={{ paddingBottom: '10px' }}>
        <h1 className='text-center'>{ctx.site.title}</h1>
        <h3 className='text-center'>Kurzy na inkluzi od zkušených lektorů</h3>
        <div className="text-center">Napiště nám na <a href="mailto:info@langmaster.cz" style={{ textDecoration: 'underline' }}>info @langmaster.cz</a> nebo zavolejte +420 244 460 807</div>
        <Grid style={{ marginTop: '15px' }}>
          <Row>
            <Col md={1}>
              <i className="fa fa-exclamation text-info" style={{ fontSize: '100px' }}></i>
            </Col>
            <h4>Příklad obsahu kurzu: </h4>
            <Col md={4}>
              <div>
                <ul className='fa-ul'>
                  <HomeLi>Základní právní předpisy legislativní změny</HomeLi>
                  <HomeLi>Žák se speciálními vzdělávacími potřebami </HomeLi>
                  <HomeLi>Struktura podpůrných opatření a jejich členění do pěti stupňů</HomeLi>
                  <HomeLi>Podpůrná opatření prvního stupně </HomeLi>
                  <HomeLi>Podpůrná opatření 2. - 5. stupně </HomeLi>
                  <HomeLi>Struktura a obsah Plánu pedagogické podpory</HomeLi>
                  <HomeLi>Zpracování ukázkového Plánu pedagogické podpory</HomeLi>
                </ul>
              </div>
            </Col>
            <Col md={1} style={{ paddingTop: '20px' }}>
              <i className="fa fa-ellipsis-v text-info" style={{ fontSize: '60px' }}></i>
            </Col>
            <Col md={5}>
              <ul className='fa-ul'>
                <HomeLi>Výukové metody a jejich role při motivaci k učení</HomeLi>
                <HomeLi>Individuální vzdělávací plán a pedagogická diagnostika</HomeLi>
                <HomeLi>Hodnocení žáků ve společném vzdělávání</HomeLi>
                <HomeLi>Spolupráce pedagoga s asistentem pedagoga</HomeLi>
                <HomeLi>Komunikace s rodiči </HomeLi>
                <HomeLi>Spolupráce s poradenskými zařízeními </HomeLi>
                <HomeLi>Plán pedagogické podpory a Individuální vzdělávací plán</HomeLi>
                <HomeLi>Efektivní hodnocení žáků a specifičnost hodnocení žáků se SVP</HomeLi>
                <HomeLi>Pedagogická diagnostika žáka na základní škole</HomeLi>
              </ul>
            </Col>
            <Col md={1}>
              <i className="fa fa-exclamation text-info" style={{ fontSize: '100px' }}></i>
            </Col>
          </Row>
        </Grid>
      </Block>
    </div>
    <Block>
      <p>
        xxxx
      </p>
    </Block>
    <Block gray>
      <p>
        yyyy
      </p>
    </Block>
  </Page>
</div>;

Home.contextTypes = sitemapRouter.childContextTypes;

var HomeLi: React.StatelessComponent<lib.IComponentProps> = (props: lib.IComponentProps, ctx: sitemapRouter.IContext) => <li><i className='fa-li fa fa-bell-o'></i>{props.children}</li>;