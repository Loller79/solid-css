import { Class, Query } from '../various/interfaces';
declare class Css {
    readonly queries: Array<Query>;
    constructor(queries?: Array<Query>);
    static toQuery(name: string, width: number, v: string, k: string): string;
    toCss(classes: Class, selective?: Boolean): string;
}
export default Css;
//# sourceMappingURL=css.d.ts.map