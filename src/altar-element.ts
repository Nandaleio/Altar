import {LitElement, css, html} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';

import './altar-file-selector';
import './editors/comments/altar-comment-editor';
import { AltarCommentEditor } from './editors/comments/altar-comment-editor';
import { CommentManager } from './editors/comments/comment-manager';
import { AltarPlayer } from './editors/player/altar-player';
import { chooseMultiple } from './utils/directives';
import { AltarEvent } from './utils/events';
import './editors/altar-3d-player';

@customElement('altar-element')
export class AltarElement extends LitElement {

    @property({type: Object})
    file!: File;

    @property({type: Array})
    comments!: Comment[];
    
    @property({type: Object})
    selectedComment!: Comment;

    @property({type: Boolean})
    showComments: boolean = true;

    @state()
    isCommentsMode: boolean = false;

    @query("altar-comment-editor")
    commentEditor!: AltarCommentEditor;

    @query("#altar-player")
    player!: AltarPlayer<any,any,any>;

    private commentManager = new CommentManager();

    private toggleCommentMode = () => this.isCommentsMode = !this.isCommentsMode

    private toggleCommentBox = (ev: Event) => {
        this.toggleCommentMode();
        if(this.isCommentsMode) this.commentEditor.showCommentAtElement(ev.composedPath()[0] as HTMLElement)
        else {
            this.commentEditor.cancelComment();
            this.commentEditor.show = false;
        }
    }

    override connectedCallback() {
        super.connectedCallback();
        this.addEventListener('toggle-comment-box', this.toggleCommentBox);
        this.addEventListener('toggle-comment-mode', this.toggleCommentMode);

        this.addEventListener('SaveComment', async (ev: Event) => {
            const controlInfo = this.player.getPlayerInfo();
            const commentText = (ev as AltarEvent).detail;
            const newComment = await this.commentManager.buildComment(controlInfo, commentText)
            this.comments = [...this.comments || [], newComment]
            console.log('SaveComment', this.comments)
        });
    }

    override render() {
        return html`
            ${this.file 
                ? html` 
                 ${chooseMultiple(this.file.type || this.file.name.slice(this.file.name.lastIndexOf('.')), [
                    [["text/plain", ".obj"], () => {
                        return html`<altar-3d-player id="altar-player" .file="${this.file}" .comments="${this.comments}" .selectedComment="${this.selectedComment}" ?isCommentMode="${this.isCommentsMode}"></altar-3d-player>`;
                    }],
                    [["image/jpeg","image/png","image/gif","image/bmp","image/x-ms-bmp"], () =>{
                        import('./editors/altar-image-player');
                        return html`<altar-image-player id="altar-player" .file="${this.file}" .comments="${this.comments}" .selectedComment="${this.selectedComment}" ?isCommentMode="${this.isCommentsMode}"></altar-text-player>`;
                    }],
                    [["application/pdf"], () => {
                        return html`<altar-pdf-player id="altar-player" .file="${this.file}" .comments="${this.comments}" .selectedComment="${this.selectedComment}" ?isCommentMode="${this.isCommentsMode}"></altar-pdf-player>`;
                    }],
                    [["video/mp4","video/webm","video/x-m4v","video/quicktime","video/ogg"], () => {
                        import('./editors/altar-video-player');
                        return html`<altar-video-player id="altar-player" .file="${this.file}" .comments="${this.comments}" .selectedComment="${this.selectedComment}" ?isCommentMode="${this.isCommentsMode}"></altar-video-player>`;
                    }],
                    [["audio/mpeg","audio/x-wav"], () => {
                        import('./editors/altar-audio-player');
                        return html`<altar-audio-player id="altar-player" .file="${this.file}" .comments="${this.comments}" .selectedComment="${this.selectedComment}" ?isCommentMode="${this.isCommentsMode}"></altar-audio-player>`;
                    }],
                    ],
                    () => html`File extension '${this.file.type + this.file.name}' not supported (yet ?)`)
                }
                `
                : html`<altar-file-selector @file-selected="${(ev: AltarEvent<File>) => this.file = ev.detail}"></altar-file-selector>`}

                <altar-comment-editor></altar-comment-editor>
        `;
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
