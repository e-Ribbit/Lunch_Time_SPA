import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

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
      requiredFields: new FormGroup({
        name: new FormControl(null, Validators.required),
        restaurant: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
      }),
      paypal: new FormControl(null),

    });
  }

  @ViewChild('createOrderForm') form!: NgForm;
  submitted = false;
  onSubmit(formCreateOrder: any) {
    this.submitted = true;
    console.log(this.createOrder);
    this.name = this.form.value.requiredFields.name;
    this.restaurant = this.form.value.requiredFields.restaurant;
    this.description = this.form.value.requiredFields.description;
    this.paypal = this.form.value.paypal;
  }
}
