import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/service/cart.service';
import { ProductDetailsService } from 'src/service/product-details.service';
import { StockService } from 'src/service/stock.service';
import { ProductService } from 'src/service/product.service';
import { ProductDetails } from 'src/shared/models/product-details.model';
import { Stock } from 'src/shared/models/stock.model';
import { Product } from 'src/shared/models/product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id;
  current = 0;

  product: Product;
  // productDetails: ProductDetails;
  // productStocks: Stock[] = [];
  // inStock = false;

  loading = false;
  imageUrls = [];
  message = '';
  errorMessage = '';

  quantity = 1;
  stockQuantity = 0;

  constructor(
    private productService: ProductService,
    private productDetailsService: ProductDetailsService,
    private productStockService: StockService,
    private cartService: CartService,
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.params['id'];
    // this.imageUrl = this.productService.imageLink + '/image/';
    // this.shopImageUrl = this.shopService.shopLink + '/image/';
  }

  ngOnInit(): void {
    if (this.id) {
      this.getProduct(this.id);
    }
  }

  async getProduct(id: string) {
    this.loading = true;
    try {
      this.product = await this.productService.get(id).toPromise();
      // this.getProductDetails(id);
      // this.getProductStock(id);
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

  // async getProductDetails(product_id) {
  //   this.loading = true;
  //   try {
  //     this.productDetails = await this.productDetailsService
  //       .getProductDetailsByProductId(product_id)
  //       .toPromise();
  //   } catch (error) {
  //     this.errorMessage = error;
  //   }
  //   this.loading = false;
  // }

  // async getProductStock(product_id) {
  //   this.loading = true;
  //   try {
  //     this.productStocks = await this.productStockService
  //       .getProductStockByProductId(product_id)
  //       .toPromise();
  //     for (let stock of this.productStocks) {
  //       this.stockQuantity += stock.quantity;
  //     }
  //   } catch (error) {
  //     this.errorMessage = error;
  //   }
  //   this.loading = false;
  // }

  onThumbImageClick(event) {
    this.current = event;
  }

  setQuantity(num) {
    if (this.stockQuantity > this.quantity) {
      this.quantity += num;
    }
    if (this.quantity < 1) this.quantity = 1;
    if (this.quantity > 10) this.quantity = 10;
  }

  async addToCart() {
    console.log('Add to cart');
    const value = { productId: this.product._id, quantity: this.quantity };
    this.loading = true;
    try {
      const resp = await this.cartService.addToCart(value).toPromise();
      this.cartService._cartSource.next(resp);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  addToFavourite() {
    console.log('addToFavourite');
  }

  onRefresh() {
    console.log('onRefresh');
  }
}
