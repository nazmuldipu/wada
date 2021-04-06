import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'form-object-label',
  templateUrl: './form-object-label.component.html',
  styleUrls: ['./form-object-label.component.scss'],
})
export class FormObjectLabelComponent {
  @Input() label: string;
  @Input() name: string;
  @Input() showButton = true;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onChange = new EventEmitter<any>();

  handleChange(): void {
    this.onChange.emit();
  }
}
