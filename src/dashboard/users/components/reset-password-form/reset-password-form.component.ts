import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  selector: 'reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent extends BaseFormComponent {
  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
