import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSubCategoryTableComponent } from './sub-sub-category-table.component';

describe('SubSubCategoryTableComponent', () => {
  let component: SubSubCategoryTableComponent;
  let fixture: ComponentFixture<SubSubCategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSubCategoryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSubCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
