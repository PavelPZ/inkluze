interface IDOMServer {
  renderToString(element: React.ReactElement<any>): string;
  renderToStaticMarkup(element: React.ReactElement<any>): string;
}

var ReactDOMServer: IDOMServer = React['__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'];