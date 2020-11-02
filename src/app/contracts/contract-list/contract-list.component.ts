import { Component, OnInit } from '@angular/core';
import { Contract } from '../model';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styles: [
  ]
})
export class ContractListComponent implements OnInit {

  constracts: Contract[];

  constructor() { }

  ngOnInit(): void {
  }

}
