import { Build, Class, Classes, NativeColor } from '../various/interfaces';
import { ScaledSize } from 'react-native';
declare class Component {
    readonly name: string;
    readonly classes: Classes;
    readonly colors: Array<NativeColor>;
    readonly length: Array<number>;
    readonly screen: ScaledSize;
    constructor(name: string, classes: Classes, colors?: Array<NativeColor>, length?: number, screen?: ScaledSize);
    parseInt(): Class;
    parseColor(): Class;
    parseAll(): Class;
    toJs(classes: Class): Build;
    build(): Build;
}
export default Component;
//# sourceMappingURL=component.d.ts.map