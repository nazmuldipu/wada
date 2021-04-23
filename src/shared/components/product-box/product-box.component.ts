import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {
  @Input() product: Product;
  @Input() thumbUrl: string;
  
  math = Math;
  constructor() { }

  ngOnInit(): void {
  }

}
