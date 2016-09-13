var Kurzy: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <Block>
      <div className='alert alert-warning' style={{ fontSize: '18px' }}>
        <h3 style={{ marginTop: '0' }}>Úvod</h3>
        <p >
          Pro zvládnutí problematiky inkluze nabízíme dva kurzy (24 hodinový a 32 hodinový), po jejichž absolvování všichni učitelé získají základní orientaci v problematice inkluzivního vzdělávání.
          Obsahy těchto kurzů jsou obdobné, u 32 hodinového kurzu zbude ale mnohem více prostoru na diskusi s učiteli, řešení konkrétních problémů, týkajících se dané školy, a praktické procvičování získaných znalostí.
        </p>
        <p>
          Pro školy, které chtějí naše kurzy zkombinovat s jinými šablonami, nabízíme i 16 hodinový kurz a 8 hodinový kurz pro sborovnu.
        </p>
        <p >
          Pro více informací klikněte na název kurzu dole na stránce.
        </p>
        <p >
          Pro získání podrobnějších informací o kurzech vyplňte a odešlete poptávkový formulář.
        </p>
      </div>

      <KurzyForm/>

    </Block>
    <Block gray>
      <div className='alert alert-success'>
        <h3>Obsah kurzů: </h3>
        <Row>
          <Col mdOffset={1} md={5}>
            <ul className='fa-ul'>
              <LiFile>Základní právní předpisy, legislativní změny</LiFile>
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
      </div>

      <Accordion>
        <Panel bsStyle="success" header={<div className='course-header'>
          <h2><Label bsStyle="warning">32</Label>  <span style={{ textDecoration: 'underline' }}>Inkluze - kurzy v celkové délce 32 hodin</span></h2>
        </div>} eventKey={1}>
          <BlockEx>
            <div className='alert alert-danger' style={{ fontWeight: 'bold' }}>
              Tento kurz poskytuje optimální variantu pro seznámení celého učitelského sboru s problematikou inkluze.
              U tohoto kurzu je (oproti 24 hodinové verzi) více prostoru na:
              <ul className='fa-ul'>
                <LiHand>diskusi s učiteli</LiHand>
                <LiHand>možnost řešení konkrétních problémů, týkajících se dané školy</LiHand>
                <LiHand>praktické procvičování získaných znalostí</LiHand>
                <LiHand>...a další</LiHand>
              </ul>
            </div>
          </BlockEx>
          <BlockEx header={<h3>Potřebné šablony: </h3>}>
            <div>
              <p>Pro každého učitele je potřeba objednat šablony dle jedné z následujících možností: </p>
              <ul className='fa-ul'>
                <LiHand>
                  <b>Možnost 1: </b><br/>
                  <b>2x</b> šablonu {popups.zs_DVPP_16_hodin} – inkluze
                </LiHand>
                <LiHand>
                  <b>Možnost 2: </b><br/>
                  <b>1x</b> šablonu {popups.zs_DVPP_inkluze_32_hodin} – inkluze
                </LiHand>
              </ul>
            </div>
          </BlockEx>
        </Panel>

        <Panel bsStyle="success" header={<div className='course-header'>
          <h2><Label bsStyle="warning">24</Label>  <span style={{ textDecoration: 'underline' }}>Inkluze - kurzy v celkové délce 24 hodin</span></h2>
        </div>} eventKey={2}>
          <BlockEx>
            <div className='alert alert-danger' style={{ fontWeight: 'bold' }}>
              Tento kurz použijte v případě, že jeden den školení navíc (který je vyžadován u 32 hodinového kurzu) je pro vaši školu kritický.
              24 hodinová délka kurzu je minimální délka, povolená v podmínkách výzvy, viz {popups.bagatelni_podpora}.
            </div>
          </BlockEx>
          <BlockEx header={<h3>Potřebné šablony: </h3>}>
            <div>
              Pro každého učitele je potřeba objednat tyto šablony:
              <ul className='fa-ul'>
                <LiHand><b>1x</b> šablonu {popups.zs_sbor_8_hodin} </LiHand>
                <LiHand><b>1x</b> šablonu {popups.zs_DVPP_16_hodin} – inkluze </LiHand>
              </ul>
            </div>
          </BlockEx>
        </Panel>
      </Accordion>
    </Block>
    <Block>
      <Accordion>
        <Panel bsStyle="success" header={<div className='course-header'>
          <h2><Label bsStyle="warning">8</Label>  <span style={{ textDecoration: 'underline' }}>Inkluze - 8 hodinový kurz pro sborovnu</span></h2>
        </div>} eventKey={1}>

          <BlockEx header={<h3>Potřebné šablony: </h3>}>
            <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_sbor_8_hodin}</p>
          </BlockEx>
        </Panel>

        <Panel bsStyle="success" header={<div className='course-header'>
          <h2><Label bsStyle="warning">16</Label>  <span style={{ textDecoration: 'underline' }}>Inkluze - 16 hodinový kurz</span></h2>
        </div>} eventKey={2}>
          <BlockEx header={<h3>Potřebné šablony: </h3>}>
            <div>
              <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_16_hodin}</p>
            </div>
          </BlockEx>
        </Panel>
      </Accordion>    </Block>
  </Page>
</div >;


Kurzy.contextTypes = sitemapRouter.childContextTypes;

interface IKuryFormFormStatus {
  email: string;
  phone: string;
  teachers: string;
  ICO: string; //e.g. 49625918
  RED_IZO: string; //e.g. 600000206
  is32: boolean;
}

class KurzyForm extends React.Component<{}, IKuryFormFormStatus> {
  constructor(p, c) {
    super(p, c);
    this.state = { email: '', phone: '', teachers: '', ICO: '', RED_IZO: '', is32: undefined };
  }
  getValidationState(): any {
    return (this.state.email || this.state.phone) && !Number.isNaN(parseInt(this.state.teachers)) && this.state.is32 !== undefined && (!Number.isNaN(parseInt(this.state.ICO)) || !Number.isNaN(parseInt(this.state.RED_IZO))) ? 'success' : 'error';
  }
  render(): JSX.Element {
    var th = this;
    return <div>
      <Panel style={{ marginTop: '15px' }} bsStyle='warning'header={<div><h3 style={{ marginTop: '0' }}>Poptávka</h3>
        Mám zájem o bližší informace a o upřesnění nabídky</div>}>
        <Row>
          <Col md={6}>
            <FormGroup controlId="email" validationState={this.getValidationState() } >
              <ControlLabel>Vyplňte buďto váš email...</ControlLabel>
              <FormControl value={this.state.email} placeholder="Napište váš email" onChange={(e: any) => { this.state.email = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr/>
            <FormGroup controlId="teachers" validationState={this.getValidationState() } >
              <ControlLabel>Vyplňte buďto vaše IČO...</ControlLabel>
              <FormControl value={this.state.ICO} placeholder="Napište IČO" onChange={(e: any) => { this.state.ICO = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr/>
            <FormGroup controlId="teachers" validationState={this.getValidationState() } >
              <ControlLabel>Počet učitelů v kurzu: </ControlLabel>
              <FormControl value={this.state.teachers} placeholder="Napište počet učitelů" onChange={(e: any) => { this.state.teachers = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup controlId="tel" validationState={this.getValidationState() } >
              <ControlLabel>...nebo vaše telefonní číslo</ControlLabel>
              <FormControl value={this.state.phone} placeholder="Napište vaše telefonní číslo" onChange={(e: any) => { this.state.phone = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr/>
            <FormGroup controlId="teachers" validationState={this.getValidationState() } >
              <ControlLabel>...nebo vaše RED-IZO</ControlLabel>
              <FormControl value={this.state.RED_IZO} placeholder="Napište RED-IZO" onChange={(e: any) => { this.state.RED_IZO = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr/>
            <FormGroup controlId="kurz" validationState={this.getValidationState() }>
              <ControlLabel>Typ kurzu: </ControlLabel><br/>
              <Radio inline name="kurz" value="32" checked={this.state.is32 === true} onChange={() => { this.state.is32 = true; this.forceUpdate(); } }>
                Kurz 32 hodin
              </Radio>
              <Radio inline name="kurz" value="24" checked={this.state.is32 === false} onChange={() => { this.state.is32 = false; this.forceUpdate(); } }>
                Kurz 24 hodin
              </Radio>
            </FormGroup>
          </Col>
        </Row>
        <hr/>
        <Button bsStyle='success' onClick={() => services.emailer.sendEMail({ from: '"Inkluze poptávka"<poptavka@langmaster.cz>', to: 'projekt@langmaster.cz', subject: 'Inkluze poptávka', body: React.createElement<IKuryFormFormStatus>(emailTemplate, this.state) }, () => alert('Děkujeme za zaslání poptávky')) }>Poslat poptávku</Button>
      </Panel>
    </div>;
  }
}

const emailTemplate: React.StatelessComponent<IKuryFormFormStatus> = (props: IKuryFormFormStatus, ctx: sitemapRouter.IContext) => <div>
  <p><b>EMail: </b> {props.email}</p>
  <p><b>Phone: </b> {props.phone}</p>
  <p><b>Teachers: </b> {props.teachers}</p>
  <p><b>Course: </b> {props.is32 == undefined ? '' : (props.is32 ? '32 hodin' : '24 hodin') }</p>
  <p><b>ICO: </b> {props.ICO}</p>
  <p><b>RED_IZO: </b> {props.RED_IZO}</p>
</div>;