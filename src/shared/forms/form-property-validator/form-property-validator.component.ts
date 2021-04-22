import { Component, Input, OnChanges } from '@angular/core';

import { REQUIRED_MESSAGE } from '../constants/validation-message-list';
import { PATTERNS_LIST } from '../constants/validation-pattern-list';


@Component({
  selector: 'form-property-validator',
  templateUrl: './form-property-validator.component.html',
  styleUrls: ['./form-property-validator.component.scss']
})
export class FormPropertyValidatorComponent implements OnChanges {
  @Input() validationErrors: object | null = null;
  @Input() name: string = '';

  errorMessage: string | null = null;

  constructor() { }

  ngOnChanges(): void {
    this.errorMessage = this.getErrorMessage();
  }

  getErrorMessage(): string | null {
    const errors = this.validationErrors;
    if (errors) {
      return errors['required']
        ? this.name +
        REQUIRED_MESSAGE /** <----------- Data should be filled     */
        : errors['pattern']
          ? this.getPatternMessage(
            errors['pattern']['requiredPattern']
          ) /** <----------- Data should match pattern */
          : errors['minlength'] ? this.getMinLengthMessage(errors['minlength']) : null; /** <----------- Data is filled correctly  */
    }
    return null;
  }

  /**
   * Method 'getPatternMessage' finds proper pattern message form patterns list
   * and returns the message.
   */
  getPatternMessage(requiredPattern: string): string {
    return PATTERNS_LIST.filter((x) => x['PATTERN'] === requiredPattern)[0][
      'MESSAGE'
    ];
  }

  /*Method getMinLengthMessage find proper message for minmum length and return message*/
  getMinLengthMessage(errors): string {
    return 'Minimum length should be ' + errors['requiredLength'];
  }

}
