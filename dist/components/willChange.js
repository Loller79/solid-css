"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    normal: {
        'wct': '{ "will-change": transform }',
        'wcc': '{ "will-change": color }',
        'wcbc': '{ "will-change": background-color }',
        'wcf': '{ "will-change": filter }'
    }
};
var WillChange = function () { return new component_1["default"]('willChange', data, []); };
exports["default"] = WillChange;
//# sourceMappingURL=willChange.js.map