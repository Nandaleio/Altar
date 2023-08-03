import {LitElement, css, html, nothing} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

import { AltarBaseLayout } from './layouts/altar-base-layout';
import { AltarConfig } from './altar-settings';
import { AltarMode } from './models/atlar-mode';

@customElement('altar-element')
export class AltarElement extends LitElement {

    // Should focus on :
    // - DISPLAYING media
    @property({type: String})
    filePath!: string; 
    @property({type: Object})
    file!: File;
    
    // - SELECTING comment
    @property({type: Object})
    selectedComment!: Comment;

    // - ADD & REMOVE comments
    @property({type: Array})
    comments!: Comment[];

    // - MANAGE the modes
    @property({type: String})
    mode!: AltarMode;

    @state()
    private layout!: AltarBaseLayout<any, any>;

    override updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        const filePathChanged = (changedProperties.has("filePath") && !!this.filePath);
        if(filePathChanged) {
            fetch(this.filePath)
            .then(async (res) => { 
                return {
                    contentType: res.headers.get("Content-Type"),
                    blob: await res.blob()
                }
            })
            .then((res) => {
                const fileName = this.filePath.split('/').pop()?.split('?')[0] || '';
                this.file = new File([res.blob], fileName, {type: res.contentType ?? fileName.split('.').pop()});
                console.log(`File ${this.file.name} ${this.file.type} override the file property`)
            })
            .catch((e) => console.error(e));
        }

        const fileChanged = (changedProperties.has("file") && !!this.file);
        if (fileChanged) {
            this.layout = AltarConfig.getLayout(this.file.type);
            this.layout.file = this.file;
            this.layout.comments = this.comments;
            this.layout.selectedComment = this.selectedComment;
        }

        if(!this.layout) return;
        this.layout.mode = this.mode;
    }


    override render() {
       return html`${this.file ? html`${this.layout}` : nothing}`;
    }

    static override styles = css`
    :host {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    `;
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-element': AltarElement;
  }
}
