import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { Forecast } from './forecast';
import {DEFAULT_FORECAST} from './mock-forecast';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ForecastService {

  constructor(private http: HttpClient) { }

  getForecastDummy(woeid: string): Observable<Forecast> {
    return of(DEFAULT_FORECAST);
  }

  getForecast(woeid: string): Observable<Forecast> {
    const statement = 'select * from weather.forecast where woeid=' + woeid;
    const url = 'https://query.yahooapis.com/v1/public/yql?format=json&q=' +
      statement;
    return this.http.get<YahooResponse>(url).map(
      result => {
        const forecast =  result.query.results;
        forecast.key = woeid;
        return forecast;
      } );
  }
}

interface YahooResponse {
  query: any;
}
