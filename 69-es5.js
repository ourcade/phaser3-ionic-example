function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js ***!
    \**************************************************************/

  /*! exports provided: ion_tab, ion_tabs */

  /***/
  function node_modulesIonicCoreDistEsmIonTab_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_tab", function () {
      return Tab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_tabs", function () {
      return Tabs;
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


    var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./framework-delegate-c2e2e1f4.js */
    "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");

    const Tab = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.loaded = false;
        /** @internal */

        this.active = false;
      }

      componentWillLoad() {}
      /** Set the active component for the tab */


      setActive() {
        var _this = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.prepareLazyLoaded();

              case 2:
                _this.active = true;

              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }

      prepareLazyLoaded() {
        if (!this.loaded && this.component != null) {
          this.loaded = true;

          try {
            return Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, this.el, this.component, ['ion-page']);
          } catch (e) {
            console.error(e);
          }
        }

        return Promise.resolve(undefined);
      }

      render() {
        const tab = this.tab,
              active = this.active,
              component = this.component;
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          role: "tabpanel",
          "aria-hidden": !active ? 'true' : null,
          "aria-labelledby": "tab-button-".concat(tab),
          class: {
            'ion-page': component === undefined,
            'tab-hidden': !active
          }
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
      }

      get el() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get style() {
        return ":host(.tab-hidden){display:none!important}";
      }

    };
    const Tabs = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.transitioning = false;
        /** @internal */

        this.useRouter = false;

        this.onTabClicked = ev => {
          const _ev$detail = ev.detail,
                href = _ev$detail.href,
                tab = _ev$detail.tab;

          if (this.useRouter && href !== undefined) {
            const router = document.querySelector('ion-router');

            if (router) {
              router.push(href);
            }
          } else {
            this.select(tab);
          }
        };

        this.ionNavWillLoad = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionNavWillLoad", 7);
        this.ionTabsWillChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionTabsWillChange", 3);
        this.ionTabsDidChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionTabsDidChange", 3);
      }

      componentWillLoad() {
        var _this2 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var tabs;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.useRouter) {
                  _this2.useRouter = !!document.querySelector('ion-router') && !_this2.el.closest('[no-router]');
                }

                if (_this2.useRouter) {
                  _context2.next = 5;
                  break;
                }

                tabs = _this2.tabs;
                _context2.next = 5;
                return _this2.select(tabs[0]);

              case 5:
                _this2.ionNavWillLoad.emit();

              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }

      componentWillRender() {
        const tabBar = this.el.querySelector('ion-tab-bar');

        if (tabBar) {
          const tab = this.selectedTab ? this.selectedTab.tab : undefined;
          tabBar.selectedTab = tab;
        }
      }
      /**
       * Select a tab by the value of its `tab` property or an element reference.
       *
       * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
       */


      select(tab) {
        var _this3 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          var selectedTab;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                selectedTab = getTab(_this3.tabs, tab);

                if (_this3.shouldSwitch(selectedTab)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", false);

              case 3:
                _context3.next = 5;
                return _this3.setActive(selectedTab);

              case 5:
                _context3.next = 7;
                return _this3.notifyRouter();

              case 7:
                _this3.tabSwitch();

                return _context3.abrupt("return", true);

              case 9:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }
      /**
       * Get a specific tab by the value of its `tab` property or an element reference.
       *
       * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
       */


      getTab(tab) {
        var _this4 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", getTab(_this4.tabs, tab));

              case 1:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      }
      /**
       * Get the currently selected tab.
       */


      getSelected() {
        return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
      }
      /** @internal */


      setRouteId(id) {
        var _this5 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          var selectedTab;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                selectedTab = getTab(_this5.tabs, id);

                if (_this5.shouldSwitch(selectedTab)) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return", {
                  changed: false,
                  element: _this5.selectedTab
                });

              case 3:
                _context5.next = 5;
                return _this5.setActive(selectedTab);

              case 5:
                return _context5.abrupt("return", {
                  changed: true,
                  element: _this5.selectedTab,
                  markVisible: () => _this5.tabSwitch()
                });

              case 6:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }))();
      }
      /** @internal */


      getRouteId() {
        var _this6 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          var tabId;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                tabId = _this6.selectedTab && _this6.selectedTab.tab;
                return _context6.abrupt("return", tabId !== undefined ? {
                  id: tabId,
                  element: _this6.selectedTab
                } : undefined);

              case 2:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }))();
      }

      setActive(selectedTab) {
        if (this.transitioning) {
          return Promise.reject('transitioning already happening');
        }

        this.transitioning = true;
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionTabsWillChange.emit({
          tab: selectedTab.tab
        });
        return selectedTab.setActive();
      }

      tabSwitch() {
        const selectedTab = this.selectedTab;
        const leavingTab = this.leavingTab;
        this.leavingTab = undefined;
        this.transitioning = false;

        if (!selectedTab) {
          return;
        }

        if (leavingTab !== selectedTab) {
          if (leavingTab) {
            leavingTab.active = false;
          }

          this.ionTabsDidChange.emit({
            tab: selectedTab.tab
          });
        }
      }

      notifyRouter() {
        if (this.useRouter) {
          const router = document.querySelector('ion-router');

          if (router) {
            return router.navChanged('forward');
          }
        }

        return Promise.resolve(false);
      }

      shouldSwitch(selectedTab) {
        const leavingTab = this.selectedTab;
        return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
      }

      get tabs() {
        return Array.from(this.el.querySelectorAll('ion-tab'));
      }

      render() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          onIonTabButtonClick: this.onTabClicked
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
          name: "top"
        }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "tabs-inner"
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
          name: "bottom"
        }));
      }

      get el() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get style() {
        return ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}";
      }

    };

    const getTab = (tabs, tab) => {
      const tabEl = typeof tab === 'string' ? tabs.find(t => t.tab === tab) : tab;

      if (!tabEl) {
        console.error("tab with id: \"".concat(tabEl, "\" does not exist"));
      }

      return tabEl;
    };
    /***/

  }
}]);
//# sourceMappingURL=69-es5.js.map