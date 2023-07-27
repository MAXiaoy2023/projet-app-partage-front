import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLenderComponent } from './ad-lender.component';

describe('AdLenderComponent', () => {
  let component: AdLenderComponent;
  let fixture: ComponentFixture<AdLenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdLenderComponent]
    });
    fixture = TestBed.createComponent(AdLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
