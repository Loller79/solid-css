import Component from '../libs/component';
var data = {
    normal: {
        'ha': '{ "height": "auto" }'
    },
    int: {
        'h': '{ "height": $INT }',
        'mnh': '{ "min-height": $INT }',
        'mxh': '{ "max-height": $INT }',
        'hp': '{ "height": "$INT%" }',
        'mnhp': '{ "min-height": "$INT%" }',
        'mxhp': '{ "max-height": "$INT%" }',
        'hd': '{ "height": $INTvh }',
        'mnhd': '{ "min-height": $INTvh }',
        'mxhd': '{ "max-height": $INTvh }'
    }
};
var Height = function (screen) { return new Component('height', data, [], 200, screen); };
export default Height;
//# sourceMappingURL=height.js.map