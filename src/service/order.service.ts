import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, OrderPage } from 'src/shared/models/order.model';
import { RestDataService } from './rest-data.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderUrl = 'api/orders';

  constructor(private dataSource: RestDataService) { }

  createOrder(order: Order): Observable<Order> {
    return this.dataSource.sendRequest('POST', this.orderUrl, order, true, null);
  }

  confirmOrder(): Observable<Order> {
    return this.dataSource.sendRequest('POST', this.orderUrl + '/confirm', null, true, null);
  }

  getMyOrders(): Observable<OrderPage> {
    return this.dataSource.sendRequest('GET', this.orderUrl + '/my', null, true, null);
  }

}
