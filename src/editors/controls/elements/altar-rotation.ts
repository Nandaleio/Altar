import { customElement, property, query } from "lit/decorators.js";
import { html, css, LitElement } from "lit";
import { MdSlider } from "@material/web/slider/slider";


import '@material/web/slider/slider';

@customElement('altar-rotation v')
export class AltarRotation extends LitElement {

    @property({type: Array})
    comments: number[] = [];

    @property({type: Number})
    progress: number = 0;

    @query('md-slider')
    progressBar!: MdSlider;

    private changeTime() {
        const timePercent = this.progressBar.value / 100;
        this.dispatchEvent(new CustomEvent('change-time', {bubbles: true, composed: true, detail: timePercent}))
    };

    override render() {
        return html`
        ${this.comments?.map((_) => html`
            <div class="timeline-markup" style="left: ${_}%;"></div>
        `)}
        <md-slider .value=${this.progress * 100} @change=${this.changeTime}></md-slider>
        `;
    }

    static override styles = [
        css`
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

}

declare global {
    interface HTMLElementTagNameMap {
      'altar-rotation': AltarRotation;
    }
  }