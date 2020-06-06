import { Component } from "@angular/core";
import { SearchService } from "./services/search.service";
import { SearchResult } from "./shared/search-result";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "User Search";
  result: SearchResult;
  searchTerm: string;
  itemsPerPage = 8;
  errorMessage: string;

  constructor(private service: SearchService) {}

  onSearched(searchTerm: string, pageNumber = 1) {
    this.service
      .getSearchResults(searchTerm, this.itemsPerPage, pageNumber)
      .subscribe(
        (result) => {
          this.result = result;
          this.searchTerm = searchTerm;
          this.errorMessage = null;
        },
        (error: HttpErrorResponse) => {
          console.error("Problem in onSearched()", error);
          this.errorMessage = "Unable to load results.";
          if (
            error.headers.has("X-RateLimit-Remaining") &&
            Number(error.headers?.get("X-RateLimit-Remaining")) === 0
          ) {
            this.errorMessage + " Exceeded rate limit.";
          }
        }
      );
  }

  onPaginate(pageNumber = 1) {
    this.onSearched(this.searchTerm, pageNumber);
  }
}
