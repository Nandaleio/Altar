var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { computePosition, autoPlacement } from '@floating-ui/dom';
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@material/web/button/outlined-button';
let AltarCommentEditor = class AltarCommentEditor extends LitElement {
    constructor() {
        super(...arguments);
        this.show = false;
    }
    showCommentAtElement(element) {
        this.show = true;
        computePosition(element, this, {
            middleware: [autoPlacement()],
        }).then(({ x, y }) => {
            Object.assign(this.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        });
    }
    saveComment() {
        this.dispatchEvent(new CustomEvent('SaveComment', { bubbles: true, composed: true, detail: this.editorBaseElement.value }));
    }
    cancelComment() {
        this.show = false;
        this.editorBaseElement.value = '';
    }
    render() {
        return html `
    <div class="main-content" style="display: ${this.show ? 'flex' : 'none'}">
      <textarea id="altar-text-editor"></textarea>
      <div class="actions">
        <md-outlined-button @click="${this.saveComment}">Save</md-outlined-button>
        <md-outlined-button @click="${this.cancelComment}">Cancel</md-outlined-button>
      </div>
    </div>
      `;
    }
};
AltarCommentEditor.styles = css `
  
    :host {
      position: absolute;
      z-index: 1;
    }
    .main-content {
      flex-direction: column;
    }
    .actions {
      background-color: white;
      border-radius: 25px;
    }
  `;
__decorate([
    query('#altar-text-editor')
], AltarCommentEditor.prototype, "editorBaseElement", void 0);
__decorate([
    property({ type: Boolean })
], AltarCommentEditor.prototype, "show", void 0);
AltarCommentEditor = __decorate([
    customElement('altar-comment-editor')
], AltarCommentEditor);
export { AltarCommentEditor };
//# sourceMappingURL=altar-comment-editor.js.map