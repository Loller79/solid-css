"use strict";
exports.__esModule = true;
var component_1 = require("../libs/component");
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
