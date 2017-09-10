import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyformater'
})
export class CurrencyformaterPipe implements PipeTransform {
  output:string=null;
  transform(value: String, symbol: string): string {
    if(value!=null)
      this.output= value.split(symbol).join('');
    return this.output;
  }

}
