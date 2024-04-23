import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrHeaderComponent } from './qr-header.component';

describe('QrHeaderComponent', () => {
  let component: QrHeaderComponent;
  let fixture: ComponentFixture<QrHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
