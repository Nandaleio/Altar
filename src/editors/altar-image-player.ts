import {PropertyValueMap, html} from 'lit';
import { customElement } from 'lit/decorators.js';
import { Comment2D } from './comments/models';
import { AltarThreePlayer } from './player/altar-three-player';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { AmbientLight, OrthographicCamera } from 'three';
import { createPlaneWithImage } from '../utils/threejs-utils';

@customElement('altar-image-player')
export class AltarImagePlayer extends AltarThreePlayer<MapControls, Comment2D> {

  public override getPlayerInfo() {
    return {x: 5, y: 5, id: '', comment:''};
  }
  
  protected override async initThree() {
    const el = await this.element;
    this.camera = new OrthographicCamera(); 
    this.camera.position.y = 50;
    this.scene.add(new AmbientLight(0xffffff));
    const c = new MapControls(this.camera, el);
    const img = createPlaneWithImage(URL.createObjectURL(this.file), this.clientWidth, this.clientHeight);
    this.scene.add(img);
  }

  override render() {
    return html`
      <canvas id="altar-player-element"></canvas>
      <altar-image-control class="altar-control-element"></altar-image-control>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'altar-image-player': AltarImagePlayer;
  }
}
