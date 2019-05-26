"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    normal: {
        'ha': '{ "height": "auto" }'
    },
    int: {
        'h': '{ "height": $INT }',
        'mnh': '{ "min-height": $INT }',
        'mxh': '{ "max-height": $INT }',
        'hp': '{ "height": "$INT%" }',
        'mnhp': '{ "min-height": "$INT%" }',
        'mxhp': '{ "max-height": "$INT%" }',
        'hd': '{ "height": $INTvh }',
        'mnhd': '{ "min-height": $INTvh }',
        'mxhd': '{ "max-height": $INTvh }'
    }
};
var Height = function () { return new component_1["default"]('height', data, []); };
exports["default"] = Height;
//# sourceMappingURL=height.js.map