var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, query, state } from "lit/decorators.js";
import { AltarControl } from "./altar-control";
import { css, html } from "lit";
import '@material/web/slider/slider';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/icon/icon.js';
let AudioControl = class AudioControl extends AltarControl {
    constructor() {
        super(...arguments);
        this.muted = false;
        this.showSlider = false;
        this.onmouseover = () => this.showSlider = true;
        this.onmouseleave = () => this.showSlider = false;
    }
    setEventListeners(el) {
        el.addEventListener('volumechange', () => this.slider.value = el.volume * 100);
    }
    changeVolume() {
        this.element.volume = this.slider.value / 100;
    }
    mute() {
        this.muted = !this.muted;
        this.element.muted = this.muted;
    }
    render() {
        return html `
        
        <md-slider ?hidden=${!this.showSlider} @change=${this.changeVolume}>
        </md-slider>
        
        <md-standard-icon-button @click="${this.mute}">
            <md-icon>${this.muted ? 'volume_off' : 'volume_up'}</md-icon>
        </md-standard-icon-button>
        
        `;
    }
};
AudioControl.styles = [
    ...AltarControl.styles,
    css `
            :host {
                display: flex;
                align-items: center;

                border-radius: 25px;
                background-color: white;
            }

            md-slider[hidden] {
                display: none;
            }
      `
];
__decorate([
    query('md-slider')
], AudioControl.prototype, "slider", void 0);
__decorate([
    state()
], AudioControl.prototype, "muted", void 0);
__decorate([
    state()
], AudioControl.prototype, "showSlider", void 0);
AudioControl = __decorate([
    customElement('altar-audio-control')
], AudioControl);
export { AudioControl };
//# sourceMappingURL=audio-control.js.map