import {LitElement, PropertyValueMap, TemplateResult, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import './altar-file-selector';
import './editors/altar-text-player';
import './editors/altar-video-player';
import './editors/altar-image-player';
import './editors/altar-audio-player';

@customElement('altar-element')
export class AltarElement extends LitElement {

    
    @property({type: String})
    inputFile!: string;

    @property({type: Object})
    file!: File;

    protected override firstUpdated(_changedProperties: PropertyValueMap<this>): void {
        if(this.inputFile) {

        }
    }

    fileSelected(newFile: CustomEvent<File>) {
        this.file = newFile.detail;
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
                : html`<altar-file-selector @file-selected="${this.fileSelected}" ></altar-file-selector>`
            }
        `;
    }

    getEditor(): TemplateResult {
        console.log(this.file.type);
        switch(this.file.type){
            case "text/plain":
                return html`<altar-text-player .file="${this.file}"></altar-text-player>`;
            
            case "image/jpeg":
            case "image/png":
            case "image/gif":
            case "image/bmp":
            case "image/x-ms-bmp":
                return html`<altar-image-player .file="${this.file}"></altar-image-player>`;

            case "application/pdf":
                return html`<altar-pdf-player .file="${this.file}"></altar-pdf-player>`;

            case "video/mp4":
            case "video/webm":
            case "video/x-m4v":
            case "video/quicktime":
                return html`<altar-video-player .file="${this.file}"></altar-video-player>`;

            case "audio/mpeg":
            case "audio/x-wav":
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
