var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property, query } from "lit/decorators.js";
import { html, css, LitElement } from "lit";
import '@material/web/slider/slider';
let AltarTimeLine = class AltarTimeLine extends LitElement {
    constructor() {
        super(...arguments);
        this.comments = [];
        this.progress = 0;
    }
    changeTime() {
        const timePercent = this.progressBar.value / 100;
        this.dispatchEvent(new CustomEvent('change-time', { bubbles: true, composed: true, detail: timePercent }));
    }
    ;
    render() {
        var _a;
        return html `
        ${(_a = this.comments) === null || _a === void 0 ? void 0 : _a.map((_) => html `
            <div class="timeline-markup" style="left: ${_}%;"></div>
        `)}
        <md-slider .value=${this.progress * 100} @change=${this.changeTime}></md-slider>
        `;
    }
};
AltarTimeLine.styles = [
    css `
        :host {
            height: 2rem;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .timeline-markup {
            z-index: 1;
            width: 3px;
            height: 4px;
            background-color: red;
            position: absolute;
        }
        `
];
__decorate([
    property({ type: Array })
], AltarTimeLine.prototype, "comments", void 0);
__decorate([
    property({ type: Number })
], AltarTimeLine.prototype, "progress", void 0);
__decorate([
    query('md-slider')
], AltarTimeLine.prototype, "progressBar", void 0);
AltarTimeLine = __decorate([
    customElement('altar-timeline')
], AltarTimeLine);
export { AltarTimeLine };
//# sourceMappingURL=altar-timeline.js.map