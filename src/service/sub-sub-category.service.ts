import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { UtilService } from './util.service';
import {
  SubSubCategory,
  SubSubCategoryPage,
} from 'src/shared/models/sub-sub-category.model';
import { Observable } from 'rxjs';
import { Pagination } from 'src/shared/models/pagination.model';

@Injectable({
  providedIn: 'root',
})
export class SubSubCategoryService {
  url = 'api/sub-sub-categories';
  imageLink: string;

  constructor(private dSrc: RestDataService, private util: UtilService) {
    this.imageLink = this.dSrc.baseUrl + this.url;
  }

  create(subSubCategory: SubSubCategory): Observable<SubSubCategory> {
    let fData = this.util.jsonToFromData(subSubCategory, ['images']);
    return this.dSrc.sendRequest('POST', this.url, fData, true, null);
  }

  getList(pagi: Pagination): Observable<SubSubCategoryPage> {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  get(id): Observable<SubSubCategory> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  update(id, subSubCategory: SubSubCategory): Observable<SubSubCategory> {
    let fData = this.util.jsonToFromData(subSubCategory, ['images']);
    return this.dSrc.sendRequest('PUT', this.url + `/${id}`, fData, true, null);
  }

  delete(id): Observable<SubSubCategory> {
    return this.dSrc.sendRequest(
      'DELETE',
      this.url + `/${id}`,
      null,
      true,
      null
    );
  }

  byCategorySlug(slug: string, pagi: Pagination) {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest(
      'GET',
      this.url + `/category/${slug}`,
      null,
      true,
      sparam
    );
  }

  bySubCategorySlug(slug: string, pagi: Pagination) {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest(
      'GET',
      this.url + `/subCategory/${slug}`,
      null,
      false,
      sparam
    );
  }
}
