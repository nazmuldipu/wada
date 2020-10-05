import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBoxComponent } from './offer-box.component';

describe('OfferBoxComponent', () => {
  let component: OfferBoxComponent;
  let fixture: ComponentFixture<OfferBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
