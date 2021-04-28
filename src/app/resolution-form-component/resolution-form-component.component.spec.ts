import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionFormComponentComponent } from './resolution-form-component.component';

describe('ResolutionFormComponentComponent', () => {
  let component: ResolutionFormComponentComponent;
  let fixture: ComponentFixture<ResolutionFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
