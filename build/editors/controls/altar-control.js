var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { IconStyles } from "../../styles/icons";
export class AltarControl extends LitElement {
    update(changedProperties) {
        if (changedProperties.has("element") && this.element) {
            this.setEventListeners(this.element);
        }
        super.update(changedProperties);
    }
}
AltarControl.styles = [IconStyles];
__decorate([
    property({ type: Object })
], AltarControl.prototype, "element", void 0);
//# sourceMappingURL=altar-control.js.map