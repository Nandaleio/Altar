
export class AltarEvent<T = any> extends CustomEvent<T> {
  constructor(eventName: string, data?: T){
    super(eventName, {
      bubbles: true,
      composed: true,
      detail: data,
    })
  }
}

export function redispatchEvent(element: Element, event: Event) {
    if (event.bubbles && (!element.shadowRoot || event.composed)) {
      event.stopPropagation();
    }
    const copy = Reflect.construct(event.constructor, [event.type, event]);
    const dispatched = element.dispatchEvent(copy);
    if (!dispatched) {
      event.preventDefault();
    }
    return dispatched;
}