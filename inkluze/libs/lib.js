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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vTGliL2xpYnMvY29tbW9uL3JlYWN0LWRvbS1zZXJ2ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9jb21tb24vcmVhY3QtYm9vdHN0cmFwLnRzIiwiLi4vLi4vTGliL2xpYnMvY29tbW9uL2xpYi50c3giLCIuLi8uLi9MaWIvbGlicy9jb21tb24vZmxleC1ib3gudHN4IiwiLi4vLi4vTGliL2xpYnMvZmx1eC9yb3V0ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXAudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXAtcm91dGVyLnRzeCIsIi4uLy4uL0xpYi9saWJzL3NlcnZpY2VzL2NvbW1vbi50cyIsIi4uLy4uL0xpYi9saWJzL3NlcnZpY2UtZW1haWxlci9lbWFpbGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxJQUFJLGNBQWMsR0FBZSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztBQ0w5RixJQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQ3JDLElBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDckMsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUMvQixJQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDL0MsSUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUN6QyxJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO0FBQzdDLElBQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDbkMsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUMvQixJQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQy9CLElBQU0sSUFBSSxHQUFH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QVgsQ0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFNLE1BQU0sSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUgsQ0FBQztRQUplLGlCQUFTLFlBSXhCLENBQUE7UUFFRCw2REFBNkQ7UUFDN0Qsb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYiwrREFBK0Q7UUFDL0QsS0FBSztJQUVQLENBQUMsRUF2QmtCLE9BQU8sR0FBUCxnQkFBTyxLQUFQLGdCQUFPLFFBdUJ6QjtBQUFELENBQUMsRUF2QlMsUUFBUSxLQUFSLFFBQVEsUUF1QmpCIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElET01TZXJ2ZXIge1xyXG4gIHJlbmRlclRvU3RyaW5nKGVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KTogc3RyaW5nO1xyXG4gIHJlbmRlclRvU3RhdGljTWFya3VwKGVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KTogc3RyaW5nO1xyXG59XHJcblxyXG52YXIgUmVhY3RET01TZXJ2ZXI6IElET01TZXJ2ZXIgPSBSZWFjdFsnX19TRUNSRVRfRE9NX1NFUlZFUl9ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEJ107IiwiY29uc3QgQnV0dG9uID0gUmVhY3RCb290c3RyYXAuQnV0dG9uOyBcclxuY29uc3QgTmF2YmFyID0gUmVhY3RCb290c3RyYXAuTmF2YmFyOyBcclxuY29uc3QgTmF2ID0gUmVhY3RCb290c3RyYXAuTmF2OyBcclxuY29uc3QgTmF2SXRlbSA9IFJlYWN0Qm9vdHN0cmFwLk5hdkl0ZW07IFxyXG5jb25zdCBOYXZEcm9wZG93biA9IFJlYWN0Qm9vdHN0cmFwLk5hdkRyb3Bkb3duO1xyXG5jb25zdCBNZW51SXRlbSA9IFJlYWN0Qm9vdHN0cmFwLk1lbnVJdGVtO1xyXG5jb25zdCBCcmVhZGNydW1iID0gUmVhY3RCb290c3RyYXAuQnJlYWRjcnVtYjtcclxuY29uc3QgTW9kYWwgPSBSZWFjdEJvb3RzdHJhcC5Nb2RhbDtcclxuY29uc3QgQ29sID0gUmVhY3RCb290c3RyYXAuQ29sO1xyXG5jb25zdCBSb3cgPSBSZWFjdEJvb3RzdHJhcC5Sb3c7XHJcbmNvbnN0IEdyaWQgPSBSZWFjdEJvb3RzdHJhcC5HcmlkO1xyXG5jb25zdCBDbGVhcmZpeCA9IFJlYWN0Qm9vdHN0cmFwLkNsZWFyZml4O1xyXG5jb25zdCBMYWJlbCA9IFJlYWN0Qm9vdHN0cmFwLkxhYmVsO1xyXG5jb25zdCBQYW5lbCA9IFJlYWN0Qm9vdHN0cmFwLlBhbmVsO1xyXG5jb25zdCBQYW5lbEdyb3VwID0gUmVhY3RCb290c3RyYXAuUGFuZWxHcm91cDtcclxuY29uc3QgRm9ybUdyb3VwID0gUmVhY3RCb290c3RyYXAuRm9ybUdyb3VwO1xyXG5jb25zdCBIZWxwQmxvY2sgPSBSZWFjdEJvb3RzdHJhcC5IZWxwQmxvY2s7XHJcbmNvbnN0IEZvcm1Db250cm9sID0gUmVhY3RCb290c3RyYXAuRm9ybUNvbnRyb2w7XHJcbmNvbnN0IENvbnRyb2xMYWJlbCA9IFJlYWN0Qm9vdHN0cmFwLkNvbnRyb2xMYWJlbDtcclxuY29uc3QgQWNjb3JkaW9uID0gUmVhY3RCb290c3RyYXAuQWNjb3JkaW9uO1xyXG5jb25zdCBSYWRpbyA9IFJlYWN0Qm9vdHN0cmFwLlJhZGlvO1xyXG5cclxuXHJcblxyXG5cclxuIiwibmFtZXNwYWNlIGxpYiB7XHJcbiAgZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1zZzogc3RyaW5nKSB7XHJcbiAgICAgIHN1cGVyKG1zZyk7XHJcbiAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBjbGFzcyBFTm90SW1wbGVtZW50ZWQgZXh0ZW5kcyBFeGNlcHRpb24ge1xyXG4gICAgY29uc3RydWN0b3IobXNnPzogc3RyaW5nKSB7IHN1cGVyKGBNaXNzaW5nICR7bXNnfSBvdmVycmlkZWApOyB9XHJcbiAgfVxyXG4gIGV4cG9ydCB0eXBlIFRDYWxsYmFjayA9ICgpID0+IHZvaWQ7XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc05hbWUoY29uc3RydWN0b3I6IEZ1bmN0aW9uKTogc3RyaW5nIHtcclxuICAgIGxldCByZXMgPSBjb25zdHJ1Y3RvclsnbmFtZSddOyBpZiAocmVzKSByZXR1cm4gcmVzO1xyXG4gICAgbGV0IGFyciA9IGNvbnN0cnVjdG9yLnRvU3RyaW5nKCkubWF0Y2goL2Z1bmN0aW9uXFxzKihcXHcrKS8pO1xyXG4gICAgcmV0dXJuIGFyciAmJiBhcnIubGVuZ3RoID09IDIgPyBhcnJbMV0gOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRQcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzIHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAga2V5PzogYW55O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlRXh0KHVybDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBuZXdXaW5kb3c/OiBib29sZWFuKTogSlNYLkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIDxhIGhyZWY9e3VybH0gdGFyZ2V0PXtuZXdXaW5kb3cgPyAnX2JsYW5rJyA6ICdfc2VsZid9PjxpIGNsYXNzTmFtZT0nZmEgZmEtZXh0ZXJuYWwtbGluayc+PC9pPiB7dGl0bGV9PC9hPjtcclxuICB9XHJcblxyXG4gIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83NjE2NDYxL2dlbmVyYXRlLWEtaGFzaC1mcm9tLXN0cmluZy1pbi1qYXZhc2NyaXB0LWpxdWVyeVxyXG4gIC8vaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9oYXNoX2Z1bmN0aW9uc1xyXG4gIC8qKlxyXG4gKiBDYWxjdWxhdGUgYSAzMiBiaXQgRk5WLTFhIGhhc2hcclxuICogRm91bmQgaGVyZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vdmFpb3JhYmJpdC81NjU3NTYxXHJcbiAqIFJlZi46IGh0dHA6Ly9pc3RoZS5jb20vY2hvbmdvL3RlY2gvY29tcC9mbnYvXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgdGhlIGlucHV0IHZhbHVlXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FzU3RyaW5nPWZhbHNlXSBzZXQgdG8gdHJ1ZSB0byByZXR1cm4gdGhlIGhhc2ggdmFsdWUgYXMgXHJcbiAqICAgICA4LWRpZ2l0IGhleCBzdHJpbmcgaW5zdGVhZCBvZiBhbiBpbnRlZ2VyXHJcbiAqIEBwYXJhbSB7aW50ZWdlcn0gW3NlZWRdIG9wdGlvbmFsbHkgcGFzcyB0aGUgaGFzaCBvZiB0aGUgcHJldmlvdXMgY2h1bmtcclxuICogQHJldHVybnMge2ludGVnZXIgfCBzdHJpbmd9XHJcbiAqL1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBoYXNoKHN0cjogc3RyaW5nLCBhc1N0cmluZz86IGJvb2xlYW4sIHNlZWQ/OiBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgLypqc2hpbnQgYml0d2lzZTpmYWxzZSAqL1xyXG4gICAgbGV0IGksIGwsIGh2YWwgPSAoc2VlZCA9PT0gdW5kZWZpbmVkKSA/IDB4ODExYzlkYzUgOiBzZWVkO1xyXG5cclxuICAgIGZvciAoaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGh2YWwgXj0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgIGh2YWwgKz0gKGh2YWwgPDwgMSkgKyAoaHZhbCA8PCA0KSArIChodmFsIDw8IDcpICsgKGh2YWwgPDwgOCkgKyAoaHZhbCA8PCAyNCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXNTdHJpbmcpIHJldHVybiAoXCIwMDAwMDAwXCIgKyAoaHZhbCA+Pj4gMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTgpOyAvLyBDb252ZXJ0IHRvIDggZGlnaXQgaGV4IHN0cmluZ1xyXG4gICAgZWxzZSByZXR1cm4gaHZhbCA+Pj4gMDtcclxuICB9XHJcblxyXG5cclxuICAvL0Q6XFxMTUNvbVxccmV3XFxXZWI0LnNsbiwgZDpcXExNQ29tXFxyZXdcXGFuZ3VsYXItZGVmaW5pdGVseXR5cGVkXFxhbmd1bGFyMlxcc3JjXFxjb21waWxlclxcdXRpbC50c1xyXG4gIHZhciBDQU1FTF9DQVNFX1JFR0VYUCA9IC8oW0EtWl0pL2c7XHJcbiAgdmFyIERBU0hfQ0FTRV9SRUdFWFAgPSAvLShbYS16XSkvZztcclxuICBleHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9EYXNoQ2FzZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHJlcGxhY2VBbGxNYXBwZWQoaW5wdXQsIENBTUVMX0NBU0VfUkVHRVhQLCBtID0+ICctJyArIG1bMV0udG9Mb3dlckNhc2UoKSk7IH1cclxuICBleHBvcnQgZnVuY3Rpb24gZGFzaENhc2VUb0NhbWVsQ2FzZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHJlcGxhY2VBbGxNYXBwZWQoaW5wdXQsIERBU0hfQ0FTRV9SRUdFWFAsIG0gPT4gbVsxXS50b1VwcGVyQ2FzZSgpKTsgfVxyXG5cclxuICAvL0Q6XFxMTUNvbVxccmV3XFxXZWI0LnNsbiwgZDpcXExNQ29tXFxyZXdcXGFuZ3VsYXItZGVmaW5pdGVseXR5cGVkXFxhbmd1bGFyMlxcc3JjXFxmYWNhZGVcXGxhbmcudHNcclxuICBmdW5jdGlvbiByZXBsYWNlQWxsTWFwcGVkKHM6IHN0cmluZywgZnJvbTogUmVnRXhwLCBjYjogRnVuY3Rpb24pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHMucmVwbGFjZShmcm9tLCBmdW5jdGlvbiAoLi4ubWF0Y2hlcykge1xyXG4gICAgICAvLyBSZW1vdmUgb2Zmc2V0ICYgc3RyaW5nIGZyb20gdGhlIHJlc3VsdCBhcnJheVxyXG4gICAgICBtYXRjaGVzLnNwbGljZSgtMiwgMik7XHJcbiAgICAgIC8vIFRoZSBjYWxsYmFjayByZWNlaXZlcyBtYXRjaCwgcDEsIC4uLiwgcG5cclxuICAgICAgcmV0dXJuIGNiKG1hdGNoZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSIsIi8vZGVjbGFyZSBuYW1lc3BhY2UgX19SZWFjdCB7XHJcbi8vICBpbnRlcmZhY2UgQ1NTUHJvcGVydGllcyB7XHJcbi8vICAgIGZsZXhXcmFwPzogc3RyaW5nO1xyXG4vLyAgfVxyXG4vL31cclxuZW51bSBmbGV4IHtcclxuICBmbGV4LFxyXG5cclxuICBqdXN0aWZ5U3BhY2VCZXR3ZWVuLFxyXG4gIGp1c3RpZnlTcGFjZUFyb3VuZCxcclxuICBqdXN0aWZ5RW5kLFxyXG4gIGp1c3RpZnlTdGFydCxcclxuICBqdXN0aWZ5Q2VudGVyLFxyXG5cclxuICBhbGlnblNlbGZFbmQsXHJcbiAgYWxpZ25TZWxmU3RhcnQsXHJcbiAgYWxpZ25TZWxmQXV0byxcclxuICBhbGlnblNlbGZDZW50ZXIsXHJcbiAgYWxpZ25TZWxmQmFzZWxpbmUsXHJcbiAgYWxpZ25TZWxmU3RyZXRjaCxcclxuXHJcbiAgYWxpZ25Db250ZW50RW5kLFxyXG4gIGFsaWduQ29udGVudFN0YXJ0LFxyXG4gIGFsaWduQ29udGVudENlbnRlcixcclxuICBhbGlnbkNvbnRlbnRTdHJldGNoLFxyXG4gIGFsaWduQ29udGVudFNwYWNlQXJvdW5kLFxyXG4gIGFsaWduQ29udGVudFNwYWNlQmV0d2VlbixcclxuXHJcbiAgYWxpZ25JdGVtc1N0YXJ0LFxyXG4gIGFsaWduSXRlbXNFbmQsXHJcbiAgYWxpZ25JdGVtc0NlbnRlcixcclxuICBhbGlnbkl0ZW1zQmFzZWxpbmUsXHJcbiAgYWxpZ25JdGVtc1N0cmV0Y2gsXHJcblxyXG4gIGRpcmVjdGlvblJvdyxcclxuICBkaXJlY3Rpb25Sb3dSZXZlcnNlLFxyXG4gIGRpcmVjdGlvbkNvbHVtbixcclxuICBkaXJlY3Rpb25Db2x1bW5SZXZlcnNlLFxyXG5cclxuICB3cmFwTm93cmFwLFxyXG4gIHdyYXBXcmFwLFxyXG4gIHdyYXBXcmFwUmV2ZXJzZSxcclxuXHJcbiAgb3JkZXIwLFxyXG4gIG9yZGVyMSxcclxuICBvcmRlcjIsXHJcbiAgb3JkZXIzLFxyXG4gIG9yZGVyNCxcclxuICBvcmRlcjUsXHJcbiAgb3JkZXI2LFxyXG4gIG9yZGVyNyxcclxuICBvcmRlcjgsXHJcbiAgb3JkZXI5LFxyXG5cclxuICBncm93MCxcclxuICBncm93MSxcclxuICBncm93MixcclxuICBncm93MyxcclxuICBncm93NCxcclxuICBncm93NSxcclxuICBncm93NixcclxuICBncm93NyxcclxuICBncm93OCxcclxuICBncm93OSxcclxuXHJcbn1cclxuZnVuY3Rpb24gZmxleENsYXNzKGNsc3M6IEFycmF5PGZsZXg+KTogc3RyaW5nIHtcclxuICBpZiAoIWNsc3MgfHwgY2xzcy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgdmFyIHJlczogQXJyYXk8U3RyaW5nPiA9IFtdO1xyXG4gIGNsc3MuZm9yRWFjaChjID0+IHJlcy5wdXNoKCdmbGV4LScgKyBsaWIuY2FtZWxDYXNlVG9EYXNoQ2FzZShmbGV4W2NdKSkpO1xyXG4gIHJldHVybiByZXMuam9pbignICcpO1xyXG59XHJcblxyXG4vL3ZhciB4ID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZmxleENsYXNzKFtmbGV4Lmp1c3RpZnlDZW50ZXIsIGZsZXguYWxpZ25Db250ZW50Q2VudGVyLCBmbGV4Lm9yZGVyM10pKX0+PC9kaXY+KVxyXG4vL2FsZXJ0KHgpOyIsIm5hbWVzcGFjZSByb3V0ZXIge1xyXG5cclxuICAvL2RpZm90bmkgcm91dGUgcHJvIHByaXBhZCwgemUgamUgVVJMIHByYXpkbmFcclxuICBleHBvcnQgdmFyIGdldFN0YXJ0Um91dGU6ICgpID0+IFRSb3V0ZUFjdGlvblBhcjtcclxuXHJcbiAgLy9ib290IHJvdXRlcnVcclxuICBleHBvcnQgZnVuY3Rpb24gYm9vdEFwcCgpOiBUUm91dGVBY3Rpb25QYXIgeyByZXR1cm4gcm9vdFJvdXRlQmluZChkZWNvZGVGdWxsVXJsKCksIGZhbHNlKTsgfVxyXG5cclxuICAvL25hdmlnYWNlIG5hIHJvdXRlXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRvTmF2aWdhdGUocm91dGVzOiBUUm91dGVBY3Rpb25QYXIsIGV2PzogUmVhY3QuU3ludGhldGljRXZlbnQpIHsgaWYgKGV2KSBldi5wcmV2ZW50RGVmYXVsdCgpOyByZXR1cm4gcm9vdFJvdXRlQmluZChyb3V0ZXMsIHRydWUpOyB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVXJsKHJvdXRlczogVFJvdXRlQWN0aW9uUGFyKTogc3RyaW5nIHsgcmV0dXJuIGVuY29kZUZ1bGxVcmwocm91dGVzKTsgfVxyXG5cclxuICAvL3JvdXRlIGNoYW5nZWQgbm90aWZpY2F0aW9uXHJcbiAgZXhwb3J0IHZhciBvblJvdXRlQ2hhbmdlZDogKHJvdXRlOiBUUm91dGVBY3Rpb25QYXIpID0+IHZvaWQ7XHJcblxyXG4gIC8vcm9vdXRlIG9iamVrdCBzdHJ1Y3R1cmVcclxuICBleHBvcnQgaW50ZXJmYWNlIFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBzdG9yZUlkPzogc3RyaW5nO1xyXG4gICAgaG9va0lkPzogc3RyaW5nOyAvL25hemV2IHByb3BlcnR5IHYgaG9vay5wYXJlbnQgU3RvcmUsIG9ic2FodWppY2kgUm91dGVIb29rRGlzcGF0Y2hlci4gIWhvb2tJZCA9PiByb3V0ZURlZmF1bHRQcm9wTmFtZSBwcm9wZXJ0eVxyXG4gICAgcGFyPzoge307IC8vPHN0b3JlSWQ+LnJvdXRlQWN0aW9uKHBhciwgaG9va0lkKVxyXG4gICAgcm91dGVIb29rRGVmYXVsdD86IFRSb3V0ZUFjdGlvblBhcjsgLy9kaWZvdG5pIGNoaWxkIHJvdXRlIGhvb2tcclxuICAgIC8vLi4uIGRhbHNpLCBuYW1lZCByb3V0ZSBob29rXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8qKioqKioqKioqKioqKioqKiByZWZyZXNoIHZpZXcgb24gcm91dGUgY2hhbmdlXHJcbiAgLy9ha3R1YWxuaSByb3V0ZSBvYmpla3RcclxuICAvL3ZhciByb3V0ZTogVFJvdXRlQWN0aW9uUGFyO1xyXG5cclxuICBmdW5jdGlvbiByb290Um91dGVCaW5kKHJvdXRlczogVFJvdXRlQWN0aW9uUGFyIC8qbnVsbCA9PiBzdGFydCByb3V0ZSovLCB3aXRoUHVzdFN0YXRlOiBib29sZWFuKTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIGlmICghcm91dGVzKSByb3V0ZXMgPSBnZXRTdGFydFJvdXRlID8gZ2V0U3RhcnRSb3V0ZSgpIDogbnVsbDsgaWYgKCFyb3V0ZXMpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBtaXNzaW5nIHJvdXRlc2ApO1xyXG4gICAgLy9yb3V0ZSA9IHJvdXRlcztcclxuICAgIGlmIChvblJvdXRlQ2hhbmdlZCkgb25Sb3V0ZUNoYW5nZWQocm91dGVzKTtcclxuICAgIGlmICh3aXRoUHVzdFN0YXRlKSBwdXNoU3RhdGUocm91dGVzKTtcclxuICAgIHJldHVybiByb3V0ZXM7XHJcbiAgfVxyXG5cclxuICAvLyoqKioqKioqKioqKioqKioqIFBPUFNUQVRFIEVWRU5UIFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZXYgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYD4gcG9wc3RhdGU6ICR7d2luZG93LmxvY2F0aW9uLmhyZWZ9YCk7XHJcbiAgICByb290Um91dGVCaW5kKGRlY29kZUZ1bGxVcmwoKSwgZmFsc2UpO1xyXG4gIH0pO1xyXG5cclxuICAvL21vZGlmeSBicm93c2VyIFVSTFxyXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZShyb3V0ZTogVFJvdXRlQWN0aW9uUGFyKSB7XHJcbiAgICBsZXQgdXJsU3RyID0gZW5jb2RlRnVsbFVybChyb3V0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhgPiBwdXNoU3RhdGU6ICR7dXJsU3RyfWApO1xyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdXJsU3RyKTtcclxuICB9XHJcblxyXG4gIC8vcm91dGEgcGFycyBhcmUgYWZ0ZXIgXCIuaHRtbFwiIHVybCBwYXJ0XHJcbiAgZnVuY3Rpb24gZ2V0QmFzaWNVcmwoc3RhcnRVcmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgaWR4ID0gc3RhcnRVcmwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGluZGV4X0h0bWwpOyByZXR1cm4gaWR4ID49IDAgPyBzdGFydFVybC5zdWJzdHIoMCwgaWR4ICsgaW5kZXhfSHRtbC5sZW5ndGgpIDogc3RhcnRVcmw7XHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4X0h0bWwgPSAnaW5kZXguaHRtbCc7XHJcblxyXG4gIHZhciByb3V0ZVBhcklnbm9yZXMgPSBbJ3N0b3JlSWQnLCAnaG9va0lkJywgJ3BhciddO1xyXG4gIHZhciByb3V0ZUhvb2tEZWZhdWx0TmFtZSA9ICdyb3V0ZUhvb2tEZWZhdWx0JztcclxuXHJcbiAgZnVuY3Rpb24gZW5jb2RlVXJsKHN0OiBUUm91dGVBY3Rpb25QYXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgZW5jb2RlVXJsTG93KHJlcywgc3QsIG51bGwpO1xyXG4gICAgbGV0IHVybCA9IHJlcy5qb2luKCcnKTtcclxuICAgIHJldHVybiBjbGVhclNsYXNoZXModXJsLnJlcGxhY2UoLyhcXCRcXC8pKiQvZywgJycpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVuY29kZUZ1bGxVcmwoc3Q6IFRSb3V0ZUFjdGlvblBhcik6IHN0cmluZyB7XHJcbiAgICBsZXQgdXJsU3RyID0gc3QgPyBlbmNvZGVVcmwoc3QpIDogbnVsbDtcclxuICAgIC8vcmV0dXJuICRiYXNpY1VybCArICh1cmxTdHIgPyAoJGlzSGFzaFJvdXRlciA/ICcjJyA6ICcvJykgKyB1cmxTdHIgOiAnJyk7XHJcbiAgICByZXR1cm4gJGJhc2ljVXJsICsgKHVybFN0ciA/ICgkaXNIYXNoUm91dGVyID8gJyMnIDogJz8nKSArIHVybFN0ciA6ICcnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlY29kZUZ1bGxVcmwodXJsPzogc3RyaW5nKTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIHJldHVybiBkZWNvZGVVcmwoZGVjb2RlVXJsUGFydCh1cmwpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlY29kZVVybFBhcnQodXJsPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGlmICghdXJsLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgkYmFzaWNVcmwpKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihgbG9jYXRpb24uaHJlZiBkb2VzIG5vdCBzdGFydCB3aXRoICR7JGJhc2ljVXJsfWApO1xyXG4gICAgbGV0IHJlcyA9IGNsZWFyU2xhc2hlcyh1cmwuc3Vic3RyKCRiYXNpY1VybC5sZW5ndGgpKTtcclxuICAgIGlmICghcmVzIHx8IHJlcyA9PSAnJykgcmV0dXJuIHJlcztcclxuICAgIHJlcyA9IGRlY29kZVVSSUNvbXBvbmVudChyZXMuc3BsaXQoJyZnY2xpZCcpWzBdKTsgLy9nb29nbGUgcHJpZGEgZG8gdnlzbGVka3UgaGxlZGFuaSB0ZW50byBwYXJhbWV0ciwgdml6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzY1ODg4L2hvdy10by1kZWNvZGUtZ29vZ2xlLWdjbGlkc1xyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlY29kZVVybCh1cmw/OiBzdHJpbmcpOiBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgaWYgKCF1cmwpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIGRlY29kZVVybExvdyh1cmwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUm91dGUoc3RvcmVJZDogc3RyaW5nLCBwYXI/OiB7fSwgcm91dGVIb29rRGVmYXVsdD86IFRSb3V0ZUFjdGlvblBhciwgb3RoZXJIb29rcz86IHsgW25hbWU6IHN0cmluZ106IFRSb3V0ZUFjdGlvblBhcjsgfSk6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBsZXQgcmVzOiBUUm91dGVBY3Rpb25QYXIgPSB7IHN0b3JlSWQ6IHN0b3JlSWQsIHBhcjogcGFyIH07XHJcbiAgICBpZiAocm91dGVIb29rRGVmYXVsdCkgeyByZXMucm91dGVIb29rRGVmYXVsdCA9IHJvdXRlSG9va0RlZmF1bHQ7IGRlbGV0ZSByb3V0ZUhvb2tEZWZhdWx0Lmhvb2tJZDsgfVxyXG4gICAgaWYgKG90aGVySG9va3MpXHJcbiAgICAgIGZvciAobGV0IHAgaW4gb3RoZXJIb29rcykgeyBsZXQgaGsgPSByZXNbcF0gPSBvdGhlckhvb2tzW3BdOyBoay5ob29rSWQgPSBwOyB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q2hpbGRSb3V0ZVByb3BOYW1lcyhzdDogVFJvdXRlQWN0aW9uUGFyKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICBsZXQgcHJvcHMgPSBbXTtcclxuICAgIGZvciAobGV0IHAgaW4gc3QpIGlmIChyb3V0ZVBhcklnbm9yZXMuaW5kZXhPZihwKSA8IDApIHByb3BzLnB1c2gocCk7XHJcbiAgICByZXR1cm4gcHJvcHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGVVcmxMb3codXJsOiBzdHJpbmcpOiBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgaWYgKCEkaXNIYXNoUm91dGVyKSB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcclxuICAgIHVybCA9ICd7JyArIHVybC5yZXBsYWNlKC9cXCRcXC8vZywgJ30nKS5yZXBsYWNlKC9cXC8vZywgJ3snKTtcclxuICAgIGxldCBzdGFjazogQXJyYXk8SURlY29kZVN0YWNrPiA9IFtdOyBsZXQgaSA9IDA7IGxldCBjaDogc3RyaW5nOyBsZXQgcmVzOiBJRGVjb2RlU3RhY2sgPSBudWxsO1xyXG4gICAgbGV0IHBhcnNlUm91dGUgPSAoZW5kSWR4OiBudW1iZXIsIHN0OiBJRGVjb2RlU3RhY2spID0+IHtcclxuICAgICAgbGV0IHMgPSB1cmwuc3Vic3RyaW5nKHN0Lm9wZW5JZHgsIGVuZElkeCAtIDEpO1xyXG4gICAgICBsZXQgcGFydHMgPSBzLnNwbGl0KCc7Jyk7XHJcbiAgICAgIGxldCBwcm9wQ29tcCA9IHBhcnRzWzBdLnNwbGl0KCctJyk7IGlmIChwcm9wQ29tcC5sZW5ndGggPiAyKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbigncHJvcENvbXAubGVuZ3RoID4gMicpO1xyXG4gICAgICBzdC5ob29rSWQgPSBwcm9wQ29tcC5sZW5ndGggPT0gMSA/IG51bGwgOiBwcm9wQ29tcFswXTtcclxuICAgICAgc3Qucm91dGUgPSB7IHN0b3JlSWQ6IHByb3BDb21wLmxlbmd0aCA9PSAxID8gcHJvcENvbXBbMF0gOiBwcm9wQ29tcFsxXSB9O1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbnYgPSBwYXJ0c1tpXS5zcGxpdCgnPScpO1xyXG4gICAgICAgIGlmICghc3Qucm91dGUucGFyKSBzdC5yb3V0ZS5wYXIgPSB7fTtcclxuICAgICAgICBzdC5yb3V0ZS5wYXJbbnZbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG52WzFdKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgIGlmIChpID49IHVybC5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoc3RhY2subGVuZ3RoID49IDEpIGNoID0gJ30nOyBlbHNlIGJyZWFrO1xyXG4gICAgICAgIGkgPSB1cmwubGVuZ3RoICsgMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjaCA9IHVybC5jaGFyQXQoaSk7IGkrKztcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2ggKGNoKSB7XHJcbiAgICAgICAgY2FzZSAneyc6XHJcbiAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID09IDApIHsgcmVzID0geyBvcGVuSWR4OiBpIH07IHN0YWNrLnB1c2gocmVzKTsgYnJlYWs7IH0gLy9yb290XHJcbiAgICAgICAgICBsZXQgbGFzdCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgaWYgKCFsYXN0LnJvdXRlKSBwYXJzZVJvdXRlKGksIGxhc3QpOyAvL3pwcmFjdWogc2VrdmVuY2kgbWV6aSB7eHh4eHtcclxuICAgICAgICAgIHN0YWNrLnB1c2goeyBvcGVuSWR4OiBpIH0pOyAvL3phY25pIG5vdnkgc3RhY2tcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ30nOlxyXG4gICAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA9PSAwKSBicmVhaztcclxuICAgICAgICAgIGxldCBsYXN0MiA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgaWYgKCFsYXN0Mi5yb3V0ZSkgcGFyc2VSb3V0ZShpLCBsYXN0Mik7IC8venByYWN1aiBzZWt2ZW5jaSBtZXppIHt4eHh4fSwgeHh4IGplIGJleiB7IGkgfVxyXG4gICAgICAgICAgbGV0IHBhclByb3AgPSBsYXN0Mi5ob29rSWQgPyBsYXN0Mi5ob29rSWQgOiByb3V0ZUhvb2tEZWZhdWx0TmFtZTtcclxuICAgICAgICAgIGlmIChwYXJQcm9wICE9IHJvdXRlSG9va0RlZmF1bHROYW1lKSBsYXN0Mi5yb3V0ZS5ob29rSWQgPSBwYXJQcm9wO1xyXG4gICAgICAgICAgLy9uYXZhemFuaSBuYSBwYXJlbnQgcm91dGVcclxuICAgICAgICAgIGxldCBwYXIgPSBzdGFja1tzdGFjay5sZW5ndGggLSAyXTtcclxuICAgICAgICAgIGlmIChwYXIpIHBhci5yb3V0ZVtwYXJQcm9wXSA9IGxhc3QyLnJvdXRlO1xyXG4gICAgICAgICAgLy92eW5kZWogemUgc3RhY2t1XHJcbiAgICAgICAgICBzdGFjay5zcGxpY2Uoc3RhY2subGVuZ3RoIC0gMSwgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5yb3V0ZTtcclxuICB9XHJcblxyXG4gIGludGVyZmFjZSBJRGVjb2RlU3RhY2sge1xyXG4gICAgb3BlbklkeDogbnVtYmVyO1xyXG4gICAgcm91dGU/OiBUUm91dGVBY3Rpb25QYXI7XHJcbiAgICBob29rSWQ/OiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmNvZGVVcmxMb3cocmVzOiBBcnJheTxzdHJpbmc+LCBzdDogVFJvdXRlQWN0aW9uUGFyLCBwYXJlbnRQcm9wTmFtZT86IHN0cmluZykge1xyXG4gICAgcmVzLnB1c2goKHBhcmVudFByb3BOYW1lID8gcGFyZW50UHJvcE5hbWUgKyAnLScgOiAnJykgKyAoc3Quc3RvcmVJZCA/IHN0LnN0b3JlSWQgOiAnJykpO1xyXG4gICAgaWYgKHN0LnBhcikge1xyXG4gICAgICBsZXQgcHJvcHMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgcCBpbiBzdC5wYXIpIHByb3BzLnB1c2gocCk7XHJcbiAgICAgIHByb3BzLnNvcnQoKS5mb3JFYWNoKHAgPT4gcmVzLnB1c2goYDske3B9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN0LnBhcltwXSl9YCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q2hpbGRSb3V0ZVByb3BOYW1lcyhzdCkuc29ydCgpLmZvckVhY2gocCA9PiB7XHJcbiAgICAgIHJlcy5wdXNoKCcvJyk7XHJcbiAgICAgIGVuY29kZVVybExvdyhyZXMsIHN0W3BdLCBwID09IHJvdXRlSG9va0RlZmF1bHROYW1lID8gbnVsbCA6IHApO1xyXG4gICAgICByZXMucHVzaCgnJC8nKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJTbGFzaGVzKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykucmVwbGFjZSgvXltcXCNcXC9cXD9dPy8sICcnKTsgfVxyXG5cclxuICAvL2NvbmZpZ1xyXG4gIGV4cG9ydCB2YXIgJGlzSGFzaFJvdXRlciA9IGZhbHNlOyAvL2hhc2ggb3Igc2xhc2ggcm91dGUgZGVsaW1pdGVyXHJcbiAgZXhwb3J0IHZhciAkYmFzaWNVcmwgPSBnZXRCYXNpY1VybCh3aW5kb3cubG9jYXRpb24uaHJlZik7IC8vY2FzdCBVUkwgcHJlZCByb3V0ZSBwYXJhbWF0dGVyXHJcbn0iLCJuYW1lc3BhY2Ugc2l0ZSB7XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSU5vZGUge1xyXG4gICAgaWQ6IHN0cmluZyB8IG51bWJlcjtcclxuICAgIHRpdGxlPzogc3RyaW5nOyAvL2NoeWJpLWxpLCB2ZXptZSBzZSB6IElUYWIudGl0bGUgXHJcbiAgICBiclRpdGxlPzpzdHJpbmc7IC8vdGl0bGUgcHJvIGJyZWFkY3J1bWJcclxuICAgIGNyZWF0ZVBhZ2U6IChyb3V0ZVBhcikgPT4gSlNYLkVsZW1lbnQsXHJcbiAgICBwYXRoPzogc3RyaW5nO1xyXG4gICAgY2hpbGRzPzogQXJyYXk8SU5vZGU+O1xyXG4gICAgcGFyZW50PzogSU5vZGU7XHJcbiAgICBsYXJnZUxvZ28/OiBib29sZWFuOyAvL3ZlbGtlIGxvZ28gdiBjaGxhZGljaVxyXG4gICAgdGFiPzogSVRhYjsgLy9teSB0YWJcclxuICAgIG5vVGl0bGU/OmJvb2xlYW47IC8vcGFnZSB0ZW1wbGF0ZSBuZWdlbmVydWplIHRpdGxlIHN0cmFua3lcclxuICB9XHJcbiAgZXhwb3J0IHZhciByb290OiBJTm9kZTtcclxuICBleHBvcnQgdmFyIG5vZGVzOiB7IFtwYXRoOiBzdHJpbmddOiBJTm9kZTsgfSA9IHt9O1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gYm9vdEFwcCgpIHtcclxuICAgIGZ1bmN0aW9uIGluaXROb2RlKHBhcmVudDogSU5vZGUsIG5kOiBJTm9kZSkge1xyXG4gICAgICBuZC5jaGlsZHMgPSBub2RlQ2hpbGRzKG5kKTtcclxuICAgICAgbmQucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICBpZiAoIW5kLnRhYikgbmQudGFiID0gbmQucGFyZW50LnRhYjtcclxuICAgICAgbmQucGF0aCA9IGdldE5vZGVQYXRoKG5kKTtcclxuICAgICAgaWYgKG5vZGVzW25kLnBhdGhdKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihgU2l0ZU1hcCBub2RlICR7bmQucGF0aH0gYWxyZWFkeSBleGlzdHMhYCk7XHJcbiAgICAgIG5vZGVzW25kLnBhdGhdID0gbmQ7XHJcbiAgICAgIGlmIChuZC5jaGlsZHMpIG5kLmNoaWxkcy5mb3JFYWNoKG4gPT4gaW5pdE5vZGUobmQsIG4pKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGluaXRUYWJzKCkge1xyXG4gICAgICB0YWJzLiRjaGlsZHMgPSBbXTsgdmFyIGlkeCA9IDA7XHJcbiAgICAgIGZvciAodmFyIHAgaW4gdGFicykge1xyXG4gICAgICAgIGlmIChwLnN0YXJ0c1dpdGgoJyQnKSkgY29udGludWU7XHJcbiAgICAgICAgdmFyIHQ6IElUYWIgPSB0YWJzW3BdOyB0YWJzLiRjaGlsZHMucHVzaCh0KTsgdC5pZHggPSBpZHgrKztcclxuICAgICAgICBpZiAoIXQucm9vdE5vZGUpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKCchdC5yb290Tm9kZScpO1xyXG4gICAgICAgIHQucm9vdE5vZGUudGFiID0gdDtcclxuICAgICAgICBpZiAoIXQucm9vdE5vZGUudGl0bGUpIHQucm9vdE5vZGUudGl0bGUgPSB0LnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbml0VGFicygpO1xyXG4gICAgaW5pdE5vZGUobnVsbCwgcm9vdCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbm9kZVBhcmVudHMobmQ6IElOb2RlLCBpZ25vcmVTZWxmPzogYm9vbGVhbik6IEFycmF5PElOb2RlPiB7XHJcbiAgICB2YXIgcmVzOiBub2RlUGFyZW50c1Jlc3VsdCA9IHt9O1xyXG4gICAgbm9kZVBhcmVudHNMb3cobmQsIHJlcywgaWdub3JlU2VsZik7XHJcbiAgICByZXR1cm4gcmVzLnJlcy5yZXZlcnNlKCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElUYWJzIHtcclxuICAgICRjaGlsZHM/OiBBcnJheTxJVGFiPjtcclxuICB9XHJcbiAgZXhwb3J0IGludGVyZmFjZSBJVGFiIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpZHg/OiBudW1iZXI7XHJcbiAgICByb290Tm9kZT86IElOb2RlOyAvL2hsYXZuaSBzdHJhbmthIHBybyB0YWJcclxuICB9XHJcbiAgZXhwb3J0IHZhciB0YWJzOiBJVGFicztcclxuXHJcbiAgZXhwb3J0IHZhciBnZXRCbGFua1BhZ2U6IChyb3V0ZVBhcikgPT4gSlNYLkVsZW1lbnQ7XHJcblxyXG4gIC8vKioqKioqKioqKiogUHJpdmF0ZVxyXG5cclxuICBmdW5jdGlvbiBub2RlQ2hpbGRzKG5kOiBJTm9kZSk6IEFycmF5PElOb2RlPiB7XHJcbiAgICB2YXIgcmVzOiBBcnJheTxJTm9kZT4gPSBudWxsO1xyXG4gICAgZm9yICh2YXIgcCBpbiBuZCkge1xyXG4gICAgICB2YXIgc3ViTmQ6IElOb2RlID0gbmRbcF07XHJcbiAgICAgIGlmICghc3ViTmQgLyp8fCAhc3ViTmQudGl0bGUqLyB8fCAhc3ViTmQuaWQpIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoIXJlcykgcmVzID0gW3N1Yk5kXTsgZWxzZSByZXMucHVzaChzdWJOZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbm9kZVBhcmVudHNMb3cobmQ6IElOb2RlLCByZXM6IG5vZGVQYXJlbnRzUmVzdWx0LCBpZ25vcmVTZWxmOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXJlcy5yZXMpIHJlcy5yZXMgPSBpZ25vcmVTZWxmID8gW10gOiBbbmRdO1xyXG4gICAgd2hpbGUgKG5kLnBhcmVudCkgeyBuZCA9IG5kLnBhcmVudDsgcmVzLnJlcy5wdXNoKG5kKTsgfVxyXG4gIH1cclxuICBpbnRlcmZhY2Ugbm9kZVBhcmVudHNSZXN1bHQgeyByZXMgPzogQXJyYXk8SU5vZGU+IH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Tm9kZVBhdGgobmQ6IElOb2RlKTogc3RyaW5nIHsgcmV0dXJuIG5vZGVQYXJlbnRzKG5kKS5tYXAobiA9PiBuLmlkKS5qb2luKCd8JykudG9Mb3dlckNhc2UoKTsgfVxyXG59IiwibmFtZXNwYWNlIHNpdGVtYXBSb3V0ZXIge1xyXG5cclxuICBleHBvcnQgdmFyIGNoaWxkQ29udGV4dFR5cGVzOiBSZWFjdC5WYWxpZGF0aW9uTWFwPGFueT4gPSB7XHJcbiAgICBzaXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgcm91dGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgfVxyXG5cclxuICBleHBvcnQgY2xhc3MgQXBwUm9vdENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUm9vdFByb3BzLCByb3V0ZXIuVFJvdXRlQWN0aW9uUGFyPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwOiBJUm9vdFByb3BzLCBjdHgpIHtcclxuICAgICAgc3VwZXIocCwgY3R4KTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHAuaW5pdFJvdXRlO1xyXG4gICAgICByb290Q29tcCA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gICAgICB0aGlzLmFjdE5vZGUgPSBzaXRlLm5vZGVzW3RoaXMuc3RhdGUuc3RvcmVJZC50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgaWYgKCF0aGlzLmFjdE5vZGUpIHRoaXMuYWN0Tm9kZSA9IHNpdGUucm9vdDsgLy8gIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBOb2RlIHBhdGggJHt0aGlzLnN0YXRlLnN0b3JlSWR9IG5vdCBmb3VuZGApO1xyXG4gICAgICB2YXIgcmVzID0gKHRoaXMuYWN0Tm9kZS5jcmVhdGVQYWdlID8gdGhpcy5hY3ROb2RlLmNyZWF0ZVBhZ2UgOiBzaXRlLmdldEJsYW5rUGFnZSkoKHRoaXMuc3RhdGUucGFyKSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBhY3ROb2RlOiBzaXRlLklOb2RlO1xyXG5cclxuICAgIGdldENoaWxkQ29udGV4dCgpOiBJQ29udGV4dCB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2l0ZTogdGhpcy5hY3ROb2RlLFxyXG4gICAgICAgIHJvdXRlOiB0aGlzLnN0YXRlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVVybDxUPihub2RlOiBzaXRlLklOb2RlLCBwYXI/OiBUKSB7IHJvdXRlci5uYXZpZ2F0ZVVybCh7IHN0b3JlSWQ6IG5vZGUucGF0aCwgcGFyOiBwYXIgfSk7IH1cclxuICBleHBvcnQgZnVuY3Rpb24gZG9OYXZpZ2F0ZTxUPihub2RlOiBzaXRlLklOb2RlLCBldj86IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCBwYXI/OiBUKSB7IHJvdXRlci5kb05hdmlnYXRlKHsgc3RvcmVJZDogbm9kZS5wYXRoLCBwYXI6IHBhciB9LCBldik7IH1cclxuICBleHBvcnQgZnVuY3Rpb24gZG9OYXZpZ2F0ZVRhZzxUPihub2RlOiBzaXRlLklOb2RlLCBldj86IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCBwYXI/OiBUKTogSlNYLkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIDxhIGhyZWY9XCIjXCIga2V5PXtub2RlLnBhdGh9IG9uQ2xpY2s9e2V2ID0+IGRvTmF2aWdhdGUobm9kZSwgZXYsIHBhcikgfT57bm9kZS50aXRsZX08L2E+O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQ8UD4odHlwZTogUmVhY3QuQ29tcG9uZW50Q2xhc3M8UD4gfCBSZWFjdC5TRkM8UD4sIHJvdXRlUGFyLCBwcm9wczogUCAmIFJlYWN0LkF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVbXSk6IFJlYWN0LlJlYWN0RWxlbWVudDxQPiB7XHJcbiAgICB2YXIgcGFyOiBQID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHJvdXRlUGFyKTtcclxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHR5cGUsIHBhcik7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gYm9vdEFwcChjb250ZW50OiBIVE1MRWxlbWVudCwgc2l0ZW1hcENyZWF0b3I6IGxpYi5UQ2FsbGJhY2spIHtcclxuICAgIHNpdGVtYXBDcmVhdG9yKCk7XHJcbiAgICBzaXRlLmJvb3RBcHAoKTtcclxuICAgIHZhciBzdGFydFJvdXRlID0gcm91dGVyLmJvb3RBcHAoKTtcclxuICAgIFJlYWN0RE9NLnJlbmRlcig8QXBwUm9vdENvbXBvbmVudCBpbml0Um91dGU9eyBzdGFydFJvdXRlIH0gLz4sIGNvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJQ29udGV4dCB7XHJcbiAgICBzaXRlOiBzaXRlLklOb2RlO1xyXG4gICAgcm91dGU6IHJvdXRlci5UUm91dGVBY3Rpb25QYXJcclxuICB9XHJcblxyXG4gIC8vKioqKioqKioqKiBQcml2YXRlXHJcbiAgdmFyIHJvb3RDb21wOiBBcHBSb290Q29tcG9uZW50O1xyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVJvb3RQcm9wcyB7IGluaXRSb3V0ZTogcm91dGVyLlRSb3V0ZUFjdGlvblBhciB9XHJcblxyXG4gIHJvdXRlci5nZXRTdGFydFJvdXRlID0gKCkgPT4geyByZXR1cm4geyBzdG9yZUlkOiBzaXRlLnJvb3QucGF0aCB9OyB9O1xyXG4gIHJvdXRlci5vblJvdXRlQ2hhbmdlZCA9IHJvdXRlID0+IHsgaWYgKHJvb3RDb21wKSByb290Q29tcC5zZXRTdGF0ZShyb3V0ZSk7IH07XHJcblxyXG59IiwibmFtZXNwYWNlIHNlcnZpY2VzIHtcclxuICBleHBvcnQgaW50ZXJmYWNlIHNlcnZpY2VPVVQge1xyXG4gICAgZXJyb3I6IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBjYWxsUmVxdWVzdDxUSU4sIFRPVVQgZXh0ZW5kcyBzZXJ2aWNlT1VUPihtZXRob2RQYXRoOiBzdHJpbmcsIGluUGFyOiBUSU4sIGlzR2V0PzogYm9vbGVhbik6IFByb21pc2U8VE9VVD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdmFyIHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgdmFyIHVybCA9IGAke21ldGhvZFBhdGh9L3NlcnZpY2UuYXNoeGA7XHJcbiAgICAgIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHZhciByZXNwID0geG1saHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgdmFyIHJlczogVE9VVCA9IHJlc3AgPyBKU09OLnBhcnNlKHJlc3ApIDogbnVsbDtcclxuICAgICAgICAgICAgICB2YXIgZXJyb3IgPSByZXMgPyByZXMuZXJyb3IgOiBudWxsO1xyXG4gICAgICAgICAgICAgIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTsgZWxzZSByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKG1zZykge1xyXG4gICAgICAgICAgICAgIHJlamVjdChgSlNPTiBleGNlcHRpb24gJHttc2d9IGF0ICR7dXJsfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgcmVqZWN0KGBTdGF0dXMgJHt4bWxodHRwLnN0YXR1c30gYXQgJHt1cmx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBsZXQgaW5QYXJKc29uID0gaW5QYXIgPyBKU09OLnN0cmluZ2lmeShpblBhciwgbnVsbCwgMikgOiAnJztcclxuICAgICAgaWYgKGlzR2V0KSB7XHJcbiAgICAgICAgeG1saHR0cC5vcGVuKCdHRVQnLCB1cmwgKyAnPycgKyBlbmNvZGVVUklDb21wb25lbnQoaW5QYXJKc29uKSwgdHJ1ZSk7XHJcbiAgICAgICAgeG1saHR0cC5zZW5kKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeG1saHR0cC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWxodHRwLnNlbmQoaW5QYXJKc29uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwibmFtZXNwYWNlIHNlcnZpY2VzLmVtYWlsZXIge1xyXG4gIGV4cG9ydCBpbnRlcmZhY2Ugc2VuZEVtYWlsSU4ge1xyXG4gICAgZnJvbTogc3RyaW5nO1xyXG4gICAgdG86IHN0cmluZzsgLy9lLmcuIFwiSm9zZWYgTm92YWtcIjxqb3NlZkBsbS5jej4sXCJKYW5hIEtcIjxqYW5hQGxtLmN6PlxyXG4gICAgY2M/OiBzdHJpbmc7XHJcbiAgICBiY2M/OiBzdHJpbmc7XHJcbiAgICBpc0JvZHlIdG1sPzogYm9vbGVhbjtcclxuICAgIGJvZHk6IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gICAgc3ViamVjdDogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbmRFTWFpbChlbWFpbDogc2VuZEVtYWlsSU4sIGNvbXBsZXRlZDogbGliLlRDYWxsYmFjaykge1xyXG4gICAgZW1haWwuaXNCb2R5SHRtbCA9IHR5cGVvZiBlbWFpbC5ib2R5ICE9IFwic3RyaW5nXCI7XHJcbiAgICBpZiAoZW1haWwuaXNCb2R5SHRtbCkgZW1haWwuYm9keSA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGVtYWlsLmJvZHkgYXMgSlNYLkVsZW1lbnQpO1xyXG4gICAgc2VydmljZXMuY2FsbFJlcXVlc3QoJ2xpYnMvc2VydmljZS1lbWFpbGVyJywgZW1haWwpLnRoZW4oKCkgPT4gY29tcGxldGVkKCkpLmNhdGNoKGVyciA9PiB7IHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGVycik7IH0pO1xyXG4gIH1cclxuXHJcbiAgLy9hbGVydChSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cCg8ZGl2Pnh4eDwvZGl2PikpO1xyXG4gIC8vc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgLy8gIGRlYnVnZ2VyO1xyXG4gIC8vICBhbGVydChSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cCg8ZGl2Pnh4eDwvZGl2PikpO1xyXG4gIC8vfSk7XHJcblxyXG59Il19