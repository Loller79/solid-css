import { Class, Minify, NativeColor } from './various/interfaces';
import Css from './libs/css';
declare class Solid extends Css {
    private readonly components;
    private classes;
    private regex;
    constructor(colors: Array<NativeColor>);
    minify(output: string, ...paths: Array<string>): Promise<Minify>;
    build(): string;
    search(paths: Array<string>): Promise<Array<string>>;
    getOrderedClassesFromSearch(search: Array<string>): Class;
}
export default Solid;
//# sourceMappingURL=index.d.ts.map