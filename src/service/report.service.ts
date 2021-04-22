import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url = 'api/reports';

  constructor(private dSrc: RestDataService) { }

  dashboardReport(): Observable<any> {
    return this.dSrc.sendRequest('GET', this.url + `/dashboard`, null, true, null);
  }
}
