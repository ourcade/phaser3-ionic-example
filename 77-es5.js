function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js ***!
    \***********************************************************************/

  /*! exports provided: ion_virtual_scroll */

  /***/
  function node_modulesIonicCoreDistEsmIonVirtualScrollEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_virtual_scroll", function () {
      return VirtualScroll;
    });
    /* harmony import */


    var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-ca0488fc.js */
    "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");

    const CELL_TYPE_ITEM = 'item';
    const CELL_TYPE_HEADER = 'header';
    const CELL_TYPE_FOOTER = 'footer';
    const NODE_CHANGE_NONE = 0;
    const NODE_CHANGE_POSITION = 1;
    const NODE_CHANGE_CELL = 2;
    const MIN_READS = 2;

    const updateVDom = (dom, heightIndex, cells, range) => {
      // reset dom
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dom[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          const node = _step.value;
          node.change = NODE_CHANGE_NONE;
          node.d = true;
        } // try to match into exisiting dom

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

      const toMutate = [];
      const end = range.offset + range.length;

      for (let i = range.offset; i < end; i++) {
        const cell = cells[i];
        const node = dom.find(n => n.d && n.cell === cell);

        if (node) {
          const top = heightIndex[i];

          if (top !== node.top) {
            node.top = top;
            node.change = NODE_CHANGE_POSITION;
          }

          node.d = false;
        } else {
          toMutate.push(cell);
        }
      } // needs to append


      const pool = dom.filter(n => n.d);

      for (var _i = 0, _toMutate = toMutate; _i < _toMutate.length; _i++) {
        const cell = _toMutate[_i];
        const node = pool.find(n => n.d && n.cell.type === cell.type);
        const index = cell.i;

        if (node) {
          node.d = false;
          node.change = NODE_CHANGE_CELL;
          node.cell = cell;
          node.top = heightIndex[index];
        } else {
          dom.push({
            d: false,
            cell,
            visible: true,
            change: NODE_CHANGE_CELL,
            top: heightIndex[index]
          });
        }
      }

      dom.filter(n => n.d && n.top !== -9999).forEach(n => {
        n.change = NODE_CHANGE_POSITION;
        n.top = -9999;
      });
    };

    const doRender = (el, nodeRender, dom, updateCellHeight) => {
      const children = Array.from(el.children).filter(n => n.tagName !== 'TEMPLATE');
      const childrenNu = children.length;
      let child;

      for (let i = 0; i < dom.length; i++) {
        const node = dom[i];
        const cell = node.cell; // the cell change, the content must be updated

        if (node.change === NODE_CHANGE_CELL) {
          if (i < childrenNu) {
            child = children[i];
            nodeRender(child, cell, i);
          } else {
            const newChild = createNode(el, cell.type);
            child = nodeRender(newChild, cell, i) || newChild;
            child.classList.add('virtual-item');
            el.appendChild(child);
          }

          child['$ionCell'] = cell;
        } else {
          child = children[i];
        } // only update position when it changes


        if (node.change !== NODE_CHANGE_NONE) {
          child.style.transform = "translate3d(0,".concat(node.top, "px,0)");
        } // update visibility


        const visible = cell.visible;

        if (node.visible !== visible) {
          if (visible) {
            child.classList.remove('virtual-loading');
          } else {
            child.classList.add('virtual-loading');
          }

          node.visible = visible;
        } // dynamic height


        if (cell.reads > 0) {
          updateCellHeight(cell, child);
          cell.reads--;
        }
      }
    };

    const createNode = (el, type) => {
      const template = getTemplate(el, type);

      if (template && el.ownerDocument) {
        return el.ownerDocument.importNode(template.content, true).children[0];
      }

      return null;
    };

    const getTemplate = (el, type) => {
      switch (type) {
        case CELL_TYPE_ITEM:
          return el.querySelector('template:not([name])');

        case CELL_TYPE_HEADER:
          return el.querySelector('template[name=header]');

        case CELL_TYPE_FOOTER:
          return el.querySelector('template[name=footer]');
      }
    };

    const getViewport = (scrollTop, vierportHeight, margin) => {
      return {
        top: Math.max(scrollTop - margin, 0),
        bottom: scrollTop + vierportHeight + margin
      };
    };

    const getRange = (heightIndex, viewport, buffer) => {
      const topPos = viewport.top;
      const bottomPos = viewport.bottom; // find top index

      let i = 0;

      for (; i < heightIndex.length; i++) {
        if (heightIndex[i] > topPos) {
          break;
        }
      }

      const offset = Math.max(i - buffer - 1, 0); // find bottom index

      for (; i < heightIndex.length; i++) {
        if (heightIndex[i] >= bottomPos) {
          break;
        }
      }

      const end = Math.min(i + buffer, heightIndex.length);
      const length = end - offset;
      return {
        offset,
        length
      };
    };

    const getShouldUpdate = (dirtyIndex, currentRange, range) => {
      const end = range.offset + range.length;
      return dirtyIndex <= end || currentRange.offset !== range.offset || currentRange.length !== range.length;
    };

    const findCellIndex = (cells, index) => {
      const max = cells.length > 0 ? cells[cells.length - 1].index : 0;

      if (index === 0) {
        return 0;
      } else if (index === max + 1) {
        return cells.length;
      } else {
        return cells.findIndex(c => c.index === index);
      }
    };

    const inplaceUpdate = (dst, src, offset) => {
      if (offset === 0 && src.length >= dst.length) {
        return src;
      }

      for (let i = 0; i < src.length; i++) {
        dst[i + offset] = src[i];
      }

      return dst;
    };

    const calcCells = (items, itemHeight, headerHeight, footerHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) => {
      const cells = [];
      const end = len + offset;

      for (let i = offset; i < end; i++) {
        const item = items[i];

        if (headerFn) {
          const value = headerFn(item, i, items);

          if (value != null) {
            cells.push({
              i: j++,
              type: CELL_TYPE_HEADER,
              value,
              index: i,
              height: headerHeight ? headerHeight(value, i) : approxHeaderHeight,
              reads: headerHeight ? 0 : MIN_READS,
              visible: !!headerHeight
            });
          }
        }

        cells.push({
          i: j++,
          type: CELL_TYPE_ITEM,
          value: item,
          index: i,
          height: itemHeight ? itemHeight(item, i) : approxItemHeight,
          reads: itemHeight ? 0 : MIN_READS,
          visible: !!itemHeight
        });

        if (footerFn) {
          const value = footerFn(item, i, items);

          if (value != null) {
            cells.push({
              i: j++,
              type: CELL_TYPE_FOOTER,
              value,
              index: i,
              height: footerHeight ? footerHeight(value, i) : approxFooterHeight,
              reads: footerHeight ? 0 : MIN_READS,
              visible: !!footerHeight
            });
          }
        }
      }

      return cells;
    };

    const calcHeightIndex = (buf, cells, index) => {
      let acum = buf[index];

      for (let i = index; i < buf.length; i++) {
        buf[i] = acum;
        acum += cells[i].height;
      }

      return acum;
    };

    const resizeBuffer = (buf, len) => {
      if (!buf) {
        return new Uint32Array(len);
      }

      if (buf.length === len) {
        return buf;
      } else if (len > buf.length) {
        const newBuf = new Uint32Array(len);
        newBuf.set(buf);
        return newBuf;
      } else {
        return buf.subarray(0, len);
      }
    };

    const positionForIndex = (index, cells, heightIndex) => {
      const cell = cells.find(c => c.type === CELL_TYPE_ITEM && c.index === index);

      if (cell) {
        return heightIndex[cell.i];
      }

      return -1;
    };

    const VirtualScroll = class {
      constructor(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.range = {
          offset: 0,
          length: 0
        };
        this.viewportHeight = 0;
        this.cells = [];
        this.virtualDom = [];
        this.isEnabled = false;
        this.viewportOffset = 0;
        this.currentScrollTop = 0;
        this.indexDirty = 0;
        this.lastItemLen = 0;
        this.totalHeight = 0;
        /**
         * It is important to provide this
         * if virtual item height will be significantly larger than the default
         * The approximate height of each virtual item template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */

        this.approxItemHeight = 45;
        /**
         * The approximate height of each header template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */

        this.approxHeaderHeight = 30;
        /**
         * The approximate width of each footer template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */

        this.approxFooterHeight = 30;

        this.onScroll = () => {
          this.updateVirtualScroll();
        };
      }

      itemsChanged() {
        this.calcCells();
        this.updateVirtualScroll();
      }

      connectedCallback() {
        var _this = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var contentEl;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                contentEl = _this.el.closest('ion-content');

                if (contentEl) {
                  _context.next = 4;
                  break;
                }

                console.error('<ion-virtual-scroll> must be used inside an <ion-content>');
                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return contentEl.getScrollElement();

              case 6:
                _this.scrollEl = _context.sent;
                _this.contentEl = contentEl;

                _this.calcCells();

                _this.updateState();

              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }

      componentDidUpdate() {
        this.updateState();
      }

      disconnectedCallback() {
        this.scrollEl = undefined;
      }

      onResize() {
        this.calcCells();
        this.updateVirtualScroll();
      }
      /**
       * Returns the position of the virtual item at the given index.
       */


      positionForItem(index) {
        return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
      }
      /**
       * This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as
       * dirty any time the content or their style changes.
       *
       * The subset of items to be updated can are specifing by an offset and a length.
       */


      checkRange(offset, len = -1) {
        var _this2 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var length, cellIndex, cells;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.items) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                length = len === -1 ? _this2.items.length - offset : len;
                cellIndex = findCellIndex(_this2.cells, offset);
                cells = calcCells(_this2.items, _this2.itemHeight, _this2.headerHeight, _this2.footerHeight, _this2.headerFn, _this2.footerFn, _this2.approxHeaderHeight, _this2.approxFooterHeight, _this2.approxItemHeight, cellIndex, offset, length);
                _this2.cells = inplaceUpdate(_this2.cells, cells, cellIndex);
                _this2.lastItemLen = _this2.items.length;
                _this2.indexDirty = Math.max(offset - 1, 0);

                _this2.scheduleUpdate();

              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
      /**
       * This method marks the tail the items array as dirty, so they can be re-rendered.
       *
       * It's equivalent to calling:
       *
       * ```js
       * virtualScroll.checkRange(lastItemLen);
       * ```
       */


      checkEnd() {
        var _this3 = this;

        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3.items) {
                  _this3.checkRange(_this3.lastItemLen);
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }

      updateVirtualScroll() {
        // do nothing if virtual-scroll is disabled
        if (!this.isEnabled || !this.scrollEl) {
          return;
        } // unschedule future updates


        if (this.timerUpdate) {
          clearTimeout(this.timerUpdate);
          this.timerUpdate = undefined;
        } // schedule DOM operations into the stencil queue


        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.readVS.bind(this));
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(this.writeVS.bind(this));
      }

      readVS() {
        const contentEl = this.contentEl,
              scrollEl = this.scrollEl,
              el = this.el;
        let topOffset = 0;
        let node = el;

        while (node && node !== contentEl) {
          topOffset += node.offsetTop;
          node = node.parentElement;
        }

        this.viewportOffset = topOffset;

        if (scrollEl) {
          this.viewportHeight = scrollEl.offsetHeight;
          this.currentScrollTop = scrollEl.scrollTop;
        }
      }

      writeVS() {
        const dirtyIndex = this.indexDirty; // get visible viewport

        const scrollTop = this.currentScrollTop - this.viewportOffset;
        const viewport = getViewport(scrollTop, this.viewportHeight, 100); // compute lazily the height index

        const heightIndex = this.getHeightIndex(); // get array bounds of visible cells base in the viewport

        const range = getRange(heightIndex, viewport, 2); // fast path, do nothing

        const shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);

        if (!shouldUpdate) {
          return;
        }

        this.range = range; // in place mutation of the virtual DOM

        updateVDom(this.virtualDom, heightIndex, this.cells, range); // Write DOM
        // Different code paths taken depending of the render API used

        if (this.nodeRender) {
          doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
        } else if (this.domRender) {
          this.domRender(this.virtualDom);
        } else if (this.renderItem) {
          this.el.forceUpdate();
        }
      }

      updateCellHeight(cell, node) {
        const update = () => {
          if (node['$ionCell'] === cell) {
            const style = window.getComputedStyle(node);
            const height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));
            this.setCellHeight(cell, height);
          }
        };

        if (node && node.componentOnReady) {
          node.componentOnReady().then(update);
        } else {
          update();
        }
      }

      setCellHeight(cell, height) {
        const index = cell.i; // the cell might changed since the height update was scheduled

        if (cell !== this.cells[index]) {
          return;
        }

        if (cell.height !== height || cell.visible !== true) {
          cell.visible = true;
          cell.height = height;
          this.indexDirty = Math.min(this.indexDirty, index);
          this.scheduleUpdate();
        }
      }

      scheduleUpdate() {
        clearTimeout(this.timerUpdate);
        this.timerUpdate = setTimeout(() => this.updateVirtualScroll(), 100);
      }

      updateState() {
        const shouldEnable = !!(this.scrollEl && this.cells);

        if (shouldEnable !== this.isEnabled) {
          this.enableScrollEvents(shouldEnable);

          if (shouldEnable) {
            this.updateVirtualScroll();
          }
        }
      }

      calcCells() {
        if (!this.items) {
          return;
        }

        this.lastItemLen = this.items.length;
        this.cells = calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
        this.indexDirty = 0;
      }

      getHeightIndex() {
        if (this.indexDirty !== Infinity) {
          this.calcHeightIndex(this.indexDirty);
        }

        return this.heightIndex;
      }

      calcHeightIndex(index = 0) {
        // TODO: optimize, we don't need to calculate all the cells
        this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
        this.totalHeight = calcHeightIndex(this.heightIndex, this.cells, index);
        this.indexDirty = Infinity;
      }

      enableScrollEvents(shouldListen) {
        if (this.rmEvent) {
          this.rmEvent();
          this.rmEvent = undefined;
        }

        const scrollEl = this.scrollEl;

        if (scrollEl) {
          this.isEnabled = shouldListen;
          scrollEl.addEventListener('scroll', this.onScroll);

          this.rmEvent = () => {
            scrollEl.removeEventListener('scroll', this.onScroll);
          };
        }
      }

      renderVirtualNode(node) {
        const _node$cell = node.cell,
              type = _node$cell.type,
              value = _node$cell.value,
              index = _node$cell.index;

        switch (type) {
          case CELL_TYPE_ITEM:
            return this.renderItem(value, index);

          case CELL_TYPE_HEADER:
            return this.renderHeader(value, index);

          case CELL_TYPE_FOOTER:
            return this.renderFooter(value, index);
        }
      }

      render() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          style: {
            height: "".concat(this.totalHeight, "px")
          }
        }, this.renderItem && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(VirtualProxy, {
          dom: this.virtualDom
        }, this.virtualDom.map(node => this.renderVirtualNode(node))));
      }

      get el() {
        return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get watchers() {
        return {
          "itemHeight": ["itemsChanged"],
          "headerHeight": ["itemsChanged"],
          "footerHeight": ["itemsChanged"],
          "items": ["itemsChanged"]
        };
      }

      static get style() {
        return "ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute!important;top:0!important;right:0!important;left:0!important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}";
      }

    };

    const VirtualProxy = ({
      dom
    }, children, utils) => {
      return utils.map(children, (child, i) => {
        const node = dom[i];
        const vattrs = child.vattrs || {};
        let classes = vattrs.class || '';
        classes += 'virtual-item ';

        if (!node.visible) {
          classes += 'virtual-loading';
        }

        return Object.assign(Object.assign({}, child), {
          vattrs: Object.assign(Object.assign({}, vattrs), {
            class: classes,
            style: Object.assign(Object.assign({}, vattrs.style), {
              transform: "translate3d(0,".concat(node.top, "px,0)")
            })
          })
        });
      });
    };
    /***/

  }
}]);
//# sourceMappingURL=77-es5.js.map