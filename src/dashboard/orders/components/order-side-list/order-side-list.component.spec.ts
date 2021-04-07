import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSideListComponent } from './order-side-list.component';

describe('OrderSideListComponent', () => {
  let component: OrderSideListComponent;
  let fixture: ComponentFixture<OrderSideListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSideListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
