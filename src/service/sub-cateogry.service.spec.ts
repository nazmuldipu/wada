import { TestBed } from '@angular/core/testing';

import { SubCateogryService } from './sub-cateogry.service';

describe('SubCateogryService', () => {
  let service: SubCateogryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCateogryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
