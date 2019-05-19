"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    normal: {
        'ma': '{ "margin": "auto" }',
        'mha': '{ "margin-top": "auto", "margin-bottom": "auto" }',
        'mva': '{ "margin-left": "auto", "margin-right": "auto" }',
        'mta': '{ "margin-top": "auto" }',
        'mtb': '{ "margin-bottom": "auto" }',
        'mtl': '{ "margin-left": "auto" }',
        'mtr': '{ "margin-right": "auto" }'
    },
    int: {
        'm': '{ "margin": $INT }',
        'mv': '{ "margin-top": $INT, "margin-bottom": $INT }',
        'mh': '{ "margin-left": $INT, "margin-right": $INT }',
        'mt': '{ "margin-top": $INT }',
        'mb': '{ "margin-bottom": $INT }',
        'ml': '{ "margin-left": $INT }',
        'mr': '{ "margin-right": $INT }',
        'mtn': '{ "margin-top": -$INT }',
        'mbn': '{ "margin-bottom": -$INT }',
        'mln': '{ "margin-left": -$INT }',
        'mrn': '{ "margin-right": -$INT }'
    }
};
var Margin = new component_1["default"]('margin', data);
exports["default"] = Margin;
//# sourceMappingURL=margin.js.map