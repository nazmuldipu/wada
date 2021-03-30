import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Inventory, InventoryPage } from 'src/shared/models/inventory.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  url = 'api/inventories';

  constructor(private dSrc: RestDataService) {}

  create(inventory: Inventory): Observable<Inventory> {
    return this.dSrc.sendRequest('POST', this.url, inventory, true, null);
  }

  transfer(inventory: Inventory): Observable<Inventory> {
    // const items = [];
    // for (let i = 0; i < event.items.length; i++) {
    //   const ev = event.items[i];
    //   const item = {
    //     productId: ev.product._id,
    //     quantity: ev.quantity,
    //     purchase_price: ev.purchase_price,
    //   };
    //   items.push(item);
    // }
    // const value = {
    //   inventoryType: event.inventoryType,
    //   reference: event.reference,
    //   storehouseId: event.warehouse._id,
    //   fromId: event.from._id,
    //   items,
    // };

    return this.dSrc.sendRequest(
      'POST',
      this.url + '/transfer',
      inventory,
      true,
      null
    );
  }

  getUnapprovedInventories(
    warehouseId: string,
    page: number,
    limit: number,
    sort: string,
    order: string
  ): Observable<InventoryPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dSrc.sendRequest(
      'GET',
      this.url + `/transfer/warehouse/${warehouseId}`,
      null,
      true,
      params
    );
  }

  approveTransferedInventories(inventoryId: string) {
    return this.dSrc.sendRequest(
      'PUT',
      this.url + `/transfer/approve/${inventoryId}`,
      null,
      true,
      null
    );
  }

  getInventory(id: string): Observable<Inventory> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  getInventoryByStorehouse(
    storehouseId: string,
    page: number,
    limit: number,
    sort: string,
    order: string
  ): Observable<InventoryPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dSrc.sendRequest(
      'GET',
      this.url + `/storehouse/${storehouseId}`,
      null,
      true,
      params
    );
  }

  generateParam(
    page: number,
    limit: number,
    sort: string,
    order: string
  ): HttpParams {
    return new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sort', sort)
      .set('order', order);
  }
}
