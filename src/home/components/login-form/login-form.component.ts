import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Output() create = new EventEmitter;

  form: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;
      this.create.emit(value);
      this.form.reset();
    }
  }
}
