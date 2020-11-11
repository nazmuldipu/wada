import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSpecialOfferComponent } from './front-special-offer.component';

describe('FrontSpecialOfferComponent', () => {
  let component: FrontSpecialOfferComponent;
  let fixture: ComponentFixture<FrontSpecialOfferComponent>;

  beforeEach(async(() => {
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
