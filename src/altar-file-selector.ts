import {LitElement, html, css} from 'lit';
import {customElement, query} from 'lit/decorators.js';

import '@material/web/button/outlined-button'
import { AltarEvent } from './utils/events';

@customElement('altar-file-selector')
export class AltarFileSelector extends LitElement {

    @query("#altar-file-input")
    fileInput!: HTMLElement;

    constructor() {
        super();
        this.addEventListener('click', () => this.fileInput.click());
    }

  static override styles = css`
    #altar-file-input {
        display: none;
    }
  `;

  fileChange(e: any) {
    const file = e.target.files[0];
    this.dispatchEvent(new AltarEvent<File>('file-selected', file))
  }

  override render() {
    return html`
        <md-outlined-button @click="${this.click}">Select a file</md-outlined-button>
        <input id="altar-file-input" type="file" @change="${this.fileChange}">
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-file-selector': AltarFileSelector;
  }
}
