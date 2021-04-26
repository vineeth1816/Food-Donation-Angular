import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerFoodRequestFormComponent } from './volunteer-food-request-form.component';

describe('VolunteerFoodRequestFormComponent', () => {
  let component: VolunteerFoodRequestFormComponent;
  let fixture: ComponentFixture<VolunteerFoodRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerFoodRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerFoodRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
