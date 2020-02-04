function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79], {
  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js ***!
    \*****************************************************************************/

  /*! exports provided: pwa_camera_modal */

  /***/
  function node_modulesIonicPwaElementsDistEsmPwaCameraModalEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pwa_camera_modal", function () {
      return PWACameraModal;
    });
    /* harmony import */


    var _core_0c538558_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-0c538558.js */
    "./node_modules/@ionic/pwa-elements/dist/esm/core-0c538558.js");

    const PWACameraModal = class {
      constructor(hostRef) {
        Object(_core_0c538558_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.onPhoto = Object(_core_0c538558_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "onPhoto", 7);
      }

      present() {
        var _this = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var camera;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                camera = document.createElement('pwa-camera-modal-instance');
                camera.addEventListener('onPhoto',
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(e) {
                    var photo;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (_this._modal) {
                            _context.next = 2;
                            break;
                          }

                          return _context.abrupt("return");

                        case 2:
                          photo = e.detail;

                          _this.onPhoto.emit(photo);

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
                document.body.append(camera);
                _this._modal = camera;

              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }

      dismiss() {
        var _this2 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (_this2._modal) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _this2._modal && _this2._modal.parentNode.removeChild(_this2._modal);
                _this2._modal = null;

              case 4:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }

      render() {
        return Object(_core_0c538558_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null);
      }

      static get style() {
        return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}";
      }

    };
    /***/
  }
}]);
//# sourceMappingURL=79-es5.js.map