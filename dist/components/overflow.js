"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var component_1 = __importDefault(require("../libs/component"));
var data = {
    normal: {
        'ofa': '{ "overflow": "auto" }',
        'ofh': '{ "overflow": "hidden" }',
        'ofs': '{ "overflow": "scroll" }',
        'ofv': '{ "overflow": "visible" }',
        'ofxa': '{ "overflow-x": "auto" }',
        'ofxh': '{ "overflow-x": "hidden" }',
        'ofxs': '{ "overflow-x": "scroll" }',
        'ofxv': '{ "overflow-x": "visible" }',
        'ofya': '{ "overflow-y": "auto" }',
        'ofyh': '{ "overflow-y": "hidden" }',
        'ofys': '{ "overflow-y": "scroll" }',
        'ofyv': '{ "overflow-y": "visible" }'
    }
};
var Overflow = function () { return new component_1["default"]('overflow', data, []); };
exports["default"] = Overflow;
//# sourceMappingURL=overflow.js.map