import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service';
import { CONFIG, Config } from './model';
import { ToastrModule } from 'ngx-toastr';

const config: Config = {
  customerLimit: 10
}

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CustomerBrowserComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    CustomerService,
    { provide: CONFIG, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
