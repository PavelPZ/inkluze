//declare namespace __React {
//  interface CSSProperties {
//    flexWrap?: string;
//  }
//}
enum flex {
  flex,

  justifySpaceBetween,
  justifySpaceAround,
  justifyEnd,
  justifyStart,
  justifyCenter,

  alignSelfEnd,
  alignSelfStart,
  alignSelfAuto,
  alignSelfCenter,
  alignSelfBaseline,
  alignSelfStretch,

  alignContentEnd,
  alignContentStart,
  alignContentCenter,
  alignContentStretch,
  alignContentSpaceAround,
  alignContentSpaceBetween,

  alignItemsStart,
  alignItemsEnd,
  alignItemsCenter,
  alignItemsBaseline,
  alignItemsStretch,

  directionRow,
  directionRowReverse,
  directionColumn,
  directionColumnReverse,

  wrapNowrap,
  wrapWrap,
  wrapWrapReverse,

  order0,
  order1,
  order2,
  order3,
  order4,
  order5,
  order6,
  order7,
  order8,
  order9,

  grow0,
  grow1,
  grow2,
  grow3,
  grow4,
  grow5,
  grow6,
  grow7,
  grow8,
  grow9,

}
function flexClass(clss: Array<flex>): string {
  if (!clss || clss.length == 0) return null;
  var res: Array<String> = [];
  clss.forEach(c => res.push('flex-' + lib.camelCaseToDashCase(flex[c])));
  return res.join(' ');
}

//var x = ReactDOMServer.renderToStaticMarkup(<div className={classNames(flexClass([flex.justifyCenter, flex.alignContentCenter, flex.order3]))}></div>)
//alert(x);