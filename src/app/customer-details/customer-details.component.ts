import { Component } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
    '.isActive { text-decoration: underline; }',
    '.oddCategory { color: green; }'
  ]
})
export class CustomerDetailsComponent {

  customer: Customer;

  nameColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;

  // utworzenie pola o takiej samej nazwie jak enum daje możliwość korzystania,
  // ze stałych switcha a nie z wartości liczbowych
  CustomerType = CustomerType;

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }

}
