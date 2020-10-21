import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  message = '';
  errorMessage = '';
  loading = false;

  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async submit() {
    if (this.form.valid) {
      this.onClose();
      this.loading = true;
      try {
        const resp = await this.userService
          .changePassword(this.form.value)
          .toPromise();
        this.message = 'Password changed';
        this.form.reset();
        console.log(resp);
      } catch (error) {
        this.errorMessage = error;
      }
      this.loading = false;
    }
  }

  onClose() {
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }
}
