const popups = {
  xxx: <Popup document='priloha3' page= {123} title='xxx'>
    <div>
      Jakekoliv HTML s tagy
    </div>
  </Popup>,
  yyy: <Popup document='priloha3' page= {124} title='yyy'>
    <div>
      Jakekoliv HTML s tagy
    </div>
  </Popup>,
}

const DumpPopups: React.StatelessComponent<{}> = prop => {
  var pops: Array<JSX.Element> = [];
  for (var p in popups) {
    pops.push(popups[p]);
    pops.push(<hr/>);
  }
  return <div>{pops}</div>
}