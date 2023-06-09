import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PlaceOrderService } from '../services/place-order.service';

@Component({
  selector: 'app-form-place-order',
  templateUrl: './form-place-order.component.html',
  styleUrls: ['./form-place-order.component.scss'],
})
export class FormPlaceOrderComponent {
  title = 'PlaceOrderForm';
  placeOrderValue!: [];
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
    this.submitted = true;
    // console.log(this.placeOrder);
    this.placeOrderValue = this.placeOrder.value;
    this.placeOrder.submitPlaceOrder(this.placeOrderValue).subscribe((result: any)=> {
      console.log(result);
    })
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

}
