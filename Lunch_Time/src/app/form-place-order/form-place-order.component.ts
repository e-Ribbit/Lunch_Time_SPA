import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-place-order',
  templateUrl: './form-place-order.component.html',
  styleUrls: ['./form-place-order.component.scss'],
})
export class FormPlaceOrderComponent {
  // title = 'PlaceOrderForm';
  // name!: string;
  // companion!: boolean;
  // order!: string;
  // price!: string;
  // paid!: boolean;
  // placeOrder!: FormGroup;
  placeOrder!: any;


  constructor(fB: FormBuilder) {
    this.placeOrder = fB.group({
      requiredFields: fB.group({
        name: ["", Validators.required],
        order: ["", Validators.required],
      }),
        companion: [null],
        price: [""],
        paid: [null]
      })
  }
  @ViewChild('placeOrderForm') form!: NgForm;
  
  submitted = false;
  onSubmit() {
    // this.submitted = true;
    console.log(this.placeOrder);
    // this.name = this.form.value.requiredFields.name;
    // this.order = this.form.value.requiredFields.order;
    // this.companion = this.form.value.companion;
    // this.price = this.form.value.price;
    // this.paid = this.form.value.paid;
  }

  get name () {
    return this.placeOrder.get('requiredFields.name');
  }

  get order () {
    return this.placeOrder.get('requiredFields.order');
  }
  get companion () {
    return this.placeOrder.get('companion');
  }

  get price () {
    return this.placeOrder.get('price');
  }

  get paid () {
    return this.placeOrder.get('paid');
  }

  setDefaultValue(){
     
  }
}
