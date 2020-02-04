function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js ***!
    \**********************************************************************/

  /*! exports provided: ion_ripple_effect */

  /***/
  function node_modulesIonicCoreDistEsmIonRippleEffectEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_ripple_effect", function () {
      return RippleEffect;
    });
    /* harmony import */


    var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-ca0488fc.js */
    "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");

    const RippleEffect = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Sets the type of ripple-effect:
         *
         * - `bounded`: the ripple effect expands from the user's click position
         * - `unbounded`: the ripple effect expands from the center of the button and overflows the container.
         *
         * NOTE: Surfaces for bounded ripples should have the overflow property set to hidden,
         * while surfaces for unbounded ripples should have it set to visible.
         */

        this.type = 'bounded';
      }
      /**
       * Adds the ripple effect to the parent element.
       *
       * @param x The horizontal coordinate of where the ripple should start.
       * @param y The vertical coordinate of where the ripple should start.
       */


      addRipple(x, y) {
        var _this = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(resolve => {
                  Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
                    const rect = _this.el.getBoundingClientRect();

                    const width = rect.width;
                    const height = rect.height;
                    const hypotenuse = Math.sqrt(width * width + height * height);
                    const maxDim = Math.max(height, width);
                    const maxRadius = _this.unbounded ? maxDim : hypotenuse + PADDING;
                    const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
                    const finalScale = maxRadius / initialSize;
                    let posX = x - rect.left;
                    let posY = y - rect.top;

                    if (_this.unbounded) {
                      posX = width * 0.5;
                      posY = height * 0.5;
                    }

                    const styleX = posX - initialSize * 0.5;
                    const styleY = posY - initialSize * 0.5;
                    const moveX = width * 0.5 - posX;
                    const moveY = height * 0.5 - posY;
                    Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
                      const div = document.createElement('div');
                      div.classList.add('ripple-effect');
                      const style = div.style;
                      style.top = styleY + 'px';
                      style.left = styleX + 'px';
                      style.width = style.height = initialSize + 'px';
                      style.setProperty('--final-scale', "".concat(finalScale));
                      style.setProperty('--translate-end', "".concat(moveX, "px, ").concat(moveY, "px"));
                      const container = _this.el.shadowRoot || _this.el;
                      container.appendChild(div);
                      setTimeout(() => {
                        resolve(() => {
                          removeRipple(div);
                        });
                      }, 225 + 100);
                    });
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }

      get unbounded() {
        return this.type === 'unbounded';
      }

      render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          role: "presentation",
          class: {
            [mode]: true,
            'unbounded': this.unbounded
          }
        });
      }

      get el() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get style() {
        return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}";
      }

    };

    const removeRipple = ripple => {
      ripple.classList.add('fade-out');
      setTimeout(() => {
        ripple.remove();
      }, 200);
    };

    const PADDING = 10;
    const INITIAL_ORIGIN_SCALE = 0.5;
    /***/
  }
}]);
//# sourceMappingURL=54-es5.js.map