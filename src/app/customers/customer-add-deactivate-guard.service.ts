import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerAddComponent } from './customer-add/customer-add.component';

@Injectable()
export class CustomerAddDeactivateGuard implements CanDeactivate<CustomerAddComponent> {

  constructor() { }
  
  canDeactivate(component: CustomerAddComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
}
