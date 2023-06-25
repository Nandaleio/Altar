var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AltarThreePlayer } from './player/altar-three-player';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { AmbientLight, PerspectiveCamera, PointLight } from 'three';
import { AltarPlayer } from './player/altar-player';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
let Altar3DPlayer = class Altar3DPlayer extends AltarThreePlayer {
    render() {
        return html `
        <canvas id="altar-player-element"></canvas>
        <altar-comment-trigger ?isCommentMode="${this.isCommentMode}"></altar-comment-trigger>
        `;
    }
    async initThree() {
        const el = await this.element;
        this.camera = new PerspectiveCamera();
        this.camera.position.z = 5;
        const c = new OrbitControls(this.camera, el);
        this.scene.add(new AmbientLight(0xaaaaaa));
        const l = new PointLight(0xffffff);
        l.position.y += 100;
        this.scene.add(l);
        const loader = new OBJLoader();
        loader.load(URL.createObjectURL(this.file), this.loadRessource.bind(this), (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'), (error) => console.error('An error happened', error));
    }
    getPlayerInfo() {
        throw new Error('Method not implemented.');
    }
};
Altar3DPlayer.styles = [
    ...AltarPlayer.styles,
    css `
    `
];
Altar3DPlayer = __decorate([
    customElement('altar-3d-player')
], Altar3DPlayer);
export { Altar3DPlayer };
//# sourceMappingURL=altar-3d-player.js.map