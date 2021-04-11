import { Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/models/feature.model';

@Component({
  selector: 'app-featured-offers',
  templateUrl: './featured-offers.component.html',
  styleUrls: ['./featured-offers.component.scss']
})
export class FeaturedOffersComponent implements OnInit {
  @Input() featured: Feature[];
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
