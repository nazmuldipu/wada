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
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
})
export class FormSelectComponent implements OnInit, DoCheck {
  @Input() fieldId: string | null = null;
  @Input() control: AbstractControl | null = null;
  @Input() options: [] = [];
  @Input() showLabel: boolean = true;
  @Input() col: boolean = true;

  @Output() select = new EventEmitter<any>();

  label: string = null;
  validator;
  validationErrors: object = null;

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

  onChange(event) {
    this.select.emit(event.target.value);
  }
}
