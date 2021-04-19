import { TestBed } from '@angular/core/testing';

import { DonationrequestserviceService } from './donationrequestservice.service';

describe('DonationrequestserviceService', () => {
  let service: DonationrequestserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationrequestserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
