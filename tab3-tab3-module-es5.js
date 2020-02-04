(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\tCrates\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div id=\"phaser-container-3\"></div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab3/phaser/CratePool.ts":
  /*!******************************************!*\
    !*** ./src/app/tab3/phaser/CratePool.ts ***!
    \******************************************/

  /*! exports provided: default, KEY_CRATE */

  /***/
  function srcAppTab3PhaserCratePoolTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return CratePool;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEY_CRATE", function () {
      return KEY_CRATE;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! phaser */
    "./node_modules/phaser/src/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);

    const KEY_CRATE = 'crate';

    class Crate extends phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Physics.Matter.Image {
      constructor(scene, x, y, key) {
        // need a wrapper Class to properly set the Matter World
        super(scene.matter.world, x, y, key);
      }

    }

    class CratePool extends phaser__WEBPACK_IMPORTED_MODULE_1___default.a.GameObjects.Group {
      constructor(scene, config = {}) {
        const defaults = {
          classType: Crate,
          maxSize: -1
        };
        super(scene, Object.assign(defaults, config));
      }

      initializeWithSize(size) {
        if (this.getLength() > 0 || size <= 0) {
          return;
        }

        this.createMultiple({
          key: KEY_CRATE,
          quantity: size,
          visible: false,
          active: false
        });
      }

      spawn(x = 0, y = 0, key = KEY_CRATE) {
        const spawnExisting = this.countActive(false) > 0;
        const crate = super.get(x, y, key);

        if (!crate) {
          return;
        }

        if (spawnExisting) {
          crate.setActive(true);
          crate.setVisible(true);
          crate.world.add(crate.body);
        }

        return crate;
      }

      despawn(crate) {
        crate.setActive(false);
        crate.setVisible(false);
        crate.removeInteractive();
        crate.world.remove(crate.body);
      }

    }

    phaser__WEBPACK_IMPORTED_MODULE_1___default.a.GameObjects.GameObjectFactory.register('cratePool', function () {
      // @ts-ignore
      return this.updateList.add(new CratePool(this.scene));
    });
    /***/
  },

  /***/
  "./src/app/tab3/phaser/CrateScene.ts":
  /*!*******************************************!*\
    !*** ./src/app/tab3/phaser/CrateScene.ts ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3PhaserCrateSceneTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return CratesScene;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! phaser */
    "./node_modules/phaser/src/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _CratePool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./CratePool */
    "./src/app/tab3/phaser/CratePool.ts");

    const INFO_FORMAT = "Size:       %1\nSpawned:    %2\nDespawned:  %3";

    class CratesScene extends phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scene {
      constructor() {
        super('crates-scene-physics');
      }

      preload() {
        this.load.image(_CratePool__WEBPACK_IMPORTED_MODULE_2__["KEY_CRATE"], 'assets/crate.png');
      }

      create() {
        this.matter.world.setBounds(0, -100, this.scale.width, this.scale.height + 100);
        this.group = this.add.cratePool();
        this.time.addEvent({
          delay: 500,
          loop: true,
          callback: () => {
            this.spawnCrate();
          }
        });
        this.infoText = this.add.text(16, 16, '');
        this.infoText.setDepth(1000);
      }

      update() {
        if (!this.group || !this.infoText) {
          return;
        }

        const size = this.group.getLength();
        const used = this.group.getTotalUsed();
        const text = phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Utils.String.Format(INFO_FORMAT, [size, used, size - used]);
        this.infoText.setText(text);
      }

      spawnCrate() {
        if (!this.group) {
          return;
        }

        if (this.group.countActive(true) >= 10) {
          return;
        }

        const tex = this.textures.get(_CratePool__WEBPACK_IMPORTED_MODULE_2__["KEY_CRATE"]);
        const halfWidth = tex.getSourceImage().width * 0.5;
        const x = phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Math.Between(halfWidth, this.scale.width - halfWidth);
        const crate = this.group.spawn(x, 0);

        if (!crate) {
          return;
        }

        crate.setInteractive().on(phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Input.Events.GAMEOBJECT_POINTER_UP, pointer => {
          this.group.despawn(crate);
        });
        return crate;
      }

    }
    /***/

  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");

    let Tab3PageModule = class Tab3PageModule {};
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }])],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! phaser */
    "./node_modules/phaser/src/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _phaser_CrateScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./phaser/CrateScene */
    "./src/app/tab3/phaser/CrateScene.ts"); // import HelloWorldScene from './phaser/HelloWorldScene'


    let Tab3Page = class Tab3Page {
      constructor() {}

      ionViewWillEnter() {
        const config = {
          parent: 'phaser-container-3',
          type: phaser__WEBPACK_IMPORTED_MODULE_2___default.a.AUTO,
          width: '100%',
          height: '100%',
          physics: {
            default: 'matter',
            matter: {
              debug: true
            }
          },
          scene: _phaser_CrateScene__WEBPACK_IMPORTED_MODULE_3__["default"]
        };
        this.game = new phaser__WEBPACK_IMPORTED_MODULE_2___default.a.Game(config);
      }

      ionViewDidLeave() {
        this.game.destroy(true);
        this.game = null;
      }

    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map