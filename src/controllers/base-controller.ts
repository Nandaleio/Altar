




import {ReactiveController} from 'lit';
import { AltarBaseLayout } from '../layouts/altar-base-layout';

export class BaseController<T extends AltarBaseLayout<any, any>> implements ReactiveController {

    host: T;

    constructor(host: T) {
        (this.host = host).addController(this);
    }

    async hostUpdated() {
        const el = await this.host.element
        el.src = URL.createObjectURL(this.host.file);
        Array.from(this.host.controls).map(_ => _.element = el);
    }

    hostConnected?(): void;
    hostDisconnected?(): void;
    hostUpdate?(): void;

}