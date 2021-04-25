import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  selector: 'otp-reset-password-form',
  templateUrl: './otp-reset-password-form.component.html',
  styleUrls: ['./otp-reset-password-form.component.scss']
})
export class OtpResetPasswordFormComponent extends BaseFormComponent {

  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      otp: ['', Validators.required,],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

}
