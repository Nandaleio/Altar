import { PropertyValueMap } from "lit";
import { AltarPlayer } from "./altar-player";
import { AltarControl } from "../controls/altar-control";
import { TimeControl } from "../controls/time-control";

export abstract class AltarMediaPlayer<T extends AltarControl<any, any>, J> extends AltarPlayer<HTMLMediaElement, T, J> {

    override async connectedCallback() {
        super.connectedCallback();
        const el = await this.element;
        el.addEventListener('click', () => {
            if(el.paused) el.play();
            else el.pause();
        })
    }

    override async firstUpdated(_changedProperties: PropertyValueMap<this>): Promise<void> {
        super.firstUpdated(_changedProperties);

        const el = await this.element
        el.src = URL.createObjectURL(this.file);
        Array.from(this.controls).map(_ => _.element = el);
    }

    public override getPlayerInfo() {
        return Array.from(this.controls)?.filter(_ => _ instanceof TimeControl).at(0)?.getControlInfo();
    }
}