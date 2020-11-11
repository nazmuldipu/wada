import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {
  @Input() isAuthenticated: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
