import { Component, OnInit } from '@angular/core';
import { CategoryTree } from '../../../shared/data/category';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoryTree = CategoryTree;

  constructor() { }

  ngOnInit(): void {
  }

}
