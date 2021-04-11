import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/service/cart.service';
import { SubCategoryService } from 'src/service/sub-cateogry.service';
import { CategoryTree } from 'src/shared/data/category';
import { Cart } from 'src/models/cart.model';
import { Pagination } from 'src/models/pagination.model';
import { SubCategoryPage } from 'src/models/sub-category.model';
import { Feature } from 'src/models/feature.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() features: Feature[];

  subCategoryPage: SubCategoryPage;

  categoryTree = CategoryTree;
  show = false;
  cart: Cart;

  constructor(
    private subCategoryService: SubCategoryService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.cartService.cart$.subscribe((data) => {
      this.cart = data;
    });

    this.getSubCategoriesBySlug('organic-food', new Pagination(1, 100));
  }

  async getSubCategoriesBySlug(slug: string, pagi: Pagination): Promise<void> {
    try {
      this.subCategoryPage = await this.subCategoryService
        .byCategorySlug(slug, pagi)
        .toPromise();
    } catch (err) { }
  }

  onCartClick(): void {
    console.log('onCartClick');
    this.router.navigate(['/cart']);
  }
}
