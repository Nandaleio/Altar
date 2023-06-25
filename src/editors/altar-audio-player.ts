import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AltarMediaPlayer } from './player/altar-media-player';
import { TimeControl } from './controls/time-control';

import './controls/time-control';
import './controls/audio-control';
import './comments/altar-comment-trigger';
import { TimeComment } from './comments/models';
import { AltarEvent } from '../utils/events';
import { AltarPlayer } from './player/altar-player';

@customElement('altar-audio-player')
export class AltarAudioPlayer extends AltarMediaPlayer<TimeControl, TimeComment> {

  private perventCommentMode = async(ev: AltarEvent) => {
    ev.stopPropagation();
    ev.preventDefault();
    const el = await this.element;
    el.pause();
    this.dispatchEvent(new AltarEvent("toggle-comment-box"))
  }

  override render() {
      return html`
      <audio id="altar-player-element"></audio>
      <div class="controls">
        <altar-comment-trigger @toggle-comment-mode="${this.perventCommentMode}" ?isCommentMode="${this.isCommentMode}"></altar-comment-trigger>
        <altar-time-control .commentsPosition="${this.isCommentMode ? this.comments?.map(_ => _.time*100) : []}" class="altar-control-element"></altar-time-control>
        <altar-audio-control class="altar-control-element"></altar-audio-control>
      </div>
    `;
  }

  static override styles = [
    ...AltarPlayer.styles,
    css`
    .controls {
        display: flex;
        align-items: center;
    }
    `];
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-audio-player': AltarAudioPlayer;
  }
}
