import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { StockPage } from 'src/shared/models/stock.model';

@Component({
  selector: 'stock-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent {
  @Input() stockPage: StockPage;
  @Input() name: string;

  @Output() refresh = new EventEmitter<any>();

  tableName = 'Stock List of';
  columns = [
    { path: 'product.name', label: 'Product', totalLabel: true },
    { path: 'product.size', label: 'Size' },
    { path: 'quantity', label: 'Quantity', className: 'text-center', total: true },
    { path: 'purchase_price', label: 'Purchase price', total: true , className: 'text-right'},
  ];

  sortColumn = {
    path: 'name',
    order: 'asc',
    limit: 8,
    page: 1,
    search: '',
  };

  onRefresh(event) {
    this.sortColumn = { ...event };
    this.refresh.emit({ sort: event.path, ...event });
  }
}
