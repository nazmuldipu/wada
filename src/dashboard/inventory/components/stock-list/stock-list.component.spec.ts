import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductStockListComponent } from './stock-list.component';

describe('ProductStockListComponent', () => {
  let component: ProductStockListComponent;
  let fixture: ComponentFixture<ProductStockListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStockListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
