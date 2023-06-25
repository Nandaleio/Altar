import { Comment3D } from './comments/models';
import { AltarThreePlayer } from './player/altar-three-player';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export declare class Altar3DPlayer extends AltarThreePlayer<OrbitControls, Comment3D> {
    render(): import("lit-html").TemplateResult<1>;
    protected initThree(): Promise<void>;
    static styles: import("lit").CSSResult[];
    getPlayerInfo(): Comment3D;
}
declare global {
    interface HTMLElementTagNameMap {
        'altar-3d-player': Altar3DPlayer;
    }
}
//# sourceMappingURL=altar-3d-player.d.ts.map