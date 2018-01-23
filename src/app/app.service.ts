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

  addCard(key: string) {
    // grab the forecasts and push onto the selected cities.
    this.forecastService.getForecast(key).subscribe(forecast => {
      this.selectedCities.push(forecast);
    });
  }

  updateCards() {
    this.selectedCities.forEach( forecastItem => {
      const key = forecastItem.key;
      // grab the forecasts and push onto the selected cities.
      this.forecastService.getForecast(key).subscribe(forecast => {
        forecastItem = forecast;
      });
    });
  }

  deleteCard(key: string) {
    this.selectedCities.forEach( (forecastItem, index, object) => {
      if (forecastItem.key === key) {
        object.splice(index, 1);
      }
    });
  }

}
