import Component from '../libs/component';
var data = {
    color: {
        '': '{ "color": "$COLOR" }',
        'bg-': '{ "background": "$COLOR" }'
    }
};
var Color = function (colors) { return new Component('color', data, colors); };
export default Color;
//# sourceMappingURL=color.js.map