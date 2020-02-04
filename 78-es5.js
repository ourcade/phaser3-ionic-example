function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78], {
  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js":
  /*!**************************************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js ***!
    \**************************************************************************************/

  /*! exports provided: pwa_camera_modal_instance */

  /***/
  function node_modulesIonicPwaElementsDistEsmPwaCameraModalInstanceEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pwa_camera_modal_instance", function () {
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

      handlePhoto(photo) {
        var _this = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this.onPhoto.emit(photo);

              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }

      handleBackdropClick(e) {
        if (e.target !== this.el) {
          this.onPhoto.emit(null);
        }
      }

      handleComponentClick(e) {
        e.stopPropagation();
      }

      handleBackdropKeyUp(e) {
        if (e.key === "Escape") {
          this.onPhoto.emit(null);
        }
      }

      render() {
        return Object(_core_0c538558_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "wrapper",
          onClick: e => this.handleBackdropClick(e)
        }, Object(_core_0c538558_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "content"
        }, Object(_core_0c538558_js__WEBPACK_IMPORTED_MODULE_0__["h"])("pwa-camera", {
          onClick: e => this.handleComponentClick(e),
          onPhoto: photo => this.handlePhoto(photo)
        })));
      }

      get el() {
        return Object(_core_0c538558_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
      }

      static get style() {
        return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height)}\@media only screen and (max-width:600px){.content{width:100%;height:100%}}";
      }

    };
    /***/
  }
}]);
//# sourceMappingURL=78-es5.js.map