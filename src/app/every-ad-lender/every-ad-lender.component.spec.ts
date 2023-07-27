import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryAdLenderComponent } from './every-ad-lender.component';

describe('EveryAdLenderComponent', () => {
  let component: EveryAdLenderComponent;
  let fixture: ComponentFixture<EveryAdLenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EveryAdLenderComponent]
    });
    fixture = TestBed.createComponent(EveryAdLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
