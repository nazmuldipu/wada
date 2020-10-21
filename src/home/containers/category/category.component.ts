import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/service/product.service';
import { CategoryTree } from 'src/shared/data/category';
import { Cart, Product_list_cart } from 'src/shared/models/cart.model';
import { Product, ProductPage } from 'src/shared/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  slug;
  sideNav = CategoryTree;

  productPage: ProductPage;
  product: Product;
  cart: Cart;
  product_list_cart: Product_list_cart;
  prodImageUrl;
  prodThumbUrl;
  categoryNav;
  sub_category;
  sub_sub_category;

  loading = false;
  errorMessage = '';

  constructor(private productService: ProductService, private activeRoute: ActivatedRoute,
    private modalService: NgbModal) {
    this.slug = activeRoute.snapshot.params['slug'];
    this.prodImageUrl = this.productService.productLink + '/image/';
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

  async getProductBySubCategory(sub_category_slug: string, page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.productPage = await this.productService.getBySubCategorySlug(sub_category_slug, page, limit, sort, order).toPromise();
      // window.scroll(0, 0);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onShortDetails(targetModal, product: Product) {
    this.product = product;
    if (this.cart && this.cart.product_list && this.cart.product_list.length > 0) {
      this.product_list_cart = this.cart.product_list.find(pl => pl.product._id == product._id);
    }
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'xl',
      scrollable: true
    });
  }

  onSubCategoryClick(slug) {
    // console.log(slug);
    switch (slug) {
      case 'all':
        this.sub_category = null;
        this.getProductByCategory(this.slug);
        break;
      default:
        this.sub_category = this.categoryNav.sub_category.find(sc => sc.slug == slug);
        this.getProductBySubCategory(slug);
        break;
    }
  }
}
