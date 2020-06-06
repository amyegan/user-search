import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { SearchResult } from "../shared/search-result";
import { UserDetails } from "../shared/user-details";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getSearchResults(
    searchString: string,
    itemsPerPage = 10,
    pageNumber = 1
  ): Observable<SearchResult> {
    // modified version of this solution https://stackoverflow.com/a/53579412
    return this.http
      .get(
        `https://api.github.com/search/users?q=${searchString}&per_page=${itemsPerPage}&page=${pageNumber}`
      )
      .pipe(
        mergeMap((result: SearchResult) => {
          console.log("mergeMapping result", result);
          let apiArray = result.items.map((item) =>
            this.http.get<UserDetails>(item.url)
          );
          return forkJoin(...apiArray).pipe(
            map((userDetails) => {
              result.users = userDetails;
              return result;
            })
          );
        })
      );
  }
}
