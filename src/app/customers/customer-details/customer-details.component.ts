import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService } from 'src/app/core/message.service';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'cus-customer-details',
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
  
  // utworzenie pola o takiej samej nazwie jak enum daje możliwość korzystania,
  // ze stałych switcha a nie z wartości liczbowych
  CustomerType = CustomerType;
  
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    console.log(`init`);
  }
  
  ngOnDestroy(): void {
    console.log(`destroy`);
  }
  
  // Wywołuje się przed init
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.customer.firstChange) {
      console.log(`change from ${changes.customer.previousValue.name} to ${changes.customer.currentValue.name}`);
    }
  }

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
    this.messageService.success('Udało się zmienić kolor!');
  }

  left() {
    this.shift.emit("left");
  }

  right() {
    this.shift.emit("right");
  }
}
