"use strict";
exports.__esModule = true;
var component_1 = require("../libs/component");
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
var Display = new component_1["default"]('display', data);
exports["default"] = Display;
