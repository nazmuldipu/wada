import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FrontSpecialOfferComponent } from './front-special-offer.component';

describe('FrontSpecialOfferComponent', () => {
  let component: FrontSpecialOfferComponent;
  let fixture: ComponentFixture<FrontSpecialOfferComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontSpecialOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontSpecialOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
