import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { Contract } from '../model';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styles: [
  ]
})
export class ContractListComponent implements OnInit {

  constracts: Contract[];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contractService.getContracts().subscribe(contracts => {
      this.constracts = contracts;
    });
  }
}
