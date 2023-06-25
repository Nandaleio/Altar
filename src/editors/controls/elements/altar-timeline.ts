import { customElement, property, query } from "lit/decorators.js";
import { html, css, LitElement } from "lit";
import { MdSlider } from "@material/web/slider/slider";


import '@material/web/slider/slider';
import { AltarEvent } from "../../../utils/events";

@customElement('altar-timeline')
export class AltarTimeLine extends LitElement {

    @property({type: Array})
    comments: number[] = [];

    @property({type: Number})
    progress: number = 0;

    @query('md-slider')
    progressBar!: MdSlider;

    private changeTime() {
        const timePercent = this.progressBar.value / 100;
        this.dispatchEvent(new AltarEvent('change-time', timePercent))
    };

    override render() {
        return html`
        ${this.comments?.map((_) => html`
            <div class="timeline-comment" style="left: ${_}%;"></div>
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
        .timeline-comment {
            z-index: 1;
            width: 3px;
            height: 4px;
            
            background-color: var(--altar-timeline-comment-color, red);
            position: absolute;
        }
        `
    ];

}

declare global {
    interface HTMLElementTagNameMap {
      'altar-timeline': AltarTimeLine;
    }
  }