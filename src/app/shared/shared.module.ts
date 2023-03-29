import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherStripComponent } from "./components/weather-strip/weather-strip.component";
import { NewsItemComponent } from "./components/news-item/news-item.component";
import { TemperaturePipe } from './pipes/temperature.pipe';
import { RouterTestingModule } from "@angular/router/testing";



@NgModule({
  declarations: [
    WeatherStripComponent,
    NewsItemComponent,
    TemperaturePipe
  ],
    imports: [
        CommonModule,
        RouterTestingModule
    ],
  exports: [
    WeatherStripComponent,
    NewsItemComponent
  ]
})
export class SharedModule { }
