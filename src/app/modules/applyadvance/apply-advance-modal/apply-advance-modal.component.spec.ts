import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAdvanceModalComponent } from './apply-advance-modal.component';

describe('ApplyAdvanceModalComponent', () => {
  let component: ApplyAdvanceModalComponent;
  let fixture: ComponentFixture<ApplyAdvanceModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyAdvanceModalComponent]
    });
    fixture = TestBed.createComponent(ApplyAdvanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
