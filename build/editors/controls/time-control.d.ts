import { AltarControl } from "./altar-control";
import './elements/altar-timeline';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/icon/icon.js';
export declare class TimeControl extends AltarControl<HTMLMediaElement> {
    isPlaying: boolean;
    currentProgess: number;
    commentsPosition: number[];
    protected scheduleUpdate(): Promise<void>;
    protected setEventListeners(el: HTMLMediaElement): void;
    togglePlay(): void;
    changeCurrentTime(ev: CustomEvent): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-time-control': TimeControl;
    }
}
//# sourceMappingURL=time-control.d.ts.map