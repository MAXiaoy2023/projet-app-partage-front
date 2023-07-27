import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLenderItemComponent } from './ad-lender-item.component';

describe('AdLenderItemComponent', () => {
  let component: AdLenderItemComponent;
  let fixture: ComponentFixture<AdLenderItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdLenderItemComponent]
    });
    fixture = TestBed.createComponent(AdLenderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
