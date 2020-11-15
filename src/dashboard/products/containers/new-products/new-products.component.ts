import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/product.service';
import { UtilService } from 'src/service/util.service';
import { ProductPage } from 'src/shared/models/product.model';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  productsPage: ProductPage;

  loading = false;
  message = '';
  errorMessage = '';

  imageUrl = '';
  thumbUrl = '';
  
  constructor(private productService: ProductService, private utilService: UtilService) {
    this.imageUrl = this.productService.productLink + '/image/';
    this.thumbUrl = this.productService.productLink + '/thumb/';
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  onClose() {
    this.message = '';
    this.errorMessage = '';
  }

  async getAllProducts(page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.productsPage = await this.productService.getAll(page, limit, sort, order).toPromise();
      this.productsPage.docs.sort(this.utilService.dynamicSortObject('priority'));
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onChangePage(page) {
    this.getAllProducts(page.pageNumber, page.limit, page.sort, page.order);
  }

  async onToggleFree(id) {
    if (confirm('Are you sure to ' + (status ? 'Remove New Product' : 'Make New Product') + ' ?')) {
      try {
        const res = await this.productService.toggleNewProducts(id).toPromise();
        this.productsPage.docs.splice(this.productsPage.docs.findIndex(s => s._id == id), 1, res);
      } catch (err) {
        this.errorMessage = err;
      }
    }
  }

}
