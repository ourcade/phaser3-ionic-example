(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\tFlappy Bird\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div id=\"phaser-container-2\"></div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab2/game/GameScene.ts":
  /*!****************************************!*\
    !*** ./src/app/tab2/game/GameScene.ts ***!
    \****************************************/

  /*! exports provided: default, SCENE_KEY */

  /***/
  function srcAppTab2GameGameSceneTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return GameScene;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCENE_KEY", function () {
      return SCENE_KEY;
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

    const SCENE_KEY = 'flappy-bird-game';
    const xGap = 250;

    class GameScene extends phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scene {
      constructor() {
        super(SCENE_KEY);
        this.score = 0;
        this.hitflag = false;
        this.isPaused = false;
        this.gameOver = false;
        this.countpipe = 0;
      }

      preload() {
        this.load.image('sky', 'assets/flappy/sky.png');
        this.load.image('pipeb', 'assets/flappy/pipeb.png');
        this.load.image('pipet', 'assets/flappy/pipet.png');
        this.load.spritesheet('birdy', 'assets/flappy/birdy.png', {
          frameWidth: 34,
          frameHeight: 24
        });
        this.load.audio('flap', './assets/flappy/sounds/sfx_wing.ogg');
        this.load.audio('hit', './assets/flappy/sounds/sfx_hit.ogg');
        this.load.audio('die', './assets/flappy/sounds/sfx_die.ogg');
        this.load.audio('score', './assets/flappy/sounds/sfx_point.ogg');
      }

      create() {
        const gameWidth = this.scale.width;
        const gameHeight = this.scale.height;
        const colors = ['0x1fbde0', '0x0a4957', '0x08272e'];
        const randColor = colors[Math.floor(Math.random() * colors.length)];
        this.cameras.main.setBackgroundColor(randColor);
        const birdyX = gameWidth / 2 - 50;
        const birdyY = gameHeight / 2 - 50; // Add score text

        this.scoreText = this.add.text(birdyX, gameHeight / 4, this.score.toString(), {
          fontFamily: '"04b19"',
          fontSize: 60,
          color: '#fff'
        });
        this.platforms = this.physics.add.staticGroup();
        const pipePos = gameWidth + 2 * xGap;
        const pos = this.getRandom(); // bottom placable at 260+gap to height

        this.platforms.create(pipePos, pos[0], 'pipeb').setScale(1).refreshBody();
        this.platforms.create(pipePos, pos[1], 'pipet').setScale(1).refreshBody();
        this.player = this.physics.add.sprite(birdyX, birdyY, 'birdy');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.anims.create({
          key: 'flap',
          frames: this.anims.generateFrameNumbers('birdy', {
            start: 0,
            end: 3
          }),
          frameRate: 20,
          repeat: 0
        });
        this.player.body.setGravityY(300);
        this.physics.add.collider(this.player, this.platforms, this.playerHit, null, this); // this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        this.input.keyboard.on('keydown-' + 'SPACE', this.flapNow, this); // touch support

        this.input.on('pointerdown', this.flapNow, this);
      }

      update() {
        const gameWidth = this.scale.width;
        const gameHeight = this.scale.height;
        const children = this.platforms.getChildren();
        children.forEach(child => {
          if (child instanceof phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Physics.Arcade.Sprite) {
            child.refreshBody();
            child.x += -3; // when one set of pipe is just shown
            // @ts-ignore

            if (child.x <= gameWidth && !child.drawn) {
              this.countpipe += 1; // @ts-ignore

              child.drawn = true;

              if (this.countpipe >= 2) {
                const pos = this.getRandom();
                console.log('created one');
                this.platforms.create(gameWidth + xGap, pos[0], 'pipeb').setScale(1).refreshBody();
                this.platforms.create(gameWidth + xGap, pos[1], 'pipet').setScale(1).refreshBody();
                this.countpipe = 0;
              } // child.x = game.canvas.width+pipeWidth;
              // child.y = getRandom()[0];

            }

            if (child.x <= -50) {
              console.log('Destroyed one ' + this.countpipe);
              child.destroy();
            }

            const birdyX = gameWidth / 2 - 50; // check if pipe passed bird (birdyX)
            // @ts-ignore

            if (child.x < birdyX && !this.gameOver && child.texture.key === 'pipeb' && !child.scored) {
              // only check one pipe
              // @ts-ignore
              child.scored = true;
              this.score += 1;
              this.scoreText.setText(this.score.toString());
              this.game.sound.play('score');
              console.log('score:', this.score);
            }
          }
        }); // set lower Bounds
        // console.log("y= ",player.y)

        if (this.player.y > gameHeight + 200) {
          console.log('y= ', this.player.y);
          this.endGame();
        } // set upper Bounds


        if (this.player.y < -200) {
          console.log('y= ', this.player.y);
          this.endGame();
        }
      }

      flapNow() {
        if (this.gameOver) {
          return;
        }

        if (this.isPaused) {
          this.resume();
        } // console.log("flap")


        this.player.setVelocityY(-330);
        this.game.sound.play('flap');
      }

      playerHit() {
        if (this.hitflag) {
          return;
        }

        console.log('Player hit!!!!!!!!!');
        this.game.sound.play('hit');
        this.hitflag = true;
        setTimeout(() => {
          this.playerDead();
        }, 200);
      }

      playerDead() {
        console.log('Player dead!!!!!!!!!');
        this.game.sound.play('die');
        this.player.setCollideWorldBounds(false);
        this.gameOver = true;
      }

      getRandom() {
        const safePadding = 25;
        const gap = 150;
        const min = Math.ceil(safePadding + gap / 2);
        const max = Math.floor(this.game.canvas.height - safePadding - gap / 2);
        const ran = Math.floor(Math.random() * (max - min + 1)) + min;
        const rantop = ran - (gap / 2 + 260);
        const ranbot = ran + (gap / 2 + 260);
        console.log(ranbot, rantop);
        return [ranbot, rantop];
      }

      endGame() {
        this.gameOver = true;
        this.pause();
        console.log('game paused');
        this.player.y = 450;
      }

      pause() {
        console.log('pause');
        this.isPaused = true;
        this.game.scene.pause(SCENE_KEY);
      }

      resume() {
        console.log('resume');
        this.isPaused = false;
        this.game.scene.resume(SCENE_KEY);
      }

    }
    /***/

  },

  /***/
  "./src/app/tab2/game/config.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/game/config.ts ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2GameConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
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

    const config = {
      type: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.AUTO,
      width: '100%',
      height: '100%',
      scale: {
        mode: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scale.FIT,
        parent: 'phaser-container-2',
        autoCenter: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scale.CENTER_BOTH
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {
            y: 550
          },
          debug: false
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = config;
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");

    let Tab2PageModule = class Tab2PageModule {};
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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


    var _game_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./game/config */
    "./src/app/tab2/game/config.ts");
    /* harmony import */


    var _game_GameScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./game/GameScene */
    "./src/app/tab2/game/GameScene.ts");

    let Tab2Page = class Tab2Page {
      constructor() {}

      ionViewWillEnter() {
        this.game = new phaser__WEBPACK_IMPORTED_MODULE_2___default.a.Game(_game_config__WEBPACK_IMPORTED_MODULE_3__["default"]);
        this.game.scene.add(_game_GameScene__WEBPACK_IMPORTED_MODULE_4__["SCENE_KEY"], _game_GameScene__WEBPACK_IMPORTED_MODULE_4__["default"], true);
      }

      ionViewDidLeave() {
        this.game.destroy(true);
        this.game = null;
      }

    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map