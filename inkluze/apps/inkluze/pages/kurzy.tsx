var Kurzy: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <Block>
      <div className='alert alert-info'>
        Cílem kurzů je, aby všichni učitelé získali základní orientaci v problematice inkluzivního vzdělávání.
      </div>
      <Accordion>
        <Panel bsStyle="success" header={<div className='course-header'>
          <h2><Label bsStyle="warning">32</Label>  Inkluze - kurzy v celkové délce 32 hodin</h2>
        </div>} eventKey="2">
          <div className='alert alert-danger'>
            <b>U tohoto kurzu je (oproti 24 hodinové verzi) více prostoru na diskusi s učiteli, řešení konkrétních problémů, týkajících se dané školy, a praktické procvičování získaných znalostí.</b>
          </div>
          <h3>Obsah: </h3>
          <Row key={2}>
            TODO dle vzoru z 24 hod kurzu
          </Row>
          <h3>Potřebné šablony: </h3>
          <Row>
            <Col mdOffset={1} md={8}>
              <p>Pro každého učitele je potřeba objednat šablony dle jedné z těchto možností: </p>
              <ul className='fa-ul'>
                <LiHand>
                  <b>Možnost 1: </b><br/>
                  <b>2x</b> šablonu II/2.1 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 16 hodin
                </LiHand>
                <LiHand>
                  <b>Možnost 2: </b><br/>
                  <b>1x</b> šablonu II/2.3 Vzdělávání pedagogických pracovníků ZŠ zaměřené na inkluzi – DVPP v rozsahu 32 hodin
                </LiHand>
              </ul>
            </Col>
          </Row>
        </Panel>
        <Panel bsStyle="success" header={<div className='course-header'>
          <h2><Label bsStyle="warning">24</Label> Inkluze - kurzy v celkové délce 24 hodin</h2>
        </div>} eventKey="1">
          <h3>Obsah: </h3>
          <Row>
            <Col mdOffset={1} md={5}>
              <ul className='fa-ul'>
                <LiFile>Základní právní předpisy legislativní změny</LiFile>
                <LiFile>Žák se speciálními vzdělávacími potřebami </LiFile>
                <LiFile>Struktura podpůrných opatření a jejich členění do pěti stupňů</LiFile>
                <LiFile>Podpůrná opatření prvního stupně </LiFile>
                <LiFile>Podpůrná opatření 2. - 5. stupně </LiFile>
                <LiFile>Struktura a obsah Plánu pedagogické podpory</LiFile>
                <LiFile>Zpracování ukázkového Plánu pedagogické podpory</LiFile>
                <LiFile>Výukové metody a jejich role při motivaci k učení</LiFile>
              </ul>
            </Col>
            <Col mdOffset={1} md={5}>
              <ul className='fa-ul'>
                <LiFile>Individuální vzdělávací plán a pedagogická diagnostika</LiFile>
                <LiFile>Hodnocení žáků ve společném vzdělávání</LiFile>
                <LiFile>Spolupráce pedagoga s asistentem pedagoga</LiFile>
                <LiFile>Komunikace s rodiči </LiFile>
                <LiFile>Spolupráce s poradenskými zařízeními </LiFile>
                <LiFile>Plán pedagogické podpory a Individuální vzdělávací plán</LiFile>
                <LiFile>Efektivní hodnocení žáků a specifičnost hodnocení žáků se SVP</LiFile>
                <LiFile>Pedagogická diagnostika žáka na základní škole</LiFile>
              </ul>
            </Col>
          </Row>
          <h3>Potřebné šablony: </h3>
          <Row>
            <Col mdOffset={1} md={8}>
              Pro každého učitele je potřeba objednat tyto šablony:
              <ul className='fa-ul'>
                <LiHand><b>1x</b> šablonu II/2.8 Vzdělávání pedagogického sboru ZŠ zaměřené na inkluzi – vzdělávací akce v rozsahu 8 hodin </LiHand>
                <LiHand><b>1x</b> šablonu II/2.1 Vzdělávání pedagogických pracovníků ZŠ – DVPP v rozsahu 16 hodin – inkluze </LiHand>
              </ul>
            </Col>
          </Row>
        </Panel>
      </Accordion>
    </Block>
  </Page>
</div >;

Kurzy.contextTypes = sitemapRouter.childContextTypes;

