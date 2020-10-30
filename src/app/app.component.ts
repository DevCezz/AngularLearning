
import { Component } from '@angular/core';
import { Customer, CustomerType } from './model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h1 [style.color]="nameColor" [class.isActive]="isActive">
            {{ customer.name.toUpperCase() }}
            <ng-container [ngSwitch]="customer.type">
              <ng-container *ngSwitchCase="CustomerType.Standard">*</ng-container>
              <ng-container *ngSwitchCase="CustomerType.Premium">**</ng-container>
              <ng-container *ngSwitchCase="CustomerType.VIP">***</ng-container>
              <ng-container *ngSwitchDefault>nieznany typ</ng-container>
            </ng-container>
          </h1>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-7">
              <p>{{ customer.description }}</p>
              <p>Wiek: {{ customer.age }}</p>
              <p>Adres: {{ customer.address.street }} {{ customer.address.houseNumber }}, {{ customer.address.city }}</p>
              <ul>
                <li *ngFor="let category of customer.categories">{{ category }}</li>
              </ul>
              <button class="btn btn-primary" (click)="this.isActive = !this.isActive" type="button">Przełącz podkreślenie</button>
              <button class="btn btn-primary" (click)="changeColor()" type="button">Przełącz kolor</button>
            </div>
            <div class="col-sm-5">
              <div *ngIf="showPhoto; then photo else noPhoto"></div>
              <ng-template #photo>
                <img [src]="customer.photoUrl" />
              </ng-template>
              <ng-template #noPhoto>
                <p>Zdjęcie ukryte</p>
              </ng-template>
              <div class="form-check">
                <label><input type="checkbox" [(ngModel)]="showPhoto" class="form-check-input"> Pokaż zdjęcie</label>
              </div>
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
        "duży obrót"
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
  customer: Customer = this.customers[0];

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