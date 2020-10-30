import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styles: [
  ]
})
export class CustomerAddComponent implements OnInit {

  name: string;
  age: number;
  type: CustomerType;

  CustomerType: CustomerType;

  constructor() { }

  ngOnInit(): void {
  }

}
