import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContractService } from './contract.service';
import { Contract } from './model';

@Injectable()
export class ContractResolver implements Resolve<Contract> {

  constructor(
    private contractService: ContractService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Contract | Observable<Contract> | Promise<Contract> {
    const id = parseInt(route.params['id']);
    return this.contractService.getContract(id);
  }
}
