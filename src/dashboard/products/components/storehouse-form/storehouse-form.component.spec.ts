import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorehouseFormComponent } from './storehouse-form.component';

describe('StorehouseFormComponent', () => {
  let component: StorehouseFormComponent;
  let fixture: ComponentFixture<StorehouseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorehouseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorehouseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
