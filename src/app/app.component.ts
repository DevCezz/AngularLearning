
import { Component } from '@angular/core';
import { Customer, CustomerType } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    '.isActive { text-decoration: underline; }',
    '.oddCategory { color: green; }'
  ]
})
export class AppComponent {
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
  customer: Customer = null;

  nameColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;
  // utworzenie pola o takiej samej nazwie jak enum daje możliwość korzystania,
  // ze stałych switcha a nie z wartości liczbowych
  CustomerType = CustomerType;

  constructor() {}

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }
}