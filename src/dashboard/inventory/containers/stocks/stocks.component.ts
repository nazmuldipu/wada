import { Component, OnInit } from '@angular/core';
import { ProductStockService } from 'src/service/product-stock.service';
import { StorehouseService } from 'src/service/storehouse.service';
import { Storehouse, StorehousePage } from 'src/shared/models/storehouse.model';
import { ProductStock, ProductStockPage } from 'src/shared/models/product-stock.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  storehouse: Storehouse;
  storehousePage: StorehousePage;
  productStock: ProductStock;
  productStockPage: ProductStockPage;

  loading = false;
  message = '';
  errorMessage = '';

  constructor(private storehouseService: StorehouseService, private productStockService: ProductStockService) { }

  ngOnInit(): void {
    this.getAllStorehouse();
  }

  async getAllStorehouse(page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.storehousePage = await this.storehouseService.getAll(page, limit, sort, order).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onChangeStorehousePage(page) {
    this.getAllStorehouse(page.pageNumber, page.limit, page.sort, page.order)
  }


  onSelectStorehouse(id) {
    const value = this.storehousePage.docs.find((s) => s._id == id);
    this.storehouse = Object.assign({}, value);
    this.getProductStockbyStorehouseId(id);
  }

  async getProductStockbyStorehouseId(id: string, page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.productStockPage = await this.productStockService.getProductStockByStorehouseId(id).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onChangeProductStockPage(id, page) {
    this.getProductStockbyStorehouseId(id, page.pageNumber, page.limit, page.sort, page.order)
  }

  onDetails(id) {

  }

  onClose(value) {
    switch (value) {
      case 'details':
        this.productStock = null;
        break;
      case 'list':
        this.productStockPage = null;
        this.storehouse = null;
        break;
    }
  }

}
