import {html} from 'lit';
import { customElement } from 'lit/decorators.js';
import { AltarPlayer } from './altar-player';

@customElement('altar-image-player')
export class AltarImageEditor extends AltarPlayer<ImageComment> {

    override render() {
        return html`<img id="altar-player-element" src="#" />`;
    }

}

export interface ImageComment {

}

declare global {
  interface HTMLElementTagNameMap {
    'altar-image-editor': AltarImageEditor;
  }
}
