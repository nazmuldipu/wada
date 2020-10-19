import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSideNavbarComponent } from './dash-side-navbar.component';

describe('DashSideNavbarComponent', () => {
  let component: DashSideNavbarComponent;
  let fixture: ComponentFixture<DashSideNavbarComponent>;

  beforeEach(async(() => {
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
