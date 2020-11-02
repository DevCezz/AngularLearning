import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Contract } from './model';

@Injectable()
export class ContractResolver implements Resolve<Contract> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Contract | Observable<Contract> | Promise<Contract> {
    throw new Error('Method not implemented.');
  }
}
