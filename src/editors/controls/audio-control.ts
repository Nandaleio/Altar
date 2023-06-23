import { customElement, query, state } from "lit/decorators.js";
import { AltarControl } from "./altar-control";
import { css, html } from "lit";
import { MdSlider } from '@material/web/slider/slider'

import '@material/web/slider/slider';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/icon/icon.js';

@customElement('altar-audio-control')
export class AudioControl extends AltarControl<HTMLMediaElement> {
    
    @query('md-slider')
    slider!: MdSlider;

    @state()
    muted: boolean = false;

    @state()
    showSlider: boolean = false;

    protected override setEventListeners(el: HTMLMediaElement): void {
        el.addEventListener('volumechange', () => this.slider.value = el.volume * 100)
    }

    private changeVolume() {
        this.element.volume = this.slider.value/100;
    }

    private mute(){
        this.muted = !this.muted
        this.element.muted = this.muted;
    }

    override onmouseover = () =>  this.showSlider = true;
    override onmouseleave = () => this.showSlider = false;

    override render() {
        return html`
        
        <md-slider ?hidden=${!this.showSlider} @change=${this.changeVolume}>
        </md-slider>
        
        <md-standard-icon-button @click="${this.mute}">
            <md-icon>${this.muted ? 'volume_off' : 'volume_up'}</md-icon>
        </md-standard-icon-button>
        
        `;
    }
    
    static override styles = [
        ...AltarControl.styles,
        css`
            :host {
                display: flex;
                align-items: center;

                border-radius: 25px;
                background-color: white;
            }

            md-slider[hidden] {
                display: none;
            }
      `]
}

declare global {
    interface HTMLElementTagNameMap {
      'altar-audio-control': AudioControl;
    }
}