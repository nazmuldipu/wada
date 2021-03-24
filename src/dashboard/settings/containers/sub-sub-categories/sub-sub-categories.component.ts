import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { SubCateogryService } from 'src/service/sub-cateogry.service';
import { SubSubCategoryService } from 'src/service/sub-sub-category.service';
import { CategoryPage } from 'src/shared/models/category.model';
import { Pagination } from 'src/shared/models/pagination.model';
import { SubCategoryPage } from 'src/shared/models/sub-category.model';
import {
  SubSubCategory,
  SubSubCategoryPage,
} from 'src/shared/models/sub-sub-category.model';

@Component({
  selector: 'app-sub-sub-categories',
  templateUrl: './sub-sub-categories.component.html',
  styleUrls: ['./sub-sub-categories.component.scss'],
})
export class SubSubCategoriesComponent implements OnInit {
  subSubCategory: SubSubCategory;
  subSubCategoryPage: SubSubCategoryPage;
  subCategoryPage: SubCategoryPage;
  categoryPage: CategoryPage;

  imageUrl = '';
  loading = false;
  errorMessage = '';

  constructor(
    private service: SubSubCategoryService,
    private subCategoryService: SubCateogryService,
    private categoryService: CategoryService
  ) {
    this.imageUrl = this.service.imageLink + '/image/';
  }

  ngOnInit(): void {
    this.getList(new Pagination());
    this.getCategoryList(new Pagination(1, 1000, 'priority'));
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

  async getList(pagi: Pagination) {
    try {
      this.loading = true;
      this.subSubCategoryPage = await this.service.getList(pagi).toPromise();
      this.loading = false;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  refreshData({ page, limit, sort, order, search }) {
    this.getList(new Pagination(page, limit, sort, order, search));
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

  onEdit(event) {
    const value = this.subSubCategoryPage.docs.find((b) => b._id == event);
    this.subSubCategory = { ...value };
  }

  async onCreate(subSubCategory: SubSubCategory) {
    try {
      this.loading = true;
      const resp = await this.service.create(subSubCategory).toPromise();
      this.subSubCategoryPage.docs.push(resp);
      this.loading = false;
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onUpdate(subSubCategory: SubSubCategory) {
    try {
      this.loading = true;
      const resp = await this.service
        .update(this.subSubCategory._id, subSubCategory)
        .toPromise();
      this.getList(new Pagination());
      this.loading = false;
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onDelete(id) {
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
    this.subSubCategory = null;
    this.errorMessage = '';
    this.loading = false;
  }
}
