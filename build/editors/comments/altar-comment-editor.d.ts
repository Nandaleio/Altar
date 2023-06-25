import { LitElement } from 'lit';
import '@material/web/button/outlined-button';
export declare class AltarCommentEditor extends LitElement {
    editorBaseElement: HTMLTextAreaElement;
    show: boolean;
    showCommentAtElement(element: HTMLElement): void;
    saveComment(): void;
    cancelComment(): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-comment-editor': AltarCommentEditor;
    }
}
//# sourceMappingURL=altar-comment-editor.d.ts.map