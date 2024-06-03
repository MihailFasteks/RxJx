import { TestBed } from '@angular/core/testing';

import { T1ServiceService } from './t1-service.service';

describe('T1ServiceService', () => {
  let service: T1ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(T1ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
