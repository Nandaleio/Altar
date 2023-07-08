import {LitElement, html, css} from 'lit';
import { customElement, property} from 'lit/decorators.js';

import '@material/web/iconbutton/standard-icon-button';
import '@material/web/icon/icon';
import '@material/web/elevation/elevation';
import { AltarEvent } from '../../utils/events';

@customElement('altar-comment-trigger')
export class AltarCommentTrigger extends LitElement {

    @property({type:Boolean})
    isCommentMode!: boolean;

    private toggleCommentMode() {
        this.dispatchEvent(new AltarEvent('toggle-comment-mode'))
    }

    override render() { 
        return html`
        <md-standard-icon-button toggle @click="${this.toggleCommentMode}" ?selected=${this.isCommentMode}>
            <md-icon>comment</md-icon>
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
