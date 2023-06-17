import {html} from 'lit';
import {customElement } from 'lit/decorators.js';
import { AltarPlayer } from './altar-player';

@customElement('altar-video-player')
export class AltarVideoPlayer extends AltarPlayer<VideoComment> {

    override render() {
        return html`<video controls id="altar-player-element"></video>`;
    }

}

export interface VideoComment {

}

declare global {
  interface HTMLElementTagNameMap {
    'altar-video-editor': AltarVideoPlayer;
  }
}
