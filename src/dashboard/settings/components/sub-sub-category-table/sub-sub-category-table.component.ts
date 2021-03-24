import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubSubCategoryPage } from 'src/shared/models/sub-sub-category.model';

@Component({
  selector: 'sub-sub-category-table',
  templateUrl: './sub-sub-category-table.component.html',
  styleUrls: ['./sub-sub-category-table.component.scss'],
})
export class SubSubCategoryTableComponent {
  @Input() subSubCategoryPage: SubSubCategoryPage;
  @Input() imageUrl: string;

  @Output() edit = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();

  tableName = 'SubSubCategory Table';
  columns = [
    {
      key: '_id',
      type: 'image',
      content: (category) => {
        return {
          classname: 'table_image img-thumbnail',
          url: this.imageUrl + `${category._id}/0/`,
          event: { key: 'img', id: category._id },
        };
      },
    },
    { path: 'category.name', label: 'Category' },
    { path: 'subCategory.name', label: 'SubCategory' },
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
