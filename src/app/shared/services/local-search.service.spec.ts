import { TestBed } from '@angular/core/testing';

import { LocalSearchService } from './local-search.service';

describe('LocalSearchService', () => {
  let service: LocalSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
