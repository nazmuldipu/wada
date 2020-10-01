import { Component, OnInit } from '@angular/core';
import { CategoryTree } from 'src/shared/data/category';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  categoryTree = CategoryTree;

  constructor() { }

  ngOnInit(): void {
  }

}
