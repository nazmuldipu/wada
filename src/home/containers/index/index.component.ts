import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/models/feature.model';
import { AuthService } from 'src/service/auth.service';
import { FeaturesService } from 'src/service/features.service';
import { ProductService } from 'src/service/product.service';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  featureImageUrl;
  productThumbUrl;

  products: Product[];
  hero: Feature;
  multibuy: Feature;
  special: Feature;
  featured: Feature[];

  constructor(public authService: AuthService, private featuresService: FeaturesService, private productService: ProductService) {
    this.featureImageUrl = this.featuresService.imageLink + '/image/';
    this.productThumbUrl = this.productService.imageLink + '/thumb/';
  }

  ngOnInit(): void {
    this.popularProducts();

    this.featuresService.features$.subscribe(data => {
      this.hero = data.find(d => d.priority === 1);
      this.multibuy = data.find(d => d.priority === 2);
      this.special = data.find(d => d.priority === 3);
      this.featured = data.filter(d => d.priority === 4);
    })
  }

  async popularProducts(): Promise<void> {
    try {
      this.products = await this.productService.popular().toPromise();
    } catch (err) {
      console.log(err);
    }
  }
}
