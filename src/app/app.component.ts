import { Component } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-search';
  result: Array<any>;

  constructor(private service: SearchService) { }

  onSearched(searchTerm: string) {
    this.service.getSearchResults(searchTerm).subscribe(result => {
      this.result = result;
      console.log('result', result)
    });

  }
}
