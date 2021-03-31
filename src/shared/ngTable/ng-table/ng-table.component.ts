import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PageInfo } from 'src/shared/models/page-info.model';

@Component({
  selector: 'ng-table',
  templateUrl: './ng-table.component.html',
  styleUrls: ['./ng-table.component.scss'],
})
export class NgTableComponent implements OnChanges {
  @Input() tableName: string; // Name of Table
  @Input() columns; // List of columns for table
  @Input() data: PageInfo; // Table data
  @Input() short: boolean; // pagination button short or long
  @Input() sortColumn;

  @Output() btnEvent = new EventEmitter<any>();
  @Output() refresh = new EventEmitter<any>();

  total = [];
  searchableArray = [];
  searchQuery = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.data != null) {
      this.calculateColumnTotal();
    }
  }

  handleSort(event) {
    this.refresh.emit(event);
  }

  handleEvent(event) {
    this.btnEvent.emit(event);
  }

  handlePagination(event) {
    this.refresh.emit({ ...this.sortColumn, page: event });
  }

  handlePageSize(event) {
    this.refresh.emit({ ...this.sortColumn, limit: event });
  }

  // onSearchSubmit() {
  //   if (this.searchQuery.length > 2) {
  //     this.sortColumn['search'] = this.searchQuery;
  //   } else {
  //     this.sortColumn['search'] = '';
  //   }
  //   this.refresh.emit(this.sortColumn);
  // }

  calculateColumnTotal() {
    const total = [];
    this.columns.forEach((col) => {
      if (col.total) {
        let colTotal = 0;
        this.data.docs.forEach((d) => {
          colTotal += parseInt(d[col.path]);
        });
        total.push({ path: col.path, total: colTotal, pipe: col.pipe });
      } else if (col.totalLabel) {
        total.push({ path: col.path, label: 'Total' });
      }
    });
    this.total = [...total];
  }

}
