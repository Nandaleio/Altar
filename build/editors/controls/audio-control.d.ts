import { AltarControl } from "./altar-control";
import { MdSlider } from '@material/web/slider/slider';
import '@material/web/slider/slider';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/icon/icon.js';
export declare class AudioControl extends AltarControl<HTMLMediaElement> {
    slider: MdSlider;
    muted: boolean;
    showSlider: boolean;
    protected setEventListeners(el: HTMLMediaElement): void;
    private changeVolume;
    private mute;
    onmouseover: () => boolean;
    onmouseleave: () => boolean;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-audio-control': AudioControl;
    }
}
//# sourceMappingURL=audio-control.d.ts.map