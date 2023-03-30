import { Component, Input, OnChanges } from '@angular/core';
import { MediaFormats, NewsItem } from "../../../core/models/news/news";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnChanges {
  @Input() newsItem: NewsItem;
  @Input() imgFormat: MediaFormats = MediaFormats.THUMB;
  @Input() featured;

  imageToDisplay: string;

  ngOnChanges(changes) {
    if (changes.newsItem || changes.imgFormat) {
      this.imageToDisplay = this.newsItem.multimedia.find(m => m.format === this.imgFormat)?.url || '';
    }
  }

  navToUrl(url: string) {
    window.open(url, "_blank");
  }

}
