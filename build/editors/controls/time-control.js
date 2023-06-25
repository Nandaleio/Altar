var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, state } from "lit/decorators.js";
import { AltarControl } from "./altar-control";
import { css, html } from "lit";
import './elements/altar-timeline';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/icon/icon.js';
import { formatTime } from "../../utils/text-format";
let TimeControl = class TimeControl extends AltarControl {
    constructor() {
        super(...arguments);
        this.isPlaying = false;
        this.currentProgess = 0;
        this.commentsPosition = [];
    }
    async scheduleUpdate() {
        await new Promise((resolve) => setTimeout(resolve));
        super.scheduleUpdate();
    }
    setEventListeners(el) {
        el.addEventListener('timeupdate', () => this.requestUpdate());
        el.addEventListener('durationchange', () => this.requestUpdate());
        el.addEventListener('ended', () => this.isPlaying = false);
        el.addEventListener('play', () => this.isPlaying = true);
        el.addEventListener('pause', () => this.isPlaying = false);
    }
    togglePlay() {
        if (this.isPlaying)
            this.element.pause();
        else
            this.element.play();
    }
    changeCurrentTime(ev) {
        this.element.currentTime = ev.detail * this.element.duration;
        this.requestUpdate();
    }
    render() {
        var _a, _b, _c, _d;
        return html `
        <md-standard-icon-button @click="${this.togglePlay}">
            <md-icon>${this.isPlaying ? 'pause' : 'play_arrow'}</md-icon>
        </md-standard-icon-button>

        ${formatTime((_a = this.element) === null || _a === void 0 ? void 0 : _a.currentTime)} / ${formatTime((_b = this.element) === null || _b === void 0 ? void 0 : _b.duration)}

        <altar-timeline 
        .comments=${this.commentsPosition} 
        .progress=${((_c = this.element) === null || _c === void 0 ? void 0 : _c.currentTime) / ((_d = this.element) === null || _d === void 0 ? void 0 : _d.duration)}
        @change-time=${this.changeCurrentTime}></altar-timeline>
        `;
    }
};
TimeControl.styles = [
    ...AltarControl.styles,
    css `
        :host {
            display: flex;
            align-items: center;
            margin: 0.5rem;
            gap: 0.2rem;
            border-radius: 25px;
            background-color: white;
            flex-grow: 1;
        }

        altar-timeline {
            flex-grow: 1;
        }
        `
];
__decorate([
    state()
], TimeControl.prototype, "isPlaying", void 0);
__decorate([
    state()
], TimeControl.prototype, "currentProgess", void 0);
__decorate([
    state()
], TimeControl.prototype, "commentsPosition", void 0);
TimeControl = __decorate([
    customElement('altar-time-control')
], TimeControl);
export { TimeControl };
//# sourceMappingURL=time-control.js.map