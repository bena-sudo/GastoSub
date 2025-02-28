import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyEur',
})
export class CurrencyEurPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) {
      return '';
    }
    const formatter = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(value);
  }
}
