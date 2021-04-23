import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappedRequestsComponent } from './mapped-requests.component';

describe('MappedRequestsComponent', () => {
  let component: MappedRequestsComponent;
  let fixture: ComponentFixture<MappedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappedRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
