import { TestBed } from '@angular/core/testing';

import { MockModulesService } from './mock-modules.service';

describe('MockModulesService', () => {
  let service: MockModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
