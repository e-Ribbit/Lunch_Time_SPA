import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPlaceOrderComponent } from './form-place-order/form-place-order.component';
import { FormCreateOrderComponent } from './form-create-order/form-create-order.component';
import { FormDataComponent } from './form-data/form-data.component';
import { MainListComponent } from './main-list/main-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
