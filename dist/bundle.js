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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: ctx, canvas, initialize, drawMain, drawWheel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialize\", function() { return initialize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawMain\", function() { return drawMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawWheel\", function() { return drawWheel; });\n/* harmony import */ var _func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func */ \"./src/js/func.js\");\n\nvar ctx, canvas;\nfunction initialize() {\n  canvas = document.getElementById(\"canvas\");\n  ctx = canvas.getContext(\"2d\");\n}\nvar outsideRadius = 200;\nvar textRadius = 130;\nvar insideRadius = 0;\nvar shift = 250;\nfunction drawMain() {\n  if (canvas.getContext) {\n    ctx.clearRect(0, 0, 500, _func__WEBPACK_IMPORTED_MODULE_0__[\"canvasHeight\"]);\n    var img = new Image();\n    img.src = \"./src/mg/back.png\";\n\n    img.onload = function () {\n      // ctx.fill();\n      ctx.drawImage(img, 0, 0, 500, 556);\n      drawWheel();\n    };\n\n    var img2 = new Image();\n    img2.src = \"./src/mg/ref.png\";\n\n    img2.onload = function () {\n      ctx.drawImage(img2, 0, 556, 500, 700);\n    };\n  }\n}\nfunction drawWheel() {\n  if (canvas.getContext) {\n    ctx.font = \"bold 30px Helvetica, Arial\";\n    ctx.fillStyle = \"white\";\n\n    for (var i = 0; i < _func__WEBPACK_IMPORTED_MODULE_0__[\"Team\"].get(); i++) {\n      drawArc(i);\n    }\n\n    drawArrow();\n  }\n}\n\nfunction drawArc(i) {\n  var nums = _func__WEBPACK_IMPORTED_MODULE_0__[\"TeamId\"].get();\n  var arc = 2 * Math.PI / _func__WEBPACK_IMPORTED_MODULE_0__[\"Team\"].get();\n  var angle = _func__WEBPACK_IMPORTED_MODULE_0__[\"startangle\"].get() + i * arc;\n  ctx.fillStyle = _func__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][i];\n  ctx.beginPath();\n  var ma = angle + arc;\n  ctx.arc(shift, shift, outsideRadius, angle, ma, false);\n  ctx.arc(shift, shift, insideRadius, ma, angle, true); // ctx.stroke();\n\n  ctx.fill();\n  ctx.save();\n  ctx.fillStyle = \"white\";\n  ctx.translate(shift + Math.cos(angle + arc / 2) * textRadius, shift + Math.sin(angle + arc / 2) * textRadius);\n  ctx.rotate(angle + arc / 2 + Math.PI / 2);\n  var text = nums[i];\n  ctx.fillText(text, -ctx.measureText(text).width / 2, 0);\n  ctx.restore();\n}\n\nfunction drawArrow() {\n  ctx.fillStyle = \"black\";\n  ctx.beginPath();\n  ctx.moveTo(shift + (outsideRadius + 35), shift - 10);\n  ctx.lineTo(shift + (outsideRadius + 35), shift + 10);\n  ctx.lineTo(shift + (outsideRadius - 5), shift + 10);\n  ctx.lineTo(shift + (outsideRadius - 0), shift + 20);\n  ctx.lineTo(shift + (outsideRadius - 30), shift + 0);\n  ctx.lineTo(shift + (outsideRadius - 0), shift - 20);\n  ctx.lineTo(shift + (outsideRadius - 5), shift - 10);\n  ctx.lineTo(shift + (outsideRadius + 35), shift - 10);\n  ctx.fill();\n}\n\n//# sourceURL=webpack:///./src/js/canvas.js?");

/***/ }),

/***/ "./src/js/control.js":
/*!***************************!*\
  !*** ./src/js/control.js ***!
  \***************************/
/*! exports provided: startspin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startspin\", function() { return startspin; });\n/* harmony import */ var _func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func */ \"./src/js/func.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.js\");\n\n\nvar afterSpin = null;\nvar currentTime = 0;\nvar TotalTime = 0;\nvar spinAngleStart = 0;\n\nfunction rotateWheel() {\n  currentTime += 30;\n\n  if (currentTime >= TotalTime) {\n    stopWheel();\n    return;\n  }\n\n  var spinAngle = spinAngleStart - easeInOut(currentTime, 0, spinAngleStart, TotalTime);\n  _func__WEBPACK_IMPORTED_MODULE_0__[\"startangle\"].set(_func__WEBPACK_IMPORTED_MODULE_0__[\"startangle\"].get() + spinAngle * Math.PI / 180); // console.log(currentTime, spinAngleStart, spinAngle, func.startangle.get(), func.startangle.get() / Math.PI *180);\n\n  Object(_canvas__WEBPACK_IMPORTED_MODULE_1__[\"drawWheel\"])();\n  afterSpin = setTimeout(rotateWheel, 30);\n}\n\nfunction stopWheel() {\n  clearTimeout(afterSpin);\n  var degrees = _func__WEBPACK_IMPORTED_MODULE_0__[\"startangle\"].get() * 180 / Math.PI; // console.log(spinAngleStart, func.startangle.get(), func.startangle.get() / Math.PI *180);\n\n  var mainArc = 2 * Math.PI / _func__WEBPACK_IMPORTED_MODULE_0__[\"Team\"].get();\n  var mainArcd = mainArc * 180 / Math.PI;\n  var index = Math.floor((360 - degrees % 360) / mainArcd);\n  _canvas__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].save();\n  _canvas__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fillStyle = \"white\";\n  _canvas__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].font = \"bold 120px Helvetica, Arial\";\n  var text = _func__WEBPACK_IMPORTED_MODULE_0__[\"TeamId\"].get()[index];\n  _func__WEBPACK_IMPORTED_MODULE_0__[\"CurrentTeam\"].set(text);\n  _canvas__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fillText(text, 250 - _canvas__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].measureText(text).width / 2, 250 + 40);\n  _canvas__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].restore();\n}\n\nfunction easeInOut(t, b, c, d) {\n  t /= d / 2;\n  if (t < 1) return c / 2 * t * t + b;\n  t--;\n  return -c / 2 * (t * (t - 2) - 1) + b;\n}\n\nfunction startspin() {\n  spinAngleStart = Math.random() * 10 + 10;\n  currentTime = 0;\n  TotalTime = 4000;\n  rotateWheel();\n}\n\n//# sourceURL=webpack:///./src/js/control.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! exports provided: teamNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teamNumber\", function() { return teamNumber; });\n/* harmony import */ var _func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func */ \"./src/js/func.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ \"./src/main.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\nfunction teamNumber(evt) {\n  _func__WEBPACK_IMPORTED_MODULE_0__[\"Team\"].set(evt.value);\n  _func__WEBPACK_IMPORTED_MODULE_0__[\"TeamId\"].set(_toConsumableArray(Array(parseInt(evt.value)).keys()).map(function (x) {\n    return ++x;\n  })); // console.log(func.TeamId.get());\n\n  Object(_main__WEBPACK_IMPORTED_MODULE_1__[\"main\"])();\n}\n\n//# sourceURL=webpack:///./src/js/form.js?");

/***/ }),

/***/ "./src/js/func.js":
/*!************************!*\
  !*** ./src/js/func.js ***!
  \************************/
/*! exports provided: create, append, colors2, colors, totalTeam, Teams, arc, spinTimeout, spinArcStart, spinTime, spinTimeTotal, canvasHeight, Team, TeamId, CurrentTeam, startangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return append; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colors2\", function() { return colors2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return colors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"totalTeam\", function() { return totalTeam; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Teams\", function() { return Teams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arc\", function() { return arc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spinTimeout\", function() { return spinTimeout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spinArcStart\", function() { return spinArcStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spinTime\", function() { return spinTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spinTimeTotal\", function() { return spinTimeTotal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvasHeight\", function() { return canvasHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Team\", function() { return Team; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TeamId\", function() { return TeamId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CurrentTeam\", function() { return CurrentTeam; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startangle\", function() { return startangle; });\nfunction create(ele, cl, val) {\n  var a = document.createElement(ele);\n  if (cl) cl.map(function (i) {\n    return a.classList.add(i);\n  });\n  if (val) a.innerHTML = val;\n  return a;\n}\nfunction append(p, cl) {\n  cl.map(function (i) {\n    return p.appendChild(i);\n  });\n}\nvar colors2 = [\"#B8D430\", \"#3AB745\", \"#029990\", \"#3501CB\", \"#2E2C75\", \"#673A7E\", \"#CC0071\", \"#F80120\", \"#F35B20\", \"#FB9A00\", \"#FFCC00\", \"#FEF200\"];\nvar colors = ['#ec7324', '#be1f31', '#1da4db', '#4bb050', '#2e302f', '#91338b', '#695ea3', '#ec7324', '#be1f31', '#1da4db', '#4bb050', '#2e302f', '#91338b', '#695ea3'];\nvar totalTeam = 12;\nvar Teams = 8;\nvar arc = 2 * Math.PI / Teams;\nvar spinTimeout = null;\nvar spinArcStart = 10;\nvar spinTime = 0;\nvar spinTimeTotal = 0;\nvar canvasHeight = 700;\n\nfunction settergetter(inp) {\n  var value = inp ? inp : 0;\n\n  function get() {\n    return value;\n  }\n\n  function set(v) {\n    value = v;\n  }\n\n  return {\n    get: get,\n    set: set\n  };\n}\n\nvar Team = new settergetter();\nvar TeamId = new settergetter();\nvar CurrentTeam = new settergetter();\nvar startangle = new settergetter();\n\n//# sourceURL=webpack:///./src/js/func.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: reload, main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reload\", function() { return reload; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony import */ var _js_func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/func */ \"./src/js/func.js\");\n/* harmony import */ var _js_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/control */ \"./src/js/control.js\");\n/* harmony import */ var _js_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/canvas */ \"./src/js/canvas.js\");\n/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/form */ \"./src/js/form.js\");\n\n\n\n\nvar reload = function reload() {\n  var nums = _js_func__WEBPACK_IMPORTED_MODULE_0__[\"TeamId\"].get(); // nums.inde\n\n  if (nums.length < 1) return;\n  nums.splice(nums.indexOf(_js_func__WEBPACK_IMPORTED_MODULE_0__[\"CurrentTeam\"].get()), 1);\n  _js_func__WEBPACK_IMPORTED_MODULE_0__[\"Team\"].set(_js_func__WEBPACK_IMPORTED_MODULE_0__[\"Team\"].get() - 1);\n  main();\n};\n\nvar startAnimation = function startAnimation(inp) {\n  if (!inp || !inp.value) return;\n  document.querySelector(\"#form .content\").classList.add(\"hide\");\n  setTimeout(function () {\n    document.querySelector(\"#form .wrapper\").style.transition = \"400ms\";\n    document.querySelector(\"#form .wrapper\").classList.add(\"fullwrapper\");\n    setTimeout(function () {\n      Object(_js_form__WEBPACK_IMPORTED_MODULE_3__[\"teamNumber\"])(inp);\n    }, 400);\n  }, 400);\n};\n\nvar main = function main() {\n  document.getElementById(\"form\").innerHTML = null;\n  var button = _js_func__WEBPACK_IMPORTED_MODULE_0__[\"create\"](\"input\", [\"inpbutton\"]);\n  button.value = \"Spin\";\n  button.type = \"button\";\n  button.onclick = _js_control__WEBPACK_IMPORTED_MODULE_1__[\"startspin\"];\n  var reloadbutton = _js_func__WEBPACK_IMPORTED_MODULE_0__[\"create\"](\"input\", [\"inpbutton\"]);\n  reloadbutton.value = \"Go Again\";\n  reloadbutton.type = \"button\";\n  reloadbutton.onclick = reload;\n  var title = _js_func__WEBPACK_IMPORTED_MODULE_0__[\"create\"](\"div\", [\"title\"], \"Spin the Wheel\");\n  var canvas = _js_func__WEBPACK_IMPORTED_MODULE_0__[\"create\"](\"canvas\");\n  canvas.width = 500;\n  canvas.height = _js_func__WEBPACK_IMPORTED_MODULE_0__[\"canvasHeight\"];\n  canvas.id = \"canvas\";\n  var canvaswrapper = _js_func__WEBPACK_IMPORTED_MODULE_0__[\"create\"](\"div\", [\"canvaswrapper\"]);\n  _js_func__WEBPACK_IMPORTED_MODULE_0__[\"append\"](canvaswrapper, [canvas]);\n  var buttonset = _js_func__WEBPACK_IMPORTED_MODULE_0__[\"create\"](\"div\", [\"buttons\"]);\n  _js_func__WEBPACK_IMPORTED_MODULE_0__[\"append\"](buttonset, [title, button, reloadbutton]);\n  var el = document.getElementById(\"app\");\n  var wrapper = _js_func__WEBPACK_IMPORTED_MODULE_0__[\"create\"](\"div\", [\"wrapper\"]);\n  _js_func__WEBPACK_IMPORTED_MODULE_0__[\"append\"](wrapper, [canvaswrapper, buttonset]);\n  var app = _js_func__WEBPACK_IMPORTED_MODULE_0__[\"create\"](\"div\", [\"app\"]);\n  _js_func__WEBPACK_IMPORTED_MODULE_0__[\"append\"](app, [wrapper]);\n  _js_func__WEBPACK_IMPORTED_MODULE_0__[\"append\"](el, [app]);\n  Object(_js_canvas__WEBPACK_IMPORTED_MODULE_2__[\"initialize\"])();\n  Object(_js_canvas__WEBPACK_IMPORTED_MODULE_2__[\"drawMain\"])();\n};\n\nvar form = function () {\n  var inp = document.getElementById(\"teamInput\"); // var x = { value: 3 };\n  // document.getElementById(\"teamSubmit\").onclick = teamNumber(x);\n\n  document.getElementById(\"teamSubmit\").onclick = function () {\n    return startAnimation(inp);\n  };\n}();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });