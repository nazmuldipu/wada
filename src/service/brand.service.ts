import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Brand, BrandPage } from 'src/shared/models/brand.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
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

  getList(
    page: number = 1,
    limit: number = 8,
    sort: string = 'name',
    order: string = 'asc',
    param: string = ''
  ): Observable<BrandPage> {
    let sparam = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sort', sort)
      .set('order', order)
      .set('param', param);

    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  get(id): Observable<Brand> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  update(id, brand: Brand): Observable<Brand> {
    console.log(brand);
    let fData = this.util.jsonToFromData(brand, ['image']);
    console.log(fData);
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
