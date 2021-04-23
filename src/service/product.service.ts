import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilService } from 'src/service/util.service';
import { Pagination } from 'src/models/pagination.model';

import { Product, ProductPage } from '../models/product.model';
import { RestDataService } from './rest-data.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'api/products';
  imageLink: string;

  constructor(private dSrc: RestDataService, private util: UtilService) {
    this.imageLink = this.dSrc.baseUrl + 'images/' + this.url;
  }

  create(product: Product): Observable<Product> {
    let fData = this.util.jsonToFromData(product, ['images', 'thumb']);
    return this.dSrc.sendRequest('POST', this.url, fData, true, null);
  }

  getList(pagi: Pagination): Observable<ProductPage> {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  get(id): Observable<Product> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, false, null);
  }

  update(id, product: Product): Observable<Product> {
    let fData = this.util.jsonToFromData(product, ['images', 'thumb']);
    return this.dSrc.sendRequest('PUT', this.url + `/${id}`, fData, true, null);
  }

  delete(id): Observable<Product> {
    return this.dSrc.sendRequest('DELETE', this.url + `/${id}`, null, true, null);
  }

  toggleActive(id): Observable<any> {
    return this.dSrc.sendRequest('PATCH', this.url + `/activate/${id}`, null, true, null);
  }

  popular(): Observable<Product[]> {
    return this.dSrc.sendRequest('GET', this.url + '/popular', null, false, null);
  }

  byCategorySlug(slug: string, pagi: Pagination): Observable<ProductPage> {
    let sparam = this.util.paginationToHttpParam(pagi); return this.dSrc.sendRequest('GET', this.url + `/category/${slug}`, null, false, sparam);
  }

  bySubCategorySlug(slug: string, pagi: Pagination): Observable<ProductPage> {
    let sparam = this.util.paginationToHttpParam(pagi); return this.dSrc.sendRequest('GET', this.url + `/subCategory/${slug}`, null, false, sparam);
  }

  bySubSubCategorySlug(slug: string, pagi: Pagination): Observable<ProductPage> {
    let sparam = this.util.paginationToHttpParam(pagi); return this.dSrc.sendRequest('GET', this.url + `/subSubCategory/${slug}`, null, false, sparam);
  }

  byBrand(slug: string, pagi: Pagination): Observable<ProductPage> {
    let sparam = this.util.paginationToHttpParam(pagi); return this.dSrc.sendRequest('GET', this.url + `/brand/${slug}`, null, false, sparam);
  }

  byFeature(slug: string, pagi: Pagination): Observable<ProductPage> {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url + `/feature/${slug}`, null, false, sparam);
  }


}
