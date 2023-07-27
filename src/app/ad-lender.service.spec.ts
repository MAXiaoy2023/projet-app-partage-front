import { TestBed } from '@angular/core/testing';

import { AdLenderService } from './ad-lender.service';

describe('AdLenderService', () => {
  let service: AdLenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdLenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
