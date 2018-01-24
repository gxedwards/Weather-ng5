import {Injectable} from '@angular/core';
import {ForecastService} from './forecast.service';
import {AsyncLocalStorage} from 'angular-async-local-storage';

/**
 * Service that allows common items to be shared.
 */
@Injectable()
export class AppService {

  public selectedCities = [];

  constructor(private forecastService: ForecastService, private localStorage: AsyncLocalStorage) {
  }

  addCard(key: string) {
    // grab the forecasts and push onto the selected cities.
    this.forecastService.getForecast(key).subscribe(forecast => {
      this.selectedCities.push(forecast);
      this.saveCards();
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
    this.saveCards();
  }

  deleteCard(key: string) {
    this.selectedCities.forEach( (forecastItem, index, object) => {
      if (forecastItem.key === key) {
        object.splice(index, 1);
      }
    });
    this.saveCards();
  }

  private saveCards() {
    this.localStorage.setItem('cards', this.selectedCities).subscribe(() => {});
  }

}
