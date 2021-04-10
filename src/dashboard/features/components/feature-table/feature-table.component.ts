import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FeaturePage } from 'src/models/feature.model';

@Component({
  selector: 'app-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss']
})
export class FeatureTableComponent implements OnChanges {
  @Input() featurePage: FeaturePage;
  @Input() imageUrl: string;
  @Input() canActivate: boolean;

  @Output() edit = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();
  @Output() active = new EventEmitter<string>();

  tableName = 'Feature Table';
  columns = [
    {
      key: '_id',
      type: 'image',
      content: (feature) => {
        return {
          classname: 'table_image',
          text: 'Edit',
          url: this.imageUrl + `${feature._id}`,
          event: { key: 'img', id: feature._id },
        };
      },
    },
    { path: 'name', label: 'Name', searchable: true },
    { path: 'priority', label: 'Priority' },
    { path: 'active', label: 'Active' },
    {
      key: '_id',
      type: 'button',
      content: (brand) => {
        return {
          classname: 'edit_link',
          text: 'Select',
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

  pushCol = 0; // semaphore

  ngOnChanges(changes: SimpleChanges): void {
    if (this.canActivate && !this.pushCol) {
      this.columns.push({
        key: '_id',
        type: 'button',
        content: (product) => {
          return {
            classname: 'edit_link',
            text: product?.active ? 'Deactivate' : 'Activate',
            link: `#`,
            event: { key: 'active', id: product._id },
          };
        },
      });
      this.pushCol = 1;
    }
  }

  buttonEvent(event): void {
    switch (event.key) {
      case 'edit':
        this.edit.emit(event.id);
        break;
      case 'active':
        this.active.emit(event.id);
        break;
    }
  }

  onRefresh(event): void {
    this.sortColumn = { ...event };
    this.refresh.emit({ sort: event.path, ...event });
  }
}
