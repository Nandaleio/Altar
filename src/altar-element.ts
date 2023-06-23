import {LitElement, TemplateResult, css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

import './altar-file-selector';
import './editors/comments/altar-comment-editor';
import { AltarCommentEditor } from './editors/comments/altar-comment-editor';

@customElement('altar-element')
export class AltarElement extends LitElement {

    @property({type: Object})
    file!: File;

    @query("altar-comment-editor")
    commentEditor!: AltarCommentEditor

    fileSelected(newFile: CustomEvent<File>) {
        this.file = newFile.detail;
    }

    override connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener('openCommentBox', (ev: Event) => {
            this.commentEditor.showCommentAtElement((ev as CustomEvent).detail as HTMLElement)
        });

        this.addEventListener('SaveComment', (ev: Event) => {
            console.log('SaveComment', (ev as CustomEvent).detail)
        });
        
    }

    static override styles = css`
    :host {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
  `;

    override render() {
        return html`
            ${this.file 
                ? html` 
                    ${this.getEditor()} 
                `
                : html`<altar-file-selector @file-selected="${this.fileSelected}" ></altar-file-selector>`}

                <altar-comment-editor></altar-comment-editor>
        `;
    }

    getEditor(): TemplateResult {
        switch(this.file.type){
            case "text/plain":
                import('./editors/altar-text-player');
                return html`<altar-text-player .file="${this.file}"></altar-text-player>`;
            
            case "image/jpeg":
            case "image/png":
            case "image/gif":
            case "image/bmp":
            case "image/x-ms-bmp":
                import('./editors/altar-image-player');
                return html`<altar-image-player .file="${this.file}"></altar-image-player>`;

            case "application/pdf":
                return html`<altar-pdf-player .file="${this.file}"></altar-pdf-player>`;

            case "video/mp4":
            case "video/webm":
            case "video/x-m4v":
            case "video/quicktime":
            case "video/ogg":
                import('./editors/altar-video-player');
                return html`<altar-video-player .file="${this.file}"></altar-video-player>`;

            case "audio/mpeg":
            case "audio/x-wav":
                import('./editors/altar-audio-player');
                return html`<altar-audio-player .file="${this.file}"></altar-audio-player>`;

            default: 
                return html`File extension not supported (yet ?)`;
                
        }
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-element': AltarElement;
  }
}
