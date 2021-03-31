import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/service/stock.service';
import { WarehouseService } from 'src/service/warehouse.service';
import { Warehouse, WarehousePage } from 'src/models/warehouse.model';
import { Stock, StockPage } from 'src/models/stock.model';
import { Pagination } from 'src/models/pagination.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
})
export class StocksComponent implements OnInit {
  warehouse: Warehouse;
  stock: Stock;
  stockPage: StockPage;

  loading = false;
  message = '';
  errorMessage = '';

  constructor(private service: StockService) {}

  ngOnInit(): void {}

  onWarehouseSelect(warehouse: Warehouse) {
    this.warehouse = warehouse;
    console.log(this.warehouse);
    this.getProductStockbyWarehouseId(warehouse._id, new Pagination());
  }

  async getProductStockbyWarehouseId(wid, pagi: Pagination) {
    this.loading = true;
    try {
      this.stockPage = await this.service.byWarehouseId(wid, pagi).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }
  onRefresh(wid, { page, limit, sort, order, search }) {
    this.getProductStockbyWarehouseId(
      wid,
      new Pagination(page, limit, sort, order, search)
    );
  }

  onClose() {
    this.stockPage = null;
    this.warehouse = null;
  }

  onPrint() {
    (window as any).print();
  }
}
