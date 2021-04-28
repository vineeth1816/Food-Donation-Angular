import { TestBed } from '@angular/core/testing';

import { AddVehicleServiceService } from './add-vehicle-service.service';

describe('AddVehicleServiceService', () => {
  let service: AddVehicleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVehicleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
