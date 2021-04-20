import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[], ordenar: string = 'sin valor'): Heroe[] {
    if (ordenar == 'color') {
      heroes = heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      return heroes;
    } else if (ordenar == 'vuelo') {
      heroes = heroes.sort((a, b) => (a.vuela > b.vuela ? -1 : 1));
      return heroes;
    } else {
      heroes = heroes.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
      return heroes;
    }
  }
}
