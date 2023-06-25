var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from "lit/decorators.js";
import { AltarControl } from "./altar-control";
import { html } from "lit";
let ImageControl = class ImageControl extends AltarControl {
    setEventListeners(el) {
        throw new Error("Method not implemented." + el);
    }
    render() {
        return html `Image Control ${0.8}`;
    }
};
ImageControl = __decorate([
    customElement('altar-image-control')
], ImageControl);
export { ImageControl };
//# sourceMappingURL=image-control.js.map