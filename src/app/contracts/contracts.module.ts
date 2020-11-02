import { NgModule } from '@angular/core';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractService } from './contract.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contracts', component: ContractListComponent }
]

@NgModule({
  declarations: [ContractListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ContractService
  ],
  exports: [
    ContractListComponent
  ]
})
export class ContractsModule { }
