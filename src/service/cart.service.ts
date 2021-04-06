import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Cart } from 'src/models/cart.model';
import { AuthService } from './auth.service';
import { RestDataService } from './rest-data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = 'api/carts';

  // tslint:disable-next-line: variable-name
  cartSource = new BehaviorSubject<Cart>({} as Cart);
  cart$ = this.cartSource.asObservable();

  constructor(private dSrc: RestDataService, public auth: AuthService, private router: Router) {
    if (this.auth.isAuthenticated()) {
      this.getMyCart();
    }
  }

  addToCart(cart): Observable<Cart> {
    if (this.auth.isAuthenticated()) {
      return this.dSrc.sendRequest('POST', this.url + '/add', cart, true, null);
    }
    else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
    }
  }

  getCart(): Observable<Cart> {
    return this.dSrc.sendRequest('GET', this.url + '/my', null, true, null);
  }

  removeFromCart(pid): Observable<Cart> {
    return this.dSrc.sendRequest('PATCH', this.url + `/remove/${pid}`, null, true, null);
  }

  async getMyCart(): Promise<void> {
    try {
      const resp = await this.dSrc.sendRequest('GET', this.url + '/my', null, true, null).toPromise();
      this.cartSource.next(resp);
    } catch (err) {
      console.log('get Cart ERROR');
      console.log(err);
    }
  }

}
