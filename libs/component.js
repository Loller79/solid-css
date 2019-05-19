"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var lodash_1 = require("lodash");
var regex_1 = require("./regex");
var utils_1 = require("../utils");
var Component = /** @class */ (function () {
    /**
     * Create a new Solid Component
     *
     * @param {string} name
     * @param {Classes} classes
     * @param {Array<NativeColor>} colors
     * @param {number} length
     * @param {ScaledSize} screen
     */
    function Component(name, classes, colors, length, screen) {
        if (colors === void 0) { colors = []; }
        if (length === void 0) { length = 101; }
        if (screen === void 0) { screen = {
            width: 0,
            height: 0,
            scale: 0,
            fontScale: 0
        }; }
        this.name = name;
        this.classes = __assign({ normal: {}, int: {}, color: {} }, classes);
        this.colors = colors;
        this.length = new Array(length).fill(0);
        this.screen = screen;
    }
    /**
     * Parse int classes to inject numbers
     *
     * @returns {Class}
     */
    Component.prototype.parseInt = function () {
        var _this = this;
        var size = function (i, j) {
            if (j === void 0) { j = 100; }
            return (i === 0 ? 0 : (i / 100) * j).toString();
        };
        var line = function (i) { return (i === 0 ? 0 : i + (i / 4)).toString(); };
        return lodash_1.reduce(this.classes.int, function (r, v, k) {
            lodash_1.forEach(_this.length, function (n, i) {
                r[k + i] = v.replace(regex_1["default"].width, size(i, _this.screen.width));
                r[k + i] = v.replace(regex_1["default"].height, size(i, _this.screen.height));
                r[k + i] = v.replace(regex_1["default"].lineHeight, line(i));
                r[k + i] = v.replace(regex_1["default"].int, i.toString());
            });
            return r;
        }, {});
    };
    /**
     * Parse color classes to inject colors
     *
     * @returns {Class}
     */
    Component.prototype.parseColor = function () {
        var _this = this;
        return lodash_1.reduce(this.classes.color, function (r, v, k) {
            lodash_1.forEach(_this.colors, function (_a) {
                var name = _a.name, hex = _a.hex;
                r[k + name] = v.replace(regex_1["default"].color, hex);
            });
            return r;
        }, {});
    };
    /**
     * Parse all classes
     *
     * @returns {Class}
     */
    Component.prototype.parseAll = function () {
        var normal, int, color;
        normal = this.classes.normal;
        int = this.parseInt();
        color = this.parseColor();
        return __assign({}, normal, int, color);
    };
    /**
     * Convert the JSON classes to JS
     *
     * @param {Class} classes
     * @returns {Build}
     */
    Component.prototype.toJs = function (classes) {
        return lodash_1.reduce(classes, function (r, v, k) {
            r[k] = JSON.parse(v, utils_1.toCamelCase);
            return r;
        }, {});
    };
    /**
     * Build the Component
     *
     * @returns {Build}
     */
    Component.prototype.build = function () {
        var classes, js;
        classes = this.parseAll();
        js = this.toJs(classes);
        return js;
    };
    return Component;
}());
exports["default"] = Component;
