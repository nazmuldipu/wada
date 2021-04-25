import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/service/request.service';
import { ProductRequest, ProductRequestPage } from 'src/models/request.model';
import { Pagination } from 'src/models/pagination.model';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  requestPage: ProductRequestPage;
  request: ProductRequest;

  loading = false;
  errMsg = '';

  constructor(private service: RequestService) { }

  ngOnInit(): void {
    this.getList(new Pagination(1, 8, 'createdAt'));
  }

  async getList(pagi: Pagination): Promise<void> {
    try {
      this.loading = true;
      this.requestPage = await this.service.getList(pagi).toPromise();
      this.loading = false;
    } catch (err) {
      this.errMsg = err.message;
    }
  }

  onSelect(id) {
    this.request = this.requestPage.docs.find(re => re._id == id);
  }

  async updateStatus(rid, status) {
    try {
      this.loading = true;
      const resp = await this.service.update(rid, { status }).toPromise();
      const index = this.requestPage.docs.findIndex((f) => f._id === rid);
      if (index > -1) {
        this.requestPage.docs.splice(index, 1, resp);
      }
      this.loading = false;
      // this.getList(new Pagination(1, 8, 'createdAt'));
    } catch (err) {

    }
  }

  async onDelete(id): Promise<void> {
    if (confirm('Are you sure to delete')) {
      try {
        this.loading = true;
        const resp = await this.service.delete(id).toPromise();
        const index = this.requestPage.docs.findIndex((f) => f._id === id);
        if (index > -1) {
          this.requestPage.docs.splice(index, 1);
        }
        this.clear();
      } catch (err) {
        this.errMsg = err.message;
      }
    }
  }

  clear(): void {
    this.request = null;
    this.errMsg = '';
    this.loading = false;
  }

}
