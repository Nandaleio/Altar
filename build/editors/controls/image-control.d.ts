import { AltarControl } from "./altar-control";
export declare class ImageControl extends AltarControl<HTMLCanvasElement> {
    protected setEventListeners(el: HTMLCanvasElement): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-image-control': ImageControl;
    }
}
//# sourceMappingURL=image-control.d.ts.map