import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearchResults(searchString: string): Observable<Array<any>> {
    let temp = this.http.get('https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000');
    return null;
  }
}
