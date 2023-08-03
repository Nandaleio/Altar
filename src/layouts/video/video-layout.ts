import { html, css, PropertyValueMap } from "lit";
import { customElement } from "lit/decorators.js";
import { VideoComment } from "../../models/comments-models";
import { AltarBaseLayout } from "../altar-base-layout";

import "../shared/canvas-manager";
import '../comments/altar-comment-trigger';
import { CanvasObjectManager } from "../shared/canvas-manager";
import { VideoController } from "../../controllers/video-controller";
import { TimeController } from "../../controllers/time-controller";
@customElement('altar-video-layout')
export class AltarVideoLayout extends AltarBaseLayout<HTMLVideoElement, VideoComment> {

    videoController = new VideoController(this);
    timeController = new TimeController(this);

    override connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener('reset-view', this.resetView);
    }

    private resetView(){
        const canvasManager = this.controls[0] as CanvasObjectManager
        canvasManager.canvasController.resetView();
    }

    protected override update(changedProperties: PropertyValueMap<this>): void {
        super.update(changedProperties)
        if(changedProperties.has('mode') && this.mode) {
            const canvasManager = this.controls[0] as CanvasObjectManager
            canvasManager.setMode(this.mode)
        }
    }

    override render() {
        return html`
        <video hidden id="altar-player-element" ></video>
        <altar-canvas-manager class="altar-control-element"></altar-canvas-manager>
        <altar-audio-layout file="${this.file}" comments=${this.comments} selectedComment="${this.selectedComment}"></altar-audio-layout>
        `;
    }

    static override styles = [
        css`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
        }
    `];
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-video-layout': AltarVideoLayout;
  }
}