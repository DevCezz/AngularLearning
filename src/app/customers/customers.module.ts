import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { CapitalizePipe } from '../capitalize.pipe';

@NgModule({
  declarations: [
    CustomerAddComponent,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
    HighlightDirective,
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
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
