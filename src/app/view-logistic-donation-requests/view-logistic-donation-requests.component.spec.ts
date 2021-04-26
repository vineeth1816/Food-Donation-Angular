import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLogisticDonationRequestsComponent } from './view-logistic-donation-requests.component';

describe('ViewLogisticDonationRequestsComponent', () => {
  let component: ViewLogisticDonationRequestsComponent;
  let fixture: ComponentFixture<ViewLogisticDonationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLogisticDonationRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLogisticDonationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
