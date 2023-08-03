import { AltarBaseLayout } from '../layouts/altar-base-layout';
import { BaseController } from './base-controller';

export class TimeController extends BaseController<AltarBaseLayout<HTMLMediaElement, any>> {

  constructor(host: AltarBaseLayout<HTMLMediaElement, any>) {
    super(host);
  }

  override async hostUpdated() {
    super.hostUpdated();
    Array.from(this.host.controls).map(_ => {
        _.commentsPosition = this.host.comments?.map(_ => _.time*100);
    });
  }
}