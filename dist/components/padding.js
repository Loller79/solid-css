"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    normal: {
        'pa': '{ "padding": "auto" }',
        'pha': '{ "padding-top": "auto", "padding-bottom": "auto" }',
        'pva': '{ "padding-left": "auto", "padding-right": "auto" }',
        'pta': '{ "padding-top": "auto" }',
        'ptb': '{ "padding-bottom": "auto" }',
        'ptl': '{ "padding-left": "auto" }',
        'ptr': '{ "padding-right": "auto" }'
    },
    int: {
        'p': '{ "padding": $INT }',
        'pv': '{ "padding-top": $INT, "padding-bottom": $INT }',
        'ph': '{ "padding-left": $INT, "padding-right": $INT }',
        'pt': '{ "padding-top": $INT }',
        'pb': '{ "padding-bottom": $INT }',
        'pl': '{ "padding-left": $INT }',
        'pr': '{ "padding-right": $INT }',
        'ptn': '{ "padding-top": -$INT }',
        'pbn': '{ "padding-bottom": -$INT }',
        'pln': '{ "padding-left": -$INT }',
        'prn': '{ "padding-right": -$INT }'
    }
};
var Padding = function () { return new component_1["default"]('padding', data, []); };
exports["default"] = Padding;
//# sourceMappingURL=padding.js.map