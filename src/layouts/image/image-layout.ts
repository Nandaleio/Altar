import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { Comment2D } from "../../models/comments-models";
import { AltarBaseLayout } from "../altar-base-layout";

import { ImageController } from "../../controllers/image-controller";

import "../shared/canvas-manager";
import '../comments/altar-comment-trigger';

@customElement('altar-image-layout')
export class AltarImageLayout extends AltarBaseLayout<HTMLImageElement, Comment2D> {

    imageController = new ImageController(this);

    override render() {
        return html`
        <div class="main-content">
            <img hidden id="altar-player-element" />
            <altar-canvas-manager class="altar-control-element"></altar-canvas-manager>
        </div>
        <div class="comments">
            <altar-comment-trigger></altar-comment-trigger>
        </div>
        `;
    }

    static override styles = [
        css`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
        }
        .main-content {
            display: flex;
            flex-grow: 1;
        }
    `];
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-image-layout': AltarImageLayout;
  }
}