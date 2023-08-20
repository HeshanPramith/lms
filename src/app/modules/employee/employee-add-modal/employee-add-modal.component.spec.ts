import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddModalComponent } from './employee-add-modal.component';

describe('EmployeeAddModalComponent', () => {
  let component: EmployeeAddModalComponent;
  let fixture: ComponentFixture<EmployeeAddModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAddModalComponent]
    });
    fixture = TestBed.createComponent(EmployeeAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
