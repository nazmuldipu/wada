import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  loading = false;
  showForm = false;
  errMsg = '';
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  async getProfile(): Promise<void> {
    try {
      const resp = await this.service.getUserProfile().toPromise();
      this.user = resp;
    } catch (err) {
      console.log(err);
    }
  }

  async onUpdate(event): Promise<void> {
    try {
      this.loading = true;
      const resp = await this.service.updateProfile(event).toPromise();
      this.getProfile();
      this.showForm = false;
    } catch (err) {
      this.errMsg = err.message;
    }
    this.loading = false;
  }
  onClose(){
    this.showForm = false;
  }

}
