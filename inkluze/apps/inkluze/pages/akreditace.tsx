namespace inkluze {

  export function createQA(question: JSX.Element | string, answer: JSX.Element | string): JSX.Element {
    return <QA question={question} answer={answer} idx={qcnt++} key={qcnt}/>;
  }

  //****************** PRIVATE

  var qcnt = 1;

  interface IQAFormStatus {
    open: boolean;
    email?: string;
    message?: string;
  }
  export class QAForm extends React.Component<{}, IQAFormStatus> {
    constructor(p, c) {
      super(p, c);
      this.state = { open: false };
    }
    getValidationState(): any {
      return this.state.message ? 'success' : 'error';
    }
    render(): JSX.Element {
      var th = this;
      return <div>
        {/*
        <Panel collapsible style={{ marginTop: '15px', marginLeft: '-15px' }} header={<a href="#" onClick={ev => { th.state.open = !th.state.open; th.forceUpdate(); ev.preventDefault(); } }><b>Zadejte nový dotaz <i className="fa fa-question-circle"></i></b></a>} bsStyle='warning' eventKey='1' expanded={this.state.open}>
        */}
        <Panel collapsible style={{ marginTop: '15px', marginLeft: '-15px' }} header={<b>Zadejte nový dotaz <i className="fa fa-question-circle"></i></b>} bsStyle='warning' eventKey='1' onClick={ev => { th.state.open = !th.state.open; th.forceUpdate(); ev.preventDefault(); } }>
          <FormGroup controlId="message" validationState={this.getValidationState() } >
            <ControlLabel>Dotaz: </ControlLabel>
            <FormControl componentClass="textarea" value={this.state.message} placeholder="Napište dotaz" onChange={(e: any) => { this.state.message = e.target.value; this.forceUpdate(); } } rows={5} />
          </FormGroup>
          <FormGroup controlId="email">
            <ControlLabel>Email: </ControlLabel>
            <FormControl value={this.state.email} placeholder="Vyplňte email" onChange={(e: any) => { this.state.email = e.target.value; this.forceUpdate(); } }/>
            <HelpBlock>
              Email není povinný.
              Když jej vyplníte, zašleme vám na něj odpověď a můžeme se i doptat, když nebudeme dotazu rozumět.</HelpBlock>
          </FormGroup>
          <hr/>
          <Button onClick={() => services.emailer.sendEMail({ from: '"Inkluze FAQ"<faq@langmaster.cz>', to: 'projekt@langmaster.cz', subject: 'Inkluze FAQ', body: React.createElement<IQAFormStatus>(emailTemplate, this.state) }, () => { alert('Děkujeme za zaslání dotazu'); th.state.open = false; th.forceUpdate(); }) } bsStyle='success'>Poslat dotaz</Button>
        </Panel>
      </div>; 
    }
  }

  const emailTemplate: React.StatelessComponent<IQAFormStatus> = (props: IQAFormStatus, ctx: sitemapRouter.IContext) => <div>
    <p><b>EMail: </b> {props.email}</p>
    <p><b>Message: </b><br/>
    {props.message}</p>
  </div>;

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
      return <Block gray={!!(this.props.idx % 2)}>
        <Col md={8}>
          <b><a href='#' onClick={e => { this.state.opened = !this.state.opened; this.forceUpdate(); e.preventDefault(); } }>{this.props.idx}.&nbsp;{this.props.question}</a></b>
        </Col>
        {this.state.opened && <Row style={{ display: !!this.state.opened ? 'block' : '' }}>
          <Col mdOffset={2} md={8}>
            <big>
              {this.props.answer}
            </big>
          </Col>
        </Row>}
      </Block>;
    }
  }
}

const Akreditace = inkluze.Akreditace;