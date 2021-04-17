import { TestBed } from '@angular/core/testing';

import { ForgotuseridServiceService } from './forgotuserid-service.service';

describe('ForgotuseridServiceService', () => {
  let service: ForgotuseridServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotuseridServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
