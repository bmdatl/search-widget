import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounce, debounceTime, map, startWith, Subject } from "rxjs";


// dumb search that emits input value as an event
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('searchInput') searchInput: HTMLInputElement;
  @Output() searchInputChange = new EventEmitter<string>();
  @Input() debounce = 500;

  searchValue = '';

  // hide the value of the current query so it's only exposed to classes that request it
  private querySubject$ = new Subject<string>();
  // expose noActiveSearch as a freely available property for showing/hiding certain UI elements
  public noActiveSearch$ = this.querySubject$.pipe(
    map(val => !val),
    startWith(true)
  );

  // could use the local search service as single source of truth for current value of query
  // but then this dumb component is too coupled with that particular service

  inputChanged(query: string) {
    this.querySubject$.next(query);
  }

  clearSearch() {
    this.querySubject$.next('');
    this.searchValue = '';
  }

  ngOnInit() {
    this.querySubject$.pipe(
      debounceTime(this.debounce)
    ).subscribe(query => {
      this.searchInputChange.emit(query);
    });
  }

}
