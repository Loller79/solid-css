"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    normal: {
        'tfl': '{ "font-weight": 300 }',
        'tfr': '{ "font-weight": 400 }',
        'tfm': '{ "font-weight": 500 }',
        'tfsb': '{ "font-weight": 600 }',
        'tfb': '{ "font-weight": 700 }',
        'tal': '{ "text-align": "left" }',
        'tac': '{ "text-align": "center" }',
        'tar': '{ "text-align": "right" }',
        'toe': '{ "text-overflow": "ellipsis", "overflow": "hidden", "white-space": "nowrap", "max-width": "100%" }',
        'tdu': '{ "text-decoration": "underline" }'
    },
    int: {
        'ts': '{ "font-size": $INT, "line-height": $LINEHEIGHT }'
    }
};
var Text = new component_1["default"]('text', data);
exports["default"] = Text;
//# sourceMappingURL=text.js.map