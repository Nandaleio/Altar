import { customElement } from "lit/decorators.js";
import { AltarControl } from "./altar-control";
import { html } from "lit";

@customElement('altar-image-control')
export class ImageControl extends AltarControl<HTMLCanvasElement> {

    protected override setEventListeners(el: HTMLCanvasElement): void {
        throw new Error("Method not implemented."+el,);
    }

    override render() {
        return html`Image Control ${0.8}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'altar-image-control': ImageControl;
    }
  }