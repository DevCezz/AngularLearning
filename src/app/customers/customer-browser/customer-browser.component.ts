import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/core/message.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../customer.service';
import { Customer } from '../model';

@Component({
  selector: 'cus-customer-browser',
  templateUrl: './customer-browser.component.html',
  styles: [
  ]
})
export class CustomerBrowserComponent implements OnInit {

  @ViewChild('details')
  detailsComponent: CustomerDetailsComponent;

  customers: Customer[];
  customer: Customer = null;

  constructor(
    private customerService: CustomerService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.refresh();
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
    this.customerService.deleteCustomer(this.customer).subscribe(
      () => { 
        this.messageService.success(`Udało się usunąć klienta ${this.customer.name}`);
        this.customer = null;
        this.refresh();
      }
    );
  }

  private refresh() {
    this.customerService.getCustomers().subscribe(
      response => this.customers = response
    );
  }
}
