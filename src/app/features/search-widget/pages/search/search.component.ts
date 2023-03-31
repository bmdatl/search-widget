import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from "../../../../shared/services/news.service";
import { WeatherService } from "../../../../shared/services/weather.service";
import { LocalFile, LocalSearchService } from "../../../../shared/services/local-search.service";
import { Observable, tap } from "rxjs";
import { SearchBarComponent } from "../../../../shared/components/search-bar/search-bar.component";
import { NewsItem } from "../../../../core/models/news/news";
import { WeatherData } from "../../../../core/models/weather/weather-data";


/**
 * TODO:
 * • add relative imports
 * • set up takeUntil
 */

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('searchBar') searchBar: SearchBarComponent;

  noActiveSearch$;

  results: LocalFile[];
  selectedResult: LocalFile | null;

  articles$: Observable<NewsItem[]>;
  weatherData$: Observable<WeatherData>;

  constructor(
    private newsService: NewsService,
    private weatherService: WeatherService,
    private searchService: LocalSearchService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.articles$ = this.newsService.getTopNewsArticles();
    this.weatherData$ = this.weatherService.getWeatherData();
  }

  // track whether the search input currently has a value or not
  // clear selectedResult if search is cleared
  ngAfterViewInit() {
    this.noActiveSearch$ = this.searchBar.noActiveSearch$.pipe(
      tap(notActive => {
        if (notActive) {
          this.selectedResult = null;
        }
      })
    );
    this.cdr.detectChanges();
  }

  onSearchChanged(query: string) {
    this.searchService.searchLocalSystem(query).pipe()
      .subscribe((results: LocalFile[]) => {
        this.results = results;
      });
  }

  handleSearchResultClicked(selection: LocalFile) {
    this.selectedResult = selection;
  }

}
