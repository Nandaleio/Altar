import { AltarAudioLayout } from '../layouts/audio/audio-layout';
import { BaseController } from './base-controller';

export class TimeController extends BaseController<AltarAudioLayout> {

  constructor(host: AltarAudioLayout) {
    super(host);
  }

  override async hostUpdated() {
    super.hostUpdated();
    Array.from(this.host.controls).map(_ => {
        _.commentsPosition = this.host.comments?.map(_ => _.time*100);
    });
  }
}