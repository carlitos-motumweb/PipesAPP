import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, ver: boolean): String {
    if (ver) {
      let salida = '';
      for (let i = 0; i < value.length; i++) {
        salida += '*';
      }
      return salida;
    } else {
      return value;
    }
  }

}
