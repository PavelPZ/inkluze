interface IBlockProps extends lib.IComponentProps { gray?: boolean; blue?: boolean; }
const Block: React.StatelessComponent<IBlockProps> = (props: IBlockProps) => {
  var st: React.CSSProperties = props.gray ? { backgroundColor: '#eeeeee' } : null;
  var cls = props.blue ? 'blue-header' : null;
  return <div style={st} className={cls}>
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
const Popup: React.StatelessComponent<IPopupProps> = (props: IPopupProps) => {
  return <div>
    <h3>{props.title}</h3>
    <p><i>{props.document}, stránka {props.page}</i></p>
    {props.children}
  </div>;
};
