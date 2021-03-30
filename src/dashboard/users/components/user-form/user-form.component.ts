import { Component, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';
import { PHONE_NUMBER_PATTERN } from 'src/shared/forms/constants/validation-pattern-list';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent extends BaseFormComponent {
  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(PHONE_NUMBER_PATTERN)],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
