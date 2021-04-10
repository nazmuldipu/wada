import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/service/brand.service';
import { Brand, BrandPage } from 'src/models/brand.model';
import { Pagination } from 'src/models/pagination.model';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  brand: Brand;
  brandPage: BrandPage;

  imageUrl = '';
  loading = false;
  errorMessage = '';

  constructor(private service: BrandService) {
    this.imageUrl = this.service.imageLink + '/image/';
  }

  ngOnInit(): void {
    this.getList(new Pagination());
  }

  async getList(pagi: Pagination): Promise<void> {
    try {
      this.loading = true;
      this.brandPage = await this.service.getList(pagi).toPromise();
      this.clear();
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  refreshData({ page, limit, sort, order, search }): void {
    this.getList(new Pagination(page, limit, sort, order, search));
  }

  onEdit(event): void {
    const value = this.brandPage.docs.find((b) => b._id === event);
    this.brand = { ...value };
  }

  async onCreate(brand: Brand): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.service.create(brand).toPromise();
      this.brandPage.docs.push(resp);
      this.clear();
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onUpdate(brand: Brand): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.service.update(this.brand._id, brand).toPromise();
      this.getList(new Pagination());
      this.clear();
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onDelete(id): Promise<void> {
    if (confirm('Are you sure to delete')) {
      try {
        this.loading = true;
        const resp = await this.service.delete(id).toPromise();
        const index = this.brandPage.docs.findIndex((f) => f._id === id);
        if (index > -1) {
          this.brandPage.docs.splice(index, 1);
        }
        this.clear();
      } catch (err) {
        this.errorMessage = err;
      }
      this.clear();
    }
  }

  clear(): void {
    this.brand = null;
    this.errorMessage = '';
    this.loading = false;
  }
}
