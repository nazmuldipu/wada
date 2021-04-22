import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  loding = false;
  errMsg = '';
  msg = '';

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  async onCreate(event): Promise<void> {
    try {
      this.loding = true;
      this.errMsg = '';
      this.msg = '';
      const resp = await this.service.changePassword(event).toPromise();
      this.msg = 'Congratulation! Password changed successfully';
    } catch (err) {
      this.errMsg = err.message;
    }
    this.loding = false;
  }

}
