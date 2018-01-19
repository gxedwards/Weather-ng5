import {Component, OnInit} from '@angular/core';
import { ForecastService } from './forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  // forecasts
  selectedCities = [];

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    // grab the forecasts and push onto the selected cities.
    this.forecastService.getForecast().subscribe( forecasts => {
      let a = this.selectedCities;
      forecasts.forEach( function(city) {
        a.push(city);
      });
    });
  }

}
