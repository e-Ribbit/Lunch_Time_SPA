import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlaceOrderComponent } from './form-place-order.component';

describe('FormPlaceOrderComponent', () => {
  let component: FormPlaceOrderComponent;
  let fixture: ComponentFixture<FormPlaceOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPlaceOrderComponent]
    });
    fixture = TestBed.createComponent(FormPlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
