"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var border_1 = __importDefault(require("./components/border"));
var color_1 = __importDefault(require("./components/color"));
var container_1 = __importDefault(require("./components/container"));
var display_1 = __importDefault(require("./components/display"));
var flex_1 = __importDefault(require("./components/flex"));
var height_1 = __importDefault(require("./components/height"));
var margin_1 = __importDefault(require("./components/margin"));
var opacity_1 = __importDefault(require("./components/opacity"));
var overflow_1 = __importDefault(require("./components/overflow"));
var padding_1 = __importDefault(require("./components/padding"));
var position_1 = __importDefault(require("./components/position"));
var shadow_1 = __importDefault(require("./components/shadow"));
var text_1 = __importDefault(require("./components/text"));
var width_1 = __importDefault(require("./components/width"));
var zindex_1 = __importDefault(require("./components/zindex"));
var lodash_1 = require("lodash");
var utils_1 = require("./various/utils");
var regex_1 = __importDefault(require("./libs/regex"));
var css_1 = __importDefault(require("./libs/css"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var Solid = (function (_super) {
    __extends(Solid, _super);
    function Solid(colors) {
        var _this = _super.call(this) || this;
        _this.components = {
            border: border_1["default"](colors),
            color: color_1["default"](colors),
            container: container_1["default"](),
            display: display_1["default"](),
            flex: flex_1["default"](),
            height: height_1["default"](),
            margin: margin_1["default"](),
            opacity: opacity_1["default"](),
            overflow: overflow_1["default"](),
            padding: padding_1["default"](),
            position: position_1["default"](),
            shadow: shadow_1["default"](colors),
            text: text_1["default"](),
            width: width_1["default"](),
            zindex: zindex_1["default"]()
        };
        _this.classes = {};
        _this.regex = [];
        return _this;
    }
    Solid.prototype.minify = function (path, output) {
        return __awaiter(this, void 0, void 0, function () {
            var build, search, classes, css, size;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        build = this.build();
                        return [4, this.search(path)];
                    case 1:
                        search = _a.sent();
                        classes = this.getOrderedClassesFromSearch(search);
                        css = this.toCss(classes, true);
                        size = {
                            final: utils_1.formatBytes(Buffer.from(css).length),
                            spared: utils_1.formatBytes(Buffer.from(build).length - Buffer.from(css).length)
                        };
                        fs_extra_1["default"].outputFileSync(output, css);
                        return [2, { css: css, size: size, output: output }];
                }
            });
        });
    };
    Solid.prototype.build = function () {
        var _this = this;
        return lodash_1.reduce(this.components, function (r, v) {
            _this.classes = __assign({}, _this.classes, v.parseAll());
            _this.regex = _this.regex.concat(v.getRegex());
            return r + v.build();
        }, '');
    };
    Solid.prototype.search = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = lodash_1.reduce;
                        return [4, utils_1.readFiles(path)];
                    case 1: return [2, _a.apply(void 0, [_b.sent(),
                            function (r, v) { return r.concat((v.match(regex_1["default"].query(_this.regex.join('|'))) || [])); },
                            []])];
                }
            });
        });
    };
    Solid.prototype.getOrderedClassesFromSearch = function (search) {
        var _this = this;
        var unordered, ordered;
        unordered = lodash_1.reduce(search, function (r, v) {
            r[v] = lodash_1.get(_this.classes, v.replace(regex_1["default"].query(''), ''));
            return r;
        }, {});
        ordered = lodash_1.reduce(Object.keys(unordered).sort(utils_1.orderByQuery), function (r, k) {
            r[k] = unordered[k];
            return r;
        }, {});
        return ordered;
    };
    return Solid;
}(css_1["default"]));
exports["default"] = Solid;
//# sourceMappingURL=index.js.map