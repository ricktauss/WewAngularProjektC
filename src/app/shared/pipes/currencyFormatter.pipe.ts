import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter', //currency pipe is already a default pipe from angular
  pure: true
})
export class CurrencyFormatterPipe implements PipeTransform {
  transform(
    value: number | undefined,
    currencyType: string,
    decimalPlaces: number
  ): string {
    let currencyChar = '';

    switch (currencyType) {
      case 'EUR':
        currencyChar = '€';
        break;
      case 'USD':
        currencyChar = '$';
        break;
    }
  //dezimalstellen
    return Math.round(value!*Math.pow(10,decimalPlaces))/Math.pow(10,decimalPlaces) + currencyChar;
  }
}
