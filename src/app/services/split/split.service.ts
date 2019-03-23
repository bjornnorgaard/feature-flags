import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {SplitFactory} from '@splitsoftware/splitio';
import * as SplitIO from '@splitsoftware/splitio/types/splitio';

@Injectable({
  providedIn: 'root'
})
export class SplitService {

  public readonly client: SplitIO.IClient;

  constructor() {
    const factory = SplitFactory({
      core: {
        authorizationKey: environment.splitApiKey,
        key: 'Browser'
      }
    });

    this.client = factory.client();
  }
}
