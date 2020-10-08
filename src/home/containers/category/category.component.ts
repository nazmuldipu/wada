import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/service/product.service';
import { CategoryTree } from 'src/shared/data/category';
import { ProductPage } from 'src/shared/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  slug;
  sideNav = CategoryTree;

  productPage: ProductPage;
  // subCategory;
  prodThumbUrl;
  categoryNav;
  loading = false;
  errorMessage = '';

  constructor(private productService: ProductService, private activeRoute: ActivatedRoute) {
    this.slug = activeRoute.snapshot.params['slug'];
    this.prodThumbUrl = this.productService.productLink + '/thumb/';
  }

  ngOnInit(): void {
    if (this.slug) {
      this.getCategoryNav(this.slug);
      this.getProductByCategory(this.slug);
    }
  }

  getCategoryNav(slug) {
    this.categoryNav = this.sideNav.category.find(cat => cat.slug == slug);
  }

  async getProductByCategory(category_slug: string, page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.categoryNav = this.sideNav.category.find(cat => cat.slug == category_slug);
    this.loading = true;
    try {
      this.productPage = await this.productService.getByCategorySlug(category_slug, page, limit, sort, order).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

}
