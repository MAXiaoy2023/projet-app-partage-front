import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdLenderComponent } from './form-ad-lender.component';

describe('FormAdLenderComponent', () => {
  let component: FormAdLenderComponent;
  let fixture: ComponentFixture<FormAdLenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAdLenderComponent]
    });
    fixture = TestBed.createComponent(FormAdLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
