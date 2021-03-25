import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/service/warehouse.service';
import { Pagination } from 'src/shared/models/pagination.model';
import { Warehouse, WarehousePage } from 'src/shared/models/warehouse.model';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent implements OnInit {
  warehouse: Warehouse;
  warehousePage: WarehousePage;

  loading = false;
  errorMessage = '';
  mode = 'edit'; //empty, 'details','edit', 'assign'

  constructor(private service: WarehouseService) {}

  ngOnInit(): void {
    this.getList(new Pagination());
  }

  async getList(pagi: Pagination) {
    try {
      this.loading = true;
      this.warehousePage = await this.service.getList(pagi).toPromise();
      this.clear();
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  refreshData({ page, limit, sort, order, search }) {
    this.getList(new Pagination(page, limit, sort, order, search));
  }

  onEdit(event) {
    this.mode = 'edit';
    const value = this.warehousePage.docs.find((b) => b._id == event);
    this.warehouse = { ...value };
  }

  async onCreate(warehouse: Warehouse) {
    console.log('onCreate', warehouse);
    try {
      this.loading = true;
      const resp = await this.service.create(warehouse).toPromise();
      this.warehousePage.docs.push(resp);
      this.clear();
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async onUpdate(warehouse: Warehouse) {
    console.log('onUpdate ', warehouse);
    try {
      this.loading = true;
      const resp = await this.service
        .update(this.warehouse._id, warehouse)
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
        const index = this.warehousePage.docs.findIndex((f) => f._id === id);
        if (index > -1) {
          this.warehousePage.docs.splice(index, 1);
        }
        this.clear();
      } catch (err) {
        this.errorMessage = err;
      }
      this.clear();
    }
  }

  clear() {
    this.warehouse = null;
    this.errorMessage = '';
    this.loading = false;
  }

  onAssign(id) {
    this.mode = 'assign';
    const value = this.warehousePage.docs.find((b) => b._id == id);
    this.warehouse = { ...value };
  }

  async handleAssign(event) {
    try {
      const resp = await this.service
        .assign(event.warehouseId, event.userId)
        .toPromise();
      const index = this.warehousePage.docs.findIndex(
        (wp) => wp._id == event.warehosueId
      );
      this.warehousePage.docs.splice(index, 1, resp);
      console.log(resp);
      this.warehouse = null;
      this.mode = 'edit';
    } catch (err) {}
  }

  onDetails(id){
    this.mode = 'details';
    const value = this.warehousePage.docs.find((b) => b._id == id);
    this.warehouse = { ...value };
  }
}
