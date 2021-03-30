import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WarehouseService } from 'src/service/warehouse.service';
import { Pagination } from 'src/shared/models/pagination.model';
import { Warehouse, WarehousePage } from 'src/shared/models/warehouse.model';

@Component({
  selector: 'warehouse-side-list',
  templateUrl: './warehouse-side-list.component.html',
  styleUrls: ['./warehouse-side-list.component.scss'],
})
export class WarehouseSideListComponent implements OnInit {
  @Output() select = new EventEmitter<Warehouse>();

  warehouse: Warehouse;
  warehousePage: WarehousePage;
  loading = false;

  constructor(private warehouseService: WarehouseService) {}

  ngOnInit(): void {
    this.getWarehouseList(new Pagination());
  }

  async getWarehouseList(pagi: Pagination) {
    this.loading = true;
    try {
      this.warehousePage = await this.warehouseService
        .getList(pagi)
        .toPromise();
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  refreshWarehouseData({ page, limit, sort, order, search }) {
    this.getWarehouseList(new Pagination(page, limit, sort, order, search));
  }

  onSelectWarehouse(warehouse: Warehouse) {
    this.select.emit(warehouse);
  }
}
