import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
    '.isActive { text-decoration: underline; }',
    '.oddCategory { color: green; }'
  ]
})
export class CustomerDetailsComponent implements OnInit, OnDestroy {
  
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
    this.counterHandle = window.setInterval(() => { 
      this.counter++;
      console.log('conuter++');
    }, 1000);
    console.log(`timer ${this.counterHandle} started`);
  }

  ngOnDestroy(): void {
    clearInterval(this.counterHandle)
    console.log(`destroy ${this.counterHandle} timer, time elapsed ${this.counter} s`);
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
