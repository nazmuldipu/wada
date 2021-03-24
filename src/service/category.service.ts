import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { UtilService } from 'src/service/util.service';
import { Category, CategoryPage } from 'src/shared/models/category.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = 'api/categories';
  imageLink: string;

  constructor(private dSrc: RestDataService, private util: UtilService) {
    this.imageLink = this.dSrc.baseUrl + this.url;
  }

  create(category: Category): Observable<Category> {
    let fData = this.util.jsonToFromData(category, ['image']);
    return this.dSrc.sendRequest('POST', this.url, fData, true, null);
  }

  getList(
    page: number = 1,
    limit: number = 8,
    sort: string = 'name',
    order: string = 'asc',
    param: string = ''
  ): Observable<CategoryPage> {
    let sparam = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sort', sort)
      .set('order', order)
      .set('param', param);

    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  get(id): Observable<Category> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  update(id, category: Category): Observable<Category> {
    let fData = this.util.jsonToFromData(category, ['image']);
    console.log(fData);
    return this.dSrc.sendRequest('PUT', this.url + `/${id}`, fData, true, null);
  }

  delete(id): Observable<Category> {
    return this.dSrc.sendRequest(
      'DELETE',
      this.url + `/${id}`,
      null,
      true,
      null
    );
  }
}
