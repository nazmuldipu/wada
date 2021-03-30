import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { Category, CategoryPage } from 'src/shared/models/category.model';
import { Pagination } from 'src/shared/models/pagination.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  category: Category;
  categoryPage: CategoryPage;

  imageUrl = '';
  loading = false;
  errorMessage = '';

  constructor(private service: CategoryService) {
    this.imageUrl = this.service.imageLink + '/image/';
  }

  ngOnInit(): void {
    this.getList(new Pagination());
  }

  async getList(pagi: Pagination) {
    try {
      this.loading = true;
      this.categoryPage = await this.service.getList(pagi).toPromise();
      this.clear();
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  refreshData({ page, limit, sort, order, search }) {
    this.getList(new Pagination(page, limit, sort, order, search));
  }

  onEdit(event) {
    const value = this.categoryPage.docs.find((b) => b._id == event);
    this.category = { ...value };
  }

  async onCreate(category: Category) {
    try {
      this.loading = true;
      const resp = await this.service.create(category).toPromise();
      this.categoryPage.docs.push(resp);
      this.clear();
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onUpdate(category: Category) {
    try {
      this.loading = true;
      const resp = await this.service
        .update(this.category._id, category)
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
        const index = this.categoryPage.docs.findIndex((f) => f._id === id);
        if (index > -1) {
          this.categoryPage.docs.splice(index, 1);
        }
        this.clear();
      } catch (err) {
        this.errorMessage = err;
      }
      this.clear();
    }
  }

  clear() {
    this.category = null;
    this.errorMessage = '';
    this.loading = false;
  }
}
