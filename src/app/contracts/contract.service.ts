import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Config, CONFIG } from '../model';

@Injectable()
export class ContractService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }
}
