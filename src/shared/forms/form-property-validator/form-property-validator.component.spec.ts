import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPropertyValidatorComponent } from './form-property-validator.component';

describe('FormPropertyValidatorComponent', () => {
  let component: FormPropertyValidatorComponent;
  let fixture: ComponentFixture<FormPropertyValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPropertyValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPropertyValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
