var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { QuillSnowStyle } from '../../styles/quill.snow';
import { Quill } from 'quill';
let AltarCommentEditor = class AltarCommentEditor extends LitElement {
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        const options = {
            debug: 'info',
            modules: {
                toolbar: '#toolbar'
            },
            placeholder: 'Enter you comment...',
            readOnly: true,
            theme: 'snow'
        };
        this.quillEditor = new Quill(this.quillElement, options);
    }
    render() {
        return html `
    <div id="quill-editor">
        <p>Hello World!</p>
        <p>Some initial <strong>bold</strong> text</p>
        <p><br></p>
    </div>
    `;
    }
};
AltarCommentEditor.styles = QuillSnowStyle;
__decorate([
    query('#quill-editor')
], AltarCommentEditor.prototype, "quillElement", void 0);
__decorate([
    state()
], AltarCommentEditor.prototype, "quillEditor", void 0);
AltarCommentEditor = __decorate([
    customElement('altar-comment-editor')
], AltarCommentEditor);
export { AltarCommentEditor };
//# sourceMappingURL=comment-editor.js.map