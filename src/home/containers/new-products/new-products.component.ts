import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';
import { ProductService } from 'src/service/product.service';
import { ProductPage } from 'src/models/product.model';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  productPage: ProductPage;
  loading = false;
  errorMessage = '';
  prodImageUrl;
  prodThumbUrl;

  constructor(private productService: ProductService, private cartService: CartService) {
    this.prodImageUrl = this.productService.imageLink + '/image/';
    this.prodThumbUrl = this.productService.imageLink + '/thumb/';
  }

  ngOnInit(): void {
    this.getNewProducts();
  }

  async getNewProducts(page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc'): Promise<void> {
    this.loading = true;
    try {
      this.productPage = await this.productService.getNewProducts(page, limit, sort, order).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onChangePage(page): void {
    this.getNewProducts(page.pageNumber, page.limit, page.sort, page.order);
  }


  async onAddToCart(event): Promise<void> {
    this.errorMessage = '';
    this.loading = true;
    try {
      const resp = await this.cartService.addToCart(event).toPromise();
      this.cartService.cartSource.next(resp);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onCloseClick(): void {
    this.errorMessage = '';
  }

}
