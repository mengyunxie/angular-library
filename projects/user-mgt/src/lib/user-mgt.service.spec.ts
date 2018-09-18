import { TestBed, inject } from '@angular/core/testing';

import { UserMgtService } from './user-mgt.service';

describe('UserMgtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserMgtService]
    });
  });

  it('should be created', inject([UserMgtService], (service: UserMgtService) => {
    expect(service).toBeTruthy();
  }));
});
