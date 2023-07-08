import { AltarImageLayout } from '../layouts/image/image-layout';
import { BaseController } from './base-controller';

export class ImageController extends BaseController<AltarImageLayout> {

  constructor(host: AltarImageLayout) {
    super(host);
  }

  override async hostUpdated() {
    super.hostUpdated();
    Array.from(this.host.controls).map(async _ => {
        _.centralObject = await this.host.element
        _.objects = this.host.comments?.map(_ => _) ?? [{x:0,y:0}];
    });
  }
}