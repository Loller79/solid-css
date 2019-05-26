"use strict";
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
var fs_extra_1 = __importDefault(require("fs-extra"));
var lodash_1 = require("lodash");
var path_1 = require("path");
var regex_1 = __importDefault(require("../libs/regex"));
function getFiles(path) {
    return __awaiter(this, void 0, void 0, function () {
        var folders, files, output;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    folders = fs_extra_1["default"].readdirSync(path);
                    return [4, Promise.all(folders.map(function (folder) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                output = path_1.resolve(path, folder);
                                return [2, (fs_extra_1["default"].statSync(output)).isDirectory() ? getFiles(output) : output];
                            });
                        }); }))];
                case 1:
                    files = _a.sent();
                    files = files.reduce(function (a, f) { return a.concat(f); }, []);
                    return [2, files];
            }
        });
    });
}
function readFiles(path) {
    return __awaiter(this, void 0, void 0, function () {
        var files, readable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getFiles(path)];
                case 1:
                    files = _a.sent();
                    readable = [];
                    lodash_1.forEach(files, function (file) {
                        if (file.match(regex_1["default"].type)) {
                            file = fs_extra_1["default"].readFileSync(file, 'utf8');
                            readable.push(file);
                        }
                    });
                    return [2, readable];
            }
        });
    });
}
exports.readFiles = readFiles;
function toCamelCase(k, v) {
    return lodash_1.isObject(v) ? lodash_1.mapKeys(v, function (_v, _k) { return lodash_1.camelCase(_k); }) : v;
}
exports.toCamelCase = toCamelCase;
function orderByQuery(a, b) {
    var priority = { a: -1, b: -1 };
    if (a.includes('sm-'))
        priority.a = 0;
    if (a.includes('md-'))
        priority.a = 1;
    if (a.includes('lg-'))
        priority.a = 2;
    if (a.includes('xl-'))
        priority.a = 3;
    if (b.includes('sm-'))
        priority.b = 0;
    if (b.includes('md-'))
        priority.b = 1;
    if (b.includes('lg-'))
        priority.b = 2;
    if (b.includes('xl-'))
        priority.b = 3;
    return priority.a - priority.b;
}
exports.orderByQuery = orderByQuery;
function formatBytes(a, b) { if (a === 0)
    return '0 Bytes'; var c = 1024; var d = b || 2; var e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']; var f = Math.floor(Math.log(a) / Math.log(c)); return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]; }
exports.formatBytes = formatBytes;
//# sourceMappingURL=utils.js.map