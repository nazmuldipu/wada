import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Inventory, InventoryPage } from 'src/shared/models/inventory.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventoryUrl = 'api/inventory';

  constructor(private dataSource: RestDataService) { }

  create(event: Inventory): Observable<Inventory> {
    const items = [];
    for (let i = 0; i < event.items.length; i++) {
      const ev = event.items[i];
      const item = { productId: ev.product._id, quantity: ev.quantity, purchase_price: ev.purchase_price }
      items.push(item);
    }
    const value = { inventoryType: event.inventoryType, reference: event.reference, storehouseId: event.storehouse._id, supplierId: event.supplier._id, items }

    return this.dataSource.sendRequest('POST', this.inventoryUrl, value, true, null);
  }

  transfer(event: Inventory): Observable<Inventory> {
    const items = [];
    for (let i = 0; i < event.items.length; i++) {
      const ev = event.items[i];
      const item = { productId: ev.product._id, quantity: ev.quantity, purchase_price: ev.purchase_price }
      items.push(item);
    }
    const value = { inventoryType: event.inventoryType, reference: event.reference, storehouseId: event.storehouse._id, fromId: event.from._id, items }

    return this.dataSource.sendRequest('POST', this.inventoryUrl + '/transfer', value, true, null);
  }

  getUnapprovedInventories(storehouseId: string, page: number, limit: number, sort: string, order: string): Observable<InventoryPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.inventoryUrl + `/transfer/storehouse/${storehouseId}`, null, true, params);
  }

  approveTransferedInventories(inventoryId: string) {
    return this.dataSource.sendRequest('PUT', this.inventoryUrl + `/transfer/approve/${inventoryId}`, null, true, null);
  }

  getInventory(id: string): Observable<Inventory> {
    return this.dataSource.sendRequest('GET', this.inventoryUrl + `/${id}`, null, true, null);
  }

  getInventoryByStorehouse(storehouseId: string, page: number, limit: number, sort: string, order: string): Observable<InventoryPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.inventoryUrl + `/storehouse/${storehouseId}`, null, true, params);
  }

  generateParam(page: number, limit: number, sort: string, order: string): HttpParams {
    return new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sort', sort)
      .set('order', order);
  }

}
