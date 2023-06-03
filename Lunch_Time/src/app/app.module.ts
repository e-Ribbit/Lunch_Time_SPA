import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainListComponent } from './main-list/main-list.component';
import { FormPlaceOrderComponent } from './form-place-order/form-place-order.component';
import { FormCreateOrderComponent } from './form-create-order/form-create-order.component';
import { FormDataComponent } from './form-data/form-data.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EditFormDataComponent } from './edit-form-data/edit-form-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainListComponent,
    FormPlaceOrderComponent,
    FormCreateOrderComponent,
    FormDataComponent,
    LoginComponent,
    RegistrationComponent,
    EditFormDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
