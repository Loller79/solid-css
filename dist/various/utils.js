"use strict";
exports.__esModule = true;
var _a = require('lodash'), mapKeys = _a.mapKeys, camelCase = _a.camelCase, isObject = _a.isObject;
function toCamelCase(k, v) {
    return isObject(v) ? mapKeys(v, function (_v, _k) { return camelCase(_k); }) : v;
}
exports.toCamelCase = toCamelCase;
//# sourceMappingURL=utils.js.map