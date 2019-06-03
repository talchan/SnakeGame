/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar snakeGame = __webpack_require__(/*! ./snakeGame */ \"./src/snakeGame.ts\");\r\n// ロード時に自動実行\r\nwindow.onload = function () {\r\n    // ゲーム画面のサイズを設定\r\n    var windowWidth = window.innerWidth;\r\n    var windowHeight = window.innerHeight;\r\n    // ゲーム画面を横幅に合わせて自動調整\r\n    if (windowWidth * 1.3 > windowHeight) {\r\n        windowWidth = windowHeight / 1.3;\r\n    }\r\n    ;\r\n    // ゲーム画面を描写するDOMを設定\r\n    var gameArea = document.getElementById('gameArea');\r\n    //DOMが見つからない場合はゲームを呼び出さない\r\n    if (gameArea != null)\r\n        snakeGame.init(8, 8, windowWidth, gameArea);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/gameInput.ts":
/*!**************************!*\
  !*** ./src/gameInput.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar keys;\r\n(function (keys) {\r\n    keys[keys[\"Default\"] = 0] = \"Default\";\r\n    keys[keys[\"Down\"] = 1] = \"Down\";\r\n    keys[keys[\"Left\"] = 2] = \"Left\";\r\n    keys[keys[\"Up\"] = 3] = \"Up\";\r\n    keys[keys[\"Right\"] = 4] = \"Right\";\r\n})(keys = exports.keys || (exports.keys = {}));\r\nvar keyCodes;\r\n(function (keyCodes) {\r\n    keyCodes[\"ArrowDown\"] = \"ArrowDown\";\r\n    keyCodes[\"ArrowLeft\"] = \"ArrowLeft\";\r\n    keyCodes[\"ArrowUp\"] = \"ArrowUp\";\r\n    keyCodes[\"ArrowRight\"] = \"ArrowRight\";\r\n})(keyCodes = exports.keyCodes || (exports.keyCodes = {}));\r\nvar inputKey = \"\";\r\nfunction getInputKey() {\r\n    if (inputKey == keyCodes.ArrowDown)\r\n        return keys.Down;\r\n    if (inputKey == keyCodes.ArrowLeft)\r\n        return keys.Left;\r\n    if (inputKey == keyCodes.ArrowUp)\r\n        return keys.Up;\r\n    if (inputKey == keyCodes.ArrowRight)\r\n        return keys.Right;\r\n    return keys.Default;\r\n}\r\nexports.getInputKey = getInputKey;\r\ndocument.onkeydown = function (e) {\r\n    inputKey = e.key;\r\n};\r\nfunction linkInput(_inputkey) {\r\n    inputKey = _inputkey;\r\n}\r\nexports.linkInput = linkInput;\r\nfunction ClearInput() {\r\n    inputKey = \"\";\r\n}\r\nexports.ClearInput = ClearInput;\r\n\n\n//# sourceURL=webpack:///./src/gameInput.ts?");

/***/ }),

/***/ "./src/snakeGame.ts":
/*!**************************!*\
  !*** ./src/snakeGame.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar gIn = __webpack_require__(/*! ./gameInput */ \"./src/gameInput.ts\");\r\n// ゲームクラス定義\r\n// マップ上の位置を定義\r\nvar mapPoint = /** @class */ (function () {\r\n    function mapPoint(x, y) {\r\n        if (x === void 0) { x = 0; }\r\n        if (y === void 0) { y = 0; }\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    return mapPoint;\r\n}());\r\n// 蛇を定義\r\nvar snake = /** @class */ (function () {\r\n    function snake(x, y) {\r\n        this.eatFlag = false;\r\n        this.body = [new mapPoint(x, y)];\r\n    }\r\n    snake.prototype.getBodyParts = function (z) {\r\n        return this.body[z];\r\n    };\r\n    snake.prototype.getLength = function () {\r\n        return this.body.length;\r\n    };\r\n    snake.prototype.move = function (x, y) {\r\n        // 頭を追加\r\n        this.body.unshift(new mapPoint());\r\n        this.body[0].x = x;\r\n        this.body[0].y = y;\r\n        // 餌を食べていなければ尻尾を削除\r\n        if (this.eatFlag) {\r\n            this.eatFlag = false;\r\n        }\r\n        else {\r\n            this.body.pop();\r\n        }\r\n    };\r\n    snake.prototype.eat = function () {\r\n        this.eatFlag = true;\r\n    };\r\n    return snake;\r\n}());\r\n// ゲーム画面を定義\r\nvar gameWindow = /** @class */ (function () {\r\n    function gameWindow(_x, _y, _width, _gameArea) {\r\n        var _this = this;\r\n        this.mapX = _x;\r\n        this.mapY = _y;\r\n        this.boxMap = new Array(this.mapX);\r\n        for (var i = 0; i < this.mapX; i++) {\r\n            this.boxMap[i] = new Array(this.mapY);\r\n            for (var j = 0; j < this.mapY; j++) {\r\n                this.boxMap[i][j] = 0;\r\n            }\r\n        }\r\n        // ゲームマップを描写\r\n        this.windowWidth = _width - (_width % this.mapX);\r\n        this.windowHeight = this.windowWidth;\r\n        this.boxSize = Math.floor(this.windowWidth / this.mapX);\r\n        this.gameErea = _gameArea;\r\n        this.svgArea = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\r\n        this.svgArea.setAttribute(\"id\", \"svgArea\");\r\n        this.svgArea.setAttribute(\"style\", \"background-color:#ddd\");\r\n        this.svgArea.setAttribute(\"width\", this.windowWidth.toString());\r\n        this.svgArea.setAttribute(\"height\", this.windowHeight.toString());\r\n        this.gameErea.appendChild(this.svgArea);\r\n        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');\r\n        text.innerHTML = \"Game Start\";\r\n        text.setAttribute(\"x\", (this.windowWidth / 2).toString());\r\n        text.setAttribute(\"y\", (this.windowHeight / 2).toString());\r\n        text.setAttribute(\"text-anchor\", \"middle\");\r\n        text.setAttribute(\"dominant-baseline\", \"central\");\r\n        text.setAttribute(\"font-size\", \"20px\");\r\n        text.addEventListener('click', function () {\r\n            gameStart();\r\n        }, false);\r\n        this.svgArea.appendChild(text);\r\n        // 操作ボタン部を描写\r\n        var controlerArea = document.createElement(\"div\");\r\n        var downButton = document.createElement(\"button\");\r\n        downButton.addEventListener('click', function () {\r\n            gIn.linkInput(gIn.keyCodes.ArrowDown);\r\n        }, false);\r\n        downButton.innerText = \"Down\";\r\n        var leftButton = document.createElement(\"button\");\r\n        leftButton.addEventListener('click', function () {\r\n            gIn.linkInput(gIn.keyCodes.ArrowLeft);\r\n        }, false);\r\n        leftButton.innerText = \"Left\";\r\n        var upButton = document.createElement(\"button\");\r\n        upButton.addEventListener('click', function () {\r\n            gIn.linkInput(gIn.keyCodes.ArrowUp);\r\n        }, false);\r\n        upButton.innerText = \"Up\";\r\n        var rightButton = document.createElement(\"button\");\r\n        rightButton.addEventListener('click', function () {\r\n            gIn.linkInput(gIn.keyCodes.ArrowRight);\r\n        }, false);\r\n        rightButton.innerText = \"Right\";\r\n        controlerArea.appendChild(downButton);\r\n        controlerArea.appendChild(leftButton);\r\n        controlerArea.appendChild(upButton);\r\n        controlerArea.appendChild(rightButton);\r\n        controlerArea.querySelectorAll(\"button\").forEach(function (_button) {\r\n            _button.setAttribute(\"style\", \"width:\" + Math.floor(_this.windowWidth / controlerArea.querySelectorAll(\"button\").length).toString() + \"px;\"\r\n                + \"height:\" + Math.floor(_this.windowWidth * 0.2).toString() + \"px;\");\r\n        });\r\n        this.gameErea.appendChild(controlerArea);\r\n    }\r\n    Object.defineProperty(gameWindow.prototype, \"getMapX\", {\r\n        get: function () {\r\n            return this.mapX;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(gameWindow.prototype, \"getMapY\", {\r\n        get: function () {\r\n            return this.mapY;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    gameWindow.prototype.makeMap = function () {\r\n        for (var i = 0; i < this.mapY; i++) {\r\n            for (var j = 0; j < this.mapX; j++) {\r\n                var box = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\r\n                box.setAttribute(\"width\", this.boxSize.toString());\r\n                box.setAttribute(\"height\", this.boxSize.toString());\r\n                box.setAttribute(\"x\", (j * this.boxSize).toString());\r\n                box.setAttribute(\"y\", (i * this.boxSize).toString());\r\n                box.setAttribute(\"stroke\", \"black\");\r\n                box.setAttribute(\"fill\", \"#fff\");\r\n                box.setAttribute(\"strokestroke-width\", \"2\");\r\n                for (var k = 0; k < iSnake.getLength(); k++) {\r\n                    var snakeBodyParts = iSnake.getBodyParts(k);\r\n                    if (i == snakeBodyParts.y && j == snakeBodyParts.x) {\r\n                        box.setAttribute(\"fill\", \"#111\");\r\n                    }\r\n                }\r\n                for (var k = 0; k < iSnake.getLength(); k++) {\r\n                    if (i == iFood.y && j == iFood.x) {\r\n                        box.setAttribute(\"fill\", \"#111\");\r\n                    }\r\n                }\r\n                this.svgArea.appendChild(box);\r\n            }\r\n        }\r\n    };\r\n    gameWindow.prototype.drawMap = function () {\r\n        var elementNum = 0;\r\n        for (var i = 0; i < this.mapY; i++) {\r\n            for (var j = 0; j < this.mapX; j++) {\r\n                var box = this.svgArea.children[elementNum];\r\n                box.setAttribute(\"width\", this.boxSize.toString());\r\n                box.setAttribute(\"height\", this.boxSize.toString());\r\n                box.setAttribute(\"x\", (j * this.boxSize).toString());\r\n                box.setAttribute(\"y\", (i * this.boxSize).toString());\r\n                box.setAttribute(\"stroke\", \"black\");\r\n                box.setAttribute(\"fill\", \"#fff\");\r\n                box.setAttribute(\"strokestroke-width\", \"2\");\r\n                for (var k = 0; k < iSnake.getLength(); k++) {\r\n                    var snakeBodyParts = iSnake.getBodyParts(k);\r\n                    if (i == snakeBodyParts.y && j == snakeBodyParts.x) {\r\n                        box.setAttribute(\"fill\", \"#111\");\r\n                    }\r\n                }\r\n                for (var k = 0; k < iSnake.getLength(); k++) {\r\n                    if (i == iFood.y && j == iFood.x) {\r\n                        box.setAttribute(\"fill\", \"#111\");\r\n                    }\r\n                }\r\n                elementNum++;\r\n            }\r\n        }\r\n    };\r\n    gameWindow.prototype.deleteMap = function () {\r\n        if (this.svgArea.firstChild) {\r\n            this.svgArea.removeChild(this.svgArea.firstChild);\r\n        }\r\n        else {\r\n            //全部削除し終わったら初期化\r\n            clearInterval(gameMaster);\r\n            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');\r\n            text.innerHTML = \"蛇の長さ : \" + iSnake.getLength().toString() + \" Restart?\";\r\n            text.setAttribute(\"x\", (this.windowWidth / 2).toString());\r\n            text.setAttribute(\"y\", (this.windowHeight / 2).toString());\r\n            text.setAttribute(\"text-anchor\", \"middle\");\r\n            text.setAttribute(\"dominant-baseline\", \"central\");\r\n            text.setAttribute(\"font-size\", \"20px\");\r\n            text.addEventListener('click', function () {\r\n                gameStart();\r\n            }, false);\r\n            this.svgArea.appendChild(text);\r\n        }\r\n    };\r\n    gameWindow.prototype.clearMap = function () {\r\n        while (this.svgArea.firstChild) {\r\n            this.svgArea.removeChild(this.svgArea.firstChild);\r\n        }\r\n    };\r\n    return gameWindow;\r\n}());\r\n// 餌を撒く\r\nfunction feedFood(_gameWindow, _snake) {\r\n    var mapPointArray = {};\r\n    for (var i = 0; i < _gameWindow.getMapX; i++) {\r\n        for (var j = 0; j < _gameWindow.getMapY; j++) {\r\n            mapPointArray[\"x\" + i.toString() + \"y\" + j.toString()] = { x: i, y: j };\r\n        }\r\n    }\r\n    // 蛇の体分ループ\r\n    for (var k = 0; k < _snake.getLength(); k++) {\r\n        var snakeBodyParts = _snake.getBodyParts(k);\r\n        // 蛇の体があったら抜ける\r\n        delete mapPointArray[\"x\" + snakeBodyParts.x.toString() + \"y\" + snakeBodyParts.y.toString()];\r\n    }\r\n    // 蛇の体に一致しなかったマップからランダムで餌を配置するところを選ぶ\r\n    var randomNum = Math.floor(Math.random() * (Object.keys(mapPointArray).length - 1));\r\n    var randomPoint = mapPointArray[Object.keys(mapPointArray)[randomNum]];\r\n    return new mapPoint(randomPoint.x, randomPoint.y);\r\n}\r\n// ゲーム制御\r\nvar gameMaster; //イベントタイマー\r\nvar iGameWindow; //ゲームマップ\r\nvar iSnake; //ヘビ\r\nvar iFood;\r\nfunction gameStart() {\r\n    gIn.ClearInput();\r\n    iSnake = new snake(0, 0);\r\n    iFood = feedFood(iGameWindow, iSnake);\r\n    iGameWindow.clearMap();\r\n    iGameWindow.makeMap();\r\n    clearInterval(gameMaster);\r\n    gameMaster = window.setInterval(function () { return gameTick(); }, 300);\r\n}\r\nfunction gameTick() {\r\n    // 蛇の動く先計算\r\n    var headPoint = iSnake.getBodyParts(0);\r\n    var movePoint = new mapPoint(headPoint.x + 1, headPoint.y);\r\n    if (gIn.getInputKey() == gIn.keys.Down)\r\n        movePoint = new mapPoint(headPoint.x, headPoint.y + 1);\r\n    if (gIn.getInputKey() == gIn.keys.Left)\r\n        movePoint = new mapPoint(headPoint.x - 1, headPoint.y);\r\n    if (gIn.getInputKey() == gIn.keys.Up)\r\n        movePoint = new mapPoint(headPoint.x, headPoint.y - 1);\r\n    if (gIn.getInputKey() == gIn.keys.Right)\r\n        movePoint = new mapPoint(headPoint.x + 1, headPoint.y);\r\n    if (gIn.getInputKey() == gIn.keys.Default)\r\n        movePoint = new mapPoint(headPoint.x, headPoint.y + 1);\r\n    // 壁当たり判定\r\n    if (movePoint.x >= iGameWindow.getMapX || movePoint.x < 0)\r\n        gameEnd();\r\n    if (movePoint.y >= iGameWindow.getMapY || movePoint.y < 0)\r\n        gameEnd();\r\n    // 自食判定\r\n    for (var i = 0; i < iSnake.getLength() - 1; i++) {\r\n        if (movePoint.x == iSnake.getBodyParts(i).x && movePoint.y == iSnake.getBodyParts(i).y)\r\n            gameEnd();\r\n    }\r\n    // 蛇を動かす\r\n    iSnake.move(movePoint.x, movePoint.y);\r\n    // 餌食べ判定\r\n    if (movePoint.x == iFood.x && movePoint.y == iFood.y) {\r\n        iSnake.eat();\r\n        iFood = feedFood(iGameWindow, iSnake);\r\n    }\r\n    // マップ描写\r\n    iGameWindow.drawMap();\r\n}\r\nfunction gameEnd() {\r\n    clearInterval(gameMaster);\r\n    gameMaster = window.setInterval(function () { return iGameWindow.deleteMap(); }, 10);\r\n}\r\n// 初期化処理\r\nfunction init(_x, _y, _width, _gameArea) {\r\n    iGameWindow = new gameWindow(_x, _y, _width, _gameArea);\r\n}\r\nexports.init = init;\r\n\n\n//# sourceURL=webpack:///./src/snakeGame.ts?");

/***/ })

/******/ });