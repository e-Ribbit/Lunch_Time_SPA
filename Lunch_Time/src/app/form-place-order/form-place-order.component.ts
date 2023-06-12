import { Component, ViewChild } from '@angular/core';
import { NgForm, Validators, FormBuilder } from '@angular/forms';
import { PlaceOrderService } from '../services/place-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-place-order',
  templateUrl: './form-place-order.component.html',
  styleUrls: ['./form-place-order.component.scss'],
})
export class FormPlaceOrderComponent {
  title = 'PlaceOrderForm';
  placeOrderValue!: [];
  placeOrder!: any;


  constructor(fB: FormBuilder, private placeOrderData: PlaceOrderService, private router: Router) {
    this.placeOrder = fB.group({
        name: ["", Validators.required],
        order: ["", Validators.required],
        companion: [null],
        price: [""],
        paid: [null]
      })
  }
  @ViewChild('placeOrderForm') form!: NgForm;
  
  submitted: boolean = false;
  onSubmit() {
    this.submitted = true;
    this.placeOrderValue = this.placeOrder.value;
    this.placeOrderData.submitPlaceOrder(this.placeOrderValue).subscribe((result: any)=> {
      console.log(result);
      this.placeOrder.reset();
      this.router.navigateByUrl('main-list/order-list');
    })
  }
}
