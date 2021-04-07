import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';
import { PHONE_NUMBER_PATTERN } from './../../../shared/forms/constants/validation-pattern-list';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss']
})
export class UserDetailsFormComponent extends BaseFormComponent {

  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(PHONE_NUMBER_PATTERN),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

}
