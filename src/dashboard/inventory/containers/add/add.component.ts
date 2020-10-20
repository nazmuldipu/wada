import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/service/inventory.service';
import { Inventory } from 'src/shared/models/inventory.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  // shopList: Shop[] = [];

  loading = false;
  message = '';
  errorMessage = '';

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {}

  async onCreateInventory(event: Inventory) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      const resp = await this.inventoryService.create(event).toPromise();
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
