import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { IconStyles } from "../../styles/icons";

export abstract class AltarControl<T, I> extends LitElement {

    static override styles = [IconStyles];

    @property({type: Object})
    element!: T;

    protected abstract setEventListeners(el: T): void;
    
    public abstract getControlInfo(): I;

    override async update(changedProperties: Map<string, unknown>) {
        if (changedProperties.has("element") && this.element) {
          this.setEventListeners(this.element)
        }
      super.update(changedProperties);
    }
    
}