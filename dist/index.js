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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var border_1 = __importDefault(require("./components/border"));
var color_1 = __importDefault(require("./components/color"));
var container_1 = __importDefault(require("./components/container"));
var display_1 = __importDefault(require("./components/display"));
var flex_1 = __importDefault(require("./components/flex"));
var height_1 = __importDefault(require("./components/height"));
var margin_1 = __importDefault(require("./components/margin"));
var opacity_1 = __importDefault(require("./components/opacity"));
var overflow_1 = __importDefault(require("./components/overflow"));
var padding_1 = __importDefault(require("./components/padding"));
var position_1 = __importDefault(require("./components/position"));
var shadow_1 = __importDefault(require("./components/shadow"));
var text_1 = __importDefault(require("./components/text"));
var width_1 = __importDefault(require("./components/width"));
var zindex_1 = __importDefault(require("./components/zindex"));
var lodash_1 = require("lodash");
var Solid = (function () {
    function Solid(colors, screen) {
        this.components = {
            border: border_1["default"](colors),
            color: color_1["default"](colors),
            container: container_1["default"](screen),
            display: display_1["default"],
            flex: flex_1["default"],
            height: height_1["default"](screen),
            margin: margin_1["default"],
            opacity: opacity_1["default"],
            overflow: overflow_1["default"],
            padding: padding_1["default"],
            position: position_1["default"],
            shadow: shadow_1["default"](colors),
            text: text_1["default"],
            width: width_1["default"](screen),
            zindex: zindex_1["default"]
        };
    }
    Solid.prototype.build = function () {
        return lodash_1.reduce(this.components, function (r, v) { return __assign({}, r, v.build()); }, {});
    };
    return Solid;
}());
exports["default"] = Solid;
//# sourceMappingURL=index.js.map