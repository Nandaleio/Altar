import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Comment3D } from './comments/models';
import { AltarThreePlayer } from './player/altar-three-player';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { AmbientLight, PerspectiveCamera, PointLight } from 'three';
import { AltarPlayer } from './player/altar-player';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

@customElement('altar-3d-player')
export class Altar3DPlayer extends AltarThreePlayer<OrbitControls, Comment3D> {

    override render() {
        return html`
        <canvas id="altar-player-element"></canvas>
        <altar-comment-trigger ?isCommentMode="${this.isCommentMode}"></altar-comment-trigger>
        `;
    }
    
    protected override async initThree() {
      const el = await this.element
      this.camera = new PerspectiveCamera(); 
      this.camera.position.z = 5;

      const c = new OrbitControls(this.camera, el);

      this.scene.add(new AmbientLight(0xaaaaaa));
      const l = new PointLight(0xffffff)
      l.position.y += 100;
      this.scene.add(l);

      const loader = new OBJLoader();
      loader.load(
          URL.createObjectURL(this.file),
          this.loadRessource.bind(this), 
          (xhr) => console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ),
          (error) => console.error( 'An error happened' ,error)
      );
    }

    static override styles = [
      ...AltarPlayer.styles,
      css`
    `];

    
    public override getPlayerInfo(): Comment3D {
        throw new Error('Method not implemented.');
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-3d-player': Altar3DPlayer;
  }
}
