var Kurzy: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page>
    <Block>
      <div className='alert alert-warning' style={{ fontSize: '18px' }}>
        <p style={{ marginTop: '0' }}><i className='fa fa-lightbulb-o'></i> Tip: &nbsp;
          {/*<p >
          Pro zvládnutí problematiky inkluze nabízíme řadu kurzů v délce 8, 16 a 32 hodin.
        </p>*/}
          Pro více informací klikněte na název kurzu dole na stránce.
          Pro získání podrobnějších informací o kurzech vyplňte a odešlete nezávazný poptávkový formulář.
        </p>
      </div>

      <KurzyForm />

    </Block>
    <Block gray>
      <h2 className='text-right'>ZŠ Inkluze</h2>
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
      <Panel collapsible bsStyle="success" header={<div className='course-header'>
        <h3><Label bsStyle="warning">8</Label>  <span style={headerCss}>Inkluze - 8 hodinový kurz pro sborovnu</span></h3>
      </div>} eventKey={1}>
        <BlockEx>
          Nabízíme několik 8 hodinových kurzů určených pro vzdělávání pedagogického sboru.
          Každý kurz obsahuje několik témat ze seznamu <i>Obsah kurzů</i> výše na této stránce.
          Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
        </BlockEx>
        <BlockEx>
          <div className='alert alert-danger' style={{ fontWeight: 'bold' }}>
            Každý účastník tohoto kurzu se musí účastnit ještě další vzdělávací akce v rozsahu minimálně 16 hodin.
            Viz {popups.bagatelni_podpora}.
          </div>
        </BlockEx>
        <BlockEx header={<h3>Potřebné šablony: </h3>}>
          <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_sbor_8_hodin}</p>
        </BlockEx>
      </Panel>

      <Panel collapsible bsStyle="success" header={<div className='course-header'>
        <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>Inkluze - 16 hodinový kurz</span></h3>
      </div>} eventKey={2}>
        <BlockEx>
          Nabízíme více 16 hodinových kurzů.
          Každý kurz obsahuje několik témat ze seznamu <i>Obsah kurzů</i> výše na této stránce.
          Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
        </BlockEx>
        <BlockEx>
          <div className='alert alert-danger' style={{ fontWeight: 'bold' }}>
            Každý účastník tohoto kurzu se musí účastnit ještě další vzdělávací akce v rozsahu minimálně 8 hodin.
            Viz {popups.bagatelni_podpora}.
          </div>
        </BlockEx>
        <BlockEx header={<h3>Potřebné šablony: </h3>}>
          <div>
            <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_16_hodin}varianta <b>e.
              inkluze</b>
            </p>
          </div>
        </BlockEx>
      </Panel>


      <Panel collapsible bsStyle="success" header={<div className='course-header'>
        <h3><Label bsStyle="warning">32</Label>  <span style={headerCss}>Inkluze - kurzy v celkové délce 32 hodin</span></h3>
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
            <p>
              Pro každého učitele je potřeba objednat šablonu  {popups.zs_DVPP_inkluze_32_hodin}
            </p>
          </div>
        </BlockEx>
      </Panel>

      <Panel collapsible bsStyle="success" header={<div className='course-header'>
        <h3><Label bsStyle="warning">24</Label>  <span style={headerCss}>Inkluze - kurzy v celkové délce 24 hodin</span></h3>
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
              <LiHand><b>1x</b> šablonu {popups.zs_DVPP_16_hodin}varianta <b>e.
                inkluze</b>
              </LiHand>
            </ul>
          </div>
        </BlockEx>
      </Panel>

    </Block>

    <Block >
      <h2 className='text-right'>ZŠ Ostatní</h2>

      <Panel collapsible bsStyle="success" header={<div className='course-header'>
        <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>Čtenářská gramotnost - 16 hodinový kurz</span></h3>
      </div>} eventKey={2}>
        <BlockEx header={<h3>Seminář se věnuje tématům:  </h3>}>
          <ul className='fa-ul'>
            <LiFile>seznámení s problematikou čtenářské gramotnosti</LiFile>
            <LiFile>  čtení s porozuměním</LiFile>
            <LiFile> metody a formy práce, rozvíjející čtenářskou gramotnost </LiFile>
            <LiFile> myšlenkové mapy</LiFile>
            <LiFile> správné kladení otázek jak pro učitele, tak pro žáky</LiFile>
            <LiFile> promýšlení strategií</LiFile>
            <LiFile>  rozvoj kritického myšlení.</LiFile>
            <LiFile> zkušenost zprostředkovaného učení </LiFile>
          </ul>
        </BlockEx>
        <BlockEx header={<h3>Potřebné šablony: </h3>}>
          <div>
            <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_16_hodin}varianta <b>a.
              čtenářská gramotnost</b>
            </p>
          </div>
        </BlockEx>
      </Panel>

      <Panel collapsible bsStyle="success" header={<div className='course-header'>
        <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>Matematická gramotnost - 16 hodinový kurz</span></h3>
      </div>} eventKey={2}>
        <BlockEx header={<h3>Seminář se věnuje tématům:  </h3>}>
          <ul className='fa-ul'>
            <LiFile>vymezení pojmu matematická gramotnost </LiFile>
            <LiFile> praktické rady jak a kde během výuky rozvíjet matematickou gramotnost</LiFile>
            <LiFile> obohacení výuky v hodinách o inovativní metody</LiFile>
            <LiFile> seznámeni s různými strategiemi práce se žáky</LiFile>
            <LiFile> matematická argumentace</LiFile>
            <LiFile> komunikace</LiFile>
            <LiFile> modelování</LiFile>
            <LiFile> vymezování problémů a jejich řešení</LiFile>
            <LiFile> schopnost matematizovat reálné situace</LiFile>
          </ul>
        </BlockEx>
        <BlockEx header={<h3>Potřebné šablony: </h3>}>
          <div>
            <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_16_hodin}varianta <b>b.
              matematická gramotnost</b>
            </p>
          </div>
        </BlockEx>
      </Panel>

      <Panel collapsible bsStyle="success" header={<div className='course-header'>
        <h3><Label bsStyle="warning">32</Label>  <span style={headerCss}>Mentoring - 32 hodinový kurz</span></h3>
      </div>} eventKey={2}>
        <BlockEx header={<h3>Seminář se věnuje tématům:  </h3>}>
          <ul className='fa-ul'>
            <LiFile>vymezení mentoringu ve vzdělávání</LiFile>
            <LiFile>etika v práci mentora</LiFile>
            <LiFile>základní principy práce interního mentora</LiFile>
            <LiFile>Součástí semináře jsou ukázky vedení rozhovorů s klientem v jednotlivých fázích</LiFile>
            <LiFile>mentorského procesu.</LiFile>
          </ul>
        </BlockEx>
        <BlockEx header={<h3>Potřebné šablony: </h3>}>
          <div>
            <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_32_hodin}
              varianta <b>d.
              mentoring</b>
            </p>
          </div>
        </BlockEx>
      </Panel>

      <Panel collapsible bsStyle="success" header={<div className='course-header'>
        <h3><Label bsStyle="warning">56</Label>  <span style={headerCss}>Mentoring - 56 hodinový kurz </span></h3>
      </div>} eventKey={2}>
        <BlockEx header={<h3>Seminář se věnuje tématům:  </h3>}>
          <ul className='fa-ul'>
            <LiFile>vymezení mentoringu ve vzdělávání</LiFile>
            <LiFile> etika v práci mentora, etické kodexy ACF a EMCC</LiFile>
            <LiFile> základní principy práce interního mentora</LiFile>
            <LiFile> základy práce s klientem</LiFile>
            <LiFile> hlavní kompetence mentora</LiFile>
            <LiFile> stanovování potřeb klienta plánování mentorského procesu</LiFile>
            <LiFile> osobnostní typy z hlediska mentora a z hlediska klienta</LiFile>
            <LiFile> poskytování zpětné vazy klientovi</LiFile>
            <LiFile>Součástí semináře jsou základní nácviky vedení rozhovorů s klientem v jednotlivých fázích mentorského procesu, rozbory pozorování, výcvik v poskytování zpětné vazby.</LiFile>
          </ul>
        </BlockEx>
        <BlockEx header={<h3>Potřebné šablony: </h3>}>
          <div>
            <p>Pro každého učitele je potřeba objednat šablonu {popups.zs_DVPP_56_hodin}
              varianta <b>d.
              mentoring</b>
            </p>
          </div>
        </BlockEx>
      </Panel>

    </Block>

    <Block gray>
      <h2 className='text-right'>MŠ Kurzy</h2>

      <Panel collapsible bsStyle="success" header={<div className='course-header'>
        <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>Inkluze - 16 hodinový kurz</span></h3>
      </div>} eventKey={2}>
        <BlockEx>
          Nabízíme více 16 hodinových kurzů.
          Každý kurz obsahuje několik témat ze seznamu <i>Obsah kurzů</i> výše na této stránce.
          Kontaktujte nás emailem nebo po telefonu ohledně výběru vhodného kurzu pro vaši školu.
        </BlockEx>
        <BlockEx>
          <div className='alert alert-danger' style={{ fontWeight: 'bold' }}>
            Každý účastník tohoto kurzu se musí účastnit ještě další vzdělávací akce v rozsahu minimálně 8 hodin.
            Viz {popups.bagatelni_podpora}.
          </div>
        </BlockEx>
        <BlockEx header={<h3>Potřebné šablony: </h3>}>
          <div>
            <p>Pro každého učitele je potřeba objednat šablonu {popups.ms_DVPP_16_hodin}varianta <b>e.
              inkluze</b>
            </p>
          </div>
        </BlockEx>
      </Panel>


      <Panel collapsible bsStyle="success" header={<div className='course-header'>
        <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>Čtenářská pregramotnost - 16 hodinový kurz</span></h3>
      </div>} eventKey={2}>
        <BlockEx header={<h3>Seminář se věnuje tématům:  </h3>}>
          <ul className='fa-ul'>
            <LiFile>předškolní období a vnitřní motivace ke čtení, budování si vztahu ke knihám a porozumění čteného textu</LiFile>
            <LiFile>předpoklady pro čtení – genetické předpoklady, percepčně-kognitivní zralost, zralost nervové soustavy, podnětné prostředí </LiFile>
            <LiFile>činnosti a hry pro rozvoj zrakového a sluchového vnímání</LiFile>
            <LiFile>rozvoj představivosti a fantazie z hlediska důležitosti pro rozvoj předčtenářské gramotnosti</LiFile>
            <LiFile>rozvoj myšlení – vývoj a úrovně myšlení – předřečové myšlení, předpojmové myšlení, pojmové myšlení, analýza, syntéza, srovnávání, zobecňování</LiFile>
            <LiFile>vývoj a rozvoj řeči a komunikačních schopností, slovní zásoba, znalost významu slov</LiFile>
          </ul>
        </BlockEx>
        <BlockEx header={<h3>Potřebné šablony: </h3>}>
          <div>
            <p>Pro každého učitele je potřeba objednat šablonu {popups.ms_DVPP_16_hodin}varianta <b>a.
              čtenářská pregramotnost</b>
            </p>
          </div>
        </BlockEx>
      </Panel>

      <Panel collapsible bsStyle="success" header={<div className='course-header'>
        <h3><Label bsStyle="warning">16</Label>  <span style={headerCss}>Matematická pregramotnost - 16 hodinový kurz</span></h3>
      </div>} eventKey={2}>
        <BlockEx header={<h3>Seminář se věnuje tématům:  </h3>}>
          <ul className='fa-ul'>
            <LiFile>cíle předmatematické výchovy, příprava na matematiku</LiFile>
            <LiFile>příprava dítěte na zpracování informací v zadání slovní úlohy, rozvoj řeči, komunikace,  paměti,  představ, prostorového vnímání</LiFile>
            <LiFile>aktivity spojené s porovnáváním – rozlišovací schopnosti</LiFile>
            <LiFile>aktivity spojené s přiřazováním, hry, orientace v prostoru</LiFile>
            <LiFile>typy třídění – podle druhu, barvy, velikosti, tvaru</LiFile>
            <LiFile>řazení a uspořádání, vzájemné postavení objektů</LiFile>
            <LiFile>počet – určování počtu, počítání po jedné, určování počtu objektů na první pohled</LiFile>
            <LiFile>nezávislost počtu objektů na velikosti, barvě, vzájemného postavení, vzdálenosti</LiFile>
          </ul>
        </BlockEx>
        <BlockEx header={<h3>Potřebné šablony: </h3>}>
          <div>
            <p>Pro každého učitele je potřeba objednat šablonu {popups.ms_DVPP_16_hodin}varianta <b>b.
              matematická pregramotnost</b>
            </p>
          </div>
        </BlockEx>
      </Panel>



    </Block>


  </Page >
</div >;


Kurzy.contextTypes = sitemapRouter.childContextTypes;

interface IKuryFormFormStatus {
  email: string;
  phone: string;
  teachers: string;
  //ICO: string; //e.g. 49625918
  //RED_IZO: string; //e.g. 600000206
  poznamka: string; //e.g. 600000206
  //course: string;
}

class KurzyForm extends React.Component<{}, IKuryFormFormStatus> {
  constructor(p, c) {
    super(p, c);
    this.state = { email: '', phone: '', teachers: '', poznamka: '' };//ICO: '', RED_IZO: '',  , course: undefined };
  }
  getValidationState(): any {
    return (this.state.email || this.state.phone) && !Number.isNaN(parseInt(this.state.teachers)) /*&& this.state.course !== undefined && (!Number.isNaN(parseInt(this.state.ICO)) || !Number.isNaN(parseInt(this.state.RED_IZO))*/ ? 'success' : 'error';
  }
  render(): JSX.Element {
    var th = this;
    return <div>
      <Panel collapsible style={{ marginTop: '15px' }} bsStyle='info' header={<div className='course-header'>
        <h2 style={{ marginTop: '0' }}><i className='fa fa-bars'></i> <span style={headerCss}>Nezávazný poptávkový formulář</span></h2>
      </div>}>
        <Row>
          <Col md={6}>
            <FormGroup controlId="email" validationState={this.getValidationState()} >
              <ControlLabel>Vyplňte buďto váš email...</ControlLabel>
              <FormControl value={this.state.email} placeholder="Napište váš email" onChange={(e: any) => { this.state.email = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr />
            {/*
            <FormGroup controlId="teachers" validationState={this.getValidationState() } >
              <ControlLabel>Vyplňte buďto vaše IČO...</ControlLabel>
              <FormControl value={this.state.ICO} placeholder="Napište IČO" onChange={(e: any) => { this.state.ICO = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr/>*/}
          </Col>
          <Col md={6}>
            <FormGroup controlId="tel" validationState={this.getValidationState()} >
              <ControlLabel>...nebo vaše telefonní číslo</ControlLabel>
              <FormControl value={this.state.phone} placeholder="Napište vaše telefonní číslo" onChange={(e: any) => { this.state.phone = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr />
            {/*
            <FormGroup controlId="teachers" validationState={this.getValidationState() } >
              <ControlLabel>...nebo vaše RED-IZO</ControlLabel>
              <FormControl value={this.state.RED_IZO} placeholder="Napište RED-IZO" onChange={(e: any) => { this.state.RED_IZO = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
            <hr/>*/}
            {/*<FormGroup controlId="kurz" validationState={this.getValidationState() }>
              <ControlLabel>Typ kurzu: </ControlLabel><br/>
              <Radio inline name="kurz" value="32" checked={this.state.course == '32'} onChange={() => { this.state.course = '32'; this.forceUpdate(); } }>
                <b>Kurz 32 hodin</b>
              </Radio>
              <Radio inline name="kurz" value="24" checked={this.state.course == '24'} onChange={() => { this.state.course = '24'; this.forceUpdate(); } }>
                <b>Kurz 24 hodin</b>
              </Radio>
              <Radio inline name="kurz" value="8" checked={this.state.course == '8'} onChange={() => { this.state.course = '8'; this.forceUpdate(); } }>
                Kurz 8 hodin
              </Radio>
              <Radio inline name="kurz" value="24" checked={this.state.course == '16'} onChange={() => { this.state.course = '16'; this.forceUpdate(); } }>
                Kurz 16 hodin
              </Radio>
            </FormGroup>*/}
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <FormGroup controlId="teachers" validationState={this.getValidationState()} >
              <ControlLabel>Počet učitelů v kurzu: </ControlLabel>
              <FormControl value={this.state.teachers} placeholder="Napište počet učitelů" onChange={(e: any) => { this.state.teachers = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
          </Col>
          <Col md={9}>
            <FormGroup controlId="teachers" validationState={this.getValidationState()} >
              <ControlLabel>Upřesnění poptávky nebo dotaz</ControlLabel>
              <FormControl componentClass="textarea" rows={3} value={this.state.poznamka} placeholder="Napište upřesnění poptávky nebo dotaz" onChange={(e: any) => { this.state.poznamka = e.target.value; this.forceUpdate(); } } />
            </FormGroup>
          </Col>
        </Row>
        <hr />
        <Button bsStyle='success' onClick={() => services.emailer.sendEMail({ from: '"Inkluze poptávka"<poptavka@langmaster.cz>', to: 'projekt@langmaster.cz', subject: 'Inkluze poptávka', body: React.createElement<IKuryFormFormStatus>(emailTemplate, this.state) }, () => alert('Děkujeme za zaslání poptávky'))}>Poslat poptávku</Button>
      </Panel>
    </div>;
  }
}

const emailTemplate: React.StatelessComponent<IKuryFormFormStatus> = (props: IKuryFormFormStatus, ctx: sitemapRouter.IContext) => <div>
  <p><b>EMail: </b> {props.email}</p>
  <p><b>Phone: </b> {props.phone}</p>
  <p><b>Teachers: </b> {props.teachers}</p>
  {/*<p><b>Course: </b> {props.course}</p>
  <p><b>ICO: </b> {props.ICO}</p>
  <p><b>RED_IZO: </b> {props.RED_IZO}</p>*/}
  <p><b>Upřesnění poptávky: </b> {props.poznamka}</p>
</div>;

const headerCss: React.CSSProperties = { textDecoration: 'underline', cursor: 'pointer' };