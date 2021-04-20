import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nselect
  nombre: string = 'carla';
  genero: string = 'femenino';

  invitacion = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nplural

  clientes: string[] = ['maria', 'pedro', 'juan', 'carlos', 'carla'];
  clientesmap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiar_persona() {
    if (this.nombre === 'carlos' && this.genero === 'masculino') {
      this.nombre = 'carla';
      this.genero = 'femenino';
    } else {
      this.nombre = 'carlos';
      this.genero = 'masculino';
    }
  }

  borrar_cliente() {
    this.clientes.pop();
  }

  //keyvaluepipe

  persona = <any>{
    nombre: 'anderson',
    edad: '21',
    ubicacion: 'barranquilla',
  };

  //jsonpipe
  heroes = [
    {
      nombre: 'bruce wayne',
      edad: 40,
      poder: 'ser millonario',
      alterego: 'batman',
    },
    {
      nombre: 'clark kent',
      edad: 30,
      vuela: true,
      alterego: 'superman',
    },
  ];

  //Async pipe
  miobservable = interval(1000);

  promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fin de la promesa');
    }, 3500);
  });
}
