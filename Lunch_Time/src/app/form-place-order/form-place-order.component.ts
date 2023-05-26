import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-place-order',
  templateUrl: './form-place-order.component.html',
  styleUrls: ['./form-place-order.component.scss'],
})
export class FormPlaceOrderComponent implements OnInit {
  title = 'PlaceOrderForm';
  placeOrder!: FormGroup;

  ngOnInit() {
    this.placeOrder = new FormGroup({
      name: new FormControl(null, Validators.required),
      companion: new FormControl(null),
      order: new FormControl(null, Validators.required),
      price: new FormControl(null),
      paid: new FormControl(null),
    });
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.placeOrder);
  }
}
