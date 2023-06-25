var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from "lit";
import { property, query, queryAll, queryAsync } from "lit/decorators.js";
export class AltarPlayer extends LitElement {
}
__decorate([
    query("altar-comment-triger")
], AltarPlayer.prototype, "commentTrigger", void 0);
__decorate([
    property({ type: Object })
], AltarPlayer.prototype, "file", void 0);
__decorate([
    queryAsync("#altar-player-element")
], AltarPlayer.prototype, "element", void 0);
__decorate([
    queryAll(".altar-control-element")
], AltarPlayer.prototype, "controls", void 0);
//# sourceMappingURL=altar-player.js.map