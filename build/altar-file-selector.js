var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@material/web/button/outlined-button';
let AltarFileSelector = class AltarFileSelector extends LitElement {
    constructor() {
        super();
        this.addEventListener('click', () => this.fileInput.click());
    }
    fileChange(e) {
        const file = e.target.files[0];
        this.dispatchEvent(new CustomEvent('file-selected', { bubbles: true, composed: true, detail: file }));
    }
    render() {
        return html `
        <md-outlined-button @click="${this.click}">Select a file</md-outlined-button>
        <input id="altar-file-input" type="file" @change="${this.fileChange}">
    `;
    }
};
AltarFileSelector.styles = css `
    #altar-file-input {
        display: none;
    }
  `;
__decorate([
    query("#altar-file-input")
], AltarFileSelector.prototype, "fileInput", void 0);
AltarFileSelector = __decorate([
    customElement('altar-file-selector')
], AltarFileSelector);
export { AltarFileSelector };
//# sourceMappingURL=altar-file-selector.js.map