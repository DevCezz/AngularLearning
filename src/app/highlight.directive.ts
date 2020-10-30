import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {}

  highlight() {
    this.element.nativeElement.style.backgroundColor = "red";
  }

  cancelHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
