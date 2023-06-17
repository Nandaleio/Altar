import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AltarPlayer } from './altar-player';

@customElement('altar-audio-player')
export class AltarAudioPlayer extends AltarPlayer<AudioComment> {


    override render() {
        return html`<audio controls id="altar-player-element"></audio>`;
    }

}

export interface AudioComment {

}

declare global {
  interface HTMLElementTagNameMap {
    'altar-audio-editor': AltarAudioPlayer;
  }
}
