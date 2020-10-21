import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ProductPage } from 'src/shared/models/product.model';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() page: ProductPage;
  @Input() small: boolean;

  @Output() paginate = new EventEmitter<Pagi>();

  pagi: Pagi = {
    limit: 8,
    pageNumber: 1,
    sort: 'priority',
    order: 'asc'
  }

  constructor() {
    this.pagi.sort = localStorage.getItem('sort') ? localStorage.getItem('sort') : 'priority';
    this.pagi.order = localStorage.getItem('order') ? localStorage.getItem('order') : 'asc';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.page && this.page) {
      this.pagi.limit = this.page.limit;
      this.pagi.pageNumber = this.page.page;
    }
  }

  counter(currentPage: number, totalPages: number) {
    let startPage = 0;
    let length = 10;
    if (totalPages < 10) {
      length = totalPages;
    } else {
      if (currentPage < 4) {
        startPage = 0;
      } else if (currentPage + 5 >= totalPages) {
        startPage = totalPages - 10;
      } else {
        startPage = currentPage - 4;
      }
    }

    return Array.from({ length: length }, (v, k) => k + startPage);
  }

  onOrderChange() {
    this.pagi.order = this.pagi.order == 'asc' ? 'desc' : 'asc';
    localStorage.setItem('order', this.pagi.order);
    // this.pagi.pageNumber = 1;
    this.paginate.emit(this.pagi);
  }

  onPageNumber(page: number) {
    this.pagi.pageNumber = page;
    this.paginate.emit(this.pagi);
  }

  onLimitChange() {
    this.pagi.pageNumber = 1;
    this.paginate.emit(this.pagi);
  }

  onSortChange() {
    localStorage.setItem('sort', this.pagi.sort);
    this.pagi.pageNumber = 1;
    this.paginate.emit(this.pagi);
  }

  onChange() {
    let n = parseInt(this.pagi.limit.toString())
    const value = { ...this.pagi, limit: n };


    console.log(value);
    this.paginate.emit(value);
  }

}

interface Pagi {
  limit: number;
  pageNumber: number;
  sort: string;
  order: string;
}
