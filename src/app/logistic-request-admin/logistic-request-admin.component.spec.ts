import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticRequestAdminComponent } from './logistic-request-admin.component';

describe('LogisticRequestAdminComponent', () => {
  let component: LogisticRequestAdminComponent;
  let fixture: ComponentFixture<LogisticRequestAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticRequestAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticRequestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
