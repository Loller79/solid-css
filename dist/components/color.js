"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    color: {
        '': '{ "color": "$COLOR" }',
        'bg-': '{ "background": "$COLOR" }'
    }
};
var Color = function (colors) { return new component_1["default"]('color', data, colors); };
exports["default"] = Color;
//# sourceMappingURL=color.js.map