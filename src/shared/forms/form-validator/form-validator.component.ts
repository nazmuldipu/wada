import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { LABEL_LIST } from '../constants/form-labels-list';
import { PATTERN_MESSAGE, REQUIRED_MESSAGE } from '../constants/validation-message-list';

@Component({
  selector: 'form-validator',
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.scss']
})
export class FormValidatorComponent implements OnChanges {
  @Input() form: FormGroup | null = null;

  errorMessage: string | null = null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.errorMessage = this.getFormValidationErrors();
  }

  getFormValidationErrors() {
    let errors = '';
    Object.keys(this.form.controls).forEach((key) => {
      const controlErrors: ValidationErrors = this.form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          errors +=
            LABEL_LIST[key] +
            (keyError == 'required'
              ? REQUIRED_MESSAGE
              : keyError == 'pattern'
              ? PATTERN_MESSAGE
              : keyError == 'maxlength'
              ? ' : Max Length error'
              :  keyError == 'minlength' ? ' : Min Length error': 'Unknown') +
            '; ';
        });
      }
    });
    return errors;
  }
}
