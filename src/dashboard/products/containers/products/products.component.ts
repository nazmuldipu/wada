import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/product.service';
import { ToastService } from 'src/service/toast.service';
import { CategoryTree } from 'src/shared/data/category';
import { Product, ProductPage } from 'src/shared/models/product.model';
import { BrandsObjects } from 'src/shared/data/brands';
import { ProductDetailsService } from 'src/service/product-details.service';
import { UtilService } from 'src/service/util.service';
import { Pagination } from 'src/shared/models/pagination.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  product: Product;
  productPage: ProductPage;

  imageUrl = '';
  thumbUrl = '';
  message = '';
  errorMessage = '';
  loading = false;

  constructor(private service: ProductService) {
    this.imageUrl = this.service.imageLink + '/image/';
    this.thumbUrl = this.service.imageLink + '/thumb/';
  }

  ngOnInit(): void {
    this.getList(new Pagination());
  }

  async getList(pagi: Pagination) {
    try {
      this.loading = true;
      this.productPage = await this.service.getList(pagi).toPromise();
      this.loading = false;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }
  refreshData({ page, limit, sort, order, search }) {
    this.getList(new Pagination(page, limit, sort, order, search));
  }

  onEdit(event) {
    console.log('onEdit', event);
  }

  async onToogleActive(id) {
    try {
      this.loading = true;
      const resp = await this.service.toggleActive(id).toPromise();
      const index = this.productPage.docs.findIndex((p) => p._id == id);
      this.productPage.docs.splice(index, 1, resp);
      this.loading = false;
    } catch (err) {}
  }
}
