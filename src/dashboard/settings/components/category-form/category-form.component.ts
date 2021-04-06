import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent extends BaseFormComponent {
  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      priority: ['', Validators.required],
      image: [null],
    });
  }

  onError(event): void {
    this.err = event;
  }
}
