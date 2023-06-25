var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AltarPlayer } from './player/altar-player';
let AltarImagePlayer = class AltarImagePlayer extends AltarPlayer {
    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        const el = await this.element;
        const ctx = el.getContext("webgl") || el.getContext("experimental-webgl");
        if (!ctx)
            return;
        const img = new Image;
        img.onload = function () {
        };
        img.src = URL.createObjectURL(this.file);
    }
    render() {
        return html `
      <canvas id="altar-player-element"></canvas>
      <altar-image-control class="altar-control-element"></altar-image-control>
    `;
    }
};
AltarImagePlayer = __decorate([
    customElement('altar-image-player')
], AltarImagePlayer);
export { AltarImagePlayer };
//# sourceMappingURL=altar-image-player.js.map