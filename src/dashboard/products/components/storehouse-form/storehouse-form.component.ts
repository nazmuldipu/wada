import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storehouse } from 'src/models/storehouse.model';

@Component({
  selector: 'storehouse-form',
  templateUrl: './storehouse-form.component.html',
  styleUrls: ['./storehouse-form.component.scss']
})
export class StorehouseFormComponent implements OnChanges {
  @Input() storehouse: Storehouse;

  @Output() create = new EventEmitter<Storehouse>();
  @Output() update = new EventEmitter<Storehouse>();
  @Output() cancel = new EventEmitter<Boolean>();

  form: FormGroup;

  exists = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.storehouse && this.storehouse._id) {
      this.exists = true;
      const value = {
        ...this.storehouse
      };
      this.form.patchValue(value);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      storekeeper_number: ['', [Validators.required, Validators.pattern('^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$'),],
      ],
      address: ['', Validators.required],
      priority: [0, [Validators.required, Validators.min(0)]],
      latitude: '',
      longitude: '',
      description: ''
    });
  }

  submit() {
    if (this.form.valid) {
      if (this.exists) {
        this.update.emit(this.form.value);
      } else {
        this.create.emit(this.form.value);
      }
      this.exists = false;
      this.form.reset();
    }
  }

  onCancel() {
    this.cancel.emit(true);
  }

}
