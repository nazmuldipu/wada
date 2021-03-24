import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductPage } from 'src/shared/models/product.model';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {
  @Input() productPage: ProductPage;
  @Input() thumbUrl: string;

  @Output() edit = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();

  tableName = 'Product Table';
  columns = [
    {
      key: '_id',
      type: 'image',
      content: (product) => {
        return {
          classname: 'table_image img-thumbnail',
          url: this.thumbUrl + `${product._id}`,
          event: { key: 'img', id: product._id },
        };
      },
    },
    { path: 'brand.name', label: 'Brand' },
    { path: 'category.name', label: 'Category' },
    { path: 'subCategory.name', label: 'SubCategory' },
    { path: 'subSubCategory.name', label: 'SubSubCategory' },
    { path: 'name', label: 'Name', searchable: true },
    { path: 'priority', label: 'Priority' },
    {
      key: '_id',
      type: 'link',
      content: (product) => {
        return {
          classname: 'edit_link d-print-none',
          text: 'Edit',
          link: `/dashboard/products/new-products/${product._id}`,
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
