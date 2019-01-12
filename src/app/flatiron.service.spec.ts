import { TestBed, inject } from '@angular/core/testing';

import { FlatironService } from './flatiron.service';

describe('FlatironService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlatironService]
    });
  });

  it('should be created', inject([FlatironService], (service: FlatironService) => {
    expect(service).toBeTruthy();
  }));
});
