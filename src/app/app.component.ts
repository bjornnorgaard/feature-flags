import {Component, OnInit} from '@angular/core';
import {ConfigCatService} from './services/config-cat/config-cat.service';
import {SplitService} from './services/split/split.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public showCat = false;
  public showSplit = false;

  constructor(private catService: ConfigCatService,
              private splitService: SplitService) {
  }

  ngOnInit(): void {
    this.catService.client.getValue('showCatCard', false, value => this.showCat = value);
    this.showSplit = this.splitService.client.getTreatment('showSplitCard') === 'on';
    console.log('split', this.splitService.client.getTreatment('showSplitCard'));
    // Check out link next time:
    // https://github.com/splitio/angular-sdk-examples/blob/master/src/app/splitio.service.ts
  }

  public navigate(url: string): void {
    window.location.href = url;
  }

}
