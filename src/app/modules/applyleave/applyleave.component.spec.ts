import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyleaveComponent } from './applyleave.component';

describe('ApplyleaveComponent', () => {
  let component: ApplyleaveComponent;
  let fixture: ComponentFixture<ApplyleaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyleaveComponent]
    });
    fixture = TestBed.createComponent(ApplyleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
