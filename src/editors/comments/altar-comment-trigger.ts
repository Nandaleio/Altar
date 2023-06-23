import {LitElement, html, css} from 'lit';
import { customElement} from 'lit/decorators.js';

import '@material/web/iconbutton/standard-icon-button';
import '@material/web/icon/icon';
import '@material/web/elevation/elevation';

@customElement('altar-comment-trigger')
export class AltarCommentTrigger extends LitElement {

    private openCommentBox() {
        this.dispatchEvent(new CustomEvent('openCommentBox', {bubbles: true, composed: true, detail: this}))
    }

    override render() { 
        return html`
        <md-standard-icon-button @click="${this.openCommentBox}">
            <md-icon>add_comment</md-icon>
        </md-standard-icon-button>
    `;
    }

    static override styles = css`
    :host {
        border-radius: 25px;
        background-color: white;
    }
    `;
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-comment-trigger': AltarCommentTrigger;
  }
}
