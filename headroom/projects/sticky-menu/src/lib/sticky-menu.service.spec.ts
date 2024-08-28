import { TestBed } from '@angular/core/testing';

import { StickyMenuService } from './sticky-menu.service';

describe('StickyMenuService', () => {
  let service: StickyMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickyMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
