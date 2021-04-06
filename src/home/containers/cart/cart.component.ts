import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';
import { OrderService } from 'src/service/order.service';
import { ProductService } from 'src/service/product.service';
import { Cart } from 'src/models/cart.model';
import { Order } from 'src/models/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;
  order: Order;
  total = 0;

  showPromoForm = false;
  loading = false;
  errorMessage = '';
  thumbUrl;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private orderService: OrderService
  ) {
    this.thumbUrl = this.productService.imageLink + '/thumb/';
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.cartService.cart$.subscribe((data) => {
      this.cart = data;
      this.total = 0;
      if (data && data.product_list) {
        this.cart.product_list.forEach((pl) => {
          this.total += pl.amount;
        });
      }
    });
  }

  onTogglePromoForm(): void {
    this.showPromoForm = !this.showPromoForm;
  }

  async onAddToCart(event): Promise<void> {
    this.loading = true;
    try {
      const resp = await this.cartService.addToCart(event).toPromise();
      this.cartService.cartSource.next(resp);
    } catch (error) {
      this.errorMessage = error;
      console.log(error);
      if (error.code === 404) {
        this.onRemoveFromCart(event.productId);
      }
    }
    this.loading = false;
  }

  async onRemoveFromCart(pId: string): Promise<void> {
    try {
      const resp = await this.cartService.removeFromCart(pId).toPromise();
      console.log(resp);
    } catch (err) {
      this.errorMessage = err;
    }
  }

  setQuantity(productId, num): void {
    const value = { productId, quantity: num };
    this.onAddToCart(value);
  }

  async onConfirmOrder(): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.orderService.confirmOrder().toPromise();
      await this.cartService.getMyCart();
      this.order = resp;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  }

  // onDelete(productId) {
  //   if (confirm('Are you sure to delete')) {
  //     const count = this.cart.product_list.find(
  //       (pl) => pl.product._id === productId
  //     ).quantity;
  //     const value = { productId, quantity: -count };
  //     this.onAddToCart(value);
  //   }
  // }

  async onOrder(): Promise<void> {
    this.loading = true;
    try {
      const resp = await this.orderService.confirmOrder().toPromise();
      // this.cartService.getMyCart();
      console.log(resp);
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

}
