import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseSideListComponent } from './warehouse-side-list.component';

describe('WarehouseSideListComponent', () => {
  let component: WarehouseSideListComponent;
  let fixture: ComponentFixture<WarehouseSideListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseSideListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseSideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
