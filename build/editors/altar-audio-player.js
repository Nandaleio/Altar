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
let AltarAudioPlayer = class AltarAudioPlayer extends AltarMediaPlayer {
    render() {
        return html `
      <audio id="altar-player-element"></audio>
      <div class="controls">
        <altar-comment-trigger></altar-comment-trigger>
        <altar-time-control class="altar-control-element"></altar-time-control>
        <altar-audio-control class="altar-control-element"></altar-audio-control>
      </div>
    `;
    }
};
AltarAudioPlayer.styles = css `
    .controls {
        display: flex;
        align-items: center;
    }
    `;
AltarAudioPlayer = __decorate([
    customElement('altar-audio-player')
], AltarAudioPlayer);
export { AltarAudioPlayer };
//# sourceMappingURL=altar-audio-player.js.map