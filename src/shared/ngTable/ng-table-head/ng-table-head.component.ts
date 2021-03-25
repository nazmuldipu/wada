import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: '[NgTableHeader]',
  templateUrl: './ng-table-head.component.html',
  styleUrls: ['./ng-table-head.component.scss'],
})
export class NgTableHeadComponent implements OnChanges {
  @Input() tableName;
  @Input() columns;
  @Input() sortColumn;

  @Output() onSort = new EventEmitter<any>();

  searchableArray = [];
  searchQuery;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns && this.columns != null) {
      this.columns.forEach((element) => {
        if (element.searchable) {
          this.searchableArray.push({
            path: element.path,
            label: element.label,
          });
        }
      });
    }
  }

  getSearchPlaceHolderText() {
    let text = '';
    for (let i = 0; i < this.searchableArray.length; i++) {
      text += this.searchableArray[i].label;
      if (i != this.searchableArray.length - 1) {
        text += '/';
      }
    }
    return text;
  }

  onSearchSubmit() {
    if (this.searchQuery.length > 2) {
      this.sortColumn['search'] = this.searchQuery;
    } else {
      this.sortColumn['search'] = '';
    }
    this.onSort.emit(this.sortColumn);
  }

  raiseSort(path) {
    const sortColumn = { ...this.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.onSort.emit(sortColumn);
  }

  renderSortIcon(column) {
    if (column.path != this.sortColumn.path) return null;
    if (this.sortColumn.order === 'asc') return `fa-sort-asc`;
    return `fa-sort-desc`;
  }
}
