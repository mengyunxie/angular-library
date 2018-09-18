import { TestBed, inject } from '@angular/core/testing';

import { ProductMgtService } from './product-mgt.service';

describe('ProductMgtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductMgtService]
    });
  });

  it('should be created', inject([ProductMgtService], (service: ProductMgtService) => {
    expect(service).toBeTruthy();
  }));
});
