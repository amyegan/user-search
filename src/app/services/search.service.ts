import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult } from '../shared/search-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService { 

  constructor(private http: HttpClient) { }

  getSearchResults(searchString: string, pageNumber = 1): Observable<SearchResult> {
    let url = `https://api.github.com/search/users?q=${searchString}+repos:%3E10&per_page=30&page=${pageNumber}`;
    return this.http
      .get<SearchResult>(url);
  }
}
