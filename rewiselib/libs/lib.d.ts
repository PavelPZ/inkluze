interface IDOMServer {
    renderToString(element: React.ReactElement<any>): string;
    renderToStaticMarkup(element: React.ReactElement<any>): string;
}
declare var ReactDOMServer: IDOMServer;
declare const Button: React.ClassicComponentClass<ReactBootstrap.ButtonProps>;
declare const Navbar: ReactBootstrap.NavbarClass;
declare const Nav: typeof ReactBootstrap.Nav;
declare const NavItem: React.ClassicComponentClass<ReactBootstrap.NavItemProps>;
declare const NavDropdown: typeof ReactBootstrap.NavDropdown;
declare const MenuItem: typeof ReactBootstrap.MenuItem;
declare const Breadcrumb: ReactBootstrap.BreadcrumbClass;
declare const Modal: ReactBootstrap.ModalClass;
declare const Col: React.ClassicComponentClass<ReactBootstrap.ColProps>;
declare const Row: React.ClassicComponentClass<ReactBootstrap.RowProps>;
declare const Grid: React.ClassicComponentClass<ReactBootstrap.GridProps>;
declare const Clearfix: typeof ReactBootstrap.Clearfix;
declare const Label: typeof ReactBootstrap.Label;
declare const Panel: React.ClassicComponentClass<ReactBootstrap.PanelProps>;
declare const PanelGroup: React.ClassicComponentClass<ReactBootstrap.PanelGroupProps>;
declare const FormGroup: typeof ReactBootstrap.FormGroup;
declare const HelpBlock: typeof ReactBootstrap.HelpBlock;
declare const FormControl: ReactBootstrap.FormControlClass;
declare const ControlLabel: typeof ReactBootstrap.ControlLabel;
declare const Accordion: React.ClassicComponentClass<ReactBootstrap.AccordionProps>;
declare const Radio: typeof ReactBootstrap.Radio;
declare namespace lib {
    class Exception extends Error {
        constructor(msg: string);
    }
    class ENotImplemented extends Exception {
        constructor(msg?: string);
    }
    type TCallback = () => void;
    function getClassName(constructor: Function): string;
    function noop(): void;
    interface IComponentProps extends React.HTMLAttributes {
        children?: React.ReactNode;
        key?: any;
    }
    function navigateExt(url: string, title: string, newWindow?: boolean): JSX.Element;
    /**
   * Calculate a 32 bit FNV-1a hash
   * Found here: https://gist.github.com/vaiorabbit/5657561
   * Ref.: http://isthe.com/chongo/tech/comp/fnv/
   *
   * @param {string} str the input value
   * @param {boolean} [asString=false] set to true to return the hash value as
   *     8-digit hex string instead of an integer
   * @param {integer} [seed] optionally pass the hash of the previous chunk
   * @returns {integer | string}
   */
    function hash(str: string, asString?: boolean, seed?: number): string | number;
    function camelCaseToDashCase(input: string): string;
    function dashCaseToCamelCase(input: string): string;
}
declare enum flex {
    flex = 0,
    justifySpaceBetween = 1,
    justifySpaceAround = 2,
    justifyEnd = 3,
    justifyStart = 4,
    justifyCenter = 5,
    alignSelfEnd = 6,
    alignSelfStart = 7,
    alignSelfAuto = 8,
    alignSelfCenter = 9,
    alignSelfBaseline = 10,
    alignSelfStretch = 11,
    alignContentEnd = 12,
    alignContentStart = 13,
    alignContentCenter = 14,
    alignContentStretch = 15,
    alignContentSpaceAround = 16,
    alignContentSpaceBetween = 17,
    alignItemsStart = 18,
    alignItemsEnd = 19,
    alignItemsCenter = 20,
    alignItemsBaseline = 21,
    alignItemsStretch = 22,
    directionRow = 23,
    directionRowReverse = 24,
    directionColumn = 25,
    directionColumnReverse = 26,
    wrapNowrap = 27,
    wrapWrap = 28,
    wrapWrapReverse = 29,
    order0 = 30,
    order1 = 31,
    order2 = 32,
    order3 = 33,
    order4 = 34,
    order5 = 35,
    order6 = 36,
    order7 = 37,
    order8 = 38,
    order9 = 39,
    grow0 = 40,
    grow1 = 41,
    grow2 = 42,
    grow3 = 43,
    grow4 = 44,
    grow5 = 45,
    grow6 = 46,
    grow7 = 47,
    grow8 = 48,
    grow9 = 49,
}
declare function flexClass(clss: Array<flex>): string;
declare namespace router {
    var getStartRoute: () => TRouteActionPar;
    function bootApp(): TRouteActionPar;
    function doNavigate(routes: TRouteActionPar, ev?: React.SyntheticEvent): TRouteActionPar;
    function navigateUrl(routes: TRouteActionPar): string;
    var onRouteChanged: (route: TRouteActionPar) => void;
    var $isHashRouter: boolean;
    var $basicUrl: string;
    interface TRouteActionPar {
        storeId?: string;
        hookId?: string;
        par?: {};
        routeHookDefault?: TRouteActionPar;
    }
}
declare namespace site {
    interface INode {
        id: string | number;
        title?: string;
        brTitle?: string;
        createPage: (routePar) => JSX.Element;
        path?: string;
        childs?: Array<INode>;
        parent?: INode;
        largeLogo?: boolean;
        tab?: ITab;
        noTitle?: boolean;
    }
    var root: INode;
    var nodes: {
        [path: string]: INode;
    };
    function bootApp(): void;
    function nodeParents(nd: INode, ignoreSelf?: boolean): Array<INode>;
    interface ITabs {
        $childs?: Array<ITab>;
    }
    interface ITab {
        title: string;
        idx?: number;
        rootNode?: INode;
    }
    var tabs: ITabs;
    var getBlankPage: (routePar) => JSX.Element;
}
declare namespace sitemapRouter {
    var childContextTypes: React.ValidationMap<any>;
    class AppRootComponent extends React.Component<IRootProps, router.TRouteActionPar> {
        constructor(p: IRootProps, ctx: any);
        render(): JSX.Element;
        actNode: site.INode;
        getChildContext(): IContext;
        static childContextTypes: React.ValidationMap<any>;
    }
    function navigateUrl<T>(node: site.INode, par?: T): void;
    function doNavigate<T>(node: site.INode, ev?: React.SyntheticEvent, par?: T): void;
    function doNavigateTag<T>(node: site.INode, ev?: React.SyntheticEvent, par?: T): JSX.Element;
    function createElement<P>(type: React.ComponentClass<P> | React.SFC<P>, routePar: any, props: P & React.Attributes, ...children: React.ReactNode[]): React.ReactElement<P>;
    function bootApp(content: HTMLElement, sitemapCreator: lib.TCallback): void;
    interface IContext {
        site: site.INode;
        route: router.TRouteActionPar;
    }
    interface IRootProps {
        initRoute: router.TRouteActionPar;
    }
}
declare namespace services {
    interface serviceOUT {
        error: string;
    }
    function callRequest<TIN, TOUT extends serviceOUT>(methodPath: string, inPar: TIN): Promise<TOUT>;
}
declare namespace services.emailer {
    interface sendEmailIN {
        from: string;
        to: string;
        cc?: string;
        bcc?: string;
        isBodyHtml?: boolean;
        body: string | JSX.Element;
        subject: string;
    }
    function sendEMail(email: sendEmailIN, completed: lib.TCallback): void;
}
