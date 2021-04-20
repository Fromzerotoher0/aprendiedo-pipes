import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreupper: string = 'ANDERSON';
  nombrelower: string = 'anderson';
  nombrecompleto: string = 'AnDErson sAnChez';
  fecha: Date = new Date(); // el dia de hoy
}
