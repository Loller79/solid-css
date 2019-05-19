var _a = require('lodash'), mapKeys = _a.mapKeys, camelCase = _a.camelCase, isObject = _a.isObject;
export function toCamelCase(k, v) {
    return isObject(v) ? mapKeys(v, function (_v, _k) { return camelCase(_k); }) : v;
}
//# sourceMappingURL=utils.js.map