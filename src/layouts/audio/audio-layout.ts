import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { TimeComment } from "../../models/comments-models";
import { AltarBaseLayout } from "../altar-base-layout";

import '../../elements/controls/time-control';
import '../../elements/controls/audio-control';
import '../comments/altar-comment-trigger';
import { TimeController } from "../../controllers/time-controller";

@customElement('altar-audio-layout')
export class AltarAudioLayout extends AltarBaseLayout<HTMLAudioElement, TimeComment> {

    timeController = new TimeController(this);

    override render() {
        return html`
        <audio id="altar-player-element"></audio>
        <div class="controls">
            <altar-comment-trigger></altar-comment-trigger>
            <altar-time-control class="altar-control-element"></altar-time-control>
        </div>
        `;
    }

    static override styles = [
        css`
        :host {
            width: 100%;
            height: 100%;
        }
        .controls {
            display: flex;
            align-items: center;
        }
        `];
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-audio-layout': AltarAudioLayout;
  }
}