import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/models/pagination.model';
import { FeaturesService } from 'src/service/features.service';
import { FeaturePage, Feature } from 'src/models/feature.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  feature: Feature;
  featurePage: FeaturePage;

  imageUrl;
  loading = false;
  errMsg = '';

  constructor(private service: FeaturesService) {
    this.imageUrl = this.service.imageLink + '/image/';
  }

  ngOnInit(): void {
    this.getList(new Pagination(1, 8, 'priority'));
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

  onEdit(event): void {
    const value = this.featurePage.docs.find((b) => b._id === event);
    this.feature = { ...value };
  }

  async onCreate(event): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.service.create(event).toPromise();
      this.featurePage.docs.push(resp);
      this.clear();
    } catch (err) {

    }
  }

  async onUpdate(event): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.service.update(this.feature._id, event).toPromise();
      this.getList(new Pagination());
      this.clear();
    } catch (err) {
      this.errMsg = err.message;
    }
  }

  async onDelete(id): Promise<void> {
    if (confirm('Are you sure to delete')) {
      try {
        this.loading = true;
        const resp = await this.service.delete(id).toPromise();
        const index = this.featurePage.docs.findIndex((f) => f._id === id);
        if (index > -1) {
          this.featurePage.docs.splice(index, 1);
        }
        this.clear();
      } catch (err) {
        this.errMsg = err.message;
      }
    }
  }

  async onActive(id): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.service.activate(id).toPromise();
      const index = this.featurePage.docs.findIndex((p) => p._id === id);
      this.featurePage.docs.splice(index, 1, resp);
      this.loading = false;
    } catch (err) {

    }
  }

  clear(): void {
    this.feature = null;
    this.errMsg = '';
    this.loading = false;
  }
}
