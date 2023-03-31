import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EMPTY, Observable, of, switchMap, tap, take } from "rxjs";
import { WeatherData } from "../../core/models/weather/weather-data";

interface Coordinates {
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // todo: move to config file
  apiUrl = 'https://api.open-meteo.com/v1/forecast';

  coordinates;

  constructor(
    private http: HttpClient
  ) {
  }

  getWeatherData(): Observable<WeatherData> {
    const local = sessionStorage.getItem('weatherData');
    if (!local) {
      return this.getLocation().pipe(
        take(1),
        switchMap(coordinates => {
          return this.http.get<WeatherData>(this.apiUrl, {
            params: {
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              current_weather: true
            }
          }).pipe(
            tap(data => sessionStorage.setItem('weatherData', JSON.stringify(data))),
          );
        })
      );
    } else {
      return of(JSON.parse(local));
    }
  }

  getLocation(): Observable<Coordinates> {
    if (navigator.geolocation) {
      return new Observable(observer => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coordinates: Coordinates = { longitude: position.coords.longitude, latitude: position.coords.latitude };
            observer.next(coordinates);
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
