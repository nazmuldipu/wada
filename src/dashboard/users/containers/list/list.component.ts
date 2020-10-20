import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  user: User;
  users: User[] = [];
  message = '';
  errorMessage = '';

  loading = false;
  showUserForm = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  async getAllUser() {
    this.loading = true;
    try {
      this.users = await this.userService.getAll().toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onShowUserForm() {
    this.showUserForm = true;
  }

  onUserFormCancel() {
    this.onClose();
  }

  onEdit(id) {
    const value = this.users.find((u) => u._id == id);
    this.user = Object.assign({}, value);
    this.showUserForm = true;
  }

  async onCreate(user: User) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      const resp = await this.userService.userRegistration(user).toPromise();
      this.message = 'Category created';
      this.users.push(resp);
      this.showUserForm = false;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onUpdate(user: User) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    const uid = this.user._id;
    try {
      const resp = await this.userService.update(uid, user).toPromise();
      this.message = 'User updated';
      this.user = null;
      this.showUserForm = false;
      this.user = null;
      this.getAllUser();
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  onClose() {
    this.user = null;
    this.showUserForm = false;
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }
}
