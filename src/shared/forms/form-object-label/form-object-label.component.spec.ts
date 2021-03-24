import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormObjectLabelComponent } from './form-object-label.component';

describe('FormObjectLabelComponent', () => {
  let component: FormObjectLabelComponent;
  let fixture: ComponentFixture<FormObjectLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormObjectLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormObjectLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
