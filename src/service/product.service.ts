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

  //----------------------------------------DELETE ---------------------------------------------------
  getAll(
    page: number,
    limit: number,
    sort: string,
    order: string
  ): Observable<ProductPage> {
    return this.dSrc.sendRequest('GET', this.url, null, true, null);
    //   const params = this.generateParam(page, limit, sort, order);
    //   return this.dataSource.sendRequest(
    //     'GET',
    //     this.productUrl,
    //     null,
    //     false,
    //     params
    //   );
  }

  // get(id): Observable<Product> {
  //   return this.dataSource.sendRequest(
  //     'GET',
  //     this.productUrl + `/${id}`,
  //     null,
  //     false,
  //     null
  //   );
  // }

  search(param: string): Observable<Product[]> {
    return this.dSrc.sendRequest('GET', this.url, null, true, null);
    // const paramUrl = new HttpParams().set('param', param);
    // return this.dataSource.sendRequest(
    //   'GET',
    //   this.productUrl + '/search',
    //   null,
    //   false,
    //   paramUrl
    // );
  }

  getByCategorySlug(
    category_slug: string,
    page: number,
    limit: number,
    sort: string,
    order: string
  ): Observable<ProductPage> {
    return this.dSrc.sendRequest('GET', this.url, null, true, null);
    // const params = this.generateParam(page, limit, sort, order);
    // return this.dataSource.sendRequest(
    //   'GET',
    //   this.productUrl + `/category/${category_slug}`,
    //   null,
    //   false,
    //   params
    // );
  }

  getBySubCategorySlug(
    sub_category_slug: string,
    page: number,
    limit: number,
    sort: string,
    order: string
  ): Observable<ProductPage> {
    return this.dSrc.sendRequest('GET', this.url, null, true, null);
    //   const params = this.generateParam(page, limit, sort, order);
    //   return this.dataSource.sendRequest(
    //     'GET',
    //     this.productUrl + `/sub_category/${sub_category_slug}`,
    //     null,
    //     false,
    //     params
    //   );
  }

  // getBySubSubCategorySlug(
  //   sub_sub_category_slug: string,
  //   page: number,
  //   limit: number,
  //   sort: string,
  //   order: string
  // ): Observable<ProductPage> {
  //   const params = this.generateParam(page, limit, sort, order);
  //   return this.dataSource.sendRequest(
  //     'GET',
  //     this.productUrl + `/sub_sub_category/${sub_sub_category_slug}`,
  //     null,
  //     false,
  //     params
  //   );
  // }

  getByFreeDelivery(
    page: number,
    limit: number,
    sort: string,
    order: string
  ): Observable<ProductPage> {
    return this.dSrc.sendRequest('GET', this.url, null, true, null);
    //   const params = this.generateParam(page, limit, sort, order);
    //   return this.dataSource.sendRequest(
    //     'GET',
    //     this.productUrl + `/free-delivery`,
    //     null,
    //     false,
    //     params
    //   );
  }

  getNewProducts(
    page: number,
    limit: number,
    sort: string,
    order: string
  ): Observable<ProductPage> {
    return this.dSrc.sendRequest('GET', this.url, null, true, null);
    //   const params = this.generateParam(page, limit, sort, order);
    //   return this.dataSource.sendRequest(
    //     'GET',
    //     this.productUrl + `/new-product`,
    //     null,
    //     false,
    //     params
    //   );
  }

  // getByBrandSlug(
  //   brand_slug: string,
  //   page: number,
  //   limit: number,
  //   sort: string,
  //   order: string
  // ): Observable<Product[]> {
  //   const params = this.generateParam(page, limit, sort, order);
  //   return this.dataSource.sendRequest(
  //     'GET',
  //     this.productUrl + `/brand/${brand_slug}`,
  //     null,
  //     false,
  //     params
  //   );
  // }

  // togglePublish(id): Observable<any> {
  //   return this.dataSource.sendRequest(
  //     'PATCH',
  //     this.productUrl + `/publish/${id}`,
  //     null,
  //     true,
  //     null
  //   );
  // }

  toggleFreeDelivery(id): Observable<any> {
    return this.dSrc.sendRequest(
      'PATCH',
      this.url + `/free-delivery/${id}`,
      null,
      true,
      null
    );
  }

  toggleNewProducts(id): Observable<any> {
    return this.dSrc.sendRequest(
      'PATCH',
      this.url + `/new-product/${id}`,
      null,
      true,
      null
    );
  }

  // generateParam(
  //   page: number,
  //   limit: number,
  //   sort: string,
  //   order: string
  // ): HttpParams {
  //   return new HttpParams()
  //     .set('page', page.toString())
  //     .set('limit', limit.toString())
  //     .set('sort', sort)
  //     .set('order', order);
  // }

  // isEmptyObject(obj) {
  //   return obj && Object.keys(obj).length === 0;
  // }
}
