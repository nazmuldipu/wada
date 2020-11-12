import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';
import { ProductService } from 'src/service/product.service';
import { ProductPage } from 'src/shared/models/product.model';

@Component({
  selector: 'app-free-delivery',
  templateUrl: './free-delivery.component.html',
  styleUrls: ['./free-delivery.component.scss']
})
export class FreeDeliveryComponent implements OnInit {
  productPage: ProductPage;
  loading = false;
  errorMessage = '';
  prodImageUrl;
  prodThumbUrl;

  constructor(private productService: ProductService, private cartService: CartService) {
    this.prodImageUrl = this.productService.productLink + '/image/';
    this.prodThumbUrl = this.productService.productLink + '/thumb/';
  }

  ngOnInit(): void {
    this.getProductFreeDelivery();
  }

  async getProductFreeDelivery(page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.productPage = await this.productService.getByFreeDelivery(page, limit, sort, order).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onAddToCart(event) {
    this.errorMessage = '';
    this.loading = true;
    try {
      const resp = await this.cartService.addToCart(event).toPromise();
      this.cartService._cartSource.next(resp);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onCloseClick(){
    this.errorMessage = '';
  }
}
