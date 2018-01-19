import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { Forecast } from './forecast';
import {DEFAULT_FORECAST} from './mock-forecast';

@Injectable()
export class ForecastService {

  constructor() { }

  getForecast(): Observable<Forecast[]> {
    return of(DEFAULT_FORECAST);
  }

}
