import { Component } from '@angular/core';
import { SearchService } from './services/search.service';
import { SearchResult } from './shared/search-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Search';
  result: SearchResult;
  searchTerm: string;
  itemsPerPage = 8;

  constructor(private service: SearchService) { }

  onSearched(searchTerm: string, pageNumber = 1) {
    this.service.getSearchResults(searchTerm, this.itemsPerPage, pageNumber).subscribe(result => {
      this.result = result;
      this.searchTerm = searchTerm;
    });
  }

  onPaginate(pageNumber: number) {
    this.onSearched(this.searchTerm, pageNumber);
  }
}
