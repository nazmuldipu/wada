import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { LABEL_LIST } from '../constants/form-labels-list';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit, DoCheck {
  @Input() fieldId: string | null = null;
  @Input() control: AbstractControl | null = null;
  @Input() type = 'text';
  @Input() maxlength: number = null;
  @Input() readonly = false;
  @Input() showLabel = true;
  @Input() col = true;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onChange = new EventEmitter<any>();

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

  onValueChange(event): void {
    this.onChange.emit(event);
  }
}
