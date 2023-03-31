import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { WeatherData } from "../../../core/models/weather/weather-data";

@Component({
  selector: 'app-weather-strip',
  templateUrl: './weather-strip.component.html',
  styleUrls: ['./weather-strip.component.css']
})
export class WeatherStripComponent {
  @Input() weatherData$: Observable<WeatherData>;
}
