import {TestBed} from '@angular/core/testing';

import {NbpHttpApiService} from './nbp-http-api.service';

describe('NbpHttpApiService', () => {
  let service: NbpHttpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbpHttpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
