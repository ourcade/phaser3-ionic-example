function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js ***!
    \*************************************************************************/

  /*! exports provided: ion_item_option, ion_item_options, ion_item_sliding */

  /***/
  function node_modulesIonicCoreDistEsmIonItemOption_3MdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_item_option", function () {
      return ItemOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_item_options", function () {
      return ItemOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_item_sliding", function () {
      return ItemSliding;
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

    const ItemOption = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the user cannot interact with the item option.
         */

        this.disabled = false;
        /**
         * If `true`, the option will expand to take up the available width and cover any other options.
         */

        this.expandable = false;
        /**
         * The type of the button.
         */

        this.type = 'button';

        this.onClick = ev => {
          const el = ev.target.closest('ion-item-option');

          if (el) {
            ev.preventDefault();
          }
        };
      }

      render() {
        const disabled = this.disabled,
              expandable = this.expandable,
              href = this.href;
        const TagType = href === undefined ? 'button' : 'a';
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const attrs = TagType === 'button' ? {
          type: this.type
        } : {
          download: this.download,
          href: this.href,
          target: this.target
        };
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          onClick: this.onClick,
          class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), {
            [mode]: true,
            'item-option-disabled': disabled,
            'item-option-expandable': expandable,
            'ion-activatable': true
          })
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, {
          class: "button-native",
          disabled: disabled
        }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          class: "button-inner"
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
          name: "top"
        }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "horizontal-wrapper"
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
          name: "start"
        }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
          name: "icon-only"
        }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
          name: "end"
        })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
          name: "bottom"
        })), mode === 'md' && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
      }

      get el() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get style() {
        return ":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:.7em;padding-right:.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:.7em;padding-inline-start:.7em;-webkit-padding-end:.7em;padding-inline-end:.7em}}.button-inner{-ms-flex-flow:column nowrap;flex-flow:column nowrap;height:100%}.button-inner,.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.horizontal-wrapper{-ms-flex-flow:row nowrap;flex-flow:row nowrap}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:.9em;font-size:1.8em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}";
      }

    };
    const ItemOptions = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
         *
         */

        this.side = 'end';
        this.ionSwipe = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSwipe", 7);
      }
      /** @internal */


      fireSwipeEvent() {
        var _this = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this.ionSwipe.emit({
                  side: _this.side
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }

      render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const isEnd = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.side);
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          class: {
            [mode]: true,
            // Used internally for styling
            ["item-options-".concat(mode)]: true,
            'item-options-start': !isEnd,
            'item-options-end': isEnd
          }
        });
      }

      get el() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get style() {
        return "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options,[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end),[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start,[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-md{border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}.item-options-md,.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";
      }

    };
    const SWIPE_MARGIN = 30;
    const ELASTIC_FACTOR = 0.55;
    let openSlidingItem;
    const ItemSliding = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.item = null;
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.sides = 0
        /* None */
        ;
        this.optsDirty = true;
        this.state = 2
        /* Disabled */
        ;
        /**
         * If `true`, the user cannot interact with the sliding item.
         */

        this.disabled = false;
        this.ionDrag = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionDrag", 7);
      }

      disabledChanged() {
        if (this.gesture) {
          this.gesture.setDisabled(this.disabled);
        }
      }

      connectedCallback() {
        var _this2 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _this2.item = _this2.el.querySelector('ion-item');
                _context2.next = 3;
                return _this2.updateOptions();

              case 3:
                _context2.next = 5;
                return Promise.resolve().then(__webpack_require__.bind(null,
                /*! ./index-624eea58.js */
                "./node_modules/@ionic/core/dist/esm/index-624eea58.js"));

              case 5:
                _context2.t0 = {
                  el: _this2.el,
                  gestureName: 'item-swipe',
                  gesturePriority: 100,
                  threshold: 5,
                  canStart: () => _this2.canStart(),
                  onStart: () => _this2.onStart(),
                  onMove: ev => _this2.onMove(ev),
                  onEnd: ev => _this2.onEnd(ev)
                };
                _this2.gesture = _context2.sent.createGesture(_context2.t0);

                _this2.disabledChanged();

              case 8:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }

      disconnectedCallback() {
        if (this.gesture) {
          this.gesture.destroy();
          this.gesture = undefined;
        }

        this.item = null;
        this.leftOptions = this.rightOptions = undefined;

        if (openSlidingItem === this.el) {
          openSlidingItem = undefined;
        }
      }
      /**
       * Get the amount the item is open in pixels.
       */


      getOpenAmount() {
        return Promise.resolve(this.openAmount);
      }
      /**
       * Get the ratio of the open amount of the item compared to the width of the options.
       * If the number returned is positive, then the options on the right side are open.
       * If the number returned is negative, then the options on the left side are open.
       * If the absolute value of the number is greater than 1, the item is open more than
       * the width of the options.
       */


      getSlidingRatio() {
        return Promise.resolve(this.getSlidingRatioSync());
      }
      /**
       * Open the sliding item.
       *
       * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
       */


      open(side) {
        var _this3 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          var optionsToOpen, isStartOpen, isEndOpen;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.item === null)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                optionsToOpen = _this3.getOptions(side);

                if (optionsToOpen) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                /**
                 * If side is not set, we need to infer the side
                 * so we know which direction to move the options
                 */
                if (side === undefined) {
                  side = optionsToOpen === _this3.leftOptions ? 'start' : 'end';
                } // In RTL we want to switch the sides


                side = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(side) ? 'end' : 'start';
                isStartOpen = _this3.openAmount < 0;
                isEndOpen = _this3.openAmount > 0;
                /**
                 * If a side is open and a user tries to
                 * re-open the same side, we should not do anything
                 */

                if (!(isStartOpen && optionsToOpen === _this3.leftOptions)) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("return");

              case 11:
                if (!(isEndOpen && optionsToOpen === _this3.rightOptions)) {
                  _context3.next = 13;
                  break;
                }

                return _context3.abrupt("return");

              case 13:
                _this3.closeOpened();

                _this3.state = 4
                /* Enabled */
                ;
                requestAnimationFrame(() => {
                  _this3.calculateOptsWidth();

                  const width = side === 'end' ? _this3.optsWidthRightSide : -_this3.optsWidthLeftSide;
                  openSlidingItem = _this3.el;

                  _this3.setOpenAmount(width, false);

                  _this3.state = side === 'end' ? 8
                  /* End */
                  : 16
                  /* Start */
                  ;
                });

              case 16:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }
      /**
       * Close the sliding item. Items can also be closed from the [List](../../list/List).
       */


      close() {
        var _this4 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _this4.setOpenAmount(0, true);

              case 1:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      }
      /**
       * Close all of the sliding items in the list. Items can also be closed from the [List](../../list/List).
       */


      closeOpened() {
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (!(openSlidingItem !== undefined)) {
                  _context5.next = 4;
                  break;
                }

                openSlidingItem.close();
                openSlidingItem = undefined;
                return _context5.abrupt("return", true);

              case 4:
                return _context5.abrupt("return", false);

              case 5:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }))();
      }
      /**
       * Given an optional side, return the ion-item-options element.
       *
       * @param side This side of the options to get. If a side is not provided it will
       * return the first one available.
       */


      getOptions(side) {
        if (side === undefined) {
          return this.leftOptions || this.rightOptions;
        } else if (side === 'start') {
          return this.leftOptions;
        } else {
          return this.rightOptions;
        }
      }

      updateOptions() {
        var _this5 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          var options, sides, i, option, side;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                options = _this5.el.querySelectorAll('ion-item-options');
                sides = 0; // Reset left and right options in case they were removed

                _this5.leftOptions = _this5.rightOptions = undefined;
                i = 0;

              case 4:
                if (!(i < options.length)) {
                  _context6.next = 13;
                  break;
                }

                _context6.next = 7;
                return options.item(i).componentOnReady();

              case 7:
                option = _context6.sent;
                side = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(option.side) ? 'end' : 'start';

                if (side === 'start') {
                  _this5.leftOptions = option;
                  sides |= 1
                  /* Start */
                  ;
                } else {
                  _this5.rightOptions = option;
                  sides |= 2
                  /* End */
                  ;
                }

              case 10:
                i++;
                _context6.next = 4;
                break;

              case 13:
                _this5.optsDirty = true;
                _this5.sides = sides;

              case 15:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }))();
      }

      canStart() {
        const selected = openSlidingItem;

        if (selected && selected !== this.el) {
          this.closeOpened();
          return false;
        }

        return !!(this.rightOptions || this.leftOptions);
      }

      onStart() {
        openSlidingItem = this.el;

        if (this.tmr !== undefined) {
          clearTimeout(this.tmr);
          this.tmr = undefined;
        }

        if (this.openAmount === 0) {
          this.optsDirty = true;
          this.state = 4
          /* Enabled */
          ;
        }

        this.initialOpenAmount = this.openAmount;

        if (this.item) {
          this.item.style.transition = 'none';
        }
      }

      onMove(gesture) {
        if (this.optsDirty) {
          this.calculateOptsWidth();
        }

        let openAmount = this.initialOpenAmount - gesture.deltaX;

        switch (this.sides) {
          case 2
          /* End */
          :
            openAmount = Math.max(0, openAmount);
            break;

          case 1
          /* Start */
          :
            openAmount = Math.min(0, openAmount);
            break;

          case 3
          /* Both */
          :
            break;

          case 0
          /* None */
          :
            return;

          default:
            console.warn('invalid ItemSideFlags value', this.sides);
            break;
        }

        let optsWidth;

        if (openAmount > this.optsWidthRightSide) {
          optsWidth = this.optsWidthRightSide;
          openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        } else if (openAmount < -this.optsWidthLeftSide) {
          optsWidth = -this.optsWidthLeftSide;
          openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }

        this.setOpenAmount(openAmount, false);
      }

      onEnd(gesture) {
        const velocity = gesture.velocityX;
        let restingPoint = this.openAmount > 0 ? this.optsWidthRightSide : -this.optsWidthLeftSide; // Check if the drag didn't clear the buttons mid-point
        // and we aren't moving fast enough to swipe open

        const isResetDirection = this.openAmount > 0 === !(velocity < 0);
        const isMovingFast = Math.abs(velocity) > 0.3;
        const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);

        if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
          restingPoint = 0;
        }

        const state = this.state;
        this.setOpenAmount(restingPoint, true);

        if ((state & 32
        /* SwipeEnd */
        ) !== 0 && this.rightOptions) {
          this.rightOptions.fireSwipeEvent();
        } else if ((state & 64
        /* SwipeStart */
        ) !== 0 && this.leftOptions) {
          this.leftOptions.fireSwipeEvent();
        }
      }

      calculateOptsWidth() {
        this.optsWidthRightSide = 0;

        if (this.rightOptions) {
          this.rightOptions.style.display = 'flex';
          this.optsWidthRightSide = this.rightOptions.offsetWidth;
          this.rightOptions.style.display = '';
        }

        this.optsWidthLeftSide = 0;

        if (this.leftOptions) {
          this.leftOptions.style.display = 'flex';
          this.optsWidthLeftSide = this.leftOptions.offsetWidth;
          this.leftOptions.style.display = '';
        }

        this.optsDirty = false;
      }

      setOpenAmount(openAmount, isFinal) {
        if (this.tmr !== undefined) {
          clearTimeout(this.tmr);
          this.tmr = undefined;
        }

        if (!this.item) {
          return;
        }

        const style = this.item.style;
        this.openAmount = openAmount;

        if (isFinal) {
          style.transition = '';
        }

        if (openAmount > 0) {
          this.state = openAmount >= this.optsWidthRightSide + SWIPE_MARGIN ? 8
          /* End */
          | 32
          /* SwipeEnd */
          : 8
          /* End */
          ;
        } else if (openAmount < 0) {
          this.state = openAmount <= -this.optsWidthLeftSide - SWIPE_MARGIN ? 16
          /* Start */
          | 64
          /* SwipeStart */
          : 16
          /* Start */
          ;
        } else {
          this.tmr = setTimeout(() => {
            this.state = 2
            /* Disabled */
            ;
            this.tmr = undefined;
          }, 600);
          openSlidingItem = undefined;
          style.transform = '';
          return;
        }

        style.transform = "translate3d(".concat(-openAmount, "px,0,0)");
        this.ionDrag.emit({
          amount: openAmount,
          ratio: this.getSlidingRatioSync()
        });
      }

      getSlidingRatioSync() {
        if (this.openAmount > 0) {
          return this.openAmount / this.optsWidthRightSide;
        } else if (this.openAmount < 0) {
          return this.openAmount / this.optsWidthLeftSide;
        } else {
          return 0;
        }
      }

      render() {
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          class: {
            [mode]: true,
            'item-sliding-active-slide': this.state !== 2
            /* Disabled */
            ,
            'item-sliding-active-options-end': (this.state & 8
            /* End */
            ) !== 0,
            'item-sliding-active-options-start': (this.state & 16
            /* Start */
            ) !== 0,
            'item-sliding-active-swipe-end': (this.state & 32
            /* SwipeEnd */
            ) !== 0,
            'item-sliding-active-swipe-start': (this.state & 64
            /* SwipeStart */
            ) !== 0
          }
        });
      }

      get el() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get watchers() {
        return {
          "disabled": ["disabledChanged"]
        };
      }

      static get style() {
        return "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden}ion-item-sliding,ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}";
      }

    };

    const swipeShouldReset = (isResetDirection, isMovingFast, isOnResetZone) => {
      // The logic required to know when the sliding item should close (openAmount=0)
      // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
      // and it ended up being too complicated to be written manually without errors
      // so the truth table is attached below: (0=false, 1=true)
      // isResetDirection | isMovingFast | isOnResetZone || shouldClose
      //         0        |       0      |       0       ||    0
      //         0        |       0      |       1       ||    1
      //         0        |       1      |       0       ||    0
      //         0        |       1      |       1       ||    0
      //         1        |       0      |       0       ||    0
      //         1        |       0      |       1       ||    1
      //         1        |       1      |       0       ||    1
      //         1        |       1      |       1       ||    1
      // The resulting expression was generated by resolving the K-map (Karnaugh map):
      return !isMovingFast && isOnResetZone || isResetDirection && isMovingFast;
    };
    /***/

  }
}]);
//# sourceMappingURL=32-es5.js.map