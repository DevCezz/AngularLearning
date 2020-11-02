import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Config, CONFIG } from '../model';
import { Contract } from './model';

@Injectable()
export class ContractService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getContracts() {
    return this.httpClient.get<Contract[]>(`${this.config.apiUrl}/constract`);
  }
}
