import { LitElement } from 'lit';
import '@material/web/button/outlined-button';
export declare class AltarFileSelector extends LitElement {
    fileInput: HTMLElement;
    constructor();
    static styles: import("lit").CSSResult;
    fileChange(e: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-file-selector': AltarFileSelector;
    }
}
//# sourceMappingURL=altar-file-selector.d.ts.map