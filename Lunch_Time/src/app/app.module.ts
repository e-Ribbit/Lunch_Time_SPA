import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainListComponent } from './main-list/main-list.component';
import { ListEntryComponent } from './list-entry/list-entry.component';
import { FormPlaceOrderComponent } from './form-place-order/form-place-order.component';
import { FormCreateOrderComponent } from './form-create-order/form-create-order.component';
import { ListEntryDetailedComponent } from './list-entry-detailed/list-entry-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainListComponent,
    ListEntryComponent,
    FormPlaceOrderComponent,
    FormCreateOrderComponent,
    ListEntryDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
