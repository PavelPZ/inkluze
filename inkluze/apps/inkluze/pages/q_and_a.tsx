var Q_and_a: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => {
  return <div>
    <Page>
      <Block key={0}>
        <QAForm/>
        <h2>Zodpovězené dotazy: </h2>
      </Block>
      {qas}
    </Page>
  </div>;
};

Q_and_a.contextTypes = sitemapRouter.childContextTypes;

interface IQAFormStatus {
  email?: string;
  message?: string;
}
class QAForm extends React.Component<{}, IQAFormStatus> {
  constructor(p, c) {
    super(p, c);
    this.state = {};
  }
  getValidationState(): any {
    return this.state.message ? 'success' : 'error';
  }
  render(): JSX.Element {
    return <div>
      <PanelGroup accordion style={{ marginTop: '15px', marginLeft:'-15px' }}>
        <Panel header={<b>Zadejte nový dotaz <i className="fa fa-question-circle"></i></b>} bsStyle='warning' eventKey='1'>
          <FormGroup controlId="message" validationState={this.getValidationState() } >
            <ControlLabel>Dotaz: </ControlLabel>
            <FormControl componentClass="textarea" value={this.state.message} placeholder="Napiště dotaz" onChange={(e: any) => { this.state.message = e.target.value; this.forceUpdate(); } } rows={5} />
          </FormGroup>
          <FormGroup controlId="email">
            <ControlLabel>Email: </ControlLabel>
            <FormControl value={this.state.email} placeholder="Vyplňte email" onChange={(e: any) => { this.state.email = e.target.value; this.forceUpdate(); } }/>
            <HelpBlock>
              Email není povinný.
              Když jej vyplníte, zašleme vám na něj odpověď a můžeme se i doptat, když nebudeme dotazu rozumět.</HelpBlock>
          </FormGroup>
          <hr/>
          <Button onClick={() => alert(this.state.message) } bsStyle='success'>Poslat dotaz</Button>
        </Panel>
      </PanelGroup>
    </div>;
  }
}

interface IQAStatus {
  opened?: boolean;
}
interface IQAProps extends lib.IComponentProps {
  idx: number;
  question: JSX.Element | string;
  answer: JSX.Element | string;
}
class QA extends React.Component<IQAProps, IQAStatus> {
  constructor(p, c) {
    super(p, c);
    this.state = { opened: false };
  }
  render(): JSX.Element {
    return <Block gray={!!(this.props.idx % 2) }>
      <b><a href='#' onClick={e => { this.state.opened = !this.state.opened; this.forceUpdate(); e.preventDefault(); } }>{this.props.idx}. {this.props.question}</a></b>
      {this.state.opened && <Row style={{ display: !!this.state.opened ? 'block' : '' }}>
        <Col mdOffset={2} md={8}>
          {this.props.answer}
        </Col>
      </Row>}
    </Block>;
  }
}
var qcnt = 1;
function createQA(question: JSX.Element | string, answer: JSX.Element | string): JSX.Element {
  return <QA question={question} answer={answer} idx={qcnt++} key={qcnt}/>;
}
