import { AltarVideoLayout } from '../layouts/video/video-layout';
import { BaseController } from './base-controller';

export class VideoController extends BaseController<AltarVideoLayout> {

  constructor(host: AltarVideoLayout) {
    super(host);
  }

  override async hostUpdated() {
    super.hostUpdated();
    Array.from(this.host.controls).map(async _ => {
        _.centralObject = await this.host.element
        _.objects = this.host.comments?.map(_ => _) ?? [];
    });
  }
}