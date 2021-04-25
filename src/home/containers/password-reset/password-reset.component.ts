import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent{
  phone = '';

  loading = false;
  msg = '';
  errMsg = '';

  constructor(private service: UserService) { }

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

  async onResetPassword(event) {
    if (event.password !== event.confirmPassword) {
      this.errMsg = "Password didn't matched"
    } else {
      try {
        this.loading = true;
        const resp = await this.service.resetOTPPassword({ ...event, phone: this.phone }).toPromise();
        this.msg = resp.message;
        console.log(resp);
        this.loading = false;
      } catch (errMsg) {
        this.errMsg = errMsg.message;
      }
    }
  }

}
