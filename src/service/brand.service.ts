import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand, BrandPage } from 'src/shared/models/brand.model';
import { Pagination } from 'src/shared/models/pagination.model';

import { RestDataService } from './rest-data.service';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  url = 'api/brands';
  imageLink: string;

  constructor(private dSrc: RestDataService, private util: UtilService) {
    this.imageLink = this.dSrc.baseUrl + this.url;
  }

  create(brand: Brand): Observable<Brand> {
    let fData = this.util.jsonToFromData(brand, ['image']);
    return this.dSrc.sendRequest('POST', this.url, fData, true, null);
  }

  getList(pagi: Pagination): Observable<BrandPage> {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  get(id): Observable<Brand> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  update(id, brand: Brand): Observable<Brand> {
    console.log(brand);
    let fData = this.util.jsonToFromData(brand, ['image']);
    return this.dSrc.sendRequest('PUT', this.url + `/${id}`, fData, true, null);
  }

  delete(id): Observable<Brand> {
    return this.dSrc.sendRequest(
      'DELETE',
      this.url + `/${id}`,
      null,
      true,
      null
    );
  }
}
