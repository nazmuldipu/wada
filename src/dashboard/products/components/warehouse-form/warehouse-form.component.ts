import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  selector: 'warehouse-form',
  templateUrl: './warehouse-form.component.html',
  styleUrls: ['./warehouse-form.component.scss'],
})
export class WarehouseFormComponent extends BaseFormComponent {
  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      priority: ['', Validators.required],
      latitude: ['0', Validators.required],
      longitude: ['0', Validators.required],
      address: ['', Validators.required],
    });
  }
}