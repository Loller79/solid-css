var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { forEach, reduce } from 'lodash';
import regex from './regex';
import { toCamelCase } from '../various/utils';
var Component = (function () {
    function Component(name, classes, colors, length, screen) {
        if (colors === void 0) { colors = []; }
        if (length === void 0) { length = 101; }
        if (screen === void 0) { screen = {
            width: 0,
            height: 0,
            scale: 0,
            fontScale: 0
        }; }
        this.name = name;
        this.classes = __assign({ normal: {}, int: {}, color: {} }, classes);
        this.colors = colors;
        this.length = new Array(length).fill(0);
        this.screen = screen;
    }
    Component.prototype.parseInt = function () {
        var _this = this;
        var size = function (i, j) {
            if (j === void 0) { j = 100; }
            return (i === 0 ? 0 : (i / 100) * j).toString();
        };
        var line = function (i) { return (i === 0 ? 0 : i + (i / 4)).toString(); };
        return reduce(this.classes.int, function (r, v, k) {
            forEach(_this.length, function (n, i) {
                r[k + i] = v.replace(regex.width, size(i, _this.screen.width));
                r[k + i] = v.replace(regex.height, size(i, _this.screen.height));
                r[k + i] = v.replace(regex.lineHeight, line(i));
                r[k + i] = v.replace(regex.int, i.toString());
            });
            return r;
        }, {});
    };
    Component.prototype.parseColor = function () {
        var _this = this;
        return reduce(this.classes.color, function (r, v, k) {
            forEach(_this.colors, function (_a) {
                var name = _a.name, hex = _a.hex;
                r[k + name] = v.replace(regex.color, hex);
            });
            return r;
        }, {});
    };
    Component.prototype.parseAll = function () {
        var normal, int, color;
        normal = this.classes.normal;
        int = this.parseInt();
        color = this.parseColor();
        return __assign({}, normal, int, color);
    };
    Component.prototype.toJs = function (classes) {
        return reduce(classes, function (r, v, k) {
            r[k] = JSON.parse(v, toCamelCase);
            return r;
        }, {});
    };
    Component.prototype.build = function () {
        var classes, js;
        classes = this.parseAll();
        js = this.toJs(classes);
        return js;
    };
    return Component;
}());
export default Component;
//# sourceMappingURL=component.js.map