import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CONFIG, Config, Customer, CustomerType } from './model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(
    @Inject(CONFIG) private config: Config,
    private httpClient: HttpClient
  ) { }

  getCustomers() {
    return this.customers.slice(0, this.config.customerLimit);
  }
}
