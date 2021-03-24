import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/service/brand.service';
import { Brand, BrandPage } from 'src/shared/models/brand.model';

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
    this.getList();
  }

  async getList(
    page: number = 1,
    limit: number = 8,
    sort: string = 'name',
    order: string = 'asc',
    param: string = ''
  ) {
    try {
      this.loading = true;
      this.brandPage = await this.service
        .getList(page, limit, sort, order, param)
        .toPromise();
      this.loading = false;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }
  
  refreshData({ page, limit, sort, order, search }) {
    this.getList(page, limit, sort, order, search);
  }

  onEdit(event) {
    const value = this.brandPage.docs.find((b) => b._id == event);
    this.brand = { ...value };
  }

  async onCreate(brand: Brand) {
    console.log('onCreate', brand);
    try {
      this.loading = true;
      const resp = await this.service.create(brand).toPromise();
      this.brandPage.docs.push(resp);
      this.loading = false;
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onUpdate(brand: Brand) {
    console.log('onUpdate ', brand);
    try {
      this.loading = true;
      const resp = await this.service.update(this.brand._id, brand).toPromise();
      this.getList();
      this.loading = false;
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onDelete(id) {
    if (confirm('Are you sure to delete')) {
      try {
        const resp = await this.service.delete(id).toPromise();
        const index = this.brandPage.docs.findIndex((f) => f._id === id);
        if (index > -1) {
          this.brandPage.docs.splice(index, 1);
        }
      } catch (err) {
        this.errorMessage = err;
      }
      this.clear();
    }
  }

  clear() {
    this.brand = null;
    this.errorMessage = '';
    this.loading = false;
  }
}
