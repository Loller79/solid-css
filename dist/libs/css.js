"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var lodash_1 = require("lodash");
var regex_1 = __importDefault(require("./regex"));
var Css = (function () {
    function Css(queries) {
        if (queries === void 0) { queries = [
            { name: 'sm', width: 568 },
            { name: 'md', width: 768 },
            { name: 'lg', width: 1024 },
            { name: 'xl', width: 1280 }
        ]; }
        this.queries = [{ name: '', width: 0 }].concat(queries);
    }
    Css.toQuery = function (name, width, v, k) {
        return (width ? "@media (min-width: " + width + "px) { " : '') + "." + (name ? name + "-" : '') + k + " " + v.replace(/"/gm, '').replace(/,/gm, ';') + " " + (width ? '}' : '') + "\n";
    };
    Css.removeQuery = function (v) {
        return v.replace(regex_1["default"].query(''), '');
    };
    Css.prototype.toCss = function (classes, selective) {
        var _this = this;
        return lodash_1.reduce(classes, function (r, v, k) {
            if (selective) {
                var name_1, width = void 0;
                name_1 = (k.match(regex_1["default"].query('')) || [''])[0].replace('-', '');
                width = (_this.queries.find(function (q) { return q.name === name_1; }) || _this.queries[0]).width;
                k = name_1 ? k.replace(name_1 + "-", '') : k;
                r += Css.toQuery(name_1, width, v, k);
            }
            else {
                lodash_1.forEach(_this.queries, function (_a) {
                    var name = _a.name, width = _a.width;
                    r += Css.toQuery(name, width, v, k);
                });
            }
            return r;
        }, '');
    };
    return Css;
}());
exports["default"] = Css;
//# sourceMappingURL=css.js.map