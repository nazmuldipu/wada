import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedOffersComponent } from './featured-offers.component';

describe('FeaturedOffersComponent', () => {
  let component: FeaturedOffersComponent;
  let fixture: ComponentFixture<FeaturedOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
