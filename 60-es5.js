function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js ***!
    \*********************************************************************/

  /*! exports provided: ion_select, ion_select_option, ion_select_popover */

  /***/
  function node_modulesIonicCoreDistEsmIonSelect_3IosEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_select", function () {
      return Select;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_select_option", function () {
      return SelectOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_select_popover", function () {
      return SelectPopover;
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


    var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./overlays-10640d86.js */
    "./node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
    /* harmony import */


    var _watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./watch-options-2af96011.js */
    "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js");

    const Select = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = "ion-sel-".concat(selectIds++);
        this.didInit = false;
        this.isExpanded = false;
        /**
         * If `true`, the user cannot interact with the select.
         */

        this.disabled = false;
        /**
         * The text to display on the cancel button.
         */

        this.cancelText = 'Cancel';
        /**
         * The text to display on the ok button.
         */

        this.okText = 'OK';
        /**
         * The name of the control, which is submitted with the form data.
         */

        this.name = this.inputId;
        /**
         * If `true`, the select can accept multiple values.
         */

        this.multiple = false;
        /**
         * The interface the select should use: `action-sheet`, `popover` or `alert`.
         */

        this.interface = 'alert';
        /**
         * Any additional options that the `alert`, `action-sheet` or `popover` interface
         * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
         * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
         * [PopoverController API docs](../../popover/PopoverController/#create) for the
         * create options for each interface.
         */

        this.interfaceOptions = {};

        this.onClick = ev => {
          this.setFocus();
          this.open(ev);
        };

        this.onFocus = () => {
          this.ionFocus.emit();
        };

        this.onBlur = () => {
          this.ionBlur.emit();
        };

        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
        this.ionCancel = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionCancel", 7);
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
      }

      disabledChanged() {
        this.emitStyle();
      }

      valueChanged() {
        this.updateOptions();
        this.emitStyle();

        if (this.didInit) {
          this.ionChange.emit({
            value: this.value
          });
        }
      }

      connectedCallback() {
        var _this = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var checked;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (_this.value === undefined) {
                  if (_this.multiple) {
                    // there are no values set at this point
                    // so check to see who should be selected
                    checked = _this.childOpts.filter(o => o.selected);
                    _this.value = checked.map(o => getOptionValue(o));
                  } else {
                    checked = _this.childOpts.find(o => o.selected);

                    if (checked) {
                      _this.value = getOptionValue(checked);
                    }
                  }
                }

                _this.updateOptions();

                _this.updateOverlayOptions();

                _this.emitStyle();

                _this.mutationO = Object(_watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_5__["w"])(_this.el, 'ion-select-option',
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _this.updateOptions();

                        _this.updateOverlayOptions();

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                })));

              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }

      disconnectedCallback() {
        if (this.mutationO) {
          this.mutationO.disconnect();
          this.mutationO = undefined;
        }
      }

      componentDidLoad() {
        this.didInit = true;
      }
      /**
       * Open the select overlay. The overlay is either an alert, action sheet, or popover,
       * depending on the `interface` property on the `ion-select`.
       *
       * @param event The user interface event that called the open.
       */


      open(event) {
        var _this2 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          var overlay;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this2.disabled || _this2.isExpanded)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", undefined);

              case 2:
                _context3.next = 4;
                return _this2.createOverlay(event);

              case 4:
                overlay = _this2.overlay = _context3.sent;
                _this2.isExpanded = true;
                overlay.onDidDismiss().then(() => {
                  _this2.overlay = undefined;
                  _this2.isExpanded = false;

                  _this2.setFocus();
                });
                _context3.next = 9;
                return overlay.present();

              case 9:
                return _context3.abrupt("return", overlay);

              case 10:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }

      createOverlay(ev) {
        let selectInterface = this.interface;

        if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
          console.warn("Select interface cannot be \"".concat(selectInterface, "\" with a multi-value select. Using the \"alert\" interface instead."));
          selectInterface = 'alert';
        }

        if (selectInterface === 'popover' && !ev) {
          console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
          selectInterface = 'alert';
        }

        if (selectInterface === 'popover') {
          return this.openPopover(ev);
        }

        if (selectInterface === 'action-sheet') {
          return this.openActionSheet();
        }

        return this.openAlert();
      }

      updateOverlayOptions() {
        const overlay = this.overlay;

        if (!overlay) {
          return;
        }

        const childOpts = this.childOpts;

        switch (this.interface) {
          case 'action-sheet':
            overlay.buttons = this.createActionSheetButtons(childOpts);
            break;

          case 'popover':
            const popover = overlay.querySelector('ion-select-popover');

            if (popover) {
              popover.options = this.createPopoverOptions(childOpts);
            }

            break;

          case 'alert':
            const inputType = this.multiple ? 'checkbox' : 'radio';
            overlay.inputs = this.createAlertInputs(childOpts, inputType);
            break;
        }
      }

      createActionSheetButtons(data) {
        const actionSheetButtons = data.map(option => {
          return {
            role: option.selected ? 'selected' : '',
            text: option.textContent,
            handler: () => {
              this.value = getOptionValue(option);
            }
          };
        }); // Add "cancel" button

        actionSheetButtons.push({
          text: this.cancelText,
          role: 'cancel',
          handler: () => {
            this.ionCancel.emit();
          }
        });
        return actionSheetButtons;
      }

      createAlertInputs(data, inputType) {
        return data.map(o => {
          return {
            type: inputType,
            label: o.textContent,
            value: getOptionValue(o),
            checked: o.selected,
            disabled: o.disabled
          };
        });
      }

      createPopoverOptions(data) {
        return data.map(o => {
          const value = getOptionValue(o);
          return {
            text: o.textContent,
            value,
            checked: o.selected,
            disabled: o.disabled,
            handler: () => {
              this.value = value;
              this.close();
            }
          };
        });
      }

      openPopover(ev) {
        var _this3 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          var interfaceOptions, mode, popoverOpts;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                interfaceOptions = _this3.interfaceOptions;
                mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(_this3);
                popoverOpts = Object.assign(Object.assign({
                  mode
                }, interfaceOptions), {
                  component: 'ion-select-popover',
                  cssClass: ['select-popover', interfaceOptions.cssClass],
                  event: ev,
                  componentProps: {
                    header: interfaceOptions.header,
                    subHeader: interfaceOptions.subHeader,
                    message: interfaceOptions.message,
                    value: _this3.value,
                    options: _this3.createPopoverOptions(_this3.childOpts)
                  }
                });
                return _context4.abrupt("return", _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["c"].create(popoverOpts));

              case 4:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      }

      openActionSheet() {
        var _this4 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          var mode, interfaceOptions, actionSheetOpts;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(_this4);
                interfaceOptions = _this4.interfaceOptions;
                actionSheetOpts = Object.assign(Object.assign({
                  mode
                }, interfaceOptions), {
                  buttons: _this4.createActionSheetButtons(_this4.childOpts),
                  cssClass: ['select-action-sheet', interfaceOptions.cssClass]
                });
                return _context5.abrupt("return", _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["b"].create(actionSheetOpts));

              case 4:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }))();
      }

      openAlert() {
        var _this5 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          var label, labelText, interfaceOptions, inputType, mode, alertOpts;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                label = _this5.getLabel();
                labelText = label ? label.textContent : null;
                interfaceOptions = _this5.interfaceOptions;
                inputType = _this5.multiple ? 'checkbox' : 'radio';
                mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(_this5);
                alertOpts = Object.assign(Object.assign({
                  mode
                }, interfaceOptions), {
                  header: interfaceOptions.header ? interfaceOptions.header : labelText,
                  inputs: _this5.createAlertInputs(_this5.childOpts, inputType),
                  buttons: [{
                    text: _this5.cancelText,
                    role: 'cancel',
                    handler: () => {
                      _this5.ionCancel.emit();
                    }
                  }, {
                    text: _this5.okText,
                    handler: selectedValues => {
                      _this5.value = selectedValues;
                    }
                  }],
                  cssClass: ['select-alert', interfaceOptions.cssClass, _this5.multiple ? 'multiple-select-alert' : 'single-select-alert']
                });
                return _context6.abrupt("return", _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["a"].create(alertOpts));

              case 7:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }))();
      }
      /**
       * Close the select interface.
       */


      close() {
        // TODO check !this.overlay || !this.isFocus()
        if (!this.overlay) {
          return Promise.resolve(false);
        }

        return this.overlay.dismiss();
      }

      updateOptions() {
        // iterate all options, updating the selected prop
        let canSelect = true;
        const value = this.value,
              childOpts = this.childOpts,
              compareWith = this.compareWith,
              multiple = this.multiple;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = childOpts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            const selectOption = _step.value;
            const optValue = getOptionValue(selectOption);
            const selected = canSelect && isOptionSelected(value, optValue, compareWith);
            selectOption.selected = selected; // if current option is selected and select is single-option, we can't select
            // any option more

            if (selected && !multiple) {
              canSelect = false;
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

      getLabel() {
        return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el);
      }

      hasValue() {
        return this.getText() !== '';
      }

      get childOpts() {
        return Array.from(this.el.querySelectorAll('ion-select-option'));
      }

      getText() {
        const selectedText = this.selectedText;

        if (selectedText != null && selectedText !== '') {
          return selectedText;
        }

        return generateText(this.childOpts, this.value, this.compareWith);
      }

      setFocus() {
        if (this.buttonEl) {
          this.buttonEl.focus();
        }
      }

      emitStyle() {
        this.ionStyle.emit({
          'interactive': true,
          'select': true,
          'has-placeholder': this.placeholder != null,
          'has-value': this.hasValue(),
          'interactive-disabled': this.disabled,
          'select-disabled': this.disabled
        });
      }

      render() {
        const placeholder = this.placeholder,
              name = this.name,
              disabled = this.disabled,
              isExpanded = this.isExpanded,
              value = this.value,
              el = this.el;
        const mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const labelId = this.inputId + '-lbl';
        const label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);

        if (label) {
          label.id = labelId;
        }

        let addPlaceholderClass = false;
        let selectText = this.getText();

        if (selectText === '' && placeholder != null) {
          selectText = placeholder;
          addPlaceholderClass = true;
        }

        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, name, parseValue(value), disabled);
        const selectTextClasses = {
          'select-text': true,
          'select-placeholder': addPlaceholderClass
        };
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          onClick: this.onClick,
          role: "combobox",
          "aria-haspopup": "dialog",
          "aria-disabled": disabled ? 'true' : null,
          "aria-expanded": "".concat(isExpanded),
          "aria-labelledby": labelId,
          class: {
            [mode]: true,
            'in-item': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-item', el),
            'select-disabled': disabled
          }
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: selectTextClasses
        }, selectText), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "select-icon",
          role: "presentation"
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "select-icon-inner"
        })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
          type: "button",
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          disabled: disabled,
          ref: btnEl => this.buttonEl = btnEl
        }));
      }

      get el() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get watchers() {
        return {
          "disabled": ["disabledChanged"],
          "placeholder": ["disabledChanged"],
          "value": ["valueChanged"]
        };
      }

      static get style() {
        return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:12px;height:18px}";
      }

    };

    const getOptionValue = el => {
      const value = el.value;
      return value === undefined ? el.textContent || '' : value;
    };

    const parseValue = value => {
      if (value == null) {
        return undefined;
      }

      if (Array.isArray(value)) {
        return value.join(',');
      }

      return value.toString();
    };

    const isOptionSelected = (currentValue, compareValue, compareWith) => {
      if (currentValue === undefined) {
        return false;
      }

      if (Array.isArray(currentValue)) {
        return currentValue.some(val => compareOptions(val, compareValue, compareWith));
      } else {
        return compareOptions(currentValue, compareValue, compareWith);
      }
    };

    const compareOptions = (currentValue, compareValue, compareWith) => {
      if (typeof compareWith === 'function') {
        return compareWith(currentValue, compareValue);
      } else if (typeof compareWith === 'string') {
        return currentValue[compareWith] === compareValue[compareWith];
      } else {
        return currentValue === compareValue;
      }
    };

    const generateText = (opts, value, compareWith) => {
      if (value === undefined) {
        return '';
      }

      if (Array.isArray(value)) {
        return value.map(v => textForValue(opts, v, compareWith)).filter(opt => opt !== null).join(', ');
      } else {
        return textForValue(opts, value, compareWith) || '';
      }
    };

    const textForValue = (opts, value, compareWith) => {
      const selectOpt = opts.find(opt => {
        return compareOptions(getOptionValue(opt), value, compareWith);
      });
      return selectOpt ? selectOpt.textContent : null;
    };

    let selectIds = 0;
    const SelectOption = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = "ion-selopt-".concat(selectOptionIds++);
        /**
         * If `true`, the user cannot interact with the select option.
         */

        this.disabled = false;
        /**
         * If `true`, the element is selected.
         */

        this.selected = false;
      }

      render() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          role: "option",
          id: this.inputId,
          class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this)
        });
      }

      get el() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get style() {
        return ":host{display:none}";
      }

    };
    let selectOptionIds = 0;
    const SelectPopover = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Array of options for the popover */

        this.options = [];
      }

      onSelect(ev) {
        const option = this.options.find(o => o.value === ev.target.value);

        if (option) {
          Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["s"])(option.handler);
        }
      }

      render() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this)
        }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list", null, this.header !== undefined && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", {
          class: "ion-text-wrap"
        }, this.subHeader !== undefined && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, this.subHeader), this.message !== undefined && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, this.message))), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio-group", null, this.options.map(option => Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", null, option.text), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio", {
          checked: option.checked,
          value: option.value,
          disabled: option.disabled
        }))))));
      }

      static get style() {
        return ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-label.sc-ion-select-popover, .sc-ion-select-popover-h ion-list-header.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
      }

    };
    /***/
  }
}]);
//# sourceMappingURL=60-es5.js.map