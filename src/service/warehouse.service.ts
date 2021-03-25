import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { UtilService } from './util.service';
import { Warehouse, WarehousePage } from 'src/shared/models/warehouse.model';
import { Observable } from 'rxjs';
import { Pagination } from 'src/shared/models/pagination.model';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  url = 'api/warehouses';
  imageLink: string;

  constructor(private dSrc: RestDataService, private util: UtilService) {
    this.imageLink = this.dSrc.baseUrl + this.url;
  }

  create(warehouse: Warehouse): Observable<Warehouse> {
    // let fData = this.util.jsonToFromData(warehouse, ['image']);
    return this.dSrc.sendRequest('POST', this.url, warehouse, true, null);
  }

  getList(pagi: Pagination): Observable<WarehousePage> {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  get(id): Observable<Warehouse> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  update(id, warehouse: Warehouse): Observable<Warehouse> {
    return this.dSrc.sendRequest(
      'PUT',
      this.url + `/${id}`,
      warehouse,
      true,
      null
    );
  }

  delete(id): Observable<Warehouse> {
    return this.dSrc.sendRequest(
      'DELETE',
      this.url + `/${id}`,
      null,
      true,
      null
    );
  }

  assign(wid, uid): Observable<Warehouse> {
    return this.dSrc.sendRequest(
      'PATCH',
      this.url + `/${wid}/user/${uid}`,
      null,
      true,
      null
    );
  }
}
