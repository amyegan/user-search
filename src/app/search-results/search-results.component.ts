import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../shared/search-result';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() result: SearchResult; //object with list of results as prop 

  constructor() { }

  ngOnInit() {
  }

}
