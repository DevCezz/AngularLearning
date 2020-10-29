import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [style.color]="nameColor" [class.isActive]="isActive">{{ name.toUpperCase() }}</h1>
    <img [src]="photoUrl" />
    <br />
    <button (click)="this.isActive = !this.isActive" type="button">Przełącz podkreślenie</button>
  `,
  styles: [
    '.isActive { text-decoration: underline; }'
  ]
})
export class AppComponent {
  name: string = "Jan Kowalski";
  nameColor: string = "blue";
  isActive: boolean = true;
  photoUrl: string = "assets/images/customer.png";

  constructor() {}
}