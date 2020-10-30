import { Component } from '@angular/core';
import { Customer } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
  ]
})
export class CustomerDetailsComponent {

  customer: Customer;

  nameColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;

}
