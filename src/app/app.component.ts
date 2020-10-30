
import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h1 [style.color]="nameColor" [class.isActive]="isActive">{{ customer.name.toUpperCase() }}</h1>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-7">
              <p>{{ customer.description }}</p>
              <p>Wiek: {{ customer.age }}</p>
              <p>Adres: {{ customer.address.street }} {{ customer.address.houseNumber }}, {{ customer.address.city }}</p>
              <button class="btn btn-primary" (click)="this.isActive = !this.isActive" type="button">Przełącz podkreślenie</button>
              <button class="btn btn-primary" (click)="changeColor()" type="button">Przełącz kolor</button>
            </div>
            <div class="col-sm-5">
              <img [src]="customer.photoUrl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    '.isActive { text-decoration: underline; }'
  ]
})
export class AppComponent {
  customer: Customer = {
    name: "Jan Kowalski",
    photoUrl: "assets/images/customer.png",
    age: 43,
    description: "Very important client",
    address: {
      street: "Zielona",
      houseNumber: 5,
      city: "Warszawa"
    }
  };

  nameColor: string = "blue";
  isActive: boolean = true;

  constructor() {}

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }
}