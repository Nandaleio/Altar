import { PropertyValueMap } from "lit";
import { AltarPlayer } from "./altar-player";
import { AltarControl } from "../controls/altar-control";
export declare abstract class AltarMediaPlayer<T extends AltarControl<any>> extends AltarPlayer<HTMLMediaElement, T> {
    firstUpdated(_changedProperties: PropertyValueMap<this>): Promise<void>;
}
//# sourceMappingURL=altar-media-player.d.ts.map