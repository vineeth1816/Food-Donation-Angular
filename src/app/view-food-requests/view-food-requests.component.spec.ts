import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodRequestsComponent } from './view-food-requests.component';

describe('ViewFoodRequestsComponent', () => {
  let component: ViewFoodRequestsComponent;
  let fixture: ComponentFixture<ViewFoodRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFoodRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFoodRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
