import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/service/cart.service';
import { ProductService } from 'src/service/product.service';
import { SubCategoryService } from 'src/service/sub-cateogry.service';
import { SubSubCategoryService } from 'src/service/sub-sub-category.service';
import { CategoryTree } from 'src/shared/data/category';
import { Cart, Product_list_cart } from 'src/shared/models/cart.model';
import { Pagination } from 'src/shared/models/pagination.model';
import { Product, ProductPage } from 'src/shared/models/product.model';
import { SubSubCategory } from 'src/shared/models/sub-sub-category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  slug;
  sideNav = CategoryTree;

  product: Product;
  cart: Cart;
  product_list_cart: Product_list_cart;
  prodImageUrl;
  prodThumbUrl;
  categoryNav;
  sub_category;

  mode = { type: 'all', slug: '' };
  productPage: ProductPage;
  subSubCategory: SubSubCategory[];
  selectedSubSubCat: SubSubCategory;

  loading = false;
  bannerUrl = '';
  errorMessage = '';

  constructor(
    private subSubCategoryService: SubSubCategoryService,
    private subCategoryService: SubCategoryService,
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private cartService: CartService,
    private modalService: NgbModal
  ) {
    this.prodImageUrl = this.productService.imageLink + '/image/';
    this.prodThumbUrl = this.productService.imageLink + '/thumb/';
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((routeParams) => {
      this.slug = routeParams['slug'];
      if (this.slug) {
        this.mode = { type: 'all', slug: this.slug };
        this.bannerUrl =
          this.subCategoryService.imageLink + '/image-slug/' + this.slug;
        this.getSubSubCategory(this.slug);
        this.getProductBySubCategory(this.slug, new Pagination());
      }
    });
  }

  async getSubSubCategory(slug: string) {
    try {
      this.loading = true;
      const { docs } = await this.subSubCategoryService
        .bySubCategorySlug(slug, new Pagination(1, 100))
        .toPromise();
      this.subSubCategory = docs;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  async getProductBySubCategory(slug: string, pagi: Pagination) {
    this.loading = true;
    try {
      this.productPage = await this.productService
        .bySubCategorySlug(slug, pagi)
        .toPromise();

      //update banner image
      this.bannerUrl =
        this.subCategoryService.imageLink + '/image-slug/' + this.slug;
      window.scroll(0, 0);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async getProductBySubSubCategory(slug: string, pagi: Pagination) {
    try {
      this.loading = true;
      this.productPage = await this.productService
        .bySubSubCategorySlug(slug, pagi)
        .toPromise();

      //Update banner image
      this.bannerUrl =
        this.subSubCategoryService.imageLink +
        '/image/' +
        this.selectedSubSubCat._id + '/0';
      window.scroll(100, 0);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onSubCategoryClick(slug) {
    switch (slug) {
      case 'all':
        this.selectedSubSubCat = null;
        this.mode = { type: 'all', slug: this.slug };
        this.getProductBySubCategory(this.slug, new Pagination());
        break;
      default:
        this.mode = { type: 'custom', slug: slug };
        this.selectedSubSubCat = this.subSubCategory.find(
          (sc) => sc.slug == slug
        );
        this.getProductBySubSubCategory(slug, new Pagination());
        break;
    }
  }

  handlePagination(event) {
    switch (this.mode.type) {
      case 'all':
        this.getProductBySubCategory(this.slug, new Pagination(event));
        break;
      default:
        this.getProductBySubSubCategory(this.mode.slug, new Pagination(event));
        break;
    }
  }
  //----------------------------------------------deletable ---------------------------
  onChangePage(page) {
    if (this.sub_category) {
      this.getProductBySubCategory(this.sub_category.slug, new Pagination());
    }
    //else {
    //   this.getProductByCategory(
    //     this.slug,
    //     page.pageNumber,
    //     page.limit,
    //     page.sort,
    //     page.order
    //   );
    // }
  }

  onShortDetails(targetModal, product: Product) {
    this.product = product;
    if (
      this.cart &&
      this.cart.product_list &&
      this.cart.product_list.length > 0
    ) {
      this.product_list_cart = this.cart.product_list.find(
        (pl) => pl.product._id == product._id
      );
    }
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'xl',
      scrollable: true,
    });
  }

  async onAddToCart(event) {
    this.errorMessage = '';
    this.loading = true;
    try {
      const resp = await this.cartService.addToCart(event).toPromise();
      this.cartService._cartSource.next(resp);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onCloseClick() {
    this.errorMessage = '';
  }
}
