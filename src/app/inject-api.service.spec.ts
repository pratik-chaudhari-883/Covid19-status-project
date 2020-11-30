import { TestBed } from '@angular/core/testing';

import { InjectApiService } from './inject-api.service';

describe('InjectApiService', () => {
  let service: InjectApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
