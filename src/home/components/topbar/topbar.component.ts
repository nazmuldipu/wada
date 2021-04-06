import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { CartService } from 'src/service/cart.service';
import { UserService } from 'src/service/user.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  loading = false;
  collapsed = true;
  errorMessage = '';

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    public authService: AuthService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.getUserProfile();
    }
  }

  async onLogin(value): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.authService
        .authenticate(value.phone, value.password)
        .toPromise();
      localStorage.setItem('token', resp.token);

      await this.getUserProfile();
      const role = localStorage.getItem('role');
      if (role === 'ADMIN') {
        this.router.navigateByUrl('/dashboard');
      } else if (role === 'USER') {
        const returnUrl =
          this.activeRoute.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.router.navigateByUrl(returnUrl);
      }
      this.loading = false;

    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async getUserProfile(): Promise<void> {
    try {
      const user = await this.userService.getUserProfile().toPromise();
      this.userService.userSource.next(user);
      localStorage.setItem('role', user.role);

      if (user.role === 'USER') {
        await this.cartService.getMyCart();
      }

    } catch (err) {

    }
  }

  onLogout(): void {
    console.log('onLogout');
    this.authService.logout();
    this.cartService.cartSource.next(null);
  }

  onClickCloseErrorMessage(): void {
    this.errorMessage = '';
  }
}
