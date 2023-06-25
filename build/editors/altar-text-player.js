var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { AltarPlayer } from './player/altar-player';
let AltarTextPlayer = class AltarTextPlayer extends AltarPlayer {
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const reader = new FileReader();
        reader.onload = (evt) => {
            var _a;
            this.fileContent = (_a = evt.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.onerror = () => {
            this.fileContent = "error reading file";
        };
        reader.readAsText(this.file, "UTF-8");
    }
    render() {
        return html `${this.fileContent}`;
    }
};
__decorate([
    state()
], AltarTextPlayer.prototype, "fileContent", void 0);
AltarTextPlayer = __decorate([
    customElement('altar-text-player')
], AltarTextPlayer);
export { AltarTextPlayer };
//# sourceMappingURL=altar-text-player.js.map