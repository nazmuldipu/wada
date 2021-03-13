import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FreeDeliveryComponent } from './free-delivery.component';

describe('FreeDeliveryComponent', () => {
  let component: FreeDeliveryComponent;
  let fixture: ComponentFixture<FreeDeliveryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
