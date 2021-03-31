import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WarehousePage } from 'src/models/warehouse.model';

@Component({
  selector: 'warehouse-table',
  templateUrl: './warehouse-table.component.html',
  styleUrls: ['./warehouse-table.component.scss'],
})
export class WarehouseTableComponent {
  @Input() warehousePage: WarehousePage;

  @Output() edit = new EventEmitter<string>();
  @Output() assign = new EventEmitter<string>();
  @Output() details = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();

  tableName = 'Warehouse Table';
  columns = [
    { path: 'name', label: 'Name', searchable: true },
    { path: 'admin.name', label: 'Admin', searchable: true },
    { path: 'priority', label: 'Priority' },
    {
      key: '_id',
      type: 'button',
      content: (warehouse) => {
        return {
          classname: 'edit_link',
          text: 'Edit',
          link: `#`,
          event: { key: 'edit', id: warehouse._id },
        };
      },
    },
    {
      key: '_id',
      type: 'button',
      content: (warehouse) => {
        return {
          classname: 'edit_link',
          text: 'Assign',
          link: `#`,
          event: { key: 'assign', id: warehouse._id },
        };
      },
    },
    {
      key: '_id',
      type: 'button',
      content: (warehouse) => {
        return {
          classname: 'edit_link',
          text: 'Details',
          link: `#`,
          event: { key: 'details', id: warehouse._id },
        };
      },
    },
  ];

  sortColumn = {
    path: 'name',
    order: 'asc',
    limit: 8,
    page: 1,
    search: '',
  };

  buttonEvent(event) {
    switch (event['key']) {
      case 'edit':
        this.edit.emit(event['id']);
        break;
      case 'assign':
        this.assign.emit(event['id']);
        break;
      case 'details':
        this.details.emit(event['id']);
        break;
    }
  }

  onRefresh(event) {
    this.sortColumn = { ...event };
    this.refresh.emit({ sort: event.path, ...event });
  }
}
