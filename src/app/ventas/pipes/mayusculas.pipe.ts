import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula',
})
export class mayusculaspipe implements PipeTransform {
  transform(valor: string, enmayusculas: boolean = true): string {
    /* if (enmayusculas == false) {
      return valor.toUpperCase();
    } else {
      return valor.toLowerCase();
    }
  }*/
    return enmayusculas ? valor.toUpperCase() : valor.toLowerCase();
  }
}
