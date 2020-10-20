import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTransferFormComponent } from './inventory-transfer-form.component';

describe('InventoryTranferFormComponent', () => {
  let component: InventoryTransferFormComponent;
  let fixture: ComponentFixture<InventoryTransferFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTransferFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
