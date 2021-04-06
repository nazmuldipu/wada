import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { LABEL_LIST } from '../constants/form-labels-list';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.scss']
})
export class FormTextareaComponent implements OnInit, DoCheck {
  @Input() fieldId: string | null = null;
  @Input() control: AbstractControl | null = null;
  @Input() row = 3;
  @Input() col = true;
  @Input() showLabel = true;

  label: string = null;
  validator;
  validationErrors: object = null;

  ngOnInit(): void {
    this.label = LABEL_LIST[this.fieldId] ? LABEL_LIST[this.fieldId] : '';
  }

  ngDoCheck(): void {
    if (this.control.validator) {
      this.validator = this.control.validator({} as AbstractControl);
    }

    this.validationErrors =
      this.control.touched && this.control.invalid
        ? this.control.errors
        : null;
  }
}
