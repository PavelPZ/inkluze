declare namespace services {
    interface serviceOUT {
        error: string;
    }
    function callRequest<TIN, TOUT extends serviceOUT>(methodPath: string, inPar: TIN): Promise<TOUT>;
}
declare namespace validation {
    interface IValidPars {
        type: types;
        mask?: string;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;
        equalToId?: string;
    }
    enum types {
        no = 0,
        required = 1,
        email = 2,
        number = 4,
        digits = 8,
        equalTo = 16,
        stringLength = 32,
        numberRange = 64,
        stringMask = 128,
    }
    interface IInputState {
        value: string;
        blured?: boolean;
        error?: string;
    }
    function validate(validator: IValidPars, st: IInputState): void;
    var messages: {
        required: () => string;
        remote: () => string;
        email: () => string;
        url: () => string;
        date: () => string;
        dateISO: () => string;
        number: () => string;
        digits: () => string;
        equalTo: () => string;
        maxlength: (v1: any) => string;
        minlength: (v1: any) => string;
        rangelength: (v1: any, v2: any) => string;
        range: (v1: any, v2: any) => string;
        max: (v1: any) => string;
        min: (v1: any) => string;
    };
}
declare namespace router {
    var getStartRoute: () => TRouteActionPar;
    function bootApp(): TRouteActionPar;
    function navigate(routes: TRouteActionPar): void;
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
interface IDOMServer {
    renderToString(element: React.ReactElement<any>): string;
    renderToStaticMarkup(element: React.ReactElement<any>): string;
}
declare var ReactDOMServer: IDOMServer;
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
declare namespace sitemapRouter {
    var childContextTypes: React.ValidationMap<any>;
    class AppRootComponent extends React.Component<IRootProps, router.TRouteActionPar> {
        constructor(p: IRootProps, ctx: any);
        render(): JSX.Element;
        actNode: site.INode;
        getChildContext(): IContext;
        static childContextTypes: React.ValidationMap<any>;
    }
    function navigateUrl<T>(node: site.INode, par?: T): string;
    function navigateTag<T>(node: site.INode, par?: T): JSX.Element;
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
}
