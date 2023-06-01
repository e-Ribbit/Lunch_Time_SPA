import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-create-order',
  templateUrl: './form-create-order.component.html',
  styleUrls: ['./form-create-order.component.scss'],
})
export class FormCreateOrderComponent {
  title = 'CreateOrderForm';
  // name!:string;
  // restaurant!:string;
  // paypal!:string;
  // description!:string;
  createOrder!: any;
  paypalRegex: string = "/^(?:https):\/\/paypal\.me\/.+ /gm"

  constructor(fB: FormBuilder) {
    this. createOrder = fB.group({
      requiredFields: fB.group({
      name: ["", Validators.required],
      restaurant: ["", Validators.required],
      description: ["", Validators.required]
    }),
      paypal: ["", Validators.pattern(this.paypalRegex)]
    })


    // this.createOrder = new FormGroup({
    //   requiredFields: new FormGroup({
    //     name: new FormControl(null, Validators.required),
    //     restaurant: new FormControl(null, Validators.required),
    //     description: new FormControl(null, Validators.required),
    //   }),
    //   paypal: new FormControl(null, Validators.pattern(this.paypalRegex)),

    // });
  }

  @ViewChild('createOrderForm') form!: NgForm;
  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.createOrder);
    // this.name = this.form.value.requiredFields.name;
    // this.restaurant = this.form.value.requiredFields.restaurant;
    // this.description = this.form.value.requiredFields.description;
    // this.paypal = this.form.value.paypal;
  }

  get name () {
    return this.createOrder.get('requiredFields.name');
  }

  get restaurant () {
    return this.createOrder.get('requiredFields.restaurant');
  }
  get description () {
    return this.createOrder.get('requiredFields.description');
  }

  get paypal () {
    return this.createOrder.get('paypal');
  }

}
