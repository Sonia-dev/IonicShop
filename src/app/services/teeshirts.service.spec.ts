import { TestBed } from '@angular/core/testing';

import { TeeshirtsService } from './teeshirts.service';

describe('TeeshirtsService', () => {
  let service: TeeshirtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeeshirtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
