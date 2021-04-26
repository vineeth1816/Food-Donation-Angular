import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateLogisticsComponent } from './donate-logistics.component';

describe('DonateLogisticsComponent', () => {
  let component: DonateLogisticsComponent;
  let fixture: ComponentFixture<DonateLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateLogisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
