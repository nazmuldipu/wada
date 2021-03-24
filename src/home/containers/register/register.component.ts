import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  regSuccess = false;
  loading = false;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onUserReg(event) {
    console.log(event);
    this.errorMessage = '';
    this.loading = true;
    this.userService.userRegistration(event).subscribe(
      (data) => {
        if (data) {
          this.loading = false;
          this.regSuccess = true;     
          this.router.navigate(['/']);     
        }
      },
      (err) => {
        if (err) {
          console.log(err);
          this.loading = false;
          this.errorMessage = 'Error : ' + err.status + ': ' + err.error;
        }
      }
    );
  }
}
