import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/service/inventory.service';
import { Inventory } from 'src/models/inventory.model';

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

  constructor(private service: InventoryService) {}

  ngOnInit(): void {}

  async onCreateInventory(inventory: Inventory) {
    const value = this.inventoryObjectToSend(inventory);
    try {
      this.loading = true;
      const resp = await this.service.create(value).toPromise();
      console.log(resp);
      this.loading = false;
    } catch (err) {
      console.log(err);
      this.errorMessage = err;
    }
  }

  //Convert Inventory object to send server
  inventoryObjectToSend(inventory: Inventory): any {
    const value = {
      inventoryType: inventory.inventoryType,
      reference: inventory.reference,
      warehouseId: inventory.warehouse._id,
      supplierId: inventory.supplier._id,
      items: [],
    };
    for (let item of inventory.items) {
      const prod = {
        productId: item.product._id,
        quantity: item.quantity,
        purchase_price: item.purchase_price,
      };
      value.items.push(prod);
    }
    return value;
  }

  onClose() {
    this.loading = false;
    this.errorMessage = '';
    this.message = '';
  }
}
