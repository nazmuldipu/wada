import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryTree } from 'src/shared/data/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  slug;
  categoryTree = CategoryTree;
  subCategory;

  constructor(private activeRoute: ActivatedRoute) {
    this.slug = activeRoute.snapshot.params['slug'];
    this.subCategory = this.categoryTree.category.find(ct => ct.slug == this.slug).sub_category;
  }

  ngOnInit(): void {
  }

}
