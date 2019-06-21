"use strict";
exports.__esModule = true;
var regex = {
    int: new RegExp(/\$INT/, 'gm'),
    color: new RegExp(/\$COLOR/, 'gm'),
    media: new RegExp(/(sm-|md-|lg-|xl-)/, 'gm'),
    type: new RegExp(/\.(html|js|jsx|ts|tsx|vue)$/, 'gm'),
    width: new RegExp(/\$INTvw/, 'gm'),
    height: new RegExp(/\$INTvh/, 'gm'),
    lineHeight: new RegExp(/\$LINEHEIGHT/, 'gm'),
    percent: new RegExp(/\$INT%/, 'gm'),
    zIndex: new RegExp(/\$INTzi/, 'gm'),
    query: function (r) { return new RegExp("(sm-|md-|lg-|xl-|)(" + r + ")", 'gm'); }
};
exports["default"] = regex;
//# sourceMappingURL=regex.js.map