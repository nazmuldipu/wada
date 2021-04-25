import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/service/cart.service';
import { ProductDetailsService } from 'src/service/product-details.service';
import { StockService } from 'src/service/stock.service';
import { ProductService } from 'src/service/product.service';
import { ProductDetails } from 'src/models/product-details.model';
import { Stock } from 'src/models/stock.model';
import { Product } from 'src/models/product.model';
import { Pagination } from 'src/models/pagination.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id;
  current = 0;

  product: Product;

  loading = false;
  imageUrls = [];
  message = '';
  errorMessage = '';

  quantity = 1;
  stockQuantity = 0;

  constructor(
    private productService: ProductService,
    private productStockService: StockService,
    private cartService: CartService,
    private activeRoute: ActivatedRoute,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.id = params.id;
      if (this.id) {
        this.getProduct(this.id);
      }
    })
  }

  async getProduct(id: string): Promise<void> {
    this.loading = true;
    try {
      this.product = await this.productService.get(id).toPromise();
      this.title.setTitle(this.product.name + ' ' + this.product.size + ' Details'); 
      // this.getProductDetails(id);
      this.getProductStock(id);

      this.imageUrls = [];
      for (let i = 0; i < this.product.image_count; i++) {
        const url = this.productService.imageLink + '/image/' + id + '/' + i;
        this.imageUrls.push({ image: url, thumbImage: url });
      }
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async getProductStock(product_id) {
    this.loading = true;
    try {
      const resp = await this.productStockService.byProductId(product_id, new Pagination(1, 100)).toPromise();
      resp.forEach(st => {
        this.stockQuantity += st.quantity;
      })
    } catch (error) {
      this.errorMessage = error.message;
    }
    this.loading = false;
  }

  onThumbImageClick(event): void {
    this.current = event;
  }

  setQuantity(num): void {
    if (this.stockQuantity > this.quantity) {
      this.quantity += num;
    }
    if (this.quantity < 1) { this.quantity = 1; }
    if (this.quantity > 10) { this.quantity = 10; }
  }

  async addToCart(): Promise<void> {
    console.log('Add to cart');
    const value = { productId: this.product._id, quantity: this.quantity };
    this.loading = true;
    try {
      const resp = await this.cartService.addToCart(value).toPromise();
      this.cartService.cartSource.next(resp);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  addToFavourite(): void {
    console.log('addToFavourite');
  }

  onRefresh(): void {
    console.log('onRefresh');
  }
}
