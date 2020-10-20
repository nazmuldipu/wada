import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductStockPage } from 'src/shared/models/product-stock.model';

@Component({
  selector: 'product-stock-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-stock-list.component.html',
  styleUrls: ['./product-stock-list.component.scss']
})
export class ProductStockListComponent {
  @Input() productStockPage: ProductStockPage;
  @Input() name: string;

  @Output() details = new EventEmitter<string>();

  onDetails(id) {
    this.details.emit(id);
  }

  onPrint() {
    (window as any).print();
  }

}
