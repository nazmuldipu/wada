import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { User, UserPage } from 'src/shared/models/user.model';
import { Pagination } from 'src/shared/models/pagination.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
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

  async onCreate(user: User) {
    this.loading = true;
    try {
      const resp = await this.service.userRegistration(user).toPromise();
      this.onClose();
      this.message = 'User created';
      this.userPage.docs.push(resp);
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onUpdate(user: User) {
    this.loading = true;
    const uid = this.user._id;
    try {
      const resp = await this.service.update(uid, user).toPromise();
      this.onClose();
      this.message = 'User updated';
      this.getUserList(new Pagination());
    } catch (err) {
      this.errorMessage = err;
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
