import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/service/brand.service';
import { CategoryService } from 'src/service/category.service';
import { ProductService } from 'src/service/product.service';
import { SubCategoryService } from 'src/service/sub-cateogry.service';
import { SubSubCategoryService } from 'src/service/sub-sub-category.service';
import { BrandPage } from 'src/shared/models/brand.model';
import { CategoryPage } from 'src/shared/models/category.model';
import { Pagination } from 'src/shared/models/pagination.model';
import { Product, ProductPage } from 'src/shared/models/product.model';
import { SubCategoryPage } from 'src/shared/models/sub-category.model';
import { SubSubCategoryPage } from 'src/shared/models/sub-sub-category.model';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss'],
})
export class NewProductsComponent implements OnInit {
  id;
  product: Product;
  productsPage: ProductPage;
  brandPage: BrandPage;
  categoryPage: CategoryPage;
  subCategoryPage: SubCategoryPage;
  subSubCategoryPage: SubSubCategoryPage;

  imageUrl = '';
  thumbUrl = '';
  loading = false;
  errorMessage = '';

  constructor(
    private service: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private subSubCategoryService: SubSubCategoryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.imageUrl = this.service.imageLink + '/image/';
    this.thumbUrl = this.service.imageLink + '/thumb/';

    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getCategoryList(new Pagination(1, 1000, 'priority'));
    this.getBrandList(new Pagination(1, 1000, 'priority'));
    if (this.id) {
      this.getProduct(this.id);
    }
  }

  async getProduct(id) {
    try {
      this.loading = true;
      this.product = await this.service.get(id).toPromise();
      this.product._id = id;
      this.loading = false;
    } catch (err) {}
  }

  async getCategoryList(pagi: Pagination) {
    try {
      this.loading = true;
      this.categoryPage = await this.categoryService.getList(pagi).toPromise();
      this.loading = false;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  async getBrandList(pagi: Pagination) {
    try {
      this.loading = true;
      this.brandPage = await this.brandService.getList(pagi).toPromise();
      this.loading = false;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  async getSubCategoryList(slug: string, pagi: Pagination) {
    try {
      this.loading = true;
      this.subCategoryPage = await this.subCategoryService
        .byCategorySlug(slug, pagi)
        .toPromise();
      this.loading = false;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  handleCateogySelect(event) {
    this.getSubCategoryList(event, new Pagination(1, 1000, 'priority'));
  }

  async getSubSubCategoryList(slug: string, pagi: Pagination) {
    try {
      this.loading = true;
      this.subSubCategoryPage = await this.subSubCategoryService
        .bySubCategorySlug(slug, pagi)
        .toPromise();
      this.loading = false;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  handleSubCateogySelect(event) {
    this.getSubSubCategoryList(event, new Pagination(1, 1000, 'priority'));
  }

  async onCreate(product: Product) {
    try {
      this.loading = true;
      const resp = await this.service.create(product).toPromise();
      // this.subSubCategoryPage.docs.push(resp);
      this.loading = false;
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onUpdate(product: Product) {
    try {
      this.loading = true;
      const resp = await this.service.update(this.id, product).toPromise();
      // this.getList(new Pagination());
      this.loading = false;
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onDelete(id) {
    console.log(id);
    if (confirm('Are you sure to delete')) {
      try {
        const resp = await this.service.delete(id).toPromise();
        const index = this.subSubCategoryPage.docs.findIndex(
          (f) => f._id === id
        );
        if (index > -1) {
          this.subSubCategoryPage.docs.splice(index, 1);
        }
      } catch (err) {
        this.errorMessage = err;
      }
      this.clear();
    }
  }

  clear() {
    this.product = null;
    this.errorMessage = '';
    this.loading = false;
  }
}
