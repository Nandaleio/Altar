import { AltarPlayer } from "./altar-player";
export class AltarMediaPlayer extends AltarPlayer {
    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        const el = await this.element;
        el.src = URL.createObjectURL(this.file);
        Array.from(this.controls).map(_ => _.element = el);
    }
}
//# sourceMappingURL=altar-media-player.js.map