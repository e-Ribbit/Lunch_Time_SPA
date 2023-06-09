import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-form-create-order',
  templateUrl: './form-create-order.component.html',
  styleUrls: ['./form-create-order.component.scss'],
})
export class FormCreateOrderComponent {
  title = 'CreateOrderForm';
  formDataValue!: [];
  createOrder!: any;
  paypalRegex: string = "/^(?:https):\/\/paypal\.me\/.+ /gm"

  constructor(fB: FormBuilder, private formData: FormDataService) {
    this. createOrder = fB.group({
      requiredFields: fB.group({
      name: ["", Validators.required],
      restaurant: ["", Validators.required],
      description: ["", Validators.required]
    }),
      paypal: ["", Validators.pattern(this.paypalRegex)]
    })
  }

  @ViewChild('createOrderForm') form!: NgForm;
  submitted: boolean = false;
  onSubmit() {
    this.submitted = true;
    this.formDataValue = this.createOrder.value;
    // console.log(this.createOrder.value);
    this.formData.submitFormData(this.formDataValue).subscribe((result: any)=> {
      console.log(result);
    });
  }

  // get name () {
  //   return this.createOrder.get('requiredFields.name');
  // }

  // get restaurant () {
  //   return this.createOrder.get('requiredFields.restaurant');
  // }
  // get description () {
  //   return this.createOrder.get('requiredFields.description');
  // }

  // get paypal () {
  //   return this.createOrder.get('paypal');
  // }

}
