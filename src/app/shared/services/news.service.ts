import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, of, tap } from "rxjs";
import { NewsItem, NewsMedia, NewsRequest } from "../../core/models/news/news";
import { WeatherData } from "../../core/models/weather/weather-data";

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  // todo: move to .net backend

  apiUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=SbW7QbHHfQt9burXcrVT8egTi0MHF7yA';

  constructor(
    private http: HttpClient
  ) { }

  // show an example of receiving too much data and mapping what we need
  // ideal: 'automated' serialization using the keys of an interface
  getTopNewsArticles(): Observable<NewsItem[]> {
    const local = sessionStorage.getItem('newsData');
    if (!local) {
      return this.http.get<NewsRequest>(this.apiUrl).pipe(
        map(request => {
          return request.results.map(val => {
            return {
              title: val.title,
              abstract: val.abstract,
              url: val.url,
              publishedData: val.published_data,
              multimedia: val.multimedia.map((i: NewsMedia) => {
                return {
                  url: i.url,
                  format: i.format,
                  height: i.height,
                  width: i.width
                }
              })
            }
          })
        }),
        tap(data => sessionStorage.setItem('newsData', JSON.stringify(data)))
      )
    } else {
      return of(JSON.parse(local));
    }
  }


}
