"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_extra_1 = __importDefault(require("fs-extra"));
var lodash_1 = require("lodash");
var path_1 = require("path");
var regex_1 = __importDefault(require("../libs/regex"));
function getFiles(path) {
    var items, files;
    items = fs_extra_1["default"].readdirSync(path);
    files = [];
    items.forEach(function (item) {
        if (fs_extra_1["default"].statSync(path_1.resolve(path, item)).isDirectory()) {
            files = files.concat(getFiles(path_1.resolve(path, item)));
        }
        else {
            files.push(path_1.resolve(path, item));
        }
    });
    return files;
}
function readFiles(path) {
    var files, readable;
    files = getFiles(path);
    readable = [];
    lodash_1.forEach(files, function (file) {
        if (file.match(regex_1["default"].type)) {
            file = fs_extra_1["default"].readFileSync(file, 'utf8');
            readable.push(file);
        }
    });
    return readable;
}
exports.readFiles = readFiles;
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
function formatBytes(a, b) {
    if (a === 0)
        return '0 Bytes';
    var c = 1024;
    var d = b || 2;
    var e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f];
}
exports.formatBytes = formatBytes;
//# sourceMappingURL=utils.js.map