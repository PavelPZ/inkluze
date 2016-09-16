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
var validation;
(function (validation) {
    (function (types) {
        types[types["no"] = 0] = "no";
        types[types["required"] = 1] = "required";
        types[types["email"] = 2] = "email";
        types[types["number"] = 4] = "number";
        types[types["digits"] = 8] = "digits";
        types[types["equalTo"] = 16] = "equalTo";
        types[types["stringLength"] = 32] = "stringLength";
        types[types["numberRange"] = 64] = "numberRange";
        types[types["stringMask"] = 128] = "stringMask";
    })(validation.types || (validation.types = {}));
    var types = validation.types;
    //********************************* VALIDATE LOGIC
    function validate(validator, st) {
        var len = !st.value ? 0 : st.value.length;
        //REQUIRED
        if ((validator.type & types.required) != 0) {
            if (len < 1) {
                st.error = validation.messages.required();
                return;
            }
        }
        //STRING LENGTH
        if ((validator.type & types.stringLength) != 0) {
            if (validator.minLength && validator.maxLength) {
                if (len < validator.minLength || len > validator.maxLength) {
                    st.error = validation.messages.rangelength(validator.minLength, validator.maxLength);
                    return;
                }
            }
            else if (validator.minLength) {
                if (len < validator.minLength) {
                    st.error = validation.messages.minlength(validator.minLength);
                    return;
                }
            }
            else if (validator.maxLength) {
                if (len > validator.maxLength) {
                    st.error = validation.messages.maxlength(validator.maxLength);
                    return;
                }
            }
        }
        //.. with MASK
        var mask = null;
        var error;
        if ((validator.type & (types.number | types.numberRange)) != 0) {
            mask = /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
            error = validation.messages.number();
        }
        else if ((validator.type & types.digits) != 0) {
            mask = /^\d+$/;
            error = validation.messages.digits();
        }
        else if ((validator.type & types.email) != 0) {
            mask = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            error = validation.messages.email();
        }
        if (mask) {
            if (len == 0 || !mask.test(st.value)) {
                st.error = error;
                return;
            }
        }
        //NUMBER RANGE
        var defined = function (v) { return typeof v != 'undefined'; };
        if ((validator.type & types.numberRange) != 0) {
            var num = parseFloat(st.value);
            if (defined(validator.min) && defined(validator.max)) {
                if (num < validator.min || num > validator.max) {
                    st.error = validation.messages.range(validator.min, validator.max);
                    return;
                }
            }
            else if (defined(validator.min)) {
                if (num < validator.min) {
                    st.error = validation.messages.min(validator.min);
                    return;
                }
            }
            else if (defined(validator.max)) {
                if (num > validator.max) {
                    st.error = validation.messages.max(validator.max);
                    return;
                }
            }
        }
    }
    validation.validate = validate;
    validation.messages = {
        required: function () { return "This field is required."; },
        remote: function () { return "Please fix this field."; },
        email: function () { return "Please enter a valid email address."; },
        url: function () { return "Please enter a valid URL."; },
        date: function () { return "Please enter a valid date."; },
        dateISO: function () { return "Please enter a valid date ( ISO )."; },
        number: function () { return "Please enter a valid number."; },
        digits: function () { return "Please enter only digits."; },
        equalTo: function () { return "Please enter the same value again."; },
        maxlength: function (v1) { return ("Please enter no more than " + v1 + " characters."); },
        minlength: function (v1) { return ("Please enter at least " + v1 + " characters."); },
        rangelength: function (v1, v2) { return ("Please enter a value between " + v1 + " and " + v2 + " characters long."); },
        range: function (v1, v2) { return ("Please enter a value between " + v1 + " and " + v2 + "."); },
        max: function (v1) { return ("Please enter a value less than or equal to " + v1 + "."); },
        min: function (v1) { return ("Please enter a value greater than or equal to " + v1 + "."); }
    };
})(validation || (validation = {}));
var router;
(function (router) {
    //boot routeru
    function bootApp() { rootRouteBind(decodeFullUrl(), false); return route; }
    router.bootApp = bootApp;
    //navigace na route
    function navigate(routes) { return rootRouteBind(routes, true); }
    router.navigate = navigate;
    function navigateUrl(routes) { return encodeFullUrl(routes); }
    router.navigateUrl = navigateUrl;
    //config
    router.$isHashRouter = false; //hash or slash route delimiter
    router.$basicUrl = getBasicUrl(window.location.href); //cast URL pred route paramatter
    //***************** refresh view on route change
    //aktualni route objekt
    var route;
    function rootRouteBind(routes /*null => start route*/, withPustState) {
        if (!routes)
            routes = router.getStartRoute ? router.getStartRoute() : null;
        if (!routes)
            throw new lib.Exception("missing routes");
        route = routes;
        if (router.onRouteChanged)
            router.onRouteChanged(routes);
        if (withPustState)
            pushState();
    }
    //***************** POPSTATE EVENT
    window.addEventListener("popstate", function (ev) {
        console.log("> popstate: " + window.location.href);
        rootRouteBind(decodeFullUrl(), false);
    });
    //modify browser URL
    function pushState() {
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
    ;
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
    function getNodePath(nd) { return nodeParents(nd).map(function (n) { return n.id; }).join('|'); }
})(site || (site = {}));
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
var ReactDOMServer = React['__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'];
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
            this.actNode = site.nodes[this.state.storeId];
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
    function navigateUrl(node, par) { return router.navigateUrl({ storeId: node.path, par: par }); }
    sitemapRouter.navigateUrl = navigateUrl;
    function navigateTag(node, par) {
        return React.createElement("a", {href: navigateUrl(node, par)}, node.title);
    }
    sitemapRouter.navigateTag = navigateTag;
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
        return React.createElement("a", {href: url, target: newWindow ? '_blank' : '_self'}, React.createElement("i", {className: 'fa fa-external-link'}), " ", title);
    }
    lib.navigateExt = navigateExt;
})(lib || (lib = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vTGliL2xpYnMvc2VydmljZXMvY29tbW9uLnRzIiwiLi4vLi4vTGliL2xpYnMvZm9ybXMvdmFsaWRhdG9yLnRzIiwiLi4vLi4vTGliL2xpYnMvZmx1eC9yb3V0ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXAudHMiLCIuLi8uLi9MaWIvbGlicy9jb21tb24vcmVhY3QtYm9vdHN0cmFwLnRzIiwiLi4vLi4vTGliL2xpYnMvY29tbW9uL3JlYWN0LWRvbS1zZXJ2ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9zZXJ2aWNlLWVtYWlsZXIvZW1haWxlci50c3giLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXBSb3V0ZXIudHN4IiwiLi4vLi4vTGliL2xpYnMvY29tbW9uL2xpYi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxRQUFRLENBNEJqQjtBQTVCRCxXQUFVLFFBQVEsRUFBQyxDQUFDO0lBS2xCLHFCQUEwRCxVQUFpQixFQUFFLEtBQVU7UUFDckYsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUNuQyxJQUFJLEdBQUcsR0FBTSxVQUFVLG1CQUFnQixDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRztnQkFDM0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDOUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLENBQUM7NEJBQ0gsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQzs0QkFDaEMsSUFBSSxHQUFHLEdBQVMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOzRCQUMvQyxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7NEJBQ25DLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQUMsSUFBSTtnQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzlDLENBQUU7d0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDYixNQUFNLENBQUMsb0JBQWtCLEdBQUcsWUFBTyxHQUFLLENBQUMsQ0FBQzt3QkFDNUMsQ0FBQztvQkFDSCxDQUFDO29CQUFDLElBQUk7d0JBQ0osTUFBTSxDQUFDLFlBQVUsT0FBTyxDQUFDLE1BQU0sWUFBTyxHQUFLLENBQUMsQ0FBQztnQkFDakQsQ0FBQztZQUNILENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBdEJlLG9CQUFXLGNBc0IxQixDQUFBO0FBQ0gsQ0FBQyxFQTVCUyxRQUFRLEtBQVIsUUFBUSxRQTRCakI7QUM1QkQsSUFBVSxVQUFVLENBNkZuQjtBQTdGRCxXQUFVLFVBQVUsRUFBQyxDQUFDO0lBY3BCLFdBQVksS0FBSztRQUNmLDZCQUFNLENBQUE7UUFDTix5Q0FBYyxDQUFBO1FBQ2QsbUNBQVcsQ0FBQTtRQUNYLHFDQUFZLENBQUE7UUFDWixxQ0FBWSxDQUFBO1FBQ1osd0NBQWMsQ0FBQTtRQUNkLGtEQUFtQixDQUFBO1FBQ25CLGdEQUFrQixDQUFBO1FBQ2xCLCtDQUFpQixDQUFBO0lBQ25CLENBQUMsRUFWVyxnQkFBSyxLQUFMLGdCQUFLLFFBVWhCO0lBVkQsSUFBWSxLQUFLLEdBQUwsZ0JBVVgsQ0FBQTtJQUlELGtEQUFrRDtJQUVsRCxrQkFBeUIsU0FBcUIsRUFBRSxFQUFlO1FBQzdELElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDMUMsVUFBVTtRQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBQyxFQUFFLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDO1lBQUMsQ0FBQztRQUMxRCxDQUFDO1FBQ0QsZUFBZTtRQUNmLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUM7Z0JBQUMsQ0FBQztZQUNwSixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQUMsTUFBTSxDQUFDO2dCQUFDLENBQUM7WUFDaEcsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQztnQkFBQyxDQUFDO1lBQ2hHLENBQUM7UUFDSCxDQUFDO1FBQ0QsY0FBYztRQUNkLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQztRQUFDLElBQUksS0FBYSxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLEdBQUcsNkNBQTZDLENBQUM7WUFDckQsS0FBSyxHQUFHLG1CQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUNmLEtBQUssR0FBRyxtQkFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksR0FBRyx1SUFBdUksQ0FBQztZQUMvSSxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNULEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQUMsTUFBTSxDQUFDO1lBQUMsQ0FBQztRQUNyRSxDQUFDO1FBQ0QsY0FBYztRQUNkLElBQUksT0FBTyxHQUFHLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksV0FBVyxFQUF2QixDQUF1QixDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFBQyxFQUFFLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQztnQkFBQyxDQUFDO1lBQ3RILENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFBQyxFQUFFLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUM7Z0JBQUMsQ0FBQztZQUM5RSxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQUMsTUFBTSxDQUFDO2dCQUFDLENBQUM7WUFDOUUsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBM0NlLG1CQUFRLFdBMkN2QixDQUFBO0lBRVUsbUJBQVEsR0FBRztRQUNwQixRQUFRLEVBQUUsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QjtRQUN6QyxNQUFNLEVBQUUsY0FBTSxPQUFBLHdCQUF3QixFQUF4QixDQUF3QjtRQUN0QyxLQUFLLEVBQUUsY0FBTSxPQUFBLHFDQUFxQyxFQUFyQyxDQUFxQztRQUNsRCxHQUFHLEVBQUUsY0FBTSxPQUFBLDJCQUEyQixFQUEzQixDQUEyQjtRQUN0QyxJQUFJLEVBQUUsY0FBTSxPQUFBLDRCQUE0QixFQUE1QixDQUE0QjtRQUN4QyxPQUFPLEVBQUUsY0FBTSxPQUFBLG9DQUFvQyxFQUFwQyxDQUFvQztRQUNuRCxNQUFNLEVBQUUsY0FBTSxPQUFBLDhCQUE4QixFQUE5QixDQUE4QjtRQUM1QyxNQUFNLEVBQUUsY0FBTSxPQUFBLDJCQUEyQixFQUEzQixDQUEyQjtRQUN6QyxPQUFPLEVBQUUsY0FBTSxPQUFBLG9DQUFvQyxFQUFwQyxDQUFvQztRQUNuRCxTQUFTLEVBQUUsVUFBQyxFQUFFLElBQUssT0FBQSxnQ0FBNkIsRUFBRSxrQkFBYyxFQUE3QyxDQUE2QztRQUNoRSxTQUFTLEVBQUUsVUFBQyxFQUFFLElBQUssT0FBQSw0QkFBeUIsRUFBRSxrQkFBYyxFQUF6QyxDQUF5QztRQUM1RCxXQUFXLEVBQUUsVUFBQyxFQUFFLEVBQUUsRUFBRSxJQUFLLE9BQUEsbUNBQWdDLEVBQUUsYUFBUSxFQUFFLHVCQUFtQixFQUEvRCxDQUErRDtRQUN4RixLQUFLLEVBQUUsVUFBQyxFQUFFLEVBQUUsRUFBRSxJQUFLLE9BQUEsbUNBQWdDLEVBQUUsYUFBUSxFQUFFLE9BQUcsRUFBL0MsQ0FBK0M7UUFDbEUsR0FBRyxFQUFFLFVBQUMsRUFBRSxJQUFLLE9BQUEsaURBQThDLEVBQUUsT0FBRyxFQUFuRCxDQUFtRDtRQUNoRSxHQUFHLEVBQUUsVUFBQyxFQUFFLElBQUssT0FBQSxvREFBaUQsRUFBRSxPQUFHLEVBQXRELENBQXNEO0tBQ3BFLENBQUM7QUFFSixDQUFDLEVBN0ZTLFVBQVUsS0FBVixVQUFVLFFBNkZuQjtBQzdGRCxJQUFVLE1BQU0sQ0F5S2Y7QUF6S0QsV0FBVSxNQUFNLEVBQUMsQ0FBQztJQUtoQixjQUFjO0lBQ2QscUJBQTZDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQW5GLGNBQU8sVUFBNEUsQ0FBQTtJQUVuRyxtQkFBbUI7SUFDbkIsa0JBQXlCLE1BQXVCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQXpFLGVBQVEsV0FBaUUsQ0FBQTtJQUN6RixxQkFBNEIsTUFBdUIsSUFBWSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUE5RSxrQkFBVyxjQUFtRSxDQUFBO0lBSzlGLFFBQVE7SUFDRyxvQkFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLCtCQUErQjtJQUN0RCxnQkFBUyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO0lBWTFGLGdEQUFnRDtJQUNoRCx1QkFBdUI7SUFDdkIsSUFBSSxLQUFzQixDQUFDO0lBRTNCLHVCQUF1QixNQUF1QixDQUFDLHVCQUF1QixFQUFFLGFBQXNCO1FBQzVGLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQUMsTUFBTSxHQUFHLG9CQUFhLEdBQUcsb0JBQWEsRUFBRSxHQUFHLElBQUksQ0FBQztRQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNySCxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2YsRUFBRSxDQUFDLENBQUMscUJBQWMsQ0FBQztZQUFDLHFCQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQUMsU0FBUyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELGtDQUFrQztJQUNsQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQUEsRUFBRTtRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFlLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDbkQsYUFBYSxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBRUgsb0JBQW9CO0lBQ3BCO1FBQ0UsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLE1BQVEsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsdUNBQXVDO0lBQ3ZDLHFCQUFxQixRQUFnQixJQUFZLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUUvSixJQUFJLGVBQWUsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkQsSUFBSSxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQztJQUU5QyxtQkFBbUIsRUFBbUI7UUFDcEMsSUFBSSxHQUFHLEdBQWtCLEVBQUUsQ0FBQztRQUM1QixZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsdUJBQXVCLEVBQW1CO1FBQ3hDLElBQUksTUFBTSxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLDBFQUEwRTtRQUMxRSxNQUFNLENBQUMsZ0JBQVMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLG9CQUFhLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsdUJBQXVCLEdBQVk7UUFDakMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsdUJBQXVCLEdBQVk7UUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLGdCQUFTLENBQUMsQ0FBQztZQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLHVDQUFxQyxnQkFBVyxDQUFDLENBQUM7UUFDeEgsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsbUJBQW1CLEdBQVk7UUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHFCQUFxQixPQUFlLEVBQUUsR0FBUSxFQUFFLGdCQUFrQyxFQUFFLFVBQWlEO1FBQ25JLElBQUksR0FBRyxHQUFvQixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQzFELEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztZQUFDLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQUMsQ0FBQztRQUNsRyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFBQyxDQUFDO1FBQy9FLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsZ0NBQWdDLEVBQW1CO1FBQ2pELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUFDLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxzQkFBc0IsR0FBVztRQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFhLENBQUM7WUFBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxLQUFLLEdBQXdCLEVBQUUsQ0FBQztRQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUFDLElBQUksRUFBVSxDQUFDO1FBQUMsSUFBSSxHQUFHLEdBQWlCLElBQUksQ0FBQztRQUM3RixJQUFJLFVBQVUsR0FBRyxVQUFDLE1BQWMsRUFBRSxFQUFnQjtZQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDNUcsRUFBRSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3pFLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBQyxHQUFHLENBQUMsRUFBRSxHQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN0QyxJQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFDckMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsQ0FBQztRQUNILENBQUMsQ0FBQztRQUNGLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO29CQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7Z0JBQUMsSUFBSTtvQkFBQyxLQUFLLENBQUM7Z0JBQzVDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsQ0FBQyxFQUFFLENBQUM7WUFDMUIsQ0FBQztZQUNELE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSyxHQUFHO29CQUNOLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFBQyxLQUFLLENBQUM7b0JBQUMsQ0FBQyxDQUFDLE1BQU07b0JBQy9FLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtvQkFDcEUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCO29CQUM5QyxLQUFLLENBQUM7Z0JBQ1IsS0FBSyxHQUFHO29CQUNOLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO3dCQUFDLEtBQUssQ0FBQztvQkFDN0IsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzt3QkFBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO29CQUN4RixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUM7b0JBQ2pFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQzt3QkFBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7b0JBQ2xFLDBCQUEwQjtvQkFDMUIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQzt3QkFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQzFDLGtCQUFrQjtvQkFDbEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEMsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBUUQsc0JBQXNCLEdBQWtCLEVBQUUsRUFBbUIsRUFBRSxjQUF1QjtRQUNwRixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxHQUFHLGNBQWMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFJLENBQUMsU0FBSSxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFHLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQyxDQUFDO1FBQ2hGLENBQUM7UUFDRCxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQW9CLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9ELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQXNCLElBQVksSUFBWSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0csQ0FBQyxFQXpLUyxNQUFNLEtBQU4sTUFBTSxRQXlLZjtBQ3pLRCxJQUFVLElBQUksQ0E4RWI7QUE5RUQsV0FBVSxJQUFJLEVBQUMsQ0FBQztJQWVILFVBQUssR0FBK0IsRUFBRSxDQUFDO0lBRWxEO1FBQ0Usa0JBQWtCLE1BQWEsRUFBRSxFQUFTO1lBQ3hDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ3BDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLFVBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsa0JBQWdCLEVBQUUsQ0FBQyxJQUFJLHFCQUFrQixDQUFDLENBQUM7WUFDdkYsVUFBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNEO1lBQ0UsU0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDL0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksU0FBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFBQyxRQUFRLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxHQUFTLFNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBQyxTQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUMzRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7b0JBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3BELENBQUM7UUFDSCxDQUFDO1FBQ0QsUUFBUSxFQUFFLENBQUM7UUFDWCxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUF0QmUsWUFBTyxVQXNCdEIsQ0FBQTtJQUVELHFCQUE0QixFQUFTLEVBQUUsVUFBb0I7UUFDekQsSUFBSSxHQUFHLEdBQXNCLEVBQUUsQ0FBQztRQUNoQyxjQUFjLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBSmUsZ0JBQVcsY0FJMUIsQ0FBQTtJQVlrRCxDQUFDO0lBRXBELHFCQUFxQjtJQUVyQixvQkFBb0IsRUFBUztRQUMzQixJQUFJLEdBQUcsR0FBaUIsSUFBSSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxLQUFLLEdBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG1CQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFBQyxRQUFRLENBQUM7WUFDdEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBQyxJQUFJO2dCQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsd0JBQXdCLEVBQVMsRUFBRSxHQUFzQixFQUFFLFVBQW1CO1FBQzVFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUFDLENBQUM7SUFDekQsQ0FBQztJQUdELHFCQUFxQixFQUFTLElBQVksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxFQUFKLENBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUYsQ0FBQyxFQTlFUyxJQUFJLEtBQUosSUFBSSxRQThFYjtBQzlFRCxJQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQ3JDLElBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDckMsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUMvQixJQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDL0MsSUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUN6QyxJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO0FBQzdDLElBQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDbkMsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUMvQixJQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQy9CLElBQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7QUFDakMsSUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUN6QyxJQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ25DLElBQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDbkMsSUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQztBQUM3QyxJQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDO0FBQzNDLElBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDM0MsSUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztBQUMvQyxJQUFNLFlBQVksR0FBRyxjQUFjLENBQUMsWUFBWSxDQUFDO0FBQ2pELElBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDM0MsSUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztBQ2ZuQyxJQUFJLGNBQWMsR0FBZSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztBQ0w5RixJQUFVLFFBQVEsQ0F1QmpCO0FBdkJELFdBQVUsUUFBUTtJQUFDLElBQUEsT0FBTyxDQXVCekI7SUF2QmtCLFdBQUEsT0FBTyxFQUFDLENBQUM7UUFXMUIsbUJBQTBCLEtBQWtCLEVBQUUsU0FBd0I7WUFDcEUsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLEtBQUssQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLElBQW1CLENBQUMsQ0FBQztZQUNsRyxRQUFRLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsU0FBUyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFNLE1BQU0sSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUgsQ0FBQztRQUplLGlCQUFTLFlBSXhCLENBQUE7SUFRSCxDQUFDLEVBdkJrQixPQUFPLEdBQVAsZ0JBQU8sS0FBUCxnQkFBTyxRQXVCekI7QUFBRCxDQUFDLEVBdkJTLFFBQVEsS0FBUixRQUFRLFFBdUJqQjs7Ozs7O0FDdkJELElBQVUsYUFBYSxDQTJEdEI7QUEzREQsV0FBVSxhQUFhLEVBQUMsQ0FBQztJQUVaLCtCQUFpQixHQUE2QjtRQUN2RCxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1FBQzVCLEtBQUssRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU07S0FDOUIsQ0FBQTtJQUVEO1FBQXNDLG9DQUFtRDtRQUN2RiwwQkFBWSxDQUFhLEVBQUUsR0FBRztZQUM1QixrQkFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDekIsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNsQixDQUFDO1FBQ0QsaUNBQU0sR0FBTjtZQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFBQyxNQUFNLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxlQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxlQUFZLENBQUMsQ0FBQztZQUN4RixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUdELDBDQUFlLEdBQWY7WUFDRSxNQUFNLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDbEIsQ0FBQztRQUNKLENBQUM7UUFDTSxrQ0FBaUIsR0FBRywrQkFBaUIsQ0FBQztRQUMvQyx1QkFBQztJQUFELENBQUMsQUFyQkQsQ0FBc0MsS0FBSyxDQUFDLFNBQVMsR0FxQnBEO0lBckJZLDhCQUFnQixtQkFxQjVCLENBQUE7SUFFRCxxQkFBK0IsSUFBZ0IsRUFBRSxHQUFPLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBMUcseUJBQVcsY0FBK0YsQ0FBQTtJQUMxSCxxQkFBK0IsSUFBZ0IsRUFBRSxHQUFPO1FBQ3RELE1BQU0sQ0FBQyxxQkFBQyxDQUFDLElBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFHLEdBQUUsSUFBSSxDQUFDLEtBQU0sQ0FBSSxDQUFDO0lBQzVELENBQUM7SUFGZSx5QkFBVyxjQUUxQixDQUFBO0lBRUQsdUJBQWlDLElBQTRDLEVBQUUsUUFBUSxFQUFFLEtBQTJCO1FBQUUsa0JBQThCO2FBQTlCLFdBQThCLENBQTlCLHNCQUE4QixDQUE5QixJQUE4QjtZQUE5QixpQ0FBOEI7O1FBQ2xKLElBQUksR0FBRyxHQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFIZSwyQkFBYSxnQkFHNUIsQ0FBQTtJQUVELGlCQUF3QixPQUFvQixFQUFFLGNBQTZCO1FBQ3pFLGNBQWMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFDLGdCQUFnQixHQUFDLFNBQVMsRUFBRyxVQUFZLEVBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBTGUscUJBQU8sVUFLdEIsQ0FBQTtJQU9ELG9CQUFvQjtJQUNwQixJQUFJLFFBQTBCLENBQUM7SUFHL0IsTUFBTSxDQUFDLGFBQWEsR0FBRyxjQUFRLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sQ0FBQyxjQUFjLEdBQUcsVUFBQSxLQUFLLElBQU0sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUUvRSxDQUFDLEVBM0RTLGFBQWEsS0FBYixhQUFhLFFBMkR0QjtBQzNERCxJQUFVLEdBQUcsQ0FzRFo7QUF0REQsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNiO1FBQStCLDZCQUFLO1FBQ2xDLG1CQUFZLEdBQVc7WUFDckIsa0JBQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxRQUFRLENBQUM7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDSCxnQkFBQztJQUFELENBQUMsQUFORCxDQUErQixLQUFLLEdBTW5DO0lBTlksYUFBUyxZQU1yQixDQUFBO0lBQ0Q7UUFBcUMsbUNBQVM7UUFDNUMseUJBQVksR0FBWTtZQUFJLGtCQUFNLGFBQVcsR0FBRyxjQUFXLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDakUsc0JBQUM7SUFBRCxDQUFDLEFBRkQsQ0FBcUMsU0FBUyxHQUU3QztJQUZZLG1CQUFlLGtCQUUzQixDQUFBO0lBR0Qsc0JBQTZCLFdBQXFCO1FBQ2hELElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDbkQsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUNyRCxDQUFDO0lBSmUsZ0JBQVksZUFJM0IsQ0FBQTtJQUVELGtCQUF5QixDQUFDO0lBQVYsUUFBSSxPQUFNLENBQUE7SUFPMUIscUJBQTRCLEdBQVcsRUFBRSxLQUFhLEVBQUUsU0FBbUI7UUFDekUsTUFBTSxDQUFDLHFCQUFDLENBQUMsSUFBQyxJQUFJLEVBQUcsR0FBSyxFQUFDLE1BQU0sRUFBRSxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQVEsR0FBQyxxQkFBQyxDQUFDLElBQUMsU0FBUyxFQUFDLHFCQUFxQixFQUFLLE9BQUUsS0FBTSxDQUFJLENBQUM7SUFDckgsQ0FBQztJQUZlLGVBQVcsY0FFMUIsQ0FBQTtBQTBCSCxDQUFDLEVBdERTLEdBQUcsS0FBSCxHQUFHLFFBc0RaIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIHNlcnZpY2VzIHtcclxuICBleHBvcnQgaW50ZXJmYWNlIHNlcnZpY2VPVVQge1xyXG4gICAgZXJyb3I6c3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNhbGxSZXF1ZXN0PFRJTiwgVE9VVCBleHRlbmRzIHNlcnZpY2VPVVQ+KG1ldGhvZFBhdGg6c3RyaW5nLCBpblBhcjogVElOKTogUHJvbWlzZTxUT1VUPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICB2YXIgdXJsID0gYCR7bWV0aG9kUGF0aH0vc2VydmljZS5hc2h4P2A7XHJcbiAgICAgIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHZhciByZXNwID0geG1saHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgdmFyIHJlczogVE9VVCA9IHJlc3AgPyBKU09OLnBhcnNlKHJlc3ApIDogbnVsbDtcclxuICAgICAgICAgICAgICB2YXIgZXJyb3IgPSByZXMgPyByZXMuZXJyb3IgOiBudWxsO1xyXG4gICAgICAgICAgICAgIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTsgZWxzZSByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKG1zZykge1xyXG4gICAgICAgICAgICAgIHJlamVjdChgSlNPTiBleGNlcHRpb24gJHttc2d9IGF0ICR7dXJsfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgcmVqZWN0KGBTdGF0dXMgJHt4bWxodHRwLnN0YXR1c30gYXQgJHt1cmx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB4bWxodHRwLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICB4bWxodHRwLnNlbmQoaW5QYXIgPyBKU09OLnN0cmluZ2lmeShpblBhciwgbnVsbCwgMikgOiAnJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJuYW1lc3BhY2UgdmFsaWRhdGlvbiB7XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkUGFycyB7XHJcbiAgICB0eXBlOiB0eXBlcztcclxuICAgIG1hc2s/OiBzdHJpbmc7IC8vcmVnZXhwIHBybyBzdHJpbmcgbWFza1xyXG4gICAgLy9zdHJpbmcgbGVuZ3RoXHJcbiAgICBtaW5MZW5ndGg/OiBudW1iZXIsXHJcbiAgICBtYXhMZW5ndGg/OiBudW1iZXIsXHJcbiAgICAvL251bWJlciBpbnRlcnZhbHNcclxuICAgIG1pbj86IG51bWJlcixcclxuICAgIG1heD86IG51bWJlcixcclxuICAgIGVxdWFsVG9JZD86IHN0cmluZztcclxuXHJcbiAgfVxyXG4gIGV4cG9ydCBlbnVtIHR5cGVzIHtcclxuICAgIG5vID0gMCxcclxuICAgIHJlcXVpcmVkID0gMHgxLFxyXG4gICAgZW1haWwgPSAweDIsXHJcbiAgICBudW1iZXIgPSAweDQsXHJcbiAgICBkaWdpdHMgPSAweDgsXHJcbiAgICBlcXVhbFRvID0gMHgxMCxcclxuICAgIHN0cmluZ0xlbmd0aCA9IDB4MjAsXHJcbiAgICBudW1iZXJSYW5nZSA9IDB4NDAsXHJcbiAgICBzdHJpbmdNYXNrID0gMHg4MCxcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSUlucHV0U3RhdGUgeyB2YWx1ZTogc3RyaW5nOyBibHVyZWQ/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZzsgfVxyXG5cclxuICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBWQUxJREFURSBMT0dJQ1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUodmFsaWRhdG9yOiBJVmFsaWRQYXJzLCBzdDogSUlucHV0U3RhdGUpIHtcclxuICAgIHZhciBsZW4gPSAhc3QudmFsdWUgPyAwIDogc3QudmFsdWUubGVuZ3RoO1xyXG4gICAgLy9SRVFVSVJFRFxyXG4gICAgaWYgKCh2YWxpZGF0b3IudHlwZSAmIHR5cGVzLnJlcXVpcmVkKSAhPSAwKSB7XHJcbiAgICAgIGlmIChsZW4gPCAxKSB7IHN0LmVycm9yID0gbWVzc2FnZXMucmVxdWlyZWQoKTsgcmV0dXJuOyB9XHJcbiAgICB9XHJcbiAgICAvL1NUUklORyBMRU5HVEhcclxuICAgIGlmICgodmFsaWRhdG9yLnR5cGUgJiB0eXBlcy5zdHJpbmdMZW5ndGgpICE9IDApIHtcclxuICAgICAgaWYgKHZhbGlkYXRvci5taW5MZW5ndGggJiYgdmFsaWRhdG9yLm1heExlbmd0aCkge1xyXG4gICAgICAgIGlmIChsZW4gPCB2YWxpZGF0b3IubWluTGVuZ3RoIHx8IGxlbiA+IHZhbGlkYXRvci5tYXhMZW5ndGgpIHsgc3QuZXJyb3IgPSBtZXNzYWdlcy5yYW5nZWxlbmd0aCh2YWxpZGF0b3IubWluTGVuZ3RoLCB2YWxpZGF0b3IubWF4TGVuZ3RoKTsgcmV0dXJuOyB9XHJcbiAgICAgIH0gZWxzZSBpZiAodmFsaWRhdG9yLm1pbkxlbmd0aCkge1xyXG4gICAgICAgIGlmIChsZW4gPCB2YWxpZGF0b3IubWluTGVuZ3RoKSB7IHN0LmVycm9yID0gbWVzc2FnZXMubWlubGVuZ3RoKHZhbGlkYXRvci5taW5MZW5ndGgpOyByZXR1cm47IH1cclxuICAgICAgfSBlbHNlIGlmICh2YWxpZGF0b3IubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGxlbiA+IHZhbGlkYXRvci5tYXhMZW5ndGgpIHsgc3QuZXJyb3IgPSBtZXNzYWdlcy5tYXhsZW5ndGgodmFsaWRhdG9yLm1heExlbmd0aCk7IHJldHVybjsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLy4uIHdpdGggTUFTS1xyXG4gICAgdmFyIG1hc2s6IFJlZ0V4cCA9IG51bGw7IHZhciBlcnJvcjogc3RyaW5nO1xyXG4gICAgaWYgKCh2YWxpZGF0b3IudHlwZSAmICh0eXBlcy5udW1iZXIgfCB0eXBlcy5udW1iZXJSYW5nZSkpICE9IDApIHtcclxuICAgICAgbWFzayA9IC9eKD86LT9cXGQrfC0/XFxkezEsM30oPzosXFxkezN9KSspPyg/OlxcLlxcZCspPyQvO1xyXG4gICAgICBlcnJvciA9IG1lc3NhZ2VzLm51bWJlcigpO1xyXG4gICAgfSBlbHNlIGlmICgodmFsaWRhdG9yLnR5cGUgJiB0eXBlcy5kaWdpdHMpICE9IDApIHtcclxuICAgICAgbWFzayA9IC9eXFxkKyQvO1xyXG4gICAgICBlcnJvciA9IG1lc3NhZ2VzLmRpZ2l0cygpO1xyXG4gICAgfSBlbHNlIGlmICgodmFsaWRhdG9yLnR5cGUgJiB0eXBlcy5lbWFpbCkgIT0gMCkge1xyXG4gICAgICBtYXNrID0gL15bYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC87XHJcbiAgICAgIGVycm9yID0gbWVzc2FnZXMuZW1haWwoKTtcclxuICAgIH1cclxuICAgIGlmIChtYXNrKSB7XHJcbiAgICAgIGlmIChsZW4gPT0gMCB8fCAhbWFzay50ZXN0KHN0LnZhbHVlKSkgeyBzdC5lcnJvciA9IGVycm9yOyByZXR1cm47IH1cclxuICAgIH1cclxuICAgIC8vTlVNQkVSIFJBTkdFXHJcbiAgICB2YXIgZGVmaW5lZCA9IHYgPT4gdHlwZW9mIHYgIT0gJ3VuZGVmaW5lZCc7XHJcbiAgICBpZiAoKHZhbGlkYXRvci50eXBlICYgdHlwZXMubnVtYmVyUmFuZ2UpICE9IDApIHtcclxuICAgICAgdmFyIG51bSA9IHBhcnNlRmxvYXQoc3QudmFsdWUpO1xyXG4gICAgICBpZiAoZGVmaW5lZCh2YWxpZGF0b3IubWluKSAmJiBkZWZpbmVkKHZhbGlkYXRvci5tYXgpKSB7XHJcbiAgICAgICAgaWYgKG51bSA8IHZhbGlkYXRvci5taW4gfHwgbnVtID4gdmFsaWRhdG9yLm1heCkgeyBzdC5lcnJvciA9IG1lc3NhZ2VzLnJhbmdlKHZhbGlkYXRvci5taW4sIHZhbGlkYXRvci5tYXgpOyByZXR1cm47IH1cclxuICAgICAgfSBlbHNlIGlmIChkZWZpbmVkKHZhbGlkYXRvci5taW4pKSB7XHJcbiAgICAgICAgaWYgKG51bSA8IHZhbGlkYXRvci5taW4pIHsgc3QuZXJyb3IgPSBtZXNzYWdlcy5taW4odmFsaWRhdG9yLm1pbik7IHJldHVybjsgfVxyXG4gICAgICB9IGVsc2UgaWYgKGRlZmluZWQodmFsaWRhdG9yLm1heCkpIHtcclxuICAgICAgICBpZiAobnVtID4gdmFsaWRhdG9yLm1heCkgeyBzdC5lcnJvciA9IG1lc3NhZ2VzLm1heCh2YWxpZGF0b3IubWF4KTsgcmV0dXJuOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCB2YXIgbWVzc2FnZXMgPSB7XHJcbiAgICByZXF1aXJlZDogKCkgPT4gXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlwiLFxyXG4gICAgcmVtb3RlOiAoKSA9PiBcIlBsZWFzZSBmaXggdGhpcyBmaWVsZC5cIixcclxuICAgIGVtYWlsOiAoKSA9PiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIsXHJcbiAgICB1cmw6ICgpID0+IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVJMLlwiLFxyXG4gICAgZGF0ZTogKCkgPT4gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLlwiLFxyXG4gICAgZGF0ZUlTTzogKCkgPT4gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlICggSVNPICkuXCIsXHJcbiAgICBudW1iZXI6ICgpID0+IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyLlwiLFxyXG4gICAgZGlnaXRzOiAoKSA9PiBcIlBsZWFzZSBlbnRlciBvbmx5IGRpZ2l0cy5cIixcclxuICAgIGVxdWFsVG86ICgpID0+IFwiUGxlYXNlIGVudGVyIHRoZSBzYW1lIHZhbHVlIGFnYWluLlwiLFxyXG4gICAgbWF4bGVuZ3RoOiAodjEpID0+IGBQbGVhc2UgZW50ZXIgbm8gbW9yZSB0aGFuICR7djF9IGNoYXJhY3RlcnMuYCxcclxuICAgIG1pbmxlbmd0aDogKHYxKSA9PiBgUGxlYXNlIGVudGVyIGF0IGxlYXN0ICR7djF9IGNoYXJhY3RlcnMuYCxcclxuICAgIHJhbmdlbGVuZ3RoOiAodjEsIHYyKSA9PiBgUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiAke3YxfSBhbmQgJHt2Mn0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICByYW5nZTogKHYxLCB2MikgPT4gYFBsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gJHt2MX0gYW5kICR7djJ9LmAsXHJcbiAgICBtYXg6ICh2MSkgPT4gYFBsZWFzZSBlbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke3YxfS5gLFxyXG4gICAgbWluOiAodjEpID0+IGBQbGVhc2UgZW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHt2MX0uYFxyXG4gIH07XHJcblxyXG59IiwibmFtZXNwYWNlIHJvdXRlciB7XHJcblxyXG4gIC8vZGlmb3RuaSByb3V0ZSBwcm8gcHJpcGFkLCB6ZSBqZSBVUkwgcHJhemRuYVxyXG4gIGV4cG9ydCB2YXIgZ2V0U3RhcnRSb3V0ZTogKCkgPT4gVFJvdXRlQWN0aW9uUGFyOyBcclxuXHJcbiAgLy9ib290IHJvdXRlcnVcclxuICBleHBvcnQgZnVuY3Rpb24gYm9vdEFwcCgpOiBUUm91dGVBY3Rpb25QYXIgeyByb290Um91dGVCaW5kKGRlY29kZUZ1bGxVcmwoKSwgZmFsc2UpOyByZXR1cm4gcm91dGU7IH1cclxuXHJcbiAgLy9uYXZpZ2FjZSBuYSByb3V0ZVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZShyb3V0ZXM6IFRSb3V0ZUFjdGlvblBhcikgeyByZXR1cm4gcm9vdFJvdXRlQmluZChyb3V0ZXMsIHRydWUpOyB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVXJsKHJvdXRlczogVFJvdXRlQWN0aW9uUGFyKTogc3RyaW5nIHsgcmV0dXJuIGVuY29kZUZ1bGxVcmwocm91dGVzKTsgfVxyXG5cclxuICAvL3JvdXRlIGNoYW5nZWQgbm90aWZpY2F0aW9uXHJcbiAgZXhwb3J0IHZhciBvblJvdXRlQ2hhbmdlZDogKHJvdXRlOiBUUm91dGVBY3Rpb25QYXIpID0+IHZvaWQ7XHJcblxyXG4gIC8vY29uZmlnXHJcbiAgZXhwb3J0IHZhciAkaXNIYXNoUm91dGVyID0gZmFsc2U7IC8vaGFzaCBvciBzbGFzaCByb3V0ZSBkZWxpbWl0ZXJcclxuICBleHBvcnQgdmFyICRiYXNpY1VybCA9IGdldEJhc2ljVXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTsgLy9jYXN0IFVSTCBwcmVkIHJvdXRlIHBhcmFtYXR0ZXJcclxuXHJcbiAgLy9yb291dGUgb2JqZWt0IHN0cnVjdHVyZVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIHN0b3JlSWQ/OiBzdHJpbmc7XHJcbiAgICBob29rSWQ/OiBzdHJpbmc7IC8vbmF6ZXYgcHJvcGVydHkgdiBob29rLnBhcmVudCBTdG9yZSwgb2JzYWh1amljaSBSb3V0ZUhvb2tEaXNwYXRjaGVyLiAhaG9va0lkID0+IHJvdXRlRGVmYXVsdFByb3BOYW1lIHByb3BlcnR5XHJcbiAgICBwYXI/OiB7fTsgLy88c3RvcmVJZD4ucm91dGVBY3Rpb24ocGFyLCBob29rSWQpXHJcbiAgICByb3V0ZUhvb2tEZWZhdWx0PzogVFJvdXRlQWN0aW9uUGFyOyAvL2RpZm90bmkgY2hpbGQgcm91dGUgaG9va1xyXG4gICAgLy8uLi4gZGFsc2ksIG5hbWVkIHJvdXRlIGhvb2tcclxuICB9XHJcblxyXG5cclxuICAvLyoqKioqKioqKioqKioqKioqIHJlZnJlc2ggdmlldyBvbiByb3V0ZSBjaGFuZ2VcclxuICAvL2FrdHVhbG5pIHJvdXRlIG9iamVrdFxyXG4gIHZhciByb3V0ZTogVFJvdXRlQWN0aW9uUGFyO1xyXG5cclxuICBmdW5jdGlvbiByb290Um91dGVCaW5kKHJvdXRlczogVFJvdXRlQWN0aW9uUGFyIC8qbnVsbCA9PiBzdGFydCByb3V0ZSovLCB3aXRoUHVzdFN0YXRlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXJvdXRlcykgcm91dGVzID0gZ2V0U3RhcnRSb3V0ZSA/IGdldFN0YXJ0Um91dGUoKSA6IG51bGw7IGlmICghcm91dGVzKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihgbWlzc2luZyByb3V0ZXNgKTtcclxuICAgIHJvdXRlID0gcm91dGVzO1xyXG4gICAgaWYgKG9uUm91dGVDaGFuZ2VkKSBvblJvdXRlQ2hhbmdlZChyb3V0ZXMpO1xyXG4gICAgaWYgKHdpdGhQdXN0U3RhdGUpIHB1c2hTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8qKioqKioqKioqKioqKioqKiBQT1BTVEFURSBFVkVOVFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZXYgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYD4gcG9wc3RhdGU6ICR7d2luZG93LmxvY2F0aW9uLmhyZWZ9YCk7XHJcbiAgICByb290Um91dGVCaW5kKGRlY29kZUZ1bGxVcmwoKSwgZmFsc2UpO1xyXG4gIH0pO1xyXG5cclxuICAvL21vZGlmeSBicm93c2VyIFVSTFxyXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZSgpIHtcclxuICAgIGxldCB1cmxTdHIgPSBlbmNvZGVGdWxsVXJsKHJvdXRlKTtcclxuICAgIGNvbnNvbGUubG9nKGA+IHB1c2hTdGF0ZTogJHt1cmxTdHJ9YCk7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmxTdHIpO1xyXG4gIH1cclxuXHJcbiAgLy9yb3V0YSBwYXJzIGFyZSBhZnRlciBcIi5odG1sXCIgdXJsIHBhcnRcclxuICBmdW5jdGlvbiBnZXRCYXNpY1VybChzdGFydFVybDogc3RyaW5nKTogc3RyaW5nIHsgbGV0IGlkeCA9IHN0YXJ0VXJsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignLmh0bWwnKTsgcmV0dXJuIGlkeCA+PSAwID8gc3RhcnRVcmwuc3Vic3RyKDAsIGlkeCArIDUpIDogc3RhcnRVcmw7IH1cclxuXHJcbiAgdmFyIHJvdXRlUGFySWdub3JlcyA9IFsnc3RvcmVJZCcsICdob29rSWQnLCAncGFyJ107XHJcbiAgdmFyIHJvdXRlSG9va0RlZmF1bHROYW1lID0gJ3JvdXRlSG9va0RlZmF1bHQnO1xyXG5cclxuICBmdW5jdGlvbiBlbmNvZGVVcmwoc3Q6IFRSb3V0ZUFjdGlvblBhcik6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBlbmNvZGVVcmxMb3cocmVzLCBzdCwgbnVsbCk7XHJcbiAgICBsZXQgdXJsID0gcmVzLmpvaW4oJycpO1xyXG4gICAgcmV0dXJuIGNsZWFyU2xhc2hlcyh1cmwucmVwbGFjZSgvKFxcJFxcLykqJC9nLCAnJykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZW5jb2RlRnVsbFVybChzdDogVFJvdXRlQWN0aW9uUGFyKTogc3RyaW5nIHtcclxuICAgIGxldCB1cmxTdHIgPSBzdCA/IGVuY29kZVVybChzdCkgOiBudWxsO1xyXG4gICAgLy9yZXR1cm4gJGJhc2ljVXJsICsgKHVybFN0ciA/ICgkaXNIYXNoUm91dGVyID8gJyMnIDogJy8nKSArIHVybFN0ciA6ICcnKTtcclxuICAgIHJldHVybiAkYmFzaWNVcmwgKyAodXJsU3RyID8gKCRpc0hhc2hSb3V0ZXIgPyAnIycgOiAnPycpICsgdXJsU3RyIDogJycpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlRnVsbFVybCh1cmw/OiBzdHJpbmcpOiBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgcmV0dXJuIGRlY29kZVVybChkZWNvZGVVcmxQYXJ0KHVybCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlVXJsUGFydCh1cmw/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgaWYgKCF1cmwudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCRiYXNpY1VybCkpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBsb2NhdGlvbi5ocmVmIGRvZXMgbm90IHN0YXJ0IHdpdGggJHskYmFzaWNVcmx9YCk7XHJcbiAgICByZXR1cm4gY2xlYXJTbGFzaGVzKHVybC5zdWJzdHIoJGJhc2ljVXJsLmxlbmd0aCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlVXJsKHVybD86IHN0cmluZyk6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBpZiAoIXVybCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gZGVjb2RlVXJsTG93KHVybCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVSb3V0ZShzdG9yZUlkOiBzdHJpbmcsIHBhcj86IHt9LCByb3V0ZUhvb2tEZWZhdWx0PzogVFJvdXRlQWN0aW9uUGFyLCBvdGhlckhvb2tzPzogeyBbbmFtZTogc3RyaW5nXTogVFJvdXRlQWN0aW9uUGFyOyB9KTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIGxldCByZXM6IFRSb3V0ZUFjdGlvblBhciA9IHsgc3RvcmVJZDogc3RvcmVJZCwgcGFyOiBwYXIgfTtcclxuICAgIGlmIChyb3V0ZUhvb2tEZWZhdWx0KSB7IHJlcy5yb3V0ZUhvb2tEZWZhdWx0ID0gcm91dGVIb29rRGVmYXVsdDsgZGVsZXRlIHJvdXRlSG9va0RlZmF1bHQuaG9va0lkOyB9XHJcbiAgICBpZiAob3RoZXJIb29rcylcclxuICAgICAgZm9yIChsZXQgcCBpbiBvdGhlckhvb2tzKSB7IGxldCBoayA9IHJlc1twXSA9IG90aGVySG9va3NbcF07IGhrLmhvb2tJZCA9IHA7IH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDaGlsZFJvdXRlUHJvcE5hbWVzKHN0OiBUUm91dGVBY3Rpb25QYXIpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIGxldCBwcm9wcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgcCBpbiBzdCkgaWYgKHJvdXRlUGFySWdub3Jlcy5pbmRleE9mKHApIDwgMCkgcHJvcHMucHVzaChwKTtcclxuICAgIHJldHVybiBwcm9wcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlY29kZVVybExvdyh1cmw6IHN0cmluZyk6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBpZiAoISRpc0hhc2hSb3V0ZXIpIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xyXG4gICAgdXJsID0gJ3snICsgdXJsLnJlcGxhY2UoL1xcJFxcLy9nLCAnfScpLnJlcGxhY2UoL1xcLy9nLCAneycpO1xyXG4gICAgbGV0IHN0YWNrOiBBcnJheTxJRGVjb2RlU3RhY2s+ID0gW107IGxldCBpID0gMDsgbGV0IGNoOiBzdHJpbmc7IGxldCByZXM6IElEZWNvZGVTdGFjayA9IG51bGw7XHJcbiAgICBsZXQgcGFyc2VSb3V0ZSA9IChlbmRJZHg6IG51bWJlciwgc3Q6IElEZWNvZGVTdGFjaykgPT4ge1xyXG4gICAgICBsZXQgcyA9IHVybC5zdWJzdHJpbmcoc3Qub3BlbklkeCwgZW5kSWR4IC0gMSk7XHJcbiAgICAgIGxldCBwYXJ0cyA9IHMuc3BsaXQoJzsnKTtcclxuICAgICAgbGV0IHByb3BDb21wID0gcGFydHNbMF0uc3BsaXQoJy0nKTsgaWYgKHByb3BDb21wLmxlbmd0aCA+IDIpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKCdwcm9wQ29tcC5sZW5ndGggPiAyJyk7XHJcbiAgICAgIHN0Lmhvb2tJZCA9IHByb3BDb21wLmxlbmd0aCA9PSAxID8gbnVsbCA6IHByb3BDb21wWzBdO1xyXG4gICAgICBzdC5yb3V0ZSA9IHsgc3RvcmVJZDogcHJvcENvbXAubGVuZ3RoID09IDEgPyBwcm9wQ29tcFswXSA6IHByb3BDb21wWzFdIH07XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBudiA9IHBhcnRzW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgaWYgKCFzdC5yb3V0ZS5wYXIpIHN0LnJvdXRlLnBhciA9IHt9O1xyXG4gICAgICAgIHN0LnJvdXRlLnBhcltudlswXV0gPSBkZWNvZGVVUklDb21wb25lbnQobnZbMV0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgaWYgKGkgPj0gdXJsLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPj0gMSkgY2ggPSAnfSc7IGVsc2UgYnJlYWs7XHJcbiAgICAgICAgaSA9IHVybC5sZW5ndGggKyAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoID0gdXJsLmNoYXJBdChpKTsgaSsrO1xyXG4gICAgICB9XHJcbiAgICAgIHN3aXRjaCAoY2gpIHtcclxuICAgICAgICBjYXNlICd7JzpcclxuICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggPT0gMCkgeyByZXMgPSB7IG9wZW5JZHg6IGkgfTsgc3RhY2sucHVzaChyZXMpOyBicmVhazsgfSAvL3Jvb3RcclxuICAgICAgICAgIGxldCBsYXN0ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBpZiAoIWxhc3Qucm91dGUpIHBhcnNlUm91dGUoaSwgbGFzdCk7IC8venByYWN1aiBzZWt2ZW5jaSBtZXppIHt4eHh4e1xyXG4gICAgICAgICAgc3RhY2sucHVzaCh7IG9wZW5JZHg6IGkgfSk7IC8vemFjbmkgbm92eSBzdGFja1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnfSc6XHJcbiAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID09IDApIGJyZWFrO1xyXG4gICAgICAgICAgbGV0IGxhc3QyID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBpZiAoIWxhc3QyLnJvdXRlKSBwYXJzZVJvdXRlKGksIGxhc3QyKTsgLy96cHJhY3VqIHNla3ZlbmNpIG1lemkge3h4eHh9LCB4eHggamUgYmV6IHsgaSB9XHJcbiAgICAgICAgICBsZXQgcGFyUHJvcCA9IGxhc3QyLmhvb2tJZCA/IGxhc3QyLmhvb2tJZCA6IHJvdXRlSG9va0RlZmF1bHROYW1lO1xyXG4gICAgICAgICAgaWYgKHBhclByb3AgIT0gcm91dGVIb29rRGVmYXVsdE5hbWUpIGxhc3QyLnJvdXRlLmhvb2tJZCA9IHBhclByb3A7XHJcbiAgICAgICAgICAvL25hdmF6YW5pIG5hIHBhcmVudCByb3V0ZVxyXG4gICAgICAgICAgbGV0IHBhciA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDJdO1xyXG4gICAgICAgICAgaWYgKHBhcikgcGFyLnJvdXRlW3BhclByb3BdID0gbGFzdDIucm91dGU7XHJcbiAgICAgICAgICAvL3Z5bmRlaiB6ZSBzdGFja3VcclxuICAgICAgICAgIHN0YWNrLnNwbGljZShzdGFjay5sZW5ndGggLSAxLCAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnJvdXRlO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJmYWNlIElEZWNvZGVTdGFjayB7XHJcbiAgICBvcGVuSWR4OiBudW1iZXI7XHJcbiAgICByb3V0ZT86IFRSb3V0ZUFjdGlvblBhcjtcclxuICAgIGhvb2tJZD86IHN0cmluZztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVuY29kZVVybExvdyhyZXM6IEFycmF5PHN0cmluZz4sIHN0OiBUUm91dGVBY3Rpb25QYXIsIHBhcmVudFByb3BOYW1lPzogc3RyaW5nKSB7XHJcbiAgICByZXMucHVzaCgocGFyZW50UHJvcE5hbWUgPyBwYXJlbnRQcm9wTmFtZSArICctJyA6ICcnKSArIChzdC5zdG9yZUlkID8gc3Quc3RvcmVJZCA6ICcnKSk7XHJcbiAgICBpZiAoc3QucGFyKSB7XHJcbiAgICAgIGxldCBwcm9wcyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBwIGluIHN0LnBhcikgcHJvcHMucHVzaChwKTtcclxuICAgICAgcHJvcHMuc29ydCgpLmZvckVhY2gocCA9PiByZXMucHVzaChgOyR7cH09JHtlbmNvZGVVUklDb21wb25lbnQoc3QucGFyW3BdKX1gKSk7XHJcbiAgICB9XHJcbiAgICBnZXRDaGlsZFJvdXRlUHJvcE5hbWVzKHN0KS5zb3J0KCkuZm9yRWFjaChwID0+IHtcclxuICAgICAgcmVzLnB1c2goJy8nKTtcclxuICAgICAgZW5jb2RlVXJsTG93KHJlcywgc3RbcF0sIHAgPT0gcm91dGVIb29rRGVmYXVsdE5hbWUgPyBudWxsIDogcCk7XHJcbiAgICAgIHJlcy5wdXNoKCckLycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhclNsYXNoZXMocGF0aDogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKS5yZXBsYWNlKC9eW1xcI1xcL1xcP10/LywgJycpOyB9XHJcbn0iLCJuYW1lc3BhY2Ugc2l0ZSB7XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSU5vZGUge1xyXG4gICAgaWQ6IHN0cmluZyB8IG51bWJlcjtcclxuICAgIHRpdGxlPzogc3RyaW5nOyAvL2NoeWJpLWxpLCB2ZXptZSBzZSB6IElUYWIudGl0bGUgXHJcbiAgICBiclRpdGxlPzpzdHJpbmc7IC8vdGl0bGUgcHJvIGJyZWFkY3J1bWJcclxuICAgIGNyZWF0ZVBhZ2U6IChyb3V0ZVBhcikgPT4gSlNYLkVsZW1lbnQsXHJcbiAgICBwYXRoPzogc3RyaW5nO1xyXG4gICAgY2hpbGRzPzogQXJyYXk8SU5vZGU+O1xyXG4gICAgcGFyZW50PzogSU5vZGU7XHJcbiAgICBsYXJnZUxvZ28/OiBib29sZWFuOyAvL3ZlbGtlIGxvZ28gdiBjaGxhZGljaVxyXG4gICAgdGFiPzogSVRhYjsgLy9teSB0YWJcclxuICAgIG5vVGl0bGU/OmJvb2xlYW47IC8vcGFnZSB0ZW1wbGF0ZSBuZWdlbmVydWplIHRpdGxlIHN0cmFua3lcclxuICB9XHJcbiAgZXhwb3J0IHZhciByb290OiBJTm9kZTtcclxuICBleHBvcnQgdmFyIG5vZGVzOiB7IFtwYXRoOiBzdHJpbmddOiBJTm9kZTsgfSA9IHt9O1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gYm9vdEFwcCgpIHtcclxuICAgIGZ1bmN0aW9uIGluaXROb2RlKHBhcmVudDogSU5vZGUsIG5kOiBJTm9kZSkge1xyXG4gICAgICBuZC5jaGlsZHMgPSBub2RlQ2hpbGRzKG5kKTtcclxuICAgICAgbmQucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICBpZiAoIW5kLnRhYikgbmQudGFiID0gbmQucGFyZW50LnRhYjtcclxuICAgICAgbmQucGF0aCA9IGdldE5vZGVQYXRoKG5kKTtcclxuICAgICAgaWYgKG5vZGVzW25kLnBhdGhdKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihgU2l0ZU1hcCBub2RlICR7bmQucGF0aH0gYWxyZWFkeSBleGlzdHMhYCk7XHJcbiAgICAgIG5vZGVzW25kLnBhdGhdID0gbmQ7XHJcbiAgICAgIGlmIChuZC5jaGlsZHMpIG5kLmNoaWxkcy5mb3JFYWNoKG4gPT4gaW5pdE5vZGUobmQsIG4pKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGluaXRUYWJzKCkge1xyXG4gICAgICB0YWJzLiRjaGlsZHMgPSBbXTsgdmFyIGlkeCA9IDA7XHJcbiAgICAgIGZvciAodmFyIHAgaW4gdGFicykge1xyXG4gICAgICAgIGlmIChwLnN0YXJ0c1dpdGgoJyQnKSkgY29udGludWU7XHJcbiAgICAgICAgdmFyIHQ6IElUYWIgPSB0YWJzW3BdOyB0YWJzLiRjaGlsZHMucHVzaCh0KTsgdC5pZHggPSBpZHgrKztcclxuICAgICAgICBpZiAoIXQucm9vdE5vZGUpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKCchdC5yb290Tm9kZScpO1xyXG4gICAgICAgIHQucm9vdE5vZGUudGFiID0gdDtcclxuICAgICAgICBpZiAoIXQucm9vdE5vZGUudGl0bGUpIHQucm9vdE5vZGUudGl0bGUgPSB0LnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbml0VGFicygpO1xyXG4gICAgaW5pdE5vZGUobnVsbCwgcm9vdCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbm9kZVBhcmVudHMobmQ6IElOb2RlLCBpZ25vcmVTZWxmPzogYm9vbGVhbik6IEFycmF5PElOb2RlPiB7XHJcbiAgICB2YXIgcmVzOiBub2RlUGFyZW50c1Jlc3VsdCA9IHt9O1xyXG4gICAgbm9kZVBhcmVudHNMb3cobmQsIHJlcywgaWdub3JlU2VsZik7XHJcbiAgICByZXR1cm4gcmVzLnJlcy5yZXZlcnNlKCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElUYWJzIHtcclxuICAgICRjaGlsZHM/OiBBcnJheTxJVGFiPjtcclxuICB9XHJcbiAgZXhwb3J0IGludGVyZmFjZSBJVGFiIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpZHg/OiBudW1iZXI7XHJcbiAgICByb290Tm9kZT86IElOb2RlOyAvL2hsYXZuaSBzdHJhbmthIHBybyB0YWJcclxuICB9XHJcbiAgZXhwb3J0IHZhciB0YWJzOiBJVGFicztcclxuXHJcbiAgZXhwb3J0IHZhciBnZXRCbGFua1BhZ2U6IChyb3V0ZVBhcikgPT4gSlNYLkVsZW1lbnQ7O1xyXG5cclxuICAvLyoqKioqKioqKioqIFByaXZhdGVcclxuXHJcbiAgZnVuY3Rpb24gbm9kZUNoaWxkcyhuZDogSU5vZGUpOiBBcnJheTxJTm9kZT4ge1xyXG4gICAgdmFyIHJlczogQXJyYXk8SU5vZGU+ID0gbnVsbDtcclxuICAgIGZvciAodmFyIHAgaW4gbmQpIHtcclxuICAgICAgdmFyIHN1Yk5kOiBJTm9kZSA9IG5kW3BdO1xyXG4gICAgICBpZiAoIXN1Yk5kIC8qfHwgIXN1Yk5kLnRpdGxlKi8gfHwgIXN1Yk5kLmlkKSBjb250aW51ZTtcclxuICAgICAgaWYgKCFyZXMpIHJlcyA9IFtzdWJOZF07IGVsc2UgcmVzLnB1c2goc3ViTmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG5vZGVQYXJlbnRzTG93KG5kOiBJTm9kZSwgcmVzOiBub2RlUGFyZW50c1Jlc3VsdCwgaWdub3JlU2VsZjogYm9vbGVhbikge1xyXG4gICAgaWYgKCFyZXMucmVzKSByZXMucmVzID0gaWdub3JlU2VsZiA/IFtdIDogW25kXTtcclxuICAgIHdoaWxlIChuZC5wYXJlbnQpIHsgbmQgPSBuZC5wYXJlbnQ7IHJlcy5yZXMucHVzaChuZCk7IH1cclxuICB9XHJcbiAgaW50ZXJmYWNlIG5vZGVQYXJlbnRzUmVzdWx0IHsgcmVzID86IEFycmF5PElOb2RlPiB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE5vZGVQYXRoKG5kOiBJTm9kZSk6IHN0cmluZyB7IHJldHVybiBub2RlUGFyZW50cyhuZCkubWFwKG4gPT4gbi5pZCkuam9pbignfCcpOyB9XHJcbn0iLCJjb25zdCBCdXR0b24gPSBSZWFjdEJvb3RzdHJhcC5CdXR0b247IFxyXG5jb25zdCBOYXZiYXIgPSBSZWFjdEJvb3RzdHJhcC5OYXZiYXI7IFxyXG5jb25zdCBOYXYgPSBSZWFjdEJvb3RzdHJhcC5OYXY7IFxyXG5jb25zdCBOYXZJdGVtID0gUmVhY3RCb290c3RyYXAuTmF2SXRlbTsgXHJcbmNvbnN0IE5hdkRyb3Bkb3duID0gUmVhY3RCb290c3RyYXAuTmF2RHJvcGRvd247XHJcbmNvbnN0IE1lbnVJdGVtID0gUmVhY3RCb290c3RyYXAuTWVudUl0ZW07XHJcbmNvbnN0IEJyZWFkY3J1bWIgPSBSZWFjdEJvb3RzdHJhcC5CcmVhZGNydW1iO1xyXG5jb25zdCBNb2RhbCA9IFJlYWN0Qm9vdHN0cmFwLk1vZGFsO1xyXG5jb25zdCBDb2wgPSBSZWFjdEJvb3RzdHJhcC5Db2w7XHJcbmNvbnN0IFJvdyA9IFJlYWN0Qm9vdHN0cmFwLlJvdztcclxuY29uc3QgR3JpZCA9IFJlYWN0Qm9vdHN0cmFwLkdyaWQ7XHJcbmNvbnN0IENsZWFyZml4ID0gUmVhY3RCb290c3RyYXAuQ2xlYXJmaXg7XHJcbmNvbnN0IExhYmVsID0gUmVhY3RCb290c3RyYXAuTGFiZWw7XHJcbmNvbnN0IFBhbmVsID0gUmVhY3RCb290c3RyYXAuUGFuZWw7XHJcbmNvbnN0IFBhbmVsR3JvdXAgPSBSZWFjdEJvb3RzdHJhcC5QYW5lbEdyb3VwO1xyXG5jb25zdCBGb3JtR3JvdXAgPSBSZWFjdEJvb3RzdHJhcC5Gb3JtR3JvdXA7XHJcbmNvbnN0IEhlbHBCbG9jayA9IFJlYWN0Qm9vdHN0cmFwLkhlbHBCbG9jaztcclxuY29uc3QgRm9ybUNvbnRyb2wgPSBSZWFjdEJvb3RzdHJhcC5Gb3JtQ29udHJvbDtcclxuY29uc3QgQ29udHJvbExhYmVsID0gUmVhY3RCb290c3RyYXAuQ29udHJvbExhYmVsO1xyXG5jb25zdCBBY2NvcmRpb24gPSBSZWFjdEJvb3RzdHJhcC5BY2NvcmRpb247XHJcbmNvbnN0IFJhZGlvID0gUmVhY3RCb290c3RyYXAuUmFkaW87XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbnRlcmZhY2UgSURPTVNlcnZlciB7XHJcbiAgcmVuZGVyVG9TdHJpbmcoZWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pOiBzdHJpbmc7XHJcbiAgcmVuZGVyVG9TdGF0aWNNYXJrdXAoZWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pOiBzdHJpbmc7XHJcbn1cclxuXHJcbnZhciBSZWFjdERPTVNlcnZlcjogSURPTVNlcnZlciA9IFJlYWN0WydfX1NFQ1JFVF9ET01fU0VSVkVSX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQnXTsiLCJuYW1lc3BhY2Ugc2VydmljZXMuZW1haWxlciB7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBzZW5kRW1haWxJTiB7XHJcbiAgICBmcm9tOiBzdHJpbmc7XHJcbiAgICB0bzogc3RyaW5nOyAvL2UuZy4gXCJKb3NlZiBOb3Zha1wiPGpvc2VmQGxtLmN6PixcIkphbmEgS1wiPGphbmFAbG0uY3o+XHJcbiAgICBjYz86IHN0cmluZztcclxuICAgIGJjYz86IHN0cmluZztcclxuICAgIGlzQm9keUh0bWw/OiBib29sZWFuO1xyXG4gICAgYm9keTogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgICBzdWJqZWN0OiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gc2VuZEVNYWlsKGVtYWlsOiBzZW5kRW1haWxJTiwgY29tcGxldGVkOiBsaWIuVENhbGxiYWNrKSB7XHJcbiAgICBlbWFpbC5pc0JvZHlIdG1sID0gdHlwZW9mIGVtYWlsLmJvZHkgIT0gXCJzdHJpbmdcIjtcclxuICAgIGlmIChlbWFpbC5pc0JvZHlIdG1sKSBlbWFpbC5ib2R5ID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoZW1haWwuYm9keSBhcyBKU1guRWxlbWVudCk7XHJcbiAgICBzZXJ2aWNlcy5jYWxsUmVxdWVzdCgnbGlicy9zZXJ2aWNlLWVtYWlsZXInLCBlbWFpbCkudGhlbigoKSA9PiBjb21wbGV0ZWQoKSkuY2F0Y2goZXJyID0+IHsgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oZXJyKTsgfSk7XHJcbiAgfVxyXG5cclxuICAvL2FsZXJ0KFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKDxkaXY+eHh4PC9kaXY+KSk7XHJcbiAgLy9zZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgZGVidWdnZXI7XHJcbiAgLy8gIGFsZXJ0KFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKDxkaXY+eHh4PC9kaXY+KSk7XHJcbiAgLy99KTtcclxuXHJcbn0iLCJuYW1lc3BhY2Ugc2l0ZW1hcFJvdXRlciB7XHJcblxyXG4gIGV4cG9ydCB2YXIgY2hpbGRDb250ZXh0VHlwZXM6IFJlYWN0LlZhbGlkYXRpb25NYXA8YW55PiA9IHtcclxuICAgIHNpdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICByb3V0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBBcHBSb290Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSb290UHJvcHMsIHJvdXRlci5UUm91dGVBY3Rpb25QYXI+IHtcclxuICAgIGNvbnN0cnVjdG9yKHA6IElSb290UHJvcHMsIGN0eCkge1xyXG4gICAgICBzdXBlcihwLCBjdHgpO1xyXG4gICAgICB0aGlzLnN0YXRlID0gcC5pbml0Um91dGU7XHJcbiAgICAgIHJvb3RDb21wID0gdGhpcztcclxuICAgIH1cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgIHRoaXMuYWN0Tm9kZSA9IHNpdGUubm9kZXNbdGhpcy5zdGF0ZS5zdG9yZUlkXTtcclxuICAgICAgaWYgKCF0aGlzLmFjdE5vZGUpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBOb2RlIHBhdGggJHt0aGlzLnN0YXRlLnN0b3JlSWR9IG5vdCBmb3VuZGApO1xyXG4gICAgICB2YXIgcmVzID0gKHRoaXMuYWN0Tm9kZS5jcmVhdGVQYWdlID8gdGhpcy5hY3ROb2RlLmNyZWF0ZVBhZ2UgOiBzaXRlLmdldEJsYW5rUGFnZSkoKHRoaXMuc3RhdGUucGFyKSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBhY3ROb2RlOiBzaXRlLklOb2RlO1xyXG5cclxuICAgIGdldENoaWxkQ29udGV4dCgpOiBJQ29udGV4dCB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2l0ZTogdGhpcy5hY3ROb2RlLFxyXG4gICAgICAgIHJvdXRlOiB0aGlzLnN0YXRlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVVybDxUPihub2RlOiBzaXRlLklOb2RlLCBwYXI/OiBUKSB7IHJldHVybiByb3V0ZXIubmF2aWdhdGVVcmwoeyBzdG9yZUlkOiBub2RlLnBhdGgsIHBhcjogcGFyIH0pOyB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVGFnPFQ+KG5vZGU6IHNpdGUuSU5vZGUsIHBhcj86IFQpOiBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gPGEgaHJlZj17bmF2aWdhdGVVcmwobm9kZSwgcGFyKSB9Pntub2RlLnRpdGxlfTwvYT47XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudDxQPih0eXBlOiBSZWFjdC5Db21wb25lbnRDbGFzczxQPiB8IFJlYWN0LlNGQzxQPiwgcm91dGVQYXIsIHByb3BzOiBQICYgUmVhY3QuQXR0cmlidXRlcywgLi4uY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVtdKTogUmVhY3QuUmVhY3RFbGVtZW50PFA+IHtcclxuICAgIHZhciBwYXI6IFAgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcm91dGVQYXIpO1xyXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodHlwZSwgcGFyKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBib290QXBwKGNvbnRlbnQ6IEhUTUxFbGVtZW50LCBzaXRlbWFwQ3JlYXRvcjogbGliLlRDYWxsYmFjaykge1xyXG4gICAgc2l0ZW1hcENyZWF0b3IoKTtcclxuICAgIHNpdGUuYm9vdEFwcCgpO1xyXG4gICAgdmFyIHN0YXJ0Um91dGUgPSByb3V0ZXIuYm9vdEFwcCgpO1xyXG4gICAgUmVhY3RET00ucmVuZGVyKDxBcHBSb290Q29tcG9uZW50IGluaXRSb3V0ZT17IHN0YXJ0Um91dGUgfSAvPiwgY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElDb250ZXh0IHtcclxuICAgIHNpdGU6IHNpdGUuSU5vZGU7XHJcbiAgICByb3V0ZTogcm91dGVyLlRSb3V0ZUFjdGlvblBhclxyXG4gIH1cclxuXHJcbiAgLy8qKioqKioqKioqIFByaXZhdGVcclxuICB2YXIgcm9vdENvbXA6IEFwcFJvb3RDb21wb25lbnQ7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBJUm9vdFByb3BzIHsgaW5pdFJvdXRlOiByb3V0ZXIuVFJvdXRlQWN0aW9uUGFyIH1cclxuXHJcbiAgcm91dGVyLmdldFN0YXJ0Um91dGUgPSAoKSA9PiB7IHJldHVybiB7IHN0b3JlSWQ6IHNpdGUucm9vdC5wYXRoIH07IH07XHJcbiAgcm91dGVyLm9uUm91dGVDaGFuZ2VkID0gcm91dGUgPT4geyBpZiAocm9vdENvbXApIHJvb3RDb21wLnNldFN0YXRlKHJvdXRlKTsgfTtcclxuXHJcbn0iLCJuYW1lc3BhY2UgbGliIHtcclxuICBleHBvcnQgY2xhc3MgRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobXNnOiBzdHJpbmcpIHtcclxuICAgICAgc3VwZXIobXNnKTtcclxuICAgICAgZGVidWdnZXI7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGNsYXNzIEVOb3RJbXBsZW1lbnRlZCBleHRlbmRzIEV4Y2VwdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2c/OiBzdHJpbmcpIHsgc3VwZXIoYE1pc3NpbmcgJHttc2d9IG92ZXJyaWRlYCk7IH1cclxuICB9XHJcbiAgZXhwb3J0IHR5cGUgVENhbGxiYWNrID0gKCkgPT4gdm9pZDtcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzTmFtZShjb25zdHJ1Y3RvcjogRnVuY3Rpb24pOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlcyA9IGNvbnN0cnVjdG9yWyduYW1lJ107IGlmIChyZXMpIHJldHVybiByZXM7XHJcbiAgICBsZXQgYXJyID0gY29uc3RydWN0b3IudG9TdHJpbmcoKS5tYXRjaCgvZnVuY3Rpb25cXHMqKFxcdyspLyk7XHJcbiAgICByZXR1cm4gYXJyICYmIGFyci5sZW5ndGggPT0gMiA/IGFyclsxXSA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudFByb3BzIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXMge1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBrZXk/OiBhbnk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVFeHQodXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIG5ld1dpbmRvdz86IGJvb2xlYW4pOiBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gPGEgaHJlZj17IHVybCB9IHRhcmdldD17bmV3V2luZG93ID8gJ19ibGFuaycgOiAnX3NlbGYnfT48aSBjbGFzc05hbWU9J2ZhIGZhLWV4dGVybmFsLWxpbmsnPjwvaT4ge3RpdGxlfTwvYT47XHJcbiAgfVxyXG5cclxuICAvL2V4cG9ydCBmdW5jdGlvbiBjYWxsU2VydmVyKG1ldGhvZDogc3RyaW5nLCBwYXI6IHt9KTogUHJvbWlzZTx7fT4ge1xyXG4gIC8vICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gIC8vICAgIHZhciB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgLy8gICAgdmFyIHVybCA9IGBzZXJ2ZXIvJHttZXRob2R9LmFzaHg/YDtcclxuICAvLyAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAvLyAgICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gIC8vICAgICAgICBpZiAoeG1saHR0cC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgLy8gICAgICAgICAgdHJ5IHtcclxuICAvLyAgICAgICAgICAgIHZhciByZXNwID0geG1saHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgLy8gICAgICAgICAgICB2YXIgcmVzOiBudW1iZXIgPSByZXNwID8gSlNPTi5wYXJzZShyZXNwKSA6IG51bGw7XHJcbiAgLy8gICAgICAgICAgICB2YXIgZXJyb3IgPSByZXMgID8gcmVzWydlcnJvciddIDogbnVsbDtcclxuICAvLyAgICAgICAgICAgIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTsgZWxzZSByZXNvbHZlKHJlcyk7XHJcbiAgLy8gICAgICAgICAgfSBjYXRjaCAobXNnKSB7XHJcbiAgLy8gICAgICAgICAgICByZWplY3QoYEpTT04gZXhjZXB0aW9uICR7bXNnfSBhdCAke3VybH1gKTtcclxuICAvLyAgICAgICAgICB9XHJcbiAgLy8gICAgICAgIH0gZWxzZVxyXG4gIC8vICAgICAgICAgIHJlamVjdChgU3RhdHVzICR7eG1saHR0cC5zdGF0dXN9IGF0ICR7dXJsfWApO1xyXG4gIC8vICAgICAgfVxyXG4gIC8vICAgIH07XHJcbiAgLy8gICAgeG1saHR0cC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAvLyAgICB4bWxodHRwLnNlbmQocGFyID8gSlNPTi5zdHJpbmdpZnkocGFyLCBudWxsLCAyKSA6ICcnKTtcclxuICAvLyAgfSk7XHJcbiAgLy99XHJcblxyXG59Il19