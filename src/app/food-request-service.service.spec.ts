import { TestBed } from '@angular/core/testing';

import { FoodRequestServiceService } from './food-request-service.service';

describe('FoodRequestServiceService', () => {
  let service: FoodRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
