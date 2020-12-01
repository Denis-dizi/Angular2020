import { TestBed } from '@angular/core/testing';

import { AccessManagmentGuard } from './access-managment.guard';

describe('AccessManagmentGuard', () => {
  let guard: AccessManagmentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessManagmentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
