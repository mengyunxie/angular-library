import { TestBed, inject } from '@angular/core/testing';

import { DeviceMgtService } from './device-mgt.service';

describe('DeviceMgtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceMgtService]
    });
  });

  it('should be created', inject([DeviceMgtService], (service: DeviceMgtService) => {
    expect(service).toBeTruthy();
  }));
});
