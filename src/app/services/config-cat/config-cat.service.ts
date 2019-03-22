import {Injectable} from '@angular/core';
import * as configcat from 'configcat-js';
import {IConfigCatClient} from 'configcat-common/lib/ConfigCatClient';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigCatService {

  public readonly client: IConfigCatClient;

  constructor() {
    this.client = configcat.createClientWithAutoPoll(environment.configCatApiKey);
  }

}
