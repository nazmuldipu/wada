import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCanceledComponent } from './pay-canceled.component';

describe('PayCanceledComponent', () => {
  let component: PayCanceledComponent;
  let fixture: ComponentFixture<PayCanceledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayCanceledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
