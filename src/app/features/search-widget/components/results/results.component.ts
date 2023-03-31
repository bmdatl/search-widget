import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalFile } from "../../../../shared/services/local-search.service";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Observable } from "rxjs";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() searchResults: LocalFile[];
  @Input() selectedItem: LocalFile | null;
  @Input() isLoading$: Observable<boolean>;

  // this could be changed to handle selectedResult here
  @Output() resultClicked = new EventEmitter<LocalFile>();

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.searchResults, event.previousIndex, event.currentIndex);
  }



}
