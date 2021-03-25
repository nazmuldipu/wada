import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseAssignFormComponent } from './warehouse-assign-form.component';

describe('WarehouseAssignFormComponent', () => {
  let component: WarehouseAssignFormComponent;
  let fixture: ComponentFixture<WarehouseAssignFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseAssignFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseAssignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
