import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashSideNavbarComponent } from './dash-side-navbar.component';

describe('DashSideNavbarComponent', () => {
  let component: DashSideNavbarComponent;
  let fixture: ComponentFixture<DashSideNavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashSideNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashSideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
