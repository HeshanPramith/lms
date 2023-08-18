import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedLeaveModalComponent } from './requested-leave-modal.component';

describe('RequestedLeaveModalComponent', () => {
  let component: RequestedLeaveModalComponent;
  let fixture: ComponentFixture<RequestedLeaveModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestedLeaveModalComponent]
    });
    fixture = TestBed.createComponent(RequestedLeaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
