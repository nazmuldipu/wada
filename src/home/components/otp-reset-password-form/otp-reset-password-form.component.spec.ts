import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpResetPasswordFormComponent } from './otp-reset-password-form.component';

describe('OtpResetPasswordFormComponent', () => {
  let component: OtpResetPasswordFormComponent;
  let fixture: ComponentFixture<OtpResetPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpResetPasswordFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpResetPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
