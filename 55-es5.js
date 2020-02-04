function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js ***!
    \****************************************************************/

  /*! exports provided: ion_route, ion_route_redirect, ion_router, ion_router_link */

  /***/
  function node_modulesIonicCoreDistEsmIonRoute_4EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_route", function () {
      return Route;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_route_redirect", function () {
      return RouteRedirect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_router", function () {
      return Router;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_router_link", function () {
      return RouterLink;
    });
    /* harmony import */


    var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-ca0488fc.js */
    "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
    /* harmony import */


    var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers-46f4a262.js */
    "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");

    const Route = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Relative path that needs to match in order for this route to apply.
         *
         * Accepts paths similar to expressjs so that you can define parameters
         * in the url /foo/:bar where bar would be available in incoming props.
         */

        this.url = '';
        this.ionRouteDataChanged = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRouteDataChanged", 7);
      }

      onUpdate(newValue) {
        this.ionRouteDataChanged.emit(newValue);
      }

      onComponentProps(newValue, oldValue) {
        if (newValue === oldValue) {
          return;
        }

        const keys1 = newValue ? Object.keys(newValue) : [];
        const keys2 = oldValue ? Object.keys(oldValue) : [];

        if (keys1.length !== keys2.length) {
          this.onUpdate(newValue);
          return;
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = keys1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            const key = _step.value;

            if (newValue[key] !== oldValue[key]) {
              this.onUpdate(newValue);
              return;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      connectedCallback() {
        this.ionRouteDataChanged.emit();
      }

      static get watchers() {
        return {
          "url": ["onUpdate"],
          "component": ["onUpdate"],
          "componentProps": ["onComponentProps"]
        };
      }

    };
    const RouteRedirect = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionRouteRedirectChanged = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRouteRedirectChanged", 7);
      }

      propDidChange() {
        this.ionRouteRedirectChanged.emit();
      }

      connectedCallback() {
        this.ionRouteRedirectChanged.emit();
      }

      static get watchers() {
        return {
          "from": ["propDidChange"],
          "to": ["propDidChange"]
        };
      }

    };
    const ROUTER_INTENT_NONE = 'root';
    const ROUTER_INTENT_FORWARD = 'forward';
    const ROUTER_INTENT_BACK = 'back';

    const generatePath = segments => {
      const path = segments.filter(s => s.length > 0).join('/');
      return '/' + path;
    };

    const chainToPath = chain => {
      const path = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = chain[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          const route = _step2.value;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = route.path[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              const segment = _step3.value;

              if (segment[0] === ':') {
                const param = route.params && route.params[segment.slice(1)];

                if (!param) {
                  return null;
                }

                path.push(param);
              } else if (segment !== '') {
                path.push(segment);
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return path;
    };

    const writePath = (history, root, useHash, path, direction, state) => {
      let url = generatePath([...parsePath(root), ...path]);

      if (useHash) {
        url = '#' + url;
      }

      if (direction === ROUTER_INTENT_FORWARD) {
        history.pushState(state, '', url);
      } else {
        history.replaceState(state, '', url);
      }
    };

    const removePrefix = (prefix, path) => {
      if (prefix.length > path.length) {
        return null;
      }

      if (prefix.length <= 1 && prefix[0] === '') {
        return path;
      }

      for (let i = 0; i < prefix.length; i++) {
        if (prefix[i].length > 0 && prefix[i] !== path[i]) {
          return null;
        }
      }

      if (path.length === prefix.length) {
        return [''];
      }

      return path.slice(prefix.length);
    };

    const readPath = (loc, root, useHash) => {
      let pathname = loc.pathname;

      if (useHash) {
        const hash = loc.hash;
        pathname = hash[0] === '#' ? hash.slice(1) : '';
      }

      const prefix = parsePath(root);
      const path = parsePath(pathname);
      return removePrefix(prefix, path);
    };

    const parsePath = path => {
      if (path == null) {
        return [''];
      }

      const segments = path.split('/').map(s => s.trim()).filter(s => s.length > 0);

      if (segments.length === 0) {
        return [''];
      } else {
        return segments;
      }
    };

    const printRoutes = routes => {
      console.group("[ion-core] ROUTES[".concat(routes.length, "]"));
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = routes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          const chain = _step4.value;
          const path = [];
          chain.forEach(r => path.push(...r.path));
          const ids = chain.map(r => r.id);
          console.debug("%c ".concat(generatePath(path)), 'font-weight: bold; padding-left: 20px', '=>\t', "(".concat(ids.join(', '), ")"));
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      console.groupEnd();
    };

    const printRedirects = redirects => {
      console.group("[ion-core] REDIRECTS[".concat(redirects.length, "]"));
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = redirects[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          const redirect = _step5.value;

          if (redirect.to) {
            console.debug('FROM: ', "$c ".concat(generatePath(redirect.from)), 'font-weight: bold', ' TO: ', "$c ".concat(generatePath(redirect.to)), 'font-weight: bold');
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      console.groupEnd();
    };

    const writeNavState =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(root, chain, direction, index, changed = false) {
        var outlet, route, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              // find next navigation outlet in the DOM
              outlet = searchNavNode(root); // make sure we can continue interacting the DOM, otherwise abort

              if (!(index >= chain.length || !outlet)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", changed);

            case 4:
              _context.next = 6;
              return outlet.componentOnReady();

            case 6:
              route = chain[index];
              _context.next = 9;
              return outlet.setRouteId(route.id, route.params, direction);

            case 9:
              result = _context.sent;

              // if the outlet changed the page, reset navigation to neutral (no direction)
              // this means nested outlets will not animate
              if (result.changed) {
                direction = ROUTER_INTENT_NONE;
                changed = true;
              } // recursively set nested outlets


              _context.next = 13;
              return writeNavState(result.element, chain, direction, index + 1, changed);

            case 13:
              changed = _context.sent;

              if (!result.markVisible) {
                _context.next = 17;
                break;
              }

              _context.next = 17;
              return result.markVisible();

            case 17:
              return _context.abrupt("return", changed);

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              return _context.abrupt("return", false);

            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 20]]);
      }));

      return function writeNavState(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }();

    const readNavState =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(root) {
        var ids, outlet, node, id;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              ids = [];
              node = root; // tslint:disable-next-line:no-constant-condition

            case 2:
              if (!true) {
                _context2.next = 20;
                break;
              }

              outlet = searchNavNode(node);

              if (!outlet) {
                _context2.next = 17;
                break;
              }

              _context2.next = 7;
              return outlet.getRouteId();

            case 7:
              id = _context2.sent;

              if (!id) {
                _context2.next = 14;
                break;
              }

              node = id.element;
              id.element = undefined;
              ids.push(id);
              _context2.next = 15;
              break;

            case 14:
              return _context2.abrupt("break", 20);

            case 15:
              _context2.next = 18;
              break;

            case 17:
              return _context2.abrupt("break", 20);

            case 18:
              _context2.next = 2;
              break;

            case 20:
              return _context2.abrupt("return", {
                ids,
                outlet
              });

            case 21:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));

      return function readNavState(_x5) {
        return _ref2.apply(this, arguments);
      };
    }();

    const waitUntilNavNode = () => {
      if (searchNavNode(document.body)) {
        return Promise.resolve();
      }

      return new Promise(resolve => {
        window.addEventListener('ionNavWillLoad', resolve, {
          once: true
        });
      });
    };

    const QUERY = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';

    const searchNavNode = root => {
      if (!root) {
        return undefined;
      }

      if (root.matches(QUERY)) {
        return root;
      }

      const outlet = root.querySelector(QUERY);
      return outlet ? outlet : undefined;
    };

    const matchesRedirect = (input, route) => {
      const from = route.from,
            to = route.to;

      if (to === undefined) {
        return false;
      }

      if (from.length > input.length) {
        return false;
      }

      for (let i = 0; i < from.length; i++) {
        const expected = from[i];

        if (expected === '*') {
          return true;
        }

        if (expected !== input[i]) {
          return false;
        }
      }

      return from.length === input.length;
    };

    const routeRedirect = (path, routes) => {
      return routes.find(route => matchesRedirect(path, route));
    };

    const matchesIDs = (ids, chain) => {
      const len = Math.min(ids.length, chain.length);
      let i = 0;

      for (; i < len; i++) {
        if (ids[i].toLowerCase() !== chain[i].id) {
          break;
        }
      }

      return i;
    };

    const matchesPath = (inputPath, chain) => {
      const segments = new RouterSegments(inputPath);
      let matchesDefault = false;
      let allparams;

      for (let i = 0; i < chain.length; i++) {
        const path = chain[i].path;

        if (path[0] === '') {
          matchesDefault = true;
        } else {
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = path[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              const segment = _step6.value;
              const data = segments.next(); // data param

              if (segment[0] === ':') {
                if (data === '') {
                  return null;
                }

                allparams = allparams || [];
                const params = allparams[i] || (allparams[i] = {});
                params[segment.slice(1)] = data;
              } else if (data !== segment) {
                return null;
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          matchesDefault = false;
        }
      }

      const matches = matchesDefault ? matchesDefault === (segments.next() === '') : true;

      if (!matches) {
        return null;
      }

      if (allparams) {
        return chain.map((route, i) => ({
          id: route.id,
          path: route.path,
          params: mergeParams(route.params, allparams[i])
        }));
      }

      return chain;
    };

    const mergeParams = (a, b) => {
      if (!a && b) {
        return b;
      } else if (a && !b) {
        return a;
      } else if (a && b) {
        return Object.assign(Object.assign({}, a), b);
      }

      return undefined;
    };

    const routerIDsToChain = (ids, chains) => {
      let match = null;
      let maxMatches = 0;
      const plainIDs = ids.map(i => i.id);
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = chains[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          const chain = _step7.value;
          const score = matchesIDs(plainIDs, chain);

          if (score > maxMatches) {
            match = chain;
            maxMatches = score;
          }
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      if (match) {
        return match.map((route, i) => ({
          id: route.id,
          path: route.path,
          params: mergeParams(route.params, ids[i] && ids[i].params)
        }));
      }

      return null;
    };

    const routerPathToChain = (path, chains) => {
      let match = null;
      let matches = 0;
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = chains[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          const chain = _step8.value;
          const matchedChain = matchesPath(path, chain);

          if (matchedChain !== null) {
            const score = computePriority(matchedChain);

            if (score > matches) {
              matches = score;
              match = matchedChain;
            }
          }
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      return match;
    };

    const computePriority = chain => {
      let score = 1;
      let level = 1;
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = chain[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          const route = _step9.value;
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = route.path[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              const path = _step10.value;

              if (path[0] === ':') {
                score += Math.pow(1, level);
              } else if (path !== '') {
                score += Math.pow(2, level);
              }

              level++;
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                _iterator10.return();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
            _iterator9.return();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }

      return score;
    };

    class RouterSegments {
      constructor(path) {
        this.path = path.slice();
      }

      next() {
        if (this.path.length > 0) {
          return this.path.shift();
        }

        return '';
      }

    }

    const readRedirects = root => {
      return Array.from(root.children).filter(el => el.tagName === 'ION-ROUTE-REDIRECT').map(el => {
        const to = readProp(el, 'to');
        return {
          from: parsePath(readProp(el, 'from')),
          to: to == null ? undefined : parsePath(to)
        };
      });
    };

    const readRoutes = root => {
      return flattenRouterTree(readRouteNodes(root));
    };

    const readRouteNodes = (root, node = root) => {
      return Array.from(node.children).filter(el => el.tagName === 'ION-ROUTE' && el.component).map(el => {
        const component = readProp(el, 'component');

        if (component == null) {
          throw new Error('component missing in ion-route');
        }

        return {
          path: parsePath(readProp(el, 'url')),
          id: component.toLowerCase(),
          params: el.componentProps,
          children: readRouteNodes(root, el)
        };
      });
    };

    const readProp = (el, prop) => {
      if (prop in el) {
        return el[prop];
      }

      if (el.hasAttribute(prop)) {
        return el.getAttribute(prop);
      }

      return null;
    };

    const flattenRouterTree = nodes => {
      const routes = [];
      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = nodes[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          const node = _step11.value;
          flattenNode([], routes, node);
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
            _iterator11.return();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }

      return routes;
    };

    const flattenNode = (chain, routes, node) => {
      const s = chain.slice();
      s.push({
        id: node.id,
        path: node.path,
        params: node.params
      });

      if (node.children.length === 0) {
        routes.push(s);
        return;
      }

      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = node.children[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          const sub = _step12.value;
          flattenNode(s, routes, sub);
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
            _iterator12.return();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }
    };

    const Router = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.previousPath = null;
        this.busy = false;
        this.state = 0;
        this.lastState = 0;
        /**
         * By default `ion-router` will match the routes at the root path ("/").
         * That can be changed when
         *
         */

        this.root = '/';
        /**
         * The router can work in two "modes":
         * - With hash: `/index.html#/path/to/page`
         * - Without hash: `/path/to/page`
         *
         * Using one or another might depend in the requirements of your app and/or where it's deployed.
         *
         * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
         * requires additional server-side configuration in order to properly work.
         *
         * On the otherside hash-navigation is much easier to deploy, it even works over the file protocol.
         *
         * By default, this property is `true`, change to `false` to allow hash-less URLs.
         */

        this.useHash = true;
        this.ionRouteWillChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRouteWillChange", 7);
        this.ionRouteDidChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRouteDidChange", 7);
      }

      componentWillLoad() {
        var _this = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                console.debug('[ion-router] router will load');
                _context3.next = 3;
                return waitUntilNavNode();

              case 3:
                console.debug('[ion-router] found nav');
                _context3.next = 6;
                return _this.onRoutesChanged();

              case 6:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }

      componentDidLoad() {
        window.addEventListener('ionRouteRedirectChanged', Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.onRedirectChanged.bind(this), 10));
        window.addEventListener('ionRouteDataChanged', Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.onRoutesChanged.bind(this), 100));
      }

      onPopState() {
        const direction = this.historyDirection();
        const path = this.getPath();
        console.debug('[ion-router] URL changed -> update nav', path, direction);
        return this.writeNavStateRoot(path, direction);
      }

      onBackButton(ev) {
        ev.detail.register(0, () => this.back());
      }
      /**
       * Navigate to the specified URL.
       *
       * @param url The url to navigate to.
       * @param direction The direction of the animation. Defaults to `"forward"`.
       */


      push(url, direction = 'forward') {
        if (url.startsWith('.')) {
          url = new URL(url, window.location.href).pathname;
        }

        console.debug('[ion-router] URL pushed -> updating nav', url, direction);
        const path = parsePath(url);
        this.setPath(path, direction);
        return this.writeNavStateRoot(path, direction);
      }
      /**
       * Go back to previous page in the window.history.
       */


      back() {
        window.history.back();
        return Promise.resolve(this.waitPromise);
      }
      /** @internal */


      printDebug() {
        var _this2 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                console.debug('CURRENT PATH', _this2.getPath());
                console.debug('PREVIOUS PATH', _this2.previousPath);
                printRoutes(readRoutes(_this2.el));
                printRedirects(readRedirects(_this2.el));

              case 4:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      }
      /** @internal */


      navChanged(direction) {
        var _this3 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          var _ref3, ids, outlet, routes, chain, path;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this3.busy) {
                  _context5.next = 3;
                  break;
                }

                console.warn('[ion-router] router is busy, navChanged was cancelled');
                return _context5.abrupt("return", false);

              case 3:
                _context5.next = 5;
                return readNavState(window.document.body);

              case 5:
                _ref3 = _context5.sent;
                ids = _ref3.ids;
                outlet = _ref3.outlet;
                routes = readRoutes(_this3.el);
                chain = routerIDsToChain(ids, routes);

                if (chain) {
                  _context5.next = 13;
                  break;
                }

                console.warn('[ion-router] no matching URL for ', ids.map(i => i.id));
                return _context5.abrupt("return", false);

              case 13:
                path = chainToPath(chain);

                if (path) {
                  _context5.next = 17;
                  break;
                }

                console.warn('[ion-router] router could not match path because some required param is missing');
                return _context5.abrupt("return", false);

              case 17:
                console.debug('[ion-router] nav changed -> update URL', ids, path);

                _this3.setPath(path, direction);

                _context5.next = 21;
                return _this3.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, path, null, ids.length);

              case 21:
                return _context5.abrupt("return", true);

              case 22:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }))();
      }

      onRedirectChanged() {
        const path = this.getPath();

        if (path && routeRedirect(path, readRedirects(this.el))) {
          this.writeNavStateRoot(path, ROUTER_INTENT_NONE);
        }
      }

      onRoutesChanged() {
        return this.writeNavStateRoot(this.getPath(), ROUTER_INTENT_NONE);
      }

      historyDirection() {
        const win = window;

        if (win.history.state === null) {
          this.state++;
          win.history.replaceState(this.state, win.document.title, win.document.location && win.document.location.href);
        }

        const state = win.history.state;
        const lastState = this.lastState;
        this.lastState = state;

        if (state > lastState) {
          return ROUTER_INTENT_FORWARD;
        } else if (state < lastState) {
          return ROUTER_INTENT_BACK;
        } else {
          return ROUTER_INTENT_NONE;
        }
      }

      writeNavStateRoot(path, direction) {
        var _this4 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          var redirects, redirect, redirectFrom, routes, chain;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                if (path) {
                  _context6.next = 3;
                  break;
                }

                console.error('[ion-router] URL is not part of the routing set');
                return _context6.abrupt("return", false);

              case 3:
                // lookup redirect rule
                redirects = readRedirects(_this4.el);
                redirect = routeRedirect(path, redirects);
                redirectFrom = null;

                if (redirect) {
                  _this4.setPath(redirect.to, direction);

                  redirectFrom = redirect.from;
                  path = redirect.to;
                } // lookup route chain


                routes = readRoutes(_this4.el);
                chain = routerPathToChain(path, routes);

                if (chain) {
                  _context6.next = 12;
                  break;
                }

                console.error('[ion-router] the path does not match any route');
                return _context6.abrupt("return", false);

              case 12:
                return _context6.abrupt("return", _this4.safeWriteNavState(document.body, chain, direction, path, redirectFrom));

              case 13:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }))();
      }

      safeWriteNavState(node, chain, direction, path, redirectFrom, index = 0) {
        var _this5 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee7() {
          var unlock, changed;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this5.lock();

              case 2:
                unlock = _context7.sent;
                changed = false;
                _context7.prev = 4;
                _context7.next = 7;
                return _this5.writeNavState(node, chain, direction, path, redirectFrom, index);

              case 7:
                changed = _context7.sent;
                _context7.next = 13;
                break;

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](4);
                console.error(_context7.t0);

              case 13:
                unlock();
                return _context7.abrupt("return", changed);

              case 15:
              case "end":
                return _context7.stop();
            }
          }, _callee7, null, [[4, 10]]);
        }))();
      }

      lock() {
        var _this6 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee8() {
          var p, resolve;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                p = _this6.waitPromise;
                _this6.waitPromise = new Promise(r => resolve = r);

                if (!(p !== undefined)) {
                  _context8.next = 5;
                  break;
                }

                _context8.next = 5;
                return p;

              case 5:
                return _context8.abrupt("return", resolve);

              case 6:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }))();
      }

      writeNavState(node, chain, direction, path, redirectFrom, index = 0) {
        var _this7 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee9() {
          var routeEvent, changed;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                if (!_this7.busy) {
                  _context9.next = 3;
                  break;
                }

                console.warn('[ion-router] router is busy, transition was cancelled');
                return _context9.abrupt("return", false);

              case 3:
                _this7.busy = true; // generate route event and emit will change

                routeEvent = _this7.routeChangeEvent(path, redirectFrom);

                if (routeEvent) {
                  _this7.ionRouteWillChange.emit(routeEvent);
                }

                _context9.next = 8;
                return writeNavState(node, chain, direction, index);

              case 8:
                changed = _context9.sent;
                _this7.busy = false;

                if (changed) {
                  console.debug('[ion-router] route changed', path);
                } // emit did change


                if (routeEvent) {
                  _this7.ionRouteDidChange.emit(routeEvent);
                }

                return _context9.abrupt("return", changed);

              case 13:
              case "end":
                return _context9.stop();
            }
          }, _callee9);
        }))();
      }

      setPath(path, direction) {
        this.state++;
        writePath(window.history, this.root, this.useHash, path, direction, this.state);
      }

      getPath() {
        return readPath(window.location, this.root, this.useHash);
      }

      routeChangeEvent(path, redirectFromPath) {
        const from = this.previousPath;
        const to = generatePath(path);
        this.previousPath = to;

        if (to === from) {
          return null;
        }

        const redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
        return {
          from,
          redirectedFrom,
          to
        };
      }

      get el() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

    };
    const RouterLink = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */

        this.routerDirection = 'forward';

        this.onClick = ev => {
          Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["o"])(this.href, ev, this.routerDirection);
        };
      }

      render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const attrs = {
          href: this.href,
          rel: this.rel,
          target: this.target
        };
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          onClick: this.onClick,
          class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), {
            [mode]: true,
            'ion-activatable': true
          })
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", Object.assign({}, attrs), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
      }

      static get style() {
        return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
      }

    };
    /***/
  }
}]);
//# sourceMappingURL=55-es5.js.map