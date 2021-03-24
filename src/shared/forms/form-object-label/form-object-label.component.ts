import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-object-label',
  templateUrl: './form-object-label.component.html',
  styleUrls: ['./form-object-label.component.scss'],
})
export class FormObjectLabelComponent {
  @Input() label: string;
  @Input() name: string;

  @Output() onChange = new EventEmitter<any>();

  handleChange() {
    this.onChange.emit();
  }
}
