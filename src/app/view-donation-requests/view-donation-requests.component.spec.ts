import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDonationRequestsComponent } from './view-donation-requests.component';

describe('ViewDonationRequestsComponent', () => {
  let component: ViewDonationRequestsComponent;
  let fixture: ComponentFixture<ViewDonationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDonationRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDonationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
