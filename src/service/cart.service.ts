import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Cart } from 'src/shared/models/cart.model';
import { AuthService } from './auth.service';
import { RestDataService } from './rest-data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartUrl = 'api/carts';

  _cartSource = new BehaviorSubject<Cart>({} as Cart);
  cart$ = this._cartSource.asObservable();

  constructor(private dataSource: RestDataService, public auth: AuthService, private router: Router) {
    // if (this.auth.isAuthenticated())
      // this.getMyCart();
  }

  addToCart(cart): Observable<Cart> {
    if (this.auth.isAuthenticated())
      return this.dataSource.sendRequest('POST', this.cartUrl + '/add', cart, true, null);
    else
      this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
  }

  // getMyCart() {
  //   this.dataSource.sendRequest('GET', this.cartUrl + '/my', null, true, null)
  //     .subscribe(
  //       (data) => {
  //         this._cartSource.next(data);
  //       },
  //       (error) => {
  //         console.log('get Cart ERROR');
  //         console.log(error);
  //       }
  //     );
  // }

  getCart(): Observable<Cart> {
    return this.dataSource.sendRequest('GET', this.cartUrl + '/my', null, true, null);
  }
}
