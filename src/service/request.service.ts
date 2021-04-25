import { Injectable } from '@angular/core';
import { Pagination } from 'src/models/pagination.model';
import { RestDataService } from './rest-data.service';
import { ProductRequest, ProductRequestPage } from 'src/models/request.model';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = 'api/requests';

  constructor(private dSrc: RestDataService, private util: UtilService) { }

  create(request): Observable<ProductRequest> {
    return this.dSrc.sendRequest('POST', this.url, request, true, null);
  }

  getList(pagi: Pagination): Observable<ProductRequestPage> {
    const sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  get(id): Observable<ProductRequest> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  update(id, body): Observable<ProductRequest> {
    return this.dSrc.sendRequest('PUT', this.url + `/${id}`, body, true, null);
  }

  delete(id): Observable<ProductRequest> {
    return this.dSrc.sendRequest('DELETE', this.url + `/${id}`, null, true, null);
  }
}
