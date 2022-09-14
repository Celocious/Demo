import { TestBed } from '@angular/core/testing';

import { VsService } from './vs.service';

describe('VsService', () => {
  let service: VsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
