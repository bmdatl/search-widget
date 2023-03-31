import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, map, startWith } from "rxjs";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchInputChange = new EventEmitter<string>();
  @Input() debounce = 500;

  searchInput = new FormControl('');

  public noActiveSearch$ = this.searchInput.valueChanges.pipe(
    startWith(''),
    map(val => !val),
    startWith(true)
  );

  ngOnInit() {
    this.searchInput.valueChanges.pipe(
      debounceTime(this.debounce)
    ).subscribe(query => {
      if (query) {
        this.searchInputChange.emit(query);
      }
    });
  }

  clearSearch() {
    this.searchInput.setValue('');
  }
}
