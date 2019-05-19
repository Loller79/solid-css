"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    normal: {
        'wa': '{ "width": "auto" }'
    },
    int: {
        'w': '{ "width": $INT }',
        'mnw': '{ "min-width": $INT }',
        'mxw': '{ "max-width": $INT }',
        'wp': '{ "width": "$INT%" }',
        'mnwp': '{ "min-width": "$INT%" }',
        'mxwp': '{ "max-width": "$INT%" }',
        'wd': '{ "width": $INTvw }',
        'mnwd': '{ "min-width": $INTvw }',
        'mxwd': '{ "max-width": $INTvw }'
    }
};
var Width = function (screen) { return new component_1["default"]('width', data, [], 200, screen); };
exports["default"] = Width;
//# sourceMappingURL=width.js.map