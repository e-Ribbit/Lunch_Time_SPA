import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPlaceOrderComponent } from './form-place-order/form-place-order.component';
import { FormCreateOrderComponent } from './form-create-order/form-create-order.component';
import { FormDataComponent } from './form-data/form-data.component';
import { EditFormDataComponent } from './edit-form-data/edit-form-data.component';
import { MainListComponent } from './main-list/main-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'main-list/order-list/place-order', component: FormPlaceOrderComponent },
  { path: 'create-order', component: FormCreateOrderComponent },
  { path: 'form-data', component: FormDataComponent },
  { path: 'edit-form-data', component: EditFormDataComponent },
  { path: 'main-list', component: MainListComponent },
  { path: 'main-list/order-list', component: OrderListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
