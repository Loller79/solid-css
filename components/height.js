"use strict";
exports.__esModule = true;
var component_1 = require("../libs/component");
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
var Height = function (screen) { return new component_1["default"]('height', data, [], 200, screen); };
exports["default"] = Height;
