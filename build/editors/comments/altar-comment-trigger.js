var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/iconbutton/standard-icon-button';
import '@material/web/icon/icon';
import '@material/web/elevation/elevation';
let AltarCommentTrigger = class AltarCommentTrigger extends LitElement {
    openCommentBox() {
        this.dispatchEvent(new CustomEvent('openCommentBox', { bubbles: true, composed: true, detail: this }));
    }
    render() {
        return html `
        <md-standard-icon-button @click="${this.openCommentBox}">
            <md-icon>add_comment</md-icon>
        </md-standard-icon-button>
    `;
    }
};
AltarCommentTrigger.styles = css `
    :host {
        border-radius: 25px;
        background-color: white;
    }
    `;
AltarCommentTrigger = __decorate([
    customElement('altar-comment-trigger')
], AltarCommentTrigger);
export { AltarCommentTrigger };
//# sourceMappingURL=altar-comment-trigger.js.map