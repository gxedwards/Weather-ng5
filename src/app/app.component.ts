import {Component, OnInit} from '@angular/core';
import { ForecastService } from './forecast.service';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  // cities for which we want forecast information
  get selectedCities() { return  this.appService.selectedCities};

  constructor(private forecastService: ForecastService, private appService: AppService) { }

  ngOnInit() {


    this.addCard('2459115');

  }

  addCard(key: string) {
    this.appService.addCard(key);
  }

}
