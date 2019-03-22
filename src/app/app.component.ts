import {Component, OnInit} from '@angular/core';
import * as configcat from 'configcat-js';
import {IConfigCatClient} from 'configcat-common/lib/ConfigCatClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {
    this.configCatClient = configcat.createClientWithAutoPoll('a63WCEgeG3MGi8-AI1PXSg/0Cd4SrVP2EC0gTqC_VLclQ', {
      pollIntervalSeconds: 10
    });
  }

  public configCatClient: IConfigCatClient;
  public showCat: boolean;

  static navigate(url: string): void {
    window.location.href = url;
  }

  ngOnInit(): void {
    this.configCatClient.getValue('showCatCard', false, value => this.showCat = value);
  }

}
