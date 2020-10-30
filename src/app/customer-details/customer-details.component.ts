import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
    '.isActive { text-decoration: underline; }',
    '.oddCategory { color: green; }'
  ]
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges {
  
  @Input()
  customer: Customer;
  
  @Output()
  shift = new EventEmitter<string>();
  
  nameColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;
  counter: number = 0;
  counterHandle: number;
  
  // utworzenie pola o takiej samej nazwie jak enum daje możliwość korzystania,
  // ze stałych switcha a nie z wartości liczbowych
  CustomerType = CustomerType;
  
  ngOnInit(): void {
    console.log(`init`);
  }
  
  ngOnDestroy(): void {
    console.log(`destroy`);
  }
  
  // Wywołuje się przed init
  ngOnChanges(changes: SimpleChanges): void {
    console.log('change');
  }

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }

  left() {
    this.shift.emit("left");
  }

  right() {
    this.shift.emit("right");
  }
}
