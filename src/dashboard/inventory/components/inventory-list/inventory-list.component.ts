import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { InventoryPage } from 'src/shared/models/inventory.model';

@Component({
  selector: 'inventory-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent {
  @Input() inventoryPage: InventoryPage;

  @Output() details = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<any>();

  tableName = 'Inventory Table';
  columns = [
    {
      path: 'updatedAt',
      label: 'Updated',
      pipe: 'date',
      pipeArgs: 'dd/MM/yyyy',
    },
    { path: 'reference', label: 'Reference' },
    { path: 'inventoryType', label: 'Inventory Type' },
    { path: 'items.length', label: 'Number of Products' },
    {
      key: '_id',
      type: 'button',
      content: (brand) => {
        return {
          classname: 'edit_link',
          text: 'Details',
          link: `#`,
          event: { key: 'details', id: brand._id },
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
