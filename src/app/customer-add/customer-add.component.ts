import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

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

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

}
