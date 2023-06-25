var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import './altar-file-selector';
import './editors/comments/altar-comment-editor';
let AltarElement = class AltarElement extends LitElement {
    fileSelected(newFile) {
        this.file = newFile.detail;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('openCommentBox', (ev) => {
            this.commentEditor.showCommentAtElement(ev.detail);
        });
        this.addEventListener('SaveComment', (ev) => {
            console.log('SaveComment', ev.detail);
        });
    }
    render() {
        return html `
            ${this.file
            ? html ` 
                    ${this.getEditor()} 
                `
            : html `<altar-file-selector @file-selected="${this.fileSelected}" ></altar-file-selector>`}

                <altar-comment-editor></altar-comment-editor>
        `;
    }
    getEditor() {
        switch (this.file.type) {
            case "text/plain":
                import('./editors/altar-text-player');
                return html `<altar-text-player .file="${this.file}"></altar-text-player>`;
            case "image/jpeg":
            case "image/png":
            case "image/gif":
            case "image/bmp":
            case "image/x-ms-bmp":
                import('./editors/altar-image-player');
                return html `<altar-image-player .file="${this.file}"></altar-image-player>`;
            case "application/pdf":
                return html `<altar-pdf-player .file="${this.file}"></altar-pdf-player>`;
            case "video/mp4":
            case "video/webm":
            case "video/x-m4v":
            case "video/quicktime":
            case "video/ogg":
                import('./editors/altar-video-player');
                return html `<altar-video-player .file="${this.file}"></altar-video-player>`;
            case "audio/mpeg":
            case "audio/x-wav":
                import('./editors/altar-audio-player');
                return html `<altar-audio-player .file="${this.file}"></altar-audio-player>`;
            default:
                return html `File extension not supported (yet ?)`;
        }
    }
};
AltarElement.styles = css `
    :host {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
  `;
__decorate([
    property({ type: Object })
], AltarElement.prototype, "file", void 0);
__decorate([
    query("altar-comment-editor")
], AltarElement.prototype, "commentEditor", void 0);
AltarElement = __decorate([
    customElement('altar-element')
], AltarElement);
export { AltarElement };
//# sourceMappingURL=altar-element.js.map