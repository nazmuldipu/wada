import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PHONE_NUMBER_PATTERN } from 'src/shared/forms/constants/validation-pattern-list';
import { BaseFormComponent } from './../../../shared/forms/base-form/base-form.component';

@Component({
  selector: 'phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.scss']
})
export class PhoneFormComponent extends BaseFormComponent {

  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(PHONE_NUMBER_PATTERN),
        ],
      ],
    });
  }

}
