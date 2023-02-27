import { TestBed } from '@angular/core/testing';

import { MockAPIServiceService } from './mock-apiservice.service';

describe('MockAPIServiceService', () => {
  let service: MockAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
