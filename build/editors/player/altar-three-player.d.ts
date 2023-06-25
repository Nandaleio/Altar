import { PropertyValueMap } from "lit";
import { AltarPlayer } from "./altar-player";
import { Camera, EventDispatcher, Renderer, Scene } from "three";
export declare abstract class AltarThreePlayer<CONTROLS extends EventDispatcher, COMMENT_TYPE> extends AltarPlayer<HTMLCanvasElement, CONTROLS, COMMENT_TYPE> {
    protected scene: Scene;
    protected renderer: Renderer;
    protected camera: Camera;
    protected abstract initThree(): void;
    firstUpdated(_changedProperties: PropertyValueMap<this>): Promise<void>;
    protected loadRessource(obj: any): void;
    protected animateThree(): void;
}
//# sourceMappingURL=altar-three-player.d.ts.map