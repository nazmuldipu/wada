import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/service/order.service';
import { ProductService } from 'src/service/product.service';
import { Order, OrderPage } from 'src/models/order.model';
import { Pagination } from 'src/models/pagination.model';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  order: Order;
  orderPage: OrderPage;

  thumbUrl;
  loading = false;
  errorMessage = '';

  constructor(private productService: ProductService, private orderService: OrderService) {
    this.thumbUrl = this.productService.imageLink + '/thumb/';
  }

  ngOnInit(): void {
    this.myOrders();
  }

  async myOrders(): Promise<void> {
    this.loading = true;
    try {
      this.orderPage = await this.orderService.getMyOrders(new Pagination()).toPromise();
      this.order = this.orderPage.docs[0];
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  onSelectOrder(id): void {
    this.order = this.orderPage.docs.find(o => o._id === id);
  }

}
