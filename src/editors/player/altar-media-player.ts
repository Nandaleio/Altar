import { PropertyValueMap } from "lit";
import { AltarPlayer } from "./altar-player";
import { AltarControl } from "../controls/altar-control";

export abstract class AltarMediaPlayer<T extends AltarControl<any>> extends AltarPlayer<HTMLMediaElement, T> {

    override async firstUpdated(_changedProperties: PropertyValueMap<this>): Promise<void> {
        super.firstUpdated(_changedProperties);

        const el = await this.element
        el.src = URL.createObjectURL(this.file);
        Array.from(this.controls).map(_ => _.element = el);
    }

}