import { css, html, nothing} from 'lit';
import {customElement} from 'lit/decorators.js';
import { AltarMediaPlayer } from './player/altar-media-player';
import { TimeControl } from './controls/time-control';

import './controls/time-control';
import './controls/audio-control';
import './comments/altar-comment-trigger';
import { VideoComment } from './comments/models';
import { AltarPlayer } from './player/altar-player';

@customElement('altar-video-player')
export class AltarVideoPlayer extends AltarMediaPlayer<TimeControl, VideoComment> {

  //probably need to display the video to a HTMLCanvasElement
  override render() {
    return html`
      <div class="main-section">
        <video id="altar-player-element"></video>
        <div class="comment-section">
          <altar-comment-trigger ?isCommentMode="${this.isCommentMode}"></altar-comment-trigger>
          ${this.isCommentMode ? html`Tools` : nothing}
        </div>
      </div>
      <div class="controls-section">
        <altar-time-control .commentsPosition="${this.isCommentMode ? this.comments?.map(_ => _.time*100) : []}" class="altar-control-element"></altar-time-control>
        <altar-audio-control class="altar-control-element"></altar-audio-control>
      </div>
    `;
  }

  static override styles = [
    ...AltarPlayer.styles,
    css`
    .main-section {
      display: flex;
    }
    .comment-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .controls-section {
      display: flex;
      align-items: center;
    }
    `]
;

}

declare global {
  interface HTMLElementTagNameMap {
    'altar-video-player': AltarVideoPlayer;
  }
}
