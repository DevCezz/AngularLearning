import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name.toUpperCase() }}</h1>
  `,
  styles: []
})
export class AppComponent {
  name: string = "Jan Kowalski";

  constructor() {}
}