import { html, css, PropertyValueMap } from "lit";
import { customElement } from "lit/decorators.js";
import { Comment2D } from "../../models/comments-models";
import { AltarBaseLayout } from "../altar-base-layout";

import { ImageController } from "../../controllers/image-controller";

import "../shared/canvas-manager";
import '../comments/altar-comment-trigger';
import { CanvasObjectManager } from "../shared/canvas-manager";
@customElement('altar-image-layout')
export class AltarImageLayout extends AltarBaseLayout<HTMLImageElement, Comment2D> {

    imageController = new ImageController(this);

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
        <img hidden id="altar-player-element" />
        <altar-canvas-manager class="altar-control-element" ></altar-canvas-manager>
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
    'altar-image-layout': AltarImageLayout;
  }
}