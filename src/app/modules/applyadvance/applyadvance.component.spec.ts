import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyadvanceComponent } from './applyadvance.component';

describe('ApplyadvanceComponent', () => {
  let component: ApplyadvanceComponent;
  let fixture: ComponentFixture<ApplyadvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyadvanceComponent]
    });
    fixture = TestBed.createComponent(ApplyadvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
