function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hardware-back-button-5afe3cb0-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js ***!
    \****************************************************************************/

  /*! exports provided: startHardwareBackButton */

  /***/
  function node_modulesIonicCoreDistEsmHardwareBackButton5afe3cb0Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function () {
      return startHardwareBackButton;
    });

    const startHardwareBackButton = () => {
      const doc = document;
      let busy = false;
      doc.addEventListener('backbutton', () => {
        if (busy) {
          return;
        }

        const handlers = [];
        const ev = new CustomEvent('ionBackButton', {
          bubbles: false,
          detail: {
            register(priority, handler) {
              handlers.push({
                priority,
                handler
              });
            }

          }
        });
        doc.dispatchEvent(ev);

        if (handlers.length > 0) {
          let selectedPriority = Number.MIN_SAFE_INTEGER;
          let selectedHandler;
          handlers.forEach(({
            priority,
            handler
          }) => {
            if (priority >= selectedPriority) {
              selectedPriority = priority;
              selectedHandler = handler;
            }
          });
          busy = true;
          executeAction(selectedHandler).then(() => busy = false);
        }
      });
    };

    const executeAction =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(handler) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!handler) {
                _context.next = 6;
                break;
              }

              result = handler();

              if (!(result != null)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return result;

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function executeAction(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    /***/

  }
}]);
//# sourceMappingURL=hardware-back-button-5afe3cb0-js-es5.js.map