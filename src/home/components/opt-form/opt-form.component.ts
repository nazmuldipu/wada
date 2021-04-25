import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  selector: 'opt-form',
  templateUrl: './opt-form.component.html',
  styleUrls: ['./opt-form.component.scss']
})
export class OptFormComponent extends BaseFormComponent {

  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      otp: ['', Validators.required,],
    });
  }

}
