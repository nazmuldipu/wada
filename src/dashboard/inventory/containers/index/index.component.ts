import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/service/inventory.service';
import { StorehouseService } from 'src/service/storehouse.service';
import { Inventory, InventoryPage } from 'src/shared/models/inventory.model';
import { Storehouse, StorehousePage } from 'src/shared/models/storehouse.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  storehouse: Storehouse;
  storehousePage: StorehousePage;
  inventory: Inventory;
  inventoryPage: InventoryPage;

  loading = false;
  message = '';
  errorMessage = '';

  constructor(private storehouseService: StorehouseService, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getAllStorehouse();
  }

  async getAllStorehouse(page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.storehousePage = await this.storehouseService.getAll(page, limit, sort, order).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async getInventoryByStorehouseId(storehouseId, page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      console.log(storehouseId);
      this.inventoryPage = await this.inventoryService.getInventoryByStorehouse(storehouseId, page, limit, sort, order).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onChangeStorehousePage(page) {
    this.getAllStorehouse(page.pageNumber, page.limit, page.sort, page.order)
  }

  onDetails(id) {
    const value = this.inventoryPage.docs.find((iv) => iv._id == id);
    this.inventory = Object.assign({}, value);
  }

  onEdit(id) {
    // const value = this.inventoryPage.docs.find((iv) => iv._id == id);
    // this.inventory = Object.assign({}, value);
  }

  onChangeInventoryPage(storehouseId, page) {
    this.getInventoryByStorehouseId(storehouseId, page.pageNumber, page.limit, page.sort, page.order)
  }

  onSelectStorehouse(id) {
    const value = this.storehousePage.docs.find((s) => s._id == id);
    this.storehouse = Object.assign({}, value);
    this.getInventoryByStorehouseId(id);
  }

  onClose(value) {
    switch (value) {
      case 'details':
        this.inventory = null;
        break;
      case 'list':
        this.inventoryPage = null;
        this.storehouse = null;
        break;
    }
  }

}
