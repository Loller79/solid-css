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
import Border from './components/border';
import Color from './components/color';
import Container from './components/container';
import Display from './components/display';
import Flex from './components/flex';
import Height from './components/height';
import Margin from './components/margin';
import Opacity from './components/opacity';
import Overflow from './components/overflow';
import Padding from './components/padding';
import Position from './components/position';
import Shadow from './components/shadow';
import Text from './components/text';
import Width from './components/width';
import ZIndex from './components/zindex';
import { reduce } from 'lodash';
var Solid = (function () {
    function Solid(colors, screen) {
        this.components = {
            border: Border(colors),
            color: Color(colors),
            container: Container(screen),
            display: Display,
            flex: Flex,
            height: Height(screen),
            margin: Margin,
            opacity: Opacity,
            overflow: Overflow,
            padding: Padding,
            position: Position,
            shadow: Shadow(colors),
            text: Text,
            width: Width(screen),
            zindex: ZIndex
        };
    }
    Solid.prototype.build = function () {
        return reduce(this.components, function (r, v) { return __assign({}, r, v.build()); }, {});
    };
    return Solid;
}());
export default Solid;
//# sourceMappingURL=index.js.map