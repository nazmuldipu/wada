import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  loading = false;
  collapsed = true;
  errorMessage = '';

  constructor(private router: Router,
    private activeRoute: ActivatedRoute, public authService: AuthService,
    private cartService: CartService) { }

  ngOnInit(): void {
    
  }

  

  async onLogin(value){
    console.log(value);
    this.loading = true;
    try {
      const resp = await this.authService.authenticate(value.phone, value.password).toPromise();
      console.log(resp);
      this.loading = false;
      localStorage.setItem('token', resp.token);
      let returnUrl =  this.activeRoute.snapshot.queryParamMap.get('returnUrl') ||'/dashboard';
      localStorage.setItem('returnUrl', returnUrl);
      this.cartService.getMyCart();
      this.router.navigateByUrl(returnUrl);
    } catch (err) {
      this.errorMessage = err;
      console.log(this.errorMessage);
    }
  }

  submit() {
    // if (this.form.valid) {
    //   this.errorMessage = '';
    //   this.loading = true;
    //   const value = this.form.value;
    //   this.authService.authenticate(value.phone, value.password).subscribe(
    //     (data) => {
    //       if (data) {
    //         this.loading = false;
    //         this.form.reset();

    //         localStorage.setItem('token', data.token);
    //         let returnUrl =
    //           this.activeRoute.snapshot.queryParamMap.get('returnUrl') ||
    //           '/dashboard';
    //         localStorage.setItem('returnUrl', returnUrl);
    //         this.cartService.getMyCart();
    //         // let returnUrl = localStorage.getItem('returnUrl') || '/dashboard';
    //         this.router.navigateByUrl(returnUrl);
    //       }
    //     },
    //     (err) => {
    //       if (err) {
    //         this.loading = false;
    //         this.errorMessage = err;
    //       }
    //     }
    //   );
    // } else {
    //   this.errorMessage = 'Form data missing';
    // }
  }

  onLogout(){
    console.log('onLogout')
    this.authService.logout();
  }

  onClickCloseErrorMessage(){
    this.errorMessage = '';
  }

}
