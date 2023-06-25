import { AltarMediaPlayer } from './player/altar-media-player';
import { TimeControl } from './controls/time-control';
import { AudioControl } from './controls/audio-control';
import './controls/time-control';
import './controls/audio-control';
import './comments/altar-comment-trigger';
export declare class AltarAudioPlayer extends AltarMediaPlayer<TimeControl | AudioControl> {
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-audio-player': AltarAudioPlayer;
    }
}
//# sourceMappingURL=altar-audio-player.d.ts.map