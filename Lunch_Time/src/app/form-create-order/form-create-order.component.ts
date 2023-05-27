import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-order',
  templateUrl: './form-create-order.component.html',
  styleUrls: ['./form-create-order.component.scss'],
})
export class FormCreateOrderComponent implements OnInit {
  title = 'CreateOrderForm';
  name!:string;
  restaurant!:string;
  paypal!:string;
  description!:string;

  createOrder!: FormGroup;

  ngOnInit() {
    this.createOrder = new FormGroup({
      name: new FormControl(null, Validators.required),
      restaurant: new FormControl(null, Validators.required),
      paypal: new FormControl(null),
      description: new FormControl(null, Validators.required),
    });
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.createOrder);
  }
}
