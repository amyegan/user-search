import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Output() searched = new EventEmitter<string>();
  searchTerm: string;

  onSubmit() {
    this.searched.emit(this.searchTerm);
  }
}
