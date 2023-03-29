import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EMPTY, map, Observable, of, switchMap, tap } from "rxjs";
import { WeatherData } from "../../core/models/weather/weather-data";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // todo: move to config file
  apiUrl = 'https://localhost:7242/weatherforecast';

  coordinates;

  constructor(
    private http: HttpClient
  ) {
  }

  // we get exactly the shape of data that we need here
  getWeatherData(): Observable<WeatherData[]> {
    const local = sessionStorage.getItem('weatherData');
    if (!local) {
      return this.http.get<WeatherData[]>(this.apiUrl).pipe(
        tap(data => sessionStorage.setItem('weatherData', JSON.stringify(data)))
      );
    } else {
      return of(JSON.parse(local));
    }

  }

  // unused method, to get location for calls to a real weather api
  getLocation(): Observable<any> {
    if (navigator.geolocation) {
      return new Observable(observer => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.coordinates = { longitude: position.coords.longitude, latitude: position.coords.latitude };
            observer.next();
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
      });
    } else {
      console.log("This browser does not support geolocation.");
      return EMPTY;
    }
  }
}
