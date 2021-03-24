import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  loading = false;
  constructor(private router: Router, public authService: AuthService, 
    private activeRoute: ActivatedRoute, private cartService: CartService) { }

  async onLogin(value) {
    console.log('On Login ', value);
    this.loading = true;
    this.authService.authenticate(value.phone, value.password).subscribe(data => {
      if (data) {
        this.loading = false;
        localStorage.setItem('token', data.token);
        let returnUrl =
          this.activeRoute.snapshot.queryParamMap.get('returnUrl') ||
          '/';
        localStorage.setItem('returnUrl', returnUrl);
        // this.cartService.getMyCart();
        // let returnUrl = localStorage.getItem('returnUrl') || '/dashboard';
        this.router.navigateByUrl(returnUrl);
      }
    });
  }

}
