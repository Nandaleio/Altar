import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AltarMediaPlayer } from './player/altar-media-player';
import { TimeControl } from './controls/time-control';
import { AudioControl } from './controls/audio-control';

import './controls/time-control';
import './controls/audio-control';
import './comments/altar-comment-trigger';
@customElement('altar-audio-player')
export class AltarAudioPlayer extends AltarMediaPlayer<TimeControl | AudioControl> {

  override render() {
      return html`
      <audio id="altar-player-element"></audio>
      <div class="controls">
        <altar-comment-trigger></altar-comment-trigger>
        <altar-time-control class="altar-control-element"></altar-time-control>
        <altar-audio-control class="altar-control-element"></altar-audio-control>
      </div>
    `;
  }

  static override styles = css`
    .controls {
        display: flex;
        align-items: center;
    }
    `
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-audio-player': AltarAudioPlayer;
  }
}
