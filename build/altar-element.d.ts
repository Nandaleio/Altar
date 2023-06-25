import { LitElement, TemplateResult } from 'lit';
import './altar-file-selector';
import './editors/comments/altar-comment-editor';
import { AltarCommentEditor } from './editors/comments/altar-comment-editor';
export declare class AltarElement extends LitElement {
    file: File;
    commentEditor: AltarCommentEditor;
    fileSelected(newFile: CustomEvent<File>): void;
    connectedCallback(): void;
    static styles: import("lit").CSSResult;
    render(): TemplateResult<1>;
    getEditor(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-element': AltarElement;
    }
}
//# sourceMappingURL=altar-element.d.ts.map