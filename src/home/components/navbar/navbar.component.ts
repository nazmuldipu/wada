import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/service/cart.service';
import { SubCategoryService } from 'src/service/sub-cateogry.service';
import { CategoryTree } from 'src/shared/data/category';
import { Cart } from 'src/shared/models/cart.model';
import { Pagination } from 'src/shared/models/pagination.model';
import { SubCategoryPage } from 'src/shared/models/sub-category.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  subCategoryPage: SubCategoryPage;

  categoryTree = CategoryTree;
  show = false;
  cart: Cart;

  constructor(
    private subCategoryService: SubCategoryService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((data) => {
      this.cart = data;
    });

    this.getSubCategoriesBySlug('organic-food', new Pagination(1, 100));
  }

  async getSubCategoriesBySlug(slug: string, pagi: Pagination) {
    try {
      this.subCategoryPage = await this.subCategoryService
        .byCategorySlug(slug, pagi)
        .toPromise();
    } catch (err) {}
  }

  onCartClick() {
    console.log('onCartClick');
    this.router.navigate(['/cart']);
  }
}
