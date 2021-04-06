import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sideNavExpand = true;
  user;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((data) => {
      this.user = data;
      if (Object.keys(data).length === 0) this.getUserProfile();
    });
  }

  async getUserProfile() {
    console.log('Load profile from dashboard');
    try {
      const user = await this.userService.getUserProfile().toPromise();
      this.userService.userSource.next(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  onSidenavExpand(event) {
    this.sideNavExpand = event;
  }
}
