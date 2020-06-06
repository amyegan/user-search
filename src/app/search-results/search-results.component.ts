import { Component, Input } from '@angular/core';
import { UserDetails } from '../shared/user-details';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input() users: Array<UserDetails>;
}
