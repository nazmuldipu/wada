import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { InventoryPage } from 'src/shared/models/inventory.model';

@Component({
  selector: 'inventory-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent {
  @Input() inventoryPage: InventoryPage;

  @Output() details = new EventEmitter<string>();

  onDetails(id) {
    this.details.emit(id);
  }

}
