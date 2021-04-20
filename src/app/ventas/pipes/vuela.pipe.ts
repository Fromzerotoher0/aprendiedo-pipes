import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela',
})
export class vuelapipe implements PipeTransform {
  transform(valor: boolean): string {
    if (valor == true) {
      return 'vuela';
    } else {
      return 'no vuela';
    }
  }
}
