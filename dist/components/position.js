"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    normal: {
        'fp': '{ "position": "fixed" }',
        'rp': '{ "position": "relative" }',
        'ap': '{ "position": "absolute" }',
        'sp': '{ "position": "sticky" }',
        'dp': '{ "position": "static" }'
    },
    int: {
        'at': '{ "top": $INT }',
        'ab': '{ "bottom": $INT }',
        'al': '{ "left": $INT }',
        'ar': '{ "right": $INT }',
        'atn': '{ "top": -$INT }',
        'abn': '{ "bottom": -$INT }',
        'aln': '{ "left": -$INT }',
        'arn': '{ "right": -$INT }',
        'apt': '{ "top": "$INT%" }',
        'apb': '{ "bottom": "$INT%" }',
        'apl': '{ "left": "$INT%" }',
        'apr': '{ "right": "$INT%" }',
        'aptn': '{ "top": "-$INT%" }',
        'apbn': '{ "bottom": "-$INT%" }',
        'apln': '{ "left": "-$INT%" }',
        'aprn': '{ "right": "-$INT%" }'
    }
};
var Position = new component_1["default"]('position', data, [], 200);
exports["default"] = Position;
//# sourceMappingURL=position.js.map