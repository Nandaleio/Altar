




import {ReactiveController} from 'lit';
import { AltarBaseLayout } from '../layouts/altar-base-layout';
import { AltarEvent } from '../utils/events';

export class BaseController<T extends AltarBaseLayout<any, any>> implements ReactiveController {

    host: T;

    constructor(host: T) {
        (this.host = host).addController(this);
    }

    async hostUpdated() {
        const el = await this.host.element
        el.src = URL.createObjectURL(this.host.file);
        Array.from(this.host.controls).map(_ => _.element = el);
        this.host.dispatchEvent(new AltarEvent('media-loaded'));
    }

    hostConnected?(): void;
    hostDisconnected?(): void;
    hostUpdate?(): void;

}