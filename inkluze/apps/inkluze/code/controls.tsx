﻿interface IBlockProps extends lib.IComponentProps { gray?: boolean; blue?: boolean; darkGray?: boolean; }
const Block: React.StatelessComponent<IBlockProps> = (props: IBlockProps) => {
  var st: React.CSSProperties = props.gray ? { backgroundColor: '#eeeeee' } : {};
  var cls = props.blue ? 'blue-header' : (props.darkGray ? 'dark-header' : null);
  return <div style={Object.assign(st, props.style) } className={cls}>
    <div className="container" style={{padding: '10px'}}>
      {props.children}
    </div>
  </div>;
};

interface IBlockExProps extends IBlockProps { title: string; }
const BlockEx: React.StatelessComponent<IBlockExProps> = (props: IBlockExProps) => {
  return React.createElement(Block, props,
    [
      <h2 key={1}>{props.title}</h2>,
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
  title: string;
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
    return <span>
      <Label bsStyle="warning" onClick={() => this.open() } style={{ color: 'white', cursor: 'pointer', padding: '3px', fontSize: '100%', fontWeight: 'normal' }}>{this.props.title}</Label>
      <Modal show={this.state.showModal} onHide={() => this.close() }>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
          <p><i>{this.props.document}, stránka {this.props.page}</i></p>
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