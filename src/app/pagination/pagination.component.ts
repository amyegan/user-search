import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() itemsPerPage: number;
  @Input() total: number;
  @Output() clicked = new EventEmitter<number>();
  math = Math;
  current = 1;
  lastPageNumber = 1;

  ngOnChanges(changes: SimpleChanges): void {
    let maxItems = this.total < 1000 ? this.total : 1000;
    this.lastPageNumber = Math.ceil(maxItems/this.itemsPerPage);
  }

  paginate(pageNumber: number) {
    this.clicked.emit(pageNumber);
    this.current = pageNumber;
  }
}
