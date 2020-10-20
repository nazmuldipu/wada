import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/shared/models/user.model';

@Component({
  selector: 'reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent {
  @Input() user: User;

  @Output() changePass = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<Boolean>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    console.log("YES")
    if (this.form.valid) {
      const value = this.form.value;
      this.changePass.emit(value.password);
      this.form.reset();
    }
  }

  onCancel() {
    this.cancel.emit(true);
  }
}
