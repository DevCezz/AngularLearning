import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, firstLetters?: number): string {
    const limit = firstLetters || 1;
    return `${value.slice(0, limit).toUpperCase()}${value.slice(limit).toLowerCase()}`;
  }
}
