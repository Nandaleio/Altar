import { customElement, state } from "lit/decorators.js";
import { AltarControl } from "./altar-control";
import { css, html } from "lit";

import './elements/altar-timeline';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/icon/icon.js';
import { formatTime } from "../../utils/text-format";

@customElement('altar-time-control')
export class TimeControl extends AltarControl<HTMLMediaElement> {

    @state()
    isPlaying: boolean = false;

    @state()
    currentProgess: number = 0;

    @state()
    commentsPosition: number[] = [];

    protected override async scheduleUpdate(): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve));
        super.scheduleUpdate();
      }

    protected setEventListeners(el: HTMLMediaElement): void {
        el.addEventListener('timeupdate', () => this.requestUpdate());
        el.addEventListener('durationchange', () => this.requestUpdate());
        el.addEventListener('ended' , () => this.isPlaying = false);
        el.addEventListener('play' , () => this.isPlaying = true);
        el.addEventListener('pause' , () => this.isPlaying = false);
    }

    togglePlay() {
        if(this.isPlaying)this.element.pause();
        else this.element.play();
    }

    changeCurrentTime(ev: CustomEvent){
        this.element.currentTime = ev.detail * this.element.duration;
        this.requestUpdate();
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