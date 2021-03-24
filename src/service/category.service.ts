import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilService } from 'src/service/util.service';
import { Category, CategoryPage } from 'src/shared/models/category.model';
import { Pagination } from 'src/shared/models/pagination.model';

import { RestDataService } from './rest-data.service';

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

  getList(pagi: Pagination): Observable<CategoryPage> {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  get(id): Observable<Category> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  update(id, category: Category): Observable<Category> {
    let fData = this.util.jsonToFromData(category, ['image']);
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
