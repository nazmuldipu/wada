import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent extends BaseFormComponent {
  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      priority: ['', Validators.required],
      image: [null],
    });
  }

  // uploadFile(event) {
  //   if (event.target.files.length > 0 && event.target.files.length < 5) {
  //     const files = event.target.files;
  //     this.form.patchValue({
  //       image: files,
  //     });
  //   } else if (event.target.files.length > 4) {
  //     this.err = 'Brand image limit is 4';
  //   }
  // }

  onError(event) {
    this.err = event;
  }
}
