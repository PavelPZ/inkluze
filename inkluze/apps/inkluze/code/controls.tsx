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