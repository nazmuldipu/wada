import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storehouse, StorehousePage } from 'src/models/storehouse.model';
import { RestDataService } from './rest-data.service';

@Injectable({
  providedIn: 'root'
})
export class StorehouseService {
  storehouseUrl = 'api/storehouse';
  storehouseLink: string;

  constructor(private dataSource: RestDataService) {
    this.storehouseLink = this.dataSource.baseUrl + this.storehouseUrl;
  }

  create(storehouse: Storehouse): Observable<Storehouse> {
    return this.dataSource.sendRequest('POST', this.storehouseUrl, storehouse, true, null);
  }

  update(id, storehouse): Observable<Storehouse> {
    return this.dataSource.sendRequest('PUT', this.storehouseUrl + `/${id}`, storehouse, true, null);
  }

  getAll(page: number, limit: number, sort: string, order: string): Observable<StorehousePage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.storehouseUrl, null, false, params);
  }

  get(id): Observable<Storehouse> {
    return this.dataSource.sendRequest('GET', this.storehouseUrl + `/${id}`, null, false, null);
  }

  search(param: string): Observable<Storehouse[]> {
    const paramUrl = new HttpParams().set('param', param);
    return this.dataSource.sendRequest('GET', this.storehouseUrl + '/search', null, false, paramUrl)
  }

  generateParam(page: number, limit: number, sort: string, order: string): HttpParams {
    return new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sort', sort)
      .set('order', order);
  }
}
