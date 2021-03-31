import { Component } from '@angular/core';
import { InventoryService } from 'src/service/inventory.service';
import { Inventory, InventoryPage } from 'src/models/inventory.model';
import { Pagination } from 'src/models/pagination.model';
import { Warehouse } from 'src/models/warehouse.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  warehouse: Warehouse;
  inventory: Inventory;
  inventoryPage: InventoryPage;

  loading = false;
  message = '';
  errorMessage = '';

  constructor(
    private service: InventoryService,
  ) {}

  onWarehouseSelect(warehouse: Warehouse) {
    this.warehouse = warehouse;
    this.getInventoryByWarehouseId(warehouse._id, new Pagination());
  }

  async getInventoryByWarehouseId(warehouseId, pagi: Pagination) {
    this.loading = true;
    try {
      this.inventoryPage = await this.service
        .byWarehouseId(warehouseId, pagi)
        .toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  refreshInventoryData(wid, { page, limit, sort, order, search }) {
    this.getInventoryByWarehouseId(
      wid,
      new Pagination(page, limit, sort, order, search)
    );
  }

  onDetails(id) {
    this.inventory = this.inventoryPage.docs.find((iv) => iv._id == id);
  }

  onClose(value) {
    switch (value) {
      case 'details':
        this.inventory = null;
        break;
      case 'list':
        this.inventoryPage = null;
        this.warehouse = null;
        break;
    }
  }
}
