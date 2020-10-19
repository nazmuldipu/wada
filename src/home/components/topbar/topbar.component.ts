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
  form: FormGroup;
  errorMessage: string = '';
  loading = false;
  showPassword = false;
  collapsed = true;

  constructor(private fb: FormBuilder, private router: Router,
    private activeRoute: ActivatedRoute, public authService: AuthService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // remember: [false],
    });
  }

  submit() {
    if (this.form.valid) {
      this.errorMessage = '';
      this.loading = true;
      const value = this.form.value;
      this.authService.authenticate(value.phone, value.password).subscribe(
        (data) => {
          if (data) {
            this.loading = false;
            this.form.reset();

            localStorage.setItem('token', data.token);
            let returnUrl =
              this.activeRoute.snapshot.queryParamMap.get('returnUrl') ||
              '/dashboard';
            localStorage.setItem('returnUrl', returnUrl);
            this.cartService.getMyCart();
            // let returnUrl = localStorage.getItem('returnUrl') || '/dashboard';
            this.router.navigateByUrl(returnUrl);
          }
        },
        (err) => {
          if (err) {
            this.loading = false;
            this.errorMessage = err;
          }
        }
      );
    } else {
      this.errorMessage = 'Form data missing';
    }
  }

  onLogout(){
    console.log('onLogout')
    this.authService.logout();
  }

}
