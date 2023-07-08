import { customElement, property } from "lit/decorators.js";
import { html, css, LitElement } from "lit";
import { AltarEvent } from "../../utils/events";
import { TimeComment } from "../../models/comments-models";

@customElement('altar-timeline')
export class AltarTimeLine extends LitElement {

    @property({type: Array})
    comments: TimeComment[] = [];

    @property({type: Number})
    progress: number = 0;

    private selectComment(comment: TimeComment) {
        console.log("comment selected", comment.comment)
        this.dispatchEvent(new AltarEvent('comment-selected', comment))
    }

    private changeTime(ev: MouseEvent) {
        const timePercent = (ev.clientX - this.offsetLeft) / this.clientWidth;
        console.log("time changed", timePercent)
        this.dispatchEvent(new AltarEvent('change-time', timePercent))
    }


    override render() {
        return html`
        <div class="bar" @click="${this.changeTime}">
            ${this.comments?.map((_) => html`
                <div class="timeline-comment" @click="${this.selectComment(_)}" style="left: ${_.time *100}%;"></div>
            `)}
            <div class="progress" style="width:${this.progress*100}%"></div>
        </div> 
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
        .bar{
            height: 60%;
            background-color: lightgrey;
            border-radius: 25px;
        }
        .progress{
            background-color: var(--md-sys-color-primary, green);
            height: 100%;
            border-radius: 25px;
        }
        .timeline-comment {
            z-index: 1;
            width: 3px;
            height: 60%;
            
            background-color: var(--altar-timeline-comment-color, red);
            position: absolute;
            cursor: pointer;
        }
        `
    ];

}

declare global {
    interface HTMLElementTagNameMap {
      'altar-timeline': AltarTimeLine;
    }
  }