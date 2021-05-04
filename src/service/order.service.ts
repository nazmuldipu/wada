import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, OrderPage } from 'src/models/order.model';
import { Pagination } from 'src/models/pagination.model';
import { RestDataService } from './rest-data.service';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'api/orders';

  constructor(private dSrc: RestDataService, private util: UtilService) { }

  create(order): Observable<Order> {
    return this.dSrc.sendRequest('POST', this.url, order, true, null);
  }

  confirmOrder(address): Observable<Order> {
    return this.dSrc.sendRequest('PATCH', this.url, address, true, null);
  }

  getOrder(id: string): Observable<Order> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  getMyOrders(pagi: Pagination): Observable<OrderPage> {
    const sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url + '/my', null, true, sparam);
  }

  getOrderList(pagi: Pagination): Observable<OrderPage> {
    const sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  updateStatus(id, status): Observable<Order> {
    return this.dSrc.sendRequest('PUT', this.url + `/${id}`, status, true, null);
  }

  search(pagi: Pagination): Observable<OrderPage> {
    const sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url + '/search', null, true, sparam);
  }

  cancelOrer(id: string): Observable<Order> {
    return this.dSrc.sendRequest('DELETE', this.url + `/${id}`, null, true, null);
  }


  paynow(id: string): Observable<any> {
    return this.dSrc.sendRequest('GET', `api/payment/paynow/${id}`, null, true, null);
  }

}
