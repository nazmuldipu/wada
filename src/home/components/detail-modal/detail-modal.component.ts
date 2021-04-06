import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/models/product.model';
import { ProductListCart } from 'src/models/cart.model';

@Component({
  selector: 'detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnChanges {

  @Input() product: Product;
  @Input() prodImageUrl: string;
  @Input() cartProduct: ProductListCart;

  @Output() dismiss = new EventEmitter<any>();
  @Output() cart = new EventEmitter<any>();

  current = 0;
  discount = 0;
  // quantity = 1;
  imageUrls = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.product) {
      for (let i = 0; i < this.product.image_count; i++) {
        const url = this.prodImageUrl + this.product._id + '/' + i;
        this.imageUrls.push({ image: url, thumbImage: url })
      }
      if (this.product.mrp > 0) {
        this.discount = (1 - (this.product.price / this.product.mrp)) * 100;
      }
    }
  }

  onDismiss(): void {
    this.dismiss.emit(true);
  }

  onThumbImageClick(event): void {
    this.current = event;
  }

  setQuantity(num): void {
    const value = { productId: this.product._id, quantity: num };
    this.cart.emit(value);
  }

  addToCart(): void {
    if (!this.cartProduct || !this.cartProduct.quantity || this.cartProduct.quantity === 0) {
      this.cart.emit({ productId: this.product._id, quantity: 1 });
    }

    this.dismiss.emit(true);
  }

}
