
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

  customer: Customer = null;

  constructor() {}

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }
}