import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLoaderComponent } from "../../shared/components/search-loader/search-loader.component";
import { SearchBarComponent } from "../../shared/components/search-bar/search-bar.component";
import { NewsComponent } from "./components/news/news.component";
import { ResultsComponent } from "./components/results/results.component";
import { SelectionDetailsComponent } from "./components/selection-details/selection-details.component";
import { SearchComponent } from "./pages/search/search.component";
import { SharedModule } from "../../shared/shared.module";
import { NewsService } from "../../shared/services/news.service";
import { WeatherService } from "../../shared/services/weather.service";
import { LocalSearchService } from "../../shared/services/local-search.service";
import { TemperaturePipe } from "../../shared/pipes/temperature.pipe";
import { MatGridListModule } from "@angular/material/grid-list";



@NgModule({
  declarations: [
    SearchLoaderComponent,
    SearchBarComponent,
    NewsComponent,
    ResultsComponent,
    SelectionDetailsComponent,
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule
  ],
  providers: [
    NewsService,
    WeatherService,
    LocalSearchService,
    TemperaturePipe
  ]
})
export class SearchModule { }
