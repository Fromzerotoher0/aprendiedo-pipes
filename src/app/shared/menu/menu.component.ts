import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'textos y fechas',
            icon: 'pi  pi-align-left',
            routerLink: ' ',
          },
          {
            label: 'Numeros',
            icon: 'pi  pi-percentage',
            routerLink: 'numeros',
          },
          {
            label: 'no comunes',
            icon: 'pi  pi-star',
            routerLink: 'no-comunes',
          },
        ],
      },
      {
        label: 'pipes  personalizados',
        icon: 'pi  pi-star-o',
        routerLink: 'ordenar',
      },
    ];
  }
}
