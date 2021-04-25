import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.scss']
})
export class ActivateUserComponent implements OnInit {
  phone = '';

  loading = false;
  msg = '';
  errMsg = '';

  constructor(private service: UserService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      if (params.phone) {
        this.phone = params.phone;
      }
    })
  }

  async onSendOTP({ phone }) {
    try {
      this.loading = true;
      const resp = await this.service.sendOTP(phone).toPromise();
      console.log(resp);
      this.phone = phone;
      this.loading = false;
    } catch (err) {
      this.errMsg = err;
    }
  }

  async onOTPActivate(event) {
    if (event.password !== event.confirmPassword) {
      this.errMsg = "Password didn't matched"
    } else {
      try {
        this.loading = true;
        const resp = await this.service.otpActivate({ ...event, phone: this.phone }).toPromise();
        this.msg = resp.message;
        this.router.navigate(['/']);
        this.loading = false;
      } catch (errMsg) {
        this.errMsg = errMsg.message;
      }
    }
  }
}
