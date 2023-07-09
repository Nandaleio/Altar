import {LitElement, html, css} from 'lit';
import { customElement, property} from 'lit/decorators.js';

import '@material/web/iconbutton/standard-icon-button';
import '@material/web/icon/icon';
import '@material/web/elevation/elevation';
import { AltarEvent } from '../../utils/events';
import { AltarMode } from '../../models/atlar-mode';

@customElement('altar-mode-button')
export class AltarModeButton extends LitElement {

    @property({type: Object})
    currentMode!: AltarMode;

    @property({type: Boolean})
    isCurrentMode! :boolean;

    @property({type: String})
    icon!: string;

    private toggleCommentMode() {
        this.dispatchEvent(new AltarEvent('toggle-mode', this.currentMode))
    }

    override render() { 
        return html`
        <md-standard-icon-button toggle @click="${this.toggleCommentMode}" ?selected=${this.isCurrentMode}>
            <md-icon>${this.icon}</md-icon>
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
    'altar-mode-button': AltarModeButton;
  }
}
