import { Component, OnInit } from '@angular/core';
import { StorehouseService } from 'src/service/storehouse.service';
import { InventoryService } from 'src/service/inventory.service';
import { InventoryPage, Inventory } from 'src/models/inventory.model';
import { Storehouse, StorehousePage } from 'src/models/storehouse.model';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss']
})
export class ReceiveComponent implements OnInit {
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

  onChangeStorehousePage(page) {
    this.getAllStorehouse(page.pageNumber, page.limit, page.sort, page.order)
  }

  onSelectStorehouse(id) {
    const value = this.storehousePage.docs.find((s) => s._id == id);
    this.storehouse = Object.assign({}, value);
    this.getAllUnapprovedInventories(id);
  }

  async getAllUnapprovedInventories(storehouseId: string, page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.inventoryPage = await this.inventoryService.getUnapprovedInventories(storehouseId, page, limit, sort, order).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }
  onChangeInventoryPage(storehouseId, page) {
    this.getAllUnapprovedInventories(storehouseId, page.pageNumber, page.limit, page.sort, page.order)
  }

  onDetails(id) {
    const value = this.inventoryPage.docs.find((iv) => iv._id == id);
    this.inventory = Object.assign({}, value);
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

  async onApprove(id) {
    this.loading = true;
    try {
      const resp = await this.inventoryService.approveTransferedInventories(id).toPromise();
      this.onClose('details');
      this.getAllUnapprovedInventories(this.storehouse._id);
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

}
