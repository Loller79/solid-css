"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    int: {
        'br': '{ "border-radius": $INT }',
        'brt': '{ "border-top-left-radius": $INT, "border-top-right-radius": $INT }',
        'brb': '{ "border-bottom-left-radius": $INT, "border-bottom-right-radius": $INT }',
        'brl': '{ "border-top-left-radius": $INT, "border-bottom-left-radius": $INT }',
        'brr': '{ "border-top-right-radius": $INT, "border-bottom-right-radius": $INT }',
        'brtl': '{ "border-top-left-radius": $INT }',
        'brtr': '{ "border-top-right-radius": $INT }',
        'brbl': '{ "border-bottom-left-radius": $INT }',
        'brbr': '{ "border-bottom-right-radius": $INT }',
        'brp': '{ "border-radius": "$INT%" }',
        'brpt': '{ "border-top-left-radius": "$INT%", "border-top-right-radius": "$INT%" }',
        'brpb': '{ "border-bottom-left-radius": "$INT%", "border-bottom-right-radius": "$INT%" }',
        'brpl': '{ "border-top-left-radius": "$INT%", "border-bottom-left-radius":"$INT%" }',
        'brpr': '{ "border-top-right-radius": "$INT%", "border-bottom-right-radius": "$INT%" }',
        'brptl': '{ "border-top-left-radius": "$INT%" }',
        'brptr': '{ "border-top-right-radius": "$INT%" }',
        'brpbl': '{ "border-bottom-left-radius": "$INT%" }',
        'brpbr': '{ "border-bottom-right-radius": "$INT%" }',
        'bw': '{ "border-width": $INT, "border-style": "solid" }',
        'bwv': '{ "border-top-width": $INT, "border-top-style": "solid", "border-bottom-width": $INT, "border-bottom-style": "solid" }',
        'bwh': '{ "border-left-width": $INT, "border-left-style": "solid", "border-right-width": $INT, "border-right-style": "solid" }',
        'bwt': '{ "border-top-width": $INT, "border-top-style": "solid" }',
        'bwb': '{ "border-bottom-width": $INT, "border-bottom-style": "solid" }',
        'bwl': '{ "border-left-width": $INT, "border-left-style": "solid" }',
        'bwr': '{ "border-right-width": $INT, "border-right-style": "solid" }'
    },
    color: {
        'b-': '{ "border-color": "$COLOR" }'
    }
};
var Border = function (colors) { return new component_1["default"]('border', data, colors); };
exports["default"] = Border;
//# sourceMappingURL=border.js.map