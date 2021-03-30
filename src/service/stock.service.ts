import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { Stock, StockPage } from 'src/shared/models/stock.model';
import { Observable } from 'rxjs/internal/Observable';
import { Pagination } from 'src/shared/models/pagination.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  url = 'api/stocks';

  constructor(private dSrc: RestDataService, private util: UtilService) {}

  byProductId(pid: string, pagi: Pagination): Observable<Stock[]> {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest(
      'GET',
      this.url + `/product/${pid}`,
      null,
      true,
      sparam
    );
  }

  byWarehouseId(sid: string, pagi: Pagination): Observable<StockPage> {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest(
      'GET',
      this.url + `/warehouse/${sid}`,
      null,
      true,
      sparam
    );
  }
}
