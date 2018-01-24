import {Component, OnInit} from '@angular/core';
import { ForecastService } from './forecast.service';
import {AppService} from './app.service';
import {AsyncLocalStorage} from "angular-async-local-storage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  // cities for which we want forecast information
  get selectedCities() { return  this.appService.selectedCities; }

  constructor(private localStorage: AsyncLocalStorage, private appService: AppService) { }

  ngOnInit() {

    this.localStorage.getItem('cards').subscribe(cards => {
      if (cards == null) {
        // ideally this would use geo-location to determine this.
        this.addCard('2459115');
      } else {
        this.appService.selectedCities = cards;
      }
    });

  }

  addCard(key: string) {
    this.appService.addCard(key);
  }

}
