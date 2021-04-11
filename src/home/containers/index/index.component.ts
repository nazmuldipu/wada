import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { FeaturesService } from 'src/service/features.service';
import { Pagination } from 'src/models/pagination.model';
import { Feature } from 'src/models/feature.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  imageUrl;
  hero: Feature;
  multibuy: Feature;
  special: Feature;
  featured: Feature[];

  constructor(public authService: AuthService, private featuresService: FeaturesService) {
    this.imageUrl = this.featuresService.imageLink + '/image/';
  }

  ngOnInit(): void {
    this.featuresService.features$.subscribe(data => {
      this.hero = data.find(d => d.priority === 1);
      this.multibuy = data.find(d => d.priority === 2);
      this.special = data.find(d => d.priority === 3);
      this.featured = data.filter(d => d.priority === 4);
    })
  }
}
