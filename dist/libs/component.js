"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var lodash_1 = require("lodash");
var regex_1 = __importDefault(require("./regex"));
var css_1 = __importDefault(require("./css"));
var Component = (function (_super) {
    __extends(Component, _super);
    function Component(name, classes, colors) {
        if (colors === void 0) { colors = []; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.classes = __assign({ normal: {}, int: {}, color: {}, special: {} }, classes);
        _this.colors = colors;
        _this.length = new Array(101).fill(0);
        _this.regex = [];
        return _this;
    }
    Component.prototype.parseNormal = function () {
        var _this = this;
        return lodash_1.reduce(this.classes.normal, function (r, v, k) {
            r[k] = v;
            _this.regex.push("\\b" + k + "\\b");
            return r;
        }, {});
    };
    Component.prototype.parseInt = function () {
        var _this = this;
        var line = function (i) { return (i === 0 ? 0 : i + (i / 4)).toString(); };
        var opacity = function (i) { return (i / 100).toString(); };
        return lodash_1.reduce(this.classes.int, function (r, v, k) {
            lodash_1.forEach(_this.length, function (n, i) {
                r[k + i] = v
                    .replace(regex_1["default"].width, i.toString() + 'vw')
                    .replace(regex_1["default"].height, i.toString() + 'vh')
                    .replace(regex_1["default"].lineHeight, line(i) + 'px')
                    .replace(regex_1["default"].percent, i.toString() + '%')
                    .replace(regex_1["default"].zIndex, i.toString())
                    .replace(regex_1["default"].opacity, opacity(i))
                    .replace(regex_1["default"].int, i.toString() + 'px');
            });
            _this.regex.push("\\b" + k + "\\d+\\b");
            return r;
        }, {});
    };
    Component.prototype.parseColor = function () {
        var _this = this;
        return lodash_1.reduce(this.classes.color, function (r, v, k) {
            lodash_1.forEach(_this.colors, function (_a) {
                var name = _a.name, hex = _a.hex;
                r[k + name] = v.replace(regex_1["default"].color, hex);
                _this.regex.push("\\b" + (k + name) + "\\b");
            });
            return r;
        }, {});
    };
    Component.prototype.parseSpecial = function () {
        var _this = this;
        return lodash_1.reduce(this.classes.special, function (r, v, k) {
            lodash_1.forEach(_this.length, function (n, i) {
                lodash_1.forEach(_this.colors, function (_a) {
                    var name = _a.name, hex = _a.hex;
                    r[k
                        .replace(regex_1["default"].int, i.toString())
                        .replace(regex_1["default"].color, name)] = v
                        .replace(regex_1["default"].int, i.toString())
                        .replace(regex_1["default"].color, hex);
                    _this.regex.push("\\b" + k.replace(regex_1["default"].int, '\\d+').replace(regex_1["default"].color, name) + "\\b");
                });
            });
            return r;
        }, {});
    };
    Component.prototype.parseAll = function () {
        var normal, int, color, special;
        normal = this.parseNormal();
        int = this.parseInt();
        color = this.parseColor();
        special = this.parseSpecial();
        return __assign(__assign(__assign(__assign({}, normal), int), color), special);
    };
    Component.prototype.build = function () {
        var classes, css;
        classes = this.parseAll();
        css = this.toCss(classes);
        return css;
    };
    Component.prototype.getRegex = function () {
        return lodash_1.uniq(this.regex);
    };
    return Component;
}(css_1["default"]));
exports["default"] = Component;
//# sourceMappingURL=component.js.map