import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeaveModalComponent } from './apply-leave-modal.component';

describe('ApplyLeaveModalComponent', () => {
  let component: ApplyLeaveModalComponent;
  let fixture: ComponentFixture<ApplyLeaveModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyLeaveModalComponent]
    });
    fixture = TestBed.createComponent(ApplyLeaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
