import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryPage } from 'src/models/category.model';

@Component({
  selector: 'category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss'],
})
export class CategoryTableComponent {
  @Input() categoryPage: CategoryPage;
  @Input() imageUrl: string;

  @Output() edit = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();

  tableName = 'Category Table';
  columns = [
    {
      key: '_id',
      type: 'image',
      content: (category) => {
        return {
          classname: 'table_image',
          url: this.imageUrl + `${category._id}`,
          event: { key: 'img', id: category._id },
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
