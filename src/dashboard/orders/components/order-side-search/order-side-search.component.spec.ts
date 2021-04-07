import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSideSearchComponent } from './order-side-search.component';

describe('OrderSideSearchComponent', () => {
  let component: OrderSideSearchComponent;
  let fixture: ComponentFixture<OrderSideSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSideSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
