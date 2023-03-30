import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherStripComponent } from "./components/weather-strip/weather-strip.component";
import { NewsItemComponent } from "./components/news-item/news-item.component";
import { TemperaturePipe } from './pipes/temperature.pipe';
import { RouterTestingModule } from "@angular/router/testing";
import { MatCardModule } from "@angular/material/card";
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    WeatherStripComponent,
    NewsItemComponent,
    TemperaturePipe,
    TruncatePipe,
    TruncatePipe
  ],
    imports: [
        CommonModule,
        RouterTestingModule,
        MatCardModule
    ],
  exports: [
    WeatherStripComponent,
    NewsItemComponent
  ]
})
export class SharedModule { }
