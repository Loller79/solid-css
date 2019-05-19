"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    int: {
        's': '{ "elevation": $INT }'
    }
};
var Shadow = function (colors) { return new component_1["default"]('shadow', data, colors); };
exports["default"] = Shadow;
//# sourceMappingURL=shadow.js.map