import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-place-order',
  templateUrl: './form-place-order.component.html',
  styleUrls: ['./form-place-order.component.scss'],
})
export class FormPlaceOrderComponent implements OnInit {
  title = 'PlaceOrderForm';
  name!: string;
  companion!: boolean;
  order!: string;
  price!: string;
  paid!: boolean;
  placeOrder!: FormGroup;

  @ViewChild('myForm') form!: NgForm;

  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.placeOrder);
    // this.name = this.form.value.
  }
  ngOnInit() {
    this.placeOrder = new FormGroup({
      name: new FormControl(null, Validators.required),
      companion: new FormControl(null),
      order: new FormControl(null, Validators.required),
      price: new FormControl(null),
      paid: new FormControl(null),
    });
  }
}
