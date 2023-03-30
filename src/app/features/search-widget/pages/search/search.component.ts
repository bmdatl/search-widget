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
 * • rename app prefix to relevant module
 * • rename classes with properly styled container items
 * • implement drag and drop for search results or news items
 * • check old project for exports/index strategy
 * • add relative imports
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

  // todo: this can be better. i don't want to create a new subscription every time the search changes.
  onSearchChanged(query: string) {
    this.searchService.searchLocalSystem(query).pipe()
      .subscribe((results: LocalFile[]) => {
        this.results = results;
        // manually unsubscribe - normally would use a takeUntil operator to automatically unsubscribe when the onDestroy hook fires
      }).unsubscribe();
  }

  handleSearchResultClicked(selection: LocalFile) {
    this.selectedResult = selection;
  }

}
