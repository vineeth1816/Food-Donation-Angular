import { TestBed } from '@angular/core/testing';

import { AdminLogisticRequestService } from './admin-logistic-request.service';

describe('AdminLogisticRequestService', () => {
  let service: AdminLogisticRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLogisticRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
