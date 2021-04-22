import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  selector: 'user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent extends BaseFormComponent {
  @Output() close = new EventEmitter();
  
  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]],
      phone: [''],
      cus_add1: ['', Validators.required],
      cus_add2: [''],
      cus_city: ['', Validators.required],
      cus_country: ['Bangladesh', Validators.required],
      deliveryInstruction: [''],
    });
  }

  onClose(){
    this.form.reset();
    this.close.emit();
  }

}
