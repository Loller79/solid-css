import { Class, Classes, NativeColor } from '../various/interfaces';
import Css from './css';
declare class Component extends Css {
    readonly name: string;
    readonly classes: Classes;
    readonly colors: Array<NativeColor>;
    readonly length: Array<number>;
    readonly regex: Array<string>;
    constructor(name: string, classes: Classes, colors?: Array<NativeColor>);
    parseNormal(): Class;
    parseInt(): Class;
    parseColor(): Class;
    parseSpecial(): Class;
    parseAll(): Class;
    build(): string;
    getRegex(): Array<string>;
}
export default Component;
//# sourceMappingURL=component.d.ts.map