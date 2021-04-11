import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { UtilService } from './util.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pagination } from 'src/models/pagination.model';
import { Feature, FeaturePage } from 'src/models/feature.model';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  url = 'api/features';
  imageLink: string;

  featuresSource = new BehaviorSubject<Feature[]>([]);
  features$ = this.featuresSource.asObservable();

  constructor(private dSrc: RestDataService, private util: UtilService) {
    this.imageLink = this.dSrc.baseUrl + this.url;
  }


  create(feature: Feature): Observable<Feature> {
    const fData = this.util.jsonToFromData(feature, ['images']);
    return this.dSrc.sendRequest('POST', this.url, fData, true, null);
  }

  getList(pagi: Pagination): Observable<FeaturePage> {
    const sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  get(id): Observable<Feature> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  update(id, feature: Feature): Observable<Feature> {
    const fData = this.util.jsonToFromData(feature, ['images']);
    return this.dSrc.sendRequest('PUT', this.url + `/${id}`, fData, true, null);
  }

  delete(id): Observable<Feature> {
    return this.dSrc.sendRequest('DELETE', this.url + `/${id}`, null, true, null);
  }

  activate(id): Observable<Feature> {
    return this.dSrc.sendRequest('PATCH', this.url + `/activate/${id}`, null, true, null);
  }

  add(id, productId): Observable<Feature> {
    return this.dSrc.sendRequest('PATCH', this.url + `/add/${id}`, { productId }, true, null);
  }

  remove(id, productId): Observable<Feature> {
    return this.dSrc.sendRequest('PATCH', this.url + `/remove/${id}`, { productId }, true, null);
  }

  activeFeatures(pagi: Pagination): Observable<FeaturePage> {
    const sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url + `/active/`, null, false, sparam);
  }

}
