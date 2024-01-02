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
          <b><a href='#' onClick={e => { this.state.opened = !this.state.opened; this.forceUpdate(); e.preventDefault(); } }>{this.props.question}</a></b>
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