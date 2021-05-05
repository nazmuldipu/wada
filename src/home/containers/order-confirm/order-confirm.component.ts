import { Component, OnInit } from '@angular/core';
import { Order } from 'src/models/order.model';
import { User } from 'src/models/user.model';
import { CartService } from 'src/service/cart.service';
import { OrderService } from 'src/service/order.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss']
})
export class OrderConfirmComponent implements OnInit {
  user: User;
  order: Order;
  loading = false;
  errMsg = '';

  constructor(private orderService: OrderService, private cartService: CartService, private userService: UserService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  async getProfile(): Promise<void> {
    try {
      const resp = await this.userService.getUserProfile().toPromise();
      this.user = resp;
    } catch (err) {
      console.log(err);
    }
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

  async wPaynow(id): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.orderService.paynow(id).toPromise();
      if (resp.payment_url){
        // window.location.href = resp.payment_url;
      }
      else {
        this.errMsg = resp;
        console.log(resp);
      }
      this.loading = false;
    } catch (err) {
      this.errMsg = err;
    }
  }
}
