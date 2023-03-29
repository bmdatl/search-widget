import { Component, Input } from '@angular/core';
import { MediaFormats, NewsItem } from "../../../../core/models/news/news";
import { Observable } from "rxjs";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  @Input() news$: Observable<NewsItem[]>;
  imgFormats = MediaFormats;
}
