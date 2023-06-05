import { TestBed } from '@angular/core/testing';

import { CommonsLibService } from './commons-lib.service';

describe('CommonsLibService', () => {
  let service: CommonsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
