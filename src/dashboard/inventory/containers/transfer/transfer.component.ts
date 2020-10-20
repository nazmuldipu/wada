import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/shared/models/inventory.model';
import { InventoryService } from 'src/service/inventory.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  loading = false;
  message = '';
  errorMessage = '';

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void { }

  async onCreateInventory(event: Inventory) {
    console.log(event);
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      const resp = await this.inventoryService.transfer(event).toPromise();
      this.message = 'Inventory added';
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onClose() {
    this.loading = false;
    this.errorMessage = '';
    this.message = '';
  }
}
