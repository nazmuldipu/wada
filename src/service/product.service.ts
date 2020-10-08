import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataService } from './rest-data.service';
import {Product, ProductPage} from '../shared/models/product.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = 'api/products';
  productLink: string;

  constructor(private dataSource: RestDataService) {
    this.productLink = this.dataSource.baseUrl + this.productUrl;
  }

  create(product: Product): Observable<Product> {
    var formData = new FormData();
    Object.keys(product).forEach((key) => {
      if (key === 'category' || key === 'sub_category' || key === 'sub_sub_category' || key === 'brand') {
        if (Object.keys(product[key]).length)
          formData.append(key, JSON.stringify(product[key]));
      }
      else {
        formData.append(key, product[key]);
      }
    });

    // console.log(product);
    new Response(formData).text().then(console.log)

    formData.delete('images')
    formData.delete('thumb')

    for (var i = 0; i < product['images'].length; i++) {
      formData.append('images', product['images'][i]);
    }
    formData.append('thumb', product['thumb']);

    return this.dataSource.sendRequest('POST', this.productUrl, formData, true, null);
  }

  update(id, product): Observable<Product> {
    var formData = new FormData();
    Object.keys(product).forEach((key) => {
      if (product[key] != null) {
        if (key === 'category' || key === 'sub_category' || key === 'sub_sub_category' || key === 'brand') {
          formData.append(key, JSON.stringify(product[key]));
        }
        else {
          formData.append(key, product[key]);
        }
        // formData.append(key, product[key]);
      }
    });

    formData.delete('_id')
    if (product['images']) {
      formData.delete('images')
      for (var i = 0; i < product['images'].length; i++) {
        formData.append('images', product['images'][i]);
      }
    }

    if (product['thumb']) {
      formData.delete('thumb')
      formData.append('thumb', product['thumb']);
    }

    console.log(product);
    new Response(formData).text().then(console.log)

    return this.dataSource.sendRequest('PUT', this.productUrl + `/${id}`, formData, true, null);
  }

  getAll(page: number, limit: number, sort: string, order: string): Observable<ProductPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.productUrl, null, false, params);
  }

  get(id): Observable<Product> {
    return this.dataSource.sendRequest('GET', this.productUrl + `/${id}`, null, false, null);
  }

  search(param: string): Observable<Product[]> {
    const paramUrl = new HttpParams().set('param', param);
    return this.dataSource.sendRequest('GET', this.productUrl + '/search', null, false, paramUrl)
  }

  getByCategorySlug(category_slug: string, page: number, limit: number, sort: string, order: string): Observable<ProductPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.productUrl + `/category/${category_slug}`, null, false, params);
  }

  getBySubCategorySlug(sub_category_slug: string, page: number, limit: number, sort: string, order: string): Observable<ProductPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.productUrl + `/sub_category/${sub_category_slug}`, null, false, params);
  }

  getBySubSubCategorySlug(sub_sub_category_slug: string, page: number, limit: number, sort: string, order: string): Observable<ProductPage> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.productUrl + `/sub_sub_category/${sub_sub_category_slug}`, null, false, params);
  }

  getByBrandSlug(brand_slug: string, page: number, limit: number, sort: string, order: string): Observable<Product[]> {
    const params = this.generateParam(page, limit, sort, order);
    return this.dataSource.sendRequest('GET', this.productUrl + `/brand/${brand_slug}`, null, false, params);
  }

  toggleActive(id): Observable<any> {
    return this.dataSource.sendRequest('PATCH',
      this.productUrl + `/activate/${id}`, null, true, null);
  }

  togglePublish(id): Observable<any> {
    return this.dataSource.sendRequest('PATCH',
      this.productUrl + `/publish/${id}`, null, true, null);
  }

  generateParam(page: number, limit: number, sort: string, order: string): HttpParams {
    return new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sort', sort)
      .set('order', order);
  }


  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
