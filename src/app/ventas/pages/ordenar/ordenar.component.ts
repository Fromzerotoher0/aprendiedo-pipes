import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  enmayusculas: boolean = true;
  ordenar: string = '';
  letras() {
    if (this.enmayusculas == true) {
      this.enmayusculas = false;
    } else {
      this.enmayusculas = true;
    }
  }

  ////tabla
  heroes: Heroe[] = [
    {
      nombre: 'aquaman',
      vuela: false,
      color: 2,
    },
    {
      nombre: 'superman',
      vuela: true,
      color: 1,
    },
    {
      nombre: 'batman',
      vuela: false,
      color: 0,
    },
    {
      nombre: 'robin',
      vuela: false,
      color: 3,
    },
    {
      nombre: 'linterna verde',
      vuela: true,
      color: 2,
    },
  ];

  cambiar(orden: string) {
    if (this.ordenar == '') {
      return (this.ordenar = orden);
    } else {
      return (this.ordenar = '');
    }
  }
}
