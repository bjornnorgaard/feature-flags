import { TestBed } from '@angular/core/testing';

import { ConfigCatService } from './config-cat.service';

describe('ConfigCatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigCatService = TestBed.get(ConfigCatService);
    expect(service).toBeTruthy();
  });
});
