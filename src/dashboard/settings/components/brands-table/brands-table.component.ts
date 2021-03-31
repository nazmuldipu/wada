import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrandPage } from 'src/models/brand.model';

@Component({
  selector: 'brands-table',
  templateUrl: './brands-table.component.html',
  styleUrls: ['./brands-table.component.scss'],
})
export class BrandsTableComponent {
  @Input() brandPage: BrandPage;
  @Input() imageUrl: string;

  @Output() edit = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();

  tableName = 'Brand Table';
  columns = [
    {
      key: '_id',
      type: 'image',
      content: (brand) => {
        return {
          classname: 'table_image',
          text: 'Edit',
          url: this.imageUrl + `${brand._id}`,
          event: { key: 'img', id: brand._id },
        };
      },
    },
    { path: 'name', label: 'Name', searchable: true },
    { path: 'priority', label: 'Priority' },
    {
      key: '_id',
      type: 'button',
      content: (brand) => {
        return {
          classname: 'edit_link',
          text: 'Edit',
          link: `#`,
          event: { key: 'edit', id: brand._id },
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
    }
  }

  onRefresh(event) {
    this.sortColumn = { ...event };
    this.refresh.emit({ sort: event.path, ...event });
  }
}
