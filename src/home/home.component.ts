import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/models/feature.model';
import { Pagination } from 'src/models/pagination.model';
import { FeaturesService } from 'src/service/features.service';

@Component({
  selector: 'app-home',
  template: `
    <topbar></topbar>
    <navbar [features]="navFeatures"></navbar>
    <router-outlet></router-outlet>
    <fotter></fotter>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navFeatures: Feature[];
  isAuthenticated = false;
  loading = false;
  errMsg = '';

  constructor(private featureService: FeaturesService) { }

  ngOnInit(): void {
    this.getActiveFeatures(new Pagination(1, 100, 'name', 'asc'));
  }

  async getActiveFeatures(pagi: Pagination): Promise<void> {
    try {
      const resp = await this.featureService.activeFeatures(pagi).toPromise();
      this.featureService.featuresSource.next(resp.docs);
      this.featureService.features$.subscribe(data => {
        this.navFeatures = data.filter(f => f.priority === 0);
      })
    } catch (err) {
      this.errMsg = err.message;
    }
  }

}
