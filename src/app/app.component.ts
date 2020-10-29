import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  selector: 'app-root',
  template: `
    <h1 [style.color]="nameColor" [class.isActive]="isActive">{{ customer.name.toUpperCase() }}</h1>
    <img [src]="customer.photoUrl" />
    <br />
    <button (click)="this.isActive = !this.isActive" type="button">Przełącz podkreślenie</button>
    <button (click)="changeColor()" type="button">Przełącz kolor</button>
    <br />
    <input type="text" [(ngModel)]="customer.name" [ngModelOptions]="{ updateOn: 'blur' }" />
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