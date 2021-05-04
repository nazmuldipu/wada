import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Order, OrderPage } from 'src/models/order.model';
import { Pagination } from 'src/models/pagination.model';
import { OrderService } from 'src/service/order.service';
import { OrderStatus, PaymentMethods } from 'src/shared/data/data';

@Component({
  selector: 'app-order-side-list',
  templateUrl: './order-side-list.component.html',
  styleUrls: ['./order-side-list.component.scss']
})
export class OrderSideListComponent implements OnInit {
  @Output() pick = new EventEmitter<Order>();

  orderPage: OrderPage;

  paymentMethodsData;
  orderStatusData;
  paymentMethodParam;
  orderStatusParam;
  pagi: Pagination;
  loading = false;
  filter = false;
  errMsg = '';

  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.paymentMethodsData = PaymentMethods;
    this.orderStatusData = OrderStatus;
    this.pagi = new Pagination(1, 8, 'orderNumber', 'desc', '');
    this.getOrders(this.pagi);
  }

  async getOrders(pagi: Pagination): Promise<void> {
    try {
      this.loading = true;
      this.orderPage = await this.service.getOrderList(pagi).toPromise();
      this.loading = false;
    } catch (err) {
      this.errMsg = err.message;
    }
  }

  refreshOrderData(event): void {
    this.pagi.page = event;
    this.updateOrders();
  }

  onPaymentMethodSelect(event): void {
    this.pagi.page = 1;
    this.paymentMethodParam = event === '' ? null : 'paymentMethod=' + event;
    this.updateOrders();
  }

  onOrderStatusSelect(event): void {
    this.pagi.page = 1;
    this.orderStatusParam = event === '' ? null : 'orderStatus=' + event;
    this.updateOrders();
  }

  updateOrders(): void {
    const join = this.paymentMethodParam && this.orderStatusParam ? '&' : '';
    this.pagi.param = (this.paymentMethodParam ? this.paymentMethodParam : '')
      + join + (this.orderStatusParam ? this.orderStatusParam : '');
    this.getOrders(this.pagi);
  }

  onSelectOrder(order: Order): void {
    this.pick.emit(order);
  }

  onShowFilter(): void {
    this.filter = !this.filter;
  }

}
