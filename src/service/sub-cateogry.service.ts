import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataService } from './rest-data.service';
import { UtilService } from './util.service';
import {
  SubCategory,
  SubCategoryPage,
} from '../models/sub-category.model';
import { Pagination } from 'src/models/pagination.model';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  url = 'api/sub-categories';
  imageLink: string;

  constructor(private dSrc: RestDataService, private util: UtilService) {
    this.imageLink = this.dSrc.baseUrl + this.url;
  }

  create(subCategory: SubCategory): Observable<SubCategory> {
    let fData = this.util.jsonToFromData(subCategory, ['images']);
    return this.dSrc.sendRequest('POST', this.url, fData, true, null);
  }

  getList(pagi: Pagination): Observable<SubCategoryPage> {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  get(id): Observable<SubCategory> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  byCategorySlug(slug: string, pagi: Pagination) {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest(
      'GET',
      this.url + `/category/${slug}`,
      null,
      false,
      sparam
    );
  }

  update(id, subCategory: SubCategory): Observable<SubCategory> {
    let fData = this.util.jsonToFromData(subCategory, ['images']);
    return this.dSrc.sendRequest('PUT', this.url + `/${id}`, fData, true, null);
  }

  delete(id): Observable<SubCategory> {
    return this.dSrc.sendRequest(
      'DELETE',
      this.url + `/${id}`,
      null,
      true,
      null
    );
  }
}
