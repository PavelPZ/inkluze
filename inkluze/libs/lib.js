var ReactDOMServer = React['__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'];
var Button = ReactBootstrap.Button;
var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;
var Breadcrumb = ReactBootstrap.Breadcrumb;
var Modal = ReactBootstrap.Modal;
var Col = ReactBootstrap.Col;
var Row = ReactBootstrap.Row;
var Grid = ReactBootstrap.Grid;
var Clearfix = ReactBootstrap.Clearfix;
var Label = ReactBootstrap.Label;
var Panel = ReactBootstrap.Panel;
var PanelGroup = ReactBootstrap.PanelGroup;
var FormGroup = ReactBootstrap.FormGroup;
var HelpBlock = ReactBootstrap.HelpBlock;
var FormControl = ReactBootstrap.FormControl;
var ControlLabel = ReactBootstrap.ControlLabel;
var Accordion = ReactBootstrap.Accordion;
var Radio = ReactBootstrap.Radio;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var lib;
(function (lib) {
    var Exception = (function (_super) {
        __extends(Exception, _super);
        function Exception(msg) {
            _super.call(this, msg);
            debugger;
            console.error(msg);
        }
        return Exception;
    }(Error));
    lib.Exception = Exception;
    var ENotImplemented = (function (_super) {
        __extends(ENotImplemented, _super);
        function ENotImplemented(msg) {
            _super.call(this, "Missing " + msg + " override");
        }
        return ENotImplemented;
    }(Exception));
    lib.ENotImplemented = ENotImplemented;
    function getClassName(constructor) {
        var res = constructor['name'];
        if (res)
            return res;
        var arr = constructor.toString().match(/function\s*(\w+)/);
        return arr && arr.length == 2 ? arr[1] : undefined;
    }
    lib.getClassName = getClassName;
    function noop() { }
    lib.noop = noop;
    function navigateExt(url, title, newWindow) {
        return React.createElement("a", {href: url, target: newWindow ? '_blank' : '_self'}, 
            React.createElement("i", {className: 'fa fa-external-link'}), 
            " ", 
            title);
    }
    lib.navigateExt = navigateExt;
    //http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
    //https://en.wikipedia.org/wiki/List_of_hash_functions
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
    function hash(str, asString, seed) {
        /*jshint bitwise:false */
        var i, l, hval = (seed === undefined) ? 0x811c9dc5 : seed;
        for (i = 0, l = str.length; i < l; i++) {
            hval ^= str.charCodeAt(i);
            hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
        }
        if (asString)
            return ("0000000" + (hval >>> 0).toString(16)).substr(-8); // Convert to 8 digit hex string
        else
            return hval >>> 0;
    }
    lib.hash = hash;
    //D:\LMCom\rew\Web4.sln, d:\LMCom\rew\angular-definitelytyped\angular2\src\compiler\util.ts
    var CAMEL_CASE_REGEXP = /([A-Z])/g;
    var DASH_CASE_REGEXP = /-([a-z])/g;
    function camelCaseToDashCase(input) { return replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m) { return '-' + m[1].toLowerCase(); }); }
    lib.camelCaseToDashCase = camelCaseToDashCase;
    function dashCaseToCamelCase(input) { return replaceAllMapped(input, DASH_CASE_REGEXP, function (m) { return m[1].toUpperCase(); }); }
    lib.dashCaseToCamelCase = dashCaseToCamelCase;
    //D:\LMCom\rew\Web4.sln, d:\LMCom\rew\angular-definitelytyped\angular2\src\facade\lang.ts
    function replaceAllMapped(s, from, cb) {
        return s.replace(from, function () {
            var matches = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                matches[_i - 0] = arguments[_i];
            }
            // Remove offset & string from the result array
            matches.splice(-2, 2);
            // The callback receives match, p1, ..., pn
            return cb(matches);
        });
    }
})(lib || (lib = {}));
//declare namespace __React {
//  interface CSSProperties {
//    flexWrap?: string;
//  }
//}
var flex;
(function (flex) {
    flex[flex["flex"] = 0] = "flex";
    flex[flex["justifySpaceBetween"] = 1] = "justifySpaceBetween";
    flex[flex["justifySpaceAround"] = 2] = "justifySpaceAround";
    flex[flex["justifyEnd"] = 3] = "justifyEnd";
    flex[flex["justifyStart"] = 4] = "justifyStart";
    flex[flex["justifyCenter"] = 5] = "justifyCenter";
    flex[flex["alignSelfEnd"] = 6] = "alignSelfEnd";
    flex[flex["alignSelfStart"] = 7] = "alignSelfStart";
    flex[flex["alignSelfAuto"] = 8] = "alignSelfAuto";
    flex[flex["alignSelfCenter"] = 9] = "alignSelfCenter";
    flex[flex["alignSelfBaseline"] = 10] = "alignSelfBaseline";
    flex[flex["alignSelfStretch"] = 11] = "alignSelfStretch";
    flex[flex["alignContentEnd"] = 12] = "alignContentEnd";
    flex[flex["alignContentStart"] = 13] = "alignContentStart";
    flex[flex["alignContentCenter"] = 14] = "alignContentCenter";
    flex[flex["alignContentStretch"] = 15] = "alignContentStretch";
    flex[flex["alignContentSpaceAround"] = 16] = "alignContentSpaceAround";
    flex[flex["alignContentSpaceBetween"] = 17] = "alignContentSpaceBetween";
    flex[flex["alignItemsStart"] = 18] = "alignItemsStart";
    flex[flex["alignItemsEnd"] = 19] = "alignItemsEnd";
    flex[flex["alignItemsCenter"] = 20] = "alignItemsCenter";
    flex[flex["alignItemsBaseline"] = 21] = "alignItemsBaseline";
    flex[flex["alignItemsStretch"] = 22] = "alignItemsStretch";
    flex[flex["directionRow"] = 23] = "directionRow";
    flex[flex["directionRowReverse"] = 24] = "directionRowReverse";
    flex[flex["directionColumn"] = 25] = "directionColumn";
    flex[flex["directionColumnReverse"] = 26] = "directionColumnReverse";
    flex[flex["wrapNowrap"] = 27] = "wrapNowrap";
    flex[flex["wrapWrap"] = 28] = "wrapWrap";
    flex[flex["wrapWrapReverse"] = 29] = "wrapWrapReverse";
    flex[flex["order0"] = 30] = "order0";
    flex[flex["order1"] = 31] = "order1";
    flex[flex["order2"] = 32] = "order2";
    flex[flex["order3"] = 33] = "order3";
    flex[flex["order4"] = 34] = "order4";
    flex[flex["order5"] = 35] = "order5";
    flex[flex["order6"] = 36] = "order6";
    flex[flex["order7"] = 37] = "order7";
    flex[flex["order8"] = 38] = "order8";
    flex[flex["order9"] = 39] = "order9";
    flex[flex["grow0"] = 40] = "grow0";
    flex[flex["grow1"] = 41] = "grow1";
    flex[flex["grow2"] = 42] = "grow2";
    flex[flex["grow3"] = 43] = "grow3";
    flex[flex["grow4"] = 44] = "grow4";
    flex[flex["grow5"] = 45] = "grow5";
    flex[flex["grow6"] = 46] = "grow6";
    flex[flex["grow7"] = 47] = "grow7";
    flex[flex["grow8"] = 48] = "grow8";
    flex[flex["grow9"] = 49] = "grow9";
})(flex || (flex = {}));
function flexClass(clss) {
    if (!clss || clss.length == 0)
        return null;
    var res = [];
    clss.forEach(function (c) { return res.push('flex-' + lib.camelCaseToDashCase(flex[c])); });
    return res.join(' ');
}
//var x = ReactDOMServer.renderToStaticMarkup(<div className={classNames(flexClass([flex.justifyCenter, flex.alignContentCenter, flex.order3]))}></div>)
//alert(x); 
var router;
(function (router) {
    //boot routeru
    function bootApp() { return rootRouteBind(decodeFullUrl(), false); }
    router.bootApp = bootApp;
    //navigace na route
    function doNavigate(routes, ev) { if (ev)
        ev.preventDefault(); return rootRouteBind(routes, true); }
    router.doNavigate = doNavigate;
    function navigateUrl(routes) { return encodeFullUrl(routes); }
    router.navigateUrl = navigateUrl;
    //config
    router.$isHashRouter = false; //hash or slash route delimiter
    router.$basicUrl = getBasicUrl(window.location.href); //cast URL pred route paramatter
    //***************** refresh view on route change
    //aktualni route objekt
    //var route: TRouteActionPar;
    function rootRouteBind(routes /*null => start route*/, withPustState) {
        if (!routes)
            routes = router.getStartRoute ? router.getStartRoute() : null;
        if (!routes)
            throw new lib.Exception("missing routes");
        //route = routes;
        if (router.onRouteChanged)
            router.onRouteChanged(routes);
        if (withPustState)
            pushState(routes);
        return routes;
    }
    //***************** POPSTATE EVENT
    window.addEventListener("popstate", function (ev) {
        console.log("> popstate: " + window.location.href);
        rootRouteBind(decodeFullUrl(), false);
    });
    //modify browser URL
    function pushState(route) {
        var urlStr = encodeFullUrl(route);
        console.log("> pushState: " + urlStr);
        history.pushState(null, null, urlStr);
    }
    //routa pars are after ".html" url part
    function getBasicUrl(startUrl) { var idx = startUrl.toLowerCase().indexOf('.html'); return idx >= 0 ? startUrl.substr(0, idx + 5) : startUrl; }
    var routeParIgnores = ['storeId', 'hookId', 'par'];
    var routeHookDefaultName = 'routeHookDefault';
    function encodeUrl(st) {
        var res = [];
        encodeUrlLow(res, st, null);
        var url = res.join('');
        return clearSlashes(url.replace(/(\$\/)*$/g, ''));
    }
    function encodeFullUrl(st) {
        var urlStr = st ? encodeUrl(st) : null;
        //return $basicUrl + (urlStr ? ($isHashRouter ? '#' : '/') + urlStr : '');
        return router.$basicUrl + (urlStr ? (router.$isHashRouter ? '#' : '?') + urlStr : '');
    }
    function decodeFullUrl(url) {
        return decodeUrl(decodeUrlPart(url));
    }
    function decodeUrlPart(url) {
        if (!url)
            url = window.location.href;
        if (!url.toLowerCase().startsWith(router.$basicUrl))
            throw new lib.Exception("location.href does not start with " + router.$basicUrl);
        return clearSlashes(url.substr(router.$basicUrl.length));
    }
    function decodeUrl(url) {
        if (!url)
            return null;
        return decodeUrlLow(url);
    }
    function createRoute(storeId, par, routeHookDefault, otherHooks) {
        var res = { storeId: storeId, par: par };
        if (routeHookDefault) {
            res.routeHookDefault = routeHookDefault;
            delete routeHookDefault.hookId;
        }
        if (otherHooks)
            for (var p in otherHooks) {
                var hk = res[p] = otherHooks[p];
                hk.hookId = p;
            }
        return res;
    }
    function getChildRoutePropNames(st) {
        var props = [];
        for (var p in st)
            if (routeParIgnores.indexOf(p) < 0)
                props.push(p);
        return props;
    }
    function decodeUrlLow(url) {
        if (!router.$isHashRouter)
            url = url.split('#')[0];
        url = '{' + url.replace(/\$\//g, '}').replace(/\//g, '{');
        var stack = [];
        var i = 0;
        var ch;
        var res = null;
        var parseRoute = function (endIdx, st) {
            var s = url.substring(st.openIdx, endIdx - 1);
            var parts = s.split(';');
            var propComp = parts[0].split('-');
            if (propComp.length > 2)
                throw new lib.Exception('propComp.length > 2');
            st.hookId = propComp.length == 1 ? null : propComp[0];
            st.route = { storeId: propComp.length == 1 ? propComp[0] : propComp[1] };
            for (var i_1 = 1; i_1 < parts.length; i_1++) {
                var nv = parts[i_1].split('=');
                if (!st.route.par)
                    st.route.par = {};
                st.route.par[nv[0]] = decodeURIComponent(nv[1]);
            }
        };
        while (true) {
            if (i >= url.length) {
                if (stack.length >= 1)
                    ch = '}';
                else
                    break;
                i = url.length + 1;
            }
            else {
                ch = url.charAt(i);
                i++;
            }
            switch (ch) {
                case '{':
                    if (stack.length == 0) {
                        res = { openIdx: i };
                        stack.push(res);
                        break;
                    } //root
                    var last = stack[stack.length - 1];
                    if (!last.route)
                        parseRoute(i, last); //zpracuj sekvenci mezi {xxxx{
                    stack.push({ openIdx: i }); //zacni novy stack
                    break;
                case '}':
                    if (stack.length == 0)
                        break;
                    var last2 = stack[stack.length - 1];
                    if (!last2.route)
                        parseRoute(i, last2); //zpracuj sekvenci mezi {xxxx}, xxx je bez { i }
                    var parProp = last2.hookId ? last2.hookId : routeHookDefaultName;
                    if (parProp != routeHookDefaultName)
                        last2.route.hookId = parProp;
                    //navazani na parent route
                    var par = stack[stack.length - 2];
                    if (par)
                        par.route[parProp] = last2.route;
                    //vyndej ze stacku
                    stack.splice(stack.length - 1, 1);
                    break;
            }
        }
        return res.route;
    }
    function encodeUrlLow(res, st, parentPropName) {
        res.push((parentPropName ? parentPropName + '-' : '') + (st.storeId ? st.storeId : ''));
        if (st.par) {
            var props = [];
            for (var p in st.par)
                props.push(p);
            props.sort().forEach(function (p) { return res.push(";" + p + "=" + encodeURIComponent(st.par[p])); });
        }
        getChildRoutePropNames(st).sort().forEach(function (p) {
            res.push('/');
            encodeUrlLow(res, st[p], p == routeHookDefaultName ? null : p);
            res.push('$/');
        });
    }
    function clearSlashes(path) { return path.replace(/\/$/, '').replace(/^[\#\/\?]?/, ''); }
})(router || (router = {}));
var site;
(function (site) {
    site.nodes = {};
    function bootApp() {
        function initNode(parent, nd) {
            nd.childs = nodeChilds(nd);
            nd.parent = parent;
            if (!nd.tab)
                nd.tab = nd.parent.tab;
            nd.path = getNodePath(nd);
            if (site.nodes[nd.path])
                throw new lib.Exception("SiteMap node " + nd.path + " already exists!");
            site.nodes[nd.path] = nd;
            if (nd.childs)
                nd.childs.forEach(function (n) { return initNode(nd, n); });
        }
        function initTabs() {
            site.tabs.$childs = [];
            var idx = 0;
            for (var p in site.tabs) {
                if (p.startsWith('$'))
                    continue;
                var t = site.tabs[p];
                site.tabs.$childs.push(t);
                t.idx = idx++;
                if (!t.rootNode)
                    throw new lib.Exception('!t.rootNode');
                t.rootNode.tab = t;
                if (!t.rootNode.title)
                    t.rootNode.title = t.title;
            }
        }
        initTabs();
        initNode(null, site.root);
    }
    site.bootApp = bootApp;
    function nodeParents(nd, ignoreSelf) {
        var res = {};
        nodeParentsLow(nd, res, ignoreSelf);
        return res.res.reverse();
    }
    site.nodeParents = nodeParents;
    //*********** Private
    function nodeChilds(nd) {
        var res = null;
        for (var p in nd) {
            var subNd = nd[p];
            if (!subNd /*|| !subNd.title*/ || !subNd.id)
                continue;
            if (!res)
                res = [subNd];
            else
                res.push(subNd);
        }
        return res;
    }
    function nodeParentsLow(nd, res, ignoreSelf) {
        if (!res.res)
            res.res = ignoreSelf ? [] : [nd];
        while (nd.parent) {
            nd = nd.parent;
            res.res.push(nd);
        }
    }
    function getNodePath(nd) { return nodeParents(nd).map(function (n) { return n.id; }).join('|').toLowerCase(); }
})(site || (site = {}));
var sitemapRouter;
(function (sitemapRouter) {
    sitemapRouter.childContextTypes = {
        site: React.PropTypes.object,
        route: React.PropTypes.object,
    };
    var AppRootComponent = (function (_super) {
        __extends(AppRootComponent, _super);
        function AppRootComponent(p, ctx) {
            _super.call(this, p, ctx);
            this.state = p.initRoute;
            rootComp = this;
        }
        AppRootComponent.prototype.render = function () {
            this.actNode = site.nodes[this.state.storeId.toLowerCase()];
            if (!this.actNode)
                throw new lib.Exception("Node path " + this.state.storeId + " not found");
            var res = (this.actNode.createPage ? this.actNode.createPage : site.getBlankPage)((this.state.par));
            return res;
        };
        AppRootComponent.prototype.getChildContext = function () {
            return {
                site: this.actNode,
                route: this.state
            };
        };
        AppRootComponent.childContextTypes = sitemapRouter.childContextTypes;
        return AppRootComponent;
    }(React.Component));
    sitemapRouter.AppRootComponent = AppRootComponent;
    function navigateUrl(node, par) { router.navigateUrl({ storeId: node.path, par: par }); }
    sitemapRouter.navigateUrl = navigateUrl;
    function doNavigate(node, ev, par) { router.doNavigate({ storeId: node.path, par: par }, ev); }
    sitemapRouter.doNavigate = doNavigate;
    function doNavigateTag(node, ev, par) {
        return React.createElement("a", {href: "#", key: node.path, onClick: function (ev) { return doNavigate(node, ev, par); }}, node.title);
    }
    sitemapRouter.doNavigateTag = doNavigateTag;
    function createElement(type, routePar, props) {
        var children = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            children[_i - 3] = arguments[_i];
        }
        var par = Object.assign(Object.assign({}, props), routePar);
        return React.createElement(type, par);
    }
    sitemapRouter.createElement = createElement;
    function bootApp(content, sitemapCreator) {
        sitemapCreator();
        site.bootApp();
        var startRoute = router.bootApp();
        ReactDOM.render(React.createElement(AppRootComponent, {initRoute: startRoute}), content);
    }
    sitemapRouter.bootApp = bootApp;
    //********** Private
    var rootComp;
    router.getStartRoute = function () { return { storeId: site.root.path }; };
    router.onRouteChanged = function (route) { if (rootComp)
        rootComp.setState(route); };
})(sitemapRouter || (sitemapRouter = {}));
var services;
(function (services) {
    function callRequest(methodPath, inPar) {
        return new Promise(function (resolve, reject) {
            var xmlhttp = new XMLHttpRequest();
            var url = methodPath + "/service.ashx?";
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    if (xmlhttp.status == 200) {
                        try {
                            var resp = xmlhttp.responseText;
                            var res = resp ? JSON.parse(resp) : null;
                            var error = res ? res.error : null;
                            if (error)
                                reject(error);
                            else
                                resolve(res);
                        }
                        catch (msg) {
                            reject("JSON exception " + msg + " at " + url);
                        }
                    }
                    else
                        reject("Status " + xmlhttp.status + " at " + url);
                }
            };
            xmlhttp.open('POST', url, true);
            xmlhttp.send(inPar ? JSON.stringify(inPar, null, 2) : '');
        });
    }
    services.callRequest = callRequest;
})(services || (services = {}));
var services;
(function (services) {
    var emailer;
    (function (emailer) {
        function sendEMail(email, completed) {
            email.isBodyHtml = typeof email.body != "string";
            if (email.isBodyHtml)
                email.body = ReactDOMServer.renderToStaticMarkup(email.body);
            services.callRequest('libs/service-emailer', email).then(function () { return completed(); }).catch(function (err) { throw new lib.Exception(err); });
        }
        emailer.sendEMail = sendEMail;
    })(emailer = services.emailer || (services.emailer = {}));
})(services || (services = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vTGliL2xpYnMvY29tbW9uL3JlYWN0LWRvbS1zZXJ2ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9jb21tb24vcmVhY3QtYm9vdHN0cmFwLnRzIiwiLi4vLi4vTGliL2xpYnMvY29tbW9uL2xpYi50c3giLCIuLi8uLi9MaWIvbGlicy9jb21tb24vZmxleC1ib3gudHN4IiwiLi4vLi4vTGliL2xpYnMvZmx1eC9yb3V0ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXAudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXAtcm91dGVyLnRzeCIsIi4uLy4uL0xpYi9saWJzL3NlcnZpY2VzL2NvbW1vbi50cyIsIi4uLy4uL0xpYi9saWJzL3NlcnZpY2UtZW1haWxlci9lbWFpbGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxJQUFJLGNBQWMsR0FBZSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztBQ0w5RixJQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQ3JDLElBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDckMsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUMvQixJQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDL0MsSUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUN6QyxJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO0FBQzdDLElBQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDbkMsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUMvQixJQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQy9CLElBQU0sSUFBSSxHQUFH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QixFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsU0FBUyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFNLE1BQU0sSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUgsQ0FBQztRQUplLGlCQUFTLFlBSXhCLENBQUE7SUFRSCxDQUFDLEVBdkJrQixPQUFPLEdBQVAsZ0JBQU8sS0FBUCxnQkFBTyxRQXVCekI7QUFBRCxDQUFDLEVBdkJTLFFBQVEsS0FBUixRQUFRLFFBdUJqQiIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJRE9NU2VydmVyIHtcclxuICByZW5kZXJUb1N0cmluZyhlbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pik6IHN0cmluZztcclxuICByZW5kZXJUb1N0YXRpY01hcmt1cChlbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pik6IHN0cmluZztcclxufVxyXG5cclxudmFyIFJlYWN0RE9NU2VydmVyOiBJRE9NU2VydmVyID0gUmVhY3RbJ19fU0VDUkVUX0RPTV9TRVJWRVJfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCddOyIsImNvbnN0IEJ1dHRvbiA9IFJlYWN0Qm9vdHN0cmFwLkJ1dHRvbjsgXHJcbmNvbnN0IE5hdmJhciA9IFJlYWN0Qm9vdHN0cmFwLk5hdmJhcjsgXHJcbmNvbnN0IE5hdiA9IFJlYWN0Qm9vdHN0cmFwLk5hdjsgXHJcbmNvbnN0IE5hdkl0ZW0gPSBSZWFjdEJvb3RzdHJhcC5OYXZJdGVtOyBcclxuY29uc3QgTmF2RHJvcGRvd24gPSBSZWFjdEJvb3RzdHJhcC5OYXZEcm9wZG93bjtcclxuY29uc3QgTWVudUl0ZW0gPSBSZWFjdEJvb3RzdHJhcC5NZW51SXRlbTtcclxuY29uc3QgQnJlYWRjcnVtYiA9IFJlYWN0Qm9vdHN0cmFwLkJyZWFkY3J1bWI7XHJcbmNvbnN0IE1vZGFsID0gUmVhY3RCb290c3RyYXAuTW9kYWw7XHJcbmNvbnN0IENvbCA9IFJlYWN0Qm9vdHN0cmFwLkNvbDtcclxuY29uc3QgUm93ID0gUmVhY3RCb290c3RyYXAuUm93O1xyXG5jb25zdCBHcmlkID0gUmVhY3RCb290c3RyYXAuR3JpZDtcclxuY29uc3QgQ2xlYXJmaXggPSBSZWFjdEJvb3RzdHJhcC5DbGVhcmZpeDtcclxuY29uc3QgTGFiZWwgPSBSZWFjdEJvb3RzdHJhcC5MYWJlbDtcclxuY29uc3QgUGFuZWwgPSBSZWFjdEJvb3RzdHJhcC5QYW5lbDtcclxuY29uc3QgUGFuZWxHcm91cCA9IFJlYWN0Qm9vdHN0cmFwLlBhbmVsR3JvdXA7XHJcbmNvbnN0IEZvcm1Hcm91cCA9IFJlYWN0Qm9vdHN0cmFwLkZvcm1Hcm91cDtcclxuY29uc3QgSGVscEJsb2NrID0gUmVhY3RCb290c3RyYXAuSGVscEJsb2NrO1xyXG5jb25zdCBGb3JtQ29udHJvbCA9IFJlYWN0Qm9vdHN0cmFwLkZvcm1Db250cm9sO1xyXG5jb25zdCBDb250cm9sTGFiZWwgPSBSZWFjdEJvb3RzdHJhcC5Db250cm9sTGFiZWw7XHJcbmNvbnN0IEFjY29yZGlvbiA9IFJlYWN0Qm9vdHN0cmFwLkFjY29yZGlvbjtcclxuY29uc3QgUmFkaW8gPSBSZWFjdEJvb3RzdHJhcC5SYWRpbztcclxuXHJcblxyXG5cclxuXHJcbiIsIm5hbWVzcGFjZSBsaWIge1xyXG4gIGV4cG9ydCBjbGFzcyBFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2c6IHN0cmluZykge1xyXG4gICAgICBzdXBlcihtc2cpO1xyXG4gICAgICBkZWJ1Z2dlcjtcclxuICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgY2xhc3MgRU5vdEltcGxlbWVudGVkIGV4dGVuZHMgRXhjZXB0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG1zZz86IHN0cmluZykgeyBzdXBlcihgTWlzc2luZyAke21zZ30gb3ZlcnJpZGVgKTsgfVxyXG4gIH1cclxuICBleHBvcnQgdHlwZSBUQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKGNvbnN0cnVjdG9yOiBGdW5jdGlvbik6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzID0gY29uc3RydWN0b3JbJ25hbWUnXTsgaWYgKHJlcykgcmV0dXJuIHJlcztcclxuICAgIGxldCBhcnIgPSBjb25zdHJ1Y3Rvci50b1N0cmluZygpLm1hdGNoKC9mdW5jdGlvblxccyooXFx3KykvKTtcclxuICAgIHJldHVybiBhcnIgJiYgYXJyLmxlbmd0aCA9PSAyID8gYXJyWzFdIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50UHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlcyB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGtleT86IGFueTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZUV4dCh1cmw6IHN0cmluZywgdGl0bGU6IHN0cmluZywgbmV3V2luZG93PzogYm9vbGVhbik6IEpTWC5FbGVtZW50IHtcclxuICAgIHJldHVybiA8YSBocmVmPXt1cmx9IHRhcmdldD17bmV3V2luZG93ID8gJ19ibGFuaycgOiAnX3NlbGYnfT48aSBjbGFzc05hbWU9J2ZhIGZhLWV4dGVybmFsLWxpbmsnPjwvaT4ge3RpdGxlfTwvYT47XHJcbiAgfVxyXG5cclxuICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzYxNjQ2MS9nZW5lcmF0ZS1hLWhhc2gtZnJvbS1zdHJpbmctaW4tamF2YXNjcmlwdC1qcXVlcnlcclxuICAvL2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfaGFzaF9mdW5jdGlvbnNcclxuICAvKipcclxuICogQ2FsY3VsYXRlIGEgMzIgYml0IEZOVi0xYSBoYXNoXHJcbiAqIEZvdW5kIGhlcmU6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3ZhaW9yYWJiaXQvNTY1NzU2MVxyXG4gKiBSZWYuOiBodHRwOi8vaXN0aGUuY29tL2Nob25nby90ZWNoL2NvbXAvZm52L1xyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIHRoZSBpbnB1dCB2YWx1ZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthc1N0cmluZz1mYWxzZV0gc2V0IHRvIHRydWUgdG8gcmV0dXJuIHRoZSBoYXNoIHZhbHVlIGFzIFxyXG4gKiAgICAgOC1kaWdpdCBoZXggc3RyaW5nIGluc3RlYWQgb2YgYW4gaW50ZWdlclxyXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtzZWVkXSBvcHRpb25hbGx5IHBhc3MgdGhlIGhhc2ggb2YgdGhlIHByZXZpb3VzIGNodW5rXHJcbiAqIEByZXR1cm5zIHtpbnRlZ2VyIHwgc3RyaW5nfVxyXG4gKi9cclxuICBleHBvcnQgZnVuY3Rpb24gaGFzaChzdHI6IHN0cmluZywgYXNTdHJpbmc/OiBib29sZWFuLCBzZWVkPzogbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcclxuICAgIC8qanNoaW50IGJpdHdpc2U6ZmFsc2UgKi9cclxuICAgIGxldCBpLCBsLCBodmFsID0gKHNlZWQgPT09IHVuZGVmaW5lZCkgPyAweDgxMWM5ZGM1IDogc2VlZDtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBodmFsIF49IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICBodmFsICs9IChodmFsIDw8IDEpICsgKGh2YWwgPDwgNCkgKyAoaHZhbCA8PCA3KSArIChodmFsIDw8IDgpICsgKGh2YWwgPDwgMjQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFzU3RyaW5nKSByZXR1cm4gKFwiMDAwMDAwMFwiICsgKGh2YWwgPj4+IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC04KTsgLy8gQ29udmVydCB0byA4IGRpZ2l0IGhleCBzdHJpbmdcclxuICAgIGVsc2UgcmV0dXJuIGh2YWwgPj4+IDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy9EOlxcTE1Db21cXHJld1xcV2ViNC5zbG4sIGQ6XFxMTUNvbVxccmV3XFxhbmd1bGFyLWRlZmluaXRlbHl0eXBlZFxcYW5ndWxhcjJcXHNyY1xcY29tcGlsZXJcXHV0aWwudHNcclxuICB2YXIgQ0FNRUxfQ0FTRV9SRUdFWFAgPSAvKFtBLVpdKS9nO1xuICB2YXIgREFTSF9DQVNFX1JFR0VYUCA9IC8tKFthLXpdKS9nO1xuICBleHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9EYXNoQ2FzZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHJlcGxhY2VBbGxNYXBwZWQoaW5wdXQsIENBTUVMX0NBU0VfUkVHRVhQLCBtID0+ICctJyArIG1bMV0udG9Mb3dlckNhc2UoKSk7IH1cbiAgZXhwb3J0IGZ1bmN0aW9uIGRhc2hDYXNlVG9DYW1lbENhc2UoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiByZXBsYWNlQWxsTWFwcGVkKGlucHV0LCBEQVNIX0NBU0VfUkVHRVhQLCBtID0+IG1bMV0udG9VcHBlckNhc2UoKSk7IH1cblxyXG4gIC8vRDpcXExNQ29tXFxyZXdcXFdlYjQuc2xuLCBkOlxcTE1Db21cXHJld1xcYW5ndWxhci1kZWZpbml0ZWx5dHlwZWRcXGFuZ3VsYXIyXFxzcmNcXGZhY2FkZVxcbGFuZy50c1xyXG4gIGZ1bmN0aW9uIHJlcGxhY2VBbGxNYXBwZWQoczogc3RyaW5nLCBmcm9tOiBSZWdFeHAsIGNiOiBGdW5jdGlvbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHMucmVwbGFjZShmcm9tLCBmdW5jdGlvbiAoLi4ubWF0Y2hlcykge1xuICAgICAgLy8gUmVtb3ZlIG9mZnNldCAmIHN0cmluZyBmcm9tIHRoZSByZXN1bHQgYXJyYXlcbiAgICAgIG1hdGNoZXMuc3BsaWNlKC0yLCAyKTtcbiAgICAgIC8vIFRoZSBjYWxsYmFjayByZWNlaXZlcyBtYXRjaCwgcDEsIC4uLiwgcG5cbiAgICAgIHJldHVybiBjYihtYXRjaGVzKTtcbiAgICB9KTtcbiAgfVxyXG5cclxufSIsIi8vZGVjbGFyZSBuYW1lc3BhY2UgX19SZWFjdCB7XHJcbi8vICBpbnRlcmZhY2UgQ1NTUHJvcGVydGllcyB7XHJcbi8vICAgIGZsZXhXcmFwPzogc3RyaW5nO1xyXG4vLyAgfVxyXG4vL31cclxuZW51bSBmbGV4IHtcclxuICBmbGV4LFxyXG5cclxuICBqdXN0aWZ5U3BhY2VCZXR3ZWVuLFxyXG4gIGp1c3RpZnlTcGFjZUFyb3VuZCxcclxuICBqdXN0aWZ5RW5kLFxyXG4gIGp1c3RpZnlTdGFydCxcclxuICBqdXN0aWZ5Q2VudGVyLFxyXG5cclxuICBhbGlnblNlbGZFbmQsXHJcbiAgYWxpZ25TZWxmU3RhcnQsXHJcbiAgYWxpZ25TZWxmQXV0byxcclxuICBhbGlnblNlbGZDZW50ZXIsXHJcbiAgYWxpZ25TZWxmQmFzZWxpbmUsXHJcbiAgYWxpZ25TZWxmU3RyZXRjaCxcclxuXHJcbiAgYWxpZ25Db250ZW50RW5kLFxyXG4gIGFsaWduQ29udGVudFN0YXJ0LFxyXG4gIGFsaWduQ29udGVudENlbnRlcixcclxuICBhbGlnbkNvbnRlbnRTdHJldGNoLFxyXG4gIGFsaWduQ29udGVudFNwYWNlQXJvdW5kLFxyXG4gIGFsaWduQ29udGVudFNwYWNlQmV0d2VlbixcclxuXHJcbiAgYWxpZ25JdGVtc1N0YXJ0LFxyXG4gIGFsaWduSXRlbXNFbmQsXHJcbiAgYWxpZ25JdGVtc0NlbnRlcixcclxuICBhbGlnbkl0ZW1zQmFzZWxpbmUsXHJcbiAgYWxpZ25JdGVtc1N0cmV0Y2gsXHJcblxyXG4gIGRpcmVjdGlvblJvdyxcclxuICBkaXJlY3Rpb25Sb3dSZXZlcnNlLFxyXG4gIGRpcmVjdGlvbkNvbHVtbixcclxuICBkaXJlY3Rpb25Db2x1bW5SZXZlcnNlLFxyXG5cclxuICB3cmFwTm93cmFwLFxyXG4gIHdyYXBXcmFwLFxyXG4gIHdyYXBXcmFwUmV2ZXJzZSxcclxuXHJcbiAgb3JkZXIwLFxyXG4gIG9yZGVyMSxcclxuICBvcmRlcjIsXHJcbiAgb3JkZXIzLFxyXG4gIG9yZGVyNCxcclxuICBvcmRlcjUsXHJcbiAgb3JkZXI2LFxyXG4gIG9yZGVyNyxcclxuICBvcmRlcjgsXHJcbiAgb3JkZXI5LFxyXG5cclxuICBncm93MCxcclxuICBncm93MSxcclxuICBncm93MixcclxuICBncm93MyxcclxuICBncm93NCxcclxuICBncm93NSxcclxuICBncm93NixcclxuICBncm93NyxcclxuICBncm93OCxcclxuICBncm93OSxcclxuXHJcbn1cclxuZnVuY3Rpb24gZmxleENsYXNzKGNsc3M6IEFycmF5PGZsZXg+KTogc3RyaW5nIHtcclxuICBpZiAoIWNsc3MgfHwgY2xzcy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgdmFyIHJlczogQXJyYXk8U3RyaW5nPiA9IFtdO1xyXG4gIGNsc3MuZm9yRWFjaChjID0+IHJlcy5wdXNoKCdmbGV4LScgKyBsaWIuY2FtZWxDYXNlVG9EYXNoQ2FzZShmbGV4W2NdKSkpO1xyXG4gIHJldHVybiByZXMuam9pbignICcpO1xyXG59XHJcblxyXG4vL3ZhciB4ID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZmxleENsYXNzKFtmbGV4Lmp1c3RpZnlDZW50ZXIsIGZsZXguYWxpZ25Db250ZW50Q2VudGVyLCBmbGV4Lm9yZGVyM10pKX0+PC9kaXY+KVxyXG4vL2FsZXJ0KHgpOyIsIm5hbWVzcGFjZSByb3V0ZXIge1xyXG5cclxuICAvL2RpZm90bmkgcm91dGUgcHJvIHByaXBhZCwgemUgamUgVVJMIHByYXpkbmFcclxuICBleHBvcnQgdmFyIGdldFN0YXJ0Um91dGU6ICgpID0+IFRSb3V0ZUFjdGlvblBhcjsgXHJcblxyXG4gIC8vYm9vdCByb3V0ZXJ1XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGJvb3RBcHAoKTogVFJvdXRlQWN0aW9uUGFyIHsgcmV0dXJuIHJvb3RSb3V0ZUJpbmQoZGVjb2RlRnVsbFVybCgpLCBmYWxzZSk7IH1cclxuXHJcbiAgLy9uYXZpZ2FjZSBuYSByb3V0ZVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBkb05hdmlnYXRlKHJvdXRlczogVFJvdXRlQWN0aW9uUGFyLCBldj86IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSB7IGlmIChldikgZXYucHJldmVudERlZmF1bHQoKTsgcmV0dXJuIHJvb3RSb3V0ZUJpbmQocm91dGVzLCB0cnVlKTsgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVVybChyb3V0ZXM6IFRSb3V0ZUFjdGlvblBhcik6IHN0cmluZyB7IHJldHVybiBlbmNvZGVGdWxsVXJsKHJvdXRlcyk7IH1cclxuXHJcbiAgLy9yb3V0ZSBjaGFuZ2VkIG5vdGlmaWNhdGlvblxyXG4gIGV4cG9ydCB2YXIgb25Sb3V0ZUNoYW5nZWQ6IChyb3V0ZTogVFJvdXRlQWN0aW9uUGFyKSA9PiB2b2lkO1xyXG5cclxuICAvL2NvbmZpZ1xyXG4gIGV4cG9ydCB2YXIgJGlzSGFzaFJvdXRlciA9IGZhbHNlOyAvL2hhc2ggb3Igc2xhc2ggcm91dGUgZGVsaW1pdGVyXHJcbiAgZXhwb3J0IHZhciAkYmFzaWNVcmwgPSBnZXRCYXNpY1VybCh3aW5kb3cubG9jYXRpb24uaHJlZik7IC8vY2FzdCBVUkwgcHJlZCByb3V0ZSBwYXJhbWF0dGVyXHJcblxyXG4gIC8vcm9vdXRlIG9iamVrdCBzdHJ1Y3R1cmVcclxuICBleHBvcnQgaW50ZXJmYWNlIFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBzdG9yZUlkPzogc3RyaW5nO1xyXG4gICAgaG9va0lkPzogc3RyaW5nOyAvL25hemV2IHByb3BlcnR5IHYgaG9vay5wYXJlbnQgU3RvcmUsIG9ic2FodWppY2kgUm91dGVIb29rRGlzcGF0Y2hlci4gIWhvb2tJZCA9PiByb3V0ZURlZmF1bHRQcm9wTmFtZSBwcm9wZXJ0eVxyXG4gICAgcGFyPzoge307IC8vPHN0b3JlSWQ+LnJvdXRlQWN0aW9uKHBhciwgaG9va0lkKVxyXG4gICAgcm91dGVIb29rRGVmYXVsdD86IFRSb3V0ZUFjdGlvblBhcjsgLy9kaWZvdG5pIGNoaWxkIHJvdXRlIGhvb2tcclxuICAgIC8vLi4uIGRhbHNpLCBuYW1lZCByb3V0ZSBob29rXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8qKioqKioqKioqKioqKioqKiByZWZyZXNoIHZpZXcgb24gcm91dGUgY2hhbmdlXHJcbiAgLy9ha3R1YWxuaSByb3V0ZSBvYmpla3RcclxuICAvL3ZhciByb3V0ZTogVFJvdXRlQWN0aW9uUGFyO1xyXG5cclxuICBmdW5jdGlvbiByb290Um91dGVCaW5kKHJvdXRlczogVFJvdXRlQWN0aW9uUGFyIC8qbnVsbCA9PiBzdGFydCByb3V0ZSovLCB3aXRoUHVzdFN0YXRlOiBib29sZWFuKTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIGlmICghcm91dGVzKSByb3V0ZXMgPSBnZXRTdGFydFJvdXRlID8gZ2V0U3RhcnRSb3V0ZSgpIDogbnVsbDsgaWYgKCFyb3V0ZXMpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBtaXNzaW5nIHJvdXRlc2ApO1xyXG4gICAgLy9yb3V0ZSA9IHJvdXRlcztcclxuICAgIGlmIChvblJvdXRlQ2hhbmdlZCkgb25Sb3V0ZUNoYW5nZWQocm91dGVzKTtcclxuICAgIGlmICh3aXRoUHVzdFN0YXRlKSBwdXNoU3RhdGUocm91dGVzKTtcclxuICAgIHJldHVybiByb3V0ZXM7XHJcbiAgfVxyXG5cclxuICAvLyoqKioqKioqKioqKioqKioqIFBPUFNUQVRFIEVWRU5UXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBldiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgPiBwb3BzdGF0ZTogJHt3aW5kb3cubG9jYXRpb24uaHJlZn1gKTtcclxuICAgIHJvb3RSb3V0ZUJpbmQoZGVjb2RlRnVsbFVybCgpLCBmYWxzZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vbW9kaWZ5IGJyb3dzZXIgVVJMXHJcbiAgZnVuY3Rpb24gcHVzaFN0YXRlKHJvdXRlOiBUUm91dGVBY3Rpb25QYXIpIHtcclxuICAgIGxldCB1cmxTdHIgPSBlbmNvZGVGdWxsVXJsKHJvdXRlKTtcclxuICAgIGNvbnNvbGUubG9nKGA+IHB1c2hTdGF0ZTogJHt1cmxTdHJ9YCk7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmxTdHIpO1xyXG4gIH1cclxuXHJcbiAgLy9yb3V0YSBwYXJzIGFyZSBhZnRlciBcIi5odG1sXCIgdXJsIHBhcnRcclxuICBmdW5jdGlvbiBnZXRCYXNpY1VybChzdGFydFVybDogc3RyaW5nKTogc3RyaW5nIHsgbGV0IGlkeCA9IHN0YXJ0VXJsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignLmh0bWwnKTsgcmV0dXJuIGlkeCA+PSAwID8gc3RhcnRVcmwuc3Vic3RyKDAsIGlkeCArIDUpIDogc3RhcnRVcmw7IH1cclxuXHJcbiAgdmFyIHJvdXRlUGFySWdub3JlcyA9IFsnc3RvcmVJZCcsICdob29rSWQnLCAncGFyJ107XHJcbiAgdmFyIHJvdXRlSG9va0RlZmF1bHROYW1lID0gJ3JvdXRlSG9va0RlZmF1bHQnO1xyXG5cclxuICBmdW5jdGlvbiBlbmNvZGVVcmwoc3Q6IFRSb3V0ZUFjdGlvblBhcik6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBlbmNvZGVVcmxMb3cocmVzLCBzdCwgbnVsbCk7XHJcbiAgICBsZXQgdXJsID0gcmVzLmpvaW4oJycpO1xyXG4gICAgcmV0dXJuIGNsZWFyU2xhc2hlcyh1cmwucmVwbGFjZSgvKFxcJFxcLykqJC9nLCAnJykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZW5jb2RlRnVsbFVybChzdDogVFJvdXRlQWN0aW9uUGFyKTogc3RyaW5nIHtcclxuICAgIGxldCB1cmxTdHIgPSBzdCA/IGVuY29kZVVybChzdCkgOiBudWxsO1xyXG4gICAgLy9yZXR1cm4gJGJhc2ljVXJsICsgKHVybFN0ciA/ICgkaXNIYXNoUm91dGVyID8gJyMnIDogJy8nKSArIHVybFN0ciA6ICcnKTtcclxuICAgIHJldHVybiAkYmFzaWNVcmwgKyAodXJsU3RyID8gKCRpc0hhc2hSb3V0ZXIgPyAnIycgOiAnPycpICsgdXJsU3RyIDogJycpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlRnVsbFVybCh1cmw/OiBzdHJpbmcpOiBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgcmV0dXJuIGRlY29kZVVybChkZWNvZGVVcmxQYXJ0KHVybCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlVXJsUGFydCh1cmw/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgaWYgKCF1cmwudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCRiYXNpY1VybCkpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBsb2NhdGlvbi5ocmVmIGRvZXMgbm90IHN0YXJ0IHdpdGggJHskYmFzaWNVcmx9YCk7XHJcbiAgICByZXR1cm4gY2xlYXJTbGFzaGVzKHVybC5zdWJzdHIoJGJhc2ljVXJsLmxlbmd0aCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlVXJsKHVybD86IHN0cmluZyk6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBpZiAoIXVybCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gZGVjb2RlVXJsTG93KHVybCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVSb3V0ZShzdG9yZUlkOiBzdHJpbmcsIHBhcj86IHt9LCByb3V0ZUhvb2tEZWZhdWx0PzogVFJvdXRlQWN0aW9uUGFyLCBvdGhlckhvb2tzPzogeyBbbmFtZTogc3RyaW5nXTogVFJvdXRlQWN0aW9uUGFyOyB9KTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIGxldCByZXM6IFRSb3V0ZUFjdGlvblBhciA9IHsgc3RvcmVJZDogc3RvcmVJZCwgcGFyOiBwYXIgfTtcclxuICAgIGlmIChyb3V0ZUhvb2tEZWZhdWx0KSB7IHJlcy5yb3V0ZUhvb2tEZWZhdWx0ID0gcm91dGVIb29rRGVmYXVsdDsgZGVsZXRlIHJvdXRlSG9va0RlZmF1bHQuaG9va0lkOyB9XHJcbiAgICBpZiAob3RoZXJIb29rcylcclxuICAgICAgZm9yIChsZXQgcCBpbiBvdGhlckhvb2tzKSB7IGxldCBoayA9IHJlc1twXSA9IG90aGVySG9va3NbcF07IGhrLmhvb2tJZCA9IHA7IH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDaGlsZFJvdXRlUHJvcE5hbWVzKHN0OiBUUm91dGVBY3Rpb25QYXIpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIGxldCBwcm9wcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgcCBpbiBzdCkgaWYgKHJvdXRlUGFySWdub3Jlcy5pbmRleE9mKHApIDwgMCkgcHJvcHMucHVzaChwKTtcclxuICAgIHJldHVybiBwcm9wcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlY29kZVVybExvdyh1cmw6IHN0cmluZyk6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBpZiAoISRpc0hhc2hSb3V0ZXIpIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xyXG4gICAgdXJsID0gJ3snICsgdXJsLnJlcGxhY2UoL1xcJFxcLy9nLCAnfScpLnJlcGxhY2UoL1xcLy9nLCAneycpO1xyXG4gICAgbGV0IHN0YWNrOiBBcnJheTxJRGVjb2RlU3RhY2s+ID0gW107IGxldCBpID0gMDsgbGV0IGNoOiBzdHJpbmc7IGxldCByZXM6IElEZWNvZGVTdGFjayA9IG51bGw7XHJcbiAgICBsZXQgcGFyc2VSb3V0ZSA9IChlbmRJZHg6IG51bWJlciwgc3Q6IElEZWNvZGVTdGFjaykgPT4ge1xyXG4gICAgICBsZXQgcyA9IHVybC5zdWJzdHJpbmcoc3Qub3BlbklkeCwgZW5kSWR4IC0gMSk7XHJcbiAgICAgIGxldCBwYXJ0cyA9IHMuc3BsaXQoJzsnKTtcclxuICAgICAgbGV0IHByb3BDb21wID0gcGFydHNbMF0uc3BsaXQoJy0nKTsgaWYgKHByb3BDb21wLmxlbmd0aCA+IDIpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKCdwcm9wQ29tcC5sZW5ndGggPiAyJyk7XHJcbiAgICAgIHN0Lmhvb2tJZCA9IHByb3BDb21wLmxlbmd0aCA9PSAxID8gbnVsbCA6IHByb3BDb21wWzBdO1xyXG4gICAgICBzdC5yb3V0ZSA9IHsgc3RvcmVJZDogcHJvcENvbXAubGVuZ3RoID09IDEgPyBwcm9wQ29tcFswXSA6IHByb3BDb21wWzFdIH07XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBudiA9IHBhcnRzW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgaWYgKCFzdC5yb3V0ZS5wYXIpIHN0LnJvdXRlLnBhciA9IHt9O1xyXG4gICAgICAgIHN0LnJvdXRlLnBhcltudlswXV0gPSBkZWNvZGVVUklDb21wb25lbnQobnZbMV0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgaWYgKGkgPj0gdXJsLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPj0gMSkgY2ggPSAnfSc7IGVsc2UgYnJlYWs7XHJcbiAgICAgICAgaSA9IHVybC5sZW5ndGggKyAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoID0gdXJsLmNoYXJBdChpKTsgaSsrO1xyXG4gICAgICB9XHJcbiAgICAgIHN3aXRjaCAoY2gpIHtcclxuICAgICAgICBjYXNlICd7JzpcclxuICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggPT0gMCkgeyByZXMgPSB7IG9wZW5JZHg6IGkgfTsgc3RhY2sucHVzaChyZXMpOyBicmVhazsgfSAvL3Jvb3RcclxuICAgICAgICAgIGxldCBsYXN0ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBpZiAoIWxhc3Qucm91dGUpIHBhcnNlUm91dGUoaSwgbGFzdCk7IC8venByYWN1aiBzZWt2ZW5jaSBtZXppIHt4eHh4e1xyXG4gICAgICAgICAgc3RhY2sucHVzaCh7IG9wZW5JZHg6IGkgfSk7IC8vemFjbmkgbm92eSBzdGFja1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnfSc6XHJcbiAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID09IDApIGJyZWFrO1xyXG4gICAgICAgICAgbGV0IGxhc3QyID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBpZiAoIWxhc3QyLnJvdXRlKSBwYXJzZVJvdXRlKGksIGxhc3QyKTsgLy96cHJhY3VqIHNla3ZlbmNpIG1lemkge3h4eHh9LCB4eHggamUgYmV6IHsgaSB9XHJcbiAgICAgICAgICBsZXQgcGFyUHJvcCA9IGxhc3QyLmhvb2tJZCA/IGxhc3QyLmhvb2tJZCA6IHJvdXRlSG9va0RlZmF1bHROYW1lO1xyXG4gICAgICAgICAgaWYgKHBhclByb3AgIT0gcm91dGVIb29rRGVmYXVsdE5hbWUpIGxhc3QyLnJvdXRlLmhvb2tJZCA9IHBhclByb3A7XHJcbiAgICAgICAgICAvL25hdmF6YW5pIG5hIHBhcmVudCByb3V0ZVxyXG4gICAgICAgICAgbGV0IHBhciA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDJdO1xyXG4gICAgICAgICAgaWYgKHBhcikgcGFyLnJvdXRlW3BhclByb3BdID0gbGFzdDIucm91dGU7XHJcbiAgICAgICAgICAvL3Z5bmRlaiB6ZSBzdGFja3VcclxuICAgICAgICAgIHN0YWNrLnNwbGljZShzdGFjay5sZW5ndGggLSAxLCAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnJvdXRlO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJmYWNlIElEZWNvZGVTdGFjayB7XHJcbiAgICBvcGVuSWR4OiBudW1iZXI7XHJcbiAgICByb3V0ZT86IFRSb3V0ZUFjdGlvblBhcjtcclxuICAgIGhvb2tJZD86IHN0cmluZztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVuY29kZVVybExvdyhyZXM6IEFycmF5PHN0cmluZz4sIHN0OiBUUm91dGVBY3Rpb25QYXIsIHBhcmVudFByb3BOYW1lPzogc3RyaW5nKSB7XHJcbiAgICByZXMucHVzaCgocGFyZW50UHJvcE5hbWUgPyBwYXJlbnRQcm9wTmFtZSArICctJyA6ICcnKSArIChzdC5zdG9yZUlkID8gc3Quc3RvcmVJZCA6ICcnKSk7XHJcbiAgICBpZiAoc3QucGFyKSB7XHJcbiAgICAgIGxldCBwcm9wcyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBwIGluIHN0LnBhcikgcHJvcHMucHVzaChwKTtcclxuICAgICAgcHJvcHMuc29ydCgpLmZvckVhY2gocCA9PiByZXMucHVzaChgOyR7cH09JHtlbmNvZGVVUklDb21wb25lbnQoc3QucGFyW3BdKX1gKSk7XHJcbiAgICB9XHJcbiAgICBnZXRDaGlsZFJvdXRlUHJvcE5hbWVzKHN0KS5zb3J0KCkuZm9yRWFjaChwID0+IHtcclxuICAgICAgcmVzLnB1c2goJy8nKTtcclxuICAgICAgZW5jb2RlVXJsTG93KHJlcywgc3RbcF0sIHAgPT0gcm91dGVIb29rRGVmYXVsdE5hbWUgPyBudWxsIDogcCk7XHJcbiAgICAgIHJlcy5wdXNoKCckLycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhclNsYXNoZXMocGF0aDogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKS5yZXBsYWNlKC9eW1xcI1xcL1xcP10/LywgJycpOyB9XHJcbn0iLCJuYW1lc3BhY2Ugc2l0ZSB7XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSU5vZGUge1xyXG4gICAgaWQ6IHN0cmluZyB8IG51bWJlcjtcclxuICAgIHRpdGxlPzogc3RyaW5nOyAvL2NoeWJpLWxpLCB2ZXptZSBzZSB6IElUYWIudGl0bGUgXHJcbiAgICBiclRpdGxlPzpzdHJpbmc7IC8vdGl0bGUgcHJvIGJyZWFkY3J1bWJcclxuICAgIGNyZWF0ZVBhZ2U6IChyb3V0ZVBhcikgPT4gSlNYLkVsZW1lbnQsXHJcbiAgICBwYXRoPzogc3RyaW5nO1xyXG4gICAgY2hpbGRzPzogQXJyYXk8SU5vZGU+O1xyXG4gICAgcGFyZW50PzogSU5vZGU7XHJcbiAgICBsYXJnZUxvZ28/OiBib29sZWFuOyAvL3ZlbGtlIGxvZ28gdiBjaGxhZGljaVxyXG4gICAgdGFiPzogSVRhYjsgLy9teSB0YWJcclxuICAgIG5vVGl0bGU/OmJvb2xlYW47IC8vcGFnZSB0ZW1wbGF0ZSBuZWdlbmVydWplIHRpdGxlIHN0cmFua3lcclxuICB9XHJcbiAgZXhwb3J0IHZhciByb290OiBJTm9kZTtcclxuICBleHBvcnQgdmFyIG5vZGVzOiB7IFtwYXRoOiBzdHJpbmddOiBJTm9kZTsgfSA9IHt9O1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gYm9vdEFwcCgpIHtcclxuICAgIGZ1bmN0aW9uIGluaXROb2RlKHBhcmVudDogSU5vZGUsIG5kOiBJTm9kZSkge1xyXG4gICAgICBuZC5jaGlsZHMgPSBub2RlQ2hpbGRzKG5kKTtcclxuICAgICAgbmQucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICBpZiAoIW5kLnRhYikgbmQudGFiID0gbmQucGFyZW50LnRhYjtcclxuICAgICAgbmQucGF0aCA9IGdldE5vZGVQYXRoKG5kKTtcclxuICAgICAgaWYgKG5vZGVzW25kLnBhdGhdKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihgU2l0ZU1hcCBub2RlICR7bmQucGF0aH0gYWxyZWFkeSBleGlzdHMhYCk7XHJcbiAgICAgIG5vZGVzW25kLnBhdGhdID0gbmQ7XHJcbiAgICAgIGlmIChuZC5jaGlsZHMpIG5kLmNoaWxkcy5mb3JFYWNoKG4gPT4gaW5pdE5vZGUobmQsIG4pKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGluaXRUYWJzKCkge1xyXG4gICAgICB0YWJzLiRjaGlsZHMgPSBbXTsgdmFyIGlkeCA9IDA7XHJcbiAgICAgIGZvciAodmFyIHAgaW4gdGFicykge1xyXG4gICAgICAgIGlmIChwLnN0YXJ0c1dpdGgoJyQnKSkgY29udGludWU7XHJcbiAgICAgICAgdmFyIHQ6IElUYWIgPSB0YWJzW3BdOyB0YWJzLiRjaGlsZHMucHVzaCh0KTsgdC5pZHggPSBpZHgrKztcclxuICAgICAgICBpZiAoIXQucm9vdE5vZGUpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKCchdC5yb290Tm9kZScpO1xyXG4gICAgICAgIHQucm9vdE5vZGUudGFiID0gdDtcclxuICAgICAgICBpZiAoIXQucm9vdE5vZGUudGl0bGUpIHQucm9vdE5vZGUudGl0bGUgPSB0LnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbml0VGFicygpO1xyXG4gICAgaW5pdE5vZGUobnVsbCwgcm9vdCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbm9kZVBhcmVudHMobmQ6IElOb2RlLCBpZ25vcmVTZWxmPzogYm9vbGVhbik6IEFycmF5PElOb2RlPiB7XHJcbiAgICB2YXIgcmVzOiBub2RlUGFyZW50c1Jlc3VsdCA9IHt9O1xyXG4gICAgbm9kZVBhcmVudHNMb3cobmQsIHJlcywgaWdub3JlU2VsZik7XHJcbiAgICByZXR1cm4gcmVzLnJlcy5yZXZlcnNlKCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElUYWJzIHtcclxuICAgICRjaGlsZHM/OiBBcnJheTxJVGFiPjtcclxuICB9XHJcbiAgZXhwb3J0IGludGVyZmFjZSBJVGFiIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpZHg/OiBudW1iZXI7XHJcbiAgICByb290Tm9kZT86IElOb2RlOyAvL2hsYXZuaSBzdHJhbmthIHBybyB0YWJcclxuICB9XHJcbiAgZXhwb3J0IHZhciB0YWJzOiBJVGFicztcclxuXHJcbiAgZXhwb3J0IHZhciBnZXRCbGFua1BhZ2U6IChyb3V0ZVBhcikgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIC8vKioqKioqKioqKiogUHJpdmF0ZVxyXG5cclxuICBmdW5jdGlvbiBub2RlQ2hpbGRzKG5kOiBJTm9kZSk6IEFycmF5PElOb2RlPiB7XHJcbiAgICB2YXIgcmVzOiBBcnJheTxJTm9kZT4gPSBudWxsO1xyXG4gICAgZm9yICh2YXIgcCBpbiBuZCkge1xyXG4gICAgICB2YXIgc3ViTmQ6IElOb2RlID0gbmRbcF07XHJcbiAgICAgIGlmICghc3ViTmQgLyp8fCAhc3ViTmQudGl0bGUqLyB8fCAhc3ViTmQuaWQpIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoIXJlcykgcmVzID0gW3N1Yk5kXTsgZWxzZSByZXMucHVzaChzdWJOZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbm9kZVBhcmVudHNMb3cobmQ6IElOb2RlLCByZXM6IG5vZGVQYXJlbnRzUmVzdWx0LCBpZ25vcmVTZWxmOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXJlcy5yZXMpIHJlcy5yZXMgPSBpZ25vcmVTZWxmID8gW10gOiBbbmRdO1xyXG4gICAgd2hpbGUgKG5kLnBhcmVudCkgeyBuZCA9IG5kLnBhcmVudDsgcmVzLnJlcy5wdXNoKG5kKTsgfVxyXG4gIH1cclxuICBpbnRlcmZhY2Ugbm9kZVBhcmVudHNSZXN1bHQgeyByZXMgPzogQXJyYXk8SU5vZGU+IH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Tm9kZVBhdGgobmQ6IElOb2RlKTogc3RyaW5nIHsgcmV0dXJuIG5vZGVQYXJlbnRzKG5kKS5tYXAobiA9PiBuLmlkKS5qb2luKCd8JykudG9Mb3dlckNhc2UoKTsgfVxyXG59IiwibmFtZXNwYWNlIHNpdGVtYXBSb3V0ZXIge1xyXG5cclxuICBleHBvcnQgdmFyIGNoaWxkQ29udGV4dFR5cGVzOiBSZWFjdC5WYWxpZGF0aW9uTWFwPGFueT4gPSB7XHJcbiAgICBzaXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgcm91dGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgfVxyXG5cclxuICBleHBvcnQgY2xhc3MgQXBwUm9vdENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUm9vdFByb3BzLCByb3V0ZXIuVFJvdXRlQWN0aW9uUGFyPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwOiBJUm9vdFByb3BzLCBjdHgpIHtcclxuICAgICAgc3VwZXIocCwgY3R4KTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHAuaW5pdFJvdXRlO1xyXG4gICAgICByb290Q29tcCA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICB0aGlzLmFjdE5vZGUgPSBzaXRlLm5vZGVzW3RoaXMuc3RhdGUuc3RvcmVJZC50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgaWYgKCF0aGlzLmFjdE5vZGUpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBOb2RlIHBhdGggJHt0aGlzLnN0YXRlLnN0b3JlSWR9IG5vdCBmb3VuZGApO1xyXG4gICAgICB2YXIgcmVzID0gKHRoaXMuYWN0Tm9kZS5jcmVhdGVQYWdlID8gdGhpcy5hY3ROb2RlLmNyZWF0ZVBhZ2UgOiBzaXRlLmdldEJsYW5rUGFnZSkoKHRoaXMuc3RhdGUucGFyKSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBhY3ROb2RlOiBzaXRlLklOb2RlO1xyXG5cclxuICAgIGdldENoaWxkQ29udGV4dCgpOiBJQ29udGV4dCB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2l0ZTogdGhpcy5hY3ROb2RlLFxyXG4gICAgICAgIHJvdXRlOiB0aGlzLnN0YXRlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVVybDxUPihub2RlOiBzaXRlLklOb2RlLCBwYXI/OiBUKSB7IHJvdXRlci5uYXZpZ2F0ZVVybCh7IHN0b3JlSWQ6IG5vZGUucGF0aCwgcGFyOiBwYXIgfSk7IH1cclxuICBleHBvcnQgZnVuY3Rpb24gZG9OYXZpZ2F0ZTxUPihub2RlOiBzaXRlLklOb2RlLCBldj86IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCBwYXI/OiBUKSB7IHJvdXRlci5kb05hdmlnYXRlKHsgc3RvcmVJZDogbm9kZS5wYXRoLCBwYXI6IHBhciB9LCBldik7IH1cclxuICBleHBvcnQgZnVuY3Rpb24gZG9OYXZpZ2F0ZVRhZzxUPihub2RlOiBzaXRlLklOb2RlLCBldj86IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCBwYXI/OiBUKTogSlNYLkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIDxhIGhyZWY9XCIjXCIga2V5PXtub2RlLnBhdGh9IG9uQ2xpY2s9e2V2ID0+IGRvTmF2aWdhdGUobm9kZSwgZXYsIHBhcikgfT57bm9kZS50aXRsZX08L2E+O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQ8UD4odHlwZTogUmVhY3QuQ29tcG9uZW50Q2xhc3M8UD4gfCBSZWFjdC5TRkM8UD4sIHJvdXRlUGFyLCBwcm9wczogUCAmIFJlYWN0LkF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVbXSk6IFJlYWN0LlJlYWN0RWxlbWVudDxQPiB7XHJcbiAgICB2YXIgcGFyOiBQID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHJvdXRlUGFyKTtcclxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHR5cGUsIHBhcik7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gYm9vdEFwcChjb250ZW50OiBIVE1MRWxlbWVudCwgc2l0ZW1hcENyZWF0b3I6IGxpYi5UQ2FsbGJhY2spIHtcclxuICAgIHNpdGVtYXBDcmVhdG9yKCk7XHJcbiAgICBzaXRlLmJvb3RBcHAoKTtcclxuICAgIHZhciBzdGFydFJvdXRlID0gcm91dGVyLmJvb3RBcHAoKTtcclxuICAgIFJlYWN0RE9NLnJlbmRlcig8QXBwUm9vdENvbXBvbmVudCBpbml0Um91dGU9eyBzdGFydFJvdXRlIH0gLz4sIGNvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJQ29udGV4dCB7XHJcbiAgICBzaXRlOiBzaXRlLklOb2RlO1xyXG4gICAgcm91dGU6IHJvdXRlci5UUm91dGVBY3Rpb25QYXJcclxuICB9XHJcblxyXG4gIC8vKioqKioqKioqKiBQcml2YXRlXHJcbiAgdmFyIHJvb3RDb21wOiBBcHBSb290Q29tcG9uZW50O1xyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVJvb3RQcm9wcyB7IGluaXRSb3V0ZTogcm91dGVyLlRSb3V0ZUFjdGlvblBhciB9XHJcblxyXG4gIHJvdXRlci5nZXRTdGFydFJvdXRlID0gKCkgPT4geyByZXR1cm4geyBzdG9yZUlkOiBzaXRlLnJvb3QucGF0aCB9OyB9O1xyXG4gIHJvdXRlci5vblJvdXRlQ2hhbmdlZCA9IHJvdXRlID0+IHsgaWYgKHJvb3RDb21wKSByb290Q29tcC5zZXRTdGF0ZShyb3V0ZSk7IH07XHJcblxyXG59IiwibmFtZXNwYWNlIHNlcnZpY2VzIHtcclxuICBleHBvcnQgaW50ZXJmYWNlIHNlcnZpY2VPVVQge1xyXG4gICAgZXJyb3I6c3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNhbGxSZXF1ZXN0PFRJTiwgVE9VVCBleHRlbmRzIHNlcnZpY2VPVVQ+KG1ldGhvZFBhdGg6c3RyaW5nLCBpblBhcjogVElOKTogUHJvbWlzZTxUT1VUPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICB2YXIgdXJsID0gYCR7bWV0aG9kUGF0aH0vc2VydmljZS5hc2h4P2A7XHJcbiAgICAgIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHZhciByZXNwID0geG1saHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgdmFyIHJlczogVE9VVCA9IHJlc3AgPyBKU09OLnBhcnNlKHJlc3ApIDogbnVsbDtcclxuICAgICAgICAgICAgICB2YXIgZXJyb3IgPSByZXMgPyByZXMuZXJyb3IgOiBudWxsO1xyXG4gICAgICAgICAgICAgIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTsgZWxzZSByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKG1zZykge1xyXG4gICAgICAgICAgICAgIHJlamVjdChgSlNPTiBleGNlcHRpb24gJHttc2d9IGF0ICR7dXJsfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgcmVqZWN0KGBTdGF0dXMgJHt4bWxodHRwLnN0YXR1c30gYXQgJHt1cmx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB4bWxodHRwLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICB4bWxodHRwLnNlbmQoaW5QYXIgPyBKU09OLnN0cmluZ2lmeShpblBhciwgbnVsbCwgMikgOiAnJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJuYW1lc3BhY2Ugc2VydmljZXMuZW1haWxlciB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBzZW5kRW1haWxJTiB7XHJcbiAgICBmcm9tOiBzdHJpbmc7XHJcbiAgICB0bzogc3RyaW5nOyAvL2UuZy4gXCJKb3NlZiBOb3Zha1wiPGpvc2VmQGxtLmN6PixcIkphbmEgS1wiPGphbmFAbG0uY3o+XHJcbiAgICBjYz86IHN0cmluZztcclxuICAgIGJjYz86IHN0cmluZztcclxuICAgIGlzQm9keUh0bWw/OiBib29sZWFuO1xyXG4gICAgYm9keTogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgICBzdWJqZWN0OiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gc2VuZEVNYWlsKGVtYWlsOiBzZW5kRW1haWxJTiwgY29tcGxldGVkOiBsaWIuVENhbGxiYWNrKSB7XHJcbiAgICBlbWFpbC5pc0JvZHlIdG1sID0gdHlwZW9mIGVtYWlsLmJvZHkgIT0gXCJzdHJpbmdcIjtcclxuICAgIGlmIChlbWFpbC5pc0JvZHlIdG1sKSBlbWFpbC5ib2R5ID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoZW1haWwuYm9keSBhcyBKU1guRWxlbWVudCk7XHJcbiAgICBzZXJ2aWNlcy5jYWxsUmVxdWVzdCgnbGlicy9zZXJ2aWNlLWVtYWlsZXInLCBlbWFpbCkudGhlbigoKSA9PiBjb21wbGV0ZWQoKSkuY2F0Y2goZXJyID0+IHsgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oZXJyKTsgfSk7XHJcbiAgfVxyXG5cclxuICAvL2FsZXJ0KFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKDxkaXY+eHh4PC9kaXY+KSk7XHJcbiAgLy9zZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgZGVidWdnZXI7XHJcbiAgLy8gIGFsZXJ0KFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKDxkaXY+eHh4PC9kaXY+KSk7XHJcbiAgLy99KTtcclxuXHJcbn0iXX0=