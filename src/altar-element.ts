import {LitElement, PropertyValueMap, css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

import { AltarCommentEditor } from './layouts/comments/altar-comment-editor';
import { AltarEvent } from './utils/events';

import './layouts/altar-file-selector';
import './layouts/comments/altar-comment-editor';
import './altar-layout';


@customElement('altar-element')
export class AltarElement extends LitElement {

    @property({type: String})
    filePath!: string; 
    @property({type: Object})
    file!: File;

    @property({type: Array})
    comments!: Comment[];
    @property({type: Object})
    selectedComment!: Comment;

    @property({type: Boolean})
    showComments: boolean = true;

    @query("altar-comment-editor")
    commentEditor!: AltarCommentEditor;

    protected override firstUpdated(changedProperties: PropertyValueMap<this>): void {
        super.firstUpdated(changedProperties);
        if(this.filePath) {
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
    }

    override render() {
       return html` ${this.file 
        ?  html`<altar-layout .file="${this.file}" .comments="${this.comments}"></altar-layout>` 
        : html `<altar-file-selector @file-selected="${(ev: AltarEvent) => this.file = ev.detail}"></altar-file-selector>`}
        <altar-comment-editor></altar-comment-editor>`;
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
