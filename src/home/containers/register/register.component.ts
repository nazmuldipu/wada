import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage = '';
  loading = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  async onUserReg(event): Promise<void> {
    this.errorMessage = '';
    try {
      this.loading = true;
      await this.userService.userRegistration(event).toPromise();
      this.router.navigate(['/']);
      this.loading = false;
    } catch (err) {
      console.log(err);
      this.errorMessage = err.message;
    }
  }
}
