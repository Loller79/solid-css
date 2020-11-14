/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/border.ts":
/*!**********************************!*\
  !*** ./src/components/border.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    int: {\n        'br': '{ \"border-radius\": $INT }',\n        'brt': '{ \"border-top-left-radius\": $INT, \"border-top-right-radius\": $INT }',\n        'brb': '{ \"border-bottom-left-radius\": $INT, \"border-bottom-right-radius\": $INT }',\n        'brl': '{ \"border-top-left-radius\": $INT, \"border-bottom-left-radius\": $INT }',\n        'brr': '{ \"border-top-right-radius\": $INT, \"border-bottom-right-radius\": $INT }',\n        'brtl': '{ \"border-top-left-radius\": $INT }',\n        'brtr': '{ \"border-top-right-radius\": $INT }',\n        'brbl': '{ \"border-bottom-left-radius\": $INT }',\n        'brbr': '{ \"border-bottom-right-radius\": $INT }',\n        'brp': '{ \"border-radius\": \"$INT%\" }',\n        'brpt': '{ \"border-top-left-radius\": \"$INT%\", \"border-top-right-radius\": \"$INT%\" }',\n        'brpb': '{ \"border-bottom-left-radius\": \"$INT%\", \"border-bottom-right-radius\": \"$INT%\" }',\n        'brpl': '{ \"border-top-left-radius\": \"$INT%\", \"border-bottom-left-radius\":\"$INT%\" }',\n        'brpr': '{ \"border-top-right-radius\": \"$INT%\", \"border-bottom-right-radius\": \"$INT%\" }',\n        'brptl': '{ \"border-top-left-radius\": \"$INT%\" }',\n        'brptr': '{ \"border-top-right-radius\": \"$INT%\" }',\n        'brpbl': '{ \"border-bottom-left-radius\": \"$INT%\" }',\n        'brpbr': '{ \"border-bottom-right-radius\": \"$INT%\" }',\n        'bw': '{ \"border-width\": $INT, \"border-style\": \"solid\" }',\n        'bwv': '{ \"border-top-width\": $INT, \"border-top-style\": \"solid\", \"border-bottom-width\": $INT, \"border-bottom-style\": \"solid\" }',\n        'bwh': '{ \"border-left-width\": $INT, \"border-left-style\": \"solid\", \"border-right-width\": $INT, \"border-right-style\": \"solid\" }',\n        'bwt': '{ \"border-top-width\": $INT, \"border-top-style\": \"solid\" }',\n        'bwb': '{ \"border-bottom-width\": $INT, \"border-bottom-style\": \"solid\" }',\n        'bwl': '{ \"border-left-width\": $INT, \"border-left-style\": \"solid\" }',\n        'bwr': '{ \"border-right-width\": $INT, \"border-right-style\": \"solid\" }'\n    },\n    color: {\n        'b-': '{ \"border-color\": \"$COLOR\" }'\n    }\n};\nconst Border = (colors) => new component_1.default('border', data, colors);\nexports.default = Border;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/border.ts?");

/***/ }),

/***/ "./src/components/color.ts":
/*!*********************************!*\
  !*** ./src/components/color.ts ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    color: {\n        '': '{ \"color\": \"$COLOR\" }',\n        'bg-': '{ \"background\": \"$COLOR\" }'\n    }\n};\nconst Color = (colors) => new component_1.default('color', data, colors);\nexports.default = Color;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/color.ts?");

/***/ }),

/***/ "./src/components/container.ts":
/*!*************************************!*\
  !*** ./src/components/container.ts ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    normal: {\n        'cna': '{ \"width\": \"auto\", \"height\": \"auto\" }'\n    },\n    int: {\n        'cn': '{ \"width\": $INT, \"height\": $INT }',\n        'mncn': '{ \"min-width\": $INT, \"min-height\": $INT }',\n        'mxcn': '{ \"max-width\": $INT, \"max-height\": $INT }',\n        'cnp': '{ \"width\": \"$INT%\", \"height\": \"$INT%\" }',\n        'mncnp': '{ \"min-width\": \"$INT%\", \"min-height\": \"$INT%\" }',\n        'mxcnp': '{ \"max-width\": \"$INT%\", \"max-height\": \"$INT%\" }',\n        'cnd': '{ \"width\": $INTvw, \"height\": $INTvh }',\n        'mncnd': '{ \"min-width\": $INTvw, \"min-height\": $INTvh }',\n        'mxcnd': '{ \"max-width\": $INTvw, \"max-height\": $INTvh }'\n    }\n};\nconst Container = () => new component_1.default('container', data, []);\nexports.default = Container;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/container.ts?");

/***/ }),

/***/ "./src/components/display.ts":
/*!***********************************!*\
  !*** ./src/components/display.ts ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    normal: {\n        df: '{ \"display\": \"flex\" }',\n        dn: '{ \"display\": \"none\" }',\n        db: '{ \"display\": \"block\" }',\n        di: '{ \"display\": \"inline\" }',\n        dib: '{ \"display\": \"inline-block\" }',\n        pen: '{ \"pointer-events\": \"none\" }',\n        pea: '{ \"pointer-events\": \"all\" }',\n        cp: '{ \"cursor\": \"pointer\" }'\n    }\n};\nconst Display = () => new component_1.default('display', data, []);\nexports.default = Display;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/display.ts?");

/***/ }),

/***/ "./src/components/flex.ts":
/*!********************************!*\
  !*** ./src/components/flex.ts ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    normal: {\n        'frr': '{ \"flex-direction\": \"row-reverse\" }',\n        'fr': '{ \"flex-direction\": \"row\" }',\n        'fcr': '{ \"flex-direction\": \"column-reverse\" }',\n        'fc': '{ \"flex-direction\": \"column\" }',\n        'fw': '{ \"flex-wrap\": \"wrap\" }',\n        'ffr': '{ \"flex\": \"initial\" }',\n        'ff': '{ \"flex\": 1 }',\n        'fs': '{ \"flex-shrink\": 1 }',\n        'fsr': '{ \"flex-shrink\": 0 }',\n        'jcfs': '{ \"justify-content\": \"flex-start\" }',\n        'jcfe': '{ \"justify-content\": \"flex-end\" }',\n        'jcc': '{ \"justify-content\": \"center\" }',\n        'jcsb': '{ \"justify-content\": \"space-between\" }',\n        'jcsa': '{ \"justify-content\": \"space-around\" }',\n        'aifs': '{ \"align-items\": \"flex-start\" }',\n        'aife': '{ \"align-items\": \"flex-end\" }',\n        'aic': '{ \"align-items\": \"center\" }',\n        'ais': '{ \"align-items\": \"stretch\" }',\n        'asfs': '{ \"align-self\": \"flex-start\" }',\n        'asfe': '{ \"align-self\": \"flex-end\" }',\n        'asc': '{ \"align-self\": \"center\" }'\n    }\n};\nconst Flex = () => new component_1.default('flex', data, []);\nexports.default = Flex;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/flex.ts?");

/***/ }),

/***/ "./src/components/height.ts":
/*!**********************************!*\
  !*** ./src/components/height.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    normal: {\n        'ha': '{ \"height\": \"auto\" }'\n    },\n    int: {\n        'h': '{ \"height\": $INT }',\n        'mnh': '{ \"min-height\": $INT }',\n        'mxh': '{ \"max-height\": $INT }',\n        'hp': '{ \"height\": \"$INT%\" }',\n        'mnhp': '{ \"min-height\": \"$INT%\" }',\n        'mxhp': '{ \"max-height\": \"$INT%\" }',\n        'hd': '{ \"height\": $INTvh }',\n        'mnhd': '{ \"min-height\": $INTvh }',\n        'mxhd': '{ \"max-height\": $INTvh }'\n    }\n};\nconst Height = () => new component_1.default('height', data, []);\nexports.default = Height;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/height.ts?");

/***/ }),

/***/ "./src/components/margin.ts":
/*!**********************************!*\
  !*** ./src/components/margin.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    normal: {\n        ma: '{ \"margin\": \"auto\" }',\n        mha: '{ \"margin-top\": \"auto\", \"margin-bottom\": \"auto\" }',\n        mva: '{ \"margin-left\": \"auto\", \"margin-right\": \"auto\" }',\n        mta: '{ \"margin-top\": \"auto\" }',\n        mba: '{ \"margin-bottom\": \"auto\" }',\n        mla: '{ \"margin-left\": \"auto\" }',\n        mra: '{ \"margin-right\": \"auto\" }'\n    },\n    int: {\n        m: '{ \"margin\": $INT }',\n        mv: '{ \"margin-top\": $INT, \"margin-bottom\": $INT }',\n        mh: '{ \"margin-left\": $INT, \"margin-right\": $INT }',\n        mt: '{ \"margin-top\": $INT }',\n        mb: '{ \"margin-bottom\": $INT }',\n        ml: '{ \"margin-left\": $INT }',\n        mr: '{ \"margin-right\": $INT }',\n        mtn: '{ \"margin-top\": -$INT }',\n        mbn: '{ \"margin-bottom\": -$INT }',\n        mln: '{ \"margin-left\": -$INT }',\n        mrn: '{ \"margin-right\": -$INT }'\n    }\n};\nconst Margin = () => new component_1.default('margin', data, []);\nexports.default = Margin;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/margin.ts?");

/***/ }),

/***/ "./src/components/opacity.ts":
/*!***********************************!*\
  !*** ./src/components/opacity.ts ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    int: {\n        'o': '{ \"opacity\": $INTop }'\n    }\n};\nconst Opacity = () => new component_1.default('opacity', data, []);\nexports.default = Opacity;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/opacity.ts?");

/***/ }),

/***/ "./src/components/overflow.ts":
/*!************************************!*\
  !*** ./src/components/overflow.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    normal: {\n        'ofa': '{ \"overflow\": \"auto\" }',\n        'ofh': '{ \"overflow\": \"hidden\" }',\n        'ofs': '{ \"overflow\": \"scroll\" }',\n        'ofv': '{ \"overflow\": \"visible\" }',\n        'ofxa': '{ \"overflow-x\": \"auto\" }',\n        'ofxh': '{ \"overflow-x\": \"hidden\" }',\n        'ofxs': '{ \"overflow-x\": \"scroll\" }',\n        'ofxv': '{ \"overflow-x\": \"visible\" }',\n        'ofya': '{ \"overflow-y\": \"auto\" }',\n        'ofyh': '{ \"overflow-y\": \"hidden\" }',\n        'ofys': '{ \"overflow-y\": \"scroll\" }',\n        'ofyv': '{ \"overflow-y\": \"visible\" }'\n    }\n};\nconst Overflow = () => new component_1.default('overflow', data, []);\nexports.default = Overflow;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/overflow.ts?");

/***/ }),

/***/ "./src/components/padding.ts":
/*!***********************************!*\
  !*** ./src/components/padding.ts ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    normal: {\n        'pa': '{ \"padding\": \"auto\" }',\n        'pha': '{ \"padding-top\": \"auto\", \"padding-bottom\": \"auto\" }',\n        'pva': '{ \"padding-left\": \"auto\", \"padding-right\": \"auto\" }',\n        'pta': '{ \"padding-top\": \"auto\" }',\n        'pba': '{ \"padding-bottom\": \"auto\" }',\n        'pla': '{ \"padding-left\": \"auto\" }',\n        'pra': '{ \"padding-right\": \"auto\" }'\n    },\n    int: {\n        'p': '{ \"padding\": $INT }',\n        'pv': '{ \"padding-top\": $INT, \"padding-bottom\": $INT }',\n        'ph': '{ \"padding-left\": $INT, \"padding-right\": $INT }',\n        'pt': '{ \"padding-top\": $INT }',\n        'pb': '{ \"padding-bottom\": $INT }',\n        'pl': '{ \"padding-left\": $INT }',\n        'pr': '{ \"padding-right\": $INT }',\n        'ptn': '{ \"padding-top\": -$INT }',\n        'pbn': '{ \"padding-bottom\": -$INT }',\n        'pln': '{ \"padding-left\": -$INT }',\n        'prn': '{ \"padding-right\": -$INT }'\n    }\n};\nconst Padding = () => new component_1.default('padding', data, []);\nexports.default = Padding;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/padding.ts?");

/***/ }),

/***/ "./src/components/position.ts":
/*!************************************!*\
  !*** ./src/components/position.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    normal: {\n        'fp': '{ \"position\": \"fixed\" }',\n        'rp': '{ \"position\": \"relative\" }',\n        'ap': '{ \"position\": \"absolute\" }',\n        'sp': '{ \"position\": \"sticky\" }',\n        'dp': '{ \"position\": \"static\" }'\n    },\n    int: {\n        'at': '{ \"top\": $INT }',\n        'ab': '{ \"bottom\": $INT }',\n        'al': '{ \"left\": $INT }',\n        'ar': '{ \"right\": $INT }',\n        'atn': '{ \"top\": -$INT }',\n        'abn': '{ \"bottom\": -$INT }',\n        'aln': '{ \"left\": -$INT }',\n        'arn': '{ \"right\": -$INT }',\n        'apt': '{ \"top\": \"$INT%\" }',\n        'apb': '{ \"bottom\": \"$INT%\" }',\n        'apl': '{ \"left\": \"$INT%\" }',\n        'apr': '{ \"right\": \"$INT%\" }',\n        'aptn': '{ \"top\": \"-$INT%\" }',\n        'apbn': '{ \"bottom\": \"-$INT%\" }',\n        'apln': '{ \"left\": \"-$INT%\" }',\n        'aprn': '{ \"right\": \"-$INT%\" }'\n    }\n};\nconst Position = () => new component_1.default('position', data, []);\nexports.default = Position;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/position.ts?");

/***/ }),

/***/ "./src/components/shadow.ts":
/*!**********************************!*\
  !*** ./src/components/shadow.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    special: {\n        's$INT-$COLOR': '{ \"box-shadow\": \"0 0 $INTpx 0 $COLOR\" }'\n    }\n};\nconst Shadow = (colors) => new component_1.default('shadow', data, colors);\nexports.default = Shadow;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/shadow.ts?");

/***/ }),

/***/ "./src/components/text.ts":
/*!********************************!*\
  !*** ./src/components/text.ts ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    normal: {\n        'tfl': '{ \"font-weight\": 300 }',\n        'tfr': '{ \"font-weight\": 400 }',\n        'tfm': '{ \"font-weight\": 500 }',\n        'tfsb': '{ \"font-weight\": 600 }',\n        'tfb': '{ \"font-weight\": 700 }',\n        'tal': '{ \"text-align\": \"left\" }',\n        'tac': '{ \"text-align\": \"center\" }',\n        'tar': '{ \"text-align\": \"right\" }',\n        'toe': '{ \"text-overflow\": \"ellipsis\", \"overflow\": \"hidden\", \"white-space\": \"nowrap\", \"max-width\": \"100%\" }',\n        'tdu': '{ \"text-decoration\": \"underline\" }'\n    },\n    int: {\n        'ts': '{ \"font-size\": $INT, \"line-height\": $LINEHEIGHT }'\n    }\n};\nconst Text = () => new component_1.default('text', data, []);\nexports.default = Text;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/text.ts?");

/***/ }),

/***/ "./src/components/width.ts":
/*!*********************************!*\
  !*** ./src/components/width.ts ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    normal: {\n        'wa': '{ \"width\": \"auto\" }'\n    },\n    int: {\n        'w': '{ \"width\": $INT }',\n        'mnw': '{ \"min-width\": $INT }',\n        'mxw': '{ \"max-width\": $INT }',\n        'wp': '{ \"width\": \"$INT%\" }',\n        'mnwp': '{ \"min-width\": \"$INT%\" }',\n        'mxwp': '{ \"max-width\": \"$INT%\" }',\n        'wd': '{ \"width\": $INTvw }',\n        'mnwd': '{ \"min-width\": $INTvw }',\n        'mxwd': '{ \"max-width\": $INTvw }'\n    }\n};\nconst Width = () => new component_1.default('width', data, []);\nexports.default = Width;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/width.ts?");

/***/ }),

/***/ "./src/components/willChange.ts":
/*!**************************************!*\
  !*** ./src/components/willChange.ts ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    normal: {\n        'wct': '{ \"will-change\": transform }',\n        'wcc': '{ \"will-change\": color }',\n        'wcbc': '{ \"will-change\": background-color }',\n        'wcf': '{ \"will-change\": filter }',\n    }\n};\nconst WillChange = () => new component_1.default('willChange', data, []);\nexports.default = WillChange;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/willChange.ts?");

/***/ }),

/***/ "./src/components/zindex.ts":
/*!**********************************!*\
  !*** ./src/components/zindex.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst component_1 = __importDefault(__webpack_require__(/*! ../libs/component */ \"./src/libs/component.ts\"));\nconst data = {\n    int: {\n        'zi': '{ \"z-index\": $INTzi }'\n    }\n};\nconst ZIndex = () => new component_1.default('zindex', data, []);\nexports.default = ZIndex;\n\n\n//# sourceURL=webpack://@queelag/css/./src/components/zindex.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst fs_extra_1 = __importDefault(__webpack_require__(/*! fs-extra */ \"fs-extra\"));\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst border_1 = __importDefault(__webpack_require__(/*! ./components/border */ \"./src/components/border.ts\"));\nconst color_1 = __importDefault(__webpack_require__(/*! ./components/color */ \"./src/components/color.ts\"));\nconst container_1 = __importDefault(__webpack_require__(/*! ./components/container */ \"./src/components/container.ts\"));\nconst display_1 = __importDefault(__webpack_require__(/*! ./components/display */ \"./src/components/display.ts\"));\nconst flex_1 = __importDefault(__webpack_require__(/*! ./components/flex */ \"./src/components/flex.ts\"));\nconst height_1 = __importDefault(__webpack_require__(/*! ./components/height */ \"./src/components/height.ts\"));\nconst margin_1 = __importDefault(__webpack_require__(/*! ./components/margin */ \"./src/components/margin.ts\"));\nconst opacity_1 = __importDefault(__webpack_require__(/*! ./components/opacity */ \"./src/components/opacity.ts\"));\nconst overflow_1 = __importDefault(__webpack_require__(/*! ./components/overflow */ \"./src/components/overflow.ts\"));\nconst padding_1 = __importDefault(__webpack_require__(/*! ./components/padding */ \"./src/components/padding.ts\"));\nconst position_1 = __importDefault(__webpack_require__(/*! ./components/position */ \"./src/components/position.ts\"));\nconst shadow_1 = __importDefault(__webpack_require__(/*! ./components/shadow */ \"./src/components/shadow.ts\"));\nconst text_1 = __importDefault(__webpack_require__(/*! ./components/text */ \"./src/components/text.ts\"));\nconst width_1 = __importDefault(__webpack_require__(/*! ./components/width */ \"./src/components/width.ts\"));\nconst willChange_1 = __importDefault(__webpack_require__(/*! ./components/willChange */ \"./src/components/willChange.ts\"));\nconst zindex_1 = __importDefault(__webpack_require__(/*! ./components/zindex */ \"./src/components/zindex.ts\"));\nconst css_1 = __importDefault(__webpack_require__(/*! ./libs/css */ \"./src/libs/css.ts\"));\nconst regex_1 = __importDefault(__webpack_require__(/*! ./libs/regex */ \"./src/libs/regex.ts\"));\nconst utils_1 = __webpack_require__(/*! ./various/utils */ \"./src/various/utils.ts\");\nclass Solid extends css_1.default {\n    /**\n     * Create a new Solid Instance\n     *\n     * @param {Array<NativeColor>} colors\n     */\n    constructor(colors) {\n        super();\n        this.components = {\n            border: border_1.default(colors),\n            color: color_1.default(colors),\n            container: container_1.default(),\n            display: display_1.default(),\n            flex: flex_1.default(),\n            height: height_1.default(),\n            margin: margin_1.default(),\n            opacity: opacity_1.default(),\n            overflow: overflow_1.default(),\n            padding: padding_1.default(),\n            position: position_1.default(),\n            shadow: shadow_1.default(colors),\n            text: text_1.default(),\n            width: width_1.default(),\n            willChange: willChange_1.default(),\n            zindex: zindex_1.default()\n        };\n        this.classes = {};\n        this.regex = [];\n    }\n    /**\n     * Minify css based on used classes\n     *\n     * @param {Array<string>} paths\n     * @param {string} output\n     * @returns {Promise<Minify>}\n     */\n    async minify(output, ...paths) {\n        let build, search, classes, css, size;\n        build = this.build();\n        search = await this.search(paths);\n        classes = this.getOrderedClassesFromSearch(search);\n        css = this.toCss(classes, true);\n        size = {\n            final: utils_1.formatBytes(Buffer.from(css).length),\n            spared: utils_1.formatBytes(Buffer.from(build).length - Buffer.from(css).length)\n        };\n        fs_extra_1.default.outputFileSync(output, css);\n        return { css, size, output };\n    }\n    /**\n     * Build the components\n     *\n     * @returns {string}\n     */\n    build() {\n        return lodash_1.reduce(this.components, (r, v) => {\n            this.classes = { ...this.classes, ...v.parseAll() };\n            this.regex = [...this.regex, ...v.getRegex()];\n            return r + v.build();\n        }, '');\n    }\n    /**\n     * Search for class matches of the files inside the path\n     *\n     * @param {Array<string>} paths\n     * @returns {Promise<Array<string>>}\n     */\n    async search(paths) {\n        return lodash_1.reduce(lodash_1.reduce(paths, (r, v) => [...r, ...utils_1.readFiles(v)], []), (r, v) => [...r, ...(v.match(regex_1.default.query(this.regex.join('|'))) || [])], []);\n    }\n    /**\n     * Get the ordered classes from the search\n     *\n     * @param {Array<string>} search\n     * @returns {Class}\n     */\n    getOrderedClassesFromSearch(search) {\n        let unordered, ordered;\n        unordered = lodash_1.reduce(search, (r, v) => {\n            if (!lodash_1.has(this.classes, css_1.default.removeQuery(v))) {\n                console.warn(`The class ${v} does not exist`);\n                return r;\n            }\n            r[v] = lodash_1.get(this.classes, css_1.default.removeQuery(v));\n            return r;\n        }, {});\n        ordered = lodash_1.reduce(Object.keys(unordered).sort(utils_1.orderByQuery), (r, k) => {\n            r[k] = unordered[k];\n            return r;\n        }, {});\n        return ordered;\n    }\n}\nexports.default = Solid;\n\n\n//# sourceURL=webpack://@queelag/css/./src/index.ts?");

/***/ }),

/***/ "./src/libs/component.ts":
/*!*******************************!*\
  !*** ./src/libs/component.ts ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst regex_1 = __importDefault(__webpack_require__(/*! ./regex */ \"./src/libs/regex.ts\"));\nconst css_1 = __importDefault(__webpack_require__(/*! ./css */ \"./src/libs/css.ts\"));\nclass Component extends css_1.default {\n    /**\n     * Create a new Solid Component\n     *\n     * @param {string} name\n     * @param {Classes} classes\n     * @param {Array<NativeColor>} colors\n     */\n    constructor(name, classes, colors = []) {\n        super();\n        this.name = name;\n        this.classes = { normal: {}, int: {}, color: {}, special: {}, ...classes };\n        this.colors = colors;\n        this.length = new Array(101).fill(0);\n        this.regex = [];\n    }\n    /**\n     * Parse normal classes\n     *\n     * @returns {Class}\n     */\n    parseNormal() {\n        return lodash_1.reduce(this.classes.normal, (r, v, k) => {\n            r[k] = v;\n            this.regex.push(`\\\\b${k}\\\\b`);\n            return r;\n        }, {});\n    }\n    /**\n     * Parse int classes to inject numbers\n     *\n     * @returns {Class}\n     */\n    parseInt() {\n        let line = (i) => (i === 0 ? 0 : i + (i / 4)).toString();\n        let opacity = (i) => (i / 100).toString();\n        return lodash_1.reduce(this.classes.int, (r, v, k) => {\n            lodash_1.forEach(this.length, (n, i) => {\n                r[k + i] = v\n                    .replace(regex_1.default.width, i.toString() + 'vw')\n                    .replace(regex_1.default.height, i.toString() + 'vh')\n                    .replace(regex_1.default.lineHeight, line(i) + 'px')\n                    .replace(regex_1.default.percent, i.toString() + '%')\n                    .replace(regex_1.default.zIndex, i.toString())\n                    .replace(regex_1.default.opacity, opacity(i))\n                    .replace(regex_1.default.int, i.toString() + 'px');\n            });\n            this.regex.push(`\\\\b${k}\\\\d+\\\\b`);\n            return r;\n        }, {});\n    }\n    /**\n     * Parse color classes to inject colors\n     *\n     * @returns {Class}\n     */\n    parseColor() {\n        return lodash_1.reduce(this.classes.color, (r, v, k) => {\n            lodash_1.forEach(this.colors, ({ name, hex }) => {\n                r[k + name] = v.replace(regex_1.default.color, hex);\n                this.regex.push(`\\\\b${k + name}\\\\b`);\n            });\n            return r;\n        }, {});\n    }\n    /**\n     * Parse special classes to inject both int and colors\n     *\n     * @returns {Class}\n     */\n    parseSpecial() {\n        return lodash_1.reduce(this.classes.special, (r, v, k) => {\n            lodash_1.forEach(this.length, (n, i) => {\n                lodash_1.forEach(this.colors, ({ name, hex }) => {\n                    r[k\n                        .replace(regex_1.default.int, i.toString())\n                        .replace(regex_1.default.color, name)] = v\n                        .replace(regex_1.default.int, i.toString())\n                        .replace(regex_1.default.color, hex);\n                    this.regex.push(`\\\\b${k.replace(regex_1.default.int, '\\\\d+').replace(regex_1.default.color, name)}\\\\b`);\n                });\n            });\n            return r;\n        }, {});\n    }\n    /**\n     * Parse all classes\n     *\n     * @returns {Class}\n     */\n    parseAll() {\n        let normal, int, color, special;\n        normal = this.parseNormal();\n        int = this.parseInt();\n        color = this.parseColor();\n        special = this.parseSpecial();\n        return { ...normal, ...int, ...color, ...special };\n    }\n    /**\n     * Build the Component\n     *\n     * @returns {string}\n     */\n    build() {\n        let classes, css;\n        classes = this.parseAll();\n        css = this.toCss(classes);\n        return css;\n    }\n    /**\n     * Get the regex for this component\n     *\n     * @returns {Array<String>}\n     */\n    getRegex() {\n        return lodash_1.uniq(this.regex);\n    }\n}\nexports.default = Component;\n\n\n//# sourceURL=webpack://@queelag/css/./src/libs/component.ts?");

/***/ }),

/***/ "./src/libs/css.ts":
/*!*************************!*\
  !*** ./src/libs/css.ts ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst regex_1 = __importDefault(__webpack_require__(/*! ./regex */ \"./src/libs/regex.ts\"));\nclass Css {\n    /**\n     * Handles conversion of Class to Css with media queries\n     *\n     * @param {Array<Query>} queries\n     */\n    constructor(queries = [\n        { name: 'sm', width: 568 },\n        { name: 'md', width: 768 },\n        { name: 'lg', width: 1024 },\n        { name: 'xl', width: 1280 }\n    ]) {\n        this.queries = [{ name: '', width: 0 }, ...queries];\n    }\n    /**\n     * Convert name and property to a media query css class\n     *\n     * @param {string} name\n     * @param {number} width\n     * @param {string} v\n     * @param {string} k\n     * @returns {string}\n     */\n    static toQuery(name, width, v, k) {\n        return `${width ? `@media (min-width: ${width}px) { ` : ''}.${name ? `${name}-` : ''}${k} ${v.replace(/\"/gm, '').replace(/,/gm, ';')} ${width ? '}' : ''}\\n`;\n    }\n    /**\n     * Remove the query piece from a string\n     *\n     * @param {string} v\n     * @returns {string}\n     */\n    static removeQuery(v) {\n        return v.replace(regex_1.default.query(''), '');\n    }\n    /**\n     * Convert the JSON classes to CSS\n     *\n     * @param {Class} classes\n     * @param {Boolean} selective\n     * @returns {string}\n     */\n    toCss(classes, selective) {\n        return lodash_1.reduce(classes, (r, v, k) => {\n            if (selective) {\n                let name, width;\n                name = (k.match(regex_1.default.query('')) || [''])[0].replace('-', '');\n                width = (this.queries.find(q => q.name === name) || this.queries[0]).width;\n                k = name ? k.replace(`${name}-`, '') : k;\n                r += Css.toQuery(name, width, v, k);\n            }\n            else {\n                lodash_1.forEach(this.queries, ({ name, width }) => {\n                    r += Css.toQuery(name, width, v, k);\n                });\n            }\n            return r;\n        }, '');\n    }\n}\nexports.default = Css;\n\n\n//# sourceURL=webpack://@queelag/css/./src/libs/css.ts?");

/***/ }),

/***/ "./src/libs/regex.ts":
/*!***************************!*\
  !*** ./src/libs/regex.ts ***!
  \***************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst regex = {\n    int: new RegExp(/\\$INT/, 'gm'),\n    color: new RegExp(/\\$COLOR/, 'gm'),\n    media: new RegExp(/(sm-|md-|lg-|xl-)/, 'gm'),\n    type: new RegExp(/\\.(html|js|jsx|ts|tsx|vue)$/, 'gm'),\n    width: new RegExp(/\\$INTvw/, 'gm'),\n    height: new RegExp(/\\$INTvh/, 'gm'),\n    lineHeight: new RegExp(/\\$LINEHEIGHT/, 'gm'),\n    percent: new RegExp(/\\$INT%/, 'gm'),\n    zIndex: new RegExp(/\\$INTzi/, 'gm'),\n    opacity: new RegExp(/\\$INTop/, 'gm'),\n    query: (r) => new RegExp(`(sm-|md-|lg-|xl-|)(${r})`, 'gm')\n};\nexports.default = regex;\n\n\n//# sourceURL=webpack://@queelag/css/./src/libs/regex.ts?");

/***/ }),

/***/ "./src/various/utils.ts":
/*!******************************!*\
  !*** ./src/various/utils.ts ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formatBytes = exports.orderByQuery = exports.readFiles = void 0;\nconst fs_extra_1 = __importDefault(__webpack_require__(/*! fs-extra */ \"fs-extra\"));\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst regex_1 = __importDefault(__webpack_require__(/*! ../libs/regex */ \"./src/libs/regex.ts\"));\nfunction getFiles(path) {\n    let items, files;\n    items = fs_extra_1.default.readdirSync(path);\n    files = [];\n    items.forEach((item) => {\n        if (fs_extra_1.default.statSync(path_1.resolve(path, item)).isDirectory()) {\n            files = files.concat(getFiles(path_1.resolve(path, item)));\n        }\n        else {\n            files.push(path_1.resolve(path, item));\n        }\n    });\n    return files;\n}\nfunction readFiles(path) {\n    let files, readable;\n    files = getFiles(path);\n    readable = [];\n    lodash_1.forEach(files, (file) => {\n        if (file.match(regex_1.default.type)) {\n            file = fs_extra_1.default.readFileSync(file, 'utf8');\n            readable.push(file);\n        }\n    });\n    return readable;\n}\nexports.readFiles = readFiles;\nfunction orderByQuery(a, b) {\n    let priority = { a: -1, b: -1 };\n    if (a.includes('sm-'))\n        priority.a = 0;\n    if (a.includes('md-'))\n        priority.a = 1;\n    if (a.includes('lg-'))\n        priority.a = 2;\n    if (a.includes('xl-'))\n        priority.a = 3;\n    if (b.includes('sm-'))\n        priority.b = 0;\n    if (b.includes('md-'))\n        priority.b = 1;\n    if (b.includes('lg-'))\n        priority.b = 2;\n    if (b.includes('xl-'))\n        priority.b = 3;\n    return priority.a - priority.b;\n}\nexports.orderByQuery = orderByQuery;\nfunction formatBytes(a, b) {\n    if (a === 0)\n        return '0 Bytes';\n    let c = 1024;\n    let d = b || 2;\n    let e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];\n    let f = Math.floor(Math.log(a) / Math.log(c));\n    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f];\n}\nexports.formatBytes = formatBytes;\n\n\n//# sourceURL=webpack://@queelag/css/./src/various/utils.ts?");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"fs-extra\");;\n\n//# sourceURL=webpack://@queelag/css/external_%22fs-extra%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"lodash\");;\n\n//# sourceURL=webpack://@queelag/css/external_%22lodash%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"path\");;\n\n//# sourceURL=webpack://@queelag/css/external_%22path%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});