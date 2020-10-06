import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  slug;

  constructor(private activeRoute: ActivatedRoute) {
    this.slug = activeRoute.snapshot.params['slug'];
  }

  ngOnInit(): void {
  }

}
