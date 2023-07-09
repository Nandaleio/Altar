import {LitElement, html, css} from 'lit';
import { customElement, property, state} from 'lit/decorators.js';
import { Comment } from './models/comments-models';
import { AltarMode } from './models/atlar-mode';
import { AltarConfig } from './altar-settings';
import { AltarBaseLayout } from './layouts/altar-base-layout';
import { AltarEvent } from './utils/events';

@customElement('altar-layout')
export class AltarLayout extends LitElement {

    @property({type: Object})
    file!: File;

    @property({type: Array})
    comments!: Comment[];

    @property({type: Object})
    selectedComment!: Comment;
    
    @state()
    mode: AltarMode = AltarMode.VIEW;

    @state()
    layout!: AltarBaseLayout<any, any>;

    override connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener('toggle-mode', (ev: Event) => {
            this.mode = (ev as AltarEvent<AltarMode>).detail ?? AltarMode.VIEW
        })
    }

    override updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        const fileChanged = (changedProperties.has("file") && !!this.file);
        if (fileChanged) {
            this.layout = AltarConfig.getLayout(this.file.type);
            this.layout.file = this.file;
            this.layout.comments = this.comments;
            this.layout.selectedComment = this.selectedComment;
        }

        const modeChanged = (changedProperties.has("mode") && !!this.mode);
        if(modeChanged && !!this.layout){
            this.layout.mode = this.mode;
        }
    }

    override render() { 
        return html`${this.layout}`;
    }

    static override styles = css`
    :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .inline {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }
    .main-content {
        flex-grow: 1;
        display: flex;
    }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'altar-layout': AltarLayout;
    }
}
