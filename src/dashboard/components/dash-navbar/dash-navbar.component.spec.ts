import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashNavbarComponent } from './dash-navbar.component';

describe('DashNavbarComponent', () => {
  let component: DashNavbarComponent;
  let fixture: ComponentFixture<DashNavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
