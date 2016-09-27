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
})(lib || (lib = {}));
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
    function getNodePath(nd) { return nodeParents(nd).map(function (n) { return n.id; }).join('|'); }
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
    function navigateUrl(node, par) { router.navigateUrl({ storeId: node.path, par: par }); }
    sitemapRouter.navigateUrl = navigateUrl;
    function doNavigate(node, ev, par) { router.doNavigate({ storeId: node.path, par: par }, ev); }
    sitemapRouter.doNavigate = doNavigate;
    function doNavigateTag(node, ev, par) {
        return React.createElement("a", {href: "#", onClick: function (ev) { return doNavigate(node, ev, par); }}, node.title);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vTGliL2xpYnMvY29tbW9uL2xpYi50c3giLCIuLi8uLi9MaWIvbGlicy9jb21tb24vcmVhY3QtYm9vdHN0cmFwLnRzIiwiLi4vLi4vTGliL2xpYnMvY29tbW9uL3JlYWN0LWRvbS1zZXJ2ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3JvdXRlci50cyIsIi4uLy4uL0xpYi9saWJzL2ZsdXgvc2l0ZW1hcC50cyIsIi4uLy4uL0xpYi9saWJzL2ZsdXgvc2l0ZW1hcFJvdXRlci50c3giLCIuLi8uLi9MaWIvbGlicy9mb3Jtcy92YWxpZGF0b3IudHMiLCIuLi8uLi9MaWIvbGlicy9zZXJ2aWNlLWVtYWlsZXIvZW1haWxlci50c3giLCIuLi8uLi9MaWIvbGlicy9zZXJ2aWNlcy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFVLEdBQUcsQ0F1RFo7QUF2REQsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNiO1FBQStCLDZCQUFLO1FBQ2xDLG1CQUFZLEdBQVc7WUFDckIsa0JBQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxRQUFRLENBQUM7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDSCxnQkFBQztJQUFELENBQUMsQUFORCxDQUErQixLQUFLLEdBTW5DO0lBTlksYUFBUyxZQU1yQixDQUFBO0lBQ0Q7UUFBcUMsbUNBQVM7UUFDNUMseUJBQVksR0FBWTtZQUFJLGtCQUFNLGFBQVcsR0FBRyxjQUFXLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDakUsc0JBQUM7SUFBRCxDQUFDLEFBRkQsQ0FBcUMsU0FBUyxHQUU3QztJQUZZLG1CQUFlLGtCQUUzQixDQUFBO0lBR0Qsc0JBQTZCLFdBQXFCO1FBQ2hELElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcs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QUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOzRCQUMvQyxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7NEJBQ25DLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQUMsSUFBSTtnQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzlDLENBQUU7d0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDYixNQUFNLENBQUMsb0JBQWtCLEdBQUcsWUFBTyxHQUFLLENBQUMsQ0FBQzt3QkFDNUMsQ0FBQztvQkFDSCxDQUFDO29CQUFDLElBQUk7d0JBQ0osTUFBTSxDQUFDLFlBQVUsT0FBTyxDQUFDLE1BQU0sWUFBTyxHQUFLLENBQUMsQ0FBQztnQkFDakQsQ0FBQztZQUNILENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBdEJlLG9CQUFXLGNBc0IxQixDQUFBO0FBQ0gsQ0FBQyxFQTVCUyxRQUFRLEtBQVIsUUFBUSxRQTRCakIiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgbGliIHtcclxuICBleHBvcnQgY2xhc3MgRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobXNnOiBzdHJpbmcpIHtcclxuICAgICAgc3VwZXIobXNnKTtcclxuICAgICAgZGVidWdnZXI7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGNsYXNzIEVOb3RJbXBsZW1lbnRlZCBleHRlbmRzIEV4Y2VwdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2c/OiBzdHJpbmcpIHsgc3VwZXIoYE1pc3NpbmcgJHttc2d9IG92ZXJyaWRlYCk7IH1cclxuICB9XHJcbiAgZXhwb3J0IHR5cGUgVENhbGxiYWNrID0gKCkgPT4gdm9pZDtcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzTmFtZShjb25zdHJ1Y3RvcjogRnVuY3Rpb24pOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlcyA9IGNvbnN0cnVjdG9yWyduYW1lJ107IGlmIChyZXMpIHJldHVybiByZXM7XHJcbiAgICBsZXQgYXJyID0gY29uc3RydWN0b3IudG9TdHJpbmcoKS5tYXRjaCgvZnVuY3Rpb25cXHMqKFxcdyspLyk7XHJcbiAgICByZXR1cm4gYXJyICYmIGFyci5sZW5ndGggPT0gMiA/IGFyclsxXSA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudFByb3BzIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXMgeyBcclxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAga2V5PzogYW55O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlRXh0KHVybDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBuZXdXaW5kb3c/OiBib29sZWFuKTogSlNYLkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIDxhIGhyZWY9eyB1cmwgfSB0YXJnZXQ9e25ld1dpbmRvdyA/ICdfYmxhbmsnIDogJ19zZWxmJ30+PGkgY2xhc3NOYW1lPSdmYSBmYS1leHRlcm5hbC1saW5rJz48L2k+IHt0aXRsZX08L2E+O1xyXG4gIH1cclxuXHJcbiAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc2MTY0NjEvZ2VuZXJhdGUtYS1oYXNoLWZyb20tc3RyaW5nLWluLWphdmFzY3JpcHQtanF1ZXJ5XHJcbiAgLy9odHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX2hhc2hfZnVuY3Rpb25zXHJcbiAgLyoqXHJcbiAqIENhbGN1bGF0ZSBhIDMyIGJpdCBGTlYtMWEgaGFzaFxyXG4gKiBGb3VuZCBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS92YWlvcmFiYml0LzU2NTc1NjFcclxuICogUmVmLjogaHR0cDovL2lzdGhlLmNvbS9jaG9uZ28vdGVjaC9jb21wL2Zudi9cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciB0aGUgaW5wdXQgdmFsdWVcclxuICogQHBhcmFtIHtib29sZWFufSBbYXNTdHJpbmc9ZmFsc2VdIHNldCB0byB0cnVlIHRvIHJldHVybiB0aGUgaGFzaCB2YWx1ZSBhcyBcclxuICogICAgIDgtZGlnaXQgaGV4IHN0cmluZyBpbnN0ZWFkIG9mIGFuIGludGVnZXJcclxuICogQHBhcmFtIHtpbnRlZ2VyfSBbc2VlZF0gb3B0aW9uYWxseSBwYXNzIHRoZSBoYXNoIG9mIHRoZSBwcmV2aW91cyBjaHVua1xyXG4gKiBAcmV0dXJucyB7aW50ZWdlciB8IHN0cmluZ31cclxuICovXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGhhc2goc3RyOnN0cmluZywgYXNTdHJpbmc/OmJvb2xlYW4sIHNlZWQ/Om51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XHJcbiAgICAvKmpzaGludCBiaXR3aXNlOmZhbHNlICovXHJcbiAgICBsZXQgaSwgbCwgaHZhbCA9IChzZWVkID09PSB1bmRlZmluZWQpID8gMHg4MTFjOWRjNSA6IHNlZWQ7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaHZhbCBePSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgaHZhbCArPSAoaHZhbCA8PCAxKSArIChodmFsIDw8IDQpICsgKGh2YWwgPDwgNykgKyAoaHZhbCA8PCA4KSArIChodmFsIDw8IDI0KTtcclxuICAgIH1cclxuICAgIGlmIChhc1N0cmluZykgcmV0dXJuIChcIjAwMDAwMDBcIiArIChodmFsID4+PiAwKS50b1N0cmluZygxNikpLnN1YnN0cigtOCk7IC8vIENvbnZlcnQgdG8gOCBkaWdpdCBoZXggc3RyaW5nXHJcbiAgICBlbHNlIHJldHVybiBodmFsID4+PiAwO1xyXG4gIH1cclxuXHJcbn0iLCJjb25zdCBCdXR0b24gPSBSZWFjdEJvb3RzdHJhcC5CdXR0b247IFxyXG5jb25zdCBOYXZiYXIgPSBSZWFjdEJvb3RzdHJhcC5OYXZiYXI7IFxyXG5jb25zdCBOYXYgPSBSZWFjdEJvb3RzdHJhcC5OYXY7IFxyXG5jb25zdCBOYXZJdGVtID0gUmVhY3RCb290c3RyYXAuTmF2SXRlbTsgXHJcbmNvbnN0IE5hdkRyb3Bkb3duID0gUmVhY3RCb290c3RyYXAuTmF2RHJvcGRvd247XHJcbmNvbnN0IE1lbnVJdGVtID0gUmVhY3RCb290c3RyYXAuTWVudUl0ZW07XHJcbmNvbnN0IEJyZWFkY3J1bWIgPSBSZWFjdEJvb3RzdHJhcC5CcmVhZGNydW1iO1xyXG5jb25zdCBNb2RhbCA9IFJlYWN0Qm9vdHN0cmFwLk1vZGFsO1xyXG5jb25zdCBDb2wgPSBSZWFjdEJvb3RzdHJhcC5Db2w7XHJcbmNvbnN0IFJvdyA9IFJlYWN0Qm9vdHN0cmFwLlJvdztcclxuY29uc3QgR3JpZCA9IFJlYWN0Qm9vdHN0cmFwLkdyaWQ7XHJcbmNvbnN0IENsZWFyZml4ID0gUmVhY3RCb290c3RyYXAuQ2xlYXJmaXg7XHJcbmNvbnN0IExhYmVsID0gUmVhY3RCb290c3RyYXAuTGFiZWw7XHJcbmNvbnN0IFBhbmVsID0gUmVhY3RCb290c3RyYXAuUGFuZWw7XHJcbmNvbnN0IFBhbmVsR3JvdXAgPSBSZWFjdEJvb3RzdHJhcC5QYW5lbEdyb3VwO1xyXG5jb25zdCBGb3JtR3JvdXAgPSBSZWFjdEJvb3RzdHJhcC5Gb3JtR3JvdXA7XHJcbmNvbnN0IEhlbHBCbG9jayA9IFJlYWN0Qm9vdHN0cmFwLkhlbHBCbG9jaztcclxuY29uc3QgRm9ybUNvbnRyb2wgPSBSZWFjdEJvb3RzdHJhcC5Gb3JtQ29udHJvbDtcclxuY29uc3QgQ29udHJvbExhYmVsID0gUmVhY3RCb290c3RyYXAuQ29udHJvbExhYmVsO1xyXG5jb25zdCBBY2NvcmRpb24gPSBSZWFjdEJvb3RzdHJhcC5BY2NvcmRpb247XHJcbmNvbnN0IFJhZGlvID0gUmVhY3RCb290c3RyYXAuUmFkaW87XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbnRlcmZhY2UgSURPTVNlcnZlciB7XHJcbiAgcmVuZGVyVG9TdHJpbmcoZWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pOiBzdHJpbmc7XHJcbiAgcmVuZGVyVG9TdGF0aWNNYXJrdXAoZWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pOiBzdHJpbmc7XHJcbn1cclxuXHJcbnZhciBSZWFjdERPTVNlcnZlcjogSURPTVNlcnZlciA9IFJlYWN0WydfX1NFQ1JFVF9ET01fU0VSVkVSX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQnXTsiLCJuYW1lc3BhY2Ugcm91dGVyIHtcclxuXHJcbiAgLy9kaWZvdG5pIHJvdXRlIHBybyBwcmlwYWQsIHplIGplIFVSTCBwcmF6ZG5hXHJcbiAgZXhwb3J0IHZhciBnZXRTdGFydFJvdXRlOiAoKSA9PiBUUm91dGVBY3Rpb25QYXI7IFxyXG5cclxuICAvL2Jvb3Qgcm91dGVydVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBib290QXBwKCk6IFRSb3V0ZUFjdGlvblBhciB7IHJldHVybiByb290Um91dGVCaW5kKGRlY29kZUZ1bGxVcmwoKSwgZmFsc2UpOyB9XHJcblxyXG4gIC8vbmF2aWdhY2UgbmEgcm91dGVcclxuICBleHBvcnQgZnVuY3Rpb24gZG9OYXZpZ2F0ZShyb3V0ZXM6IFRSb3V0ZUFjdGlvblBhciwgZXY/OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgeyBpZiAoZXYpIGV2LnByZXZlbnREZWZhdWx0KCk7IHJldHVybiByb290Um91dGVCaW5kKHJvdXRlcywgdHJ1ZSk7IH1cclxuICBleHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVVcmwocm91dGVzOiBUUm91dGVBY3Rpb25QYXIpOiBzdHJpbmcgeyByZXR1cm4gZW5jb2RlRnVsbFVybChyb3V0ZXMpOyB9XHJcblxyXG4gIC8vcm91dGUgY2hhbmdlZCBub3RpZmljYXRpb25cclxuICBleHBvcnQgdmFyIG9uUm91dGVDaGFuZ2VkOiAocm91dGU6IFRSb3V0ZUFjdGlvblBhcikgPT4gdm9pZDtcclxuXHJcbiAgLy9jb25maWdcclxuICBleHBvcnQgdmFyICRpc0hhc2hSb3V0ZXIgPSBmYWxzZTsgLy9oYXNoIG9yIHNsYXNoIHJvdXRlIGRlbGltaXRlclxyXG4gIGV4cG9ydCB2YXIgJGJhc2ljVXJsID0gZ2V0QmFzaWNVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpOyAvL2Nhc3QgVVJMIHByZWQgcm91dGUgcGFyYW1hdHRlclxyXG5cclxuICAvL3Jvb3V0ZSBvYmpla3Qgc3RydWN0dXJlXHJcbiAgZXhwb3J0IGludGVyZmFjZSBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgc3RvcmVJZD86IHN0cmluZztcclxuICAgIGhvb2tJZD86IHN0cmluZzsgLy9uYXpldiBwcm9wZXJ0eSB2IGhvb2sucGFyZW50IFN0b3JlLCBvYnNhaHVqaWNpIFJvdXRlSG9va0Rpc3BhdGNoZXIuICFob29rSWQgPT4gcm91dGVEZWZhdWx0UHJvcE5hbWUgcHJvcGVydHlcclxuICAgIHBhcj86IHt9OyAvLzxzdG9yZUlkPi5yb3V0ZUFjdGlvbihwYXIsIGhvb2tJZClcclxuICAgIHJvdXRlSG9va0RlZmF1bHQ/OiBUUm91dGVBY3Rpb25QYXI7IC8vZGlmb3RuaSBjaGlsZCByb3V0ZSBob29rXHJcbiAgICAvLy4uLiBkYWxzaSwgbmFtZWQgcm91dGUgaG9va1xyXG4gIH1cclxuXHJcblxyXG4gIC8vKioqKioqKioqKioqKioqKiogcmVmcmVzaCB2aWV3IG9uIHJvdXRlIGNoYW5nZVxyXG4gIC8vYWt0dWFsbmkgcm91dGUgb2JqZWt0XHJcbiAgLy92YXIgcm91dGU6IFRSb3V0ZUFjdGlvblBhcjtcclxuXHJcbiAgZnVuY3Rpb24gcm9vdFJvdXRlQmluZChyb3V0ZXM6IFRSb3V0ZUFjdGlvblBhciAvKm51bGwgPT4gc3RhcnQgcm91dGUqLywgd2l0aFB1c3RTdGF0ZTogYm9vbGVhbik6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBpZiAoIXJvdXRlcykgcm91dGVzID0gZ2V0U3RhcnRSb3V0ZSA/IGdldFN0YXJ0Um91dGUoKSA6IG51bGw7IGlmICghcm91dGVzKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihgbWlzc2luZyByb3V0ZXNgKTtcclxuICAgIC8vcm91dGUgPSByb3V0ZXM7XHJcbiAgICBpZiAob25Sb3V0ZUNoYW5nZWQpIG9uUm91dGVDaGFuZ2VkKHJvdXRlcyk7XHJcbiAgICBpZiAod2l0aFB1c3RTdGF0ZSkgcHVzaFN0YXRlKHJvdXRlcyk7XHJcbiAgICByZXR1cm4gcm91dGVzO1xyXG4gIH1cclxuXHJcbiAgLy8qKioqKioqKioqKioqKioqKiBQT1BTVEFURSBFVkVOVFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZXYgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYD4gcG9wc3RhdGU6ICR7d2luZG93LmxvY2F0aW9uLmhyZWZ9YCk7XHJcbiAgICByb290Um91dGVCaW5kKGRlY29kZUZ1bGxVcmwoKSwgZmFsc2UpO1xyXG4gIH0pO1xyXG5cclxuICAvL21vZGlmeSBicm93c2VyIFVSTFxyXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZShyb3V0ZTogVFJvdXRlQWN0aW9uUGFyKSB7XHJcbiAgICBsZXQgdXJsU3RyID0gZW5jb2RlRnVsbFVybChyb3V0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhgPiBwdXNoU3RhdGU6ICR7dXJsU3RyfWApO1xyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdXJsU3RyKTtcclxuICB9XHJcblxyXG4gIC8vcm91dGEgcGFycyBhcmUgYWZ0ZXIgXCIuaHRtbFwiIHVybCBwYXJ0XHJcbiAgZnVuY3Rpb24gZ2V0QmFzaWNVcmwoc3RhcnRVcmw6IHN0cmluZyk6IHN0cmluZyB7IGxldCBpZHggPSBzdGFydFVybC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJy5odG1sJyk7IHJldHVybiBpZHggPj0gMCA/IHN0YXJ0VXJsLnN1YnN0cigwLCBpZHggKyA1KSA6IHN0YXJ0VXJsOyB9XHJcblxyXG4gIHZhciByb3V0ZVBhcklnbm9yZXMgPSBbJ3N0b3JlSWQnLCAnaG9va0lkJywgJ3BhciddO1xyXG4gIHZhciByb3V0ZUhvb2tEZWZhdWx0TmFtZSA9ICdyb3V0ZUhvb2tEZWZhdWx0JztcclxuXHJcbiAgZnVuY3Rpb24gZW5jb2RlVXJsKHN0OiBUUm91dGVBY3Rpb25QYXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgZW5jb2RlVXJsTG93KHJlcywgc3QsIG51bGwpO1xyXG4gICAgbGV0IHVybCA9IHJlcy5qb2luKCcnKTtcclxuICAgIHJldHVybiBjbGVhclNsYXNoZXModXJsLnJlcGxhY2UoLyhcXCRcXC8pKiQvZywgJycpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVuY29kZUZ1bGxVcmwoc3Q6IFRSb3V0ZUFjdGlvblBhcik6IHN0cmluZyB7XHJcbiAgICBsZXQgdXJsU3RyID0gc3QgPyBlbmNvZGVVcmwoc3QpIDogbnVsbDtcclxuICAgIC8vcmV0dXJuICRiYXNpY1VybCArICh1cmxTdHIgPyAoJGlzSGFzaFJvdXRlciA/ICcjJyA6ICcvJykgKyB1cmxTdHIgOiAnJyk7XHJcbiAgICByZXR1cm4gJGJhc2ljVXJsICsgKHVybFN0ciA/ICgkaXNIYXNoUm91dGVyID8gJyMnIDogJz8nKSArIHVybFN0ciA6ICcnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlY29kZUZ1bGxVcmwodXJsPzogc3RyaW5nKTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIHJldHVybiBkZWNvZGVVcmwoZGVjb2RlVXJsUGFydCh1cmwpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlY29kZVVybFBhcnQodXJsPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGlmICghdXJsLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgkYmFzaWNVcmwpKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihgbG9jYXRpb24uaHJlZiBkb2VzIG5vdCBzdGFydCB3aXRoICR7JGJhc2ljVXJsfWApO1xyXG4gICAgcmV0dXJuIGNsZWFyU2xhc2hlcyh1cmwuc3Vic3RyKCRiYXNpY1VybC5sZW5ndGgpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlY29kZVVybCh1cmw/OiBzdHJpbmcpOiBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgaWYgKCF1cmwpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIGRlY29kZVVybExvdyh1cmwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUm91dGUoc3RvcmVJZDogc3RyaW5nLCBwYXI/OiB7fSwgcm91dGVIb29rRGVmYXVsdD86IFRSb3V0ZUFjdGlvblBhciwgb3RoZXJIb29rcz86IHsgW25hbWU6IHN0cmluZ106IFRSb3V0ZUFjdGlvblBhcjsgfSk6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBsZXQgcmVzOiBUUm91dGVBY3Rpb25QYXIgPSB7IHN0b3JlSWQ6IHN0b3JlSWQsIHBhcjogcGFyIH07XHJcbiAgICBpZiAocm91dGVIb29rRGVmYXVsdCkgeyByZXMucm91dGVIb29rRGVmYXVsdCA9IHJvdXRlSG9va0RlZmF1bHQ7IGRlbGV0ZSByb3V0ZUhvb2tEZWZhdWx0Lmhvb2tJZDsgfVxyXG4gICAgaWYgKG90aGVySG9va3MpXHJcbiAgICAgIGZvciAobGV0IHAgaW4gb3RoZXJIb29rcykgeyBsZXQgaGsgPSByZXNbcF0gPSBvdGhlckhvb2tzW3BdOyBoay5ob29rSWQgPSBwOyB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q2hpbGRSb3V0ZVByb3BOYW1lcyhzdDogVFJvdXRlQWN0aW9uUGFyKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICBsZXQgcHJvcHMgPSBbXTtcclxuICAgIGZvciAobGV0IHAgaW4gc3QpIGlmIChyb3V0ZVBhcklnbm9yZXMuaW5kZXhPZihwKSA8IDApIHByb3BzLnB1c2gocCk7XHJcbiAgICByZXR1cm4gcHJvcHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGVVcmxMb3codXJsOiBzdHJpbmcpOiBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgaWYgKCEkaXNIYXNoUm91dGVyKSB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcclxuICAgIHVybCA9ICd7JyArIHVybC5yZXBsYWNlKC9cXCRcXC8vZywgJ30nKS5yZXBsYWNlKC9cXC8vZywgJ3snKTtcclxuICAgIGxldCBzdGFjazogQXJyYXk8SURlY29kZVN0YWNrPiA9IFtdOyBsZXQgaSA9IDA7IGxldCBjaDogc3RyaW5nOyBsZXQgcmVzOiBJRGVjb2RlU3RhY2sgPSBudWxsO1xyXG4gICAgbGV0IHBhcnNlUm91dGUgPSAoZW5kSWR4OiBudW1iZXIsIHN0OiBJRGVjb2RlU3RhY2spID0+IHtcclxuICAgICAgbGV0IHMgPSB1cmwuc3Vic3RyaW5nKHN0Lm9wZW5JZHgsIGVuZElkeCAtIDEpO1xyXG4gICAgICBsZXQgcGFydHMgPSBzLnNwbGl0KCc7Jyk7XHJcbiAgICAgIGxldCBwcm9wQ29tcCA9IHBhcnRzWzBdLnNwbGl0KCctJyk7IGlmIChwcm9wQ29tcC5sZW5ndGggPiAyKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbigncHJvcENvbXAubGVuZ3RoID4gMicpO1xyXG4gICAgICBzdC5ob29rSWQgPSBwcm9wQ29tcC5sZW5ndGggPT0gMSA/IG51bGwgOiBwcm9wQ29tcFswXTtcclxuICAgICAgc3Qucm91dGUgPSB7IHN0b3JlSWQ6IHByb3BDb21wLmxlbmd0aCA9PSAxID8gcHJvcENvbXBbMF0gOiBwcm9wQ29tcFsxXSB9O1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbnYgPSBwYXJ0c1tpXS5zcGxpdCgnPScpO1xyXG4gICAgICAgIGlmICghc3Qucm91dGUucGFyKSBzdC5yb3V0ZS5wYXIgPSB7fTtcclxuICAgICAgICBzdC5yb3V0ZS5wYXJbbnZbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG52WzFdKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgIGlmIChpID49IHVybC5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoc3RhY2subGVuZ3RoID49IDEpIGNoID0gJ30nOyBlbHNlIGJyZWFrO1xyXG4gICAgICAgIGkgPSB1cmwubGVuZ3RoICsgMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjaCA9IHVybC5jaGFyQXQoaSk7IGkrKztcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2ggKGNoKSB7XHJcbiAgICAgICAgY2FzZSAneyc6XHJcbiAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID09IDApIHsgcmVzID0geyBvcGVuSWR4OiBpIH07IHN0YWNrLnB1c2gocmVzKTsgYnJlYWs7IH0gLy9yb290XHJcbiAgICAgICAgICBsZXQgbGFzdCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgaWYgKCFsYXN0LnJvdXRlKSBwYXJzZVJvdXRlKGksIGxhc3QpOyAvL3pwcmFjdWogc2VrdmVuY2kgbWV6aSB7eHh4eHtcclxuICAgICAgICAgIHN0YWNrLnB1c2goeyBvcGVuSWR4OiBpIH0pOyAvL3phY25pIG5vdnkgc3RhY2tcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ30nOlxyXG4gICAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA9PSAwKSBicmVhaztcclxuICAgICAgICAgIGxldCBsYXN0MiA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgaWYgKCFsYXN0Mi5yb3V0ZSkgcGFyc2VSb3V0ZShpLCBsYXN0Mik7IC8venByYWN1aiBzZWt2ZW5jaSBtZXppIHt4eHh4fSwgeHh4IGplIGJleiB7IGkgfVxyXG4gICAgICAgICAgbGV0IHBhclByb3AgPSBsYXN0Mi5ob29rSWQgPyBsYXN0Mi5ob29rSWQgOiByb3V0ZUhvb2tEZWZhdWx0TmFtZTtcclxuICAgICAgICAgIGlmIChwYXJQcm9wICE9IHJvdXRlSG9va0RlZmF1bHROYW1lKSBsYXN0Mi5yb3V0ZS5ob29rSWQgPSBwYXJQcm9wO1xyXG4gICAgICAgICAgLy9uYXZhemFuaSBuYSBwYXJlbnQgcm91dGVcclxuICAgICAgICAgIGxldCBwYXIgPSBzdGFja1tzdGFjay5sZW5ndGggLSAyXTtcclxuICAgICAgICAgIGlmIChwYXIpIHBhci5yb3V0ZVtwYXJQcm9wXSA9IGxhc3QyLnJvdXRlO1xyXG4gICAgICAgICAgLy92eW5kZWogemUgc3RhY2t1XHJcbiAgICAgICAgICBzdGFjay5zcGxpY2Uoc3RhY2subGVuZ3RoIC0gMSwgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5yb3V0ZTtcclxuICB9XHJcblxyXG4gIGludGVyZmFjZSBJRGVjb2RlU3RhY2sge1xyXG4gICAgb3BlbklkeDogbnVtYmVyO1xyXG4gICAgcm91dGU/OiBUUm91dGVBY3Rpb25QYXI7XHJcbiAgICBob29rSWQ/OiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmNvZGVVcmxMb3cocmVzOiBBcnJheTxzdHJpbmc+LCBzdDogVFJvdXRlQWN0aW9uUGFyLCBwYXJlbnRQcm9wTmFtZT86IHN0cmluZykge1xyXG4gICAgcmVzLnB1c2goKHBhcmVudFByb3BOYW1lID8gcGFyZW50UHJvcE5hbWUgKyAnLScgOiAnJykgKyAoc3Quc3RvcmVJZCA/IHN0LnN0b3JlSWQgOiAnJykpO1xyXG4gICAgaWYgKHN0LnBhcikge1xyXG4gICAgICBsZXQgcHJvcHMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgcCBpbiBzdC5wYXIpIHByb3BzLnB1c2gocCk7XHJcbiAgICAgIHByb3BzLnNvcnQoKS5mb3JFYWNoKHAgPT4gcmVzLnB1c2goYDske3B9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN0LnBhcltwXSl9YCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q2hpbGRSb3V0ZVByb3BOYW1lcyhzdCkuc29ydCgpLmZvckVhY2gocCA9PiB7XHJcbiAgICAgIHJlcy5wdXNoKCcvJyk7XHJcbiAgICAgIGVuY29kZVVybExvdyhyZXMsIHN0W3BdLCBwID09IHJvdXRlSG9va0RlZmF1bHROYW1lID8gbnVsbCA6IHApO1xyXG4gICAgICByZXMucHVzaCgnJC8nKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJTbGFzaGVzKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykucmVwbGFjZSgvXltcXCNcXC9cXD9dPy8sICcnKTsgfVxyXG59IiwibmFtZXNwYWNlIHNpdGUge1xyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElOb2RlIHtcclxuICAgIGlkOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB0aXRsZT86IHN0cmluZzsgLy9jaHliaS1saSwgdmV6bWUgc2UgeiBJVGFiLnRpdGxlIFxyXG4gICAgYnJUaXRsZT86c3RyaW5nOyAvL3RpdGxlIHBybyBicmVhZGNydW1iXHJcbiAgICBjcmVhdGVQYWdlOiAocm91dGVQYXIpID0+IEpTWC5FbGVtZW50LFxyXG4gICAgcGF0aD86IHN0cmluZztcclxuICAgIGNoaWxkcz86IEFycmF5PElOb2RlPjtcclxuICAgIHBhcmVudD86IElOb2RlO1xyXG4gICAgbGFyZ2VMb2dvPzogYm9vbGVhbjsgLy92ZWxrZSBsb2dvIHYgY2hsYWRpY2lcclxuICAgIHRhYj86IElUYWI7IC8vbXkgdGFiXHJcbiAgICBub1RpdGxlPzpib29sZWFuOyAvL3BhZ2UgdGVtcGxhdGUgbmVnZW5lcnVqZSB0aXRsZSBzdHJhbmt5XHJcbiAgfVxyXG4gIGV4cG9ydCB2YXIgcm9vdDogSU5vZGU7XHJcbiAgZXhwb3J0IHZhciBub2RlczogeyBbcGF0aDogc3RyaW5nXTogSU5vZGU7IH0gPSB7fTtcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGJvb3RBcHAoKSB7XHJcbiAgICBmdW5jdGlvbiBpbml0Tm9kZShwYXJlbnQ6IElOb2RlLCBuZDogSU5vZGUpIHtcclxuICAgICAgbmQuY2hpbGRzID0gbm9kZUNoaWxkcyhuZCk7XHJcbiAgICAgIG5kLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgaWYgKCFuZC50YWIpIG5kLnRhYiA9IG5kLnBhcmVudC50YWI7XHJcbiAgICAgIG5kLnBhdGggPSBnZXROb2RlUGF0aChuZCk7XHJcbiAgICAgIGlmIChub2Rlc1tuZC5wYXRoXSkgdGhyb3cgbmV3IGxpYi5FeGNlcHRpb24oYFNpdGVNYXAgbm9kZSAke25kLnBhdGh9IGFscmVhZHkgZXhpc3RzIWApO1xyXG4gICAgICBub2Rlc1tuZC5wYXRoXSA9IG5kO1xyXG4gICAgICBpZiAobmQuY2hpbGRzKSBuZC5jaGlsZHMuZm9yRWFjaChuID0+IGluaXROb2RlKG5kLCBuKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbml0VGFicygpIHtcclxuICAgICAgdGFicy4kY2hpbGRzID0gW107IHZhciBpZHggPSAwO1xyXG4gICAgICBmb3IgKHZhciBwIGluIHRhYnMpIHtcclxuICAgICAgICBpZiAocC5zdGFydHNXaXRoKCckJykpIGNvbnRpbnVlO1xyXG4gICAgICAgIHZhciB0OiBJVGFiID0gdGFic1twXTsgdGFicy4kY2hpbGRzLnB1c2godCk7IHQuaWR4ID0gaWR4Kys7XHJcbiAgICAgICAgaWYgKCF0LnJvb3ROb2RlKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbignIXQucm9vdE5vZGUnKTtcclxuICAgICAgICB0LnJvb3ROb2RlLnRhYiA9IHQ7XHJcbiAgICAgICAgaWYgKCF0LnJvb3ROb2RlLnRpdGxlKSB0LnJvb3ROb2RlLnRpdGxlID0gdC50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5pdFRhYnMoKTtcclxuICAgIGluaXROb2RlKG51bGwsIHJvb3QpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5vZGVQYXJlbnRzKG5kOiBJTm9kZSwgaWdub3JlU2VsZj86IGJvb2xlYW4pOiBBcnJheTxJTm9kZT4ge1xyXG4gICAgdmFyIHJlczogbm9kZVBhcmVudHNSZXN1bHQgPSB7fTtcclxuICAgIG5vZGVQYXJlbnRzTG93KG5kLCByZXMsIGlnbm9yZVNlbGYpO1xyXG4gICAgcmV0dXJuIHJlcy5yZXMucmV2ZXJzZSgpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJVGFicyB7XHJcbiAgICAkY2hpbGRzPzogQXJyYXk8SVRhYj47XHJcbiAgfVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVRhYiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaWR4PzogbnVtYmVyO1xyXG4gICAgcm9vdE5vZGU/OiBJTm9kZTsgLy9obGF2bmkgc3RyYW5rYSBwcm8gdGFiXHJcbiAgfVxyXG4gIGV4cG9ydCB2YXIgdGFiczogSVRhYnM7XHJcblxyXG4gIGV4cG9ydCB2YXIgZ2V0QmxhbmtQYWdlOiAocm91dGVQYXIpID0+IEpTWC5FbGVtZW50O1xyXG5cclxuICAvLyoqKioqKioqKioqIFByaXZhdGVcclxuXHJcbiAgZnVuY3Rpb24gbm9kZUNoaWxkcyhuZDogSU5vZGUpOiBBcnJheTxJTm9kZT4ge1xyXG4gICAgdmFyIHJlczogQXJyYXk8SU5vZGU+ID0gbnVsbDtcclxuICAgIGZvciAodmFyIHAgaW4gbmQpIHtcclxuICAgICAgdmFyIHN1Yk5kOiBJTm9kZSA9IG5kW3BdO1xyXG4gICAgICBpZiAoIXN1Yk5kIC8qfHwgIXN1Yk5kLnRpdGxlKi8gfHwgIXN1Yk5kLmlkKSBjb250aW51ZTtcclxuICAgICAgaWYgKCFyZXMpIHJlcyA9IFtzdWJOZF07IGVsc2UgcmVzLnB1c2goc3ViTmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG5vZGVQYXJlbnRzTG93KG5kOiBJTm9kZSwgcmVzOiBub2RlUGFyZW50c1Jlc3VsdCwgaWdub3JlU2VsZjogYm9vbGVhbikge1xyXG4gICAgaWYgKCFyZXMucmVzKSByZXMucmVzID0gaWdub3JlU2VsZiA/IFtdIDogW25kXTtcclxuICAgIHdoaWxlIChuZC5wYXJlbnQpIHsgbmQgPSBuZC5wYXJlbnQ7IHJlcy5yZXMucHVzaChuZCk7IH1cclxuICB9XHJcbiAgaW50ZXJmYWNlIG5vZGVQYXJlbnRzUmVzdWx0IHsgcmVzID86IEFycmF5PElOb2RlPiB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE5vZGVQYXRoKG5kOiBJTm9kZSk6IHN0cmluZyB7IHJldHVybiBub2RlUGFyZW50cyhuZCkubWFwKG4gPT4gbi5pZCkuam9pbignfCcpOyB9XHJcbn0iLCJuYW1lc3BhY2Ugc2l0ZW1hcFJvdXRlciB7XHJcblxyXG4gIGV4cG9ydCB2YXIgY2hpbGRDb250ZXh0VHlwZXM6IFJlYWN0LlZhbGlkYXRpb25NYXA8YW55PiA9IHtcclxuICAgIHNpdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICByb3V0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBBcHBSb290Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSb290UHJvcHMsIHJvdXRlci5UUm91dGVBY3Rpb25QYXI+IHtcclxuICAgIGNvbnN0cnVjdG9yKHA6IElSb290UHJvcHMsIGN0eCkge1xyXG4gICAgICBzdXBlcihwLCBjdHgpO1xyXG4gICAgICB0aGlzLnN0YXRlID0gcC5pbml0Um91dGU7XHJcbiAgICAgIHJvb3RDb21wID0gdGhpcztcclxuICAgIH1cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgIHRoaXMuYWN0Tm9kZSA9IHNpdGUubm9kZXNbdGhpcy5zdGF0ZS5zdG9yZUlkXTtcclxuICAgICAgaWYgKCF0aGlzLmFjdE5vZGUpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBOb2RlIHBhdGggJHt0aGlzLnN0YXRlLnN0b3JlSWR9IG5vdCBmb3VuZGApO1xyXG4gICAgICB2YXIgcmVzID0gKHRoaXMuYWN0Tm9kZS5jcmVhdGVQYWdlID8gdGhpcy5hY3ROb2RlLmNyZWF0ZVBhZ2UgOiBzaXRlLmdldEJsYW5rUGFnZSkoKHRoaXMuc3RhdGUucGFyKSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBhY3ROb2RlOiBzaXRlLklOb2RlO1xyXG5cclxuICAgIGdldENoaWxkQ29udGV4dCgpOiBJQ29udGV4dCB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2l0ZTogdGhpcy5hY3ROb2RlLFxyXG4gICAgICAgIHJvdXRlOiB0aGlzLnN0YXRlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVVybDxUPihub2RlOiBzaXRlLklOb2RlLCBwYXI/OiBUKSB7IHJvdXRlci5uYXZpZ2F0ZVVybCh7IHN0b3JlSWQ6IG5vZGUucGF0aCwgcGFyOiBwYXIgfSk7IH1cclxuICBleHBvcnQgZnVuY3Rpb24gZG9OYXZpZ2F0ZTxUPihub2RlOiBzaXRlLklOb2RlLCBldj86IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCBwYXI/OiBUKSB7IHJvdXRlci5kb05hdmlnYXRlKHsgc3RvcmVJZDogbm9kZS5wYXRoLCBwYXI6IHBhciB9LCBldik7IH1cclxuICBleHBvcnQgZnVuY3Rpb24gZG9OYXZpZ2F0ZVRhZzxUPihub2RlOiBzaXRlLklOb2RlLCBldj86IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCBwYXI/OiBUKTogSlNYLkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIDxhIGhyZWY9XCIjXCIgb25DbGljaz17ZXYgPT4gZG9OYXZpZ2F0ZShub2RlLCBldiwgcGFyKSB9Pntub2RlLnRpdGxlfTwvYT47XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudDxQPih0eXBlOiBSZWFjdC5Db21wb25lbnRDbGFzczxQPiB8IFJlYWN0LlNGQzxQPiwgcm91dGVQYXIsIHByb3BzOiBQICYgUmVhY3QuQXR0cmlidXRlcywgLi4uY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVtdKTogUmVhY3QuUmVhY3RFbGVtZW50PFA+IHtcclxuICAgIHZhciBwYXI6IFAgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcm91dGVQYXIpO1xyXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodHlwZSwgcGFyKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBib290QXBwKGNvbnRlbnQ6IEhUTUxFbGVtZW50LCBzaXRlbWFwQ3JlYXRvcjogbGliLlRDYWxsYmFjaykge1xyXG4gICAgc2l0ZW1hcENyZWF0b3IoKTtcclxuICAgIHNpdGUuYm9vdEFwcCgpO1xyXG4gICAgdmFyIHN0YXJ0Um91dGUgPSByb3V0ZXIuYm9vdEFwcCgpO1xyXG4gICAgUmVhY3RET00ucmVuZGVyKDxBcHBSb290Q29tcG9uZW50IGluaXRSb3V0ZT17IHN0YXJ0Um91dGUgfSAvPiwgY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElDb250ZXh0IHtcclxuICAgIHNpdGU6IHNpdGUuSU5vZGU7XHJcbiAgICByb3V0ZTogcm91dGVyLlRSb3V0ZUFjdGlvblBhclxyXG4gIH1cclxuXHJcbiAgLy8qKioqKioqKioqIFByaXZhdGVcclxuICB2YXIgcm9vdENvbXA6IEFwcFJvb3RDb21wb25lbnQ7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBJUm9vdFByb3BzIHsgaW5pdFJvdXRlOiByb3V0ZXIuVFJvdXRlQWN0aW9uUGFyIH1cclxuXHJcbiAgcm91dGVyLmdldFN0YXJ0Um91dGUgPSAoKSA9PiB7IHJldHVybiB7IHN0b3JlSWQ6IHNpdGUucm9vdC5wYXRoIH07IH07XHJcbiAgcm91dGVyLm9uUm91dGVDaGFuZ2VkID0gcm91dGUgPT4geyBpZiAocm9vdENvbXApIHJvb3RDb21wLnNldFN0YXRlKHJvdXRlKTsgfTtcclxuXHJcbn0iLCJuYW1lc3BhY2UgdmFsaWRhdGlvbiB7XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkUGFycyB7XHJcbiAgICB0eXBlOiB0eXBlcztcclxuICAgIG1hc2s/OiBzdHJpbmc7IC8vcmVnZXhwIHBybyBzdHJpbmcgbWFza1xyXG4gICAgLy9zdHJpbmcgbGVuZ3RoXHJcbiAgICBtaW5MZW5ndGg/OiBudW1iZXIsXHJcbiAgICBtYXhMZW5ndGg/OiBudW1iZXIsXHJcbiAgICAvL251bWJlciBpbnRlcnZhbHNcclxuICAgIG1pbj86IG51bWJlcixcclxuICAgIG1heD86IG51bWJlcixcclxuICAgIGVxdWFsVG9JZD86IHN0cmluZztcclxuXHJcbiAgfVxyXG4gIGV4cG9ydCBlbnVtIHR5cGVzIHtcclxuICAgIG5vID0gMCxcclxuICAgIHJlcXVpcmVkID0gMHgxLFxyXG4gICAgZW1haWwgPSAweDIsXHJcbiAgICBudW1iZXIgPSAweDQsXHJcbiAgICBkaWdpdHMgPSAweDgsXHJcbiAgICBlcXVhbFRvID0gMHgxMCxcclxuICAgIHN0cmluZ0xlbmd0aCA9IDB4MjAsXHJcbiAgICBudW1iZXJSYW5nZSA9IDB4NDAsXHJcbiAgICBzdHJpbmdNYXNrID0gMHg4MCxcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSUlucHV0U3RhdGUgeyB2YWx1ZTogc3RyaW5nOyBibHVyZWQ/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZzsgfVxyXG5cclxuICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBWQUxJREFURSBMT0dJQ1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUodmFsaWRhdG9yOiBJVmFsaWRQYXJzLCBzdDogSUlucHV0U3RhdGUpIHtcclxuICAgIHZhciBsZW4gPSAhc3QudmFsdWUgPyAwIDogc3QudmFsdWUubGVuZ3RoO1xyXG4gICAgLy9SRVFVSVJFRFxyXG4gICAgaWYgKCh2YWxpZGF0b3IudHlwZSAmIHR5cGVzLnJlcXVpcmVkKSAhPSAwKSB7XHJcbiAgICAgIGlmIChsZW4gPCAxKSB7IHN0LmVycm9yID0gbWVzc2FnZXMucmVxdWlyZWQoKTsgcmV0dXJuOyB9XHJcbiAgICB9XHJcbiAgICAvL1NUUklORyBMRU5HVEhcclxuICAgIGlmICgodmFsaWRhdG9yLnR5cGUgJiB0eXBlcy5zdHJpbmdMZW5ndGgpICE9IDApIHtcclxuICAgICAgaWYgKHZhbGlkYXRvci5taW5MZW5ndGggJiYgdmFsaWRhdG9yLm1heExlbmd0aCkge1xyXG4gICAgICAgIGlmIChsZW4gPCB2YWxpZGF0b3IubWluTGVuZ3RoIHx8IGxlbiA+IHZhbGlkYXRvci5tYXhMZW5ndGgpIHsgc3QuZXJyb3IgPSBtZXNzYWdlcy5yYW5nZWxlbmd0aCh2YWxpZGF0b3IubWluTGVuZ3RoLCB2YWxpZGF0b3IubWF4TGVuZ3RoKTsgcmV0dXJuOyB9XHJcbiAgICAgIH0gZWxzZSBpZiAodmFsaWRhdG9yLm1pbkxlbmd0aCkge1xyXG4gICAgICAgIGlmIChsZW4gPCB2YWxpZGF0b3IubWluTGVuZ3RoKSB7IHN0LmVycm9yID0gbWVzc2FnZXMubWlubGVuZ3RoKHZhbGlkYXRvci5taW5MZW5ndGgpOyByZXR1cm47IH1cclxuICAgICAgfSBlbHNlIGlmICh2YWxpZGF0b3IubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGxlbiA+IHZhbGlkYXRvci5tYXhMZW5ndGgpIHsgc3QuZXJyb3IgPSBtZXNzYWdlcy5tYXhsZW5ndGgodmFsaWRhdG9yLm1heExlbmd0aCk7IHJldHVybjsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLy4uIHdpdGggTUFTS1xyXG4gICAgdmFyIG1hc2s6IFJlZ0V4cCA9IG51bGw7IHZhciBlcnJvcjogc3RyaW5nO1xyXG4gICAgaWYgKCh2YWxpZGF0b3IudHlwZSAmICh0eXBlcy5udW1iZXIgfCB0eXBlcy5udW1iZXJSYW5nZSkpICE9IDApIHtcclxuICAgICAgbWFzayA9IC9eKD86LT9cXGQrfC0/XFxkezEsM30oPzosXFxkezN9KSspPyg/OlxcLlxcZCspPyQvO1xyXG4gICAgICBlcnJvciA9IG1lc3NhZ2VzLm51bWJlcigpO1xyXG4gICAgfSBlbHNlIGlmICgodmFsaWRhdG9yLnR5cGUgJiB0eXBlcy5kaWdpdHMpICE9IDApIHtcclxuICAgICAgbWFzayA9IC9eXFxkKyQvO1xyXG4gICAgICBlcnJvciA9IG1lc3NhZ2VzLmRpZ2l0cygpO1xyXG4gICAgfSBlbHNlIGlmICgodmFsaWRhdG9yLnR5cGUgJiB0eXBlcy5lbWFpbCkgIT0gMCkge1xyXG4gICAgICBtYXNrID0gL15bYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC87XHJcbiAgICAgIGVycm9yID0gbWVzc2FnZXMuZW1haWwoKTtcclxuICAgIH1cclxuICAgIGlmIChtYXNrKSB7XHJcbiAgICAgIGlmIChsZW4gPT0gMCB8fCAhbWFzay50ZXN0KHN0LnZhbHVlKSkgeyBzdC5lcnJvciA9IGVycm9yOyByZXR1cm47IH1cclxuICAgIH1cclxuICAgIC8vTlVNQkVSIFJBTkdFXHJcbiAgICB2YXIgZGVmaW5lZCA9IHYgPT4gdHlwZW9mIHYgIT0gJ3VuZGVmaW5lZCc7XHJcbiAgICBpZiAoKHZhbGlkYXRvci50eXBlICYgdHlwZXMubnVtYmVyUmFuZ2UpICE9IDApIHtcclxuICAgICAgdmFyIG51bSA9IHBhcnNlRmxvYXQoc3QudmFsdWUpO1xyXG4gICAgICBpZiAoZGVmaW5lZCh2YWxpZGF0b3IubWluKSAmJiBkZWZpbmVkKHZhbGlkYXRvci5tYXgpKSB7XHJcbiAgICAgICAgaWYgKG51bSA8IHZhbGlkYXRvci5taW4gfHwgbnVtID4gdmFsaWRhdG9yLm1heCkgeyBzdC5lcnJvciA9IG1lc3NhZ2VzLnJhbmdlKHZhbGlkYXRvci5taW4sIHZhbGlkYXRvci5tYXgpOyByZXR1cm47IH1cclxuICAgICAgfSBlbHNlIGlmIChkZWZpbmVkKHZhbGlkYXRvci5taW4pKSB7XHJcbiAgICAgICAgaWYgKG51bSA8IHZhbGlkYXRvci5taW4pIHsgc3QuZXJyb3IgPSBtZXNzYWdlcy5taW4odmFsaWRhdG9yLm1pbik7IHJldHVybjsgfVxyXG4gICAgICB9IGVsc2UgaWYgKGRlZmluZWQodmFsaWRhdG9yLm1heCkpIHtcclxuICAgICAgICBpZiAobnVtID4gdmFsaWRhdG9yLm1heCkgeyBzdC5lcnJvciA9IG1lc3NhZ2VzLm1heCh2YWxpZGF0b3IubWF4KTsgcmV0dXJuOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCB2YXIgbWVzc2FnZXMgPSB7XHJcbiAgICByZXF1aXJlZDogKCkgPT4gXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlwiLFxyXG4gICAgcmVtb3RlOiAoKSA9PiBcIlBsZWFzZSBmaXggdGhpcyBmaWVsZC5cIixcclxuICAgIGVtYWlsOiAoKSA9PiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIsXHJcbiAgICB1cmw6ICgpID0+IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVJMLlwiLFxyXG4gICAgZGF0ZTogKCkgPT4gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLlwiLFxyXG4gICAgZGF0ZUlTTzogKCkgPT4gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlICggSVNPICkuXCIsXHJcbiAgICBudW1iZXI6ICgpID0+IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyLlwiLFxyXG4gICAgZGlnaXRzOiAoKSA9PiBcIlBsZWFzZSBlbnRlciBvbmx5IGRpZ2l0cy5cIixcclxuICAgIGVxdWFsVG86ICgpID0+IFwiUGxlYXNlIGVudGVyIHRoZSBzYW1lIHZhbHVlIGFnYWluLlwiLFxyXG4gICAgbWF4bGVuZ3RoOiAodjEpID0+IGBQbGVhc2UgZW50ZXIgbm8gbW9yZSB0aGFuICR7djF9IGNoYXJhY3RlcnMuYCxcclxuICAgIG1pbmxlbmd0aDogKHYxKSA9PiBgUGxlYXNlIGVudGVyIGF0IGxlYXN0ICR7djF9IGNoYXJhY3RlcnMuYCxcclxuICAgIHJhbmdlbGVuZ3RoOiAodjEsIHYyKSA9PiBgUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiAke3YxfSBhbmQgJHt2Mn0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICByYW5nZTogKHYxLCB2MikgPT4gYFBsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gJHt2MX0gYW5kICR7djJ9LmAsXHJcbiAgICBtYXg6ICh2MSkgPT4gYFBsZWFzZSBlbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke3YxfS5gLFxyXG4gICAgbWluOiAodjEpID0+IGBQbGVhc2UgZW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHt2MX0uYFxyXG4gIH07XHJcblxyXG59IiwibmFtZXNwYWNlIHNlcnZpY2VzLmVtYWlsZXIge1xyXG4gIGV4cG9ydCBpbnRlcmZhY2Ugc2VuZEVtYWlsSU4ge1xyXG4gICAgZnJvbTogc3RyaW5nO1xyXG4gICAgdG86IHN0cmluZzsgLy9lLmcuIFwiSm9zZWYgTm92YWtcIjxqb3NlZkBsbS5jej4sXCJKYW5hIEtcIjxqYW5hQGxtLmN6PlxyXG4gICAgY2M/OiBzdHJpbmc7XHJcbiAgICBiY2M/OiBzdHJpbmc7XHJcbiAgICBpc0JvZHlIdG1sPzogYm9vbGVhbjtcclxuICAgIGJvZHk6IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gICAgc3ViamVjdDogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbmRFTWFpbChlbWFpbDogc2VuZEVtYWlsSU4sIGNvbXBsZXRlZDogbGliLlRDYWxsYmFjaykge1xyXG4gICAgZW1haWwuaXNCb2R5SHRtbCA9IHR5cGVvZiBlbWFpbC5ib2R5ICE9IFwic3RyaW5nXCI7XHJcbiAgICBpZiAoZW1haWwuaXNCb2R5SHRtbCkgZW1haWwuYm9keSA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGVtYWlsLmJvZHkgYXMgSlNYLkVsZW1lbnQpO1xyXG4gICAgc2VydmljZXMuY2FsbFJlcXVlc3QoJ2xpYnMvc2VydmljZS1lbWFpbGVyJywgZW1haWwpLnRoZW4oKCkgPT4gY29tcGxldGVkKCkpLmNhdGNoKGVyciA9PiB7IHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGVycik7IH0pO1xyXG4gIH1cclxuXHJcbiAgLy9hbGVydChSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cCg8ZGl2Pnh4eDwvZGl2PikpO1xyXG4gIC8vc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgLy8gIGRlYnVnZ2VyO1xyXG4gIC8vICBhbGVydChSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cCg8ZGl2Pnh4eDwvZGl2PikpO1xyXG4gIC8vfSk7XHJcblxyXG59IiwibmFtZXNwYWNlIHNlcnZpY2VzIHtcclxuICBleHBvcnQgaW50ZXJmYWNlIHNlcnZpY2VPVVQge1xyXG4gICAgZXJyb3I6c3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNhbGxSZXF1ZXN0PFRJTiwgVE9VVCBleHRlbmRzIHNlcnZpY2VPVVQ+KG1ldGhvZFBhdGg6c3RyaW5nLCBpblBhcjogVElOKTogUHJvbWlzZTxUT1VUPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICB2YXIgdXJsID0gYCR7bWV0aG9kUGF0aH0vc2VydmljZS5hc2h4P2A7XHJcbiAgICAgIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHZhciByZXNwID0geG1saHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgdmFyIHJlczogVE9VVCA9IHJlc3AgPyBKU09OLnBhcnNlKHJlc3ApIDogbnVsbDtcclxuICAgICAgICAgICAgICB2YXIgZXJyb3IgPSByZXMgPyByZXMuZXJyb3IgOiBudWxsO1xyXG4gICAgICAgICAgICAgIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTsgZWxzZSByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKG1zZykge1xyXG4gICAgICAgICAgICAgIHJlamVjdChgSlNPTiBleGNlcHRpb24gJHttc2d9IGF0ICR7dXJsfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgcmVqZWN0KGBTdGF0dXMgJHt4bWxodHRwLnN0YXR1c30gYXQgJHt1cmx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB4bWxodHRwLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICB4bWxodHRwLnNlbmQoaW5QYXIgPyBKU09OLnN0cmluZ2lmeShpblBhciwgbnVsbCwgMikgOiAnJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXX0=