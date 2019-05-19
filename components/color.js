"use strict";
exports.__esModule = true;
var component_1 = require("../libs/component");
var data = {
    color: {
        '': '{ "color": "$COLOR" }',
        'bg-': '{ "background": "$COLOR" }'
    }
};
var Color = function (colors) { return new component_1["default"]('color', data, colors); };
exports["default"] = Color;
