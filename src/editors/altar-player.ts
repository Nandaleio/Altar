import { LitElement, PropertyValueMap } from "lit";
import { property, query } from "lit/decorators.js";

export abstract class AltarPlayer<T> extends LitElement {

    @property({type: Object})
    file!: File;

    @query("#altar-player-element")
    element!: HTMLImageElement
    
    override firstUpdated(changedProperties: PropertyValueMap<this>) {
        super.firstUpdated(changedProperties);
        this.element.src = URL.createObjectURL(this.file);
    }

    addComment(comment: T) {
        console.log('comment-added',comment)
        this.dispatchEvent(new CustomEvent('comment-added', {bubbles: true, composed: true, detail: comment}))
    }

    editComment(comment: T) {
        console.log('comment-edited',comment)
        this.dispatchEvent(new CustomEvent('comment-edited', {bubbles: true, composed: true, detail: comment}))
    }

}