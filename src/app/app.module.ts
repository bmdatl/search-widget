import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsItemComponent } from './shared/components/news-item/news-item.component';
import { WeatherStripComponent } from './shared/components/weather-strip/weather-strip.component';
import { SearchLoaderComponent } from './shared/components/search-loader/search-loader.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { NewsComponent } from './features/search-widget/components/news/news.component';
import { ResultsComponent } from './features/search-widget/components/results/results.component';
import { SelectionDetailsComponent } from './features/search-widget/components/selection-details/selection-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    WeatherStripComponent,
    SearchLoaderComponent,
    SearchBarComponent,
    NewsComponent,
    ResultsComponent,
    SelectionDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
