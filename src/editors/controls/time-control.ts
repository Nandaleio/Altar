import { customElement, property, state } from "lit/decorators.js";
import { AltarControl } from "./altar-control";
import { css, html } from "lit";

import './elements/altar-timeline';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/icon/icon.js';
import { formatTime } from "../../utils/text-format";
import { TimeComment } from "../comments/models";
import { AltarEvent } from "../../utils/events";

@customElement('altar-time-control')
export class TimeControl extends AltarControl<HTMLMediaElement, TimeComment> {

    @state()
    isPlaying: boolean = false;

    @state()
    currentProgess: number = 0;

    @property({type: Array})
    commentsPosition: number[] = [];

    private lastCommentEmitted: any;

    public override getControlInfo() {
        return {
            time: this.element.currentTime / this.element.duration
        }
    }

    protected setEventListeners(el: HTMLMediaElement): void {
        el.addEventListener('timeupdate', () => {
            this.requestUpdate();
            const closest = this.findClosestNumber(this.commentsPosition, this.element.currentTime/this.element.duration);
            if(this.lastCommentEmitted !== closest) {
                //TODO find the whole comment
                this.dispatchEvent(new AltarEvent('comment-selected', ))
            }
        });
        el.addEventListener('durationchange', () => this.requestUpdate());
        el.addEventListener('ended' , () => this.isPlaying = false);
        el.addEventListener('play' , () => this.isPlaying = true);
        el.addEventListener('pause' , () => this.isPlaying = false);
    }

    togglePlay() {
        if(this.isPlaying)this.element.pause();
        else this.element.play();
    }

    changeCurrentTime(ev: AltarEvent){
        this.element.currentTime = ev.detail * this.element.duration;
        this.requestUpdate();
    }

    private findClosestNumber(arr: number[], target: number): number | null {
        if (!arr || arr.length === 0) {
          return null;
        }
      
        let closestNumber = arr[0];
        let minDifference = Math.abs(target - closestNumber);
      
        for (let i = 1; i < arr.length; i++) {
          const currentNumber = arr[i];
          const currentDifference = Math.abs(target - currentNumber);
      
          if (currentDifference < minDifference) {
            closestNumber = currentNumber;
            minDifference = currentDifference;
          }
        }
      
        return closestNumber;
      }

    override render() {
        return html`
        <md-standard-icon-button @click="${this.togglePlay}">
            <md-icon>${this.isPlaying ? 'pause' : 'play_arrow'}</md-icon>
        </md-standard-icon-button>

        ${formatTime(this.element?.currentTime)} / ${formatTime(this.element?.duration)}

        <altar-timeline 
        .comments=${this.commentsPosition} 
        .progress=${this.element?.currentTime / this.element?.duration}
        @change-time=${this.changeCurrentTime}></altar-timeline>
        `;
    }

    
    static override styles = [
        ...AltarControl.styles,
        css`
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
}

declare global {
    interface HTMLElementTagNameMap {
      'altar-time-control': TimeControl;
    }
}