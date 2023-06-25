import { AltarPlayer } from "./altar-player";
import { Scene, WebGLRenderer } from "three";
export class AltarThreePlayer extends AltarPlayer {
    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        const el = (await this.element);
        this.scene = new Scene();
        this.renderer = new WebGLRenderer({ canvas: el, antialias: true });
        this.renderer.setSize(this.clientWidth, this.clientHeight);
        await this.initThree();
        this.animateThree();
    }
    loadRessource(obj) {
        this.scene.add(obj);
    }
    animateThree() {
        requestAnimationFrame(this.animateThree.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
}
//# sourceMappingURL=altar-three-player.js.map