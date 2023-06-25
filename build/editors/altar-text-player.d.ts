import { PropertyValueMap } from 'lit';
import { AltarPlayer } from './player/altar-player';
export declare class AltarTextPlayer extends AltarPlayer<null, null> {
    fileContent: string | ArrayBuffer | undefined | null;
    firstUpdated(changedProperties: PropertyValueMap<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-text-player': AltarTextPlayer;
    }
}
//# sourceMappingURL=altar-text-player.d.ts.map