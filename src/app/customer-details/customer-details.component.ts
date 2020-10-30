import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
  ]
})
export class CustomerDetailsComponent {

  customer: Customer = null;

  nameColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;

}
