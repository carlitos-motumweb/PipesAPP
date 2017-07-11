import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string): string {
    value = value.toLowerCase();
    let nombres: string[] = value.split(' ');
    for (const i in nombres) {
      nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substring(1);
    }
    return nombres.join(' ');
  }

}
