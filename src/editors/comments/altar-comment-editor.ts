import { computePosition, autoPlacement } from '@floating-ui/dom';
import {LitElement, html, css} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { AltarEvent } from '../../utils/events';

import '@material/web/button/outlined-button';

@customElement('altar-comment-editor')
export class AltarCommentEditor extends LitElement {

    @query('#altar-text-editor')
    editorBaseElement!: HTMLTextAreaElement;

    @property({type: Boolean})
    show: boolean = false;

    public showCommentAtElement(element: HTMLElement) {
      this.show = true;
      computePosition(element, this, {
        middleware: [autoPlacement()],
      }).then(({x, y}) => {
        Object.assign(this.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }

    public saveComment() {
      this.dispatchEvent(new AltarEvent('SaveComment', this.editorBaseElement.value))
      this.editorBaseElement.value = '';
    }

    public cancelComment() {
      this.editorBaseElement.value = '';
    }

  override render() {
    return html`
    <div class="main-content" style="display: ${this.show ? 'flex' : 'none'}">
      <textarea id="altar-text-editor"></textarea>
      <div class="actions">
        <md-outlined-button @click="${this.saveComment}">Save</md-outlined-button>
        <md-outlined-button @click="${this.cancelComment}">Cancel</md-outlined-button>
      </div>
    </div>
      `;
  }

  static override styles = css`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'altar-comment-editor': AltarCommentEditor;
  }
}
