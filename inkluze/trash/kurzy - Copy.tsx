enum kurzEnum { no, k24, k32 }
interface IKurzyPars { kurz: kurzEnum }
class Kurzyx extends React.Component<IKurzyPars, any> {
  k24: HTMLElement;
  k32: HTMLElement;
  componentDidMount() { this.doScroll(); }
  componentDidUpdate() { this.doScroll(); }
  doScroll() {
    var kurz = this.kurz(); if (kurz == kurzEnum.no) return;
    var act = kurz == kurzEnum.k24 ? this.k24 : this.k32;
    setTimeout(() => act.scrollIntoView(), 100);
  }
  kurz(): kurzEnum { var props = this.props; return props && props.kurz ? parseInt(props.kurz.toString()) : kurzEnum.no; }
  render(): JSX.Element {
    return <div>
      <Page>
        <Block>
          <div className='alert alert-info'>
            Cílem kurzů je, aby všichni učitelé získali základní orientaci v problematice inkluzivního vzdělávání.
          </div>
          <div className='alert alert-warning'>
            <p>TODO: formular na zaslání poptávky</p>
          </div>

          <PanelGroup activeKey={this.kurz() } accordion>
            <Panel bsStyle="success" header={<div className='course-header' ref = {ref => this.k32 = ref} >
              <h2><Label bsStyle="warning">32</Label>  <span style={{ textDecoration: 'underline' }}>Inkluze - kurzy v celkové délce 32 hodin</span></h2>
            </div>} eventKey={kurzEnum.k32}>
              <div className='alert alert-danger'>
                <b>U tohoto kurzu je (oproti 24 hodinové verzi) více prostoru na diskusi s učiteli, řešení konkrétních problémů, týkajících se dané školy, a praktické procvičování získaných znalostí.</b>
              </div>
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
                  <p>Pro každého učitele je potřeba objednat tyto šablony: </p>
                  <ul className='fa-ul'>
                    <LiHand>
                      <b>Možnost 1: </b><br/>
                      <b>2x</b> šablonu {popups.zs_DVPP_16_hodin} – inkluze
                    </LiHand>
                    <LiHand>
                      <b>Možnost 2: </b><br/>
                      <b>1x</b> šablonu {popups.zs_DVPP_inkluze_32_hodin}
                    </LiHand>
                  </ul>
                </Col>
              </Row>
            </Panel>
            <Panel bsStyle="success" header={<div className='course-header' ref = {ref => this.k24 = ref} >
              <h2><Label bsStyle="warning">24</Label>  <span style={{ textDecoration: 'underline' }}>Inkluze - kurzy v celkové délce 24 hodin</span></h2>
            </div>} eventKey={kurzEnum.k24}>
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
                    <LiHand><b>1x</b> šablonu {popups.zs_sbor_8_hodin} </LiHand>
                    <LiHand><b>1x</b> šablonu {popups.zs_DVPP_16_hodin} – inkluze </LiHand>
                  </ul>
                </Col>
              </Row>
            </Panel>
          </PanelGroup>
        </Block>
      </Page>
    </div >;
  }
}

//Kurzy.contextTypes = sitemapRouter.childContextTypes;


