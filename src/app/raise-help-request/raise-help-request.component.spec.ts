import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseHelpRequestComponent } from './raise-help-request.component';

describe('RaiseHelpRequestComponent', () => {
  let component: RaiseHelpRequestComponent;
  let fixture: ComponentFixture<RaiseHelpRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseHelpRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseHelpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
