import { AltarMediaPlayer } from './player/altar-media-player';
import { TimeControl } from './controls/time-control';
import { AudioControl } from './controls/audio-control';
import './controls/time-control';
import './controls/audio-control';
import './comments/altar-comment-trigger';
export declare class AltarVideoPlayer extends AltarMediaPlayer<TimeControl | AudioControl> {
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-video-player': AltarVideoPlayer;
    }
}
//# sourceMappingURL=altar-video-player.d.ts.map