import { Component, OnInit } from '@angular/core';
import { FeaturesService } from 'src/service/features.service';
import { FeaturePage, Feature } from 'src/models/feature.model';
import { Pagination } from 'src/models/pagination.model';
import { ProductPage } from 'src/models/product.model';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  feature: Feature;
  featurePage: FeaturePage;
  productPage: ProductPage;

  thumbUrl;
  imageUrl;
  loading = false;
  errMsg = '';

  constructor(private service: FeaturesService, private productService: ProductService) {
    this.imageUrl = this.service.imageLink + '/image/';
    this.thumbUrl = this.productService.imageLink + '/thumb/';
  }

  ngOnInit(): void {
    this.getList(new Pagination());
    this.getProductList(new Pagination());
  }

  async getList(pagi: Pagination): Promise<void> {
    try {
      this.loading = true;
      this.featurePage = await this.service.getList(pagi).toPromise();
      this.loading = false;
    } catch (err) {
      this.errMsg = err.message;
    }
  }

  refreshData({ page, limit, sort, order, search }): void {
    this.getList(new Pagination(page, limit, sort, order, search));
  }

  onEdit(event): void {
    const value = this.featurePage.docs.find((b) => b._id === event);
    this.feature = { ...value };
  }


  async getProductList(pagi: Pagination): Promise<void> {
    try {
      this.loading = true;
      this.productPage = await this.productService.getList(pagi).toPromise();
      this.loading = false;
    } catch (error) {
      this.errMsg = error.message;
    }
  }

  refreshProductData({ page, limit, sort, order, search }): void {
    this.getProductList(new Pagination(page, limit, sort, order, search));
  }

  async onAddProduct(id): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.service.add(this.feature._id, id).toPromise();
      this.updateFeaturPage(resp);
    } catch (err) {
      this.errMsg = err.message;
    }
  }

  async onRemoveProduct(id): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.service.remove(this.feature._id, id).toPromise();
      this.updateFeaturPage(resp);
    } catch (err) {
      this.errMsg = err.message;
    }
  }

  updateFeaturPage(resp: Feature): void {
    this.feature = resp;
    const index = this.featurePage.docs.findIndex(fe => fe._id === resp._id);
    if (index >= 0) {
      this.featurePage.docs.splice(index, 1, resp);
    }
    this.loading = false;
  }

  onClose(): void {
    this.feature = null;
  }
}
