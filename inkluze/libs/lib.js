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
    })(emailer = services.emailer || (services.emailer = {}));
})(services || (services = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vTGliL2xpYnMvY29tbW9uL3JlYWN0LWRvbS1zZXJ2ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9jb21tb24vcmVhY3QtYm9vdHN0cmFwLnRzIiwiLi4vLi4vTGliL2xpYnMvY29tbW9uL2xpYi50c3giLCIuLi8uLi9MaWIvbGlicy9jb21tb24vZmxleC1ib3gudHN4IiwiLi4vLi4vTGliL2xpYnMvZmx1eC9yb3V0ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXAudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXAtcm91dGVyLnRzeCIsIi4uLy4uL0xpYi9saWJzL3NlcnZpY2VzL2NvbW1vbi50cyIsIi4uLy4uL0xpYi9saWJzL3NlcnZpY2UtZW1haWxlci9lbWFpbGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxJQUFJLGNBQWMsR0FBZSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztBQ0w5RixJQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQ3JDLElBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDckMsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUMvQixJQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDL0MsSUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUN6QyxJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO0FBQzdDLElBQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDbkMsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUMvQixJQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQy9CLElBQU0sSUFBSSxHQUFH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LE9BQU8sRUFBQyxDQUFDO1FBVzFCLG1CQUEwQixLQUFrQixFQUFFLFNBQXdCO1lBQ3BFLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxLQUFLLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQztZQUNqRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2dCQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxJQUFtQixDQUFDLENBQUM7WUFDbEcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLFNBQVMsRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlILENBQUM7UUFKZSxpQkFBUyxZQUl4QixDQUFBO0lBUUgsQ0FBQyxFQXZCa0IsT0FBTyxHQUFQLGdCQUFPLEtBQVAsZ0JBQU8sUUF1QnpCO0FBQUQsQ0FBQyxFQXZCUyxRQUFRLEtBQVIsUUFBUSxRQXVCakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSURPTVNlcnZlciB7XHJcbiAgcmVuZGVyVG9TdHJpbmcoZWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pOiBzdHJpbmc7XHJcbiAgcmVuZGVyVG9TdGF0aWNNYXJrdXAoZWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pOiBzdHJpbmc7XHJcbn1cclxuXHJcbnZhciBSZWFjdERPTVNlcnZlcjogSURPTVNlcnZlciA9IFJlYWN0WydfX1NFQ1JFVF9ET01fU0VSVkVSX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQnXTsiLCJjb25zdCBCdXR0b24gPSBSZWFjdEJvb3RzdHJhcC5CdXR0b247IFxyXG5jb25zdCBOYXZiYXIgPSBSZWFjdEJvb3RzdHJhcC5OYXZiYXI7IFxyXG5jb25zdCBOYXYgPSBSZWFjdEJvb3RzdHJhcC5OYXY7IFxyXG5jb25zdCBOYXZJdGVtID0gUmVhY3RCb290c3RyYXAuTmF2SXRlbTsgXHJcbmNvbnN0IE5hdkRyb3Bkb3duID0gUmVhY3RCb290c3RyYXAuTmF2RHJvcGRvd247XHJcbmNvbnN0IE1lbnVJdGVtID0gUmVhY3RCb290c3RyYXAuTWVudUl0ZW07XHJcbmNvbnN0IEJyZWFkY3J1bWIgPSBSZWFjdEJvb3RzdHJhcC5CcmVhZGNydW1iO1xyXG5jb25zdCBNb2RhbCA9IFJlYWN0Qm9vdHN0cmFwLk1vZGFsO1xyXG5jb25zdCBDb2wgPSBSZWFjdEJvb3RzdHJhcC5Db2w7XHJcbmNvbnN0IFJvdyA9IFJlYWN0Qm9vdHN0cmFwLlJvdztcclxuY29uc3QgR3JpZCA9IFJlYWN0Qm9vdHN0cmFwLkdyaWQ7XHJcbmNvbnN0IENsZWFyZml4ID0gUmVhY3RCb290c3RyYXAuQ2xlYXJmaXg7XHJcbmNvbnN0IExhYmVsID0gUmVhY3RCb290c3RyYXAuTGFiZWw7XHJcbmNvbnN0IFBhbmVsID0gUmVhY3RCb290c3RyYXAuUGFuZWw7XHJcbmNvbnN0IFBhbmVsR3JvdXAgPSBSZWFjdEJvb3RzdHJhcC5QYW5lbEdyb3VwO1xyXG5jb25zdCBGb3JtR3JvdXAgPSBSZWFjdEJvb3RzdHJhcC5Gb3JtR3JvdXA7XHJcbmNvbnN0IEhlbHBCbG9jayA9IFJlYWN0Qm9vdHN0cmFwLkhlbHBCbG9jaztcclxuY29uc3QgRm9ybUNvbnRyb2wgPSBSZWFjdEJvb3RzdHJhcC5Gb3JtQ29udHJvbDtcclxuY29uc3QgQ29udHJvbExhYmVsID0gUmVhY3RCb290c3RyYXAuQ29udHJvbExhYmVsO1xyXG5jb25zdCBBY2NvcmRpb24gPSBSZWFjdEJvb3RzdHJhcC5BY2NvcmRpb247XHJcbmNvbnN0IFJhZGlvID0gUmVhY3RCb290c3RyYXAuUmFkaW87XHJcblxyXG5cclxuXHJcblxyXG4iLCJuYW1lc3BhY2UgbGliIHtcclxuICBleHBvcnQgY2xhc3MgRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobXNnOiBzdHJpbmcpIHtcclxuICAgICAgc3VwZXIobXNnKTtcclxuICAgICAgZGVidWdnZXI7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGNsYXNzIEVOb3RJbXBsZW1lbnRlZCBleHRlbmRzIEV4Y2VwdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2c/OiBzdHJpbmcpIHsgc3VwZXIoYE1pc3NpbmcgJHttc2d9IG92ZXJyaWRlYCk7IH1cclxuICB9XHJcbiAgZXhwb3J0IHR5cGUgVENhbGxiYWNrID0gKCkgPT4gdm9pZDtcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzTmFtZShjb25zdHJ1Y3RvcjogRnVuY3Rpb24pOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlcyA9IGNvbnN0cnVjdG9yWyduYW1lJ107IGlmIChyZXMpIHJldHVybiByZXM7XHJcbiAgICBsZXQgYXJyID0gY29uc3RydWN0b3IudG9TdHJpbmcoKS5tYXRjaCgvZnVuY3Rpb25cXHMqKFxcdyspLyk7XHJcbiAgICByZXR1cm4gYXJyICYmIGFyci5sZW5ndGggPT0gMiA/IGFyclsxXSA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudFByb3BzIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXMge1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBrZXk/OiBhbnk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVFeHQodXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIG5ld1dpbmRvdz86IGJvb2xlYW4pOiBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gPGEgaHJlZj17dXJsfSB0YXJnZXQ9e25ld1dpbmRvdyA/ICdfYmxhbmsnIDogJ19zZWxmJ30+PGkgY2xhc3NOYW1lPSdmYSBmYS1leHRlcm5hbC1saW5rJz48L2k+IHt0aXRsZX08L2E+O1xyXG4gIH1cclxuXHJcbiAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc2MTY0NjEvZ2VuZXJhdGUtYS1oYXNoLWZyb20tc3RyaW5nLWluLWphdmFzY3JpcHQtanF1ZXJ5XHJcbiAgLy9odHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX2hhc2hfZnVuY3Rpb25zXHJcbiAgLyoqXHJcbiAqIENhbGN1bGF0ZSBhIDMyIGJpdCBGTlYtMWEgaGFzaFxyXG4gKiBGb3VuZCBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS92YWlvcmFiYml0LzU2NTc1NjFcclxuICogUmVmLjogaHR0cDovL2lzdGhlLmNvbS9jaG9uZ28vdGVjaC9jb21wL2Zudi9cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciB0aGUgaW5wdXQgdmFsdWVcclxuICogQHBhcmFtIHtib29sZWFufSBbYXNTdHJpbmc9ZmFsc2VdIHNldCB0byB0cnVlIHRvIHJldHVybiB0aGUgaGFzaCB2YWx1ZSBhcyBcclxuICogICAgIDgtZGlnaXQgaGV4IHN0cmluZyBpbnN0ZWFkIG9mIGFuIGludGVnZXJcclxuICogQHBhcmFtIHtpbnRlZ2VyfSBbc2VlZF0gb3B0aW9uYWxseSBwYXNzIHRoZSBoYXNoIG9mIHRoZSBwcmV2aW91cyBjaHVua1xyXG4gKiBAcmV0dXJucyB7aW50ZWdlciB8IHN0cmluZ31cclxuICovXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGhhc2goc3RyOiBzdHJpbmcsIGFzU3RyaW5nPzogYm9vbGVhbiwgc2VlZD86IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XHJcbiAgICAvKmpzaGludCBiaXR3aXNlOmZhbHNlICovXHJcbiAgICBsZXQgaSwgbCwgaHZhbCA9IChzZWVkID09PSB1bmRlZmluZWQpID8gMHg4MTFjOWRjNSA6IHNlZWQ7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaHZhbCBePSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgaHZhbCArPSAoaHZhbCA8PCAxKSArIChodmFsIDw8IDQpICsgKGh2YWwgPDwgNykgKyAoaHZhbCA8PCA4KSArIChodmFsIDw8IDI0KTtcclxuICAgIH1cclxuICAgIGlmIChhc1N0cmluZykgcmV0dXJuIChcIjAwMDAwMDBcIiArIChodmFsID4+PiAwKS50b1N0cmluZygxNikpLnN1YnN0cigtOCk7IC8vIENvbnZlcnQgdG8gOCBkaWdpdCBoZXggc3RyaW5nXHJcbiAgICBlbHNlIHJldHVybiBodmFsID4+PiAwO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vRDpcXExNQ29tXFxyZXdcXFdlYjQuc2xuLCBkOlxcTE1Db21cXHJld1xcYW5ndWxhci1kZWZpbml0ZWx5dHlwZWRcXGFuZ3VsYXIyXFxzcmNcXGNvbXBpbGVyXFx1dGlsLnRzXHJcbiAgdmFyIENBTUVMX0NBU0VfUkVHRVhQID0gLyhbQS1aXSkvZztcclxuICB2YXIgREFTSF9DQVNFX1JFR0VYUCA9IC8tKFthLXpdKS9nO1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2VUb0Rhc2hDYXNlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcgeyByZXR1cm4gcmVwbGFjZUFsbE1hcHBlZChpbnB1dCwgQ0FNRUxfQ0FTRV9SRUdFWFAsIG0gPT4gJy0nICsgbVsxXS50b0xvd2VyQ2FzZSgpKTsgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBkYXNoQ2FzZVRvQ2FtZWxDYXNlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcgeyByZXR1cm4gcmVwbGFjZUFsbE1hcHBlZChpbnB1dCwgREFTSF9DQVNFX1JFR0VYUCwgbSA9PiBtWzFdLnRvVXBwZXJDYXNlKCkpOyB9XHJcblxyXG4gIC8vRDpcXExNQ29tXFxyZXdcXFdlYjQuc2xuLCBkOlxcTE1Db21cXHJld1xcYW5ndWxhci1kZWZpbml0ZWx5dHlwZWRcXGFuZ3VsYXIyXFxzcmNcXGZhY2FkZVxcbGFuZy50c1xyXG4gIGZ1bmN0aW9uIHJlcGxhY2VBbGxNYXBwZWQoczogc3RyaW5nLCBmcm9tOiBSZWdFeHAsIGNiOiBGdW5jdGlvbik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gcy5yZXBsYWNlKGZyb20sIGZ1bmN0aW9uICguLi5tYXRjaGVzKSB7XHJcbiAgICAgIC8vIFJlbW92ZSBvZmZzZXQgJiBzdHJpbmcgZnJvbSB0aGUgcmVzdWx0IGFycmF5XHJcbiAgICAgIG1hdGNoZXMuc3BsaWNlKC0yLCAyKTtcclxuICAgICAgLy8gVGhlIGNhbGxiYWNrIHJlY2VpdmVzIG1hdGNoLCBwMSwgLi4uLCBwblxyXG4gICAgICByZXR1cm4gY2IobWF0Y2hlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59IiwiLy9kZWNsYXJlIG5hbWVzcGFjZSBfX1JlYWN0IHtcclxuLy8gIGludGVyZmFjZSBDU1NQcm9wZXJ0aWVzIHtcclxuLy8gICAgZmxleFdyYXA/OiBzdHJpbmc7XHJcbi8vICB9XHJcbi8vfVxyXG5lbnVtIGZsZXgge1xyXG4gIGZsZXgsXHJcblxyXG4gIGp1c3RpZnlTcGFjZUJldHdlZW4sXHJcbiAganVzdGlmeVNwYWNlQXJvdW5kLFxyXG4gIGp1c3RpZnlFbmQsXHJcbiAganVzdGlmeVN0YXJ0LFxyXG4gIGp1c3RpZnlDZW50ZXIsXHJcblxyXG4gIGFsaWduU2VsZkVuZCxcclxuICBhbGlnblNlbGZTdGFydCxcclxuICBhbGlnblNlbGZBdXRvLFxyXG4gIGFsaWduU2VsZkNlbnRlcixcclxuICBhbGlnblNlbGZCYXNlbGluZSxcclxuICBhbGlnblNlbGZTdHJldGNoLFxyXG5cclxuICBhbGlnbkNvbnRlbnRFbmQsXHJcbiAgYWxpZ25Db250ZW50U3RhcnQsXHJcbiAgYWxpZ25Db250ZW50Q2VudGVyLFxyXG4gIGFsaWduQ29udGVudFN0cmV0Y2gsXHJcbiAgYWxpZ25Db250ZW50U3BhY2VBcm91bmQsXHJcbiAgYWxpZ25Db250ZW50U3BhY2VCZXR3ZWVuLFxyXG5cclxuICBhbGlnbkl0ZW1zU3RhcnQsXHJcbiAgYWxpZ25JdGVtc0VuZCxcclxuICBhbGlnbkl0ZW1zQ2VudGVyLFxyXG4gIGFsaWduSXRlbXNCYXNlbGluZSxcclxuICBhbGlnbkl0ZW1zU3RyZXRjaCxcclxuXHJcbiAgZGlyZWN0aW9uUm93LFxyXG4gIGRpcmVjdGlvblJvd1JldmVyc2UsXHJcbiAgZGlyZWN0aW9uQ29sdW1uLFxyXG4gIGRpcmVjdGlvbkNvbHVtblJldmVyc2UsXHJcblxyXG4gIHdyYXBOb3dyYXAsXHJcbiAgd3JhcFdyYXAsXHJcbiAgd3JhcFdyYXBSZXZlcnNlLFxyXG5cclxuICBvcmRlcjAsXHJcbiAgb3JkZXIxLFxyXG4gIG9yZGVyMixcclxuICBvcmRlcjMsXHJcbiAgb3JkZXI0LFxyXG4gIG9yZGVyNSxcclxuICBvcmRlcjYsXHJcbiAgb3JkZXI3LFxyXG4gIG9yZGVyOCxcclxuICBvcmRlcjksXHJcblxyXG4gIGdyb3cwLFxyXG4gIGdyb3cxLFxyXG4gIGdyb3cyLFxyXG4gIGdyb3czLFxyXG4gIGdyb3c0LFxyXG4gIGdyb3c1LFxyXG4gIGdyb3c2LFxyXG4gIGdyb3c3LFxyXG4gIGdyb3c4LFxyXG4gIGdyb3c5LFxyXG5cclxufVxyXG5mdW5jdGlvbiBmbGV4Q2xhc3MoY2xzczogQXJyYXk8ZmxleD4pOiBzdHJpbmcge1xyXG4gIGlmICghY2xzcyB8fCBjbHNzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuICB2YXIgcmVzOiBBcnJheTxTdHJpbmc+ID0gW107XHJcbiAgY2xzcy5mb3JFYWNoKGMgPT4gcmVzLnB1c2goJ2ZsZXgtJyArIGxpYi5jYW1lbENhc2VUb0Rhc2hDYXNlKGZsZXhbY10pKSk7XHJcbiAgcmV0dXJuIHJlcy5qb2luKCcgJyk7XHJcbn1cclxuXHJcbi8vdmFyIHggPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cCg8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhmbGV4Q2xhc3MoW2ZsZXguanVzdGlmeUNlbnRlciwgZmxleC5hbGlnbkNvbnRlbnRDZW50ZXIsIGZsZXgub3JkZXIzXSkpfT48L2Rpdj4pXHJcbi8vYWxlcnQoeCk7IiwibmFtZXNwYWNlIHJvdXRlciB7XHJcblxyXG4gIC8vZGlmb3RuaSByb3V0ZSBwcm8gcHJpcGFkLCB6ZSBqZSBVUkwgcHJhemRuYVxyXG4gIGV4cG9ydCB2YXIgZ2V0U3RhcnRSb3V0ZTogKCkgPT4gVFJvdXRlQWN0aW9uUGFyOyBcclxuXHJcbiAgLy9ib290IHJvdXRlcnVcclxuICBleHBvcnQgZnVuY3Rpb24gYm9vdEFwcCgpOiBUUm91dGVBY3Rpb25QYXIgeyByZXR1cm4gcm9vdFJvdXRlQmluZChkZWNvZGVGdWxsVXJsKCksIGZhbHNlKTsgfVxyXG5cclxuICAvL25hdmlnYWNlIG5hIHJvdXRlXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRvTmF2aWdhdGUocm91dGVzOiBUUm91dGVBY3Rpb25QYXIsIGV2PzogUmVhY3QuU3ludGhldGljRXZlbnQpIHsgaWYgKGV2KSBldi5wcmV2ZW50RGVmYXVsdCgpOyByZXR1cm4gcm9vdFJvdXRlQmluZChyb3V0ZXMsIHRydWUpOyB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVXJsKHJvdXRlczogVFJvdXRlQWN0aW9uUGFyKTogc3RyaW5nIHsgcmV0dXJuIGVuY29kZUZ1bGxVcmwocm91dGVzKTsgfVxyXG5cclxuICAvL3JvdXRlIGNoYW5nZWQgbm90aWZpY2F0aW9uXHJcbiAgZXhwb3J0IHZhciBvblJvdXRlQ2hhbmdlZDogKHJvdXRlOiBUUm91dGVBY3Rpb25QYXIpID0+IHZvaWQ7XHJcblxyXG4gIC8vY29uZmlnXHJcbiAgZXhwb3J0IHZhciAkaXNIYXNoUm91dGVyID0gZmFsc2U7IC8vaGFzaCBvciBzbGFzaCByb3V0ZSBkZWxpbWl0ZXJcclxuICBleHBvcnQgdmFyICRiYXNpY1VybCA9IGdldEJhc2ljVXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTsgLy9jYXN0IFVSTCBwcmVkIHJvdXRlIHBhcmFtYXR0ZXJcclxuXHJcbiAgLy9yb291dGUgb2JqZWt0IHN0cnVjdHVyZVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIHN0b3JlSWQ/OiBzdHJpbmc7XHJcbiAgICBob29rSWQ/OiBzdHJpbmc7IC8vbmF6ZXYgcHJvcGVydHkgdiBob29rLnBhcmVudCBTdG9yZSwgb2JzYWh1amljaSBSb3V0ZUhvb2tEaXNwYXRjaGVyLiAhaG9va0lkID0+IHJvdXRlRGVmYXVsdFByb3BOYW1lIHByb3BlcnR5XHJcbiAgICBwYXI/OiB7fTsgLy88c3RvcmVJZD4ucm91dGVBY3Rpb24ocGFyLCBob29rSWQpXHJcbiAgICByb3V0ZUhvb2tEZWZhdWx0PzogVFJvdXRlQWN0aW9uUGFyOyAvL2RpZm90bmkgY2hpbGQgcm91dGUgaG9va1xyXG4gICAgLy8uLi4gZGFsc2ksIG5hbWVkIHJvdXRlIGhvb2tcclxuICB9XHJcblxyXG5cclxuICAvLyoqKioqKioqKioqKioqKioqIHJlZnJlc2ggdmlldyBvbiByb3V0ZSBjaGFuZ2VcclxuICAvL2FrdHVhbG5pIHJvdXRlIG9iamVrdFxyXG4gIC8vdmFyIHJvdXRlOiBUUm91dGVBY3Rpb25QYXI7XHJcblxyXG4gIGZ1bmN0aW9uIHJvb3RSb3V0ZUJpbmQocm91dGVzOiBUUm91dGVBY3Rpb25QYXIgLypudWxsID0+IHN0YXJ0IHJvdXRlKi8sIHdpdGhQdXN0U3RhdGU6IGJvb2xlYW4pOiBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgaWYgKCFyb3V0ZXMpIHJvdXRlcyA9IGdldFN0YXJ0Um91dGUgPyBnZXRTdGFydFJvdXRlKCkgOiBudWxsOyBpZiAoIXJvdXRlcykgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oYG1pc3Npbmcgcm91dGVzYCk7XHJcbiAgICAvL3JvdXRlID0gcm91dGVzO1xyXG4gICAgaWYgKG9uUm91dGVDaGFuZ2VkKSBvblJvdXRlQ2hhbmdlZChyb3V0ZXMpO1xyXG4gICAgaWYgKHdpdGhQdXN0U3RhdGUpIHB1c2hTdGF0ZShyb3V0ZXMpO1xyXG4gICAgcmV0dXJuIHJvdXRlcztcclxuICB9XHJcblxyXG4gIC8vKioqKioqKioqKioqKioqKiogUE9QU1RBVEUgRVZFTlRcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGV2ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGA+IHBvcHN0YXRlOiAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWApO1xyXG4gICAgcm9vdFJvdXRlQmluZChkZWNvZGVGdWxsVXJsKCksIGZhbHNlKTtcclxuICB9KTtcclxuXHJcbiAgLy9tb2RpZnkgYnJvd3NlciBVUkxcclxuICBmdW5jdGlvbiBwdXNoU3RhdGUocm91dGU6IFRSb3V0ZUFjdGlvblBhcikge1xyXG4gICAgbGV0IHVybFN0ciA9IGVuY29kZUZ1bGxVcmwocm91dGUpO1xyXG4gICAgY29uc29sZS5sb2coYD4gcHVzaFN0YXRlOiAke3VybFN0cn1gKTtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHVybFN0cik7XHJcbiAgfVxyXG5cclxuICAvL3JvdXRhIHBhcnMgYXJlIGFmdGVyIFwiLmh0bWxcIiB1cmwgcGFydFxyXG4gIGZ1bmN0aW9uIGdldEJhc2ljVXJsKHN0YXJ0VXJsOiBzdHJpbmcpOiBzdHJpbmcgeyBsZXQgaWR4ID0gc3RhcnRVcmwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCcuaHRtbCcpOyByZXR1cm4gaWR4ID49IDAgPyBzdGFydFVybC5zdWJzdHIoMCwgaWR4ICsgNSkgOiBzdGFydFVybDsgfVxyXG5cclxuICB2YXIgcm91dGVQYXJJZ25vcmVzID0gWydzdG9yZUlkJywgJ2hvb2tJZCcsICdwYXInXTtcclxuICB2YXIgcm91dGVIb29rRGVmYXVsdE5hbWUgPSAncm91dGVIb29rRGVmYXVsdCc7XHJcblxyXG4gIGZ1bmN0aW9uIGVuY29kZVVybChzdDogVFJvdXRlQWN0aW9uUGFyKTogc3RyaW5nIHtcclxuICAgIGxldCByZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIGVuY29kZVVybExvdyhyZXMsIHN0LCBudWxsKTtcclxuICAgIGxldCB1cmwgPSByZXMuam9pbignJyk7XHJcbiAgICByZXR1cm4gY2xlYXJTbGFzaGVzKHVybC5yZXBsYWNlKC8oXFwkXFwvKSokL2csICcnKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmNvZGVGdWxsVXJsKHN0OiBUUm91dGVBY3Rpb25QYXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHVybFN0ciA9IHN0ID8gZW5jb2RlVXJsKHN0KSA6IG51bGw7XHJcbiAgICAvL3JldHVybiAkYmFzaWNVcmwgKyAodXJsU3RyID8gKCRpc0hhc2hSb3V0ZXIgPyAnIycgOiAnLycpICsgdXJsU3RyIDogJycpO1xyXG4gICAgcmV0dXJuICRiYXNpY1VybCArICh1cmxTdHIgPyAoJGlzSGFzaFJvdXRlciA/ICcjJyA6ICc/JykgKyB1cmxTdHIgOiAnJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGVGdWxsVXJsKHVybD86IHN0cmluZyk6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICByZXR1cm4gZGVjb2RlVXJsKGRlY29kZVVybFBhcnQodXJsKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGVVcmxQYXJ0KHVybD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBpZiAoIXVybC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJGJhc2ljVXJsKSkgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oYGxvY2F0aW9uLmhyZWYgZG9lcyBub3Qgc3RhcnQgd2l0aCAkeyRiYXNpY1VybH1gKTtcclxuICAgIHJldHVybiBjbGVhclNsYXNoZXModXJsLnN1YnN0cigkYmFzaWNVcmwubGVuZ3RoKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGVVcmwodXJsPzogc3RyaW5nKTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIGlmICghdXJsKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBkZWNvZGVVcmxMb3codXJsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVJvdXRlKHN0b3JlSWQ6IHN0cmluZywgcGFyPzoge30sIHJvdXRlSG9va0RlZmF1bHQ/OiBUUm91dGVBY3Rpb25QYXIsIG90aGVySG9va3M/OiB7IFtuYW1lOiBzdHJpbmddOiBUUm91dGVBY3Rpb25QYXI7IH0pOiBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgbGV0IHJlczogVFJvdXRlQWN0aW9uUGFyID0geyBzdG9yZUlkOiBzdG9yZUlkLCBwYXI6IHBhciB9O1xyXG4gICAgaWYgKHJvdXRlSG9va0RlZmF1bHQpIHsgcmVzLnJvdXRlSG9va0RlZmF1bHQgPSByb3V0ZUhvb2tEZWZhdWx0OyBkZWxldGUgcm91dGVIb29rRGVmYXVsdC5ob29rSWQ7IH1cclxuICAgIGlmIChvdGhlckhvb2tzKVxyXG4gICAgICBmb3IgKGxldCBwIGluIG90aGVySG9va3MpIHsgbGV0IGhrID0gcmVzW3BdID0gb3RoZXJIb29rc1twXTsgaGsuaG9va0lkID0gcDsgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldENoaWxkUm91dGVQcm9wTmFtZXMoc3Q6IFRSb3V0ZUFjdGlvblBhcik6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgbGV0IHByb3BzID0gW107XHJcbiAgICBmb3IgKGxldCBwIGluIHN0KSBpZiAocm91dGVQYXJJZ25vcmVzLmluZGV4T2YocCkgPCAwKSBwcm9wcy5wdXNoKHApO1xyXG4gICAgcmV0dXJuIHByb3BzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlVXJsTG93KHVybDogc3RyaW5nKTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIGlmICghJGlzSGFzaFJvdXRlcikgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XHJcbiAgICB1cmwgPSAneycgKyB1cmwucmVwbGFjZSgvXFwkXFwvL2csICd9JykucmVwbGFjZSgvXFwvL2csICd7Jyk7XHJcbiAgICBsZXQgc3RhY2s6IEFycmF5PElEZWNvZGVTdGFjaz4gPSBbXTsgbGV0IGkgPSAwOyBsZXQgY2g6IHN0cmluZzsgbGV0IHJlczogSURlY29kZVN0YWNrID0gbnVsbDtcclxuICAgIGxldCBwYXJzZVJvdXRlID0gKGVuZElkeDogbnVtYmVyLCBzdDogSURlY29kZVN0YWNrKSA9PiB7XHJcbiAgICAgIGxldCBzID0gdXJsLnN1YnN0cmluZyhzdC5vcGVuSWR4LCBlbmRJZHggLSAxKTtcclxuICAgICAgbGV0IHBhcnRzID0gcy5zcGxpdCgnOycpO1xyXG4gICAgICBsZXQgcHJvcENvbXAgPSBwYXJ0c1swXS5zcGxpdCgnLScpOyBpZiAocHJvcENvbXAubGVuZ3RoID4gMikgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oJ3Byb3BDb21wLmxlbmd0aCA+IDInKTtcclxuICAgICAgc3QuaG9va0lkID0gcHJvcENvbXAubGVuZ3RoID09IDEgPyBudWxsIDogcHJvcENvbXBbMF07XHJcbiAgICAgIHN0LnJvdXRlID0geyBzdG9yZUlkOiBwcm9wQ29tcC5sZW5ndGggPT0gMSA/IHByb3BDb21wWzBdIDogcHJvcENvbXBbMV0gfTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG52ID0gcGFydHNbaV0uc3BsaXQoJz0nKTtcclxuICAgICAgICBpZiAoIXN0LnJvdXRlLnBhcikgc3Qucm91dGUucGFyID0ge307XHJcbiAgICAgICAgc3Qucm91dGUucGFyW252WzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChudlsxXSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICBpZiAoaSA+PSB1cmwubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA+PSAxKSBjaCA9ICd9JzsgZWxzZSBicmVhaztcclxuICAgICAgICBpID0gdXJsLmxlbmd0aCArIDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2ggPSB1cmwuY2hhckF0KGkpOyBpKys7XHJcbiAgICAgIH1cclxuICAgICAgc3dpdGNoIChjaCkge1xyXG4gICAgICAgIGNhc2UgJ3snOlxyXG4gICAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA9PSAwKSB7IHJlcyA9IHsgb3BlbklkeDogaSB9OyBzdGFjay5wdXNoKHJlcyk7IGJyZWFrOyB9IC8vcm9vdFxyXG4gICAgICAgICAgbGV0IGxhc3QgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIGlmICghbGFzdC5yb3V0ZSkgcGFyc2VSb3V0ZShpLCBsYXN0KTsgLy96cHJhY3VqIHNla3ZlbmNpIG1lemkge3h4eHh7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKHsgb3BlbklkeDogaSB9KTsgLy96YWNuaSBub3Z5IHN0YWNrXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd9JzpcclxuICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggPT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICBsZXQgbGFzdDIgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIGlmICghbGFzdDIucm91dGUpIHBhcnNlUm91dGUoaSwgbGFzdDIpOyAvL3pwcmFjdWogc2VrdmVuY2kgbWV6aSB7eHh4eH0sIHh4eCBqZSBiZXogeyBpIH1cclxuICAgICAgICAgIGxldCBwYXJQcm9wID0gbGFzdDIuaG9va0lkID8gbGFzdDIuaG9va0lkIDogcm91dGVIb29rRGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICBpZiAocGFyUHJvcCAhPSByb3V0ZUhvb2tEZWZhdWx0TmFtZSkgbGFzdDIucm91dGUuaG9va0lkID0gcGFyUHJvcDtcclxuICAgICAgICAgIC8vbmF2YXphbmkgbmEgcGFyZW50IHJvdXRlXHJcbiAgICAgICAgICBsZXQgcGFyID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMl07XHJcbiAgICAgICAgICBpZiAocGFyKSBwYXIucm91dGVbcGFyUHJvcF0gPSBsYXN0Mi5yb3V0ZTtcclxuICAgICAgICAgIC8vdnluZGVqIHplIHN0YWNrdVxyXG4gICAgICAgICAgc3RhY2suc3BsaWNlKHN0YWNrLmxlbmd0aCAtIDEsIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXMucm91dGU7XHJcbiAgfVxyXG5cclxuICBpbnRlcmZhY2UgSURlY29kZVN0YWNrIHtcclxuICAgIG9wZW5JZHg6IG51bWJlcjtcclxuICAgIHJvdXRlPzogVFJvdXRlQWN0aW9uUGFyO1xyXG4gICAgaG9va0lkPzogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZW5jb2RlVXJsTG93KHJlczogQXJyYXk8c3RyaW5nPiwgc3Q6IFRSb3V0ZUFjdGlvblBhciwgcGFyZW50UHJvcE5hbWU/OiBzdHJpbmcpIHtcclxuICAgIHJlcy5wdXNoKChwYXJlbnRQcm9wTmFtZSA/IHBhcmVudFByb3BOYW1lICsgJy0nIDogJycpICsgKHN0LnN0b3JlSWQgPyBzdC5zdG9yZUlkIDogJycpKTtcclxuICAgIGlmIChzdC5wYXIpIHtcclxuICAgICAgbGV0IHByb3BzID0gW107XHJcbiAgICAgIGZvciAobGV0IHAgaW4gc3QucGFyKSBwcm9wcy5wdXNoKHApO1xyXG4gICAgICBwcm9wcy5zb3J0KCkuZm9yRWFjaChwID0+IHJlcy5wdXNoKGA7JHtwfT0ke2VuY29kZVVSSUNvbXBvbmVudChzdC5wYXJbcF0pfWApKTtcclxuICAgIH1cclxuICAgIGdldENoaWxkUm91dGVQcm9wTmFtZXMoc3QpLnNvcnQoKS5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICByZXMucHVzaCgnLycpO1xyXG4gICAgICBlbmNvZGVVcmxMb3cocmVzLCBzdFtwXSwgcCA9PSByb3V0ZUhvb2tEZWZhdWx0TmFtZSA/IG51bGwgOiBwKTtcclxuICAgICAgcmVzLnB1c2goJyQvJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyU2xhc2hlcyhwYXRoOiBzdHJpbmcpOiBzdHJpbmcgeyByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpLnJlcGxhY2UoL15bXFwjXFwvXFw/XT8vLCAnJyk7IH1cclxufSIsIm5hbWVzcGFjZSBzaXRlIHtcclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJTm9kZSB7XHJcbiAgICBpZDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7IC8vY2h5YmktbGksIHZlem1lIHNlIHogSVRhYi50aXRsZSBcclxuICAgIGJyVGl0bGU/OnN0cmluZzsgLy90aXRsZSBwcm8gYnJlYWRjcnVtYlxyXG4gICAgY3JlYXRlUGFnZTogKHJvdXRlUGFyKSA9PiBKU1guRWxlbWVudCxcclxuICAgIHBhdGg/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHM/OiBBcnJheTxJTm9kZT47XHJcbiAgICBwYXJlbnQ/OiBJTm9kZTtcclxuICAgIGxhcmdlTG9nbz86IGJvb2xlYW47IC8vdmVsa2UgbG9nbyB2IGNobGFkaWNpXHJcbiAgICB0YWI/OiBJVGFiOyAvL215IHRhYlxyXG4gICAgbm9UaXRsZT86Ym9vbGVhbjsgLy9wYWdlIHRlbXBsYXRlIG5lZ2VuZXJ1amUgdGl0bGUgc3RyYW5reVxyXG4gIH1cclxuICBleHBvcnQgdmFyIHJvb3Q6IElOb2RlO1xyXG4gIGV4cG9ydCB2YXIgbm9kZXM6IHsgW3BhdGg6IHN0cmluZ106IElOb2RlOyB9ID0ge307XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBib290QXBwKCkge1xyXG4gICAgZnVuY3Rpb24gaW5pdE5vZGUocGFyZW50OiBJTm9kZSwgbmQ6IElOb2RlKSB7XHJcbiAgICAgIG5kLmNoaWxkcyA9IG5vZGVDaGlsZHMobmQpO1xyXG4gICAgICBuZC5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgIGlmICghbmQudGFiKSBuZC50YWIgPSBuZC5wYXJlbnQudGFiO1xyXG4gICAgICBuZC5wYXRoID0gZ2V0Tm9kZVBhdGgobmQpO1xyXG4gICAgICBpZiAobm9kZXNbbmQucGF0aF0pIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBTaXRlTWFwIG5vZGUgJHtuZC5wYXRofSBhbHJlYWR5IGV4aXN0cyFgKTtcclxuICAgICAgbm9kZXNbbmQucGF0aF0gPSBuZDtcclxuICAgICAgaWYgKG5kLmNoaWxkcykgbmQuY2hpbGRzLmZvckVhY2gobiA9PiBpbml0Tm9kZShuZCwgbikpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW5pdFRhYnMoKSB7XHJcbiAgICAgIHRhYnMuJGNoaWxkcyA9IFtdOyB2YXIgaWR4ID0gMDtcclxuICAgICAgZm9yICh2YXIgcCBpbiB0YWJzKSB7XHJcbiAgICAgICAgaWYgKHAuc3RhcnRzV2l0aCgnJCcpKSBjb250aW51ZTtcclxuICAgICAgICB2YXIgdDogSVRhYiA9IHRhYnNbcF07IHRhYnMuJGNoaWxkcy5wdXNoKHQpOyB0LmlkeCA9IGlkeCsrO1xyXG4gICAgICAgIGlmICghdC5yb290Tm9kZSkgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oJyF0LnJvb3ROb2RlJyk7XHJcbiAgICAgICAgdC5yb290Tm9kZS50YWIgPSB0O1xyXG4gICAgICAgIGlmICghdC5yb290Tm9kZS50aXRsZSkgdC5yb290Tm9kZS50aXRsZSA9IHQudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXRUYWJzKCk7XHJcbiAgICBpbml0Tm9kZShudWxsLCByb290KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBub2RlUGFyZW50cyhuZDogSU5vZGUsIGlnbm9yZVNlbGY/OiBib29sZWFuKTogQXJyYXk8SU5vZGU+IHtcclxuICAgIHZhciByZXM6IG5vZGVQYXJlbnRzUmVzdWx0ID0ge307XHJcbiAgICBub2RlUGFyZW50c0xvdyhuZCwgcmVzLCBpZ25vcmVTZWxmKTtcclxuICAgIHJldHVybiByZXMucmVzLnJldmVyc2UoKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVRhYnMge1xyXG4gICAgJGNoaWxkcz86IEFycmF5PElUYWI+O1xyXG4gIH1cclxuICBleHBvcnQgaW50ZXJmYWNlIElUYWIge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGlkeD86IG51bWJlcjtcclxuICAgIHJvb3ROb2RlPzogSU5vZGU7IC8vaGxhdm5pIHN0cmFua2EgcHJvIHRhYlxyXG4gIH1cclxuICBleHBvcnQgdmFyIHRhYnM6IElUYWJzO1xyXG5cclxuICBleHBvcnQgdmFyIGdldEJsYW5rUGFnZTogKHJvdXRlUGFyKSA9PiBKU1guRWxlbWVudDtcclxuXHJcbiAgLy8qKioqKioqKioqKiBQcml2YXRlXHJcblxyXG4gIGZ1bmN0aW9uIG5vZGVDaGlsZHMobmQ6IElOb2RlKTogQXJyYXk8SU5vZGU+IHtcclxuICAgIHZhciByZXM6IEFycmF5PElOb2RlPiA9IG51bGw7XHJcbiAgICBmb3IgKHZhciBwIGluIG5kKSB7XHJcbiAgICAgIHZhciBzdWJOZDogSU5vZGUgPSBuZFtwXTtcclxuICAgICAgaWYgKCFzdWJOZCAvKnx8ICFzdWJOZC50aXRsZSovIHx8ICFzdWJOZC5pZCkgY29udGludWU7XHJcbiAgICAgIGlmICghcmVzKSByZXMgPSBbc3ViTmRdOyBlbHNlIHJlcy5wdXNoKHN1Yk5kKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBub2RlUGFyZW50c0xvdyhuZDogSU5vZGUsIHJlczogbm9kZVBhcmVudHNSZXN1bHQsIGlnbm9yZVNlbGY6IGJvb2xlYW4pIHtcclxuICAgIGlmICghcmVzLnJlcykgcmVzLnJlcyA9IGlnbm9yZVNlbGYgPyBbXSA6IFtuZF07XHJcbiAgICB3aGlsZSAobmQucGFyZW50KSB7IG5kID0gbmQucGFyZW50OyByZXMucmVzLnB1c2gobmQpOyB9XHJcbiAgfVxyXG4gIGludGVyZmFjZSBub2RlUGFyZW50c1Jlc3VsdCB7IHJlcyA/OiBBcnJheTxJTm9kZT4gfVxyXG5cclxuICBmdW5jdGlvbiBnZXROb2RlUGF0aChuZDogSU5vZGUpOiBzdHJpbmcgeyByZXR1cm4gbm9kZVBhcmVudHMobmQpLm1hcChuID0+IG4uaWQpLmpvaW4oJ3wnKS50b0xvd2VyQ2FzZSgpOyB9XHJcbn0iLCJuYW1lc3BhY2Ugc2l0ZW1hcFJvdXRlciB7XHJcblxyXG4gIGV4cG9ydCB2YXIgY2hpbGRDb250ZXh0VHlwZXM6IFJlYWN0LlZhbGlkYXRpb25NYXA8YW55PiA9IHtcclxuICAgIHNpdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICByb3V0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBBcHBSb290Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSb290UHJvcHMsIHJvdXRlci5UUm91dGVBY3Rpb25QYXI+IHtcclxuICAgIGNvbnN0cnVjdG9yKHA6IElSb290UHJvcHMsIGN0eCkge1xyXG4gICAgICBzdXBlcihwLCBjdHgpO1xyXG4gICAgICB0aGlzLnN0YXRlID0gcC5pbml0Um91dGU7XHJcbiAgICAgIHJvb3RDb21wID0gdGhpcztcclxuICAgIH1cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgIHRoaXMuYWN0Tm9kZSA9IHNpdGUubm9kZXNbdGhpcy5zdGF0ZS5zdG9yZUlkLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICBpZiAoIXRoaXMuYWN0Tm9kZSkgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oYE5vZGUgcGF0aCAke3RoaXMuc3RhdGUuc3RvcmVJZH0gbm90IGZvdW5kYCk7XHJcbiAgICAgIHZhciByZXMgPSAodGhpcy5hY3ROb2RlLmNyZWF0ZVBhZ2UgPyB0aGlzLmFjdE5vZGUuY3JlYXRlUGFnZSA6IHNpdGUuZ2V0QmxhbmtQYWdlKSgodGhpcy5zdGF0ZS5wYXIpKTtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIGFjdE5vZGU6IHNpdGUuSU5vZGU7XHJcblxyXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCk6IElDb250ZXh0IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzaXRlOiB0aGlzLmFjdE5vZGUsXHJcbiAgICAgICAgcm91dGU6IHRoaXMuc3RhdGVcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IGNoaWxkQ29udGV4dFR5cGVzO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVXJsPFQ+KG5vZGU6IHNpdGUuSU5vZGUsIHBhcj86IFQpIHsgcm91dGVyLm5hdmlnYXRlVXJsKHsgc3RvcmVJZDogbm9kZS5wYXRoLCBwYXI6IHBhciB9KTsgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBkb05hdmlnYXRlPFQ+KG5vZGU6IHNpdGUuSU5vZGUsIGV2PzogUmVhY3QuU3ludGhldGljRXZlbnQsIHBhcj86IFQpIHsgcm91dGVyLmRvTmF2aWdhdGUoeyBzdG9yZUlkOiBub2RlLnBhdGgsIHBhcjogcGFyIH0sIGV2KTsgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBkb05hdmlnYXRlVGFnPFQ+KG5vZGU6IHNpdGUuSU5vZGUsIGV2PzogUmVhY3QuU3ludGhldGljRXZlbnQsIHBhcj86IFQpOiBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gPGEgaHJlZj1cIiNcIiBrZXk9e25vZGUucGF0aH0gb25DbGljaz17ZXYgPT4gZG9OYXZpZ2F0ZShub2RlLCBldiwgcGFyKSB9Pntub2RlLnRpdGxlfTwvYT47XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudDxQPih0eXBlOiBSZWFjdC5Db21wb25lbnRDbGFzczxQPiB8IFJlYWN0LlNGQzxQPiwgcm91dGVQYXIsIHByb3BzOiBQICYgUmVhY3QuQXR0cmlidXRlcywgLi4uY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVtdKTogUmVhY3QuUmVhY3RFbGVtZW50PFA+IHtcclxuICAgIHZhciBwYXI6IFAgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcm91dGVQYXIpO1xyXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodHlwZSwgcGFyKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBib290QXBwKGNvbnRlbnQ6IEhUTUxFbGVtZW50LCBzaXRlbWFwQ3JlYXRvcjogbGliLlRDYWxsYmFjaykge1xyXG4gICAgc2l0ZW1hcENyZWF0b3IoKTtcclxuICAgIHNpdGUuYm9vdEFwcCgpO1xyXG4gICAgdmFyIHN0YXJ0Um91dGUgPSByb3V0ZXIuYm9vdEFwcCgpO1xyXG4gICAgUmVhY3RET00ucmVuZGVyKDxBcHBSb290Q29tcG9uZW50IGluaXRSb3V0ZT17IHN0YXJ0Um91dGUgfSAvPiwgY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElDb250ZXh0IHtcclxuICAgIHNpdGU6IHNpdGUuSU5vZGU7XHJcbiAgICByb3V0ZTogcm91dGVyLlRSb3V0ZUFjdGlvblBhclxyXG4gIH1cclxuXHJcbiAgLy8qKioqKioqKioqIFByaXZhdGVcclxuICB2YXIgcm9vdENvbXA6IEFwcFJvb3RDb21wb25lbnQ7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBJUm9vdFByb3BzIHsgaW5pdFJvdXRlOiByb3V0ZXIuVFJvdXRlQWN0aW9uUGFyIH1cclxuXHJcbiAgcm91dGVyLmdldFN0YXJ0Um91dGUgPSAoKSA9PiB7IHJldHVybiB7IHN0b3JlSWQ6IHNpdGUucm9vdC5wYXRoIH07IH07XHJcbiAgcm91dGVyLm9uUm91dGVDaGFuZ2VkID0gcm91dGUgPT4geyBpZiAocm9vdENvbXApIHJvb3RDb21wLnNldFN0YXRlKHJvdXRlKTsgfTtcclxuXHJcbn0iLCJuYW1lc3BhY2Ugc2VydmljZXMge1xyXG4gIGV4cG9ydCBpbnRlcmZhY2Ugc2VydmljZU9VVCB7XHJcbiAgICBlcnJvcjogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNhbGxSZXF1ZXN0PFRJTiwgVE9VVCBleHRlbmRzIHNlcnZpY2VPVVQ+KG1ldGhvZFBhdGg6IHN0cmluZywgaW5QYXI6IFRJTiwgaXNHZXQ/OiBib29sZWFuKTogUHJvbWlzZTxUT1VUPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICB2YXIgdXJsID0gYCR7bWV0aG9kUGF0aH0vc2VydmljZS5hc2h4YDtcclxuICAgICAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICBpZiAoeG1saHR0cC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgdmFyIHJlc3AgPSB4bWxodHRwLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICB2YXIgcmVzOiBUT1VUID0gcmVzcCA/IEpTT04ucGFyc2UocmVzcCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgIHZhciBlcnJvciA9IHJlcyA/IHJlcy5lcnJvciA6IG51bGw7XHJcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSByZWplY3QoZXJyb3IpOyBlbHNlIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAobXNnKSB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KGBKU09OIGV4Y2VwdGlvbiAke21zZ30gYXQgJHt1cmx9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICByZWplY3QoYFN0YXR1cyAke3htbGh0dHAuc3RhdHVzfSBhdCAke3VybH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBpblBhckpzb24gPSBpblBhciA/IEpTT04uc3RyaW5naWZ5KGluUGFyLCBudWxsLCAyKSA6ICcnO1xyXG4gICAgICBpZiAoaXNHZXQpIHtcclxuICAgICAgICB4bWxodHRwLm9wZW4oJ0dFVCcsIHVybCArICc/JyArIGVuY29kZVVSSUNvbXBvbmVudChpblBhckpzb24pLCB0cnVlKTtcclxuICAgICAgICB4bWxodHRwLnNlbmQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4bWxodHRwLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhtbGh0dHAuc2VuZChpblBhckpzb24pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJuYW1lc3BhY2Ugc2VydmljZXMuZW1haWxlciB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBzZW5kRW1haWxJTiB7XHJcbiAgICBmcm9tOiBzdHJpbmc7XHJcbiAgICB0bzogc3RyaW5nOyAvL2UuZy4gXCJKb3NlZiBOb3Zha1wiPGpvc2VmQGxtLmN6PixcIkphbmEgS1wiPGphbmFAbG0uY3o+XHJcbiAgICBjYz86IHN0cmluZztcclxuICAgIGJjYz86IHN0cmluZztcclxuICAgIGlzQm9keUh0bWw/OiBib29sZWFuO1xyXG4gICAgYm9keTogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgICBzdWJqZWN0OiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gc2VuZEVNYWlsKGVtYWlsOiBzZW5kRW1haWxJTiwgY29tcGxldGVkOiBsaWIuVENhbGxiYWNrKSB7XHJcbiAgICBlbWFpbC5pc0JvZHlIdG1sID0gdHlwZW9mIGVtYWlsLmJvZHkgIT0gXCJzdHJpbmdcIjtcclxuICAgIGlmIChlbWFpbC5pc0JvZHlIdG1sKSBlbWFpbC5ib2R5ID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoZW1haWwuYm9keSBhcyBKU1guRWxlbWVudCk7XHJcbiAgICBzZXJ2aWNlcy5jYWxsUmVxdWVzdCgnbGlicy9zZXJ2aWNlLWVtYWlsZXInLCBlbWFpbCkudGhlbigoKSA9PiBjb21wbGV0ZWQoKSkuY2F0Y2goZXJyID0+IHsgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oZXJyKTsgfSk7XHJcbiAgfVxyXG5cclxuICAvL2FsZXJ0KFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKDxkaXY+eHh4PC9kaXY+KSk7XHJcbiAgLy9zZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgZGVidWdnZXI7XHJcbiAgLy8gIGFsZXJ0KFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKDxkaXY+eHh4PC9kaXY+KSk7XHJcbiAgLy99KTtcclxuXHJcbn0iXX0=