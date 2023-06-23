import {PropertyValueMap, html} from 'lit';
import { customElement } from 'lit/decorators.js';
import { AltarPlayer } from './player/altar-player';
import { ImageControl } from './controls/image-control';

@customElement('altar-image-player')
export class AltarImagePlayer extends AltarPlayer<HTMLCanvasElement, ImageControl> {

  override async firstUpdated(_changedProperties: PropertyValueMap<this>) {
    super.firstUpdated(_changedProperties);  

    const el = await this.element
    const ctx = el.getContext("webgl") || el.getContext("experimental-webgl");

    if(!ctx) return;

    const img = new Image;
    img.onload = function() {
    }
    img.src = URL.createObjectURL(this.file);
  }

  override render() {
    return html`
      <canvas id="altar-player-element"></canvas>
      <altar-image-control class="altar-control-element"></altar-image-control>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'altar-image-player': AltarImagePlayer;
  }
}
