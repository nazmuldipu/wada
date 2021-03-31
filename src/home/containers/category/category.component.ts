import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/service/cart.service';
import { ProductService } from 'src/service/product.service';
import { SubCategoryService } from 'src/service/sub-cateogry.service';
import { SubSubCategoryService } from 'src/service/sub-sub-category.service';
import { CategoryTree } from 'src/shared/data/category';
import { Cart, Product_list_cart } from 'src/models/cart.model';
import { Pagination } from 'src/models/pagination.model';
import { Product, ProductPage } from 'src/models/product.model';
import { SubSubCategory } from 'src/models/sub-sub-category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  slug;
  mode;
  productPage: ProductPage;
  productList: Product[] = [];
  subSubCategory: SubSubCategory;
  subSubCategories: SubSubCategory[];

  bannerUrl;
  prodThumbUrl;
  loading = false;
  errorMessage = '';

  // cart: Cart;
  // product_list_cart: Product_list_cart;
  // prodImageUrl;
  // categoryNav;
  // sub_category;

  @ViewChild('anchor', { static: false }) anchor: ElementRef<HTMLElement>;
  constructor(
    private subSubCategoryService: SubSubCategoryService,
    private subCategoryService: SubCategoryService,
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private cartService: CartService,
    private modalService: NgbModal
  ) {
    // this.prodImageUrl = this.productService.imageLink + '/image/';
    this.prodThumbUrl = this.productService.imageLink + '/thumb/';
    window.scroll(0, 0);
  }

  ngOnInit(): void {
    // console.log(this.anchor);
    this.activeRoute.params.subscribe((params) => {
      let slug = params['slug'];
      if (this.slug && this.slug != slug) {
        this.productList = [];
        this.subSubCategory = null;
        this.getProductBySubCategory(slug, new Pagination);
      }
      if (slug) {
        this.slug = slug;
        this.mode = { type: 'all', slug };
        this.bannerUrl =
          this.subCategoryService.imageLink + '/image-slug/' + this.slug; //TODO_FUTURE: this will load from category service

        this.getSubSubCategoryList(this.slug);
      }
    });
  }

  async getSubSubCategoryList(slug: string) {
    try {
      this.loading = true;
      const { docs } = await this.subSubCategoryService
        .bySubCategorySlug(slug, new Pagination(1, 100))
        .toPromise();
      this.subSubCategories = docs;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  onSubSubCategoryClick(slug) {
    this.productList = [];
    switch (slug) {
      case 'all':
        this.subSubCategory = null;
        this.mode = { type: 'all', slug: this.slug };
        this.getProductBySubCategory(this.slug, new Pagination());
        break;
      default:
        this.mode = { type: 'custom', slug: slug };
        this.subSubCategory = this.subSubCategories.find(
          (sc) => sc.slug == slug
        );
        this.getProductBySubSubCategory(slug, new Pagination());
        break;
    }
  }

  async getProductBySubCategory(slug: string, pagi: Pagination) {
    try {
      this.loading = true;
      this.productPage = await this.productService
        .bySubCategorySlug(slug, pagi)
        .toPromise();
      this.productList.push(...this.productPage.docs);

      //update banner image
      this.bannerUrl =
        this.subCategoryService.imageLink + '/image-slug/' + this.slug;
      // window.scroll(0, 0);
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
      this.productList.push(...this.productPage.docs);

      //Update banner image
      this.bannerUrl =
        this.subSubCategoryService.imageLink +
        '/image/' +
        this.subSubCategory._id +
        '/0';
      window.scroll(100, 0);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
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
  onScroll() {
    if (!this.productPage) {
      this.getProductBySubCategory(this.slug, new Pagination());
    } else if (this.productPage.nextPage) {
      this.handlePagination(this.productPage.nextPage);
    }
  }
  //----------------------------------------------deletable ---------------------------
  // onChangePage(page) {
  //   if (this.sub_category) {
  //     this.getProductBySubCategory(this.sub_category.slug, new Pagination());
  //   }
  //   //else {
  //   //   this.getProductByCategory(
  //   //     this.slug,
  //   //     page.pageNumber,
  //   //     page.limit,
  //   //     page.sort,
  //   //     page.order
  //   //   );
  //   // }
  // }

  // onShortDetails(targetModal, product: Product) {
  //   this.product = product;
  //   if (
  //     this.cart &&
  //     this.cart.product_list &&
  //     this.cart.product_list.length > 0
  //   ) {
  //     this.product_list_cart = this.cart.product_list.find(
  //       (pl) => pl.product._id == product._id
  //     );
  //   }
  //   this.modalService.open(targetModal, {
  //     centered: true,
  //     backdrop: 'static',
  //     size: 'xl',
  //     scrollable: true,
  //   });
  // }

  // async onAddToCart(event) {
  //   this.errorMessage = '';
  //   this.loading = true;
  //   try {
  //     const resp = await this.cartService.addToCart(event).toPromise();
  //     this.cartService._cartSource.next(resp);
  //   } catch (error) {
  //     this.errorMessage = error;
  //   }
  //   this.loading = false;
  // }

  // onCloseClick() {
  //   this.errorMessage = '';
  // }
}
