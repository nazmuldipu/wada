import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDetails } from 'src/shared/models/product-details.model';

@Component({
  selector: 'product-details-form',
  templateUrl: './product-details-form.component.html',
  styleUrls: ['./product-details-form.component.scss']
})
export class ProductDetailsFormComponent implements OnChanges {
  @Input() productId: string;

  @Output() create = new EventEmitter<ProductDetails>();

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.productId) {
      this.form.patchValue({ productId: this.productId })
    }
  }

  createForm() {
    this.form = this.fb.group({
      productId: ['', Validators.required],
      items: this.fb.array([this.createProductDetailsItem()])
    });
  }

  createProductDetailsItem() {
    return this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      points: this.fb.array([''])
    });
  }

  getProductDetailsItems(form) {
    return (form.get('items') as FormArray).controls;
  }

  addPoints(i) {
    const control = <FormArray>this.form.get('items').get([i]).get('points');
    control.push(new FormControl(''));
  }

  submit() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

}

