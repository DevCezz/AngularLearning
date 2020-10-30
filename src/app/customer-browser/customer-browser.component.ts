import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../customer.service';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styles: [
  ]
})
export class CustomerBrowserComponent implements OnInit {

  @ViewChild('details')
  detailsComponent: CustomerDetailsComponent;

  customers: Customer[];
  customer: Customer = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response;
    });
  }

  changeColor() {
    this.detailsComponent.changeColor();
  }

  onShift(direction: string) {
    const idx = this.customers.indexOf(this.customer);
    
    if (idx > 0 && direction === 'left') {
      this.customer = this.customers[idx - 1];
    } else if (idx < this.customers.length - 1 && direction === 'right') {
      this.customer = this.customers[idx + 1];
    }
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer).subscribe();
  }
}
