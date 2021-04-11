import { Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/models/feature.model';

@Component({
  selector: 'home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {
  @Input() hero: Feature;
  @Input() imageUrl: string;
  @Input() isAuthenticated: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
