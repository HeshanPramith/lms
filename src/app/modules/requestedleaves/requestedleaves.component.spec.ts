import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedleavesComponent } from './requestedleaves.component';

describe('RequestedleavesComponent', () => {
  let component: RequestedleavesComponent;
  let fixture: ComponentFixture<RequestedleavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestedleavesComponent]
    });
    fixture = TestBed.createComponent(RequestedleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
