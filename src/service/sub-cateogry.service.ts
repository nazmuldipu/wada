import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataService } from './rest-data.service';
import { UtilService } from './util.service';
import { SubCategory, SubCategoryPage } from './../shared/models/sub-category.model';
import { Pagination } from 'src/shared/models/pagination.model';

@Injectable({
  providedIn: 'root',
})
export class SubCateogryService {
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

  update(id, subCategory: SubCategory): Observable<SubCategory> {
    let fData = this.util.jsonToFromData(subCategory, ['images']);
    console.log(fData);
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
