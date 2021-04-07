import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss'],
})
export class BaseFormComponent implements OnChanges {
  @Input() item: any;
  @Input() err = '';

  @Output() create = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<string>();

  form: FormGroup;
  exists = false;
  mouseoverShifting = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item && this.item != null) {
      this.form.reset();
      this.exists = true;
      this.form.patchValue(this.item);
    }
  }

  submit(): void {
    this.err = '';
    if (this.form.valid) {
      if (this.exists) {
        this.update.emit(this.form.value);
      } else {
        this.create.emit(this.form.value);
      }
      this.clean();
    }
  }

  onDelete(): void {
    this.delete.emit(this.item._id);
    this.clean();
  }

  clean(): void {
    this.exists = false;
    this.item = null;
    this.err = '';
    this.form.reset();
  }
}
