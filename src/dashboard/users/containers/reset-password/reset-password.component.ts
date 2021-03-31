import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { Pagination } from 'src/models/pagination.model';
import { User, UserPage } from 'src/models/user.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  user: User;
  userPage: UserPage;

  loading = false;
  message = '';
  errorMessage = '';

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getUserList(new Pagination());
  }

  async getUserList(pagi: Pagination) {
    this.loading = true;
    try {
      this.userPage = await this.service.getList(pagi).toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  refreshData({ page, limit, sort, order, search }) {
    this.getUserList(new Pagination(page, limit, sort, order, search));
  }

  onEdit(id) {
    this.user = this.userPage.docs.find((u) => u._id == id);
  }

  async onPasswordChange(value) {
    this.loading = true;
    try {
      const resp = await this.service
        .resetPassword(this.user._id, value.password)
        .toPromise();
      console.log(resp);
      this.message = 'Password changed';
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onClose() {
    this.user = null;
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }
}
