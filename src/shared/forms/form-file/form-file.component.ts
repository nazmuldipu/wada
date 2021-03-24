import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { LABEL_LIST } from '../constants/form-labels-list';

@Component({
  selector: 'form-file',
  templateUrl: './form-file.component.html',
  styleUrls: ['./form-file.component.scss'],
})
export class FormFileComponent implements OnInit {
  @Input() fieldId: string | null = null;
  @Input() form: FormGroup;
  @Input() showLabel: boolean = true;
  @Input() maxFileCount: number = 1;
  @Input() col: boolean = true;
  @Input() hints: string = '';

  @Output() err = new EventEmitter<string>();

  label: string = null;

  constructor() {}

  ngOnInit(): void {
    this.label = LABEL_LIST[this.fieldId] ? LABEL_LIST[this.fieldId] : '';
  }

  uploadFile(event) {
    if (
      event.target.files.length > 0 &&
      event.target.files.length <= this.maxFileCount
    ) {
      this.form.patchValue({ [this.fieldId]: event.target.files });
    } else if (event.target.files.length > this.maxFileCount) {
      this.err.emit('Brand image limit is ' + this.maxFileCount);
    }
  }
}
