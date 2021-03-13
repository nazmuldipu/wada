import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductRelatedComponent } from './product-related.component';

describe('ProductRelatedComponent', () => {
  let component: ProductRelatedComponent;
  let fixture: ComponentFixture<ProductRelatedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
