"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    normal: {
        'df': '{ "display": "flex" }',
        'dn': '{ "display": "none" }',
        'db': '{ "display": "block" }',
        'di': '{ "display": "inline" }',
        'dib': '{ "display": "inline-block" }',
        'pen': '{ "pointer-events": "none" }',
        'pea': '{ "pointer-events": "all" }',
        'cp': '{ "cursor": "pointer" }'
    }
};
var Display = function () { return new component_1["default"]('display', data, []); };
exports["default"] = Display;
//# sourceMappingURL=display.js.map