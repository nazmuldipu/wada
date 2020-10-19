import { Component, OnInit } from '@angular/core';
import { StorehouseService } from 'src/service/storehouse.service';
import { ToastService } from 'src/service/toast.service';
import { Storehouse, StorehousePage } from 'src/shared/models/storehouse.model';

@Component({
  selector: 'app-storehouse',
  templateUrl: './storehouse.component.html',
  styleUrls: ['./storehouse.component.scss']
})
export class StorehouseComponent implements OnInit {

  storehouse: Storehouse;
  storehousePage: StorehousePage;
  storehouses: Storehouse[] = [];

  message = '';
  errorMessage = '';
  loading = false;
  showStorehouseForm = false;

  constructor(private storehouseService: StorehouseService, public toastService: ToastService) { }

  ngOnInit(): void {
    this.getAllStorehouse();
  }

  async getAllStorehouse(page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.loading = true;
    try {
      this.storehousePage = await this.storehouseService.getAll(page, limit, sort, order).toPromise();
      this.storehouses = this.storehousePage.docs;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onChangePage(page) {
    this.getAllStorehouse(page.pageNumber, page.limit, page.sort, page.order);
  }

  async onSearch(event) {
    if (event.length > 2) {
      this.loading = true;
      this.storehousePage = null;
      try {
        await this.storehouseService.search(event.toLowerCase()).subscribe(data => {
          this.storehouses = data ? data : [];
        });
      } catch (error) {
        this.errorMessage = error;
      }
      this.loading = false
    } else if (event.length == 0) {
      this.getAllStorehouse();
    }
  }

  async onCreate(storehouse: Storehouse) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      const resp = await this.storehouseService.create(storehouse).toPromise();
      this.message = 'Storehouse created';
      this.storehousePage.docs.push(resp);
      this.showStorehouseForm = false;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onUpdate(storehouse: Storehouse) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    const sid = this.storehouse._id;
    try {
      const resp = await this.storehouseService.update(sid, storehouse).toPromise();
      this.message = 'Shop updated';
      this.showStorehouseForm = false;
      this.storehouse = null;
      this.getAllStorehouse();
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  onShowStorehouseForm() { this.showStorehouseForm = true; }

  onStorehouseFormCancel() { this.onClose(); }

  onEdit(id) {
    const value = this.storehousePage.docs.find((c) => c._id == id);
    this.storehouse = Object.assign({}, value);
    this.showStorehouseForm = true;
  }

  onDetails(id) {
    const value = this.storehousePage.docs.find((c) => c._id == id);
    this.storehouse = Object.assign({}, value);
    this.showStorehouseForm = false;
  }

  onClose() {
    this.storehouse = null;
    this.showStorehouseForm = false;
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }

}
