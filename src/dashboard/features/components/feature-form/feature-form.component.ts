import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.scss']
})
export class FeatureFormComponent extends BaseFormComponent {

  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      priority: ['', Validators.required],
      images: [null],
    });
  }

  onError(event): void {
    this.err = event;
  }

}
