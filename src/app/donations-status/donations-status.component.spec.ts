import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsStatusComponent } from './donations-status.component';

describe('DonationsStatusComponent', () => {
  let component: DonationsStatusComponent;
  let fixture: ComponentFixture<DonationsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
