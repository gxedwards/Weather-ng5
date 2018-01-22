import {Injectable} from '@angular/core';
import {ForecastService} from './forecast.service';

/**
 * Service that allows common items to be shared.
 */
@Injectable()
export class AppService {

  public selectedCities = [];

  constructor(private forecastService: ForecastService) {
  }

  addForecast(key: string) {
    // grab the forecasts and push onto the selected cities.
    this.forecastService.getForecast(key).subscribe(forecast => {
      this.selectedCities.push(forecast);
    });
  }

}
