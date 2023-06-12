import { Component, ViewChild } from '@angular/core';
import { NgForm, Validators, FormBuilder } from '@angular/forms';
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
  // paypalRegex: string = "https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"

  constructor(fB: FormBuilder, private formData: FormDataService) {
    this. createOrder = fB.group({
      requiredFields: fB.group({
      name: ["", Validators.required],
      restaurant: ["", Validators.required],
      description: ["", Validators.required]
    }),
      paypal: [""]
    })
  }

  @ViewChild('createOrderForm') form!: NgForm;
  submitted: boolean = false;
  onSubmit() {
    this.submitted = true;
    this.formDataValue = this.createOrder.value;
    this.formData.submitFormData(this.formDataValue).subscribe((result: any)=> {
      console.log(result);
    });
  }
}
