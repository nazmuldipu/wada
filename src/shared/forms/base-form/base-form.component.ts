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
  selector: 'base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss'],
})
export class BaseFormComponent implements OnChanges {
  @Input() item: any;
  @Input() err: string = '';

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

  submit() {
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

  onDelete() {
    this.delete.emit(this.item._id);
    this.clean();
  }

  clean() {
    this.exists = false;
    this.item = null;
    this.err = '';
    this.form.reset();
  }
}
