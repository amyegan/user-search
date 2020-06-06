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
  isLoading: boolean;

  constructor(private service: SearchService) {}

  onSearched(searchTerm: string, pageNumber = 1) {
    this.isLoading = true;
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
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  onPaginate(pageNumber = 1) {
    this.onSearched(this.searchTerm, pageNumber);
  }
}
