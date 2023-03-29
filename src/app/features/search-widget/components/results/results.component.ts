import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalFile } from "../../../../shared/services/local-search.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() searchResults: LocalFile[];

  // todo: type this to be a generic file emission
  @Output() resultClicked = new EventEmitter<any>();

  ngOnInit() {

  }

}
