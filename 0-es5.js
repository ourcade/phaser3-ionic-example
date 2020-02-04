function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js ***!
    \**********************************************************************************/

  /*! exports provided: ion_action_sheet_controller, ion_alert_controller, ion_anchor, ion_loading_controller, ion_modal_controller, ion_picker_controller, ion_popover_controller, ion_toast_controller */

  /***/
  function node_modulesIonicCoreDistEsmIonActionSheetController_8EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_action_sheet_controller", function () {
      return ActionSheetController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_alert_controller", function () {
      return AlertController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_anchor", function () {
      return Anchor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_loading_controller", function () {
      return LoadingController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_modal_controller", function () {
      return ModalController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_picker_controller", function () {
      return PickerController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_popover_controller", function () {
      return PopoverController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_toast_controller", function () {
      return ToastController;
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


    var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./overlays-10640d86.js */
    "./node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");

    const ActionSheetController = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create an action sheet overlay with action sheet options.
       *
       * @param options The options to use to create the action sheet.
       */


      create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-action-sheet', options);
      }
      /**
       * Dismiss the open action sheet overlay.
       *
       * @param data Any data to emit in the dismiss events.
       * @param role The role of the element that is dismissing the action sheet.
       * This can be useful in a button handler for determining which button was
       * clicked to dismiss the action sheet.
       * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
       * @param id The id of the action sheet to dismiss. If an id is not provided, it will dismiss the most recently opened action sheet.
       */


      dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-action-sheet', id);
      }
      /**
       * Get the most recently opened action sheet overlay.
       */


      getTop() {
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-action-sheet'));

              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }

    };
    const AlertController = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create an alert overlay with alert options.
       *
       * @param options The options to use to create the alert.
       */


      create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-alert', options);
      }
      /**
       * Dismiss the open alert overlay.
       *
       * @param data Any data to emit in the dismiss events.
       * @param role The role of the element that is dismissing the alert.
       * This can be useful in a button handler for determining which button was
       * clicked to dismiss the alert.
       * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
       * @param id The id of the alert to dismiss. If an id is not provided, it will dismiss the most recently opened alert.
       */


      dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-alert', id);
      }
      /**
       * Get the most recently opened alert overlay.
       */


      getTop() {
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-alert'));

              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }

    };
    const Anchor = class {
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

      componentDidLoad() {
        console.warn('[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.');
      }

      render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const attrs = {
          href: this.href,
          rel: this.rel
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
    const LoadingController = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create a loading overlay with loading options.
       *
       * @param options The options to use to create the loading.
       */


      create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-loading', options);
      }
      /**
       * Dismiss the open loading overlay.
       *
       * @param data Any data to emit in the dismiss events.
       * @param role The role of the element that is dismissing the loading.
       * This can be useful in a button handler for determining which button was
       * clicked to dismiss the loading.
       * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
       * @param id The id of the loading to dismiss. If an id is not provided, it will dismiss the most recently opened loading.
       */


      dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-loading', id);
      }
      /**
       * Get the most recently opened loading overlay.
       */


      getTop() {
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-loading'));

              case 1:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }

    };
    const ModalController = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create a modal overlay with modal options.
       *
       * @param options The options to use to create the modal.
       */


      create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-modal', options);
      }
      /**
       * Dismiss the open modal overlay.
       *
       * @param data Any data to emit in the dismiss events.
       * @param role The role of the element that is dismissing the modal.
       * This can be useful in a button handler for determining which button was
       * clicked to dismiss the modal.
       * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
       * @param id The id of the modal to dismiss. If an id is not provided, it will dismiss the most recently opened modal.
       */


      dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-modal', id);
      }
      /**
       * Get the most recently opened modal overlay.
       */


      getTop() {
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-modal'));

              case 1:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      }

    };
    const PickerController = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create a picker overlay with picker options.
       *
       * @param options The options to use to create the picker.
       */


      create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-picker', options);
      }
      /**
       * Dismiss the open picker overlay.
       *
       * @param data Any data to emit in the dismiss events.
       * @param role The role of the element that is dismissing the picker.
       * This can be useful in a button handler for determining which button was
       * clicked to dismiss the picker.
       * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
       * @param id The id of the picker to dismiss. If an id is not provided, it will dismiss the most recently opened picker.
       */


      dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-picker', id);
      }
      /**
       * Get the most recently opened picker overlay.
       */


      getTop() {
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-picker'));

              case 1:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }))();
      }

    };
    const PopoverController = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create a popover overlay with popover options.
       *
       * @param options The options to use to create the popover.
       */


      create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-popover', options);
      }
      /**
       * Dismiss the open popover overlay.
       *
       * @param data Any data to emit in the dismiss events.
       * @param role The role of the element that is dismissing the popover.
       * This can be useful in a button handler for determining which button was
       * clicked to dismiss the popover.
       * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
       * @param id The id of the popover to dismiss. If an id is not provided, it will dismiss the most recently opened popover.
       */


      dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-popover', id);
      }
      /**
       * Get the most recently opened popover overlay.
       */


      getTop() {
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-popover'));

              case 1:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }))();
      }

    };
    const ToastController = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create a toast overlay with toast options.
       *
       * @param options The options to use to create the toast.
       */


      create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-toast', options);
      }
      /**
       * Dismiss the open toast overlay.
       *
       * @param data Any data to emit in the dismiss events.
       * @param role The role of the element that is dismissing the toast. For example, 'cancel' or 'backdrop'.
       * @param id The id of the toast to dismiss. If an id is not provided, it will dismiss the most recently opened toast.
       */


      dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-toast', id);
      }
      /**
       * Get the most recently opened toast overlay.
       */


      getTop() {
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-toast'));

              case 1:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }))();
      }

    };
    /***/
  }
}]);
//# sourceMappingURL=0-es5.js.map