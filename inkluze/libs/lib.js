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
})(lib || (lib = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vTGliL2xpYnMvc2VydmljZXMvY29tbW9uLnRzIiwiLi4vLi4vTGliL2xpYnMvZm9ybXMvdmFsaWRhdG9yLnRzIiwiLi4vLi4vTGliL2xpYnMvZmx1eC9yb3V0ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXAudHMiLCIuLi8uLi9MaWIvbGlicy9jb21tb24vcmVhY3QtYm9vdHN0cmFwLnRzIiwiLi4vLi4vTGliL2xpYnMvY29tbW9uL3JlYWN0LWRvbS1zZXJ2ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9zZXJ2aWNlLWVtYWlsZXIvZW1haWxlci50c3giLCIuLi8uLi9MaWIvbGlicy9mbHV4L3NpdGVtYXBSb3V0ZXIudHN4IiwiLi4vLi4vTGliL2xpYnMvY29tbW9uL2xpYi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxRQUFRLENBNEJqQjtBQTVCRCxXQUFVLFFBQVEsRUFBQyxDQUFDO0lBS2xCLHFCQUEwRCxVQUFpQixFQUFFLEtBQVU7UUFDckYsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUNuQyxJQUFJLEdBQUcsR0FBTSxVQUFVLG1CQUFnQixDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRztnQkFDM0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDOUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLENBQUM7NEJBQ0gsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQzs0QkFDaEMsSUFBSSxHQUFHLEdBQVMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMs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QUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0UsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztRQUN6RyxJQUFJO1lBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQVZlLFFBQUksT0FVbkIsQ0FBQTtBQUVILENBQUMsRUF2RFMsR0FBRyxLQUFILEdBQUcsUUF1RFoiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2Ugc2VydmljZXMge1xyXG4gIGV4cG9ydCBpbnRlcmZhY2Ugc2VydmljZU9VVCB7XHJcbiAgICBlcnJvcjpzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gY2FsbFJlcXVlc3Q8VElOLCBUT1VUIGV4dGVuZHMgc2VydmljZU9VVD4obWV0aG9kUGF0aDpzdHJpbmcsIGluUGFyOiBUSU4pOiBQcm9taXNlPFRPVVQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHZhciB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHZhciB1cmwgPSBgJHttZXRob2RQYXRofS9zZXJ2aWNlLmFzaHg/YDtcclxuICAgICAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICBpZiAoeG1saHR0cC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgdmFyIHJlc3AgPSB4bWxodHRwLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICB2YXIgcmVzOiBUT1VUID0gcmVzcCA/IEpTT04ucGFyc2UocmVzcCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgIHZhciBlcnJvciA9IHJlcyA/IHJlcy5lcnJvciA6IG51bGw7XHJcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSByZWplY3QoZXJyb3IpOyBlbHNlIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAobXNnKSB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KGBKU09OIGV4Y2VwdGlvbiAke21zZ30gYXQgJHt1cmx9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICByZWplY3QoYFN0YXR1cyAke3htbGh0dHAuc3RhdHVzfSBhdCAke3VybH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHhtbGh0dHAub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgIHhtbGh0dHAuc2VuZChpblBhciA/IEpTT04uc3RyaW5naWZ5KGluUGFyLCBudWxsLCAyKSA6ICcnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsIm5hbWVzcGFjZSB2YWxpZGF0aW9uIHtcclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJVmFsaWRQYXJzIHtcclxuICAgIHR5cGU6IHR5cGVzO1xyXG4gICAgbWFzaz86IHN0cmluZzsgLy9yZWdleHAgcHJvIHN0cmluZyBtYXNrXHJcbiAgICAvL3N0cmluZyBsZW5ndGhcclxuICAgIG1pbkxlbmd0aD86IG51bWJlcixcclxuICAgIG1heExlbmd0aD86IG51bWJlcixcclxuICAgIC8vbnVtYmVyIGludGVydmFsc1xyXG4gICAgbWluPzogbnVtYmVyLFxyXG4gICAgbWF4PzogbnVtYmVyLFxyXG4gICAgZXF1YWxUb0lkPzogc3RyaW5nO1xyXG5cclxuICB9XHJcbiAgZXhwb3J0IGVudW0gdHlwZXMge1xyXG4gICAgbm8gPSAwLFxyXG4gICAgcmVxdWlyZWQgPSAweDEsXHJcbiAgICBlbWFpbCA9IDB4MixcclxuICAgIG51bWJlciA9IDB4NCxcclxuICAgIGRpZ2l0cyA9IDB4OCxcclxuICAgIGVxdWFsVG8gPSAweDEwLFxyXG4gICAgc3RyaW5nTGVuZ3RoID0gMHgyMCxcclxuICAgIG51bWJlclJhbmdlID0gMHg0MCxcclxuICAgIHN0cmluZ01hc2sgPSAweDgwLFxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJSW5wdXRTdGF0ZSB7IHZhbHVlOiBzdHJpbmc7IGJsdXJlZD86IGJvb2xlYW47IGVycm9yPzogc3RyaW5nOyB9XHJcblxyXG4gIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFZBTElEQVRFIExPR0lDXHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWxpZGF0b3I6IElWYWxpZFBhcnMsIHN0OiBJSW5wdXRTdGF0ZSkge1xyXG4gICAgdmFyIGxlbiA9ICFzdC52YWx1ZSA/IDAgOiBzdC52YWx1ZS5sZW5ndGg7XHJcbiAgICAvL1JFUVVJUkVEXHJcbiAgICBpZiAoKHZhbGlkYXRvci50eXBlICYgdHlwZXMucmVxdWlyZWQpICE9IDApIHtcclxuICAgICAgaWYgKGxlbiA8IDEpIHsgc3QuZXJyb3IgPSBtZXNzYWdlcy5yZXF1aXJlZCgpOyByZXR1cm47IH1cclxuICAgIH1cclxuICAgIC8vU1RSSU5HIExFTkdUSFxyXG4gICAgaWYgKCh2YWxpZGF0b3IudHlwZSAmIHR5cGVzLnN0cmluZ0xlbmd0aCkgIT0gMCkge1xyXG4gICAgICBpZiAodmFsaWRhdG9yLm1pbkxlbmd0aCAmJiB2YWxpZGF0b3IubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGxlbiA8IHZhbGlkYXRvci5taW5MZW5ndGggfHwgbGVuID4gdmFsaWRhdG9yLm1heExlbmd0aCkgeyBzdC5lcnJvciA9IG1lc3NhZ2VzLnJhbmdlbGVuZ3RoKHZhbGlkYXRvci5taW5MZW5ndGgsIHZhbGlkYXRvci5tYXhMZW5ndGgpOyByZXR1cm47IH1cclxuICAgICAgfSBlbHNlIGlmICh2YWxpZGF0b3IubWluTGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGxlbiA8IHZhbGlkYXRvci5taW5MZW5ndGgpIHsgc3QuZXJyb3IgPSBtZXNzYWdlcy5taW5sZW5ndGgodmFsaWRhdG9yLm1pbkxlbmd0aCk7IHJldHVybjsgfVxyXG4gICAgICB9IGVsc2UgaWYgKHZhbGlkYXRvci5tYXhMZW5ndGgpIHtcclxuICAgICAgICBpZiAobGVuID4gdmFsaWRhdG9yLm1heExlbmd0aCkgeyBzdC5lcnJvciA9IG1lc3NhZ2VzLm1heGxlbmd0aCh2YWxpZGF0b3IubWF4TGVuZ3RoKTsgcmV0dXJuOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vLi4gd2l0aCBNQVNLXHJcbiAgICB2YXIgbWFzazogUmVnRXhwID0gbnVsbDsgdmFyIGVycm9yOiBzdHJpbmc7XHJcbiAgICBpZiAoKHZhbGlkYXRvci50eXBlICYgKHR5cGVzLm51bWJlciB8IHR5cGVzLm51bWJlclJhbmdlKSkgIT0gMCkge1xyXG4gICAgICBtYXNrID0gL14oPzotP1xcZCt8LT9cXGR7MSwzfSg/OixcXGR7M30pKyk/KD86XFwuXFxkKyk/JC87XHJcbiAgICAgIGVycm9yID0gbWVzc2FnZXMubnVtYmVyKCk7XHJcbiAgICB9IGVsc2UgaWYgKCh2YWxpZGF0b3IudHlwZSAmIHR5cGVzLmRpZ2l0cykgIT0gMCkge1xyXG4gICAgICBtYXNrID0gL15cXGQrJC87XHJcbiAgICAgIGVycm9yID0gbWVzc2FnZXMuZGlnaXRzKCk7XHJcbiAgICB9IGVsc2UgaWYgKCh2YWxpZGF0b3IudHlwZSAmIHR5cGVzLmVtYWlsKSAhPSAwKSB7XHJcbiAgICAgIG1hc2sgPSAvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokLztcclxuICAgICAgZXJyb3IgPSBtZXNzYWdlcy5lbWFpbCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1hc2spIHtcclxuICAgICAgaWYgKGxlbiA9PSAwIHx8ICFtYXNrLnRlc3Qoc3QudmFsdWUpKSB7IHN0LmVycm9yID0gZXJyb3I7IHJldHVybjsgfVxyXG4gICAgfVxyXG4gICAgLy9OVU1CRVIgUkFOR0VcclxuICAgIHZhciBkZWZpbmVkID0gdiA9PiB0eXBlb2YgdiAhPSAndW5kZWZpbmVkJztcclxuICAgIGlmICgodmFsaWRhdG9yLnR5cGUgJiB0eXBlcy5udW1iZXJSYW5nZSkgIT0gMCkge1xyXG4gICAgICB2YXIgbnVtID0gcGFyc2VGbG9hdChzdC52YWx1ZSk7XHJcbiAgICAgIGlmIChkZWZpbmVkKHZhbGlkYXRvci5taW4pICYmIGRlZmluZWQodmFsaWRhdG9yLm1heCkpIHtcclxuICAgICAgICBpZiAobnVtIDwgdmFsaWRhdG9yLm1pbiB8fCBudW0gPiB2YWxpZGF0b3IubWF4KSB7IHN0LmVycm9yID0gbWVzc2FnZXMucmFuZ2UodmFsaWRhdG9yLm1pbiwgdmFsaWRhdG9yLm1heCk7IHJldHVybjsgfVxyXG4gICAgICB9IGVsc2UgaWYgKGRlZmluZWQodmFsaWRhdG9yLm1pbikpIHtcclxuICAgICAgICBpZiAobnVtIDwgdmFsaWRhdG9yLm1pbikgeyBzdC5lcnJvciA9IG1lc3NhZ2VzLm1pbih2YWxpZGF0b3IubWluKTsgcmV0dXJuOyB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZGVmaW5lZCh2YWxpZGF0b3IubWF4KSkge1xyXG4gICAgICAgIGlmIChudW0gPiB2YWxpZGF0b3IubWF4KSB7IHN0LmVycm9yID0gbWVzc2FnZXMubWF4KHZhbGlkYXRvci5tYXgpOyByZXR1cm47IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHZhciBtZXNzYWdlcyA9IHtcclxuICAgIHJlcXVpcmVkOiAoKSA9PiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCIsXHJcbiAgICByZW1vdGU6ICgpID0+IFwiUGxlYXNlIGZpeCB0aGlzIGZpZWxkLlwiLFxyXG4gICAgZW1haWw6ICgpID0+IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIixcclxuICAgIHVybDogKCkgPT4gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUkwuXCIsXHJcbiAgICBkYXRlOiAoKSA9PiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUuXCIsXHJcbiAgICBkYXRlSVNPOiAoKSA9PiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUgKCBJU08gKS5cIixcclxuICAgIG51bWJlcjogKCkgPT4gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBudW1iZXIuXCIsXHJcbiAgICBkaWdpdHM6ICgpID0+IFwiUGxlYXNlIGVudGVyIG9ubHkgZGlnaXRzLlwiLFxyXG4gICAgZXF1YWxUbzogKCkgPT4gXCJQbGVhc2UgZW50ZXIgdGhlIHNhbWUgdmFsdWUgYWdhaW4uXCIsXHJcbiAgICBtYXhsZW5ndGg6ICh2MSkgPT4gYFBsZWFzZSBlbnRlciBubyBtb3JlIHRoYW4gJHt2MX0gY2hhcmFjdGVycy5gLFxyXG4gICAgbWlubGVuZ3RoOiAodjEpID0+IGBQbGVhc2UgZW50ZXIgYXQgbGVhc3QgJHt2MX0gY2hhcmFjdGVycy5gLFxyXG4gICAgcmFuZ2VsZW5ndGg6ICh2MSwgdjIpID0+IGBQbGVhc2UgZW50ZXIgYSB2YWx1ZSBiZXR3ZWVuICR7djF9IGFuZCAke3YyfSBjaGFyYWN0ZXJzIGxvbmcuYCxcclxuICAgIHJhbmdlOiAodjEsIHYyKSA9PiBgUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiAke3YxfSBhbmQgJHt2Mn0uYCxcclxuICAgIG1heDogKHYxKSA9PiBgUGxlYXNlIGVudGVyIGEgdmFsdWUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7djF9LmAsXHJcbiAgICBtaW46ICh2MSkgPT4gYFBsZWFzZSBlbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAke3YxfS5gXHJcbiAgfTtcclxuXHJcbn0iLCJuYW1lc3BhY2Ugcm91dGVyIHtcclxuXHJcbiAgLy9kaWZvdG5pIHJvdXRlIHBybyBwcmlwYWQsIHplIGplIFVSTCBwcmF6ZG5hXHJcbiAgZXhwb3J0IHZhciBnZXRTdGFydFJvdXRlOiAoKSA9PiBUUm91dGVBY3Rpb25QYXI7IFxyXG5cclxuICAvL2Jvb3Qgcm91dGVydVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBib290QXBwKCk6IFRSb3V0ZUFjdGlvblBhciB7IHJvb3RSb3V0ZUJpbmQoZGVjb2RlRnVsbFVybCgpLCBmYWxzZSk7IHJldHVybiByb3V0ZTsgfVxyXG5cclxuICAvL25hdmlnYWNlIG5hIHJvdXRlXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlKHJvdXRlczogVFJvdXRlQWN0aW9uUGFyKSB7IHJldHVybiByb290Um91dGVCaW5kKHJvdXRlcywgdHJ1ZSk7IH1cclxuICBleHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVVcmwocm91dGVzOiBUUm91dGVBY3Rpb25QYXIpOiBzdHJpbmcgeyByZXR1cm4gZW5jb2RlRnVsbFVybChyb3V0ZXMpOyB9XHJcblxyXG4gIC8vcm91dGUgY2hhbmdlZCBub3RpZmljYXRpb25cclxuICBleHBvcnQgdmFyIG9uUm91dGVDaGFuZ2VkOiAocm91dGU6IFRSb3V0ZUFjdGlvblBhcikgPT4gdm9pZDtcclxuXHJcbiAgLy9jb25maWdcclxuICBleHBvcnQgdmFyICRpc0hhc2hSb3V0ZXIgPSBmYWxzZTsgLy9oYXNoIG9yIHNsYXNoIHJvdXRlIGRlbGltaXRlclxyXG4gIGV4cG9ydCB2YXIgJGJhc2ljVXJsID0gZ2V0QmFzaWNVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpOyAvL2Nhc3QgVVJMIHByZWQgcm91dGUgcGFyYW1hdHRlclxyXG5cclxuICAvL3Jvb3V0ZSBvYmpla3Qgc3RydWN0dXJlXHJcbiAgZXhwb3J0IGludGVyZmFjZSBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgc3RvcmVJZD86IHN0cmluZztcclxuICAgIGhvb2tJZD86IHN0cmluZzsgLy9uYXpldiBwcm9wZXJ0eSB2IGhvb2sucGFyZW50IFN0b3JlLCBvYnNhaHVqaWNpIFJvdXRlSG9va0Rpc3BhdGNoZXIuICFob29rSWQgPT4gcm91dGVEZWZhdWx0UHJvcE5hbWUgcHJvcGVydHlcclxuICAgIHBhcj86IHt9OyAvLzxzdG9yZUlkPi5yb3V0ZUFjdGlvbihwYXIsIGhvb2tJZClcclxuICAgIHJvdXRlSG9va0RlZmF1bHQ/OiBUUm91dGVBY3Rpb25QYXI7IC8vZGlmb3RuaSBjaGlsZCByb3V0ZSBob29rXHJcbiAgICAvLy4uLiBkYWxzaSwgbmFtZWQgcm91dGUgaG9va1xyXG4gIH1cclxuXHJcblxyXG4gIC8vKioqKioqKioqKioqKioqKiogcmVmcmVzaCB2aWV3IG9uIHJvdXRlIGNoYW5nZVxyXG4gIC8vYWt0dWFsbmkgcm91dGUgb2JqZWt0XHJcbiAgdmFyIHJvdXRlOiBUUm91dGVBY3Rpb25QYXI7XHJcblxyXG4gIGZ1bmN0aW9uIHJvb3RSb3V0ZUJpbmQocm91dGVzOiBUUm91dGVBY3Rpb25QYXIgLypudWxsID0+IHN0YXJ0IHJvdXRlKi8sIHdpdGhQdXN0U3RhdGU6IGJvb2xlYW4pIHtcclxuICAgIGlmICghcm91dGVzKSByb3V0ZXMgPSBnZXRTdGFydFJvdXRlID8gZ2V0U3RhcnRSb3V0ZSgpIDogbnVsbDsgaWYgKCFyb3V0ZXMpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBtaXNzaW5nIHJvdXRlc2ApO1xyXG4gICAgcm91dGUgPSByb3V0ZXM7XHJcbiAgICBpZiAob25Sb3V0ZUNoYW5nZWQpIG9uUm91dGVDaGFuZ2VkKHJvdXRlcyk7XHJcbiAgICBpZiAod2l0aFB1c3RTdGF0ZSkgcHVzaFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICAvLyoqKioqKioqKioqKioqKioqIFBPUFNUQVRFIEVWRU5UXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBldiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgPiBwb3BzdGF0ZTogJHt3aW5kb3cubG9jYXRpb24uaHJlZn1gKTtcclxuICAgIHJvb3RSb3V0ZUJpbmQoZGVjb2RlRnVsbFVybCgpLCBmYWxzZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vbW9kaWZ5IGJyb3dzZXIgVVJMXHJcbiAgZnVuY3Rpb24gcHVzaFN0YXRlKCkge1xyXG4gICAgbGV0IHVybFN0ciA9IGVuY29kZUZ1bGxVcmwocm91dGUpO1xyXG4gICAgY29uc29sZS5sb2coYD4gcHVzaFN0YXRlOiAke3VybFN0cn1gKTtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHVybFN0cik7XHJcbiAgfVxyXG5cclxuICAvL3JvdXRhIHBhcnMgYXJlIGFmdGVyIFwiLmh0bWxcIiB1cmwgcGFydFxyXG4gIGZ1bmN0aW9uIGdldEJhc2ljVXJsKHN0YXJ0VXJsOiBzdHJpbmcpOiBzdHJpbmcgeyBsZXQgaWR4ID0gc3RhcnRVcmwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCcuaHRtbCcpOyByZXR1cm4gaWR4ID49IDAgPyBzdGFydFVybC5zdWJzdHIoMCwgaWR4ICsgNSkgOiBzdGFydFVybDsgfVxyXG5cclxuICB2YXIgcm91dGVQYXJJZ25vcmVzID0gWydzdG9yZUlkJywgJ2hvb2tJZCcsICdwYXInXTtcclxuICB2YXIgcm91dGVIb29rRGVmYXVsdE5hbWUgPSAncm91dGVIb29rRGVmYXVsdCc7XHJcblxyXG4gIGZ1bmN0aW9uIGVuY29kZVVybChzdDogVFJvdXRlQWN0aW9uUGFyKTogc3RyaW5nIHtcclxuICAgIGxldCByZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIGVuY29kZVVybExvdyhyZXMsIHN0LCBudWxsKTtcclxuICAgIGxldCB1cmwgPSByZXMuam9pbignJyk7XHJcbiAgICByZXR1cm4gY2xlYXJTbGFzaGVzKHVybC5yZXBsYWNlKC8oXFwkXFwvKSokL2csICcnKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmNvZGVGdWxsVXJsKHN0OiBUUm91dGVBY3Rpb25QYXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHVybFN0ciA9IHN0ID8gZW5jb2RlVXJsKHN0KSA6IG51bGw7XHJcbiAgICAvL3JldHVybiAkYmFzaWNVcmwgKyAodXJsU3RyID8gKCRpc0hhc2hSb3V0ZXIgPyAnIycgOiAnLycpICsgdXJsU3RyIDogJycpO1xyXG4gICAgcmV0dXJuICRiYXNpY1VybCArICh1cmxTdHIgPyAoJGlzSGFzaFJvdXRlciA/ICcjJyA6ICc/JykgKyB1cmxTdHIgOiAnJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGVGdWxsVXJsKHVybD86IHN0cmluZyk6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICByZXR1cm4gZGVjb2RlVXJsKGRlY29kZVVybFBhcnQodXJsKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGVVcmxQYXJ0KHVybD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBpZiAoIXVybC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJGJhc2ljVXJsKSkgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oYGxvY2F0aW9uLmhyZWYgZG9lcyBub3Qgc3RhcnQgd2l0aCAkeyRiYXNpY1VybH1gKTtcclxuICAgIHJldHVybiBjbGVhclNsYXNoZXModXJsLnN1YnN0cigkYmFzaWNVcmwubGVuZ3RoKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGVVcmwodXJsPzogc3RyaW5nKTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIGlmICghdXJsKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBkZWNvZGVVcmxMb3codXJsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVJvdXRlKHN0b3JlSWQ6IHN0cmluZywgcGFyPzoge30sIHJvdXRlSG9va0RlZmF1bHQ/OiBUUm91dGVBY3Rpb25QYXIsIG90aGVySG9va3M/OiB7IFtuYW1lOiBzdHJpbmddOiBUUm91dGVBY3Rpb25QYXI7IH0pOiBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgbGV0IHJlczogVFJvdXRlQWN0aW9uUGFyID0geyBzdG9yZUlkOiBzdG9yZUlkLCBwYXI6IHBhciB9O1xyXG4gICAgaWYgKHJvdXRlSG9va0RlZmF1bHQpIHsgcmVzLnJvdXRlSG9va0RlZmF1bHQgPSByb3V0ZUhvb2tEZWZhdWx0OyBkZWxldGUgcm91dGVIb29rRGVmYXVsdC5ob29rSWQ7IH1cclxuICAgIGlmIChvdGhlckhvb2tzKVxyXG4gICAgICBmb3IgKGxldCBwIGluIG90aGVySG9va3MpIHsgbGV0IGhrID0gcmVzW3BdID0gb3RoZXJIb29rc1twXTsgaGsuaG9va0lkID0gcDsgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldENoaWxkUm91dGVQcm9wTmFtZXMoc3Q6IFRSb3V0ZUFjdGlvblBhcik6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgbGV0IHByb3BzID0gW107XHJcbiAgICBmb3IgKGxldCBwIGluIHN0KSBpZiAocm91dGVQYXJJZ25vcmVzLmluZGV4T2YocCkgPCAwKSBwcm9wcy5wdXNoKHApO1xyXG4gICAgcmV0dXJuIHByb3BzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlVXJsTG93KHVybDogc3RyaW5nKTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIGlmICghJGlzSGFzaFJvdXRlcikgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XHJcbiAgICB1cmwgPSAneycgKyB1cmwucmVwbGFjZSgvXFwkXFwvL2csICd9JykucmVwbGFjZSgvXFwvL2csICd7Jyk7XHJcbiAgICBsZXQgc3RhY2s6IEFycmF5PElEZWNvZGVTdGFjaz4gPSBbXTsgbGV0IGkgPSAwOyBsZXQgY2g6IHN0cmluZzsgbGV0IHJlczogSURlY29kZVN0YWNrID0gbnVsbDtcclxuICAgIGxldCBwYXJzZVJvdXRlID0gKGVuZElkeDogbnVtYmVyLCBzdDogSURlY29kZVN0YWNrKSA9PiB7XHJcbiAgICAgIGxldCBzID0gdXJsLnN1YnN0cmluZyhzdC5vcGVuSWR4LCBlbmRJZHggLSAxKTtcclxuICAgICAgbGV0IHBhcnRzID0gcy5zcGxpdCgnOycpO1xyXG4gICAgICBsZXQgcHJvcENvbXAgPSBwYXJ0c1swXS5zcGxpdCgnLScpOyBpZiAocHJvcENvbXAubGVuZ3RoID4gMikgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oJ3Byb3BDb21wLmxlbmd0aCA+IDInKTtcclxuICAgICAgc3QuaG9va0lkID0gcHJvcENvbXAubGVuZ3RoID09IDEgPyBudWxsIDogcHJvcENvbXBbMF07XHJcbiAgICAgIHN0LnJvdXRlID0geyBzdG9yZUlkOiBwcm9wQ29tcC5sZW5ndGggPT0gMSA/IHByb3BDb21wWzBdIDogcHJvcENvbXBbMV0gfTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG52ID0gcGFydHNbaV0uc3BsaXQoJz0nKTtcclxuICAgICAgICBpZiAoIXN0LnJvdXRlLnBhcikgc3Qucm91dGUucGFyID0ge307XHJcbiAgICAgICAgc3Qucm91dGUucGFyW252WzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChudlsxXSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICBpZiAoaSA+PSB1cmwubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA+PSAxKSBjaCA9ICd9JzsgZWxzZSBicmVhaztcclxuICAgICAgICBpID0gdXJsLmxlbmd0aCArIDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2ggPSB1cmwuY2hhckF0KGkpOyBpKys7XHJcbiAgICAgIH1cclxuICAgICAgc3dpdGNoIChjaCkge1xyXG4gICAgICAgIGNhc2UgJ3snOlxyXG4gICAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA9PSAwKSB7IHJlcyA9IHsgb3BlbklkeDogaSB9OyBzdGFjay5wdXNoKHJlcyk7IGJyZWFrOyB9IC8vcm9vdFxyXG4gICAgICAgICAgbGV0IGxhc3QgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIGlmICghbGFzdC5yb3V0ZSkgcGFyc2VSb3V0ZShpLCBsYXN0KTsgLy96cHJhY3VqIHNla3ZlbmNpIG1lemkge3h4eHh7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKHsgb3BlbklkeDogaSB9KTsgLy96YWNuaSBub3Z5IHN0YWNrXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd9JzpcclxuICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggPT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICBsZXQgbGFzdDIgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIGlmICghbGFzdDIucm91dGUpIHBhcnNlUm91dGUoaSwgbGFzdDIpOyAvL3pwcmFjdWogc2VrdmVuY2kgbWV6aSB7eHh4eH0sIHh4eCBqZSBiZXogeyBpIH1cclxuICAgICAgICAgIGxldCBwYXJQcm9wID0gbGFzdDIuaG9va0lkID8gbGFzdDIuaG9va0lkIDogcm91dGVIb29rRGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICBpZiAocGFyUHJvcCAhPSByb3V0ZUhvb2tEZWZhdWx0TmFtZSkgbGFzdDIucm91dGUuaG9va0lkID0gcGFyUHJvcDtcclxuICAgICAgICAgIC8vbmF2YXphbmkgbmEgcGFyZW50IHJvdXRlXHJcbiAgICAgICAgICBsZXQgcGFyID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMl07XHJcbiAgICAgICAgICBpZiAocGFyKSBwYXIucm91dGVbcGFyUHJvcF0gPSBsYXN0Mi5yb3V0ZTtcclxuICAgICAgICAgIC8vdnluZGVqIHplIHN0YWNrdVxyXG4gICAgICAgICAgc3RhY2suc3BsaWNlKHN0YWNrLmxlbmd0aCAtIDEsIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXMucm91dGU7XHJcbiAgfVxyXG5cclxuICBpbnRlcmZhY2UgSURlY29kZVN0YWNrIHtcclxuICAgIG9wZW5JZHg6IG51bWJlcjtcclxuICAgIHJvdXRlPzogVFJvdXRlQWN0aW9uUGFyO1xyXG4gICAgaG9va0lkPzogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZW5jb2RlVXJsTG93KHJlczogQXJyYXk8c3RyaW5nPiwgc3Q6IFRSb3V0ZUFjdGlvblBhciwgcGFyZW50UHJvcE5hbWU/OiBzdHJpbmcpIHtcclxuICAgIHJlcy5wdXNoKChwYXJlbnRQcm9wTmFtZSA/IHBhcmVudFByb3BOYW1lICsgJy0nIDogJycpICsgKHN0LnN0b3JlSWQgPyBzdC5zdG9yZUlkIDogJycpKTtcclxuICAgIGlmIChzdC5wYXIpIHtcclxuICAgICAgbGV0IHByb3BzID0gW107XHJcbiAgICAgIGZvciAobGV0IHAgaW4gc3QucGFyKSBwcm9wcy5wdXNoKHApO1xyXG4gICAgICBwcm9wcy5zb3J0KCkuZm9yRWFjaChwID0+IHJlcy5wdXNoKGA7JHtwfT0ke2VuY29kZVVSSUNvbXBvbmVudChzdC5wYXJbcF0pfWApKTtcclxuICAgIH1cclxuICAgIGdldENoaWxkUm91dGVQcm9wTmFtZXMoc3QpLnNvcnQoKS5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICByZXMucHVzaCgnLycpO1xyXG4gICAgICBlbmNvZGVVcmxMb3cocmVzLCBzdFtwXSwgcCA9PSByb3V0ZUhvb2tEZWZhdWx0TmFtZSA/IG51bGwgOiBwKTtcclxuICAgICAgcmVzLnB1c2goJyQvJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyU2xhc2hlcyhwYXRoOiBzdHJpbmcpOiBzdHJpbmcgeyByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpLnJlcGxhY2UoL15bXFwjXFwvXFw/XT8vLCAnJyk7IH1cclxufSIsIm5hbWVzcGFjZSBzaXRlIHtcclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJTm9kZSB7XHJcbiAgICBpZDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7IC8vY2h5YmktbGksIHZlem1lIHNlIHogSVRhYi50aXRsZSBcclxuICAgIGJyVGl0bGU/OnN0cmluZzsgLy90aXRsZSBwcm8gYnJlYWRjcnVtYlxyXG4gICAgY3JlYXRlUGFnZTogKHJvdXRlUGFyKSA9PiBKU1guRWxlbWVudCxcclxuICAgIHBhdGg/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHM/OiBBcnJheTxJTm9kZT47XHJcbiAgICBwYXJlbnQ/OiBJTm9kZTtcclxuICAgIGxhcmdlTG9nbz86IGJvb2xlYW47IC8vdmVsa2UgbG9nbyB2IGNobGFkaWNpXHJcbiAgICB0YWI/OiBJVGFiOyAvL215IHRhYlxyXG4gICAgbm9UaXRsZT86Ym9vbGVhbjsgLy9wYWdlIHRlbXBsYXRlIG5lZ2VuZXJ1amUgdGl0bGUgc3RyYW5reVxyXG4gIH1cclxuICBleHBvcnQgdmFyIHJvb3Q6IElOb2RlO1xyXG4gIGV4cG9ydCB2YXIgbm9kZXM6IHsgW3BhdGg6IHN0cmluZ106IElOb2RlOyB9ID0ge307XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBib290QXBwKCkge1xyXG4gICAgZnVuY3Rpb24gaW5pdE5vZGUocGFyZW50OiBJTm9kZSwgbmQ6IElOb2RlKSB7XHJcbiAgICAgIG5kLmNoaWxkcyA9IG5vZGVDaGlsZHMobmQpO1xyXG4gICAgICBuZC5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgIGlmICghbmQudGFiKSBuZC50YWIgPSBuZC5wYXJlbnQudGFiO1xyXG4gICAgICBuZC5wYXRoID0gZ2V0Tm9kZVBhdGgobmQpO1xyXG4gICAgICBpZiAobm9kZXNbbmQucGF0aF0pIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBTaXRlTWFwIG5vZGUgJHtuZC5wYXRofSBhbHJlYWR5IGV4aXN0cyFgKTtcclxuICAgICAgbm9kZXNbbmQucGF0aF0gPSBuZDtcclxuICAgICAgaWYgKG5kLmNoaWxkcykgbmQuY2hpbGRzLmZvckVhY2gobiA9PiBpbml0Tm9kZShuZCwgbikpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW5pdFRhYnMoKSB7XHJcbiAgICAgIHRhYnMuJGNoaWxkcyA9IFtdOyB2YXIgaWR4ID0gMDtcclxuICAgICAgZm9yICh2YXIgcCBpbiB0YWJzKSB7XHJcbiAgICAgICAgaWYgKHAuc3RhcnRzV2l0aCgnJCcpKSBjb250aW51ZTtcclxuICAgICAgICB2YXIgdDogSVRhYiA9IHRhYnNbcF07IHRhYnMuJGNoaWxkcy5wdXNoKHQpOyB0LmlkeCA9IGlkeCsrO1xyXG4gICAgICAgIGlmICghdC5yb290Tm9kZSkgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oJyF0LnJvb3ROb2RlJyk7XHJcbiAgICAgICAgdC5yb290Tm9kZS50YWIgPSB0O1xyXG4gICAgICAgIGlmICghdC5yb290Tm9kZS50aXRsZSkgdC5yb290Tm9kZS50aXRsZSA9IHQudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXRUYWJzKCk7XHJcbiAgICBpbml0Tm9kZShudWxsLCByb290KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBub2RlUGFyZW50cyhuZDogSU5vZGUsIGlnbm9yZVNlbGY/OiBib29sZWFuKTogQXJyYXk8SU5vZGU+IHtcclxuICAgIHZhciByZXM6IG5vZGVQYXJlbnRzUmVzdWx0ID0ge307XHJcbiAgICBub2RlUGFyZW50c0xvdyhuZCwgcmVzLCBpZ25vcmVTZWxmKTtcclxuICAgIHJldHVybiByZXMucmVzLnJldmVyc2UoKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVRhYnMge1xyXG4gICAgJGNoaWxkcz86IEFycmF5PElUYWI+O1xyXG4gIH1cclxuICBleHBvcnQgaW50ZXJmYWNlIElUYWIge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGlkeD86IG51bWJlcjtcclxuICAgIHJvb3ROb2RlPzogSU5vZGU7IC8vaGxhdm5pIHN0cmFua2EgcHJvIHRhYlxyXG4gIH1cclxuICBleHBvcnQgdmFyIHRhYnM6IElUYWJzO1xyXG5cclxuICBleHBvcnQgdmFyIGdldEJsYW5rUGFnZTogKHJvdXRlUGFyKSA9PiBKU1guRWxlbWVudDs7XHJcblxyXG4gIC8vKioqKioqKioqKiogUHJpdmF0ZVxyXG5cclxuICBmdW5jdGlvbiBub2RlQ2hpbGRzKG5kOiBJTm9kZSk6IEFycmF5PElOb2RlPiB7XHJcbiAgICB2YXIgcmVzOiBBcnJheTxJTm9kZT4gPSBudWxsO1xyXG4gICAgZm9yICh2YXIgcCBpbiBuZCkge1xyXG4gICAgICB2YXIgc3ViTmQ6IElOb2RlID0gbmRbcF07XHJcbiAgICAgIGlmICghc3ViTmQgLyp8fCAhc3ViTmQudGl0bGUqLyB8fCAhc3ViTmQuaWQpIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoIXJlcykgcmVzID0gW3N1Yk5kXTsgZWxzZSByZXMucHVzaChzdWJOZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbm9kZVBhcmVudHNMb3cobmQ6IElOb2RlLCByZXM6IG5vZGVQYXJlbnRzUmVzdWx0LCBpZ25vcmVTZWxmOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXJlcy5yZXMpIHJlcy5yZXMgPSBpZ25vcmVTZWxmID8gW10gOiBbbmRdO1xyXG4gICAgd2hpbGUgKG5kLnBhcmVudCkgeyBuZCA9IG5kLnBhcmVudDsgcmVzLnJlcy5wdXNoKG5kKTsgfVxyXG4gIH1cclxuICBpbnRlcmZhY2Ugbm9kZVBhcmVudHNSZXN1bHQgeyByZXMgPzogQXJyYXk8SU5vZGU+IH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Tm9kZVBhdGgobmQ6IElOb2RlKTogc3RyaW5nIHsgcmV0dXJuIG5vZGVQYXJlbnRzKG5kKS5tYXAobiA9PiBuLmlkKS5qb2luKCd8Jyk7IH1cclxufSIsImNvbnN0IEJ1dHRvbiA9IFJlYWN0Qm9vdHN0cmFwLkJ1dHRvbjsgXHJcbmNvbnN0IE5hdmJhciA9IFJlYWN0Qm9vdHN0cmFwLk5hdmJhcjsgXHJcbmNvbnN0IE5hdiA9IFJlYWN0Qm9vdHN0cmFwLk5hdjsgXHJcbmNvbnN0IE5hdkl0ZW0gPSBSZWFjdEJvb3RzdHJhcC5OYXZJdGVtOyBcclxuY29uc3QgTmF2RHJvcGRvd24gPSBSZWFjdEJvb3RzdHJhcC5OYXZEcm9wZG93bjtcclxuY29uc3QgTWVudUl0ZW0gPSBSZWFjdEJvb3RzdHJhcC5NZW51SXRlbTtcclxuY29uc3QgQnJlYWRjcnVtYiA9IFJlYWN0Qm9vdHN0cmFwLkJyZWFkY3J1bWI7XHJcbmNvbnN0IE1vZGFsID0gUmVhY3RCb290c3RyYXAuTW9kYWw7XHJcbmNvbnN0IENvbCA9IFJlYWN0Qm9vdHN0cmFwLkNvbDtcclxuY29uc3QgUm93ID0gUmVhY3RCb290c3RyYXAuUm93O1xyXG5jb25zdCBHcmlkID0gUmVhY3RCb290c3RyYXAuR3JpZDtcclxuY29uc3QgQ2xlYXJmaXggPSBSZWFjdEJvb3RzdHJhcC5DbGVhcmZpeDtcclxuY29uc3QgTGFiZWwgPSBSZWFjdEJvb3RzdHJhcC5MYWJlbDtcclxuY29uc3QgUGFuZWwgPSBSZWFjdEJvb3RzdHJhcC5QYW5lbDtcclxuY29uc3QgUGFuZWxHcm91cCA9IFJlYWN0Qm9vdHN0cmFwLlBhbmVsR3JvdXA7XHJcbmNvbnN0IEZvcm1Hcm91cCA9IFJlYWN0Qm9vdHN0cmFwLkZvcm1Hcm91cDtcclxuY29uc3QgSGVscEJsb2NrID0gUmVhY3RCb290c3RyYXAuSGVscEJsb2NrO1xyXG5jb25zdCBGb3JtQ29udHJvbCA9IFJlYWN0Qm9vdHN0cmFwLkZvcm1Db250cm9sO1xyXG5jb25zdCBDb250cm9sTGFiZWwgPSBSZWFjdEJvb3RzdHJhcC5Db250cm9sTGFiZWw7XHJcbmNvbnN0IEFjY29yZGlvbiA9IFJlYWN0Qm9vdHN0cmFwLkFjY29yZGlvbjtcclxuY29uc3QgUmFkaW8gPSBSZWFjdEJvb3RzdHJhcC5SYWRpbztcclxuXHJcblxyXG5cclxuXHJcbiIsImludGVyZmFjZSBJRE9NU2VydmVyIHtcclxuICByZW5kZXJUb1N0cmluZyhlbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pik6IHN0cmluZztcclxuICByZW5kZXJUb1N0YXRpY01hcmt1cChlbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pik6IHN0cmluZztcclxufVxyXG5cclxudmFyIFJlYWN0RE9NU2VydmVyOiBJRE9NU2VydmVyID0gUmVhY3RbJ19fU0VDUkVUX0RPTV9TRVJWRVJfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCddOyIsIm5hbWVzcGFjZSBzZXJ2aWNlcy5lbWFpbGVyIHtcclxuICBleHBvcnQgaW50ZXJmYWNlIHNlbmRFbWFpbElOIHtcclxuICAgIGZyb206IHN0cmluZztcclxuICAgIHRvOiBzdHJpbmc7IC8vZS5nLiBcIkpvc2VmIE5vdmFrXCI8am9zZWZAbG0uY3o+LFwiSmFuYSBLXCI8amFuYUBsbS5jej5cclxuICAgIGNjPzogc3RyaW5nO1xyXG4gICAgYmNjPzogc3RyaW5nO1xyXG4gICAgaXNCb2R5SHRtbD86IGJvb2xlYW47XHJcbiAgICBib2R5OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICAgIHN1YmplY3Q6IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzZW5kRU1haWwoZW1haWw6IHNlbmRFbWFpbElOLCBjb21wbGV0ZWQ6IGxpYi5UQ2FsbGJhY2spIHtcclxuICAgIGVtYWlsLmlzQm9keUh0bWwgPSB0eXBlb2YgZW1haWwuYm9keSAhPSBcInN0cmluZ1wiO1xyXG4gICAgaWYgKGVtYWlsLmlzQm9keUh0bWwpIGVtYWlsLmJvZHkgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChlbWFpbC5ib2R5IGFzIEpTWC5FbGVtZW50KTtcclxuICAgIHNlcnZpY2VzLmNhbGxSZXF1ZXN0KCdsaWJzL3NlcnZpY2UtZW1haWxlcicsIGVtYWlsKS50aGVuKCgpID0+IGNvbXBsZXRlZCgpKS5jYXRjaChlcnIgPT4geyB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihlcnIpOyB9KTtcclxuICB9XHJcblxyXG4gIC8vYWxlcnQoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoPGRpdj54eHg8L2Rpdj4pKTtcclxuICAvL3NldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICBkZWJ1Z2dlcjtcclxuICAvLyAgYWxlcnQoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoPGRpdj54eHg8L2Rpdj4pKTtcclxuICAvL30pO1xyXG5cclxufSIsIm5hbWVzcGFjZSBzaXRlbWFwUm91dGVyIHtcclxuXHJcbiAgZXhwb3J0IHZhciBjaGlsZENvbnRleHRUeXBlczogUmVhY3QuVmFsaWRhdGlvbk1hcDxhbnk+ID0ge1xyXG4gICAgc2l0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHJvdXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIEFwcFJvb3RDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVJvb3RQcm9wcywgcm91dGVyLlRSb3V0ZUFjdGlvblBhcj4ge1xyXG4gICAgY29uc3RydWN0b3IocDogSVJvb3RQcm9wcywgY3R4KSB7XHJcbiAgICAgIHN1cGVyKHAsIGN0eCk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBwLmluaXRSb3V0ZTtcclxuICAgICAgcm9vdENvbXAgPSB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgdGhpcy5hY3ROb2RlID0gc2l0ZS5ub2Rlc1t0aGlzLnN0YXRlLnN0b3JlSWRdO1xyXG4gICAgICBpZiAoIXRoaXMuYWN0Tm9kZSkgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oYE5vZGUgcGF0aCAke3RoaXMuc3RhdGUuc3RvcmVJZH0gbm90IGZvdW5kYCk7XHJcbiAgICAgIHZhciByZXMgPSAodGhpcy5hY3ROb2RlLmNyZWF0ZVBhZ2UgPyB0aGlzLmFjdE5vZGUuY3JlYXRlUGFnZSA6IHNpdGUuZ2V0QmxhbmtQYWdlKSgodGhpcy5zdGF0ZS5wYXIpKTtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIGFjdE5vZGU6IHNpdGUuSU5vZGU7XHJcblxyXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCk6IElDb250ZXh0IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzaXRlOiB0aGlzLmFjdE5vZGUsXHJcbiAgICAgICAgcm91dGU6IHRoaXMuc3RhdGVcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IGNoaWxkQ29udGV4dFR5cGVzO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVXJsPFQ+KG5vZGU6IHNpdGUuSU5vZGUsIHBhcj86IFQpIHsgcmV0dXJuIHJvdXRlci5uYXZpZ2F0ZVVybCh7IHN0b3JlSWQ6IG5vZGUucGF0aCwgcGFyOiBwYXIgfSk7IH1cclxuICBleHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVUYWc8VD4obm9kZTogc2l0ZS5JTm9kZSwgcGFyPzogVCk6IEpTWC5FbGVtZW50IHtcclxuICAgIHJldHVybiA8YSBocmVmPXtuYXZpZ2F0ZVVybChub2RlLCBwYXIpIH0+e25vZGUudGl0bGV9PC9hPjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50PFA+KHR5cGU6IFJlYWN0LkNvbXBvbmVudENsYXNzPFA+IHwgUmVhY3QuU0ZDPFA+LCByb3V0ZVBhciwgcHJvcHM6IFAgJiBSZWFjdC5BdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlW10pOiBSZWFjdC5SZWFjdEVsZW1lbnQ8UD4ge1xyXG4gICAgdmFyIHBhcjogUCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCByb3V0ZVBhcik7XHJcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0eXBlLCBwYXIpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGJvb3RBcHAoY29udGVudDogSFRNTEVsZW1lbnQsIHNpdGVtYXBDcmVhdG9yOiBsaWIuVENhbGxiYWNrKSB7XHJcbiAgICBzaXRlbWFwQ3JlYXRvcigpO1xyXG4gICAgc2l0ZS5ib290QXBwKCk7XHJcbiAgICB2YXIgc3RhcnRSb3V0ZSA9IHJvdXRlci5ib290QXBwKCk7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoPEFwcFJvb3RDb21wb25lbnQgaW5pdFJvdXRlPXsgc3RhcnRSb3V0ZSB9IC8+LCBjb250ZW50KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSUNvbnRleHQge1xyXG4gICAgc2l0ZTogc2l0ZS5JTm9kZTtcclxuICAgIHJvdXRlOiByb3V0ZXIuVFJvdXRlQWN0aW9uUGFyXHJcbiAgfVxyXG5cclxuICAvLyoqKioqKioqKiogUHJpdmF0ZVxyXG4gIHZhciByb290Q29tcDogQXBwUm9vdENvbXBvbmVudDtcclxuICBleHBvcnQgaW50ZXJmYWNlIElSb290UHJvcHMgeyBpbml0Um91dGU6IHJvdXRlci5UUm91dGVBY3Rpb25QYXIgfVxyXG5cclxuICByb3V0ZXIuZ2V0U3RhcnRSb3V0ZSA9ICgpID0+IHsgcmV0dXJuIHsgc3RvcmVJZDogc2l0ZS5yb290LnBhdGggfTsgfTtcclxuICByb3V0ZXIub25Sb3V0ZUNoYW5nZWQgPSByb3V0ZSA9PiB7IGlmIChyb290Q29tcCkgcm9vdENvbXAuc2V0U3RhdGUocm91dGUpOyB9O1xyXG5cclxufSIsIm5hbWVzcGFjZSBsaWIge1xyXG4gIGV4cG9ydCBjbGFzcyBFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2c6IHN0cmluZykge1xyXG4gICAgICBzdXBlcihtc2cpO1xyXG4gICAgICBkZWJ1Z2dlcjtcclxuICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgY2xhc3MgRU5vdEltcGxlbWVudGVkIGV4dGVuZHMgRXhjZXB0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG1zZz86IHN0cmluZykgeyBzdXBlcihgTWlzc2luZyAke21zZ30gb3ZlcnJpZGVgKTsgfVxyXG4gIH1cclxuICBleHBvcnQgdHlwZSBUQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKGNvbnN0cnVjdG9yOiBGdW5jdGlvbik6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzID0gY29uc3RydWN0b3JbJ25hbWUnXTsgaWYgKHJlcykgcmV0dXJuIHJlcztcclxuICAgIGxldCBhcnIgPSBjb25zdHJ1Y3Rvci50b1N0cmluZygpLm1hdGNoKC9mdW5jdGlvblxccyooXFx3KykvKTtcclxuICAgIHJldHVybiBhcnIgJiYgYXJyLmxlbmd0aCA9PSAyID8gYXJyWzFdIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50UHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlcyB7IFxyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBrZXk/OiBhbnk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVFeHQodXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIG5ld1dpbmRvdz86IGJvb2xlYW4pOiBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gPGEgaHJlZj17IHVybCB9IHRhcmdldD17bmV3V2luZG93ID8gJ19ibGFuaycgOiAnX3NlbGYnfT48aSBjbGFzc05hbWU9J2ZhIGZhLWV4dGVybmFsLWxpbmsnPjwvaT4ge3RpdGxlfTwvYT47XHJcbiAgfVxyXG5cclxuICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzYxNjQ2MS9nZW5lcmF0ZS1hLWhhc2gtZnJvbS1zdHJpbmctaW4tamF2YXNjcmlwdC1qcXVlcnlcclxuICAvL2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfaGFzaF9mdW5jdGlvbnNcclxuICAvKipcclxuICogQ2FsY3VsYXRlIGEgMzIgYml0IEZOVi0xYSBoYXNoXHJcbiAqIEZvdW5kIGhlcmU6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3ZhaW9yYWJiaXQvNTY1NzU2MVxyXG4gKiBSZWYuOiBodHRwOi8vaXN0aGUuY29tL2Nob25nby90ZWNoL2NvbXAvZm52L1xyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIHRoZSBpbnB1dCB2YWx1ZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthc1N0cmluZz1mYWxzZV0gc2V0IHRvIHRydWUgdG8gcmV0dXJuIHRoZSBoYXNoIHZhbHVlIGFzIFxyXG4gKiAgICAgOC1kaWdpdCBoZXggc3RyaW5nIGluc3RlYWQgb2YgYW4gaW50ZWdlclxyXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtzZWVkXSBvcHRpb25hbGx5IHBhc3MgdGhlIGhhc2ggb2YgdGhlIHByZXZpb3VzIGNodW5rXHJcbiAqIEByZXR1cm5zIHtpbnRlZ2VyIHwgc3RyaW5nfVxyXG4gKi9cclxuICBleHBvcnQgZnVuY3Rpb24gaGFzaChzdHI6c3RyaW5nLCBhc1N0cmluZz86Ym9vbGVhbiwgc2VlZD86bnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcclxuICAgIC8qanNoaW50IGJpdHdpc2U6ZmFsc2UgKi9cclxuICAgIGxldCBpLCBsLCBodmFsID0gKHNlZWQgPT09IHVuZGVmaW5lZCkgPyAweDgxMWM5ZGM1IDogc2VlZDtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBodmFsIF49IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICBodmFsICs9IChodmFsIDw8IDEpICsgKGh2YWwgPDwgNCkgKyAoaHZhbCA8PCA3KSArIChodmFsIDw8IDgpICsgKGh2YWwgPDwgMjQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFzU3RyaW5nKSByZXR1cm4gKFwiMDAwMDAwMFwiICsgKGh2YWwgPj4+IDApLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC04KTsgLy8gQ29udmVydCB0byA4IGRpZ2l0IGhleCBzdHJpbmdcclxuICAgIGVsc2UgcmV0dXJuIGh2YWwgPj4+IDA7XHJcbiAgfVxyXG5cclxufSJdfQ==