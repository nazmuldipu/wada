import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/shared/models/product.model';

@Component({
  selector: 'product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss']
})
export class Product2Component implements OnInit {
  @Input() product: Product;
  @Input() thumbUrl: string;

  @Output() cart = new EventEmitter<any>();
  @Output() shortDetails = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onShortDetails() {
    this.shortDetails.emit(this.product);
  }

  addToCart(id) {
    this.cart.emit({ "productId": this.product._id, "quantity": 1 });
  }

}
