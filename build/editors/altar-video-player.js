var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AltarMediaPlayer } from './player/altar-media-player';
import './controls/time-control';
import './controls/audio-control';
import './comments/altar-comment-trigger';
let AltarVideoPlayer = class AltarVideoPlayer extends AltarMediaPlayer {
    //probably need to display the video to a HTMLCanvasElement
    render() {
        return html `
      <div class="main-section">
        <video id="altar-player-element"></video>
        <div class="comment-section">
          <altar-comment-trigger></altar-comment-trigger>
        </div>
      </div>
      <div class="controls-section">
        <altar-time-control class="altar-control-element"></altar-time-control>
        <altar-audio-control class="altar-control-element"></altar-audio-control>
      </div>
    `;
    }
};
AltarVideoPlayer.styles = css `
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
    `;
AltarVideoPlayer = __decorate([
    customElement('altar-video-player')
], AltarVideoPlayer);
export { AltarVideoPlayer };
//# sourceMappingURL=altar-video-player.js.map