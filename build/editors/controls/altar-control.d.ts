import { LitElement } from "lit";
export declare abstract class AltarControl<T> extends LitElement {
    static styles: import("lit").CSSResult[];
    element: T;
    protected abstract setEventListeners(el: T): void;
    update(changedProperties: Map<string, unknown>): void;
}
//# sourceMappingURL=altar-control.d.ts.map