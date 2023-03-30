import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalFile } from "../../../../shared/services/local-search.service";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() searchResults: LocalFile[];
  @Input() selectedItem: LocalFile | null;

  // todo: type this to be a generic file emission
  @Output() resultClicked = new EventEmitter<any>();

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.searchResults, event.previousIndex, event.currentIndex);
  }



}
