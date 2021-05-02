import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/models/pagination.model';
import { User, UserPage } from 'src/models/user.model';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  userPage: UserPage;

  loading = false;
  message = '';
  errMsg = '';

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getUserList(new Pagination());
  }

  async getUserList(pagi: Pagination) {
    this.loading = true;
    try {
      this.userPage = await this.service.getList(pagi).toPromise();
    } catch (error) {
      this.errMsg = error;
    }
    this.loading = false;
  }

  refreshData({ page, limit, sort, order, search }) {
    this.getUserList(new Pagination(page, limit, sort, order, search));
  }

  async onEdit(id) {
    this.loading = true;
    try {
      this.user = await this.service.get(id).toPromise();
      this.user._id = id;
    } catch (err) {
      this.errMsg = err.message;
    }
    this.loading = false;
    // this.user = this.userPage.docs.find((u) => u._id == id);
  }

  async onUpdate(uid, event): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.service.updateProfileByAdmin(uid, event).toPromise();
      const index = this.userPage.docs.findIndex(u => u._id == uid);
      if (index > 0) {
        this.userPage.docs.splice(index, 1, resp);
      }
      this.user = null;
    } catch (err) {
      this.errMsg = err.message;
    }
    this.loading = false;
  }

  onClose() {
    this.message = '';
    this.errMsg = '';
    this.loading = false;
  }

}
