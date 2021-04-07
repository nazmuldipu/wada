import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrderService } from 'src/service/order.service';
import { Order, OrderPage } from 'src/models/order.model';
import { Pagination } from 'src/models/pagination.model';

@Component({
  selector: 'app-order-side-search',
  templateUrl: './order-side-search.component.html',
  styleUrls: ['./order-side-search.component.scss']
})
export class OrderSideSearchComponent implements OnInit {
  @Output() pick = new EventEmitter<Order>();

  orderPage: OrderPage;

  search = '';
  loading = false;
  pagi: Pagination;

  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.pagi = new Pagination(1, 8, 'orderNumber', 'desc', '');
    // this.searchOrder(this.pagi);
  }

  async searchOrder(pagi: Pagination): Promise<void> {
    try {
      this.loading = true;
      this.orderPage = await this.service.search(pagi).toPromise();
      this.loading = false;
    } catch (err) { }
  }

  onSelectOrder(order: Order): void {
    this.pick.emit(order);
  }

}
