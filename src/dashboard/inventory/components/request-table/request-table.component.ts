import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from 'src/models/pagination.model';
import { ProductRequestPage } from 'src/models/request.model';

@Component({
  selector: 'request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent {
  @Input() requestPage: ProductRequestPage;

  @Output() edit = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();

  tableName = 'Request Table';
  columns = [
    { path: 'createdAt', label: 'Date', pipe: 'date', pipeArgs: 'dd/MM/yyyy' },
    { path: 'product.name', label: 'Product Name' },
    { path: 'product.size', label: 'Size' },
    { path: 'createdBy.name', label: 'Requested' },
    { path: 'requestStatus', label: 'Status' },
    {
      key: '_id',
      type: 'button',
      content: (request) => {
        return {
          classname: 'edit_link',
          text: 'Select',
          link: `#`,
          event: { key: 'edit', id: request._id },
        };
      },
    },

  ];

  sortColumn = {
    path: 'priority',
    order: 'asc',
    limit: 8,
    page: 1,
    search: '',
  };

  pushCol = 0; // semaphore

  buttonEvent(event): void {
    switch (event.key) {
      case 'edit':
        this.edit.emit(event.id);
        break;
    }
  }

  onRefresh(event): void {
    this.sortColumn = { ...event };
    this.refresh.emit(new Pagination(event.page, event.limit, event.path, event.order, event.search));
  }

}
