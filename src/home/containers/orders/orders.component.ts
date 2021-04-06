import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/models/pagination.model';
import { OrderService } from 'src/service/order.service';
import { Order, OrderPage } from 'src/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  currentRate = 8;
  orderPage: OrderPage;
  order: Order;
  errorMessage = '';

  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.getMyOrders(new Pagination(1, 8, 'orderNumber', 'desc'));
  }

  async getMyOrders(pagi: Pagination): Promise<void> {
    try {
      this.orderPage = await this.service.getMyOrders(pagi).toPromise();
    } catch (err) {
      this.errorMessage = err;
    }
  }

  async onDetails(id): Promise<void> {
    try {
      this.order = await this.service.getOrder(id).toPromise();
    } catch (err) {
      console.log(err);
    }
    console.log(id);
  }
}
