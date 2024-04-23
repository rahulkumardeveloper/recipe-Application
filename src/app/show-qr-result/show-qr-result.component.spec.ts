import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQrResultComponent } from './show-qr-result.component';

describe('ShowQrResultComponent', () => {
  let component: ShowQrResultComponent;
  let fixture: ComponentFixture<ShowQrResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowQrResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQrResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
