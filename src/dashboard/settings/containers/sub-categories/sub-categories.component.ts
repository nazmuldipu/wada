import { Component, OnInit } from '@angular/core';
import { SubCateogryService } from 'src/service/sub-cateogry.service';
import { Pagination } from 'src/shared/models/pagination.model';
import {
  SubCategory,
  SubCategoryPage,
} from 'src/shared/models/sub-category.model';
import { CategoryPage } from 'src/shared/models/category.model';
import { CategoryService } from 'src/service/category.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
})
export class SubCategoriesComponent implements OnInit {
  subCategory: SubCategory;
  subCategoryPage: SubCategoryPage;
  categoryPage: CategoryPage;

  imageUrl = '';
  loading = false;
  errorMessage = '';

  constructor(
    private service: SubCateogryService,
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
      this.clear();
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  async getList(pagi: Pagination) {
    try {
      this.loading = true;
      this.subCategoryPage = await this.service.getList(pagi).toPromise();
      this.clear();
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  refreshData({ page, limit, sort, order, search }) {
    this.getList(new Pagination(page, limit, sort, order, search));
  }

  onEdit(event) {
    const value = this.subCategoryPage.docs.find((b) => b._id == event);
    this.subCategory = { ...value };
  }

  async onCreate(subCategory: SubCategory) {
    try {
      this.loading = true;
      const resp = await this.service.create(subCategory).toPromise();
      this.subCategoryPage.docs.push(resp);
      this.clear();
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onUpdate(subCategory: SubCategory) {
    try {
      this.loading = true;
      const resp = await this.service
        .update(this.subCategory._id, subCategory)
        .toPromise();
      this.getList(new Pagination());
      this.clear();
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onDelete(id) {
    if (confirm('Are you sure to delete')) {
      try {
        this.loading = true;
        const resp = await this.service.delete(id).toPromise();
        const index = this.subCategoryPage.docs.findIndex((f) => f._id === id);
        if (index > -1) {
          this.subCategoryPage.docs.splice(index, 1);
        }
        this.clear();
      } catch (err) {
        this.errorMessage = err;
      }
      this.clear();
    }
  }

  clear() {
    this.subCategory = null;
    this.errorMessage = '';
    this.loading = false;
  }
}
