import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';
import { Cart } from 'src/models/cart.model';
import { ProductService } from 'src/service/product.service';
import { OrderService } from 'src/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;
  total = 0;

  loading = false;
  errorMessage = '';
  thumbUrl;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private orderService: OrderService) {
    this.thumbUrl = this.productService.imageLink + '/thumb/';
  }

  ngOnInit(): void {
    // this.cartService.getMyCart();
    // tslint:disable-next-line: deprecation
    this.cartService.cart$.subscribe(data => {
      this.cart = data;
      this.total = 0;
      if (data && data.product_list) {
        this.cart.product_list.forEach(pl => { this.total += pl.amount; });
      }
    });
  }


  async onAddToCart(event): Promise<void> {
    this.loading = true;
    try {
      const resp = await this.cartService.addToCart(event).toPromise();
      this.cartService.cartSource.next(resp);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  setQuantity(productId, num): void {
    const value = { productId, quantity: num };
    this.onAddToCart(value);
  }

  onDelete(productId): void {
    if (confirm('Are you sure to delete')) {
      const count = this.cart.product_list.find(pl => pl.product._id === productId).quantity;
      const value = { productId, quantity: - count };
      this.onAddToCart(value);
    }
  }

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
