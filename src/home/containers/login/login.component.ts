import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;
  constructor(
    private router: Router,
    public authService: AuthService,
    private activeRoute: ActivatedRoute,
    private cartService: CartService) { }

  async onLogin(value): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.authService.authenticate(value.phone, value.password).toPromise();
      localStorage.setItem('token', resp.token);
      this.loading = false;

      const returnUrl =
        this.activeRoute.snapshot.queryParamMap.get('returnUrl') ||
        '/';
      localStorage.setItem('returnUrl', returnUrl);
      this.router.navigateByUrl(returnUrl);
    } catch (err) {
      console.log(err);
    }
  }
}
