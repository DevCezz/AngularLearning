import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Config, CONFIG } from '../model';
import { Customer } from './model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(
    @Inject(CONFIG) private config: Config,
    private httpClient: HttpClient
  ) { }

  getCustomers() {
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`)
      .pipe(map(customers => customers.slice(0, this.config.customerLimit)));
  }

  createCustomer(customer: Customer) {
    return this.httpClient.post(`${this.config.apiUrl}/customers`, customer);
  }

  deleteCustomer(customer: Customer) {
    return this.httpClient.delete(`${this.config.apiUrl}/customers/${customer.id}`);
  }
}
