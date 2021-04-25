import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptFormComponent } from './opt-form.component';

describe('OptFormComponent', () => {
  let component: OptFormComponent;
  let fixture: ComponentFixture<OptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
