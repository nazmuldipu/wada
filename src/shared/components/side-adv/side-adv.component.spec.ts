import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SideAdvComponent } from './side-adv.component';

describe('SideAdvComponent', () => {
  let component: SideAdvComponent;
  let fixture: ComponentFixture<SideAdvComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
