import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBindingComponent } from './e-binding.component';

describe('EBindingComponent', () => {
  let component: EBindingComponent;
  let fixture: ComponentFixture<EBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EBindingComponent]
    });
    fixture = TestBed.createComponent(EBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
