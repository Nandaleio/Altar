import { PropertyValueMap, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import { AltarPlayer } from './altar-player';

@customElement('altar-text-player')
export class AltarTextEditor extends AltarPlayer<TextComment> {

    @state()
    fileContent!: string | ArrayBuffer | undefined | null

    override firstUpdated(changedProperties: PropertyValueMap<this>) {
        super.firstUpdated(changedProperties);

        const reader = new FileReader();
        reader.onload = (evt: ProgressEvent<FileReader>) => {
            this.fileContent = evt.target?.result;
        }
        reader.onerror = () => {
            this.fileContent = "error reading file";
        }
        reader.readAsText(this.file, "UTF-8");
    }

    override render() {
        return html`${this.fileContent}`;
    }

}

export interface TextComment {

}

declare global {
  interface HTMLElementTagNameMap {
    'altar-text-editor': AltarTextEditor;
  }
}
