import { NgModule } from '@angular/core';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractService } from './contract.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { ContractResolver } from './contract-resolver.service';

const routes: Routes = [
  { 
    path: 'contracts/:id', 
    component: ContractDetailsComponent,
    resolve: {
      contract: ContractResolver
    }
  },
  { path: 'contracts', component: ContractListComponent }
]

@NgModule({
  declarations: [ContractListComponent, ContractDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ContractService,
    ContractResolver
  ],
  exports: [
    ContractListComponent
  ]
})
export class ContractsModule { }
