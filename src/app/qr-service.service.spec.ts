import { TestBed } from '@angular/core/testing';

import { QrServiceService } from './qr-service.service';

describe('QrServiceService', () => {
  let service: QrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
