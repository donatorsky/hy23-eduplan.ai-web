import { TestBed } from '@angular/core/testing';

import { SuggesterService } from './suggester.service';

describe('SuggesterService', () => {
  let service: SuggesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
