import { Component, Input } from '@angular/core';
import { LocalFile } from "../../../../shared/services/local-search.service";

@Component({
  selector: 'app-selection-details',
  templateUrl: './selection-details.component.html',
  styleUrls: ['./selection-details.component.css']
})
export class SelectionDetailsComponent {
  @Input() selectedResult: LocalFile;
}
