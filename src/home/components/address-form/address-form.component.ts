import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentMethods } from 'src/shared/data/data';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent extends BaseFormComponent {

  paymentMethods = PaymentMethods;

  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      cus_add1: ['Bhuigor, Fatullah', Validators.required],
      cus_add2: ['Narayanganj 1401'],
      cus_city: ['Dhaka', Validators.required],
      cus_country: ['Bangladesh', Validators.required],
      deliveryInstruction: ['onece you are in bhuigor, call me.'],
      paymentMethod: ['', Validators.required],
    });
  }

  onPaymentMethod(method): void {
    this.form.patchValue({ paymentMethod: method });
  }

}
