import { LitElement, PropertyValueMap } from 'lit';
export declare class AltarCommentEditor extends LitElement {
    quillElement: HTMLElement;
    quillEditor: any;
    protected firstUpdated(_changedProperties: PropertyValueMap<this>): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-comment-editor': AltarCommentEditor;
    }
}
//# sourceMappingURL=comment-editor.d.ts.map