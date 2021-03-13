import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StorehouseComponent } from './storehouse.component';

describe('StorehouseComponent', () => {
  let component: StorehouseComponent;
  let fixture: ComponentFixture<StorehouseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StorehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
