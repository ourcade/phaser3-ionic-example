function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js ***!
    \***********************************************************************/

  /*! exports provided: ion_back_button */

  /***/
  function node_modulesIonicCoreDistEsmIonBackButtonMdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_back_button", function () {
      return BackButton;
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


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");

    const BackButton = class {
      constructor(hostRef) {
        var _this = this;

        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the user cannot interact with the button.
         */

        this.disabled = false;
        /**
         * The type of the button.
         */

        this.type = 'button';

        this.onClick =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(ev) {
            var nav;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  nav = _this.el.closest('ion-nav');
                  ev.preventDefault();
                  _context.t0 = nav;

                  if (!_context.t0) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 6;
                  return nav.canGoBack();

                case 6:
                  _context.t0 = _context.sent;

                case 7:
                  if (!_context.t0) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt("return", nav.pop({
                    skipIfBusy: true
                  }));

                case 9:
                  return _context.abrupt("return", Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["o"])(_this.defaultHref, ev, 'back'));

                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();
      }

      get backButtonIcon() {
        return this.icon != null ? this.icon : _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('backButtonIcon', 'arrow-back');
      }

      get backButtonText() {
        const defaultBackButtonText = this.mode === 'ios' ? 'Back' : null;
        return this.text != null ? this.text : _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('backButtonText', defaultBackButtonText);
      }

      get hasIconOnly() {
        return this.backButtonIcon && !this.backButtonText;
      }

      get rippleType() {
        // If the button only has an icon we use the unbounded
        // "circular" ripple effect
        if (this.hasIconOnly) {
          return 'unbounded';
        }

        return 'bounded';
      }

      render() {
        const color = this.color,
              defaultHref = this.defaultHref,
              disabled = this.disabled,
              type = this.type,
              mode = this.mode,
              hasIconOnly = this.hasIconOnly,
              backButtonIcon = this.backButtonIcon,
              backButtonText = this.backButtonText;
        const showBackButton = defaultHref !== undefined;
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          onClick: this.onClick,
          class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color)), {
            [mode]: true,
            'button': true,
            'back-button-disabled': disabled,
            'back-button-has-icon-only': hasIconOnly,
            'ion-activatable': true,
            'ion-focusable': true,
            'show-back-button': showBackButton
          })
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
          type: type,
          disabled: disabled,
          class: "button-native"
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          class: "button-inner"
        }, backButtonIcon && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
          icon: backButtonIcon,
          lazy: false
        }), backButtonText && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          class: "button-text"
        }, backButtonText)), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", {
          type: this.rippleType
        })));
      }

      get el() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get style() {
        return ".sc-ion-back-button-md-h{--background:transparent;--color-focused:var(--color);--color-hover:var(--color);--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-md-h .button-native.sc-ion-back-button-md{color:var(--ion-color-base)}.show-back-button.sc-ion-back-button-md-h, .can-go-back.sc-ion-back-button-md-h > ion-header.sc-ion-back-button-md, .can-go-back > ion-header .sc-ion-back-button-md-h{display:block}.back-button-disabled.sc-ion-back-button-md-h{cursor:default;opacity:.5;pointer-events:none}.button-native.sc-ion-back-button-md{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-back-button-md{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner.sc-ion-back-button-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-md{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-icon.sc-ion-back-button-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}\@media (any-hover:hover){.sc-ion-back-button-md-h:hover .button-native.sc-ion-back-button-md{background:var(--background-hover);color:var(--color-hover)}}.ion-focused.sc-ion-back-button-md-h .button-native.sc-ion-back-button-md{background:var(--background-focused);color:var(--color-focused)}\@media (any-hover:hover){.ion-color.sc-ion-back-button-md-h:hover .button-native.sc-ion-back-button-md{color:var(--ion-color-base)}}.ion-color.ion-focused.sc-ion-back-button-md-h .button-native.sc-ion-back-button-md{color:var(--ion-color-base)}ion-toolbar.sc-ion-back-button-md-h:not(.ion-color):not(.ion-color), ion-toolbar:not(.ion-color) .sc-ion-back-button-md-h:not(.ion-color){color:var(--ion-toolbar-color,var(--color))}.sc-ion-back-button-md-h{--border-radius:4px;--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:24px;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:14px;font-weight:500;text-transform:uppercase}.back-button-has-icon-only.sc-ion-back-button-md-h{--border-radius:50%;min-width:48px;height:48px}.button-native.sc-ion-back-button-md{-webkit-box-shadow:none;box-shadow:none}.button-text.sc-ion-back-button-md{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-text.sc-ion-back-button-md{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}ion-icon.sc-ion-back-button-md{line-height:.67;text-align:start}\@media (any-hover:hover){.ion-color.sc-ion-back-button-md-h:hover .button-native.sc-ion-back-button-md{background:rgba(var(--ion-color-base-rgb),.08)}}.ion-color.ion-focused.sc-ion-back-button-md-h .button-native.sc-ion-back-button-md{background:rgba(var(--ion-color-base-rgb),.24)}";
      }

    };
    /***/
  }
}]);
//# sourceMappingURL=10-es5.js.map