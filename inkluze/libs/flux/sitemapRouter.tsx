namespace sitemapRouter {

  export var childContextTypes: React.ValidationMap<any> = {
    site: React.PropTypes.object,
    route: React.PropTypes.object,
  }

  export class AppRootComponent extends React.Component<IRootProps, router.TRouteActionPar> {
    constructor(p: IRootProps, ctx) {
      super(p, ctx);
      this.state = p.initRoute;
      rootComp = this;
    }
    render(): JSX.Element {
      this.actNode = site.nodes[this.state.storeId];
      if (!this.actNode) throw new lib.Exception(`Node path ${this.state.storeId} not found`);
      var res = this.actNode.createPage ? this.actNode.createPage(this.state.par) : null;
      return res;
    }
    actNode: site.INode;

    getChildContext(): IContext {
      return {
        site: this.actNode,
        route: this.state
      };
    }
    static childContextTypes = childContextTypes;
  }

  export function navigateUrl<T>(node: site.INode, par?: T) { return router.navigateUrl({ storeId: node.path, par: par }); }

  export function createElement<P>(type: React.ComponentClass<P> | React.SFC<P>, routePar, props: P & React.Attributes, ...children: React.ReactNode[]): React.ReactElement<P> {
    var par: P = Object.assign(Object.assign({}, props), routePar);
    return React.createElement(type, par);
  }

  export function bootApp(content: HTMLElement) {
    site.bootApp();
    var startRoute = router.bootApp();
    ReactDOM.render(<AppRootComponent initRoute={ startRoute } />, content);
  }

  export interface IContext {
    site: site.INode;
    route: router.TRouteActionPar
  }

  //********** Private
  var rootComp: AppRootComponent;
  interface IRootProps { initRoute: router.TRouteActionPar }

  router.getStartRoute = () => { return { storeId: site.root.path }; };
  router.onRouteChanged = route => { if (rootComp) rootComp.setState(route); };

}