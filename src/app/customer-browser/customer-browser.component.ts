import { Component } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styles: [
  ]
})
export class CustomerBrowserComponent {

  customer: Customer = null;

  customers: Customer[] = [
    {
      name: "Jan Kowalski",
      photoUrl: "assets/images/customer.png",
      age: 43,
      description: "Very important client",
      address: {
        street: "Zielona",
        houseNumber: 5,
        city: "Warszawa"
      },
      type: CustomerType.Premium,
      categories: [
        "zagraniczny",
        "mikroprzedsiębiorstwo",
        "duży obrót",
        "branża malarska"
      ]
    },
    {
      name: "Maria Stankiewicz",
      photoUrl: "assets/images/customer.png",
      age: 31,
      description: "Important client",
      address: {
        street: "Dolna",
        houseNumber: 2,
        city: "Kraków"
      },
      type: CustomerType.Standard,
      categories: [
        "osoba prywatna"
      ]
    },
    {
      name: "Tadeusz Morawiecki",
      photoUrl: "assets/images/customer.png",
      age: 71,
      description: "Long-term client",
      address: {
        street: "Urbańska",
        houseNumber: 10,
        city: "Łódź"
      },
      type: CustomerType.Premium,
      categories: [
        "emeryt",
        "tylko gotówka",
        "branża krawiecka"
      ]
    }
  ];

  onShift(direction: string) {
    const idx = this.customers.indexOf(this.customer);
    
    if (idx > 0 && direction === 'left') {
      this.customer = this.customers[idx - 1];
    } else if (idx < this.customers.length - 1 && direction === 'right') {
      this.customer = this.customers[idx + 1];
    }
  }
}
