import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ContractsModule } from './contracts/contracts.module';
import { CustomersModule } from './customers/customers.module';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { CustomerBrowserComponent } from './customers/customer-browser/customer-browser.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { ContractListComponent } from './contracts/contract-list/contract-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomerBrowserComponent },
  { path: 'customers/add', component: CustomerAddComponent },
  { path: 'contracts', component: ContractListComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    ContractsModule,
    CustomersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
