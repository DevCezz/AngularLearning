import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    CustomerAddComponent,
    CustomerBrowserComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CustomerService
  ],
  exports: [
    CustomerAddComponent,
    CustomerBrowserComponent
  ]
})
export class CustomersModule { }
