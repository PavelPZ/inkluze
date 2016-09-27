const infoEmail = 'projekt@langmaster.cz';

const LiFile: React.StatelessComponent<lib.IComponentProps> = (props: lib.IComponentProps, ctx: sitemapRouter.IContext) => <li style={{ paddingBottom: '5px' }}><i className='fa-li fa fa-file-o'></i>{props.children}</li>;
const LiHand: React.StatelessComponent<lib.IComponentProps> = (props: lib.IComponentProps, ctx: sitemapRouter.IContext) => <li style={{ paddingBottom: '5px' }}><i className='fa-li fa fa-hand-o-right'></i>{props.children}</li>;
const LiCheck: React.StatelessComponent<lib.IComponentProps> = (props: lib.IComponentProps, ctx: sitemapRouter.IContext) => <li style={{ paddingBottom: '5px' }}><i className='fa-li fa fa-check'></i>{props.children}</li>;
interface IAlertProps extends lib.IComponentProps { type: "Poznámka" | "Příklad"; }
const Alert: React.StatelessComponent<IAlertProps> = (props: IAlertProps, ctx: sitemapRouter.IContext) => <div className='alert alert-warning'><i>{props.type}</i>: {props.children}</div>;

interface IBlockProps extends lib.IComponentProps { gray?: boolean; blue?: boolean; darkGray?: boolean; }
const Block: React.StatelessComponent<IBlockProps> = (props: IBlockProps) => {
  var st: React.CSSProperties = props.gray ? { backgroundColor: '#eeeeee' } : {};
  var cls = props.blue ? 'blue-header' : (props.darkGray ? 'dark-header' : null); 
  return <div style={Object.assign(st, props.style) } className={cls}>
    <div className="container" style={{ padding: '10px' }}>
      {props.children}
    </div>
  </div>;
};

interface IBlockExProps extends IBlockProps { header?: string | JSX.Element; }
const BlockEx: React.StatelessComponent<IBlockExProps> = (props: IBlockExProps) => {
  return React.createElement(Block, props,
    [
      props.header ? <h3 key={1}>{props.header}</h3> : null,
      <Row key={2}>
        <Col mdOffset={2} md={8}>
          {props.children}
        </Col>
      </Row>
    ]);
};

interface IPopupProps extends lib.IComponentProps {
  document: 'priloha3' | 'vyzva';
  page: number;
  header: string;
}
interface IPopupState {
  showModal: boolean;
}

class Popup extends React.Component<IPopupProps, IPopupState> {

  constructor(p, c) {
    super(p, c);
    this.state = { showModal: false };
  }

  close() { this.setState({ showModal: false }); }

  open() { this.setState({ showModal: true }); }

  render(): JSX.Element {
    let docTitle: JSX.Element;
    switch (this.props.document) {
      case 'priloha3': docTitle = lib.navigateExt('http://www.msmt.cz/uploads/OP_VVV/Vyzva_zjednodusene_projekty_22_a23/Priloha_c_3_Prehled_sablon_k_1_8_2016.pdf#page=' + this.props.page,'Přehled šablon a jejich věcný výklad, strana ' + (this.props.page - 1), true); break;
      case 'vyzva': docTitle = lib.navigateExt('http://www.msmt.cz/uploads/OP_VVV/Vyzva_zjednodusene_projekty_22_a23/Vyzva_Sablony_MRR.pdf#page=' + this.props.page, 'Výzva 22 a 23, strana ' + this.props.page, true); break;
      default: throw new lib.ENotImplemented();
    }
    return <span>
      {/*<Label bsStyle="warning" onClick={() => this.open() } style={{ color: 'white', cursor: 'pointer', padding: '3px', fontSize: '100%', fontWeight: 'normal' }}>{this.props.header}</Label>*/}
      <a href='#' onClick={ev => { this.open(); ev.preventDefault(); } }><i className='fa fa-commenting-o'></i> {this.props.header}</a>
      <Modal show={this.state.showModal} onHide={() => this.close() }>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.header}</Modal.Title>
          <p><i>viz {docTitle }</i></p>
        </Modal.Header>
        <Modal.Body>
          {this.props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.close() }>Close</Button>
        </Modal.Footer>
      </Modal>
    </span>;
  }
}