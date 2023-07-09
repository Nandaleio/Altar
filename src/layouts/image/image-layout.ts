import { html, css, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { Comment2D } from "../../models/comments-models";
import { AltarBaseLayout } from "../altar-base-layout";

import { ImageController } from "../../controllers/image-controller";

import "../shared/canvas-manager";
import '../comments/altar-comment-trigger';
import { CanvasObjectManager } from "../shared/canvas-manager";
import { AltarMode } from "../../models/atlar-mode";

import '../comments/altar-mode-button';
@customElement('altar-image-layout')
export class AltarImageLayout extends AltarBaseLayout<HTMLImageElement, Comment2D> {

    imageController = new ImageController(this);

    resetView(){
        const canvasManager = this.controls[0] as CanvasObjectManager
        canvasManager.canvasController.resetView();
    }

    private isCommentMode(){
        return [AltarMode.DRAW, AltarMode.COMMENT, AltarMode.POINT].includes(this.mode)
    }

    override render() {
        return html`
        <div class="main-content">
            <img hidden id="altar-player-element" />
            <altar-canvas-manager class="altar-control-element"></altar-canvas-manager>
            
            <div class="view-controls">
                <md-standard-icon-button @click="${this.resetView}">
                    <md-icon>fullscreen</md-icon>
                </md-standard-icon-button>
            </div>
        </div>
        <div class="comments">
            <altar-comment-trigger .isCommentMode="${this.isCommentMode()}"></altar-comment-trigger>
            ${
                this.isCommentMode() ?
                html`
                    <altar-mode-button ?isCurrentMode="${this.mode === AltarMode.POINT}" .currentMode="${AltarMode.POINT}" icon="add_location"></altar-mode-button>
                    <altar-mode-button ?isCurrentMode="${this.mode === AltarMode.DRAW}" .currentMode="${AltarMode.DRAW}" icon="draw"></altar-mode-button>
                `
                : nothing
            }
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
            position: relative;
        }
        .comments {
            display:flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .view-controls {
            position: absolute;
            top: 0;
            right: 1rem;
            display: flex;
        }
        
        .view-controls md-icon {
                color: white;
        }
    `];
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-image-layout': AltarImageLayout;
  }
}