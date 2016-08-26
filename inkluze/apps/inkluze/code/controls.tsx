interface IBlockProps extends lib.IComponentProps { gray?: boolean; blue?: boolean; darkGray?:boolean; }
const Block: React.StatelessComponent<IBlockProps> = (props: IBlockProps) => {
  var st: React.CSSProperties = props.gray ? { backgroundColor: '#eeeeee' } : {};
  var cls = props.blue ? 'blue-header' : (props.darkGray ? 'dark-header' : null);
  return <div style={Object.assign(st, props.style)} className={cls}>
    <div className="container">
      {props.children}
    </div>
  </div>;
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
      <Button onClick={() => this.open()}>{this.props.title}</Button>
      <Modal show={this.state.showModal} onHide={() => this.close()}>
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