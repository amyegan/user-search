import { Component, OnInit, Input } from '@angular/core';
import { UserDetails } from '../shared/user-details';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() users: Array<UserDetails>; //object with list of results as prop 

  constructor() { }

  ngOnInit() {
  }

}
