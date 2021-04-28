import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticDonationStatusComponent } from './logistic-donation-status.component';

describe('LogisticDonationStatusComponent', () => {
  let component: LogisticDonationStatusComponent;
  let fixture: ComponentFixture<LogisticDonationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticDonationStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticDonationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
