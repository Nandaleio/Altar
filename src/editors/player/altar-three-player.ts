import { PropertyValueMap } from "lit";
import { AltarPlayer } from "./altar-player";
import { Camera, EventDispatcher, Renderer, Scene, WebGLRenderer } from "three";

export abstract class AltarThreePlayer<CONTROLS extends EventDispatcher, COMMENT_TYPE> extends AltarPlayer<HTMLCanvasElement, CONTROLS, COMMENT_TYPE> {

    protected scene!: Scene;
    protected renderer!: Renderer;
    protected camera!: Camera;

    protected abstract initThree(): void;

    override async firstUpdated(_changedProperties: PropertyValueMap<this>): Promise<void> {
        super.firstUpdated(_changedProperties);

        const el = (await this.element);
        this.scene = new Scene();
        this.renderer = new WebGLRenderer({canvas: el, antialias: true});
        this.renderer.setSize(this.clientWidth, this.clientHeight)

        await this.initThree();
        this.animateThree();
    }

    protected loadRessource(obj: any ) {
        this.scene.add(obj);
    }

    protected animateThree() {
        requestAnimationFrame( this.animateThree.bind(this) );
        this.renderer.render( this.scene, this.camera );
    }
}

