import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';
import { CategoryTree } from 'src/shared/data/category';
import { Cart } from 'src/shared/models/cart.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  categoryTree = CategoryTree;
  show = false;
  cart: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(data => {
      this.cart = data;
    })
  }

  onCartClick() {
    console.log('onCartClick')
  }

}
