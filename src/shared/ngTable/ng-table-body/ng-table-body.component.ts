import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: '[NgTableBody]',
  templateUrl: './ng-table-body.component.html',
  styleUrls: ['./ng-table-body.component.scss'],
})
export class NgTableBodyComponent {
  @Input() columns;
  @Input() data;

  @Output() btnEvent = new EventEmitter<any>();

  renderCell(item, column, i) {
    if (column.path === '#') {
      return i + 1;
    }
    
    if (column.content) {
      return column.content(item);
    }

    if (column.pipe) {
      switch (column.pipe) {
        case 'date':
          const value = _.get(item, column.path);
          return new DatePipe('en-US').transform(value, column.pipeArgs);
          break;
      }
    }
    return _.get(item, column.path);
  }

  handleClick(event) {
    this.btnEvent.emit(event);
  }
}
