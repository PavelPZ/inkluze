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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vTGliL2xpYnMvY29tbW9uL2xpYi50c3giLCIuLi8uLi9MaWIvbGlicy9jb21tb24vcmVhY3QtYm9vdHN0cmFwLnRzIiwiLi4vLi4vTGliL2xpYnMvY29tbW9uL3JlYWN0LWRvbS1zZXJ2ZXIudHMiLCIuLi8uLi9MaWIvbGlicy9mbHV4L3JvdXRlci50cyIsIi4uLy4uL0xpYi9saWJzL2ZsdXgvc2l0ZW1hcC50cyIsIi4uLy4uL0xpYi9saWJzL2ZsdXgvc2l0ZW1hcFJvdXRlci50c3giLCIuLi8uLi9MaWIvbGlicy9mb3Jtcy92YWxpZGF0b3IudHMiLCIuLi8uLi9MaWIvbGlicy9zZXJ2aWNlLWVtYWlsZXIvZW1haWxlci50c3giLCIuLi8uLi9MaWIvbGlicy9zZXJ2aWNlcy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFVLEdBQUcsQ0F1RFo7QUF2REQsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNiO1FBQStCLDZCQUFLO1FBQ2xDLG1CQUFZLEdBQVc7WUFDckIsa0JBQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxRQUFRLENBQUM7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDSCxnQkFBQztJQUFELENBQUMsQUFORCxDQUErQixLQUFLLEdBTW5DO0lBTlksYUFBUyxZQU1yQixDQUFBO0lBQ0Q7UUFBcUMsbUNBQVM7UUFDNUMseUJBQVksR0FBWTtZQUFJLGtCQUFNLGFBQVcsR0FBRyxjQUFXLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDakUsc0JBQUM7SUFBRCxDQUFDLEFBRkQsQ0FBcUMsU0FBUyxHQUU3QztJQUZZLG1CQUFlLGtCQUUzQixDQUFBO0lBR0Qsc0JBQTZCLFdBQXFCO1FBQ2hELElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcs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d0JBQzVDLENBQUM7b0JBQ0gsQ0FBQztvQkFBQyxJQUFJO3dCQUNKLE1BQU0sQ0FBQyxZQUFVLE9BQU8sQ0FBQyxNQUFNLFlBQU8sR0FBSyxDQUFDLENBQUM7Z0JBQ2pELENBQUM7WUFDSCxDQUFDLENBQUM7WUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXRCZSxvQkFBVyxjQXNCMUIsQ0FBQTtBQUNILENBQUMsRUE1QlMsUUFBUSxLQUFSLFFBQVEsUUE0QmpCIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGxpYiB7XHJcbiAgZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1zZzogc3RyaW5nKSB7XHJcbiAgICAgIHN1cGVyKG1zZyk7XHJcbiAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBjbGFzcyBFTm90SW1wbGVtZW50ZWQgZXh0ZW5kcyBFeGNlcHRpb24ge1xyXG4gICAgY29uc3RydWN0b3IobXNnPzogc3RyaW5nKSB7IHN1cGVyKGBNaXNzaW5nICR7bXNnfSBvdmVycmlkZWApOyB9XHJcbiAgfVxyXG4gIGV4cG9ydCB0eXBlIFRDYWxsYmFjayA9ICgpID0+IHZvaWQ7XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc05hbWUoY29uc3RydWN0b3I6IEZ1bmN0aW9uKTogc3RyaW5nIHtcclxuICAgIGxldCByZXMgPSBjb25zdHJ1Y3RvclsnbmFtZSddOyBpZiAocmVzKSByZXR1cm4gcmVzO1xyXG4gICAgbGV0IGFyciA9IGNvbnN0cnVjdG9yLnRvU3RyaW5nKCkubWF0Y2goL2Z1bmN0aW9uXFxzKihcXHcrKS8pO1xyXG4gICAgcmV0dXJuIGFyciAmJiBhcnIubGVuZ3RoID09IDIgPyBhcnJbMV0gOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRQcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzIHsgXHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGtleT86IGFueTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZUV4dCh1cmw6IHN0cmluZywgdGl0bGU6IHN0cmluZywgbmV3V2luZG93PzogYm9vbGVhbik6IEpTWC5FbGVtZW50IHtcclxuICAgIHJldHVybiA8YSBocmVmPXsgdXJsIH0gdGFyZ2V0PXtuZXdXaW5kb3cgPyAnX2JsYW5rJyA6ICdfc2VsZid9PjxpIGNsYXNzTmFtZT0nZmEgZmEtZXh0ZXJuYWwtbGluayc+PC9pPiB7dGl0bGV9PC9hPjtcclxuICB9XHJcblxyXG4gIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83NjE2NDYxL2dlbmVyYXRlLWEtaGFzaC1mcm9tLXN0cmluZy1pbi1qYXZhc2NyaXB0LWpxdWVyeVxyXG4gIC8vaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9oYXNoX2Z1bmN0aW9uc1xyXG4gIC8qKlxyXG4gKiBDYWxjdWxhdGUgYSAzMiBiaXQgRk5WLTFhIGhhc2hcclxuICogRm91bmQgaGVyZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vdmFpb3JhYmJpdC81NjU3NTYxXHJcbiAqIFJlZi46IGh0dHA6Ly9pc3RoZS5jb20vY2hvbmdvL3RlY2gvY29tcC9mbnYvXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgdGhlIGlucHV0IHZhbHVlXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FzU3RyaW5nPWZhbHNlXSBzZXQgdG8gdHJ1ZSB0byByZXR1cm4gdGhlIGhhc2ggdmFsdWUgYXMgXHJcbiAqICAgICA4LWRpZ2l0IGhleCBzdHJpbmcgaW5zdGVhZCBvZiBhbiBpbnRlZ2VyXHJcbiAqIEBwYXJhbSB7aW50ZWdlcn0gW3NlZWRdIG9wdGlvbmFsbHkgcGFzcyB0aGUgaGFzaCBvZiB0aGUgcHJldmlvdXMgY2h1bmtcclxuICogQHJldHVybnMge2ludGVnZXIgfCBzdHJpbmd9XHJcbiAqL1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBoYXNoKHN0cjpzdHJpbmcsIGFzU3RyaW5nPzpib29sZWFuLCBzZWVkPzpudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgLypqc2hpbnQgYml0d2lzZTpmYWxzZSAqL1xyXG4gICAgbGV0IGksIGwsIGh2YWwgPSAoc2VlZCA9PT0gdW5kZWZpbmVkKSA/IDB4ODExYzlkYzUgOiBzZWVkO1xyXG5cclxuICAgIGZvciAoaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGh2YWwgXj0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgIGh2YWwgKz0gKGh2YWwgPDwgMSkgKyAoaHZhbCA8PCA0KSArIChodmFsIDw8IDcpICsgKGh2YWwgPDwgOCkgKyAoaHZhbCA8PCAyNCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXNTdHJpbmcpIHJldHVybiAoXCIwMDAwMDAwXCIgKyAoaHZhbCA+Pj4gMCkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTgpOyAvLyBDb252ZXJ0IHRvIDggZGlnaXQgaGV4IHN0cmluZ1xyXG4gICAgZWxzZSByZXR1cm4gaHZhbCA+Pj4gMDtcclxuICB9XHJcblxyXG59IiwiY29uc3QgQnV0dG9uID0gUmVhY3RCb290c3RyYXAuQnV0dG9uOyBcclxuY29uc3QgTmF2YmFyID0gUmVhY3RCb290c3RyYXAuTmF2YmFyOyBcclxuY29uc3QgTmF2ID0gUmVhY3RCb290c3RyYXAuTmF2OyBcclxuY29uc3QgTmF2SXRlbSA9IFJlYWN0Qm9vdHN0cmFwLk5hdkl0ZW07IFxyXG5jb25zdCBOYXZEcm9wZG93biA9IFJlYWN0Qm9vdHN0cmFwLk5hdkRyb3Bkb3duO1xyXG5jb25zdCBNZW51SXRlbSA9IFJlYWN0Qm9vdHN0cmFwLk1lbnVJdGVtO1xyXG5jb25zdCBCcmVhZGNydW1iID0gUmVhY3RCb290c3RyYXAuQnJlYWRjcnVtYjtcclxuY29uc3QgTW9kYWwgPSBSZWFjdEJvb3RzdHJhcC5Nb2RhbDtcclxuY29uc3QgQ29sID0gUmVhY3RCb290c3RyYXAuQ29sO1xyXG5jb25zdCBSb3cgPSBSZWFjdEJvb3RzdHJhcC5Sb3c7XHJcbmNvbnN0IEdyaWQgPSBSZWFjdEJvb3RzdHJhcC5HcmlkO1xyXG5jb25zdCBDbGVhcmZpeCA9IFJlYWN0Qm9vdHN0cmFwLkNsZWFyZml4O1xyXG5jb25zdCBMYWJlbCA9IFJlYWN0Qm9vdHN0cmFwLkxhYmVsO1xyXG5jb25zdCBQYW5lbCA9IFJlYWN0Qm9vdHN0cmFwLlBhbmVsO1xyXG5jb25zdCBQYW5lbEdyb3VwID0gUmVhY3RCb290c3RyYXAuUGFuZWxHcm91cDtcclxuY29uc3QgRm9ybUdyb3VwID0gUmVhY3RCb290c3RyYXAuRm9ybUdyb3VwO1xyXG5jb25zdCBIZWxwQmxvY2sgPSBSZWFjdEJvb3RzdHJhcC5IZWxwQmxvY2s7XHJcbmNvbnN0IEZvcm1Db250cm9sID0gUmVhY3RCb290c3RyYXAuRm9ybUNvbnRyb2w7XHJcbmNvbnN0IENvbnRyb2xMYWJlbCA9IFJlYWN0Qm9vdHN0cmFwLkNvbnRyb2xMYWJlbDtcclxuY29uc3QgQWNjb3JkaW9uID0gUmVhY3RCb290c3RyYXAuQWNjb3JkaW9uO1xyXG5jb25zdCBSYWRpbyA9IFJlYWN0Qm9vdHN0cmFwLlJhZGlvO1xyXG5cclxuXHJcblxyXG5cclxuIiwiaW50ZXJmYWNlIElET01TZXJ2ZXIge1xyXG4gIHJlbmRlclRvU3RyaW5nKGVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KTogc3RyaW5nO1xyXG4gIHJlbmRlclRvU3RhdGljTWFya3VwKGVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KTogc3RyaW5nO1xyXG59XHJcblxyXG52YXIgUmVhY3RET01TZXJ2ZXI6IElET01TZXJ2ZXIgPSBSZWFjdFsnX19TRUNSRVRfRE9NX1NFUlZFUl9ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEJ107IiwibmFtZXNwYWNlIHJvdXRlciB7XHJcblxyXG4gIC8vZGlmb3RuaSByb3V0ZSBwcm8gcHJpcGFkLCB6ZSBqZSBVUkwgcHJhemRuYVxyXG4gIGV4cG9ydCB2YXIgZ2V0U3RhcnRSb3V0ZTogKCkgPT4gVFJvdXRlQWN0aW9uUGFyOyBcclxuXHJcbiAgLy9ib290IHJvdXRlcnVcclxuICBleHBvcnQgZnVuY3Rpb24gYm9vdEFwcCgpOiBUUm91dGVBY3Rpb25QYXIgeyByb290Um91dGVCaW5kKGRlY29kZUZ1bGxVcmwoKSwgZmFsc2UpOyByZXR1cm4gcm91dGU7IH1cclxuXHJcbiAgLy9uYXZpZ2FjZSBuYSByb3V0ZVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZShyb3V0ZXM6IFRSb3V0ZUFjdGlvblBhcikgeyByZXR1cm4gcm9vdFJvdXRlQmluZChyb3V0ZXMsIHRydWUpOyB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVXJsKHJvdXRlczogVFJvdXRlQWN0aW9uUGFyKTogc3RyaW5nIHsgcmV0dXJuIGVuY29kZUZ1bGxVcmwocm91dGVzKTsgfVxyXG5cclxuICAvL3JvdXRlIGNoYW5nZWQgbm90aWZpY2F0aW9uXHJcbiAgZXhwb3J0IHZhciBvblJvdXRlQ2hhbmdlZDogKHJvdXRlOiBUUm91dGVBY3Rpb25QYXIpID0+IHZvaWQ7XHJcblxyXG4gIC8vY29uZmlnXHJcbiAgZXhwb3J0IHZhciAkaXNIYXNoUm91dGVyID0gZmFsc2U7IC8vaGFzaCBvciBzbGFzaCByb3V0ZSBkZWxpbWl0ZXJcclxuICBleHBvcnQgdmFyICRiYXNpY1VybCA9IGdldEJhc2ljVXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTsgLy9jYXN0IFVSTCBwcmVkIHJvdXRlIHBhcmFtYXR0ZXJcclxuXHJcbiAgLy9yb291dGUgb2JqZWt0IHN0cnVjdHVyZVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIHN0b3JlSWQ/OiBzdHJpbmc7XHJcbiAgICBob29rSWQ/OiBzdHJpbmc7IC8vbmF6ZXYgcHJvcGVydHkgdiBob29rLnBhcmVudCBTdG9yZSwgb2JzYWh1amljaSBSb3V0ZUhvb2tEaXNwYXRjaGVyLiAhaG9va0lkID0+IHJvdXRlRGVmYXVsdFByb3BOYW1lIHByb3BlcnR5XHJcbiAgICBwYXI/OiB7fTsgLy88c3RvcmVJZD4ucm91dGVBY3Rpb24ocGFyLCBob29rSWQpXHJcbiAgICByb3V0ZUhvb2tEZWZhdWx0PzogVFJvdXRlQWN0aW9uUGFyOyAvL2RpZm90bmkgY2hpbGQgcm91dGUgaG9va1xyXG4gICAgLy8uLi4gZGFsc2ksIG5hbWVkIHJvdXRlIGhvb2tcclxuICB9XHJcblxyXG5cclxuICAvLyoqKioqKioqKioqKioqKioqIHJlZnJlc2ggdmlldyBvbiByb3V0ZSBjaGFuZ2VcclxuICAvL2FrdHVhbG5pIHJvdXRlIG9iamVrdFxyXG4gIHZhciByb3V0ZTogVFJvdXRlQWN0aW9uUGFyO1xyXG5cclxuICBmdW5jdGlvbiByb290Um91dGVCaW5kKHJvdXRlczogVFJvdXRlQWN0aW9uUGFyIC8qbnVsbCA9PiBzdGFydCByb3V0ZSovLCB3aXRoUHVzdFN0YXRlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXJvdXRlcykgcm91dGVzID0gZ2V0U3RhcnRSb3V0ZSA/IGdldFN0YXJ0Um91dGUoKSA6IG51bGw7IGlmICghcm91dGVzKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihgbWlzc2luZyByb3V0ZXNgKTtcclxuICAgIHJvdXRlID0gcm91dGVzO1xyXG4gICAgaWYgKG9uUm91dGVDaGFuZ2VkKSBvblJvdXRlQ2hhbmdlZChyb3V0ZXMpO1xyXG4gICAgaWYgKHdpdGhQdXN0U3RhdGUpIHB1c2hTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8qKioqKioqKioqKioqKioqKiBQT1BTVEFURSBFVkVOVFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZXYgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYD4gcG9wc3RhdGU6ICR7d2luZG93LmxvY2F0aW9uLmhyZWZ9YCk7XHJcbiAgICByb290Um91dGVCaW5kKGRlY29kZUZ1bGxVcmwoKSwgZmFsc2UpO1xyXG4gIH0pO1xyXG5cclxuICAvL21vZGlmeSBicm93c2VyIFVSTFxyXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZSgpIHtcclxuICAgIGxldCB1cmxTdHIgPSBlbmNvZGVGdWxsVXJsKHJvdXRlKTtcclxuICAgIGNvbnNvbGUubG9nKGA+IHB1c2hTdGF0ZTogJHt1cmxTdHJ9YCk7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmxTdHIpO1xyXG4gIH1cclxuXHJcbiAgLy9yb3V0YSBwYXJzIGFyZSBhZnRlciBcIi5odG1sXCIgdXJsIHBhcnRcclxuICBmdW5jdGlvbiBnZXRCYXNpY1VybChzdGFydFVybDogc3RyaW5nKTogc3RyaW5nIHsgbGV0IGlkeCA9IHN0YXJ0VXJsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignLmh0bWwnKTsgcmV0dXJuIGlkeCA+PSAwID8gc3RhcnRVcmwuc3Vic3RyKDAsIGlkeCArIDUpIDogc3RhcnRVcmw7IH1cclxuXHJcbiAgdmFyIHJvdXRlUGFySWdub3JlcyA9IFsnc3RvcmVJZCcsICdob29rSWQnLCAncGFyJ107XHJcbiAgdmFyIHJvdXRlSG9va0RlZmF1bHROYW1lID0gJ3JvdXRlSG9va0RlZmF1bHQnO1xyXG5cclxuICBmdW5jdGlvbiBlbmNvZGVVcmwoc3Q6IFRSb3V0ZUFjdGlvblBhcik6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBlbmNvZGVVcmxMb3cocmVzLCBzdCwgbnVsbCk7XHJcbiAgICBsZXQgdXJsID0gcmVzLmpvaW4oJycpO1xyXG4gICAgcmV0dXJuIGNsZWFyU2xhc2hlcyh1cmwucmVwbGFjZSgvKFxcJFxcLykqJC9nLCAnJykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZW5jb2RlRnVsbFVybChzdDogVFJvdXRlQWN0aW9uUGFyKTogc3RyaW5nIHtcclxuICAgIGxldCB1cmxTdHIgPSBzdCA/IGVuY29kZVVybChzdCkgOiBudWxsO1xyXG4gICAgLy9yZXR1cm4gJGJhc2ljVXJsICsgKHVybFN0ciA/ICgkaXNIYXNoUm91dGVyID8gJyMnIDogJy8nKSArIHVybFN0ciA6ICcnKTtcclxuICAgIHJldHVybiAkYmFzaWNVcmwgKyAodXJsU3RyID8gKCRpc0hhc2hSb3V0ZXIgPyAnIycgOiAnPycpICsgdXJsU3RyIDogJycpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlRnVsbFVybCh1cmw/OiBzdHJpbmcpOiBUUm91dGVBY3Rpb25QYXIge1xyXG4gICAgcmV0dXJuIGRlY29kZVVybChkZWNvZGVVcmxQYXJ0KHVybCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlVXJsUGFydCh1cmw/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgaWYgKCF1cmwudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCRiYXNpY1VybCkpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBsb2NhdGlvbi5ocmVmIGRvZXMgbm90IHN0YXJ0IHdpdGggJHskYmFzaWNVcmx9YCk7XHJcbiAgICByZXR1cm4gY2xlYXJTbGFzaGVzKHVybC5zdWJzdHIoJGJhc2ljVXJsLmxlbmd0aCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVjb2RlVXJsKHVybD86IHN0cmluZyk6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBpZiAoIXVybCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gZGVjb2RlVXJsTG93KHVybCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVSb3V0ZShzdG9yZUlkOiBzdHJpbmcsIHBhcj86IHt9LCByb3V0ZUhvb2tEZWZhdWx0PzogVFJvdXRlQWN0aW9uUGFyLCBvdGhlckhvb2tzPzogeyBbbmFtZTogc3RyaW5nXTogVFJvdXRlQWN0aW9uUGFyOyB9KTogVFJvdXRlQWN0aW9uUGFyIHtcclxuICAgIGxldCByZXM6IFRSb3V0ZUFjdGlvblBhciA9IHsgc3RvcmVJZDogc3RvcmVJZCwgcGFyOiBwYXIgfTtcclxuICAgIGlmIChyb3V0ZUhvb2tEZWZhdWx0KSB7IHJlcy5yb3V0ZUhvb2tEZWZhdWx0ID0gcm91dGVIb29rRGVmYXVsdDsgZGVsZXRlIHJvdXRlSG9va0RlZmF1bHQuaG9va0lkOyB9XHJcbiAgICBpZiAob3RoZXJIb29rcylcclxuICAgICAgZm9yIChsZXQgcCBpbiBvdGhlckhvb2tzKSB7IGxldCBoayA9IHJlc1twXSA9IG90aGVySG9va3NbcF07IGhrLmhvb2tJZCA9IHA7IH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDaGlsZFJvdXRlUHJvcE5hbWVzKHN0OiBUUm91dGVBY3Rpb25QYXIpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIGxldCBwcm9wcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgcCBpbiBzdCkgaWYgKHJvdXRlUGFySWdub3Jlcy5pbmRleE9mKHApIDwgMCkgcHJvcHMucHVzaChwKTtcclxuICAgIHJldHVybiBwcm9wcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlY29kZVVybExvdyh1cmw6IHN0cmluZyk6IFRSb3V0ZUFjdGlvblBhciB7XHJcbiAgICBpZiAoISRpc0hhc2hSb3V0ZXIpIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xyXG4gICAgdXJsID0gJ3snICsgdXJsLnJlcGxhY2UoL1xcJFxcLy9nLCAnfScpLnJlcGxhY2UoL1xcLy9nLCAneycpO1xyXG4gICAgbGV0IHN0YWNrOiBBcnJheTxJRGVjb2RlU3RhY2s+ID0gW107IGxldCBpID0gMDsgbGV0IGNoOiBzdHJpbmc7IGxldCByZXM6IElEZWNvZGVTdGFjayA9IG51bGw7XHJcbiAgICBsZXQgcGFyc2VSb3V0ZSA9IChlbmRJZHg6IG51bWJlciwgc3Q6IElEZWNvZGVTdGFjaykgPT4ge1xyXG4gICAgICBsZXQgcyA9IHVybC5zdWJzdHJpbmcoc3Qub3BlbklkeCwgZW5kSWR4IC0gMSk7XHJcbiAgICAgIGxldCBwYXJ0cyA9IHMuc3BsaXQoJzsnKTtcclxuICAgICAgbGV0IHByb3BDb21wID0gcGFydHNbMF0uc3BsaXQoJy0nKTsgaWYgKHByb3BDb21wLmxlbmd0aCA+IDIpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKCdwcm9wQ29tcC5sZW5ndGggPiAyJyk7XHJcbiAgICAgIHN0Lmhvb2tJZCA9IHByb3BDb21wLmxlbmd0aCA9PSAxID8gbnVsbCA6IHByb3BDb21wWzBdO1xyXG4gICAgICBzdC5yb3V0ZSA9IHsgc3RvcmVJZDogcHJvcENvbXAubGVuZ3RoID09IDEgPyBwcm9wQ29tcFswXSA6IHByb3BDb21wWzFdIH07XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBudiA9IHBhcnRzW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgaWYgKCFzdC5yb3V0ZS5wYXIpIHN0LnJvdXRlLnBhciA9IHt9O1xyXG4gICAgICAgIHN0LnJvdXRlLnBhcltudlswXV0gPSBkZWNvZGVVUklDb21wb25lbnQobnZbMV0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgaWYgKGkgPj0gdXJsLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPj0gMSkgY2ggPSAnfSc7IGVsc2UgYnJlYWs7XHJcbiAgICAgICAgaSA9IHVybC5sZW5ndGggKyAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoID0gdXJsLmNoYXJBdChpKTsgaSsrO1xyXG4gICAgICB9XHJcbiAgICAgIHN3aXRjaCAoY2gpIHtcclxuICAgICAgICBjYXNlICd7JzpcclxuICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggPT0gMCkgeyByZXMgPSB7IG9wZW5JZHg6IGkgfTsgc3RhY2sucHVzaChyZXMpOyBicmVhazsgfSAvL3Jvb3RcclxuICAgICAgICAgIGxldCBsYXN0ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBpZiAoIWxhc3Qucm91dGUpIHBhcnNlUm91dGUoaSwgbGFzdCk7IC8venByYWN1aiBzZWt2ZW5jaSBtZXppIHt4eHh4e1xyXG4gICAgICAgICAgc3RhY2sucHVzaCh7IG9wZW5JZHg6IGkgfSk7IC8vemFjbmkgbm92eSBzdGFja1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnfSc6XHJcbiAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID09IDApIGJyZWFrO1xyXG4gICAgICAgICAgbGV0IGxhc3QyID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBpZiAoIWxhc3QyLnJvdXRlKSBwYXJzZVJvdXRlKGksIGxhc3QyKTsgLy96cHJhY3VqIHNla3ZlbmNpIG1lemkge3h4eHh9LCB4eHggamUgYmV6IHsgaSB9XHJcbiAgICAgICAgICBsZXQgcGFyUHJvcCA9IGxhc3QyLmhvb2tJZCA/IGxhc3QyLmhvb2tJZCA6IHJvdXRlSG9va0RlZmF1bHROYW1lO1xyXG4gICAgICAgICAgaWYgKHBhclByb3AgIT0gcm91dGVIb29rRGVmYXVsdE5hbWUpIGxhc3QyLnJvdXRlLmhvb2tJZCA9IHBhclByb3A7XHJcbiAgICAgICAgICAvL25hdmF6YW5pIG5hIHBhcmVudCByb3V0ZVxyXG4gICAgICAgICAgbGV0IHBhciA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDJdO1xyXG4gICAgICAgICAgaWYgKHBhcikgcGFyLnJvdXRlW3BhclByb3BdID0gbGFzdDIucm91dGU7XHJcbiAgICAgICAgICAvL3Z5bmRlaiB6ZSBzdGFja3VcclxuICAgICAgICAgIHN0YWNrLnNwbGljZShzdGFjay5sZW5ndGggLSAxLCAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnJvdXRlO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJmYWNlIElEZWNvZGVTdGFjayB7XHJcbiAgICBvcGVuSWR4OiBudW1iZXI7XHJcbiAgICByb3V0ZT86IFRSb3V0ZUFjdGlvblBhcjtcclxuICAgIGhvb2tJZD86IHN0cmluZztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVuY29kZVVybExvdyhyZXM6IEFycmF5PHN0cmluZz4sIHN0OiBUUm91dGVBY3Rpb25QYXIsIHBhcmVudFByb3BOYW1lPzogc3RyaW5nKSB7XHJcbiAgICByZXMucHVzaCgocGFyZW50UHJvcE5hbWUgPyBwYXJlbnRQcm9wTmFtZSArICctJyA6ICcnKSArIChzdC5zdG9yZUlkID8gc3Quc3RvcmVJZCA6ICcnKSk7XHJcbiAgICBpZiAoc3QucGFyKSB7XHJcbiAgICAgIGxldCBwcm9wcyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBwIGluIHN0LnBhcikgcHJvcHMucHVzaChwKTtcclxuICAgICAgcHJvcHMuc29ydCgpLmZvckVhY2gocCA9PiByZXMucHVzaChgOyR7cH09JHtlbmNvZGVVUklDb21wb25lbnQoc3QucGFyW3BdKX1gKSk7XHJcbiAgICB9XHJcbiAgICBnZXRDaGlsZFJvdXRlUHJvcE5hbWVzKHN0KS5zb3J0KCkuZm9yRWFjaChwID0+IHtcclxuICAgICAgcmVzLnB1c2goJy8nKTtcclxuICAgICAgZW5jb2RlVXJsTG93KHJlcywgc3RbcF0sIHAgPT0gcm91dGVIb29rRGVmYXVsdE5hbWUgPyBudWxsIDogcCk7XHJcbiAgICAgIHJlcy5wdXNoKCckLycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhclNsYXNoZXMocGF0aDogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKS5yZXBsYWNlKC9eW1xcI1xcL1xcP10/LywgJycpOyB9XHJcbn0iLCJuYW1lc3BhY2Ugc2l0ZSB7XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSU5vZGUge1xyXG4gICAgaWQ6IHN0cmluZyB8IG51bWJlcjtcclxuICAgIHRpdGxlPzogc3RyaW5nOyAvL2NoeWJpLWxpLCB2ZXptZSBzZSB6IElUYWIudGl0bGUgXHJcbiAgICBiclRpdGxlPzpzdHJpbmc7IC8vdGl0bGUgcHJvIGJyZWFkY3J1bWJcclxuICAgIGNyZWF0ZVBhZ2U6IChyb3V0ZVBhcikgPT4gSlNYLkVsZW1lbnQsXHJcbiAgICBwYXRoPzogc3RyaW5nO1xyXG4gICAgY2hpbGRzPzogQXJyYXk8SU5vZGU+O1xyXG4gICAgcGFyZW50PzogSU5vZGU7XHJcbiAgICBsYXJnZUxvZ28/OiBib29sZWFuOyAvL3ZlbGtlIGxvZ28gdiBjaGxhZGljaVxyXG4gICAgdGFiPzogSVRhYjsgLy9teSB0YWJcclxuICAgIG5vVGl0bGU/OmJvb2xlYW47IC8vcGFnZSB0ZW1wbGF0ZSBuZWdlbmVydWplIHRpdGxlIHN0cmFua3lcclxuICB9XHJcbiAgZXhwb3J0IHZhciByb290OiBJTm9kZTtcclxuICBleHBvcnQgdmFyIG5vZGVzOiB7IFtwYXRoOiBzdHJpbmddOiBJTm9kZTsgfSA9IHt9O1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gYm9vdEFwcCgpIHtcclxuICAgIGZ1bmN0aW9uIGluaXROb2RlKHBhcmVudDogSU5vZGUsIG5kOiBJTm9kZSkge1xyXG4gICAgICBuZC5jaGlsZHMgPSBub2RlQ2hpbGRzKG5kKTtcclxuICAgICAgbmQucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICBpZiAoIW5kLnRhYikgbmQudGFiID0gbmQucGFyZW50LnRhYjtcclxuICAgICAgbmQucGF0aCA9IGdldE5vZGVQYXRoKG5kKTtcclxuICAgICAgaWYgKG5vZGVzW25kLnBhdGhdKSB0aHJvdyBuZXcgbGliLkV4Y2VwdGlvbihgU2l0ZU1hcCBub2RlICR7bmQucGF0aH0gYWxyZWFkeSBleGlzdHMhYCk7XHJcbiAgICAgIG5vZGVzW25kLnBhdGhdID0gbmQ7XHJcbiAgICAgIGlmIChuZC5jaGlsZHMpIG5kLmNoaWxkcy5mb3JFYWNoKG4gPT4gaW5pdE5vZGUobmQsIG4pKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGluaXRUYWJzKCkge1xyXG4gICAgICB0YWJzLiRjaGlsZHMgPSBbXTsgdmFyIGlkeCA9IDA7XHJcbiAgICAgIGZvciAodmFyIHAgaW4gdGFicykge1xyXG4gICAgICAgIGlmIChwLnN0YXJ0c1dpdGgoJyQnKSkgY29udGludWU7XHJcbiAgICAgICAgdmFyIHQ6IElUYWIgPSB0YWJzW3BdOyB0YWJzLiRjaGlsZHMucHVzaCh0KTsgdC5pZHggPSBpZHgrKztcclxuICAgICAgICBpZiAoIXQucm9vdE5vZGUpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKCchdC5yb290Tm9kZScpO1xyXG4gICAgICAgIHQucm9vdE5vZGUudGFiID0gdDtcclxuICAgICAgICBpZiAoIXQucm9vdE5vZGUudGl0bGUpIHQucm9vdE5vZGUudGl0bGUgPSB0LnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbml0VGFicygpO1xyXG4gICAgaW5pdE5vZGUobnVsbCwgcm9vdCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbm9kZVBhcmVudHMobmQ6IElOb2RlLCBpZ25vcmVTZWxmPzogYm9vbGVhbik6IEFycmF5PElOb2RlPiB7XHJcbiAgICB2YXIgcmVzOiBub2RlUGFyZW50c1Jlc3VsdCA9IHt9O1xyXG4gICAgbm9kZVBhcmVudHNMb3cobmQsIHJlcywgaWdub3JlU2VsZik7XHJcbiAgICByZXR1cm4gcmVzLnJlcy5yZXZlcnNlKCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElUYWJzIHtcclxuICAgICRjaGlsZHM/OiBBcnJheTxJVGFiPjtcclxuICB9XHJcbiAgZXhwb3J0IGludGVyZmFjZSBJVGFiIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpZHg/OiBudW1iZXI7XHJcbiAgICByb290Tm9kZT86IElOb2RlOyAvL2hsYXZuaSBzdHJhbmthIHBybyB0YWJcclxuICB9XHJcbiAgZXhwb3J0IHZhciB0YWJzOiBJVGFicztcclxuXHJcbiAgZXhwb3J0IHZhciBnZXRCbGFua1BhZ2U6IChyb3V0ZVBhcikgPT4gSlNYLkVsZW1lbnQ7O1xyXG5cclxuICAvLyoqKioqKioqKioqIFByaXZhdGVcclxuXHJcbiAgZnVuY3Rpb24gbm9kZUNoaWxkcyhuZDogSU5vZGUpOiBBcnJheTxJTm9kZT4ge1xyXG4gICAgdmFyIHJlczogQXJyYXk8SU5vZGU+ID0gbnVsbDtcclxuICAgIGZvciAodmFyIHAgaW4gbmQpIHtcclxuICAgICAgdmFyIHN1Yk5kOiBJTm9kZSA9IG5kW3BdO1xyXG4gICAgICBpZiAoIXN1Yk5kIC8qfHwgIXN1Yk5kLnRpdGxlKi8gfHwgIXN1Yk5kLmlkKSBjb250aW51ZTtcclxuICAgICAgaWYgKCFyZXMpIHJlcyA9IFtzdWJOZF07IGVsc2UgcmVzLnB1c2goc3ViTmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG5vZGVQYXJlbnRzTG93KG5kOiBJTm9kZSwgcmVzOiBub2RlUGFyZW50c1Jlc3VsdCwgaWdub3JlU2VsZjogYm9vbGVhbikge1xyXG4gICAgaWYgKCFyZXMucmVzKSByZXMucmVzID0gaWdub3JlU2VsZiA/IFtdIDogW25kXTtcclxuICAgIHdoaWxlIChuZC5wYXJlbnQpIHsgbmQgPSBuZC5wYXJlbnQ7IHJlcy5yZXMucHVzaChuZCk7IH1cclxuICB9XHJcbiAgaW50ZXJmYWNlIG5vZGVQYXJlbnRzUmVzdWx0IHsgcmVzID86IEFycmF5PElOb2RlPiB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE5vZGVQYXRoKG5kOiBJTm9kZSk6IHN0cmluZyB7IHJldHVybiBub2RlUGFyZW50cyhuZCkubWFwKG4gPT4gbi5pZCkuam9pbignfCcpOyB9XHJcbn0iLCJuYW1lc3BhY2Ugc2l0ZW1hcFJvdXRlciB7XHJcblxyXG4gIGV4cG9ydCB2YXIgY2hpbGRDb250ZXh0VHlwZXM6IFJlYWN0LlZhbGlkYXRpb25NYXA8YW55PiA9IHtcclxuICAgIHNpdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICByb3V0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBBcHBSb290Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSb290UHJvcHMsIHJvdXRlci5UUm91dGVBY3Rpb25QYXI+IHtcclxuICAgIGNvbnN0cnVjdG9yKHA6IElSb290UHJvcHMsIGN0eCkge1xyXG4gICAgICBzdXBlcihwLCBjdHgpO1xyXG4gICAgICB0aGlzLnN0YXRlID0gcC5pbml0Um91dGU7XHJcbiAgICAgIHJvb3RDb21wID0gdGhpcztcclxuICAgIH1cclxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICAgIHRoaXMuYWN0Tm9kZSA9IHNpdGUubm9kZXNbdGhpcy5zdGF0ZS5zdG9yZUlkXTtcclxuICAgICAgaWYgKCF0aGlzLmFjdE5vZGUpIHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGBOb2RlIHBhdGggJHt0aGlzLnN0YXRlLnN0b3JlSWR9IG5vdCBmb3VuZGApO1xyXG4gICAgICB2YXIgcmVzID0gKHRoaXMuYWN0Tm9kZS5jcmVhdGVQYWdlID8gdGhpcy5hY3ROb2RlLmNyZWF0ZVBhZ2UgOiBzaXRlLmdldEJsYW5rUGFnZSkoKHRoaXMuc3RhdGUucGFyKSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBhY3ROb2RlOiBzaXRlLklOb2RlO1xyXG5cclxuICAgIGdldENoaWxkQ29udGV4dCgpOiBJQ29udGV4dCB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2l0ZTogdGhpcy5hY3ROb2RlLFxyXG4gICAgICAgIHJvdXRlOiB0aGlzLnN0YXRlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVVybDxUPihub2RlOiBzaXRlLklOb2RlLCBwYXI/OiBUKSB7IHJldHVybiByb3V0ZXIubmF2aWdhdGVVcmwoeyBzdG9yZUlkOiBub2RlLnBhdGgsIHBhcjogcGFyIH0pOyB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVGFnPFQ+KG5vZGU6IHNpdGUuSU5vZGUsIHBhcj86IFQpOiBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gPGEgaHJlZj17bmF2aWdhdGVVcmwobm9kZSwgcGFyKSB9Pntub2RlLnRpdGxlfTwvYT47XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudDxQPih0eXBlOiBSZWFjdC5Db21wb25lbnRDbGFzczxQPiB8IFJlYWN0LlNGQzxQPiwgcm91dGVQYXIsIHByb3BzOiBQICYgUmVhY3QuQXR0cmlidXRlcywgLi4uY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVtdKTogUmVhY3QuUmVhY3RFbGVtZW50PFA+IHtcclxuICAgIHZhciBwYXI6IFAgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgcm91dGVQYXIpO1xyXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodHlwZSwgcGFyKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBib290QXBwKGNvbnRlbnQ6IEhUTUxFbGVtZW50LCBzaXRlbWFwQ3JlYXRvcjogbGliLlRDYWxsYmFjaykge1xyXG4gICAgc2l0ZW1hcENyZWF0b3IoKTtcclxuICAgIHNpdGUuYm9vdEFwcCgpO1xyXG4gICAgdmFyIHN0YXJ0Um91dGUgPSByb3V0ZXIuYm9vdEFwcCgpO1xyXG4gICAgUmVhY3RET00ucmVuZGVyKDxBcHBSb290Q29tcG9uZW50IGluaXRSb3V0ZT17IHN0YXJ0Um91dGUgfSAvPiwgY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgaW50ZXJmYWNlIElDb250ZXh0IHtcclxuICAgIHNpdGU6IHNpdGUuSU5vZGU7XHJcbiAgICByb3V0ZTogcm91dGVyLlRSb3V0ZUFjdGlvblBhclxyXG4gIH1cclxuXHJcbiAgLy8qKioqKioqKioqIFByaXZhdGVcclxuICB2YXIgcm9vdENvbXA6IEFwcFJvb3RDb21wb25lbnQ7XHJcbiAgZXhwb3J0IGludGVyZmFjZSBJUm9vdFByb3BzIHsgaW5pdFJvdXRlOiByb3V0ZXIuVFJvdXRlQWN0aW9uUGFyIH1cclxuXHJcbiAgcm91dGVyLmdldFN0YXJ0Um91dGUgPSAoKSA9PiB7IHJldHVybiB7IHN0b3JlSWQ6IHNpdGUucm9vdC5wYXRoIH07IH07XHJcbiAgcm91dGVyLm9uUm91dGVDaGFuZ2VkID0gcm91dGUgPT4geyBpZiAocm9vdENvbXApIHJvb3RDb21wLnNldFN0YXRlKHJvdXRlKTsgfTtcclxuXHJcbn0iLCJuYW1lc3BhY2UgdmFsaWRhdGlvbiB7XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkUGFycyB7XHJcbiAgICB0eXBlOiB0eXBlcztcclxuICAgIG1hc2s/OiBzdHJpbmc7IC8vcmVnZXhwIHBybyBzdHJpbmcgbWFza1xyXG4gICAgLy9zdHJpbmcgbGVuZ3RoXHJcbiAgICBtaW5MZW5ndGg/OiBudW1iZXIsXHJcbiAgICBtYXhMZW5ndGg/OiBudW1iZXIsXHJcbiAgICAvL251bWJlciBpbnRlcnZhbHNcclxuICAgIG1pbj86IG51bWJlcixcclxuICAgIG1heD86IG51bWJlcixcclxuICAgIGVxdWFsVG9JZD86IHN0cmluZztcclxuXHJcbiAgfVxyXG4gIGV4cG9ydCBlbnVtIHR5cGVzIHtcclxuICAgIG5vID0gMCxcclxuICAgIHJlcXVpcmVkID0gMHgxLFxyXG4gICAgZW1haWwgPSAweDIsXHJcbiAgICBudW1iZXIgPSAweDQsXHJcbiAgICBkaWdpdHMgPSAweDgsXHJcbiAgICBlcXVhbFRvID0gMHgxMCxcclxuICAgIHN0cmluZ0xlbmd0aCA9IDB4MjAsXHJcbiAgICBudW1iZXJSYW5nZSA9IDB4NDAsXHJcbiAgICBzdHJpbmdNYXNrID0gMHg4MCxcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSUlucHV0U3RhdGUgeyB2YWx1ZTogc3RyaW5nOyBibHVyZWQ/OiBib29sZWFuOyBlcnJvcj86IHN0cmluZzsgfVxyXG5cclxuICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBWQUxJREFURSBMT0dJQ1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gdmFsaWRhdGUodmFsaWRhdG9yOiBJVmFsaWRQYXJzLCBzdDogSUlucHV0U3RhdGUpIHtcclxuICAgIHZhciBsZW4gPSAhc3QudmFsdWUgPyAwIDogc3QudmFsdWUubGVuZ3RoO1xyXG4gICAgLy9SRVFVSVJFRFxyXG4gICAgaWYgKCh2YWxpZGF0b3IudHlwZSAmIHR5cGVzLnJlcXVpcmVkKSAhPSAwKSB7XHJcbiAgICAgIGlmIChsZW4gPCAxKSB7IHN0LmVycm9yID0gbWVzc2FnZXMucmVxdWlyZWQoKTsgcmV0dXJuOyB9XHJcbiAgICB9XHJcbiAgICAvL1NUUklORyBMRU5HVEhcclxuICAgIGlmICgodmFsaWRhdG9yLnR5cGUgJiB0eXBlcy5zdHJpbmdMZW5ndGgpICE9IDApIHtcclxuICAgICAgaWYgKHZhbGlkYXRvci5taW5MZW5ndGggJiYgdmFsaWRhdG9yLm1heExlbmd0aCkge1xyXG4gICAgICAgIGlmIChsZW4gPCB2YWxpZGF0b3IubWluTGVuZ3RoIHx8IGxlbiA+IHZhbGlkYXRvci5tYXhMZW5ndGgpIHsgc3QuZXJyb3IgPSBtZXNzYWdlcy5yYW5nZWxlbmd0aCh2YWxpZGF0b3IubWluTGVuZ3RoLCB2YWxpZGF0b3IubWF4TGVuZ3RoKTsgcmV0dXJuOyB9XHJcbiAgICAgIH0gZWxzZSBpZiAodmFsaWRhdG9yLm1pbkxlbmd0aCkge1xyXG4gICAgICAgIGlmIChsZW4gPCB2YWxpZGF0b3IubWluTGVuZ3RoKSB7IHN0LmVycm9yID0gbWVzc2FnZXMubWlubGVuZ3RoKHZhbGlkYXRvci5taW5MZW5ndGgpOyByZXR1cm47IH1cclxuICAgICAgfSBlbHNlIGlmICh2YWxpZGF0b3IubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGxlbiA+IHZhbGlkYXRvci5tYXhMZW5ndGgpIHsgc3QuZXJyb3IgPSBtZXNzYWdlcy5tYXhsZW5ndGgodmFsaWRhdG9yLm1heExlbmd0aCk7IHJldHVybjsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLy4uIHdpdGggTUFTS1xyXG4gICAgdmFyIG1hc2s6IFJlZ0V4cCA9IG51bGw7IHZhciBlcnJvcjogc3RyaW5nO1xyXG4gICAgaWYgKCh2YWxpZGF0b3IudHlwZSAmICh0eXBlcy5udW1iZXIgfCB0eXBlcy5udW1iZXJSYW5nZSkpICE9IDApIHtcclxuICAgICAgbWFzayA9IC9eKD86LT9cXGQrfC0/XFxkezEsM30oPzosXFxkezN9KSspPyg/OlxcLlxcZCspPyQvO1xyXG4gICAgICBlcnJvciA9IG1lc3NhZ2VzLm51bWJlcigpO1xyXG4gICAgfSBlbHNlIGlmICgodmFsaWRhdG9yLnR5cGUgJiB0eXBlcy5kaWdpdHMpICE9IDApIHtcclxuICAgICAgbWFzayA9IC9eXFxkKyQvO1xyXG4gICAgICBlcnJvciA9IG1lc3NhZ2VzLmRpZ2l0cygpO1xyXG4gICAgfSBlbHNlIGlmICgodmFsaWRhdG9yLnR5cGUgJiB0eXBlcy5lbWFpbCkgIT0gMCkge1xyXG4gICAgICBtYXNrID0gL15bYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC87XHJcbiAgICAgIGVycm9yID0gbWVzc2FnZXMuZW1haWwoKTtcclxuICAgIH1cclxuICAgIGlmIChtYXNrKSB7XHJcbiAgICAgIGlmIChsZW4gPT0gMCB8fCAhbWFzay50ZXN0KHN0LnZhbHVlKSkgeyBzdC5lcnJvciA9IGVycm9yOyByZXR1cm47IH1cclxuICAgIH1cclxuICAgIC8vTlVNQkVSIFJBTkdFXHJcbiAgICB2YXIgZGVmaW5lZCA9IHYgPT4gdHlwZW9mIHYgIT0gJ3VuZGVmaW5lZCc7XHJcbiAgICBpZiAoKHZhbGlkYXRvci50eXBlICYgdHlwZXMubnVtYmVyUmFuZ2UpICE9IDApIHtcclxuICAgICAgdmFyIG51bSA9IHBhcnNlRmxvYXQoc3QudmFsdWUpO1xyXG4gICAgICBpZiAoZGVmaW5lZCh2YWxpZGF0b3IubWluKSAmJiBkZWZpbmVkKHZhbGlkYXRvci5tYXgpKSB7XHJcbiAgICAgICAgaWYgKG51bSA8IHZhbGlkYXRvci5taW4gfHwgbnVtID4gdmFsaWRhdG9yLm1heCkgeyBzdC5lcnJvciA9IG1lc3NhZ2VzLnJhbmdlKHZhbGlkYXRvci5taW4sIHZhbGlkYXRvci5tYXgpOyByZXR1cm47IH1cclxuICAgICAgfSBlbHNlIGlmIChkZWZpbmVkKHZhbGlkYXRvci5taW4pKSB7XHJcbiAgICAgICAgaWYgKG51bSA8IHZhbGlkYXRvci5taW4pIHsgc3QuZXJyb3IgPSBtZXNzYWdlcy5taW4odmFsaWRhdG9yLm1pbik7IHJldHVybjsgfVxyXG4gICAgICB9IGVsc2UgaWYgKGRlZmluZWQodmFsaWRhdG9yLm1heCkpIHtcclxuICAgICAgICBpZiAobnVtID4gdmFsaWRhdG9yLm1heCkgeyBzdC5lcnJvciA9IG1lc3NhZ2VzLm1heCh2YWxpZGF0b3IubWF4KTsgcmV0dXJuOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCB2YXIgbWVzc2FnZXMgPSB7XHJcbiAgICByZXF1aXJlZDogKCkgPT4gXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlwiLFxyXG4gICAgcmVtb3RlOiAoKSA9PiBcIlBsZWFzZSBmaXggdGhpcyBmaWVsZC5cIixcclxuICAgIGVtYWlsOiAoKSA9PiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIsXHJcbiAgICB1cmw6ICgpID0+IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVJMLlwiLFxyXG4gICAgZGF0ZTogKCkgPT4gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLlwiLFxyXG4gICAgZGF0ZUlTTzogKCkgPT4gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlICggSVNPICkuXCIsXHJcbiAgICBudW1iZXI6ICgpID0+IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyLlwiLFxyXG4gICAgZGlnaXRzOiAoKSA9PiBcIlBsZWFzZSBlbnRlciBvbmx5IGRpZ2l0cy5cIixcclxuICAgIGVxdWFsVG86ICgpID0+IFwiUGxlYXNlIGVudGVyIHRoZSBzYW1lIHZhbHVlIGFnYWluLlwiLFxyXG4gICAgbWF4bGVuZ3RoOiAodjEpID0+IGBQbGVhc2UgZW50ZXIgbm8gbW9yZSB0aGFuICR7djF9IGNoYXJhY3RlcnMuYCxcclxuICAgIG1pbmxlbmd0aDogKHYxKSA9PiBgUGxlYXNlIGVudGVyIGF0IGxlYXN0ICR7djF9IGNoYXJhY3RlcnMuYCxcclxuICAgIHJhbmdlbGVuZ3RoOiAodjEsIHYyKSA9PiBgUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiAke3YxfSBhbmQgJHt2Mn0gY2hhcmFjdGVycyBsb25nLmAsXHJcbiAgICByYW5nZTogKHYxLCB2MikgPT4gYFBsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gJHt2MX0gYW5kICR7djJ9LmAsXHJcbiAgICBtYXg6ICh2MSkgPT4gYFBsZWFzZSBlbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAke3YxfS5gLFxyXG4gICAgbWluOiAodjEpID0+IGBQbGVhc2UgZW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHt2MX0uYFxyXG4gIH07XHJcblxyXG59IiwibmFtZXNwYWNlIHNlcnZpY2VzLmVtYWlsZXIge1xyXG4gIGV4cG9ydCBpbnRlcmZhY2Ugc2VuZEVtYWlsSU4ge1xyXG4gICAgZnJvbTogc3RyaW5nO1xyXG4gICAgdG86IHN0cmluZzsgLy9lLmcuIFwiSm9zZWYgTm92YWtcIjxqb3NlZkBsbS5jej4sXCJKYW5hIEtcIjxqYW5hQGxtLmN6PlxyXG4gICAgY2M/OiBzdHJpbmc7XHJcbiAgICBiY2M/OiBzdHJpbmc7XHJcbiAgICBpc0JvZHlIdG1sPzogYm9vbGVhbjtcclxuICAgIGJvZHk6IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gICAgc3ViamVjdDogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbmRFTWFpbChlbWFpbDogc2VuZEVtYWlsSU4sIGNvbXBsZXRlZDogbGliLlRDYWxsYmFjaykge1xyXG4gICAgZW1haWwuaXNCb2R5SHRtbCA9IHR5cGVvZiBlbWFpbC5ib2R5ICE9IFwic3RyaW5nXCI7XHJcbiAgICBpZiAoZW1haWwuaXNCb2R5SHRtbCkgZW1haWwuYm9keSA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGVtYWlsLmJvZHkgYXMgSlNYLkVsZW1lbnQpO1xyXG4gICAgc2VydmljZXMuY2FsbFJlcXVlc3QoJ2xpYnMvc2VydmljZS1lbWFpbGVyJywgZW1haWwpLnRoZW4oKCkgPT4gY29tcGxldGVkKCkpLmNhdGNoKGVyciA9PiB7IHRocm93IG5ldyBsaWIuRXhjZXB0aW9uKGVycik7IH0pO1xyXG4gIH1cclxuXHJcbiAgLy9hbGVydChSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cCg8ZGl2Pnh4eDwvZGl2PikpO1xyXG4gIC8vc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgLy8gIGRlYnVnZ2VyO1xyXG4gIC8vICBhbGVydChSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cCg8ZGl2Pnh4eDwvZGl2PikpO1xyXG4gIC8vfSk7XHJcblxyXG59IiwibmFtZXNwYWNlIHNlcnZpY2VzIHtcclxuICBleHBvcnQgaW50ZXJmYWNlIHNlcnZpY2VPVVQge1xyXG4gICAgZXJyb3I6c3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNhbGxSZXF1ZXN0PFRJTiwgVE9VVCBleHRlbmRzIHNlcnZpY2VPVVQ+KG1ldGhvZFBhdGg6c3RyaW5nLCBpblBhcjogVElOKTogUHJvbWlzZTxUT1VUPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICB2YXIgdXJsID0gYCR7bWV0aG9kUGF0aH0vc2VydmljZS5hc2h4P2A7XHJcbiAgICAgIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHZhciByZXNwID0geG1saHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgdmFyIHJlczogVE9VVCA9IHJlc3AgPyBKU09OLnBhcnNlKHJlc3ApIDogbnVsbDtcclxuICAgICAgICAgICAgICB2YXIgZXJyb3IgPSByZXMgPyByZXMuZXJyb3IgOiBudWxsO1xyXG4gICAgICAgICAgICAgIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTsgZWxzZSByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKG1zZykge1xyXG4gICAgICAgICAgICAgIHJlamVjdChgSlNPTiBleGNlcHRpb24gJHttc2d9IGF0ICR7dXJsfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgcmVqZWN0KGBTdGF0dXMgJHt4bWxodHRwLnN0YXR1c30gYXQgJHt1cmx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB4bWxodHRwLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICB4bWxodHRwLnNlbmQoaW5QYXIgPyBKU09OLnN0cmluZ2lmeShpblBhciwgbnVsbCwgMikgOiAnJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXX0=