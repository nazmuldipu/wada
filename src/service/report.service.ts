import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderPage } from 'src/models/order.model';

import { RestDataService } from './rest-data.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url = 'api/reports';

  constructor(private dSrc: RestDataService) { }

  dashboardReport(): Observable<any> {
    return this.dSrc.sendRequest('GET', this.url + `/dashboard`, null, true, null);
  }

  customer(uid, start, end): Observable<OrderPage> {
    let sparam = new HttpParams().set('start', start).set('end', end);
    return this.dSrc.sendRequest('GET', this.url + `/customer/${uid}`, null, true, sparam);
  }

}
