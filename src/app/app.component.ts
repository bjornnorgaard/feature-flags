import {Component, OnInit} from '@angular/core';
import {ConfigCatService} from './services/config-cat/config-cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public showCat = false;

  constructor(private catService: ConfigCatService) {
  }

  ngOnInit(): void {
    this.catService.client.getValue('showCatCard', false, value => this.showCat = value);
  }

  public navigate(url: string): void {
    window.location.href = url;
  }

}
