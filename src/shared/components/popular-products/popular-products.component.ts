import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss']
})
export class PopularProductsComponent implements OnInit {
  @Input() products: Product[];
  @Input() thumbUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
