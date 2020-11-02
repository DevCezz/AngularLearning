import { NgModule } from '@angular/core';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractService } from './contract.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContractListComponent],
  imports: [
    SharedModule
  ],
  providers: [
    ContractService
  ],
  exports: [
    ContractListComponent
  ]
})
export class ContractsModule { }
