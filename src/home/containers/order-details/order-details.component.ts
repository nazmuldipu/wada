import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/service/order.service';
import { CartService } from 'src/service/cart.service';
import { Order } from 'src/models/order.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: Order;
  loading = false;

  constructor(private orderService: OrderService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  async onCreate(event): Promise<void> {
    console.log(event);
    try {
      this.loading = true;
      const resp = await this.orderService.confirmOrder(event).toPromise();
      await this.cartService.getMyCart();
      this.order = resp;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  }

}
