import { PropertyValueMap } from 'lit';
import { AltarPlayer } from './player/altar-player';
import { ImageControl } from './controls/image-control';
export declare class AltarImagePlayer extends AltarPlayer<HTMLCanvasElement, ImageControl> {
    firstUpdated(_changedProperties: PropertyValueMap<this>): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-image-player': AltarImagePlayer;
    }
}
//# sourceMappingURL=altar-image-player.d.ts.map