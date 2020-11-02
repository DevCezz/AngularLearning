import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractService } from './contract.service';

@NgModule({
  declarations: [ContractListComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ContractService
  ]
})
export class ContractsModule { }
