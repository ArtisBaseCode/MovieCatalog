import { TestBed } from '@angular/core/testing';

import { SelectedcategoryService } from './selectedcategory.service';

describe('SelectedcategoryService', () => {
  let service: SelectedcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
