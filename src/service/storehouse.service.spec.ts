import { TestBed } from '@angular/core/testing';

import { StorehouseService } from './storehouse.service';

describe('StorehouseService', () => {
  let service: StorehouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorehouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
