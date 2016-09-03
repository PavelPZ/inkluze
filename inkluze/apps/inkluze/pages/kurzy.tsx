var Kurzy: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <Block>
      <KurzyForm/>
      <div className='alert alert-info'>
        <p>
          Cílem obou kurzů je, aby všichni učitelé získali základní orientaci v problematice inkluzivního vzdělávání.
          Obsahy kurzů jsou identické, 32 hodinový kurz ale přináší více prvků praktické výuky, více prostoru pro řešení problémů konkrétní školy atd.
        </p>
      </div>
      <h3>Obsah obou kurzů: </h3>
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
              <p>Pro každého učitele je potřeba objednat tyto šablony: </p>
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
  </Page>
</div >;


Kurzy.contextTypes = sitemapRouter.childContextTypes;

interface IKuryFormFormStatus {
  email?: string;
  teachers?: string;
  ICO?: string; //e.g. 49625918
  RED_IZO?: string; //e.g. 600000206
  is32?: boolean;
}

class KurzyForm extends React.Component<{}, IKuryFormFormStatus> {
  constructor(p, c) {
    super(p, c);
    this.state = { email: '', teachers: '', ICO: '', RED_IZO: '', is32: undefined };
  }
  getValidationState(): any {
    return this.state.email && !Number.isNaN(parseInt(this.state.teachers)) && this.state.is32 !== undefined && (!Number.isNaN(parseInt(this.state.ICO)) || !Number.isNaN(parseInt(this.state.RED_IZO))) ? 'success' : 'error';
  }
  render(): JSX.Element {
    var th = this;
    return <div>
      <Panel style={{ marginTop: '15px', marginLeft: '-15px' }} bsStyle='warning'header={<div><h3 style={{ marginTop: '0' }}>Poptávka</h3>
        Mám zájem o bližší informace a o upřesnění nabídky</div>}>
        <Row>
          <Col md={6}>
            <FormGroup controlId="message" validationState={this.getValidationState() } >
              <ControlLabel>EMail: </ControlLabel>
              <FormControl value={this.state.email} placeholder="Napiště váš email" onChange={(e: any) => { this.state.email = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <FormGroup controlId="teachers" validationState={this.getValidationState() } >
              <ControlLabel>Počet učitelů v kurzu: </ControlLabel>
              <FormControl value={this.state.teachers} placeholder="Napiště počet učitelů" onChange={(e: any) => { this.state.teachers = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
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
          <Col md={6}>
            <FormGroup controlId="teachers" validationState={this.getValidationState() } >
              <ControlLabel>Vyplňte buďto vaše IČO...</ControlLabel>
              <FormControl value={this.state.ICO} placeholder="Napiště IČO" onChange={(e: any) => { this.state.ICO = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <FormGroup controlId="teachers" validationState={this.getValidationState() } >
              <ControlLabel>...nebo vaše RED-IZO</ControlLabel>
              <FormControl value={this.state.RED_IZO} placeholder="Napiště RED-IZO" onChange={(e: any) => { this.state.RED_IZO = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
          </Col>
        </Row>
        <hr/>
        <Button onClick={() => services.emailer.sendEMail({ from: '"Inkluze poptávka"<poptavka@langmaster.cz>', to: 'projekt@langmaster.cz', subject: 'Inkluze poptávka', body: React.createElement<IKuryFormFormStatus>(emailTemplate, this.state) }, () => alert('Děkujeme za zaslání poptávky')) } bsStyle='success'>Poslat poptávku</Button>
      </Panel>
    </div>;
  }
}

const emailTemplate: React.StatelessComponent<IKuryFormFormStatus> = (props: IKuryFormFormStatus, ctx: sitemapRouter.IContext) => <div>
  <p><b>EMail: </b> {props.email}</p>
  <p><b>Teachers: </b> {props.teachers}</p>
  <p><b>Course: </b> {props.is32 == undefined ? '' : (props.is32 ? 32 : 24) }</p>
  <p><b>ICO: </b> {props.ICO}</p>
  <p><b>RED_IZO: </b> {props.RED_IZO}</p>
</div>;