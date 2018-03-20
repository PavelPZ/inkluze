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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var lib;
(function (lib) {
    var Exception = /** @class */ (function (_super) {
        __extends(Exception, _super);
        function Exception(msg) {
            var _this = _super.call(this, msg) || this;
            debugger;
            console.error(msg);
            return _this;
        }
        return Exception;
    }(Error));
    lib.Exception = Exception;
    var ENotImplemented = /** @class */ (function (_super) {
        __extends(ENotImplemented, _super);
        function ENotImplemented(msg) {
            return _super.call(this, "Missing " + msg + " override") || this;
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
        return React.createElement("a", { href: url, target: newWindow ? '_blank' : '_self' },
            React.createElement("i", { className: 'fa fa-external-link' }),
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
                matches[_i] = arguments[_i];
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
    function getBasicUrl(startUrl) {
        var idx = startUrl.toLowerCase().indexOf(index_Html);
        return idx >= 0 ? startUrl.substr(0, idx + index_Html.length) : startUrl;
    }
    var index_Html = 'index.html';
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
        var res = clearSlashes(url.substr(router.$basicUrl.length));
        if (!res || res == '')
            return res;
        res = decodeURIComponent(res.split('&gclid')[0]); //google prida do vysledku hledani tento parametr, viz http://stackoverflow.com/questions/365888/how-to-decode-google-gclids
        return res;
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
    //config
    router.$isHashRouter = false; //hash or slash route delimiter
    router.$basicUrl = getBasicUrl(window.location.href); //cast URL pred route paramatter
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
    var AppRootComponent = /** @class */ (function (_super) {
        __extends(AppRootComponent, _super);
        function AppRootComponent(p, ctx) {
            var _this = _super.call(this, p, ctx) || this;
            _this.state = p.initRoute;
            rootComp = _this;
            return _this;
        }
        AppRootComponent.prototype.render = function () {
            this.actNode = site.nodes[this.state.storeId.toLowerCase()];
            if (!this.actNode)
                this.actNode = site.root; //  throw new lib.Exception(`Node path ${this.state.storeId} not found`);
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
        return React.createElement("a", { href: "#", key: node.path, onClick: function (ev) { return doNavigate(node, ev, par); } }, node.title);
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
        ReactDOM.render(React.createElement(AppRootComponent, { initRoute: startRoute }), content);
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
    function callRequest(methodPath, inPar, isGet) {
        return new Promise(function (resolve, reject) {
            var xmlhttp = new XMLHttpRequest();
            var url = methodPath + "/service.ashx";
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
            var inParJson = inPar ? JSON.stringify(inPar, null, 2) : '';
            if (isGet) {
                xmlhttp.open('GET', url + '?' + encodeURIComponent(inParJson), true);
                xmlhttp.send();
            }
            else {
                xmlhttp.open('POST', url, true);
                xmlhttp.send(inParJson);
            }
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
        //alert(ReactDOMServer.renderToStaticMarkup(<div>xxx</div>));
        //setTimeout(() => {
        //  debugger;
        //  alert(ReactDOMServer.renderToStaticMarkup(<div>xxx</div>));
        //});
    })(emailer = services.emailer || (services.emailer = {}));
})(services || (services = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vTGliL2xpYnMvY29tbW9uL3JlYWN0LWRvbS1zZXJ2ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9jb21tb24vcmVhY3QtYm9vdHN0cmFwLnRzIiwiLi4vLi4vTGliL2xpYnMvY29tbW9uL2xpYi50c3giLCIuLi8uLi9MaWIvbGlicy9jb21tb24vZmxleC1ib3gudHN4IiwiLi4vLi4vTGliL2xpYnMvZmx1eC9yb3V0ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXAudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXAtcm91dGVyLnRzeCIsIi4uLy4uL0xpYi9saWJzL3NlcnZpY2VzL2NvbW1vbi50cyIsIi4uLy4uL0xpYi9saWJzL3NlcnZpY2UtZW1haWxlci9lbWFpbGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxJQUFJLGNBQWMsR0FBZSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztBQ0w5RixJQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQ3JDLElBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDckMsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUMvQixJQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDL0MsSUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUN6QyxJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO0FBQzdDLElBQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDbkMsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUMvQixJQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQy9CLElBQU0sSUFBSSxHQUFH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ZXJUb1N0cmluZyhlbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pik6IHN0cmluZztcclxuICByZW5kZXJUb1N0YXRpY01hcmt1cChlbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pik6IHN0cmluZztcclxufVxyXG5cclxudmFyIFJlYWN0RE9NU2VydmVyOiBJRE9NU2VydmVyID0gUmVhY3RbJ19fU0VDUkVUX0RPTV9TRVJWRVJfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCddOyIsImNvbnN0IEJ1dHRvbiA9IFJlYWN0Qm9vdHN0cmFwLkJ1dHRvbjsgXHJcbmNvbnN0IE5hdmJhciA9IFJlYWN0Qm9vdHN0cmFwLk5hdmJhcjsgXHJcbmNvbnN0IE5hdiA9IFJlYWN0Qm9vdHN0cmFwLk5hdjsgXHJcbmNvbnN0IE5hdkl0ZW0gPSBSZWFjdEJvb3RzdHJhcC5OYXZJdGVtOyBcclxuY29uc3QgTmF2RHJvcGRvd24gPSBSZWFjdEJvb3RzdHJhcC5OYXZEcm9wZG93bjtcclxuY29uc3QgTWVudUl0ZW0gPSBSZWFjdEJvb3RzdHJhcC5NZW51SXRlbTtcclxuY29uc3QgQnJlYWRjcnVtYiA9IFJlYWN0Qm9vdHN0cmFwLkJyZWFkY3J1bWI7XHJcbmNvbnN0IE1vZGFsID0gUmVhY3RCb290c3RyYXAuTW9kYWw7XHJcbmNvbnN0IENvbCA9IFJlYWN0Qm9vdHN0cmFwLkNvbDtcclxuY29uc3QgUm93ID0gUmVhY3RCb290c3RyYXAuUm93O1xyXG5jb25zdCBHcmlkID0gUmVhY3RCb290c3RyYXAuR3JpZDtcclxuY29uc3QgQ2xlYXJmaXggPSBSZWFjdEJvb3RzdHJhcC5DbGVhcmZpeDtcclxuY29uc3QgTGFiZWwgPSBSZWFjdEJvb3RzdHJhcC5MYWJlbDtcclxuY29uc3QgUGFuZWwgPSBSZWFjdEJvb3RzdHJhcC5QYW5lbDtcclxuY29uc3QgUGFuZWxHcm91cCA9IFJlYWN0Qm9vdHN0cmFwLlBhbmVsR3JvdXA7XHJcbmNvbnN0IEZvcm1Hcm91cCA9IFJlYWN0Qm9vdHN0cmFwLkZvcm1Hcm91cDtcclxuY29uc3QgSGVscEJsb2NrID0gUmVhY3RCb290c3RyYXAuSGVscEJsb2NrO1xyXG5jb25zdCBGb3JtQ29udHJvbCA9IFJlYWN0Qm9vdHN0cmFwLkZvcm1Db250cm9sO1xyXG5jb25zdCBDb250cm9sTGFiZWwgPSBSZWFjdEJvb3RzdHJhcC5Db250cm9sTGFiZWw7XHJcbmNvbnN0IEFjY29yZGlvbiA9IFJlYWN0Qm9vdHN0cmFwLkFjY29yZGlvbjtcclxuY29uc3QgUmFkaW8gPSBSZWFjdEJvb3RzdHJhcC5SYWRpbztcclxuXHJcblxyXG5cclxuXHJcbiIsIm5hbWVzcGFjZSBsaWIge1xyXG4gIGV4cG9ydCBjbGFzcyBFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2c6IHN0cmluZykge1xyXG4gICAgICBzdXBlcihtc2cpO1xyXG4gICAgICBkZWJ1Z2dlcjtcclxuICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgY2xhc3MgRU5vdEltcGxlbWVudGVkIGV4dGVuZHMgRXhjZXB0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG1zZz86IHN0cmluZykgeyBzdXBlcihgTWlzc2luZyAke21zZ30gb3ZlcnJpZGVgKTsgfVxyXG4gIH1cclxuICBleHBvcnQgdHlwZSBUQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKGNvbnN0cnVjdG9yOiBGdW5jdGlvbik6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzID0gY29uc3RydWN0b3JbJ25hbWUnXTsgaWYgKHJlcykgcmV0dXJuIHJlcztcclxuICAgIGxldCBhcnIgPSBjb25zdHJ1Y3Rvci50b1N0cmluZygpLm1hdGNoKC9mdW5jdGlvblxccyooXFx3KykvKTtcclxuICAgIHJldHVybiBhcnIgJiYgYXJyLmxlbmd0aCA9PSAyID8gYXJyWzFdIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50UHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlcyB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGtleT86IGFueTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZUV4dCh1cmw6IHN0cmluZywgdGl0bGU6IHN0cmluZywgbmV3V2luZG93PzogYm9vbGVhbik6IEpTWC5FbGVtZW50IHtcclxuICAgIHJldHVybiA8YSBocmVmPXt1cmx9IHRhcmdldD17bmV3V2luZG93ID8gJ19ibGFuaycgOiAnX3NlbGYnfT48aSBjbGFzc05hbWU9J2ZhIGZhLWV4dGVybmFsLWxpbmsnPjwvaT4ge3RpdGxlfTwvYT47XHJcbiAgfVxyXG5cclxuICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzYxNjQ2MS9nZW5lcmF0ZS1hLWhhc2gtZnJvbS1zdHJpbmctaW4tamF2YXNjcmlwdC1qcXVlcnlcclxuICAvL2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfaGFzaF9mdW5jdGlvbnNcclxuICAvKipcclxuICogQ2FsY3VsYXRlIGEgMzIgYml0IEZOVi0xYSBoYXNoXHJcbiAqIEZvdW5kIGhlcmU6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3ZhaW9yYWJiaXQvNTY1NzU2MVxyXG4gKiBSZWYuOiBodHRwOi8vaXN0aGUuY29tL2Nob25nby90ZWNoL2NvbXAvZm52L1xyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIHRoZSBpbnB1dCB2YWx1ZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthc1N0cmluZz1mYWxzZV0gc2V0IHRvIHRydWUgdG8gcmV0dXJuIHRoZSBoYXNoIHZhbHVlIGFzIFxyXG4gKiAgICAgOC1kaWdpdCBoZXggc3RyaW5nIGluc3RlYWQgb2YgYW4gaW50ZWdlclxyXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtzZWVkXSBvcHRpb25hbGx5IHBhc3MgdGhlIGhhc2ggb2YgdGhlIHByZXZpb3VzIGNodW5rXHJcbiAqIEByZXR1cm5zIHtpbnRlZ2VyIHwgc3RyaW5nfVxyXG4gKi9cclxuICBleHBvcnQgZnVuY3Rpb24gaGFzaChzdHI6IHN0cmluZywgYXNTdHJpbmc/OiBib29sZWFuLCBzZWVkPzogbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcclxuICAgIC8qanNoaW50IGJpdHdpc2U6ZmFsc2UgKi9cclxuICAgIGxldCBpLCBsLCBodmFsID0gKHNlZWQgPT09IHVuZGVmaW5lZCkgPyAweDgxMWM5ZGM1IDogc2VlZDtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBodmFsIF49IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICBodmFsICs9IChodmFsIDw8IDEpICsgKGh2YWwgPDwgNCkgKyAoaHZhbCA8PCA3KSArIChodmFsIDw8IDgpICsgKGh2YWwgPDwgMjQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFzU3RyaW5nKSByZXR1cm4gKFwiMDAwMDAwMFwiICsgKGh2YWwgPj4+IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC04KTsgLy8gQ29udmVydCB0byA4IGRpZ2l0IGhleCBzdHJpbmdcclxuICAgIGVsc2UgcmV0dXJuIGh2YWwgPj4+IDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy9EOlxcTE1Db21cXHJld1xcV2ViNC5zbG4sIGQ6XFxMTUNvbVxccmV3XFxhbmd1bGFyLWRlZmluaXRlbHl0eXBlZFxcYW5ndWxhcjJcXHNyY1xcY29tcGlsZXJcXHV0aWwudHNcclxuICB2YXIgQ0FNRUxfQ0FTRV9SRUdFWFAgPSAvKFtBLVpdKS9nO1xyXG4gIHZhciBEQVNIX0NBU0VfUkVHRVhQID0gLy0oW2Etel0pL2c7XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZVRvRGFzaENhc2UoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiByZXBsYWNlQWxsTWFwcGVkKGlucHV0LCBDQU1FTF9DQVNFX1JFR0VYUCwgbSA9PiAnLScgKyBtWzFdLnRvTG93ZXJDYXNlKCkpOyB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRhc2hDYXNlVG9DYW1lbENhc2UoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiByZXBsYWNlQWxsTWFwcGVkKGlucHV0LCBEQVNIX0NBU0VfUkVHRVhQLCBtID0+IG1bMV0udG9VcHBlckNhc2UoKSk7IH1cclxuXHJcbiAgLy9EOlxcTE1Db21cXHJld1xcV2ViNC5zbG4sIGQ6XFxMTUNvbVxccmV3XFxhbmd1bGFyLWRlZmluaXRlbHl0eXBlZFxcYW5ndWxhcjJcXHNyY1xcZmFjYWRlXFxsYW5nLnRzXHJcbiAgZnVuY3Rpb24gcmVwbGFjZUFsbE1hcHBlZChzOiBzdHJpbmcsIGZyb206IFJlZ0V4cCwgY2I6IEZ1bmN0aW9uKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzLnJlcGxhY2UoZnJvbSwgZnVuY3Rpb24gKC4uLm1hdGNoZXMpIHtcclxuICAgICAgLy8gUmVtb3ZlIG9mZnNldCAmIHN0cmluZyBmcm9tIHRoZSByZXN1bHQgYXJyYXlcclxuICAgICAgbWF0Y2hlcy5zcGxpY2UoLTIsIDIpO1xyXG4gICAgICAvLyBUaGUgY2FsbGJhY2sgcmVjZWl2ZXMgbWF0Y2gsIHAxLCAuLi4sIHBuXHJcbiAgICAgIHJldHVybiBjYihtYXRjaGVzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0iLCIvL2RlY2xhcmUgbmFtZXNwYWNlIF9fUmVhY3Qge1xyXG4vLyAgaW50ZXJmYWNlIENTU1Byb3BlcnRpZXMge1xyXG4vLyAgICBmbGV4V3JhcD86IHN0cmluZztcclxuLy8gIH1cclxuLy99XHJcbmVudW0gZmxleCB7XHJcbiAgZmxleCxcclxuXHJcbiAganVzdGlmeVNwYWNlQmV0d2VlbixcclxuICBqdXN0aWZ5U3BhY2VBcm91bmQsXHJcbiAganVzdGlmeUVuZCxcclxuICBqdXN0aWZ5U3RhcnQsXHJcbiAganVzdGlmeUNlbnRlcixcclxuXHJcbiAgYWxpZ25TZWxmRW5kLFxyXG4gIGFsaWduU2VsZlN0YXJ0LFxyXG4gIGFsaWduU2VsZkF1dG8sXHJcbiAgYWxpZ25TZWxmQ2VudGVyLFxyXG4gIGFsaWduU2VsZkJhc2VsaW5lLFxyXG4gIGFsaWduU2VsZlN0cmV0Y2gsXHJcblxyXG4gIGFsaWduQ29udGVudEVuZCxcclxuICBhbGlnbkNvbnRlbnRTdGFydCxcclxuICBhbGlnbkNvbnRlbnRDZW50ZXIsXHJcbiAgYWxpZ25Db250ZW50U3RyZXRjaCxcclxuICBhbGlnbkNvbnRlbnRTcGFjZUFyb3VuZCxcclxuICBhbGlnbkNvbnRlbnRTcGFjZUJldHdlZW4sXHJcblxyXG4gIGFsaWduSXRlbXNTdGFydCxcclxuICBhbGlnbkl0ZW1zRW5kLFxyXG4gIGFsaWduSXRlbXNDZW50ZXIsXHJcbiAgYWxpZ25JdGVtc0Jhc2VsaW5lLFxyXG4gIGFsaWduSXRlbXNTdHJldGNoLFxyXG5cclxuICBkaXJlY3Rpb25Sb3csXHJcbiAgZGlyZWN0aW9uUm93UmV2ZXJzZSxcclxuICBkaXJlY3Rpb25Db2x1bW4sXHJcbiAgZGlyZWN0aW9uQ29sdW1uUmV2ZXJzZSxcclxuXHJcbiAgd3JhcE5vd3JhcCxcclxuICB3cmFwV3JhcCxcclxuICB3cmFwV3JhcFJldmVyc2UsXHJcblxyXG4gIG9yZGVyMCxcclxuICBvcmRlcjEsXHJcbiAgb3JkZXIyLFxyXG4gIG9yZGVyMyxcclxuICBvcmRlcjQsXHJcbiAgb3JkZXI1LFxyXG4gIG9yZGVyNixcclxuICBvcmRlcjcsXHJcbiAgb3JkZXI4LFxyXG4gIG9yZGVyOSxcclxuXHJcbiAgZ3JvdzAsXHJcbiAgZ3JvdzEsXHJcbiAgZ3JvdzIsXHJcbiAgZ3JvdzMsXHJcbiAgZ3JvdzQsXHJcbiAgZ3JvdzUsXHJcbiAgZ3JvdzYsXHJcbiAgZ3JvdzcsXHJcbiAgZ3JvdzgsXHJcbiAgZ3JvdzksXHJcblxyXG59XHJcbmZ1bmN0aW9uIGZsZXhDbGFzcyhjbHNzOiBBcnJheTxmbGV4Pik6IHN0cmluZyB7XHJcbiAgaWYgKCFjbHNzIHx8IGNsc3MubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG4gIHZhciByZXM6IEFycmF5PFN0cmluZz4gPSBbXTtcclxuICBjbHNzLmZvckVhY2goYyA9PiByZXMucHVzaCgnZmxleC0nICsgbGliLmNhbWVsQ2FzZVRvRGFzaENhc2UoZmxleFtjXSkpKTtcclxuICByZXR1cm4gcmVzLmpvaW4oJyAnKTtcclxufVxyXG5cclxuLy92YXIgeCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGZsZXhDbGFzcyhbZmxleC5qdXN0aWZ5Q2VudGVyLCBmbGV4LmFsaWduQ29udGVudENlbnRlciwgZmxleC5vcmRlcjNdKSl9PjwvZGl2PilcclxuLy9hbGVydCh4KTsiLCJuYW1lc3BhY2Ugcm91dGVyIHtcclxuXHJcbiAgLy9kaWZvdG5pIHJvdXRlIHBybyBwcmlwYWQsIHplIGplIFVSTCBwcmF6ZG5hXHJcbiAgZXhwb3J0IHZhciBnZXRTdGFydFJvdXRlOiAoKSA9PiBUUm91dGVBY3Rpb25QYXI7XHJcblxyXG4gIC8vYm9vdCByb3V0ZXJ1XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGJvb3RBcHAoKTogVFJvdXRlQWN0aW9uUGFyIHsgcmV0dXJuIHJvb3RSb3V0ZUJpbmQoZGVjb2RlRnVsbFVybCgpLCBmYWxzZSk7IH1cclxuXHJcbiAgLy9uYXZpZ2FjZSBuYSByb3V0ZVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBkb05hdmlnYXRlKHJvdXRlczogVFJvdXRlQWN0aW9uUGFyLCBldj86IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSB7IGlmIChldikgZXYucHJldmVudERlZmF1bHQoKTsgcmV0dXJuIHJvb3RSb3V0ZUJpbmQocm91dGVzLCB0cnVlKTsgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVVybChyb3V0ZXM6IFRSb3V0ZUFjdGlvblBhcik6IHN0cmluZyB7IHJldHVybiBlbmNvZGVGdWxsVXJsKHJvdXRlcyk7IH1cclxuXHJcbiAgLy9yb3V0ZSBjaGFuZ2VkIG5vdGlmaWNhdGlvblxyXG4gIGV4cG9ydCB2YXIgb25Sb3V0ZUNoYW5nZWQ6IChyb3V0ZTogVFJvdXRlQWN0aW9uUGFyKSA9PiB2b2lkO1xyXG5cclxuICAvL3Jvb3V0ZSBvYmpla3Qgc3RydWN0dXJlXHJcbiAgZXhwb3J0IGludGVyZmFjZSBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgc3RvcmVJZD86IHN0cmluZztcclxuICAgIGhvb2tJZD86IHN0cmluZzsgLy9uYXpldiBwcm9wZXJ0eSB2IGhvb2sucGFyZW50IFN0b3JlLCBvYnNhaHVqaWNpIFJvdXRlSG9va0Rpc3BhdGNoZXIuICFob29rSWQgPT4gcm91dGVEZWZhdWx0UHJvcE5hbWUgcHJvcGVydHlcclxuICAgIHBhcj86IHt9OyAvLzxzdG9yZUlkPi5yb3V0ZUFjdGlvbihwYXIsIGhvb2tJZClcclxuICAgIHJvdXRlSG9va0RlZmF1bHQ/OiBUUm91dGVBY3Rpb25QYXI7IC8vZGlmb3RuaSBjaGlsZCByb3V0ZSBob29rXHJcbiAgICAvLy4uLiBkYWxzaSwgbmFtZWQgcm91dGUgaG9va1xyXG4gIH1cclxuXHJcblxyXG4gIC8vKioqKioqKioqKioqKioqKiogcmVmcmVzaCB2aWV3IG9uIHJvdXRlIGNoYW5nZVxyXG4gIC8vYWt0dWFsbmkgcm91dGUgb2JqZWt0XHJcbiAgLy92YXIgcm91dGU6IFRSb3V0ZUFjdGlvblBhcjtcclxuXHJcbiAgZnVuY3Rpb24gcm9vdFJvdXRlQmluZChyb3V0ZXM6IFRSb3V0ZUFjdGlvblBhciAvKm51bGwgPT4gc3RhcnQgcm91dGUqLywgd2l0aFB1c3RTdGF0ZTogYm9vbGVhbik6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBpZiAoIXJvdXRlcykgcm91dGVzID0gZ2V0U3RhcnRSb3V0ZSA/IGdldFN0YXJ0Um91dGUoKSA6IG51bGw7IGlmICghcm91dGVzKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihgbWlzc2luZyByb3V0ZXNgKTtcclxuICAgIC8vcm91dGUgPSByb3V0ZXM7XHJcbiAgICBpZiAob25Sb3V0ZUNoYW5nZWQpIG9uUm91dGVDaGFuZ2VkKHJvdXRlcyk7XHJcbiAgICBpZiAod2l0aFB1c3RTdGF0ZSkgcHVzaFN0YXRlKHJvdXRlcyk7XHJcbiAgICByZXR1cm4gcm91dGVzO1xyXG4gIH1cclxuXHJcbiAgLy8qKioqKioqKioqKioqKioqKiBQT1BTVEFURSBFVkVOVCBcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGV2ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGA+IHBvcHN0YXRlOiAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWApO1xyXG4gICAgcm9vdFJvdXRlQmluZChkZWNvZGVGdWxsVXJsKCksIGZhbHNlKTtcclxuICB9KTtcclxuXHJcbiAgLy9tb2RpZnkgYnJvd3NlciBVUkxcclxuICBmdW5jdGlvbiBwdXNoU3RhdGUocm91dGU6IFRSb3V0ZUFjdGlvblBhcikge1xyXG4gICAgbGV0IHVybFN0ciA9IGVuY29kZUZ1bGxVcmwocm91dGUpO1xyXG4gICAgY29uc29sZS5sb2coYD4gcHVzaFN0YXRlOiAke3VybFN0cn1gKTtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHVybFN0cik7XHJcbiAgfVxyXG5cclxuICAvL3JvdXRhIHBhcnMgYXJlIGFmdGVyIFwiLmh0bWxcIiB1cmwgcGFydFxyXG4gIGZ1bmN0aW9uIGdldEJhc2ljVXJsKHN0YXJ0VXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IGlkeCA9IHN0YXJ0VXJsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbmRleF9IdG1sKTsgcmV0dXJuIGlkeCA+PSAwID8gc3RhcnRVcmwuc3Vic3RyKDAsIGlkeCArIGluZGV4X0h0bWwubGVuZ3RoKSA6IHN0YXJ0VXJsO1xyXG4gIH1cclxuICBjb25zdCBpbmRleF9IdG1sID0gJ2luZGV4Lmh0bWwnO1xyXG5cclxuICB2YXIgcm91dGVQYXJJZ25vcmVzID0gWydzdG9yZUlkJywgJ2hvb2tJZCcsICdwYXInXTtcclxuICB2YXIgcm91dGVIb29rRGVmYXVsdE5hbWUgPSAncm91dGVIb29rRGVmYXVsdCc7XHJcblxyXG4gIGZ1bmN0aW9uIGVuY29kZVVybChzdDogVFJvdXRlQWN0aW9uUGFyKTogc3RyaW5nIHtcclxuICAgIGxldCByZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIGVuY29kZVVybExvdyhyZXMsIHN0LCBudWxsKTtcclxuICAgIGxldCB1cmwgPSByZXMuam9pbignJyk7XHJcbiAgICByZXR1cm4gY2xlYXJTbGFzaGVzKHVybC5yZXBsYWNlKC8oXFwkXFwvKSokL2csICcnKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmNvZGVGdWxsVXJsKHN0OiBUUm91dGVBY3Rpb25QYXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHVybFN0ciA9IHN0ID8gZW5jb2RlVXJsKHN0KSA6IG51bGw7XHJcbiAgICAvL3JldHVybiAkYmFzaWNVcmwgKyAodXJsU3RyID8gKCRpc0hhc2hSb3V0ZXIgPyAnIycgOiAnLycpICsgdXJsU3RyIDogJycpO1xyXG4gICAgcmV0dXJuICRiYXNpY1VybCArICh1cmxTdHIgPyAoJGlzSGFzaFJvdXRlciA/ICcjJyA6ICc/JykgKyB1cmxTdHIgOiAnJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGVGdWxsVXJsKHVybD86IHN0cmluZyk6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICByZXR1cm4gZGVjb2RlVXJsKGRlY29kZVVybFBhcnQodXJsKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGVVcmxQYXJ0KHVybD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBpZiAoIXVybC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJGJhc2ljVXJsKSkgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oYGxvY2F0aW9uLmhyZWYgZG9lcyBub3Qgc3RhcnQgd2l0aCAkeyRiYXNpY1VybH1gKTtcclxuICAgIGxldCByZXMgPSBjbGVhclNsYXNoZXModXJsLnN1YnN0cigkYmFzaWNVcmwubGVuZ3RoKSk7XHJcbiAgICBpZiAoIXJlcyB8fCByZXMgPT0gJycpIHJldHVybiByZXM7XHJcbiAgICByZXMgPSBkZWNvZGVVUklDb21wb25lbnQocmVzLnNwbGl0KCcmZ2NsaWQnKVswXSk7IC8vZ29vZ2xlIHByaWRhIGRvIHZ5c2xlZGt1IGhsZWRhbmkgdGVudG8gcGFyYW1ldHIsIHZpeiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM2NTg4OC9ob3ctdG8tZGVjb2RlLWdvb2dsZS1nY2xpZHNcclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGVVcmwodXJsPzogc3RyaW5nKTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIGlmICghdXJsKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBkZWNvZGVVcmxMb3codXJsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVJvdXRlKHN0b3JlSWQ6IHN0cmluZywgcGFyPzoge30sIHJvdXRlSG9va0RlZmF1bHQ/OiBUUm91dGVBY3Rpb25QYXIsIG90aGVySG9va3M/OiB7IFtuYW1lOiBzdHJpbmddOiBUUm91dGVBY3Rpb25QYXI7IH0pOiBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgbGV0IHJlczogVFJvdXRlQWN0aW9uUGFyID0geyBzdG9yZUlkOiBzdG9yZUlkLCBwYXI6IHBhciB9O1xyXG4gICAgaWYgKHJvdXRlSG9va0RlZmF1bHQpIHsgcmVzLnJvdXRlSG9va0RlZmF1bHQgPSByb3V0ZUhvb2tEZWZhdWx0OyBkZWxldGUgcm91dGVIb29rRGVmYXVsdC5ob29rSWQ7IH1cclxuICAgIGlmIChvdGhlckhvb2tzKVxyXG4gICAgICBmb3IgKGxldCBwIGluIG90aGVySG9va3MpIHsgbGV0IGhrID0gcmVzW3BdID0gb3RoZXJIb29rc1twXTsgaGsuaG9va0lkID0gcDsgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldENoaWxkUm91dGVQcm9wTmFtZXMoc3Q6IFRSb3V0ZUFjdGlvblBhcik6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgbGV0IHByb3BzID0gW107XHJcbiAgICBmb3IgKGxldCBwIGluIHN0KSBpZiAocm91dGVQYXJJZ25vcmVzLmluZGV4T2YocCkgPCAwKSBwcm9wcy5wdXNoKHApO1xyXG4gICAgcmV0dXJuIHByb3BzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlVXJsTG93KHVybDogc3RyaW5nKTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIGlmICghJGlzSGFzaFJvdXRlcikgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XHJcbiAgICB1cmwgPSAneycgKyB1cmwucmVwbGFjZSgvXFwkXFwvL2csICd9JykucmVwbGFjZSgvXFwvL2csICd7Jyk7XHJcbiAgICBsZXQgc3RhY2s6IEFycmF5PElEZWNvZGVTdGFjaz4gPSBbXTsgbGV0IGkgPSAwOyBsZXQgY2g6IHN0cmluZzsgbGV0IHJlczogSURlY29kZVN0YWNrID0gbnVsbDtcclxuICAgIGxldCBwYXJzZVJvdXRlID0gKGVuZElkeDogbnVtYmVyLCBzdDogSURlY29kZVN0YWNrKSA9PiB7XHJcbiAgICAgIGxldCBzID0gdXJsLnN1YnN0cmluZyhzdC5vcGVuSWR4LCBlbmRJZHggLSAxKTtcclxuICAgICAgbGV0IHBhcnRzID0gcy5zcGxpdCgnOycpO1xyXG4gICAgICBsZXQgcHJvcENvbXAgPSBwYXJ0c1swXS5zcGxpdCgnLScpOyBpZiAocHJvcENvbXAubGVuZ3RoID4gMikgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oJ3Byb3BDb21wLmxlbmd0aCA+IDInKTtcclxuICAgICAgc3QuaG9va0lkID0gcHJvcENvbXAubGVuZ3RoID09IDEgPyBudWxsIDogcHJvcENvbXBbMF07XHJcbiAgICAgIHN0LnJvdXRlID0geyBzdG9yZUlkOiBwcm9wQ29tcC5sZW5ndGggPT0gMSA/IHByb3BDb21wWzBdIDogcHJvcENvbXBbMV0gfTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG52ID0gcGFydHNbaV0uc3BsaXQoJz0nKTtcclxuICAgICAgICBpZiAoIXN0LnJvdXRlLnBhcikgc3Qucm91dGUucGFyID0ge307XHJcbiAgICAgICAgc3Qucm91dGUucGFyW252WzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChudlsxXSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICBpZiAoaSA+PSB1cmwubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA+PSAxKSBjaCA9ICd9JzsgZWxzZSBicmVhaztcclxuICAgICAgICBpID0gdXJsLmxlbmd0aCArIDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2ggPSB1cmwuY2hhckF0KGkpOyBpKys7XHJcbiAgICAgIH1cclxuICAgICAgc3dpdGNoIChjaCkge1xyXG4gICAgICAgIGNhc2UgJ3snOlxyXG4gICAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA9PSAwKSB7IHJlcyA9IHsgb3BlbklkeDogaSB9OyBzdGFjay5wdXNoKHJlcyk7IGJyZWFrOyB9IC8vcm9vdFxyXG4gICAgICAgICAgbGV0IGxhc3QgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIGlmICghbGFzdC5yb3V0ZSkgcGFyc2VSb3V0ZShpLCBsYXN0KTsgLy96cHJhY3VqIHNla3ZlbmNpIG1lemkge3h4eHh7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKHsgb3BlbklkeDogaSB9KTsgLy96YWNuaSBub3Z5IHN0YWNrXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd9JzpcclxuICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggPT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICBsZXQgbGFzdDIgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIGlmICghbGFzdDIucm91dGUpIHBhcnNlUm91dGUoaSwgbGFzdDIpOyAvL3pwcmFjdWogc2VrdmVuY2kgbWV6aSB7eHh4eH0sIHh4eCBqZSBiZXogeyBpIH1cclxuICAgICAgICAgIGxldCBwYXJQcm9wID0gbGFzdDIuaG9va0lkID8gbGFzdDIuaG9va0lkIDogcm91dGVIb29rRGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICBpZiAocGFyUHJvcCAhPSByb3V0ZUhvb2tEZWZhdWx0TmFtZSkgbGFzdDIucm91dGUuaG9va0lkID0gcGFyUHJvcDtcclxuICAgICAgICAgIC8vbmF2YXphbmkgbmEgcGFyZW50IHJvdXRlXHJcbiAgICAgICAgICBsZXQgcGFyID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMl07XHJcbiAgICAgICAgICBpZiAocGFyKSBwYXIucm91dGVbcGFyUHJvcF0gPSBsYXN0Mi5yb3V0ZTtcclxuICAgICAgICAgIC8vdnluZGVqIHplIHN0YWNrdVxyXG4gICAgICAgICAgc3RhY2suc3BsaWNlKHN0YWNrLmxlbmd0aCAtIDEsIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXMucm91dGU7XHJcbiAgfVxyXG5cclxuICBpbnRlcmZhY2UgSURlY29kZVN0YWNrIHtcclxuICAgIG9wZW5JZHg6IG51bWJlcjtcclxuICAgIHJvdXRlPzogVFJvdXRlQWN0aW9uUGFyO1xyXG4gICAgaG9va0lkPzogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZW5jb2RlVXJsTG93KHJlczogQXJyYXk8c3RyaW5nPiwgc3Q6IFRSb3V0ZUFjdGlvblBhciwgcGFyZW50UHJvcE5hbWU/OiBzdHJpbmcpIHtcclxuICAgIHJlcy5wdXNoKChwYXJlbnRQcm9wTmFtZSA/IHBhcmVudFByb3BOYW1lICsgJy0nIDogJycpICsgKHN0LnN0b3JlSWQgPyBzdC5zdG9yZUlkIDogJycpKTtcclxuICAgIGlmIChzdC5wYXIpIHtcclxuICAgICAgbGV0IHByb3BzID0gW107XHJcbiAgICAgIGZvciAobGV0IHAgaW4gc3QucGFyKSBwcm9wcy5wdXNoKHApO1xyXG4gICAgICBwcm9wcy5zb3J0KCkuZm9yRWFjaChwID0+IHJlcy5wdXNoKGA7JHtwfT0ke2VuY29kZVVSSUNvbXBvbmVudChzdC5wYXJbcF0pfWApKTtcclxuICAgIH1cclxuICAgIGdldENoaWxkUm91dGVQcm9wTmFtZXMoc3QpLnNvcnQoKS5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICByZXMucHVzaCgnLycpO1xyXG4gICAgICBlbmNvZGVVcmxMb3cocmVzLCBzdFtwXSwgcCA9PSByb3V0ZUhvb2tEZWZhdWx0TmFtZSA/IG51bGwgOiBwKTtcclxuICAgICAgcmVzLnB1c2goJyQvJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyU2xhc2hlcyhwYXRoOiBzdHJpbmcpOiBzdHJpbmcgeyByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpLnJlcGxhY2UoL15bXFwjXFwvXFw/XT8vLCAnJyk7IH1cclxuXHJcbiAgLy9jb25maWdcclxuICBleHBvcnQgdmFyICRpc0hhc2hSb3V0ZXIgPSBmYWxzZTsgLy9oYXNoIG9yIHNsYXNoIHJvdXRlIGRlbGltaXRlclxyXG4gIGV4cG9ydCB2YXIgJGJhc2ljVXJsID0gZ2V0QmFzaWNVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpOyAvL2Nhc3QgVVJMIHByZWQgcm91dGUgcGFyYW1hdHRlclxyXG59IiwibmFtZXNwYWNlIHNpdGUge1xyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElOb2RlIHtcclxuICAgIGlkOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB0aXRsZT86IHN0cmluZzsgLy9jaHliaS1saSwgdmV6bWUgc2UgeiBJVGFiLnRpdGxlIFxyXG4gICAgYnJUaXRsZT86c3RyaW5nOyAvL3RpdGxlIHBybyBicmVhZGNydW1iXHJcbiAgICBjcmVhdGVQYWdlOiAocm91dGVQYXIpID0+IEpTWC5FbGVtZW50LFxyXG4gICAgcGF0aD86IHN0cmluZztcclxuICAgIGNoaWxkcz86IEFycmF5PElOb2RlPjtcclxuICAgIHBhcmVudD86IElOb2RlO1xyXG4gICAgbGFyZ2VMb2dvPzogYm9vbGVhbjsgLy92ZWxrZSBsb2dvIHYgY2hsYWRpY2lcclxuICAgIHRhYj86IElUYWI7IC8vbXkgdGFiXHJcbiAgICBub1RpdGxlPzpib29sZWFuOyAvL3BhZ2UgdGVtcGxhdGUgbmVnZW5lcnVqZSB0aXRsZSBzdHJhbmt5XHJcbiAgfVxyXG4gIGV4cG9ydCB2YXIgcm9vdDogSU5vZGU7XHJcbiAgZXhwb3J0IHZhciBub2RlczogeyBbcGF0aDogc3RyaW5nXTogSU5vZGU7IH0gPSB7fTtcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGJvb3RBcHAoKSB7XHJcbiAgICBmdW5jdGlvbiBpbml0Tm9kZShwYXJlbnQ6IElOb2RlLCBuZDogSU5vZGUpIHtcclxuICAgICAgbmQuY2hpbGRzID0gbm9kZUNoaWxkcyhuZCk7XHJcbiAgICAgIG5kLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgaWYgKCFuZC50YWIpIG5kLnRhYiA9IG5kLnBhcmVudC50YWI7XHJcbiAgICAgIG5kLnBhdGggPSBnZXROb2RlUGF0aChuZCk7XHJcbiAgICAgIGlmIChub2Rlc1tuZC5wYXRoXSkgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oYFNpdGVNYXAgbm9kZSAke25kLnBhdGh9IGFscmVhZHkgZXhpc3RzIWApO1xyXG4gICAgICBub2Rlc1tuZC5wYXRoXSA9IG5kO1xyXG4gICAgICBpZiAobmQuY2hpbGRzKSBuZC5jaGlsZHMuZm9yRWFjaChuID0+IGluaXROb2RlKG5kLCBuKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbml0VGFicygpIHtcclxuICAgICAgdGFicy4kY2hpbGRzID0gW107IHZhciBpZHggPSAwO1xyXG4gICAgICBmb3IgKHZhciBwIGluIHRhYnMpIHtcclxuICAgICAgICBpZiAocC5zdGFydHNXaXRoKCckJykpIGNvbnRpbnVlO1xyXG4gICAgICAgIHZhciB0OiBJVGFiID0gdGFic1twXTsgdGFicy4kY2hpbGRzLnB1c2godCk7IHQuaWR4ID0gaWR4Kys7XHJcbiAgICAgICAgaWYgKCF0LnJvb3ROb2RlKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbignIXQucm9vdE5vZGUnKTtcclxuICAgICAgICB0LnJvb3ROb2RlLnRhYiA9IHQ7XHJcbiAgICAgICAgaWYgKCF0LnJvb3ROb2RlLnRpdGxlKSB0LnJvb3ROb2RlLnRpdGxlID0gdC50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5pdFRhYnMoKTtcclxuICAgIGluaXROb2RlKG51bGwsIHJvb3QpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5vZGVQYXJlbnRzKG5kOiBJTm9kZSwgaWdub3JlU2VsZj86IGJvb2xlYW4pOiBBcnJheTxJTm9kZT4ge1xyXG4gICAgdmFyIHJlczogbm9kZVBhcmVudHNSZXN1bHQgPSB7fTtcclxuICAgIG5vZGVQYXJlbnRzTG93KG5kLCByZXMsIGlnbm9yZVNlbGYpO1xyXG4gICAgcmV0dXJuIHJlcy5yZXMucmV2ZXJzZSgpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJVGFicyB7XHJcbiAgICAkY2hpbGRzPzogQXJyYXk8SVRhYj47XHJcbiAgfVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVRhYiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaWR4PzogbnVtYmVyO1xyXG4gICAgcm9vdE5vZGU/OiBJTm9kZTsgLy9obGF2bmkgc3RyYW5rYSBwcm8gdGFiXHJcbiAgfVxyXG4gIGV4cG9ydCB2YXIgdGFiczogSVRhYnM7XHJcblxyXG4gIGV4cG9ydCB2YXIgZ2V0QmxhbmtQYWdlOiAocm91dGVQYXIpID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICAvLyoqKioqKioqKioqIFByaXZhdGVcclxuXHJcbiAgZnVuY3Rpb24gbm9kZUNoaWxkcyhuZDogSU5vZGUpOiBBcnJheTxJTm9kZT4ge1xyXG4gICAgdmFyIHJlczogQXJyYXk8SU5vZGU+ID0gbnVsbDtcclxuICAgIGZvciAodmFyIHAgaW4gbmQpIHtcclxuICAgICAgdmFyIHN1Yk5kOiBJTm9kZSA9IG5kW3BdO1xyXG4gICAgICBpZiAoIXN1Yk5kIC8qfHwgIXN1Yk5kLnRpdGxlKi8gfHwgIXN1Yk5kLmlkKSBjb250aW51ZTtcclxuICAgICAgaWYgKCFyZXMpIHJlcyA9IFtzdWJOZF07IGVsc2UgcmVzLnB1c2goc3ViTmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG5vZGVQYXJlbnRzTG93KG5kOiBJTm9kZSwgcmVzOiBub2RlUGFyZW50c1Jlc3VsdCwgaWdub3JlU2VsZjogYm9vbGVhbikge1xyXG4gICAgaWYgKCFyZXMucmVzKSByZXMucmVzID0gaWdub3JlU2VsZiA/IFtdIDogW25kXTtcclxuICAgIHdoaWxlIChuZC5wYXJlbnQpIHsgbmQgPSBuZC5wYXJlbnQ7IHJlcy5yZXMucHVzaChuZCk7IH1cclxuICB9XHJcbiAgaW50ZXJmYWNlIG5vZGVQYXJlbnRzUmVzdWx0IHsgcmVzID86IEFycmF5PElOb2RlPiB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE5vZGVQYXRoKG5kOiBJTm9kZSk6IHN0cmluZyB7IHJldHVybiBub2RlUGFyZW50cyhuZCkubWFwKG4gPT4gbi5pZCkuam9pbignfCcpLnRvTG93ZXJDYXNlKCk7IH1cclxufSIsIm5hbWVzcGFjZSBzaXRlbWFwUm91dGVyIHtcclxuXHJcbiAgZXhwb3J0IHZhciBjaGlsZENvbnRleHRUeXBlczogUmVhY3QuVmFsaWRhdGlvbk1hcDxhbnk+ID0ge1xyXG4gICAgc2l0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHJvdXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIEFwcFJvb3RDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVJvb3RQcm9wcywgcm91dGVyLlRSb3V0ZUFjdGlvblBhcj4ge1xyXG4gICAgY29uc3RydWN0b3IocDogSVJvb3RQcm9wcywgY3R4KSB7XHJcbiAgICAgIHN1cGVyKHAsIGN0eCk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBwLmluaXRSb3V0ZTtcclxuICAgICAgcm9vdENvbXAgPSB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgdGhpcy5hY3ROb2RlID0gc2l0ZS5ub2Rlc1t0aGlzLnN0YXRlLnN0b3JlSWQudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgIGlmICghdGhpcy5hY3ROb2RlKSB0aGlzLmFjdE5vZGUgPSBzaXRlLnJvb3Q7IC8vICB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihgTm9kZSBwYXRoICR7dGhpcy5zdGF0ZS5zdG9yZUlkfSBub3QgZm91bmRgKTtcclxuICAgICAgdmFyIHJlcyA9ICh0aGlzLmFjdE5vZGUuY3JlYXRlUGFnZSA/IHRoaXMuYWN0Tm9kZS5jcmVhdGVQYWdlIDogc2l0ZS5nZXRCbGFua1BhZ2UpKCh0aGlzLnN0YXRlLnBhcikpO1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG4gICAgYWN0Tm9kZTogc2l0ZS5JTm9kZTtcclxuXHJcbiAgICBnZXRDaGlsZENvbnRleHQoKTogSUNvbnRleHQge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNpdGU6IHRoaXMuYWN0Tm9kZSxcclxuICAgICAgICByb3V0ZTogdGhpcy5zdGF0ZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0gY2hpbGRDb250ZXh0VHlwZXM7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVVcmw8VD4obm9kZTogc2l0ZS5JTm9kZSwgcGFyPzogVCkgeyByb3V0ZXIubmF2aWdhdGVVcmwoeyBzdG9yZUlkOiBub2RlLnBhdGgsIHBhcjogcGFyIH0pOyB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRvTmF2aWdhdGU8VD4obm9kZTogc2l0ZS5JTm9kZSwgZXY/OiBSZWFjdC5TeW50aGV0aWNFdmVudCwgcGFyPzogVCkgeyByb3V0ZXIuZG9OYXZpZ2F0ZSh7IHN0b3JlSWQ6IG5vZGUucGF0aCwgcGFyOiBwYXIgfSwgZXYpOyB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRvTmF2aWdhdGVUYWc8VD4obm9kZTogc2l0ZS5JTm9kZSwgZXY/OiBSZWFjdC5TeW50aGV0aWNFdmVudCwgcGFyPzogVCk6IEpTWC5FbGVtZW50IHtcclxuICAgIHJldHVybiA8YSBocmVmPVwiI1wiIGtleT17bm9kZS5wYXRofSBvbkNsaWNrPXtldiA9PiBkb05hdmlnYXRlKG5vZGUsIGV2LCBwYXIpIH0+e25vZGUudGl0bGV9PC9hPjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50PFA+KHR5cGU6IFJlYWN0LkNvbXBvbmVudENsYXNzPFA+IHwgUmVhY3QuU0ZDPFA+LCByb3V0ZVBhciwgcHJvcHM6IFAgJiBSZWFjdC5BdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlW10pOiBSZWFjdC5SZWFjdEVsZW1lbnQ8UD4ge1xyXG4gICAgdmFyIHBhcjogUCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCByb3V0ZVBhcik7XHJcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0eXBlLCBwYXIpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGJvb3RBcHAoY29udGVudDogSFRNTEVsZW1lbnQsIHNpdGVtYXBDcmVhdG9yOiBsaWIuVENhbGxiYWNrKSB7XHJcbiAgICBzaXRlbWFwQ3JlYXRvcigpO1xyXG4gICAgc2l0ZS5ib290QXBwKCk7XHJcbiAgICB2YXIgc3RhcnRSb3V0ZSA9IHJvdXRlci5ib290QXBwKCk7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoPEFwcFJvb3RDb21wb25lbnQgaW5pdFJvdXRlPXsgc3RhcnRSb3V0ZSB9IC8+LCBjb250ZW50KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSUNvbnRleHQge1xyXG4gICAgc2l0ZTogc2l0ZS5JTm9kZTtcclxuICAgIHJvdXRlOiByb3V0ZXIuVFJvdXRlQWN0aW9uUGFyXHJcbiAgfVxyXG5cclxuICAvLyoqKioqKioqKiogUHJpdmF0ZVxyXG4gIHZhciByb290Q29tcDogQXBwUm9vdENvbXBvbmVudDtcclxuICBleHBvcnQgaW50ZXJmYWNlIElSb290UHJvcHMgeyBpbml0Um91dGU6IHJvdXRlci5UUm91dGVBY3Rpb25QYXIgfVxyXG5cclxuICByb3V0ZXIuZ2V0U3RhcnRSb3V0ZSA9ICgpID0+IHsgcmV0dXJuIHsgc3RvcmVJZDogc2l0ZS5yb290LnBhdGggfTsgfTtcclxuICByb3V0ZXIub25Sb3V0ZUNoYW5nZWQgPSByb3V0ZSA9PiB7IGlmIChyb290Q29tcCkgcm9vdENvbXAuc2V0U3RhdGUocm91dGUpOyB9O1xyXG5cclxufSIsIm5hbWVzcGFjZSBzZXJ2aWNlcyB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBzZXJ2aWNlT1VUIHtcclxuICAgIGVycm9yOiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gY2FsbFJlcXVlc3Q8VElOLCBUT1VUIGV4dGVuZHMgc2VydmljZU9VVD4obWV0aG9kUGF0aDogc3RyaW5nLCBpblBhcjogVElOLCBpc0dldD86IGJvb2xlYW4pOiBQcm9taXNlPFRPVVQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHZhciB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHZhciB1cmwgPSBgJHttZXRob2RQYXRofS9zZXJ2aWNlLmFzaHhgO1xyXG4gICAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgIGlmICh4bWxodHRwLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICB2YXIgcmVzcCA9IHhtbGh0dHAucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgIHZhciByZXM6IFRPVVQgPSByZXNwID8gSlNPTi5wYXJzZShyZXNwKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgdmFyIGVycm9yID0gcmVzID8gcmVzLmVycm9yIDogbnVsbDtcclxuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHJlamVjdChlcnJvcik7IGVsc2UgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChtc2cpIHtcclxuICAgICAgICAgICAgICByZWplY3QoYEpTT04gZXhjZXB0aW9uICR7bXNnfSBhdCAke3VybH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHJlamVjdChgU3RhdHVzICR7eG1saHR0cC5zdGF0dXN9IGF0ICR7dXJsfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgbGV0IGluUGFySnNvbiA9IGluUGFyID8gSlNPTi5zdHJpbmdpZnkoaW5QYXIsIG51bGwsIDIpIDogJyc7XHJcbiAgICAgIGlmIChpc0dldCkge1xyXG4gICAgICAgIHhtbGh0dHAub3BlbignR0VUJywgdXJsICsgJz8nICsgZW5jb2RlVVJJQ29tcG9uZW50KGluUGFySnNvbiksIHRydWUpO1xyXG4gICAgICAgIHhtbGh0dHAuc2VuZCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHhtbGh0dHAub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1saHR0cC5zZW5kKGluUGFySnNvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSIsIm5hbWVzcGFjZSBzZXJ2aWNlcy5lbWFpbGVyIHtcclxuICBleHBvcnQgaW50ZXJmYWNlIHNlbmRFbWFpbElOIHtcclxuICAgIGZyb206IHN0cmluZztcclxuICAgIHRvOiBzdHJpbmc7IC8vZS5nLiBcIkpvc2VmIE5vdmFrXCI8am9zZWZAbG0uY3o+LFwiSmFuYSBLXCI8amFuYUBsbS5jej5cclxuICAgIGNjPzogc3RyaW5nO1xyXG4gICAgYmNjPzogc3RyaW5nO1xyXG4gICAgaXNCb2R5SHRtbD86IGJvb2xlYW47XHJcbiAgICBib2R5OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICAgIHN1YmplY3Q6IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzZW5kRU1haWwoZW1haWw6IHNlbmRFbWFpbElOLCBjb21wbGV0ZWQ6IGxpYi5UQ2FsbGJhY2spIHtcclxuICAgIGVtYWlsLmlzQm9keUh0bWwgPSB0eXBlb2YgZW1haWwuYm9keSAhPSBcInN0cmluZ1wiO1xyXG4gICAgaWYgKGVtYWlsLmlzQm9keUh0bWwpIGVtYWlsLmJvZHkgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChlbWFpbC5ib2R5IGFzIEpTWC5FbGVtZW50KTtcclxuICAgIHNlcnZpY2VzLmNhbGxSZXF1ZXN0KCdsaWJzL3NlcnZpY2UtZW1haWxlcicsIGVtYWlsKS50aGVuKCgpID0+IGNvbXBsZXRlZCgpKS5jYXRjaChlcnIgPT4geyB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihlcnIpOyB9KTtcclxuICB9XHJcblxyXG4gIC8vYWxlcnQoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoPGRpdj54eHg8L2Rpdj4pKTtcclxuICAvL3NldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICBkZWJ1Z2dlcjtcclxuICAvLyAgYWxlcnQoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoPGRpdj54eHg8L2Rpdj4pKTtcclxuICAvL30pO1xyXG5cclxufSJdfQ==