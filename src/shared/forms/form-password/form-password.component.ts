import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { LABEL_LIST } from '../constants/form-labels-list';

@Component({
  selector: 'form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.scss']
})
export class FormPasswordComponent implements OnInit {
  @Input() fieldId: string | null = null;
  @Input() control: AbstractControl | null = null;
  @Input() showLabel: boolean = true;
  
  label: string = null;
  validator;
  validationErrors: object = null;
  showPassword = false;

  constructor() { }

  ngOnInit() {
    this.label = LABEL_LIST[this.fieldId] ? LABEL_LIST[this.fieldId] : '';
  }

  ngDoCheck() {
    if (this.control['validator'])
      this.validator = this.control.validator({} as AbstractControl);

    this.validationErrors =
      this.control.touched && this.control.invalid
        ? this.control['errors']
        : null;
  }

}
