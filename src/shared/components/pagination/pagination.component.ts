import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() short = false;
  @Input() collectionSize = 1;
  @Input() pageSize = 1;
  @Input() page = 1;
  @Output() pageChange = new EventEmitter<number>();

  pageCount = 1;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
  }

  onPaginate(page: number): void {
    this.pageChange.emit(page);
  }

  counter(currentPage: number, totalPages: number): number[] {
    let startPage = 1;
    let length = 10;
    if (totalPages < 10) {
      length = totalPages;
    } else {
      if (currentPage < 5) {
        startPage = 1;
      } else if (currentPage + 5 >= totalPages) {
        startPage = totalPages - 9;
      } else {
        startPage = currentPage - 4;
      }
    }
    return Array.from({ length }, (v, k) => k + startPage);
  }
}
