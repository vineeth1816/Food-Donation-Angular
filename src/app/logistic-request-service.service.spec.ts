import { TestBed } from '@angular/core/testing';

import { LogisticRequestServiceService } from './logistic-request-service.service';

describe('LogisticRequestServiceService', () => {
  let service: LogisticRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogisticRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
